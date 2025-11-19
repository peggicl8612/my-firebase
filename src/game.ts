import { db, auth } from '../firebase'
import { doc, setDoc, getDoc, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
const VALID_CHOICES = ['rock', 'paper', 'scissors'] as const 

// 判斷勝負
export function judgeGame(player1Choice: string, player2Choice: string) {
    if (player1Choice === player2Choice) return 'draw'
    
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    }

    return winConditions[player1Choice as keyof typeof winConditions] === player2Choice ? 'player1' : 'player2'
}

// 建立遊戲房間
export async function createGameRoom(roomId: string) {
    try {
        const user = auth.currentUser
        if (!user) throw new Error('User not authenticated')
        
        const gameRef = doc(db, 'games', roomId)
        await setDoc(gameRef, {
            player1: {
                userId: user.uid,
                userName: user.displayName || '匿名1',
                choice: null,
                ready: false,
            },
            player2: {
                userId: null,
                userName: null,
                choice: null,
                ready: false,
            },
            status: 'waiting',
            winner: null,
            createAt: serverTimestamp(),
        })

        return gameRef
    } catch (error) {
        console.error('建立遊戲房間失敗', error)
    }
}

// 加入遊戲房間
export async function joinGameRoom(roomId: string) {
    try {
        const user = auth.currentUser
        if (!user) throw new Error('User not authenticated')
        
        const gameRef = doc(db, 'games', roomId)
        const gameSnap = await getDoc(gameRef)

        if (!gameSnap.exists()) {
            throw new Error('Game room not found')
        }

        const gameData = gameSnap.data()
        
        // 檢查是否已經在房間中
        if (gameData.player1.userId === user.uid || gameData.player2.userId === user.uid) {
            ElMessage({
                message: '你已在此房間號',
                type: 'warning',
                customClass: 'custom-message',
            })
            return gameRef
        }

        if (gameData.player2.userId) {
            throw new Error('Game room is full')
        }

        await setDoc(gameRef, {
            player2: {
                userId: user.uid,
                userName: user.displayName || '匿名2',
                choice: null,
                ready: false,
            },
            status: 'playing',
        }, { merge: true })
        return gameRef
    } catch (error) {
        console.error('加入遊戲房間失敗', error)
        /* 若房間號不存在 */
             ElMessage({
                message: '房間號不存在',
                type: 'error',
                customClass: 'custom-message',
        })
    }
}

// 出拳
export async function makeChoice(roomId: string, choice: string | null) {
    try {
        const user = auth.currentUser
        if (!user) throw new Error('User not authenticated')
        
        // 驗證選擇是否有效 (如果是 null 則代表取消選擇)
        if (choice !== null && !VALID_CHOICES.includes(choice as any)) {
            throw new Error('Invalid choice')
        }
        
        const gameRef = doc(db, 'games', roomId)
        const gameSnap = await getDoc(gameRef)
        
        if (!gameSnap.exists()) {
            throw new Error('Game room not found')
        }
        
        const gameData = gameSnap.data()
        if (!gameData) {
            throw new Error('Game data not available')
        }

        const isPlayer1 = gameData.player1.userId === user.uid
        const playerKey = isPlayer1 ? 'player1' : 'player2'

        await setDoc(gameRef, {
            [playerKey]: {
                ...gameData[playerKey],
                choice: choice,
                ready: choice !== null,
            }
        }, { merge: true })
        
        // 如果是取消選擇，不需要判斷勝負
        if (choice === null) return

        // 重新獲取最新的遊戲數據來判斷是否兩人都已出拳
        const updatedGameSnap = await getDoc(gameRef)
        if (updatedGameSnap.exists()) {
            const updatedGameData = updatedGameSnap.data()
            if (updatedGameData && updatedGameData.player1.choice && updatedGameData.player2.choice) {
                const result = judgeGame(updatedGameData.player1.choice, updatedGameData.player2.choice)
                await setDoc(gameRef, {
                    status: 'finished',
                    winner: result,
                }, { merge: true })
            }
        }
     } catch (error) {
        console.error('出拳失敗', error)
        return 'error'
        }
}  
    
// 監聽遊戲狀態
export function listenToGame(roomId: string, callback: (game: any) => void) {
    const gameRef = doc(db, 'games', roomId)

    return onSnapshot(gameRef, (snapshot) => {
        if (snapshot.exists()) {
            callback({
                id: snapshot.id,
                ...snapshot.data()
            })
        }
    })
}

// 重置遊戲
export async function resetGame(roomId: string) {
    try {
        const gameRef = doc(db, 'games', roomId)
        await setDoc(gameRef, {
            player1: {
                choice: null,
                ready: false
            },
            player2: {
                choice: null,
                ready: false
            },
            status: 'playing',
            winner: null
        }, { merge: true })
    } catch (error) {
        console.error('重置遊戲失敗', error)
    }
}

// 離開遊戲房間
export async function leaveGameRoom(roomId: string) {
    try {
        const user = auth.currentUser
        if (!user) return

        const gameRef = doc(db, 'games', roomId)
        const gameSnap = await getDoc(gameRef)
        
        if (!gameSnap.exists()) return

        const gameData = gameSnap.data()
        
        // 定義空玩家結構
        const emptyPlayer = {
            userId: null,
            userName: null,
            choice: null,
            ready: false
        }

        if (gameData.player1.userId === user.uid) {
            // 玩家1 (房主) 離開
            if (gameData.player2.userId) {
                // 如果有玩家2，玩家2 晉升為 玩家1
                await setDoc(gameRef, {
                    player1: {
                        ...gameData.player2,
                        ready: false, // 重置準備狀態
                        choice: null  // 重置選擇
                    },
                    player2: emptyPlayer,
                    status: 'waiting'
                }, { merge: true })
            } else {
                // 只有玩家1，直接清空
                await setDoc(gameRef, {
                    player1: emptyPlayer,
                    status: 'waiting'
                }, { merge: true })
            }
        } else if (gameData.player2.userId === user.uid) {
            // 玩家2 離開
            await setDoc(gameRef, {
                player2: emptyPlayer,
                status: 'waiting'
            }, { merge: true })
        }
    } catch (error) {
        console.error('離開遊戲房間失敗', error)
    }
}