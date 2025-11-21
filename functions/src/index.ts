import {onCall} from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import {GoogleGenerativeAI} from "@google/generative-ai";
import {defineSecret} from "firebase-functions/params";

admin.initializeApp();

// 宣告 Secret（Firebase Functions v2 需要明確宣告）
const geminiApiKey = defineSecret("GEMINI_API_KEY");

interface ChatRequest {
  message: string;
  conversationHistory?: Array<{
    role: string;
    parts: string | Array<{text: string}>;
  }>;
}

export const chatWithAI = onCall(
  {
    secrets: [geminiApiKey],
  },
  async (request) => {
    // 驗證用戶
    if (!request.auth) {
      throw new Error("必須先登入");
    }

    // 從 Secret 取得 API Key
    const GEMINI_API_KEY = geminiApiKey.value();

    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY 未設定");
      throw new Error("AI 服務未正確設定，請聯繫管理員");
    }

    // 初始化 Gemini
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    const data = request.data as ChatRequest;

    // 驗證必要參數
    if (!data || !data.message) {
      console.error("缺少必要參數 message:", data);
      throw new Error("缺少必要參數: message");
    }

    const {message, conversationHistory} = data;

    try {
      // 使用 getGenerativeModel 獲取模型（不是 listModels）
      const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
      // 如果需要測試 API 是否正常，可以這樣測試：
      // console.log("Gemini API 已初始化，使用模型: gemini-pro");
      // 客服模式的系統提示
      const systemInstruction = `你是一個友善的客服小幫手，專門協助用戶解決問題。
      請用繁體中文回答，語氣要親切、專業且簡潔。
      如果用戶詢問遊戲相關問題，請提供幫助。
      如果用戶只是打招呼，請友善回應。
      回答要簡短，不要超過 50 字。`;

      // 建立對話歷史，包含系統提示
      const history: Array<{role: string; parts: Array<{text: string}>}> =
        conversationHistory?.map((item) => ({
          role: item.role,
          parts: typeof item.parts === "string" ?
            [{text: item.parts}] :
            item.parts as Array<{text: string}>,
        })) || [];

      // 如果沒有歷史記錄，先加入系統提示
      if (history.length === 0) {
        history.push({
          role: "user",
          parts: [{text: systemInstruction}],
        });
        history.push({
          role: "model",
          parts: [{text: "您好！我是客服小幫手，很高興為您服務！有什麼我可以幫助您的嗎？"}],
        });
      }

      const chat = model.startChat({
        history: history as Array<{role: string; parts: Array<{text: string}>}>,
        generationConfig: {
          maxOutputTokens: 100, // 限制回應長度
          temperature: 0.7, // 控制創造性
        },
      });

      const result = await chat.sendMessage(message);
      const response = result.response;
      const text = response.text();

      return {
        response: text,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      };
    } catch (error: unknown) {
      console.error("AI 回應錯誤:", error);
      console.error("錯誤詳情:", JSON.stringify(error, null, 2));

      let errorMessage = "未知錯誤";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        errorMessage = String((error as {message: unknown}).message);
      }

      throw new Error(`AI 回應錯誤: ${errorMessage}`);
    }
  }
);
