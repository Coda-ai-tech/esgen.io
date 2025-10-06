'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { StatusIndicator } from "@/components/dashboard/StatusIndicator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Calendar, Download, RefreshCw, TrendingUp, AlertCircle, Target, FileText } from "lucide-react";

interface ESGAnalysisDashboardProps {
  answers: Record<number, any>;
  onRestart: () => void;
}

export default function ESGAnalysisDashboard({ answers, onRestart }: ESGAnalysisDashboardProps) {
  // AI Analysis Logic - Analyze answers and generate insights
  const analyzeESGPerformance = () => {
    let environmentalScore = 50;
    let socialScore = 50;
    let governanceScore = 50;

    // Analyze company size (Q2)
    if (answers[2]) {
      if (answers[2].includes('大型') || answers[2].includes('1000+') || answers[2].includes('Enterprise')) governanceScore += 10;
    }

    // Analyze ESG policy (Q6)
    if (answers[6]) {
      if (answers[6].includes('全面實施') || answers[6].includes('fully implemented')) {
        governanceScore += 15;
        socialScore += 10;
      } else if (answers[6].includes('部分') || answers[6].includes('partially')) {
        governanceScore += 8;
      }
    }

    // Analyze frameworks (Q7)
    if (answers[7] && Array.isArray(answers[7])) {
      const frameworkCount = answers[7].length;
      governanceScore += frameworkCount * 5;
    }

    // Analyze ESG maturity (Q8)
    if (answers[8]) {
      const maturity = parseInt(answers[8]) || 5;
      const bonus = (maturity - 5) * 3;
      environmentalScore += bonus;
      socialScore += bonus;
      governanceScore += bonus;
    }

    // Analyze initiatives (Q9)
    if (answers[9] && Array.isArray(answers[9])) {
      const initiatives = answers[9];
      const envInitiatives = initiatives.filter((i: string) => 
        i.includes('碳') || i.includes('carbon') || i.includes('能源') || i.includes('energy') || 
        i.includes('廢物') || i.includes('waste') || i.includes('水') || i.includes('water')
      ).length;
      const socialInitiatives = initiatives.filter((i: string) => 
        i.includes('多元') || i.includes('diversity') || i.includes('員工') || i.includes('employee') ||
        i.includes('社區') || i.includes('community')
      ).length;
      const govInitiatives = initiatives.filter((i: string) => 
        i.includes('管治') || i.includes('governance') || i.includes('道德') || i.includes('ethical')
      ).length;

      environmentalScore += envInitiatives * 8;
      socialScore += socialInitiatives * 8;
      governanceScore += govInitiatives * 8;
    }

    // Analyze challenges (Q12)
    if (answers[12] && Array.isArray(answers[12])) {
      const challengeCount = answers[12].length;
      // More challenges means more awareness but lower maturity
      environmentalScore -= challengeCount * 2;
      socialScore -= challengeCount * 2;
      governanceScore -= challengeCount * 2;
    }

    // Analyze stakeholder importance (Q13)
    if (answers[13]) {
      if (answers[13].includes('至關重要') || answers[13].includes('Critical')) {
        socialScore += 15;
        governanceScore += 10;
      } else if (answers[13].includes('非常重要') || answers[13].includes('Very important')) {
        socialScore += 10;
        governanceScore += 8;
      }
    }

    // Cap scores between 0 and 100
    environmentalScore = Math.min(Math.max(environmentalScore, 0), 100);
    socialScore = Math.min(Math.max(socialScore, 0), 100);
    governanceScore = Math.min(Math.max(governanceScore, 0), 100);

    const overallScore = Math.round((environmentalScore + socialScore + governanceScore) / 3);

    return {
      environmental: Math.round(environmentalScore),
      social: Math.round(socialScore),
      governance: Math.round(governanceScore),
      overall: overallScore
    };
  };

  const scores = analyzeESGPerformance();

  // Generate trend data (simulated)
  const trendData = [
    { month: "1月", environmental: Math.max(scores.environmental - 15, 30), social: Math.max(scores.social - 12, 35), governance: Math.max(scores.governance - 10, 40) },
    { month: "2月", environmental: Math.max(scores.environmental - 12, 35), social: Math.max(scores.social - 10, 38), governance: Math.max(scores.governance - 8, 42) },
    { month: "3月", environmental: Math.max(scores.environmental - 9, 40), social: Math.max(scores.social - 8, 40), governance: Math.max(scores.governance - 6, 44) },
    { month: "4月", environmental: Math.max(scores.environmental - 6, 45), social: Math.max(scores.social - 5, 43), governance: Math.max(scores.governance - 4, 46) },
    { month: "5月", environmental: Math.max(scores.environmental - 3, 48), social: Math.max(scores.social - 3, 46), governance: Math.max(scores.governance - 2, 48) },
    { month: "6月", environmental: scores.environmental, social: scores.social, governance: scores.governance },
  ];

  const complianceData = [
    { name: "環境", value: scores.environmental, color: "#10b981" },
    { name: "社會", value: scores.social, color: "#f59e0b" },
    { name: "管治", value: scores.governance, color: "#3b82f6" },
  ];

  // Generate AI recommendations based on scores
  const generateRecommendations = () => {
    const recommendations = [];
    
    if (scores.environmental < 70) {
      recommendations.push({
        category: "環境",
        title: "加強環境管理措施",
        description: "建議實施全面的碳足跡監測系統，設定明確的減排目標",
        priority: "high"
      });
    }
    
    if (scores.social < 70) {
      recommendations.push({
        category: "社會",
        title: "提升社會責任表現",
        description: "加強員工多元化計劃和社區參與活動，提高持份者滿意度",
        priority: "high"
      });
    }
    
    if (scores.governance < 70) {
      recommendations.push({
        category: "管治",
        title: "完善企業管治架構",
        description: "建立正式的ESG政策框架，確保符合國際報告標準",
        priority: "high"
      });
    }

    // Add positive reinforcements
    if (scores.environmental >= 80) {
      recommendations.push({
        category: "環境",
        title: "保持環境領先地位",
        description: "繼續優化環境績效，考慮申請ISO 14001認證",
        priority: "medium"
      });
    }

    return recommendations;
  };

  const recommendations = generateRecommendations();

  const getScoreStatus = (score: number): "excellent" | "good" | "fair" | "poor" => {
    if (score >= 85) return "excellent";
    if (score >= 70) return "good";
    if (score >= 55) return "fair";
    return "poor";
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ESG分析儀表板</h1>
          <p className="text-gray-600">基於AI的可持續發展指標實時分析</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            最近30天
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Download className="h-4 w-4 mr-2" />
            導出報告
          </Button>
          <Button size="sm" onClick={onRestart}>
            <RefreshCw className="h-4 w-4 mr-2" />
            重新評估
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="整體ESG評分"
          value={scores.overall}
          unit="/100"
          change={2.1}
          changeType="increase"
          description="跨所有類別的綜合評分"
          target="95"
        />
        <MetricCard
          title="環境評分"
          value={scores.environmental}
          unit="/100"
          change={scores.environmental > 70 ? 3.2 : -1.5}
          changeType={scores.environmental > 70 ? "increase" : "decrease"}
          category="environmental"
          description="環境管理績效"
          target="85"
        />
        <MetricCard
          title="社會評分"
          value={scores.social}
          unit="/100"
          change={scores.social > 70 ? 1.8 : -0.8}
          changeType={scores.social > 70 ? "increase" : "decrease"}
          category="social"
          description="社會責任表現"
          target="85"
        />
        <MetricCard
          title="管治評分"
          value={scores.governance}
          unit="/100"
          change={scores.governance > 70 ? 2.5 : 0}
          changeType={scores.governance > 70 ? "increase" : "neutral"}
          category="governance"
          description="企業管治評估"
          target="90"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>ESG評分趨勢</CardTitle>
            <CardDescription>6個月內各類別的表現</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "white", 
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px"
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="environmental" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="環境"
                />
                <Line 
                  type="monotone" 
                  dataKey="social" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="社會"
                />
                <Line 
                  type="monotone" 
                  dataKey="governance" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="管治"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Compliance Overview */}
        <Card>
          <CardHeader>
            <CardTitle>合規概覽</CardTitle>
            <CardDescription>各類別當前的合規評分</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={complianceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                >
                  {complianceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "white", 
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px"
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-4">
              {complianceData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Status */}
        <Card>
          <CardHeader>
            <CardTitle>當前狀態</CardTitle>
            <CardDescription>實時監測警報</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <StatusIndicator 
              status={getScoreStatus(scores.environmental)} 
              label="環境管理" 
              description={`當前評分: ${scores.environmental}/100`}
            />
            <StatusIndicator 
              status={getScoreStatus(scores.social)} 
              label="社會責任" 
              description={`當前評分: ${scores.social}/100`}
            />
            <StatusIndicator 
              status={getScoreStatus(scores.governance)} 
              label="企業管治" 
              description={`當前評分: ${scores.governance}/100`}
            />
            <StatusIndicator 
              status={scores.overall >= 75 ? "excellent" : "good"} 
              label="整體表現" 
              description={`綜合評分: ${scores.overall}/100`}
            />
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>AI智能建議</CardTitle>
                <CardDescription>基於您的答案的個性化改進建議</CardDescription>
              </div>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                AI生成
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-emerald-600" />
                      <span className="font-medium text-sm">{rec.title}</span>
                    </div>
                    <Badge 
                      variant={rec.priority === "high" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {rec.priority === "high" ? "高優先" : "中優先"}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{rec.description}</p>
                  <div className="mt-2">
                    <Badge variant="outline" className="text-xs">
                      {rec.category}
                    </Badge>
                  </div>
                </div>
              ))}
              {recommendations.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <p className="text-sm">您的ESG表現優秀！繼續保持。</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Company Information Summary */}
      <Card>
        <CardHeader>
          <CardTitle>公司ESG概況</CardTitle>
          <CardDescription>基於評估問卷的公司信息摘要</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">公司名稱</h4>
              <p className="text-base font-semibold">{answers[1] || "未提供"}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">行業</h4>
              <p className="text-base font-semibold">{answers[3] || "未提供"}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">公司規模</h4>
              <p className="text-base font-semibold">{answers[2] || "未提供"}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">ESG成熟度</h4>
              <p className="text-base font-semibold">{answers[8] ? `${answers[8]}/10` : "未提供"}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">當前措施數量</h4>
              <p className="text-base font-semibold">
                {answers[9] && Array.isArray(answers[9]) ? answers[9].length : 0} 項
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">報告框架</h4>
              <p className="text-base font-semibold">
                {answers[7] && Array.isArray(answers[7]) ? answers[7].length : 0} 個框架
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-emerald-600" />
            <span>下一步行動</span>
          </CardTitle>
          <CardDescription>根據分析結果，建議採取以下步驟</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-gray-900">聯繫專業顧問</h4>
                <p className="text-sm text-gray-600 mt-1">與我們的ESG專家團隊討論詳細的改進計劃</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-gray-900">制定行動計劃</h4>
                <p className="text-sm text-gray-600 mt-1">基於AI建議，制定6-12個月的ESG改進路線圖</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-gray-900">申請認證</h4>
                <p className="text-sm text-gray-600 mt-1">考慮申請ISO 17025或其他相關ESG認證</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3">
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
              聯繫顧問團隊
            </Button>
            <Button variant="outline">
              下載完整報告
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
