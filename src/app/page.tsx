import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/esgenlogo.png" alt="ESGEN Logo" className="h-7 w-auto" />
              <span className="ml-3 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">AI ESG 報告生成器</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#technology" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">AI 技術</Link>
              <Link href="#benefits" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">業務優勢</Link>
              <Link href="#certification" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">ISO 認證</Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">關於我們</Link>
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
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-sm font-medium mb-6">
              🏆 獲HSUHK頒發「傑出中小企ESG服務獎」
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block">革命性 AI 驅動</span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              ESG 報告平台
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            全球首創AI ESG分析工具，符合ISO 17025國際認證標準，
            助香港企業簡化可持續發展報告流程，獲得綠色融資機會，提升競爭優勢。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link href="/generate" className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="flex items-center justify-center">
                免費 1 分鐘快速掃描
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </span>
            </Link>
            <Link href="#consultation" className="border-2 border-emerald-300 text-emerald-700 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-emerald-50 transition-all duration-300 backdrop-blur-sm">
              免費現場諮詢
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3-5倍</div>
              <div className="text-gray-600">投資回報率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">70%</div>
              <div className="text-gray-600">成本降低</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">95%</div>
              <div className="text-gray-600">準確度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">ESG顧問</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">現代企業面臨的 ESG 挑戰</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              香港企業面對日益嚴格的ESG要求，需要策略性應對方案
            </p>
          </div>
          
          {/* Challenge Pyramid */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-4">
              <div className="bg-emerald-100 p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">複雜的報告要求</h3>
                <p className="text-gray-600">導航複雜的可持續發展框架</p>
              </div>
              <div className="bg-teal-100 p-6 rounded-2xl text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-2">耗時的流程</h3>
                <p className="text-gray-600">人工評估消耗寶貴資源</p>
              </div>
              <div className="bg-cyan-100 p-6 rounded-2xl text-center max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-2">高昂的顧問費用</h3>
                <p className="text-gray-600">傳統ESG服務價格昂貴</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-2xl text-center max-w-xl mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-2">中小企難以負擔</h3>
                <p className="text-gray-600">缺乏可負擔的選擇</p>
              </div>
            </div>
          </div>

          {/* Key Challenges */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">監管合規</h4>
              <p className="text-gray-600 text-sm">港交所要求ESG報告，2024年加強氣候相關披露要求</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">投資者期望</h4>
              <p className="text-gray-600 text-sm">79%的亞太投資者在投資決策中優先考慮ESG因素</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">氣候脆弱性</h4>
              <p className="text-gray-600 text-sm">企業必須應對颱風風險，配合香港2050碳中和目標</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">持份者壓力</h4>
              <p className="text-gray-600 text-sm">消費者和員工越來越要求企業責任和可持續做法</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">供應鏈複雜性</h4>
              <p className="text-gray-600 text-sm">國際貿易夥伴要求ESG合規，如歐盟CSDDD法規</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">綠色金融機會</h4>
              <p className="text-gray-600 text-sm">香港綠色債券市場從2020年134億增至2022年805億美元</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section id="technology" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">AI 驅動的ESG技術</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              革命性機器學習演算法，提供全面可持續發展分析
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">機器學習評估</h3>
              <p className="text-gray-600 leading-relaxed">AI演算法分析可持續發展績效</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 21V9l6-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">多維度分析</h3>
              <p className="text-gray-600 leading-relaxed">跨ESG各維度全面評估</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">持續改進</h3>
              <p className="text-gray-600 leading-relaxed">演算法透過持續學習不斷優化</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">自適應報告</h3>
              <p className="text-gray-600 leading-relaxed">靈活框架應對不斷變化的標準</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">運作流程</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              簡單四步驟，從零開始創建專業ESG報告
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 -translate-y-1/2 z-0"></div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl">1</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">資料收集</h3>
              <p className="text-gray-600 leading-relaxed">填寫公司基本資料、行業類別、選擇ESG框架等基礎信息</p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl">2</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AI生成</h3>
              <p className="text-gray-600 leading-relaxed">AI根據您的回答智能生成結構化ESG報告草稿</p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl">3</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">專業驗證</h3>
              <p className="text-gray-600 leading-relaxed">ESG專業顧問檢查並完善報告內容，確保準確性</p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl">4</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">導出使用</h3>
              <p className="text-gray-600 leading-relaxed">下載最終報告，符合監管要求，申請綠色融資</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">業務優勢</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ESG認證為您的企業開啟多重商業機會
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Financial Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">金融優惠</h3>
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-emerald-800 mb-2">較低利率</h4>
                <p className="text-emerald-700">銀行為已驗證ESG合規企業提供優惠利率</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-teal-800 mb-2">增強信譽</h4>
                <p className="text-teal-700">ESG績效改善金融機構整體風險評估</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-cyan-800 mb-2">競爭優勢</h4>
                <p className="text-cyan-700">在貸款申請中脫穎而出，具備可持續發展證書</p>
              </div>
            </div>

            {/* Government Opportunities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">政府合約機會</h3>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-blue-800 mb-2">公共部門合約</h4>
                <p className="text-blue-700">ESG認證大幅提高政府合約中標機會</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-indigo-800 mb-2">投標優勢</h4>
                <p className="text-indigo-700">以驗證的可持續發展證書在競爭對手中脫穎而出</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-purple-800 mb-2">長期合作關係</h4>
                <p className="text-purple-700">透過卓越ESG績效與政府機構建立關係</p>
              </div>
            </div>

            {/* Brand Enhancement */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">品牌提升</h3>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-green-800 mb-2">聲譽提升</h4>
                <p className="text-green-700">透過驗證的可持續發展承諾加強公眾認知</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-emerald-800 mb-2">投資者吸引</h4>
                <p className="text-emerald-700">吸引尋求負責任企業的社會意識投資者</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-teal-800 mb-2">持份者溝通</h4>
                <p className="text-teal-700">與客戶和合作夥伴分享已驗證的ESG成就</p>
              </div>
            </div>
          </div>

          {/* Green Finance Market */}
          <div className="mt-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">香港綠色金融機會</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">$134億</div>
                <div className="text-gray-600 mb-2">2020年</div>
                <div className="text-sm text-gray-500">綠色及可持續債券</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">$410億</div>
                <div className="text-gray-600 mb-2">2021年</div>
                <div className="text-sm text-gray-500">綠色及可持續債券</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">$805億</div>
                <div className="text-gray-600 mb-2">2022年</div>
                <div className="text-sm text-gray-500">綠色及可持續債券</div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 max-w-4xl mx-auto">
              香港已轉型為全球可持續金融領導者，綠色及可持續債券市場見證了前所未有的擴張，
              從2020年的134億美元增長到2022年的805億美元。這一戲劇性增長軌跡彰顯了香港建立亞洲首屈一指綠色金融中心的堅定承諾。
            </p>
          </div>
        </div>
      </section>

      {/* ISO Certification */}
      <section id="certification" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">ISO 17025 認證：全球標準保證</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              每份ESGen報告都符合ISO 17025認證要求，確保符合嚴格國際標準和全面驗證流程
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">全球標準認可</h3>
              <p className="text-gray-600">國際公認的ISO 17025認證為全球利益相關者提供即時可信度</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">驗證技術能力</h3>
              <p className="text-gray-600">我們的方法論和技術能力經過嚴格驗證，確保可靠的可持續發展報告</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">監管合規</h3>
              <p className="text-gray-600">完全符合全球監管要求，增強您ESG報告的可靠性和可信度</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">持份者信任</h3>
              <p className="text-gray-600">我們的ISO 17025認證報告在全球監管機構和金融機構中建立即時可信度</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">準備開始ESG革命？</h2>
          <p className="text-xl text-gray-600 mb-12">
            加入香港ESG生態系統，為您的企業創造可持續的未來
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/generate" className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="flex items-center justify-center">
                免費 1 分鐘快速掃描
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </span>
            </Link>
            <Link href="/about" className="border-2 border-emerald-300 text-emerald-700 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-emerald-50 transition-all duration-300">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h3 className="text-2xl font-bold">ESGEN</h3>
              </div>
              <p className="text-gray-400 mb-6">革命性AI ESG報告平台，助您簡化可持續發展合規，提升競爭優勢</p>
              <div className="space-y-2 text-gray-400">
                <p>📱 +852 2915 6660</p>
                <p>💬 +852 5478 8508</p>
                <p>✉️ renas.hung@codaai.tech</p>
                <p>🌐 esgen.io</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">服務</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/generate" className="hover:text-emerald-400 transition-colors">免費快速掃描</Link></li>
                <li><Link href="/about#consultation" className="hover:text-emerald-400 transition-colors">現場諮詢</Link></li>
                <li><Link href="#benefits" className="hover:text-emerald-400 transition-colors">業務優勢</Link></li>
                <li><Link href="#certification" className="hover:text-emerald-400 transition-colors">ISO 認證</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">技術</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#technology" className="hover:text-emerald-400 transition-colors">AI 驅動技術</Link></li>
                <li><span className="text-gray-500">機器學習評估</span></li>
                <li><span className="text-gray-500">95% 準確度</span></li>
                <li><span className="text-gray-500">即時分析</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">公司</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-emerald-400 transition-colors">關於我們</Link></li>
                <li><span className="text-gray-500">獲HSUHK獎項認可</span></li>
                <li><span className="text-gray-500">ISO 17025 認證</span></li>
                <li><span className="text-gray-500">100+ ESG顧問</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                地址：香港中環威靈頓街6-12號信德商業大廈6樓F室
              </p>
              <p className="text-gray-400">
                &copy; 2024 ESGEN. 版權所有。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}