'use client';

import { useState } from 'react';
import Link from 'next/link';
import { esgQuestions } from '@/data/esgQuestions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

export default function GeneratePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showWelcome, setShowWelcome] = useState(true);

  const currentQuestionData = esgQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestionData?.id];

  const handleAnswerChange = (questionId: number, answer: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < esgQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Generate report
      alert('報告生成功能即將推出！我們會將您重定向到預覽頁面。');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

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

  const renderQuestion = () => {
    if (!currentQuestionData) return null;

    switch (currentQuestionData.type) {
      case "radio":
        return (
          <RadioGroup 
            value={currentAnswer} 
            onValueChange={(value) => handleAnswerChange(currentQuestionData.id, value)} 
            className="space-y-3"
          >
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

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ESGEN</h1>
              </Link>
            </div>
          </div>
        </header>

        {/* Welcome Screen */}
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-6">
          <div className="max-w-2xl w-full animate-fade-in">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
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
                onClick={() => setShowWelcome(false)}
                className="w-full h-14 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                開始評估
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ESGEN</h1>
            </Link>
            <div className="text-lg font-semibold text-gray-700">
              問題 {currentQuestion + 1} / {esgQuestions.length}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / esgQuestions.length) * 100}%` }}
            />
          </div>
          <div className="py-3 text-sm font-medium text-emerald-600">
            {getCategoryLabel(currentQuestionData?.category || '')}
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Question Header */}
            <div className="mb-8">
              <p className="text-sm font-medium text-emerald-600 mb-2">
                問題 {currentQuestion + 1} / {esgQuestions.length}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {currentQuestionData?.questionZh || currentQuestionData?.question}
              </h2>
            </div>

            {/* Question Content */}
            <div className="mb-10">
              {renderQuestion()}
            </div>

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
        </div>

        {/* Optional: Category Progress */}
        <div className="mt-8 grid grid-cols-5 gap-2">
          {['company', 'esg-policy', 'initiatives', 'goals', 'data'].map((cat, idx) => {
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
  );
}
