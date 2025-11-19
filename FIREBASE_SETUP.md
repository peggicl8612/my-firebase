# Firebase Console 配置說明

## 需要在 Firebase Console 中啟用的功能

### 1. 啟用 Authentication（認證）功能

1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 選擇你的專案：`my-firebase-12fb4`
3. 點擊左側選單的 **「Authentication」**
4. 如果尚未啟用，點擊 **「Get started」**

### 2. 啟用匿名認證（Anonymous）

1. 在 Authentication 頁面，點擊 **「Sign-in method」** 標籤
2. 找到 **「Anonymous」** 選項
3. 點擊它，然後切換 **「Enable」** 開關為開啟
4. 點擊 **「Save」**

### 3. 啟用 Email/Password 認證

1. 在同一個 **「Sign-in method」** 頁面
2. 找到 **「Email/Password」** 選項
3. 點擊它，然後切換 **「Enable」** 開關為開啟
4. 點擊 **「Save」**

### 4. 啟用 Firestore Database

1. 點擊左側選單的 **「Firestore Database」**
2. 如果尚未建立資料庫，點擊 **「Create database」**
3. 選擇 **「Start in test mode」**（測試模式，適合開發階段）
4. 選擇資料庫位置（建議選擇離你最近的區域）
5. 點擊 **「Enable」**

### 5. 設定 Firestore 安全規則（可選，但建議）

你的 `firestore.rules` 文件已經有基本規則，但建議更新為更安全的規則：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 訊息集合：只有登入用戶可以讀寫
    match /messages/{messageId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && 
                       request.resource.data.userId == request.auth.uid;
    }
    
    // 遊戲集合：只有登入用戶可以讀寫
    match /games/{gameId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

在 Firebase Console 中：
1. 前往 **「Firestore Database」** → **「Rules」** 標籤
2. 貼上上面的規則
3. 點擊 **「Publish」**

## 完成後

完成以上配置後，重新整理你的應用程式，認證功能應該就可以正常運作了！

## 常見問題

### Q: 匿名登入還是失敗？
A: 確認 Anonymous 認證已啟用，並且等待幾秒鐘讓設定生效。

### Q: 註冊時顯示錯誤？
A: 確認 Email/Password 認證已啟用，並且密碼至少 6 個字元。

### Q: 無法讀寫 Firestore 資料？
A: 確認 Firestore Database 已建立，並且安全規則允許你的操作。


