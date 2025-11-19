// src/main.js
import { loginAnonymously, onAuthChange, loginWithEmail, registerWithEmail, logout } from './auth'
import { sendMessage, listenToMessages, Message } from './chat'
import { createGameRoom, joinGameRoom, makeChoice, listenToGame } from './game'
import { ElMessage } from 'element-plus'

 
// 認證狀態監聽
onAuthChange((user) => {
    if (user) {
        const loginSection = document.getElementById('login-section')
        const gameSection = document.getElementById('game-section')
        const userInfo = document.getElementById('user-info')
        if (loginSection) loginSection.style.display = 'none'
        if (gameSection) gameSection.style.display = 'block'
        if (userInfo) userInfo.textContent = `歡迎，${user.displayName || '匿名用戶'}`
        initGame()
        initChat()
    } else {
        const loginSection = document.getElementById('login-section')
        const gameSection = document.getElementById('game-section')
        if (loginSection) loginSection.style.display = 'block'
        if (gameSection) gameSection.style.display = 'none'
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
            } catch (error) {
                console.error('登入失敗:', error)
                // 錯誤類型處理
                if ((error as any).code === 'auth/invalid-credential') {
                    ElMessage.error('無效的 Email 或密碼')
                } else if ((error as any).code === 'auth/user-not-found') {
                    ElMessage.error('找不到此 Email 的帳號')
                } else if ((error as any).code === 'auth/wrong-password') {
                    ElMessage.error('密碼錯誤')
                } else {
                    ElMessage.error('登入失敗，請檢查 Email 和密碼')
                }
             }
        } else {
            alert('請輸入 Email 和密碼')
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
                const user = await registerWithEmail(email, password, userName)
                // 手動更新 UI 顯示用戶名（因為 onAuthStateChanged 可能在 updateProfile 之前觸發）
                if (user && userName) {
                    const userInfo = document.getElementById('user-info')
                    if (userInfo) {
                        userInfo.textContent = `歡迎，${userName}`
                    }
                }
                alert('註冊成功！')
            } catch (error) {
                console.error('註冊失敗:', error)
                // 錯誤類型處理
                if ((error as any).code === 'auth/email-already-in-use') {
                    ElMessage.warning({
                        message: '此 Email 已經被使用'
                     })
                } else if ((error as any).code === 'auth/invalid-email') {
                    ElMessage.error('無效的 Email 格式')
                } else if ((error as any).code === 'auth/weak-password') {
                    ElMessage.error('密碼太弱，請使用更強的密碼')
                } else {
                    ElMessage.error('註冊失敗，請檢查 Email 格式和密碼長度（至少 6 個字元）')
                }
             }
        } else {
            alert('請輸入 Email 和密碼')
        }
    })
}

// 登出
const logoutBtn = document.getElementById('logout-btn')
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        try {
            await logout()
        } catch (error) {
            console.error('登出失敗:', error)
        }
    })
}

// 聊天室初始化
function initChat() {
    const messagesDiv = document.getElementById('messages')
    if (!messagesDiv) return
    
    // 監聽訊息
    listenToMessages((messages: Message[]) => {
        messagesDiv.innerHTML = ''
        messages.forEach((msg: Message) => {
            const msgDiv = document.createElement('div')
            msgDiv.className = 'message'
            // 處理 timestamp：如果是 Timestamp 類型則使用 toDate()，否則直接使用
            const timestamp = msg.timestamp && typeof (msg.timestamp as any).toDate === 'function' 
                ? (msg.timestamp as any).toDate() 
                : msg.timestamp
            const timeStr = timestamp ? new Date(timestamp).toLocaleTimeString() : ''
            msgDiv.innerHTML = `
                <strong>${msg.userName}:</strong> ${msg.text}
                <small>${timeStr}</small>
            `
            messagesDiv.appendChild(msgDiv)
        })
        messagesDiv.scrollTop = messagesDiv.scrollHeight
    })
    
    // 發送訊息
    const sendBtn = document.getElementById('send-btn')
    const messageText = document.getElementById('message-text') as HTMLInputElement
    if (sendBtn && messageText) {
        sendBtn.addEventListener('click', async () => {
            const text = messageText.value
            if (text.trim()) {
                await sendMessage(text)
                messageText.value = ''
            }
        })
    }
}

// 遊戲初始化
function initGame() {
    let currentRoomId: string | null = null
    let unsubscribeGame: (() => void) | null = null
    
    // 建立房間
    const createRoomBtn = document.getElementById('create-room')
    const roomIdInput = document.getElementById('room-id') as HTMLInputElement
    if (createRoomBtn && roomIdInput) {
        createRoomBtn.addEventListener('click', async () => {
            const roomId = `room-${Date.now()}`
            await createGameRoom(roomId)
            currentRoomId = roomId
            roomIdInput.value = roomId
            
            // 監聽遊戲狀態
            if (unsubscribeGame) unsubscribeGame()
            unsubscribeGame = listenToGame(roomId, (gameData) => {
                updateGameUI(gameData)
            })
        })
    }
    
    // 加入房間
    const joinRoomBtn = document.getElementById('join-room')
    if (joinRoomBtn && roomIdInput) {
        joinRoomBtn.addEventListener('click', async () => {
            const roomId = roomIdInput.value
            await joinGameRoom(roomId)
            currentRoomId = roomId
            
            // 監聽遊戲狀態
            if (unsubscribeGame) unsubscribeGame()
            unsubscribeGame = listenToGame(roomId, (gameData) => {
                updateGameUI(gameData)
            })
        })
    }
    
    // 出拳
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            if (currentRoomId) {
                const choice = (btn as HTMLElement).dataset.choice
                if (choice) {
                    await makeChoice(currentRoomId, choice)
                }
            }
        })
    })
}

function updateGameUI(gameData: any) {
    const statusDiv = document.getElementById('game-status')
    if (statusDiv) {
        statusDiv.innerHTML = `
            <p>玩家1: ${gameData.player1.userName} ${gameData.player1.choice ? '已出拳' : '等待中'}</p>
            <p>玩家2: ${gameData.player2.userName || '等待玩家'} ${gameData.player2.choice ? '已出拳' : '等待中'}</p>
            ${gameData.status === 'finished' ? `<p>結果: ${gameData.winner}</p>` : ''}
        `
    }
}