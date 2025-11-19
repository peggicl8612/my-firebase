// src/main.js
import { loginAnonymously, onAuthChange, loginWithEmail, registerWithEmail, logout } from './auth'
import { sendMessage, listenToMessages, Message } from './chat'
import { createGameRoom, joinGameRoom, makeChoice, listenToGame, resetGame, leaveGameRoom } from './game'
import { auth } from '../firebase'
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'

let unsubscribeChat: (() => void) | null = null
let unsubscribeGame: (() => void) | null = null
let currentRoomId: string | null = null

// 強制在頁面載入時登出，確保顯示登入頁面
logout().catch(console.error)

 
// 重置頁面狀態的函數
function resetPageState() {
    // 清空聊天室
    const messagesDiv = document.getElementById('messages')
    if (messagesDiv) messagesDiv.innerHTML = ''
    
    // 清空房間號
    const roomIdInput = document.getElementById('room-id') as HTMLInputElement
    if (roomIdInput) roomIdInput.value = ''
    
    // 清空玩家狀態欄
    const statusDiv = document.getElementById('game-status')
    if (statusDiv) statusDiv.innerHTML = ''
    
    // 重置按鈕樣式
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.classList.remove('selected', 'opponent-choice')
    })
    
    // 隱藏選項區域
    const choicesDiv = document.getElementById('choices')
    if (choicesDiv) choicesDiv.style.display = 'none'

    // 清空登入表單
    const emailInput = document.getElementById('email') as HTMLInputElement
    const passwordInput = document.getElementById('password') as HTMLInputElement
    const usernameInput = document.getElementById('username') as HTMLInputElement
    if (emailInput) emailInput.value = ''
    if (passwordInput) passwordInput.value = ''
    if (usernameInput) usernameInput.value = ''
    
    // 隱藏遊戲結果遮罩
    const overlay = document.getElementById('game-result-overlay')
    if (overlay) overlay.style.display = 'none'

    // 隱藏引導頁面
    const step1 = document.getElementById('onboarding-step-1')
    const step2 = document.getElementById('onboarding-step-2')
    if (step1) step1.style.display = 'none'
    if (step2) step2.style.display = 'none'
}

// 認證狀態監聽
onAuthChange((user) => {
    if (user) {
        const loginSection = document.getElementById('login-section')
        const userInfo = document.getElementById('user-info')
        if (loginSection) loginSection.style.display = 'none'
        
        // 顯示引導頁面 Step 1
        const step1 = document.getElementById('onboarding-step-1')
        if (step1) {
            step1.style.display = 'flex'
            const nicknameInput = document.getElementById('onboarding-nickname') as HTMLInputElement
            if (nicknameInput && user.displayName) {
                nicknameInput.value = user.displayName
            }
        }

        // 使用 auth.currentUser 獲取最新的用戶信息（包括更新後的 displayName）
        const currentUser = auth.currentUser
        if (userInfo && currentUser) {
            userInfo.textContent = `使用者${currentUser.displayName || '匿名用戶'}`
        }
        // resetPageState() // 暫時不重置，因為要顯示引導頁
        initGame()
        initChat(new Date())
    } else {
        const loginSection = document.getElementById('login-section')
        const gameSection = document.getElementById('game-section')
        if (loginSection) loginSection.style.display = 'block'
        if (gameSection) gameSection.style.display = 'none'
        
        if (unsubscribeChat) {
            unsubscribeChat()
            unsubscribeChat = null
        }
        if (unsubscribeGame) {
            unsubscribeGame()
            unsubscribeGame = null
        }
        currentRoomId = null
        resetPageState()
    }
})

// 匿名登入
const anonymousLoginBtn = document.getElementById('anonymous-login')
if (anonymousLoginBtn) {
    anonymousLoginBtn.addEventListener('click', async () => {
        try {
            await loginAnonymously()
        } catch (error) {
            console.error('匿名登入失敗:', error)
            alert('匿名登入失敗，請確認 Firebase Console 中已啟用匿名認證功能')
        }
    })
}

// Email 登入
const loginBtn = document.getElementById('login-btn')
const usernameInput = document.getElementById('username') as HTMLInputElement
const emailInput = document.getElementById('email') as HTMLInputElement
const passwordInput = document.getElementById('password') as HTMLInputElement
 
if (loginBtn && emailInput && passwordInput) {
    loginBtn.addEventListener('click', async () => {
        const email = emailInput.value
        const password = passwordInput.value
        if (email && password) {
            try {
                await loginWithEmail(email, password)
                // 如果有輸入新的暱稱，更新它
                const userName = usernameInput?.value
                if (userName && auth.currentUser) {
                    // 這裡需要引入 updateProfile
                    const { updateProfile } = await import('firebase/auth')
                    await updateProfile(auth.currentUser, { displayName: userName })
                }
            } catch (error) {
                console.error('登入失敗:', error)
                // 錯誤類型處理
                if ((error as any).code === 'auth/invalid-credential') {
                    ElMessage({
                        message: '無效的 Email 或密碼',
                        type: 'error',
                        customClass: 'custom-message'
                    })
                } else if ((error as any).code === 'auth/user-not-found') {
                    ElMessage({
                        message: '找不到此 Email 的帳號',
                        type: 'error',
                        customClass: 'custom-message'
                    })
                } else if ((error as any).code === 'auth/wrong-password') {
                    ElMessage({
                        message: '密碼錯誤',
                        type: 'error',
                        customClass: 'custom-message'
                    })
                } else {
                    ElMessage({
                        message: '登入失敗，請檢查 Email 和密碼',
                        type: 'error',
                        customClass: 'custom-message'
                    })
                }
             }
        } else {
            ElMessage({
                message: '請輸入信箱和密碼',
                type: 'error',
                customClass: 'custom-message'
            })
        }
    })
}

// 註冊
const registerBtn = document.getElementById('register-btn')
if (registerBtn && emailInput && passwordInput) {
    registerBtn.addEventListener('click', async () => {
        const email = emailInput.value
        const password = passwordInput.value
        const userName = usernameInput?.value || undefined
        if (email && password) {
            try {
                await registerWithEmail(email, password, userName)
                // 等待一下確保 updateProfile 完成，然後重置頁面狀態
                setTimeout(() => {
                    resetPageState()
                    // 更新用戶名顯示（使用最新的 auth.currentUser）
                    const currentUser = auth.currentUser
                    const userInfo = document.getElementById('user-info')
                    if (userInfo && currentUser) {
                        userInfo.textContent = `使用者${currentUser.displayName || userName || '匿名用戶'}`
                    }
                }, 100)
                alert('註冊成功！')
            } catch (error) {
                console.error('註冊失敗:', error)
                // 錯誤類型處理
                if ((error as any).code === 'auth/email-already-in-use') {
                    ElMessage.warning({
                        message: '此 Email 已經被使用',
                        type: 'warning',
                        customClass: 'custom-message'
                     })
                } else if ((error as any).code === 'auth/invalid-email') {
                    ElMessage.error({
                        message: '無效的 Email 格式',
                        type: 'error',
                        customClass: 'custom-message'
                    })
                } else if ((error as any).code === 'auth/weak-password') {
                    ElMessage.error({
                        message: '密碼太弱，請使用更強的密碼',
                        type: 'error',
                        customClass: 'custom-message'
                    })
                } else {
                    ElMessage.error({
                        message: '請檢查 Email 格式和密碼長度（至少 6 個字元）',
                        type: 'error',
                        customClass: 'custom-message'
                    })
                }
             }
        } else {
            ElMessage({
                message: '請輸入信箱和密碼',
                type: 'error',
                customClass: 'custom-message'
            })
        }
    })
}

// 登出
const logoutBtn = document.getElementById('logout-btn')
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        try {
            // 如果在遊戲中，先離開房間
            if (currentRoomId) {
                await leaveGameRoom(currentRoomId)
                currentRoomId = null
            }
            await logout()
        } catch (error) {
            console.error('登出失敗:', error)
        }
    })
}

// 聊天室初始化
function initChat(startTime?: Date) {
    const messagesDiv = document.getElementById('messages')
    if (!messagesDiv) return
    
    // 清除舊的監聽器
    if (unsubscribeChat) {
        unsubscribeChat()
        unsubscribeChat = null
    }

    // 監聽訊息
    unsubscribeChat = listenToMessages((messages: Message[]) => {
        messagesDiv.innerHTML = ''
        const currentUser = auth.currentUser
        
        messages.forEach((msg: Message) => {
            const msgDiv = document.createElement('div')
            const isSelf = currentUser && msg.userId === currentUser.uid
            msgDiv.className = `message ${isSelf ? 'self' : 'other'}`
            
            // 處理 timestamp：如果是 Timestamp 類型則使用 toDate()，否則直接使用
            const timestamp = msg.timestamp && typeof (msg.timestamp as any).toDate === 'function' 
                ? (msg.timestamp as any).toDate() 
                : msg.timestamp
            const timeStr = timestamp ? new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''
            
            msgDiv.innerHTML = `
                <strong>${msg.userName}</strong>
                <span>${msg.text}</span>
                <small>${timeStr}</small>
            `
            messagesDiv.appendChild(msgDiv)
        })
        messagesDiv.scrollTop = messagesDiv.scrollHeight
    }, startTime)
    
    // 發送訊息
    const sendBtn = document.getElementById('send-btn')
    const messageText = document.getElementById('message-text') as HTMLInputElement
    if (sendBtn && messageText) {
        // 使用 onclick 避免重複綁定
        sendBtn.onclick = async () => {
            const text = messageText.value
            if (text.trim()) {
                await sendMessage(text)
                messageText.value = ''
            }
        }
        
        // 按 Enter 發送
        messageText.onkeydown = async (e) => {
            if (e.key === 'Enter') {
                const text = messageText.value
                if (text.trim()) {
                    await sendMessage(text)
                    messageText.value = ''
                }
            }
        }
    }
}

// 遊戲初始化
function initGame() {
    // 建立房間
    const createRoomBtn = document.getElementById('create-room')
    const roomIdInput = document.getElementById('room-id') as HTMLInputElement
    const copyRoomBtn = document.getElementById('copy-room-btn')
    
    if (copyRoomBtn && roomIdInput) {
        copyRoomBtn.onclick = () => {
            if (roomIdInput.value) {
                navigator.clipboard.writeText(roomIdInput.value)
                ElMessage.success({
                    message: '房間 ID 已複製',
                    offset: window.innerHeight - 100,
                    customClass: 'bottom-message'
                })
            }
        }
    }

    // 引導頁面邏輯
    const step1NextBtn = document.getElementById('step-1-next')
    const step2CreateBtn = document.getElementById('step-2-create')
    const step2JoinBtn = document.getElementById('step-2-join')
    const step1 = document.getElementById('onboarding-step-1')
    const step2 = document.getElementById('onboarding-step-2')
    const gameSection = document.getElementById('game-section')
    const nicknameInput = document.getElementById('onboarding-nickname') as HTMLInputElement

    if (step1NextBtn) {
        step1NextBtn.onclick = async () => {
            const nickname = nicknameInput.value.trim()
            if (nickname) {
                if (auth.currentUser) {
                    const { updateProfile } = await import('firebase/auth')
                    await updateProfile(auth.currentUser, { displayName: nickname })
                    // 更新歡迎訊息
                    const userInfo = document.getElementById('user-info')
                    if (userInfo) userInfo.textContent = `使用者：${nickname}`
                }
                if (step1) step1.style.display = 'none'
                if (step2) step2.style.display = 'flex'
            } else {
                ElMessage({
                    message: '請輸入暱稱',
                    type: 'warning',
                    offset: window.innerHeight - 100,
                    customClass: 'bottom-message'
                })
            }
        }
    }

    if (step2CreateBtn) {
        step2CreateBtn.onclick = async () => {
            if (step2) step2.style.display = 'none'
            if (gameSection) gameSection.style.display = 'block'
            
            // 觸發建立房間邏輯
            const roomId = `room-${Date.now()}`
            await createGameRoom(roomId)
            currentRoomId = roomId
            if (roomIdInput) roomIdInput.value = roomId
            
            // 顯示複製按鈕
            if (copyRoomBtn) copyRoomBtn.style.display = 'flex'

            // 顯示選項
            const choicesDiv = document.getElementById('choices')
            if (choicesDiv) choicesDiv.style.display = 'block'
            
            // 監聽遊戲狀態
            if (unsubscribeGame) unsubscribeGame()
            unsubscribeGame = listenToGame(roomId, (gameData) => {
                updateGameUI(gameData)
            })
        }
    }

    if (step2JoinBtn) {
        step2JoinBtn.onclick = async () => {
            const step2RoomIdInput = document.getElementById('step-2-room-id') as HTMLInputElement
            const roomId = step2RoomIdInput?.value.trim()
            
            if (roomId) {
                try {
                    await joinGameRoom(roomId)
                    currentRoomId = roomId
                    
                    if (step2) step2.style.display = 'none'
                    if (gameSection) gameSection.style.display = 'block'
                    
                    // 隱藏複製按鈕
                    if (copyRoomBtn) copyRoomBtn.style.display = 'none'
                    
                    // 顯示選項
                    const choicesDiv = document.getElementById('choices')
                    if (choicesDiv) choicesDiv.style.display = 'block'
                    
                    // 監聽遊戲狀態
                    if (unsubscribeGame) unsubscribeGame()
                    unsubscribeGame = listenToGame(roomId, (gameData) => {
                        updateGameUI(gameData)
                    })
                } catch (error) {
                    // 錯誤處理已在 joinGameRoom 中包含 (如房間不存在)
                    console.error(error)
                }
            } else {
                ElMessage({
                    message: '請輸入房間 ID',
                    type: 'warning',
                    offset: window.innerHeight - 100,
                    customClass: 'bottom-message'
                })
            }
        }
    }

    if (createRoomBtn && roomIdInput) {
        createRoomBtn.onclick = async () => {
            const roomId = `room-${Date.now()}`
            await createGameRoom(roomId)
            currentRoomId = roomId
            roomIdInput.value = roomId
            
            // 顯示複製按鈕
            if (copyRoomBtn) copyRoomBtn.style.display = 'flex'
            
            // 顯示選項
            const choicesDiv = document.getElementById('choices')
            if (choicesDiv) choicesDiv.style.display = 'block'
            
            // 監聽遊戲狀態
            if (unsubscribeGame) unsubscribeGame()
            unsubscribeGame = listenToGame(roomId, (gameData) => {
                updateGameUI(gameData)
            })
        }
    }
    
    // 加入房間
    const joinRoomBtn = document.getElementById('join-room')
    if (joinRoomBtn && roomIdInput) {
        joinRoomBtn.onclick = async () => {
            const roomId = roomIdInput.value
            await joinGameRoom(roomId)
            currentRoomId = roomId
            
            // 顯示選項
            const choicesDiv = document.getElementById('choices')
            if (choicesDiv) choicesDiv.style.display = 'block'
            
            // 監聽遊戲狀態
            if (unsubscribeGame) unsubscribeGame()
            unsubscribeGame = listenToGame(roomId, (gameData) => {
                updateGameUI(gameData)
            })
        }
    }
    
    // 出拳
    document.querySelectorAll('.choice-btn').forEach(btn => {
        (btn as HTMLElement).onclick = async () => {
            if (currentRoomId) {
                const choice = (btn as HTMLElement).dataset.choice
                if (choice) {
                    // 判斷是否已經選中，如果是則取消
                    const isSelected = btn.classList.contains('selected')
                    
                    // 更新按鈕樣式
                    document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'))
                    
                    if (!isSelected) {
                        btn.classList.add('selected')
                        await makeChoice(currentRoomId, choice)
                    } else {
                        // 取消選擇
                        await makeChoice(currentRoomId, null)
                    }
                }
            }
        }
    })
}

function updateGameUI(gameData: any) {
    const statusDiv = document.getElementById('game-status')
    if (statusDiv) {
        const currentUser = auth.currentUser
        if (!currentUser) return
        
        const isPlayer1 = gameData.player1.userId === currentUser.uid
        const myChoice = isPlayer1 ? gameData.player1.choice : gameData.player2.choice
        const opponentChoice = isPlayer1 ? gameData.player2.choice : gameData.player1.choice
        
        // 重置按鈕樣式
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.classList.remove('selected', 'opponent-choice')
            // 如果遊戲已結束，顯示對手的選擇
            if (gameData.status === 'finished' && opponentChoice) {
                const btnChoice = (btn as HTMLElement).dataset.choice
                if (btnChoice === opponentChoice) {
                    btn.classList.add('opponent-choice')
                }
            }
        })
        
        // 如果已出拳，保持選中狀態
        if (myChoice) {
            const myChoiceBtn = document.querySelector(`[data-choice="${myChoice}"]`)
            if (myChoiceBtn) {
                myChoiceBtn.classList.add('selected')
            }
        }
        
        let resultText = ''
        const overlay = document.getElementById('game-result-overlay')
        const resultMessage = document.getElementById('result-message')
        const overlayPlayAgainBtn = document.getElementById('overlay-play-again-btn')
        
        if (gameData.status === 'finished') {
            if (gameData.winner === 'draw') {
                resultText = '<p style="color: orange; font-weight: bold;">平手！</p>'
            } else if ((gameData.winner === 'player1' && isPlayer1) || (gameData.winner === 'player2' && !isPlayer1)) {
                resultText = '<p style="color: green; font-weight: bold;">🎉 你贏了！</p>'
            } else {
                resultText = '<p style="color: red; font-weight: bold;">😢 你輸了</p>'
            }
            
            // 顯示遮罩
            if (overlay && resultMessage) {
                resultMessage.innerHTML = resultText
                overlay.style.display = 'flex'
            }
        } else {
            // 隱藏遮罩
            if (overlay) overlay.style.display = 'none'
        }
        
        // 綁定遮罩上的再來一局按鈕
        if (overlayPlayAgainBtn) {
            overlayPlayAgainBtn.onclick = async () => {
                if (gameData.id) {
                    await resetGame(gameData.id)
                    if (overlay) overlay.style.display = 'none'
                }
            }
        }
        
        // 檢查對手是否離開
        const opponent = isPlayer1 ? gameData.player2 : gameData.player1
        if (gameData.status !== 'waiting' && !opponent.userId) {
             ElMessage({
                message: '遊戲已結束，對手已離開',
                type: 'warning',
                duration: 3000,
                offset: window.innerHeight - 100, // 嘗試顯示在下方
                customClass: 'bottom-message'
            })
            // 隱藏遮罩
            if (overlay) overlay.style.display = 'none'
            
            alert('遊戲已結束，對手已離開')
            // 重置回初始狀態
            resetPageState()
            return
        }
        
        // 處理匿名玩家顯示
        let p1Name = gameData.player1.userName || '等待中'
        let p2Name = gameData.player2.userName || '等待玩家'
        
        if (p1Name === '匿名' && p2Name === '匿名') {
            p2Name = '匿名2'
        }

        statusDiv.innerHTML = `
            <p>玩家1 (房主): ${p1Name} ${gameData.player1.choice ? '已出拳' : '等待中'}</p>
            <p>玩家2: ${p2Name} ${gameData.player2.choice ? '已出拳' : '等待中'}</p>
            ${resultText}
        `
    }
}