// 實時聊天室
import { db, auth } from '../firebase'
import { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp, Timestamp } from 'firebase/firestore'

export interface Message {
    id?: string
    text: string
    userId: string
    userName: string
    timestamp: Timestamp | Date
}
// 發送訊息
export async function sendMessage(message: string) {
    try {
        const user = auth.currentUser
        if (!user) {
            throw new Error('User not authenticated')
        }

        await addDoc(collection(db, 'messages'), {
            text: message,
            userId: user.uid,
            userName: user.displayName || '匿名',
            timestamp: serverTimestamp(),
        })
    } catch (error) {
        console.error('發送訊息失敗', error)
    }
}

// 實時更新訊息（監聽訊息）
export function listenToMessages(callback: (messages: Message[]) => void) {
    const messagesRef = collection(db, 'messages')
    const q = query(messagesRef, orderBy('timestamp', 'desc'), limit(50))

    return onSnapshot(q, (snapshot) => {
        const messages: Message[] = []
        snapshot.forEach((doc) => {
            messages.push({
                id: doc.id,
                ...doc.data() as Message
            })
        })
        callback(messages.reverse())
    })
}