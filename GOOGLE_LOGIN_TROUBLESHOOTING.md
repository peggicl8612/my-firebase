# Google 登入 403 錯誤排除指南

## 問題說明

在 Line 內建瀏覽器或其他內建瀏覽器中使用 Google 登入時，可能會遇到 403 錯誤（disallowed_useragent）。這是因為 Google 的安全政策會阻擋某些內建瀏覽器。

## 解決方案

### 方案 1：檢查 Firebase Console 授權域名設定（重要！）

1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 選擇你的專案：`my-firebase-12fb4`
3. 點擊左側選單的 **「Authentication」**
4. 點擊 **「Settings」** 標籤
5. 向下滾動到 **「Authorized domains」** 區塊
6. 確保以下域名已添加：
   - `localhost`（開發用）
   - `my-firebase-12fb4.firebaseapp.com`（Firebase Hosting 預設域名）
   - 如果你有自定義域名，也要添加
   - 如果你使用 Firebase Hosting，添加你的部署域名

### 方案 2：在 Google Cloud Console 設定 OAuth 網域（重要！）

這是解決 403 錯誤的關鍵步驟！

#### 步驟 1：前往 Google Cloud Console

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 如果還沒登入，使用你的 Google 帳號登入
3. 在頂部的專案選擇器中，選擇專案：**`my-firebase-12fb4`**
   - 如果沒看到這個專案，點擊專案選擇器，然後選擇 `my-firebase-12fb4`

#### 步驟 2：找到 OAuth 2.0 Client ID

1. 在左側選單中，點擊 **「APIs & Services」**（API 和服務）
2. 點擊 **「Credentials」**（憑證）
3. 在 **「OAuth 2.0 Client IDs」** 區塊中，找到類型為 **「Web client」** 的項目
   - 通常名稱會是類似 "Web client (auto created by Google Service)" 或 "Firebase Auth Client"
   - 如果沒有看到，可能需要先啟用 Google 登入（見方案 4）

#### 步驟 3：編輯 OAuth 2.0 Client ID

1. 點擊你的 **Web client** 項目（或點擊右側的編輯圖示）
2. 會開啟編輯頁面

#### 步驟 4：設定 Authorized JavaScript origins（授權的 JavaScript 來源）

在 **「Authorized JavaScript origins」** 區塊中，點擊 **「+ ADD URI」** 添加以下網址：

**開發環境：**

- `http://localhost:3000`
- `http://localhost:5173`（如果使用 Vite 預設端口）
- `http://127.0.0.1:3000`

**生產環境：**

- `https://my-firebase-12fb4.firebaseapp.com`
- 如果你有自定義域名，也要添加（例如：`https://yourdomain.com`）

**注意事項：**

- 必須包含協議（http:// 或 https://）
- 不能有尾隨斜線（/）
- localhost 可以使用 http，但生產環境必須使用 https

#### 步驟 5：設定 Authorized redirect URIs（授權的重定向 URI）

在 **「Authorized redirect URIs」** 區塊中，點擊 **「+ ADD URI」** 添加以下網址：

**開發環境：**

- `http://localhost:3000/__/auth/handler`
- `http://localhost:5173/__/auth/handler`（如果使用 Vite 預設端口）
- `http://127.0.0.1:3000/__/auth/handler`

**生產環境：**

- `https://my-firebase-12fb4.firebaseapp.com/__/auth/handler`
- 如果你有自定義域名，也要添加（例如：`https://yourdomain.com/__/auth/handler`）

**重要：**

- Redirect URI 必須包含 `/__/auth/handler` 路徑
- 這是 Firebase Authentication 使用的標準路徑

#### 步驟 6：儲存設定

1. 點擊頁面底部的 **「SAVE」**（儲存）按鈕
2. 等待幾秒鐘讓設定生效（通常立即生效，但可能需要 1-2 分鐘）

#### 步驟 7：驗證設定

1. 回到編輯頁面，確認所有 URI 都已正確添加
2. 清除瀏覽器快取和 Cookie
3. 重新測試 Google 登入功能

#### 常見問題

**Q: 找不到 OAuth 2.0 Client ID？**
A: 這可能是因為 Google 登入還沒在 Firebase Console 中啟用。請先前往 Firebase Console → Authentication → Sign-in method，啟用 Google 登入，然後再回到 Google Cloud Console。

**Q: 可以添加多個 URI 嗎？**
A: 可以！你可以添加多個開發和生產環境的 URI。

**Q: 設定後多久生效？**
A: 通常立即生效，但建議等待 1-2 分鐘後再測試。

**Q: 需要設定其他類型的 Client ID 嗎？**
A: 不需要。只需要設定 Web client 類型的即可。

### 方案 3：使用外部瀏覽器（臨時解決方案）

如果上述配置都正確，但 Line 內建瀏覽器仍然無法使用，這是 Google 的安全限制。建議：

1. 提示用戶使用 Chrome 或 Safari 瀏覽器
2. 提供「在外部瀏覽器開啟」的功能
3. 複製連結到外部瀏覽器

### 方案 4：檢查應用程式是否已啟用 Google 登入

1. 前往 Firebase Console → Authentication → Sign-in method
2. 確認 **「Google」** 已啟用
3. 確認已設定支援的電子郵件（如果需要）

## 程式碼已實作的功能

目前的程式碼已經實作了以下功能：

1. **自動檢測被阻擋的瀏覽器**：Line、Facebook、微信等
2. **自動降級機制**：
   - 被阻擋的瀏覽器：直接使用 `signInWithRedirect`
   - 正常瀏覽器：先嘗試 `signInWithPopup`，失敗時自動降級到 `signInWithRedirect`
3. **行動裝置優化**：在行動裝置上優先使用 redirect
4. **錯誤處理**：提供友好的錯誤訊息

## 測試步驟

1. **在正常瀏覽器測試**（Chrome/Safari）：

   - 應該使用 popup 登入
   - 如果 popup 被阻擋，會自動降級到 redirect

2. **在 Line 內建瀏覽器測試**：

   - 應該自動使用 redirect 登入
   - 如果仍然出現 403，請檢查上述 Firebase Console 設定

3. **檢查瀏覽器控制台**：
   - 查看是否有相關錯誤訊息
   - 確認是否正確檢測到瀏覽器類型

## 常見錯誤碼

- `auth/popup-blocked`：彈窗被瀏覽器阻擋
- `auth/unauthorized-domain`：未授權的網域（需要在 Firebase Console 添加）
- `auth/operation-not-allowed`：Google 登入未啟用
- `403` 或 `disallowed_useragent`：瀏覽器被 Google 阻擋

## 如果問題仍然存在

1. 確認 Firebase Console 中的所有設定都正確
2. 確認 Google Cloud Console 中的 OAuth 設定正確
3. 清除瀏覽器快取和 Cookie
4. 檢查是否有防火牆或代理伺服器阻擋
5. 查看 Firebase Console 的 Authentication → Users 是否有相關錯誤記錄
