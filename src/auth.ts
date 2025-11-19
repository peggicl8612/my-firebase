// src/auth.js
import { auth } from '../firebase'

import { signInAnonymously, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, User } from 'firebase/auth'

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