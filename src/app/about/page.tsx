import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ESGEN</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#technology" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">AI 技術</Link>
              <Link href="/#benefits" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">業務優勢</Link>
              <Link href="/#certification" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">ISO 認證</Link>
              <Link href="/about" className="text-emerald-600 font-medium">關於我們</Link>
              <Link href="/generate" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                免費試用
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block">關於</span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              ESGEN
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            革命性 AI ESG 報告平台，簡化可持續發展合規，最大化企業競爭優勢
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">我們的使命</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ESGEN 致力於簡化可持續發展報告，讓各規模企業都能輕鬆獲得專業 ESG 認證。
                我們的獲獎 AI 平台將複雜的 ESG 評估轉化為精簡流程，節省寶貴時間和資源。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">簡化</div>
                  <div className="text-gray-600">可持續發展報告</div>
                </div>
                <div className="text-center p-6 bg-teal-50 rounded-2xl">
                  <div className="text-3xl font-bold text-teal-600 mb-2">降低</div>
                  <div className="text-gray-600">成本和複雜性</div>
                </div>
                <div className="text-center p-6 bg-cyan-50 rounded-2xl">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">提升</div>
                  <div className="text-gray-600">企業聲譽</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">保證</div>
                  <div className="text-gray-600">未來商業發展</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <svg className="w-48 h-48 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Excellence */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">技術創新</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們的專有機器學習模型提供細緻的可持續發展績效指標分析
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">即時分析</h3>
              <p className="text-gray-600 text-sm">即時數據處理，實現快速決策與最新可持續發展洞察</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">全面指標</h3>
              <p className="text-gray-600 text-sm">整體評估框架涵蓋所有關鍵環境、社會和治理指標</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">95% 準確度</h3>
              <p className="text-gray-600 text-sm">業界領先精準度確保利益相關者對您可持續發展報告的信任</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">智能自動化</h3>
              <p className="text-gray-600 text-sm">與傳統方法相比，智能自動化減少高達70%的ESG報告支出</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">業界認可</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們的技術創新和服務質量獲得了權威機構的認可
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">#1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">2024年度獎項</h3>
              <p className="text-gray-600 mb-4">「傑出中小企ESG服務獎」</p>
              <p className="text-lg font-semibold text-emerald-600">HSUHK 頒發</p>
              <p className="text-sm text-gray-500 mt-2">權威大學驗證我們的技術創新和服務質量</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">ISO 17025 認證</h3>
              <p className="text-gray-600 mb-4">全球標準保證</p>
              <p className="text-lg font-semibold text-blue-600">國際認可</p>
              <p className="text-sm text-gray-500 mt-2">符合嚴格國際標準和全面驗證流程</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">全球首創</h3>
              <p className="text-gray-600 mb-4">AI 驅動ESG分析報告工具</p>
              <p className="text-lg font-semibold text-purple-600">技術領先</p>
              <p className="text-sm text-gray-500 mt-2">在大中華地區率先推出AI ESG報告平台</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">我們的價值觀</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">透明度</h3>
              <p className="text-gray-600">建立利益相關者信任，透過驗證的可持續發展承諾</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">創新</h3>
              <p className="text-gray-600">領先技術解決方案，推動可持續發展行業進步</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">可及性</h3>
              <p className="text-gray-600">讓中小企業也能享受企業級ESG工具</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">品質</h3>
              <p className="text-gray-600">專業顧問團隊確保報告準確性和可信度</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="consultation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">聯絡我們</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              準備開始您的ESG之旅？我們的專家團隊隨時為您提供無縫接入協助
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">電話</h3>
              <p className="text-gray-600">+852 2915 6660</p>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600">+852 5478 8508</p>
            </div>
            
            <div className="text-center p-6 bg-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">電郵</h3>
              <p className="text-gray-600">renas.hung@codaai.tech</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">網站</h3>
              <p className="text-gray-600">esgen.io</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              地址：香港中環威靈頓街6-12號信德商業大廈6樓F室
            </p>
            <Link 
              href="/generate" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              立即開始免費試用
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h3 className="text-2xl font-bold">ESGEN</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              革命性AI ESG報告平台，助您簡化可持續發展合規，提升競爭優勢
            </p>
            <div className="text-sm text-gray-500">
              © 2024 ESGEN. 版權所有.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
