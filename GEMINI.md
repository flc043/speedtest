# Project Overview

此專案是一個現代 Web / App 應用程式。

---

## Tech Stack

請依照實際專案調整以下技術：

- Framework: React / Next.js / Vue / Vanilla JS
- Language: TypeScript（優先）或 JavaScript
- Styling: Tailwind CSS
- State Management: Zustand / Context API（若需要）
- Backend: None / Firebase / Node.js（依專案）
- Database: None / SQLite / PostgreSQL（依專案）
- Build Tool: Vite / Next.js
- Package Manager: npm

---

## Language & Localization（重要）

- 所有 UI 必須使用「繁體中文（台灣）」。
- 必須使用台灣常用語，不可使用簡體中文或中國用語。
- 所有介面文字需符合台灣 App 習慣。

### UI 用語規範

請使用：

- 登入（Login）
- 登出（Logout）
- 設定（Settings）
- 儲存（Save）
- 取消（Cancel）
- 確認（Confirm）
- 送出（Submit）
- 刪除（Delete）
- 編輯（Edit）
- 新增（Add）
- 帳號（Account）
- 密碼（Password）
- 金額（Amount）
- 分類（Category）
- 備註（Note）
- 日期（Date）

避免使用：

- 登录
- 保存
- 提交
- 账户
- 删除（簡體）

---

## UI / UX 規則

- UI 必須簡潔、現代化
- 採用 Mobile-first 設計
- 使用 Tailwind CSS
- 按鈕文字盡量簡短（2~4字）
- 避免過長中文句子
- 保持一致設計風格

---

## Coding Style

- 優先使用 TypeScript
- 使用 Functional Components（函式元件）
- 使用 async/await，不使用 .then()
- 使用模組化結構
- 避免重複程式碼
- 保持函式簡短且單一職責

---

## Project Structure（建議）

src/
 ├─ components/   UI 元件
 ├─ pages/        頁面
 ├─ services/     API / 邏輯
 ├─ utils/        工具函式
 ├─ hooks/        React hooks
 ├─ types/        TypeScript 型別
 ├─ styles/       樣式
 ├─ assets/       圖片/資源

---

## Naming Rules

- Components: PascalCase
- Functions: camelCase
- Variables: camelCase
- Constants: UPPER_CASE

---

## Data & Format Rules

- 貨幣：NT$
  例：NT$ 1,200
- 日期：YYYY/MM/DD
  例：2026/04/29
- 時間：24 小時制（HH:mm）
  例：14:30

---

## Constraints（限制）

- 不可引入未使用的套件
- 不可隨意增加新 framework
- 保持效能與輕量化
- 優先使用現有架構
- 避免過度複雜設計

---

## AI Behavior Rules

- 請優先遵守本檔案設定
- 不要使用舊版語法
- 不要自行假設不存在的 API
- 不確定時請保持最保守實作
- 所有 UI 必須使用繁體中文（台灣）

---

## Goal

本專案目標是：
打造穩定、簡潔、可維護的應用程式，並符合台灣使用者習慣。