// src/auth.js
import { GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'

import { signInAnonymously, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, User, signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth'


// 檢測是否為被阻擋的瀏覽器
function isBlockedBrowser(): boolean {
    const userAgent = navigator.userAgent.toLowerCase()
    return userAgent.includes('line/') ||
        userAgent.includes('fban/') ||
        userAgent.includes('fbav/') ||
        userAgent.includes('micromessenger') ||
        userAgent.includes('wechat') ||
        userAgent.includes('qq/') ||
        userAgent.includes('yahoo/') ||
        userAgent.includes('weibo') ||
        userAgent.includes('sinaweibo')
}

// 檢測是否為行動裝置
function isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// 匿名登入
export async function loginAnonymously() {
    try {
        const userCredential = await signInAnonymously(auth)
        return userCredential.user
    } catch (error) {
        console.error('匿名登入失敗:', error)
        throw error
    }
}

// Email 登入
export async function loginWithEmail(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user
    } catch (error) {
        console.error('登入失敗:', error)
        throw error
    }
}

// 第三方驗證登入(支援自動降級)
export async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        
        // 在行動裝置上，優先使用 redirect（更可靠）
        const useRedirect = isBlockedBrowser() || isMobileDevice()

        // 如果是被阻擋的瀏覽器或行動裝置，直接使用 redirect
        if (useRedirect) {
            console.log('檢測到需要使用 redirect 的環境，使用 redirect 方式登入')
            await signInWithRedirect(auth, provider)
            return null // redirect 會導致頁面跳轉，所以返回 null
        }

        // 否則嘗試使用 popup
        try {
            const result = await signInWithPopup(auth, provider);
            return result.user;
        } catch (popupError: any) {
            console.error('Popup 登入失敗:', popupError)
            
            // 如果是用戶關閉 popup，不自動降級
            if (popupError.code === 'auth/popup-closed-by-user') {
                console.error('Google 登入被用戶關閉')
                throw popupError
            }
            
            // 如果是 disallowed_useragent、403 或其他阻擋錯誤，降級到 redirect
            const shouldFallback = 
                popupError.code === 'auth/popup-blocked' || 
                popupError.code === 'auth/unauthorized-domain' ||
                popupError.code === 'auth/operation-not-allowed' ||
                popupError.message?.toLowerCase().includes('disallowed_useragent') ||
                popupError.message?.includes('403') ||
                popupError.message?.includes('forbidden') ||
                (popupError.code && popupError.code.includes('403'))
            
            if (shouldFallback) {
                console.log('Popup 被阻擋，改用 redirect 方式')
                try {
                    await signInWithRedirect(auth, provider)
                    return null
                } catch (redirectError: any) {
                    // 如果 redirect 也失敗，可能是 Firebase 配置問題
                    console.error('Redirect 也失敗:', redirectError)
                    throw {
                        code: 'auth/redirect-failed',
                        message: 'Google 登入失敗，請檢查 Firebase 配置或使用外部瀏覽器',
                        originalError: redirectError
                    }
                }
            }
            throw popupError
        }
    } catch (error: any) {
        console.error('Google 登入失敗:', error)
        throw error
    }
}

// 處理 redirect 回調
export async function handleRedirectResult() {
    try {
        const result = await getRedirectResult(auth)
        if (result) {
            return result.user
        }
        return null
    } catch (error: any) {
        console.error('處理 redirect 結果失敗:', error)
        throw error
    }
}

// 註冊
export async function registerWithEmail(email: string, password: string, userName?: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        if (userName && userCredential.user) {
            await updateProfile(userCredential.user, {
                displayName: userName
            })
            // 重新載入用戶信息以確保 displayName 更新
            await userCredential.user.reload()
        }
        return userCredential.user
    } catch (error) {
        console.error('註冊失敗:', error)
        throw error
    }
}

// 登出
export async function logout() {
    try {
        await signOut(auth)
    } catch (error) {
        console.error('登出失敗:', error)
        throw error
    }
}

// 監聽認證狀態
export function onAuthChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback)
}