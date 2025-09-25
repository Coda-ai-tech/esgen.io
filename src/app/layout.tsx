import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ESGEN - AI ESG報告生成器',
  description: '為香港企業打造的AI ESG報告生成平台，30分鐘內完成專業ESG報告',
  keywords: 'ESG, 可持續發展, 環境報告, 社會責任, 企業管治, 香港, AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
      <body className={inter.className}>{children}</body>
    </html>
  )
}