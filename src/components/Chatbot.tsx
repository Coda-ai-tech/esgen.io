'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowRight, ArrowLeft, FileText, TrendingUp, AlertCircle, Target, Download, Sparkles, X, Maximize2, Minimize2 } from 'lucide-react'
import ESGAnalysisDashboard from './ESGAnalysisDashboard'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

import { esgQuestions, type Question } from '@/data/esgQuestions'

type ChatMode = "chat" | "assessment" | "report";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [chatMode, setChatMode] = useState<ChatMode>("chat")
  const [showWelcome, setShowWelcome] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '您好！我是ESGEN AI助手，可以幫助您了解ESG報告、可持續發展相關問題。您也可以開始ESG評估來獲得個性化建議。有什麼我可以為您解答的嗎？',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [showInitialOptions, setShowInitialOptions] = useState(true)
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  
  // Assessment state
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, any>>({})
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleOptionClick = (option: number) => {
    setShowInitialOptions(false)
    
    const optionTexts = [
      '開始1分鐘快速ESG評估',
      '尋找合適的ESG顧問',
      '獲取我的公司ESG報告或認證'
    ]
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: optionTexts[option - 1],
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)
    
    setTimeout(() => {
      if (option === 1) {
        // Start assessment
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: '好的！我將為您開始快速ESG評估。這將幫助您了解當前的ESG狀況並獲得個性化建議。',
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
        setIsTyping(false)
        startAssessment()
      } else if (option === 2) {
        // Find consultant
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: '我們擁有100+專業ESG顧問團隊。請聯繫我們：\n📱 電話：+852 2915 6660\n💬 WhatsApp：+852 5478 8508\n✉️ 電郵：renas.hung@codaai.tech\n\n我們的顧問將根據您的行業和需求，為您匹配最合適的專家。',
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
        setIsTyping(false)
      } else if (option === 3) {
        // Get report/certification
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: 'ESGEN提供符合ISO 17025國際認證的ESG報告服務。我們的報告包括：\n\n✓ 全面的ESG評分和分析\n✓ SWOT分析和改進建議\n✓ 行業對標和最佳實踐\n✓ 符合GRI、TCFD、SASB等框架\n\n您想現在開始評估嗎？或者聯繫我們的顧問了解更多詳情。',
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
        setIsTyping(false)
      }
    }, 1000)
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Check if user wants to start assessment
    if (inputText.toLowerCase().includes('評估') || inputText.toLowerCase().includes('assessment') || inputText.toLowerCase().includes('開始')) {
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: '好的！我將為您開始ESG評估。這將幫助您了解當前的ESG狀況並獲得個性化建議。',
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
        setIsTyping(false)
        startAssessment()
      }, 1000)
      return
    }

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000)
  }

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('esg') || input.includes('環境') || input.includes('社會') || input.includes('管治')) {
      return 'ESG代表環境(Environmental)、社會(Social)和管治(Governance)。我們的AI平台可以幫助您快速生成符合國際標準的ESG報告，包括ISO 17025認證。您想了解哪個具體方面？'
    }
    
    if (input.includes('報告') || input.includes('生成')) {
      return 'ESGEN提供革命性的AI驅動ESG報告生成服務。只需4個簡單步驟：1) 填寫公司資料 2) AI智能生成 3) 專業驗證 4) 導出使用。整個過程只需30分鐘，準確度達95%。'
    }
    
    if (input.includes('價格') || input.includes('費用') || input.includes('成本')) {
      return '我們提供免費1分鐘快速掃描服務，讓您體驗AI ESG分析。完整報告服務價格根據企業規模和需求而定，相比傳統ESG顧問服務可節省70%成本。'
    }
    
    if (input.includes('認證') || input.includes('iso')) {
      return 'ESGEN擁有ISO 17025國際認證，確保每份報告都符合嚴格國際標準。這為您的ESG報告提供全球認可的可信度，特別適合申請綠色融資和政府合約。'
    }
    
    if (input.includes('綠色融資') || input.includes('融資')) {
      return '香港綠色債券市場從2020年134億美元增長到2022年805億美元。擁有ESG認證的企業可獲得較低利率貸款，並在政府合約投標中獲得優勢。'
    }
    
    if (input.includes('時間') || input.includes('多久')) {
      return '傳統ESG報告需要3-6個月，而ESGEN的AI平台可在30分鐘內完成初步分析，大幅節省時間和成本。'
    }
    
    if (input.includes('聯繫') || input.includes('電話') || input.includes('諮詢')) {
      return '您可以通過以下方式聯繫我們：\n📱 電話：+852 2915 6660\n💬 WhatsApp：+852 5478 8508\n✉️ 電郵：renas.hung@codaai.tech\n🌐 網站：esgen.io'
    }
    
    return '感謝您的問題！ESGEN是香港領先的AI ESG報告平台，我們可以幫助您快速生成專業的ESG報告。如果您需要更詳細的信息，建議您聯繫我們的專業顧問團隊。'
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsFullScreen(false)
    setChatMode("chat")
  }

  const startAssessment = () => {
    setShowWelcome(true)
    setChatMode("assessment")
    setCurrentQuestion(0)
    setAnswers({})
  }

  const startQuestionnaire = () => {
    setShowWelcome(false)
  }

  const handleAnswerChange = (questionId: number, answer: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  }

  const handleNext = () => {
    if (currentQuestion < esgQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setChatMode("report");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setChatMode("chat");
    setCurrentQuestion(0);
    setAnswers({});
    setShowWelcome(false);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'company': return '公司資料';
      case 'esg-policy': return 'ESG政策';
      case 'initiatives': return 'ESG措施';
      case 'goals': return '目標與挑戰';
      case 'data': return '數據收集';
      default: return '';
    }
  };

  const currentQuestionData = esgQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestionData?.id];

  const canGoNext = () => {
    if (!currentQuestionData) return false;

    switch (currentQuestionData.type) {
      case "radio":
        return !!currentAnswer;
      case "text":
      case "textarea":
        return currentAnswer && currentAnswer.trim().length > 0;
      case "rating":
        return currentAnswer !== undefined && currentAnswer !== null;
      case "checkbox":
        return currentAnswer && currentAnswer.length > 0;
      default:
        return false;
    }
  };

  const calculateScore = () => {
    let score = 0;
    const rating = answers[8] || 5;
    score += rating * 5;

    if (answers[6]?.length > 0) score += answers[6].length * 5;
    if (answers[7]) score += 15;
    if (answers[9]?.length > 0) score += 10;

    return Math.min(score, 100);
  };

  const esgScore = calculateScore();

  const getScoreGrade = (score: number) => {
    if (score >= 80) return { grade: "A", label: "Excellent", color: "text-green-600" };
    if (score >= 60) return { grade: "B", label: "Good", color: "text-blue-600" };
    if (score >= 40) return { grade: "C", label: "Fair", color: "text-yellow-600" };
    return { grade: "D", label: "Needs Improvement", color: "text-red-600" };
  };

  const scoreInfo = getScoreGrade(esgScore);

  const renderQuestion = () => {
    if (!currentQuestionData) return null;

    switch (currentQuestionData.type) {
      case "radio":
        return (
          <RadioGroup value={currentAnswer} onValueChange={(value) => handleAnswerChange(currentQuestionData.id, value)} className="space-y-3">
            {(currentQuestionData.optionsZh || currentQuestionData.options)?.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 bg-emerald-50/50 rounded-lg p-4 hover:bg-emerald-50 transition-colors cursor-pointer border border-emerald-100">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "text":
        return (
          <Input
            value={currentAnswer || ""}
            onChange={(e) => handleAnswerChange(currentQuestionData.id, e.target.value)}
            placeholder={currentQuestionData.placeholderZh || currentQuestionData.placeholder}
            className="text-lg p-6 border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        );

      case "textarea":
        return (
          <Textarea
            value={currentAnswer || ""}
            onChange={(e) => handleAnswerChange(currentQuestionData.id, e.target.value)}
            placeholder={currentQuestionData.placeholderZh || currentQuestionData.placeholder}
            className="min-h-[150px] text-lg p-6 border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        );

      case "rating":
        return (
          <div className="space-y-6">
            <div className="flex justify-between text-sm text-gray-600 px-2">
              <span>完全沒有</span>
              <span>非常優秀</span>
            </div>
            <Slider
              value={[currentAnswer || 5]}
              onValueChange={(value) => handleAnswerChange(currentQuestionData.id, value[0])}
              min={1}
              max={10}
              step={1}
              className="py-4"
            />
            <div className="text-center">
              <span className="text-4xl font-bold text-emerald-600">{currentAnswer || 5}</span>
              <span className="text-gray-500 ml-2 text-lg">/ 10</span>
            </div>
          </div>
        );

      case "checkbox":
        return (
          <div className="space-y-3">
            {(currentQuestionData.optionsZh || currentQuestionData.options)?.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 bg-emerald-50/50 rounded-lg p-4 hover:bg-emerald-50 transition-colors border border-emerald-100">
                <Checkbox
                  id={`checkbox-${index}`}
                  checked={currentAnswer?.includes(option)}
                  onCheckedChange={(checked) => {
                    const current = currentAnswer || [];
                    if (checked) {
                      handleAnswerChange(currentQuestionData.id, [...current, option]);
                    } else {
                      handleAnswerChange(currentQuestionData.id, current.filter((item: string) => item !== option));
                    }
                  }}
                />
                <Label htmlFor={`checkbox-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isFullScreen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center p-2"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-emerald-500" />
          ) : (
            <img src="/ESGuin Logo_chat.png" alt="ESGuin Chat" className="w-full h-full object-contain" />
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`${isFullScreen ? 'fixed inset-0 z-50' : 'fixed bottom-24 right-6 w-96 h-[500px]'} bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3 p-1">
                  <img src="/esguin.png" alt="ESGuin" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold">ESGEN AI助手 ESGuin</h3>
                  <p className="text-xs text-emerald-100">在線 • 即時回應</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Assessment Button */}
                <button
                  onClick={startAssessment}
                  className="text-white/80 hover:text-white transition-colors p-1"
                  title="開始ESG評估"
                >
                  <FileText className="w-5 h-5" />
                </button>
                {/* Full Screen Toggle */}
                <button
                  onClick={toggleFullScreen}
                  className="text-white/80 hover:text-white transition-colors p-1"
                  title={isFullScreen ? '退出全屏' : '全屏模式'}
                >
                  {isFullScreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
                {/* Close Button */}
                <button
                  onClick={closeChat}
                  className="text-white/80 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {chatMode === "chat" && (
              <>
                {/* Messages */}
                <div className="p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.isUser
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString('zh-HK', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Initial Options */}
                {showInitialOptions && (
                  <div className="px-4 pb-4 space-y-2">
                    <button
                      onClick={() => handleOptionClick(1)}
                      className="w-full text-left px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                    >
                      1. 開始1分鐘快速ESG評估
                    </button>
                    <button
                      onClick={() => handleOptionClick(2)}
                      className="w-full text-left px-4 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border-2 border-emerald-200 font-medium"
                    >
                      2. 尋找合適的ESG顧問
                    </button>
                    <button
                      onClick={() => handleOptionClick(3)}
                      className="w-full text-left px-4 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border-2 border-emerald-200 font-medium"
                    >
                      3. 獲取我的公司ESG報告或認證
                    </button>
                  </div>
                )}

                {/* Input */}
                {!showInitialOptions && (
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="輸入您的問題..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim()}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {chatMode === "assessment" && !showWelcome && (
              <div className="flex flex-col h-full">
                {/* Progress Bar */}
                <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
                      style={{ width: `${((currentQuestion + 1) / esgQuestions.length) * 100}%` }}
                    />
                  </div>
                  <div className="px-4 py-2 text-sm font-medium text-emerald-600">
                    {getCategoryLabel(currentQuestionData?.category || '')}
                  </div>
                </div>

                {/* Question Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                      {/* Question Header */}
                      <div className="mb-8">
                        <p className="text-sm font-medium text-emerald-600 mb-2">
                          問題 {currentQuestion + 1} / {esgQuestions.length}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                          {currentQuestionData?.questionZh || currentQuestionData?.question}
                        </h2>
                      </div>

                      {/* Question Content */}
                      <div className="mb-10">{renderQuestion()}</div>

                      {/* Navigation Buttons */}
                      <div className="flex gap-4">
                        {currentQuestion > 0 && (
                          <Button
                            onClick={handlePrevious}
                            variant="outline"
                            className="flex-1 h-12 text-base border-2 border-gray-300 hover:bg-gray-50"
                          >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            上一步
                          </Button>
                        )}
                        <Button
                          onClick={handleNext}
                          disabled={!canGoNext()}
                          className="flex-1 h-12 text-base bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {currentQuestion === esgQuestions.length - 1 ? "生成報告" : "下一步"}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-8 text-center text-sm text-gray-500">
                        已完成 {currentQuestion + 1} / {esgQuestions.length} 個問題
                      </div>
                    </div>

                    {/* Category Progress */}
                    <div className="mt-6 grid grid-cols-5 gap-2">
                      {['company', 'esg-policy', 'initiatives', 'goals', 'data'].map((cat) => {
                        const categoryQuestions = esgQuestions.filter(q => q.category === cat);
                        const completedInCategory = categoryQuestions.filter(q => answers[q.id] !== undefined).length;
                        const totalInCategory = categoryQuestions.length;
                        
                        return (
                          <div key={cat} className="text-center">
                            <div className="text-xs text-gray-600 mb-1">{getCategoryLabel(cat)}</div>
                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                                style={{ width: `${(completedInCategory / totalInCategory) * 100}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {chatMode === "assessment" && showWelcome && (
              <div className="flex items-center justify-center p-6 h-full overflow-y-auto">
                <div className="max-w-2xl w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                      ESG評估
                    </h1>
                    
                    <p className="text-center text-lg text-gray-600 mb-2">
                      全面評估模式
                    </p>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8" />
                    
                    <div className="space-y-6 mb-10">
                      <p className="text-center text-gray-700 leading-relaxed">
                        歡迎使用ESGEN全面ESG評估。我將引導您完成15個問題，
                        以了解您的業務、當前可持續發展實踐和ESG目標。
                      </p>
                      
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 space-y-3 border border-emerald-100">
                        <h3 className="font-semibold text-gray-900 mb-3">您將獲得：</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                            <span>15個針對您業務的定制問題</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                            <span>全面的ESG評分和分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                            <span>行業特定建議和SWOT分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                            <span>為您的組織量身定制的可行ESG目標</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={startQuestionnaire}
                      className="w-full h-14 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      開始評估
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {chatMode === "report" && (
              <div className="h-full overflow-y-auto">
                <ESGAnalysisDashboard answers={answers} onRestart={handleRestart} />
              </div>
            )}

            {chatMode === "report_old" && (
              <div className="p-6">
                <div className="max-w-5xl mx-auto">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                      ESG評估報告
                    </h1>
                    <p className="text-gray-600">
                      全面分析您組織的ESG策略
                    </p>
                  </div>

                  {/* ESG Score Card */}
                  <Card className="mb-8 p-8 shadow-lg border border-gray-200">
                    <div className="text-center">
                      <h2 className="text-2xl font-semibold mb-6 text-gray-900">整體ESG評分</h2>
                      <div className="relative inline-block">
                        <div className="w-48 h-48 rounded-full border-8 border-gray-200 flex items-center justify-center mx-auto mb-4">
                          <div>
                            <div className={`text-6xl font-bold ${scoreInfo.color}`}>
                              {esgScore}
                            </div>
                            <div className="text-sm text-gray-500">out of 100</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className={`text-3xl font-bold ${scoreInfo.color}`}>
                          Grade {scoreInfo.grade}
                        </span>
                        <span className="text-xl text-gray-500 ml-3">
                          - {scoreInfo.label}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Recommendations */}
                    <Card className="p-6 shadow-lg border border-gray-200">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <TrendingUp className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            主要建議
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Develop a comprehensive ESG policy framework aligned with {answers[2] || "industry"} standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Implement regular sustainability reporting and KPI tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Establish stakeholder engagement programs for transparency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Set measurable targets for carbon footprint reduction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Invest in employee training on sustainability practices</span>
                        </li>
                      </ul>
                    </Card>

                    {/* SWOT Analysis */}
                    <Card className="p-6 shadow-lg border border-gray-200">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <AlertCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            SWOT分析
                          </h3>
                        </div>
                      </div>
                      <div className="space-y-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Strengths</h4>
                          <p className="text-gray-600">
                            Established presence in {answers[2] || "your industry"}, existing ESG awareness
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Weaknesses</h4>
                          <p className="text-gray-600">
                            Limited formal ESG framework, room for improved measurement systems
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">Opportunities</h4>
                          <p className="text-gray-600">
                            Growing stakeholder demand, competitive advantage through sustainability leadership
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-600 mb-2">Threats</h4>
                          <p className="text-gray-600">
                            Increasing regulatory requirements, competitor advancement in ESG
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-10 flex gap-4 justify-center">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => window.print()}
                    >
                      <Download className="w-4 h-4" />
                      下載報告
                    </Button>
                    <Button
                      onClick={handleRestart}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90"
                    >
                      開始新評估
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}