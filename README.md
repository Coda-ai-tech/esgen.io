# ESGEN - AI ESG報告生成器

ESGEN是為香港企業打造的ESG生態系統，讓公司能夠在30分鐘內以極低成本生成AI輔助的ESG報告，然後交由專業ESG顧問驗證和改進規劃。

## 項目概述

- **使命**: 標準化並降低ESG報告成本和時間
- **流程**: 資料收集 → AI草稿 → 專業驗證 → 導出 → 持續改進
- **效益**: 符合歐盟式披露要求、強化品牌、綠色貸款就緒

## 主要用戶流程

1. **生成報告**: 引導式問答 → AI創建結構化ESG報告 (Markdown/HTML/PDF)
2. **驗證**: ESG顧問驗證事實/假設並調整ESG評分
3. **改進**: 訂閱工作台追蹤行動並上傳證據
4. **市場**: ESG供應商 (例如太陽能) 提供對應差距的解決方案
5. **基準數據庫**: 建立企業評分數據集以設定透明標準

## 技術棧

- **前端**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS
- **後端**: Keystone.js (無頭CMS) + Supabase (數據庫、存儲、認證)
- **部署**: Netlify (前端) + Render (後端)
- **域名**: esgen.io

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

```env
# 開發環境
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# 生產環境
NEXT_PUBLIC_SITE_URL=https://esgen.io
NEXT_PUBLIC_API_URL=https://api.esgen.io
```

## 項目結構

```
src/
├── app/
│   ├── page.tsx              # 主頁 (Traditional Chinese)
│   ├── generate/             # 報告生成流程
│   ├── preview/              # 報告預覽
│   └── layout.tsx            # 根布局
├── components/               # 可重用組件
└── lib/                      # 工具函數
```

## 部署

### Netlify (前端)
- 連接到 GitHub 倉庫
- 建構命令: `npm run build`
- 發布目錄: `.next`
- 環境變量: 如上所述

### Render (後端 - 稍後)
- Keystone.js API
- Postgres 數據庫
- S3 兼容存儲

## 路線圖

- [x] 傳統中文著陸頁面
- [x] 多步驟報告生成表單
- [ ] AI 報告生成集成
- [ ] 專業驗證工作流程
- [ ] 報告預覽和導出
- [ ] 用戶認證和訂閱
- [ ] ESG 供應商市場
- [ ] 基準數據儀表板

## 授權

MIT 授權

---

為香港企業創造可持續的未來 🌱