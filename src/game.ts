import { db, auth } from '../firebase'
import { doc, setDoc, getDoc, onSnapshot, serverTimestamp } from 'firebase/firestore'

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
                userName: user.displayName || '匿名',
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
        if (gameData.player2.userId) {
            throw new Error('Game room is full')
        }

        await setDoc(gameRef, {
            player2: {
                userId: user.uid,
                userName: user.displayName || '玩家2',
                choice: null,
                ready: false,
            },
            status: 'playing',
        }, { merge: true })
        return gameRef
    } catch (error) {
        console.error('加入遊戲房間失敗', error)
    }
}

// 出拳
export async function makeChoice(roomId: string, choice: string) {
    try {
        const user = auth.currentUser
        if (!user) throw new Error('User not authenticated')
        
        // 驗證選擇是否有效
        if (!VALID_CHOICES.includes(choice as any)) {
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
                ready: true,
            }
        }, { merge: true })
        
        if (gameData.player1.choice && gameData.player2.choice) {
            const result = judgeGame(gameData.player1.choice, gameData.player2.choice)
            await setDoc(gameRef, {
                status: 'finished',
                winner: result,
            }, { merge: true })
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