// src/main.js
import { loginAnonymously, onAuthChange, loginWithEmail, registerWithEmail, loginWithGoogle, logout, handleRedirectResult } from './auth'
import { sendMessage, listenToMessages, Message } from './chat'
import { createGameRoom, joinGameRoom, makeChoice, listenToGame, resetGame, leaveGameRoom } from './game'
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { auth, storage } from '../firebase'
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import { chatWithAI, clearConversationHistory } from './ai'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

let unsubscribeChat: (() => void) | null = null
let unsubscribeGame: (() => void) | null = null
let currentRoomId: string | null = null

// 檢查是否是 Google redirect 回調
const urlParams = new URLSearchParams(window.location.search)
const isRedirectCallback = urlParams.has('__firebase_request_key') || 
                          window.location.hash.includes('__firebase_request_key')

// 如果不是 redirect 回調，自動登出（確保每次打開都顯示登入畫面）
if (!isRedirectCallback) {
    // 立即登出，清除之前的登入狀態
    logout().catch(() => {
        // 如果已經登出，忽略錯誤
    })
}

// 處理 Google 登入的 redirect 回調（在頁面載入時檢查）
handleRedirectResult().then((user) => {
    if (user) {
        console.log('Google 登入成功 (redirect):', user)
        ElMessage({
            message: 'Google 登入成功',
            type: 'success',
            customClass: 'custom-message'
        })
        // 清除 URL 參數
        if (urlParams.has('__firebase_request_key')) {
            const newUrl = window.location.pathname
            window.history.replaceState({}, '', newUrl)
        }
    }
}).catch((error: any) => {
    // 只有在有實際錯誤時才顯示（不是因為沒有 redirect 結果）
    if (error.code && error.code !== 'auth/popup-closed-by-user') {
        console.error('處理 redirect 登入失敗:', error)
        ElMessage({
            message: 'Google 登入失敗',
            type: 'error',
            customClass: 'custom-message'
        })
    }
})

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
        const userNameSpan = document.getElementById('user-name')
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
         if (userNameSpan && currentUser) {
            userNameSpan.textContent = `使用者：${currentUser.displayName || '匿名用戶'}`
        }

        const avatarPreview = document.getElementById('avatar-preview') as HTMLImageElement
        if (avatarPreview && currentUser?.photoURL) {
            avatarPreview.src = currentUser.photoURL
        } else if (avatarPreview) {
            // 使用預設頭像 SVG
            avatarPreview.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSI+77yBPC90ZXh0Pjwvc3ZnPg=='
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
            ElMessage({
                message: '匿名登入失敗，請確認 Firebase Console 中已啟用匿名認證功能',
                type: 'error',
                customClass: 'custom-message'
            })
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

// Google 登入
const googleLoginBtn = document.getElementById('google-login')
if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', async () => {
        await handleGoogleLogin()
    })
}

async function handleGoogleLogin() {
    try {
        const user = await loginWithGoogle()
        if (user) {
            // 只有在 popup 成功時才會執行這裡
            console.log('Google 登入成功:', user)
            ElMessage({
                message: 'Google 登入成功',
                type: 'success',
                customClass: 'custom-message'
            })
        }
        // 如果是 redirect，user 會是 null，頁面會跳轉，所以不會執行到這裡
    } catch (error: any) {
        console.error('Google 登入失敗:', error)
        
        // 如果是 redirect，不會進入這裡（因為會直接跳轉）
        // 只有在 popup 被用戶關閉或其他錯誤時才會進入
        if (error.code === 'auth/popup-closed-by-user') {
            // 用戶主動關閉，不顯示錯誤訊息
            return
        }
        
        // 處理特定的錯誤情況
        let errorMessage = 'Google 登入失敗，請檢查瀏覽器設定'
        
        if (error.code === 'auth/redirect-failed' || 
            error.message?.includes('403') ||
            error.message?.includes('forbidden') ||
            error.message?.includes('disallowed_useragent')) {
            errorMessage = 'Line 內建瀏覽器不支援 Google 登入。請使用 Chrome 或 Safari 瀏覽器開啟此網站，或複製連結到外部瀏覽器開啟'
        } else if (error.code === 'auth/popup-blocked') {
            errorMessage = '彈窗被瀏覽器阻擋，請允許彈窗或使用外部瀏覽器'
        } else if (error.code === 'auth/unauthorized-domain') {
            errorMessage = '未授權的網域，請檢查 Firebase Console 中的授權域名設定'
        }
        
        ElMessage({
            message: errorMessage,
            type: 'error',
            duration: 6000,
            customClass: 'custom-message'
        })
    }
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
                // 等待一下確保 updateProfile 完成
                setTimeout(() => {
                    // 清空輸入框
                    if (emailInput) emailInput.value = ''
                    if (passwordInput) passwordInput.value = ''
                    if (usernameInput) usernameInput.value = ''

                    // 更新用戶名顯示（使用最新的 auth.currentUser）
                    const currentUser = auth.currentUser
                    const userNameSpan = document.getElementById('user-name')
                    if (userNameSpan && currentUser) {
                        userNameSpan.textContent = `使用者：${currentUser.displayName || userName || '匿名用戶'}`
                    }
                    
                    // 確保顯示 Step 1 (雖然 onAuthChange 應該已經處理了，但為了保險起見)
                    const step1 = document.getElementById('onboarding-step-1')
                    if (step1) step1.style.display = 'flex'
                }, 100)
                ElMessage({
                    message: '註冊成功',
                    type: 'success',
                    customClass: 'custom-message'
                })
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
            const currentUser = auth.currentUser
            if (currentUser) {
                clearConversationHistory(currentUser.uid)
            }
            
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

    // AI 客服的用戶 ID（用於識別 AI 訊息）
    const AI_USER_ID = 'AI_ASSISTANT';
    const AI_USER_NAME = '🤖 客服小幫手';
    
    // 追蹤最後處理的訊息 ID，避免重複處理
    let lastProcessedMessageId: string | null = null;
    let isProcessingAI = false; // 防止同時處理多個 AI 請求

    // 監聽訊息
    unsubscribeChat = listenToMessages(async (messages: Message[]) => {
        messagesDiv.innerHTML = ''
        const currentUser = auth.currentUser
        
        messages.forEach((msg: Message) => {
            const msgDiv = document.createElement('div')
            const isSelf = currentUser && msg.userId === currentUser.uid
            const isAI = msg.userId === AI_USER_ID
            
            // AI 訊息使用特殊樣式
            msgDiv.className = `message ${isSelf ? 'self' : 'other'} ${isAI ? 'ai-message' : ''}`
            
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
        
        // AI 自動回覆邏輯
        if (currentUser && messages.length > 0 && !isProcessingAI) {
            const lastMessage = messages[messages.length - 1];
            
            // 只處理新訊息（不是 AI 自己的訊息，且不是當前用戶的訊息）
            if (lastMessage.id && 
                lastMessage.id !== lastProcessedMessageId &&
                lastMessage.userId !== AI_USER_ID &&
                lastMessage.userId !== currentUser.uid) {
                
                lastProcessedMessageId = lastMessage.id;
                isProcessingAI = true;
                
                // 延遲 1-2 秒後回覆（模擬真人思考時間）
                setTimeout(async () => {
                    try {
                        const aiResponse = await chatWithAI(
                            lastMessage.text, 
                            currentUser.uid
                        );
                        
                        // 發送 AI 回應（使用特殊的 userId 標記）
                        await addDoc(collection(db, "messages"), {
                            text: aiResponse.response,
                            userId: AI_USER_ID,
                            userName: AI_USER_NAME,
                            timestamp: serverTimestamp(),
                        });
                    } catch (error) {
                        console.error('AI 自動回覆失敗:', error);
                        // 不顯示錯誤給用戶，靜默失敗
                    } finally {
                        isProcessingAI = false;
                    }
                }, 1000 + Math.random() * 1000); // 1-2 秒隨機延遲
            }
        }
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

    if (step1NextBtn && nicknameInput) {
        const handleStep1Next = async () => {
            const nickname = nicknameInput.value.trim()
            if (nickname) {
                if (auth.currentUser) {
                    const { updateProfile } = await import('firebase/auth')
                    await updateProfile(auth.currentUser, { displayName: nickname })
                    // 更新歡迎訊息
                    const userNameSpan = document.getElementById('user-name')
                    if (userNameSpan) userNameSpan.textContent = `使用者：${nickname}`
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

        step1NextBtn.onclick = handleStep1Next
        
        nicknameInput.onkeydown = async (e) => {
            if (e.key === 'Enter') {
                await handleStep1Next()
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
    
    // 大頭貼上傳
    const avatarInput = document.getElementById('avatar-input') as HTMLInputElement
    const avatarPreview = document.getElementById('avatar-preview') as HTMLImageElement
    const uploadAvatarBtn = document.getElementById('upload-avatar-btn')
    
    if (avatarInput && avatarPreview && uploadAvatarBtn) {
        // 點擊按鈕觸發檔案選擇
        uploadAvatarBtn.onclick = () => {
            avatarInput.click()
        }

        // 監聽檔案選擇
        avatarInput.onchange = async (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]
            if (!file) return
            
            if (!file.type.startsWith('image/')) {
                ElMessage({
                    message: '請選擇圖片檔案',
                    type: 'warning',
                    offset: window.innerHeight - 100,
                    customClass: 'bottom-message'
                })
                return
            }

            if (file.size > 1024 * 1024 * 5) {
                ElMessage({
                    message: '檔案大小不能超過 5MB',
                    type: 'warning',
                    offset: window.innerHeight - 100,
                    customClass: 'bottom-message'
                })
                return
            }

            try {
                // 
                const reader = new FileReader()
                reader.onload = async (e) => {
                    if (avatarPreview && e.target?.result) {
                        avatarPreview.src = e.target.result as string
                        // 強制設定樣式，確保圖片正確裁切
                        avatarPreview.style.width = '100px'
                        avatarPreview.style.height = '100px'
                        avatarPreview.style.objectFit = 'cover'
                        avatarPreview.style.objectPosition = 'center'
                        avatarPreview.style.borderRadius = '50%'
                        avatarPreview.style.display = 'block'
                    }  
                }
                reader.readAsDataURL(file)

                // 上傳檔案
                const downloadURL = await uploadAvatar(file)

                // 更新 UI
                if (avatarPreview) {
                    avatarPreview.src = downloadURL
                    // 再次確保樣式正確
                    avatarPreview.style.width = '100px'
                    avatarPreview.style.height = '100px'
                    avatarPreview.style.objectFit = 'cover'
                    avatarPreview.style.objectPosition = 'center'
                    avatarPreview.style.borderRadius = '50%'
                    avatarPreview.style.display = 'block'
                }

                // 更新用戶資訊顯示
                const userNameSpan = document.getElementById('user-name')
                if (userNameSpan && auth.currentUser) {
                    userNameSpan.textContent = `使用者：${auth.currentUser.displayName || '匿名用戶'}`
                }
                ElMessage({
                    message: '大頭貼上傳成功',
                    type: 'success',
                    offset: window.innerHeight - 100,
                    customClass: 'bottom-message'
                })
            } catch (error) {
                console.log('上傳大頭貼失敗', error)
                 ElMessage({
                    message: '上傳大頭貼失敗',
                    type: 'error',
                    offset: window.innerHeight - 100,
                    customClass: 'bottom-message'
                })
            }
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

// 更新遊戲 UI
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
                resultText = '<p style="color: green; font-weight: bold;">You Win！</p>'
            } else {
                resultText = '<p style="color: red; font-weight: bold;">Loser！</p>'
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
            
             ElMessage({
                 message: '遊戲已結束，對手已離開',
                 type: 'info',
                 duration: 3000,
                 offset: window.innerHeight - 100,
                 customClass: 'bottom-message'
            })
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

// 上傳文件，要同步操作所以使用 async 函數
async function uploadAvatar(file: File) {
    try { 
        const user = auth.currentUser
        if (!user) throw new Error('User not authenticated')
        
        /* 建立檔案路徑 */
        // 取得檔案副檔名
        const fileExt = file.name.split('.').pop()
        const fileName = `avatar_${Date.now()}.${fileExt}`
        const storageRef = ref(storage, `avatars/${user.uid}/${fileName}`)

        // 上傳檔案
        const snapshot = await uploadBytes(storageRef, file)

        // 取得下載 URL
        const downloadURL = await getDownloadURL(snapshot.ref)

        // 更新用戶的 photoURL
        const { updateProfile } = await import('firebase/auth')
        await updateProfile(user, { photoURL: downloadURL})

        return downloadURL
    } catch (error) {
        console.log('上傳文件失敗', error)
        throw error
     }
}

 
