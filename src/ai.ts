import { getFunctions, httpsCallable } from 'firebase/functions'
import { app } from '../firebase'

const functions = getFunctions(app);

// 儲存對話歷史（每個用戶獨立）
const conversationHistories = new Map<string, any[]>();

export async function chatWithAI(message: string, userId: string, conversationHistory?: any[]) {
    const chatWithAI = httpsCallable(functions, 'chatWithAI')
    
    // 使用傳入的歷史記錄，或從記憶體中取得
    const history = conversationHistory || conversationHistories.get(userId) || [];
    
    const result = await chatWithAI({ message, conversationHistory: history });
    
    const response = result.data as {response: string, timestamp: any};
    
    // 更新對話歷史
    const updatedHistory = [
        ...history,
        { role: 'user', parts: message },
        { role: 'model', parts: response.response }
    ];
    
    // 只保留最近 10 輪對話（避免超過 token 限制）
    const trimmedHistory = updatedHistory.slice(-20);
    conversationHistories.set(userId, trimmedHistory);
    
    return response;
}

// 清除對話歷史
export function clearConversationHistory(userId: string) {
    conversationHistories.delete(userId);
}