# ESGEN - AI ESG報告生成器

ESGEN是為香港企業打造的ESG生態系統，讓公司能夠在30分鐘內以極低成本生成AI輔助的ESG報告，然後交由專業ESG顧問驗證和改進規劃。

## 項目概述

- **使命**: 標準化並降低ESG報告成本和時間
- **商業模式**: 免費預覽報告 → 付費完整報告下載
- **流程**: 用戶註冊 → 表單填寫 → AI預覽 → 付費 → 完整PDF報告
- **效益**: 符合歐盟式披露要求、強化品牌、綠色貸款就緒

## 核心業務流程

1. **用戶註冊/登入**: 必須註冊以實現收費功能
2. **數據收集**: 4步驟引導式表單 (公司資料、框架、議題、排放數據)
3. **AI預覽生成**: OpenAI生成免費預覽報告 (有限內容)
4. **付費升級**: Airwallex支付完整報告費用
5. **完整報告**: 生成專業PDF + 電郵發送 + 平台下載
6. **數據存儲**: 所有報告和用戶數據存儲於Supabase

## 技術架構

### 前端 (Netlify)
- **框架**: Next.js 15 (App Router), React 19, TypeScript
- **樣式**: Tailwind CSS 4
- **部署**: Netlify (靜態站點優化)

### 後端 (Render)
- **CMS**: Keystone.js (端口 3001)
- **API**: Node.js + Express
- **認證**: Keystone 內建認證系統

### 數據與服務
- **數據庫**: Supabase (PostgreSQL)
- **文件存儲**: Supabase Storage
- **AI引擎**: OpenAI API (報告生成)
- **支付**: Airwallex API
- **電郵**: 待定 (SendGrid/AWS SES)
- **PDF生成**: Puppeteer / jsPDF

### 部署架構
```
用戶 → Netlify (esgen.io) → Render API (api.esgen.io:3001) → Supabase
                                     ↓
                              OpenAI/Airwallex APIs
```

## 開發設置

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 建構生產版本
npm run build
```

## 環境變量

### 前端 (.env.local)
```env
# 站點配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001

# 生產環境
# NEXT_PUBLIC_SITE_URL=https://esgen.io
# NEXT_PUBLIC_API_URL=https://api.esgen.io

# Supabase (公開密鑰)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 後端 (.env)
```env
# Supabase 連接
DATABASE_URL=postgresql://[user]:[pass]@[host]:[port]/[db]
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Airwallex
AIRWALLEX_API_KEY=your_airwallex_api_key
AIRWALLEX_CLIENT_ID=your_airwallex_client_id

# 電郵服務
EMAIL_API_KEY=your_email_service_key

# Keystone
SESSION_SECRET=your_session_secret
```

## 項目結構

### 前端 (esgen-fresh/)
```
src/
├── app/
│   ├── page.tsx              # 主頁 (Traditional Chinese)
│   ├── about/page.tsx        # 關於頁面
│   ├── generate/page.tsx     # 報告生成表單
│   ├── preview/page.tsx      # 報告預覽頁面 (待開發)
│   ├── auth/                 # 登入/註冊頁面 (待開發)
│   ├── dashboard/            # 用戶儀表板 (待開發)
│   └── layout.tsx            # 根布局
├── components/               # 可重用組件
│   ├── ui/                   # 基礎UI組件
│   ├── forms/                # 表單組件
│   └── reports/              # 報告相關組件
├── lib/                      # 工具函數
│   ├── supabase.ts           # Supabase客戶端
│   ├── openai.ts             # OpenAI集成
│   └── airwallex.ts          # 支付集成
└── types/                    # TypeScript類型定義
```

### 後端 (esgen-backend/)
```
├── keystone.ts               # Keystone配置
├── schema/                   # 數據模型
│   ├── User.ts              # 用戶模型
│   ├── Report.ts            # 報告模型
│   └── Payment.ts           # 支付記錄
├── services/                 # 業務邏輯
│   ├── reportGenerator.ts   # AI報告生成
│   ├── pdfGenerator.ts      # PDF生成
│   └── emailService.ts      # 電郵服務
└── routes/                   # API路由
    ├── auth.ts              # 認證API
    ├── reports.ts           # 報告API
    └── payments.ts          # 支付API
```

## 開發里程碑與行動項目

### 🚀 Phase 1: 基礎設施 (第1-2週)
**目標**: 建立完整的前後端架構

#### Backend Infrastructure
- [ ] **Supabase項目創建**
  - 創建數據庫實例
  - 配置認證和行級安全 (RLS)
  - 設置存儲桶 (PDF文件)

- [ ] **Keystone.js後端搭建**
  - 初始化Keystone項目
  - 配置數據庫連接
  - 設置基本認證系統

- [ ] **數據模型設計**
  - User模型 (用戶資料、訂閱狀態)
  - Report模型 (表單數據、AI生成內容、狀態)
  - Payment模型 (交易記錄、狀態追蹤)

#### Frontend Integration
- [ ] **Supabase客戶端集成**
  - 安裝和配置Supabase SDK
  - 設置認證提供者
  - 連接API端點

- [ ] **認證系統**
  - 登入/註冊頁面
  - 受保護路由
  - 用戶狀態管理

### 🤖 Phase 2: AI 報告生成 (第3-4週)
**目標**: 實現核心AI功能和預覽系統

- [ ] **OpenAI集成**
  - 配置API連接
  - 設計報告生成提示詞
  - 實現預覽/完整報告差異化

- [ ] **報告生成流程**
  - 表單數據轉換為AI提示
  - 異步報告生成
  - 進度狀態更新

- [ ] **PDF生成系統**
  - 選擇PDF庫 (Puppeteer/jsPDF)
  - 設計專業報告模板
  - 實現動態內容填充

- [ ] **預覽頁面開發**
  - 報告預覽界面
  - 付費升級提示
  - 下載/分享功能

### 💳 Phase 3: 支付和交付 (第5-6週)
**目標**: 完整商業化功能

- [ ] **Airwallex支付集成**
  - API配置和測試
  - 支付流程設計
  - 成功/失敗回調處理

- [ ] **電郵系統**
  - 選擇電郵服務 (SendGrid/AWS SES)
  - 設計電郵模板
  - 自動發送完整報告

- [ ] **用戶儀表板**
  - 報告歷史查看
  - 下載管理
  - 賬戶設置

### 🚀 Phase 4: 部署和優化 (第7-8週)
**目標**: 生產環境部署和性能優化

- [ ] **生產部署**
  - Netlify前端部署
  - Render後端部署
  - 域名配置 (esgen.io)

- [ ] **性能優化**
  - 圖片和資源優化
  - API響應時間優化
  - SEO優化

- [ ] **監控和分析**
  - 錯誤追蹤 (Sentry)
  - 用戶分析 (Google Analytics)
  - 系統監控 (Uptime)

## 當前狀態
- ✅ **已完成**: 
  - 傳統中文著陸頁面
  - 關於頁面
  - 4步驟報告生成表單
  - GitHub倉庫設置

- 🔄 **進行中**: 
  - 技術架構文檔更新

- ⏳ **待開始**: 
  - Supabase項目創建
  - Keystone.js後端開發

## 授權

MIT 授權

---

為香港企業創造可持續的未來 🌱