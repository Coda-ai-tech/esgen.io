'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GeneratePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    size: '',
    location: '',
    frameworks: [] as string[],
    fiscalYear: '2024',
    description: '',
    materialTopics: [] as string[],
    scope1: '',
    scope2: '',
    scope3: '',
    evidence: [] as string[]
  });

  const industries = [
    '金融服務', '製造業', '科技', '零售', '房地產', '能源', '醫療保健', '教育', '其他'
  ];

  const companySizes = [
    '小型企業 (少於50人)', '中型企業 (50-250人)', '大型企業 (250人以上)'
  ];

  const frameworks = [
    'GRI (全球報告倡議組織)', 'TCFD (氣候相關財務資訊揭露)', 'SASB (可持續性會計準則委員會)', 'ISSB (國際可持續性準則委員會)'
  ];

  const materialTopics = [
    '氣候變化', '能源管理', '水資源管理', '廢物管理', '員工多樣性', '職業健康安全', 
    '供應鏈管理', '數據隱私', '反貪腐', '社區投資', '產品質量', '創新研發'
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFrameworkChange = (framework: string) => {
    const newFrameworks = formData.frameworks.includes(framework)
      ? formData.frameworks.filter(f => f !== framework)
      : [...formData.frameworks, framework];
    setFormData({ ...formData, frameworks: newFrameworks });
  };

  const handleTopicChange = (topic: string) => {
    const newTopics = formData.materialTopics.includes(topic)
      ? formData.materialTopics.filter(t => t !== topic)
      : [...formData.materialTopics, topic];
    setFormData({ ...formData, materialTopics: newTopics });
  };

  const handleSubmit = () => {
    // Here we would normally send data to API and generate report
    alert('報告生成功能即將推出！我們會將您重定向到預覽頁面。');
    // Redirect to preview page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ESGEN</h1>
            </Link>
            <div className="text-lg font-semibold text-gray-700">步驟 {step} / 4</div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex-1 relative">
                <div className={`h-2 rounded-full transition-all duration-500 ${
                  num <= step 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                    : 'bg-gray-200'
                }`} />
                <div className={`pt-3 pb-6 text-sm font-medium transition-colors duration-300 ${
                  num <= step ? 'text-emerald-600' : 'text-gray-400'
                }`}>
                  {num === 1 && '公司資料'}
                  {num === 2 && '框架選擇'}
                  {num === 3 && '重要議題'}
                  {num === 4 && '數據收集'}
                </div>
                {num <= step && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-white/20">
          
          {/* Step 1: Company Information */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">公司基本資料</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    公司名稱 *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="請輸入公司名稱"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    行業 *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">請選擇行業</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    公司規模 *
                  </label>
                  <select
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">請選擇公司規模</option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    主要營運地點
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="例如：香港、中國大陸、亞太地區"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    公司簡介
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="簡述您的公司業務和可持續發展目標..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Framework Selection */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">ESG報告框架</h2>
              <p className="text-gray-600 mb-6">
                選擇您希望遵循的ESG報告框架。您可以選擇多個框架。
              </p>
              <div className="space-y-4">
                {frameworks.map((framework) => (
                  <div key={framework} className="flex items-start">
                    <input
                      type="checkbox"
                      id={framework}
                      checked={formData.frameworks.includes(framework)}
                      onChange={() => handleFrameworkChange(framework)}
                      className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor={framework} className="ml-3 text-sm text-gray-700">
                      {framework}
                    </label>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  報告年度
                </label>
                <select
                  value={formData.fiscalYear}
                  onChange={(e) => setFormData({ ...formData, fiscalYear: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Material Topics */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">重要性議題</h2>
              <p className="text-gray-600 mb-6">
                選擇對您公司最重要的ESG議題。這將幫助我們生成更相關的報告內容。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {materialTopics.map((topic) => (
                  <div key={topic} className="flex items-start">
                    <input
                      type="checkbox"
                      id={topic}
                      checked={formData.materialTopics.includes(topic)}
                      onChange={() => handleTopicChange(topic)}
                      className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor={topic} className="ml-3 text-sm text-gray-700">
                      {topic}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Data Collection */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">溫室氣體排放數據</h2>
              <p className="text-gray-600 mb-6">
                提供您公司的溫室氣體排放數據。如果暫時沒有確切數據，請填寫估算值或留空。
              </p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    範圍一排放 (Scope 1) - 直接排放
                  </label>
                  <input
                    type="text"
                    value={formData.scope1}
                    onChange={(e) => setFormData({ ...formData, scope1: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="例如：1,200 噸 CO2e"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    範圍二排放 (Scope 2) - 能源間接排放
                  </label>
                  <input
                    type="text"
                    value={formData.scope2}
                    onChange={(e) => setFormData({ ...formData, scope2: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="例如：3,500 噸 CO2e"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    範圍三排放 (Scope 3) - 其他間接排放
                  </label>
                  <input
                    type="text"
                    value={formData.scope3}
                    onChange={(e) => setFormData({ ...formData, scope3: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="例如：8,900 噸 CO2e"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-blue-800 mb-2">溫馨提示</h3>
                  <p className="text-sm text-blue-700">
                    如果您沒有確切的排放數據，我們的AI會根據您的行業和公司規模提供合理的估算值，
                    並在報告中標明這些是估算數據。
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-6 py-2 rounded-lg ${
                step === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              上一步
            </button>

            {step < 4 ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && (!formData.companyName || !formData.industry || !formData.size)) ||
                  (step === 2 && formData.frameworks.length === 0)
                }
                className={`px-6 py-2 rounded-lg ${
                  (step === 1 && (!formData.companyName || !formData.industry || !formData.size)) ||
                  (step === 2 && formData.frameworks.length === 0)
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                下一步
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                生成報告
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
