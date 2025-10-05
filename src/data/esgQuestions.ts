export type QuestionType = "radio" | "text" | "textarea" | "rating" | "checkbox";

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  questionZh: string;
  options?: string[];
  optionsZh?: string[];
  placeholder?: string;
  placeholderZh?: string;
  category: "company" | "esg-policy" | "initiatives" | "goals" | "data";
}

export const esgQuestions: Question[] = [
  // Company Information (Steps 1-5)
  {
    id: 1,
    type: "text",
    question: "What is your company name?",
    questionZh: "您的公司名稱是什麼？",
    placeholder: "Enter your company name",
    placeholderZh: "請輸入公司名稱",
    category: "company"
  },
  {
    id: 2,
    type: "radio",
    question: "What is your company size?",
    questionZh: "您的公司規模是多少？",
    options: [
      "Startup (1-10 employees)",
      "Small (11-50 employees)",
      "Medium (51-250 employees)",
      "Large (251-1000 employees)",
      "Enterprise (1000+ employees)",
    ],
    optionsZh: [
      "初創企業 (1-10人)",
      "小型企業 (11-50人)",
      "中型企業 (51-250人)",
      "大型企業 (251-1000人)",
      "大型集團 (1000人以上)",
    ],
    category: "company"
  },
  {
    id: 3,
    type: "radio",
    question: "Which industry does your business operate in?",
    questionZh: "您的企業在哪個行業營運？",
    options: [
      "Technology & Software",
      "Manufacturing",
      "Healthcare",
      "Financial Services",
      "Retail & E-commerce",
      "Energy & Utilities",
      "Professional Services",
      "Real Estate",
      "Other",
    ],
    optionsZh: [
      "科技及軟件",
      "製造業",
      "醫療保健",
      "金融服務",
      "零售及電子商務",
      "能源及公用事業",
      "專業服務",
      "房地產",
      "其他",
    ],
    category: "company"
  },
  {
    id: 4,
    type: "text",
    question: "Where is your primary business location?",
    questionZh: "您的主要營運地點在哪裡？",
    placeholder: "e.g., Hong Kong, China, Asia Pacific",
    placeholderZh: "例如：香港、中國大陸、亞太地區",
    category: "company"
  },
  {
    id: 5,
    type: "textarea",
    question: "Briefly describe your business and its primary activities.",
    questionZh: "請簡要描述您的業務及其主要活動。",
    placeholder: "Tell us about your business operations and services...",
    placeholderZh: "簡述您的公司業務和可持續發展目標...",
    category: "company"
  },
  
  // ESG Policy & Framework (Steps 6-8)
  {
    id: 6,
    type: "radio",
    question: "Does your company currently have a formal ESG policy?",
    questionZh: "貴公司目前是否有正式的ESG政策？",
    options: [
      "Yes, fully implemented",
      "Yes, partially implemented",
      "In development",
      "Planning to develop",
      "No formal policy",
    ],
    optionsZh: [
      "是，已全面實施",
      "是，部分實施",
      "正在制定中",
      "計劃制定",
      "沒有正式政策",
    ],
    category: "esg-policy"
  },
  {
    id: 7,
    type: "checkbox",
    question: "Which ESG reporting frameworks are you interested in? (Select all that apply)",
    questionZh: "您希望遵循哪些ESG報告框架？（可選多項）",
    options: [
      "GRI (Global Reporting Initiative)",
      "TCFD (Task Force on Climate-related Financial Disclosures)",
      "SASB (Sustainability Accounting Standards Board)",
      "ISSB (International Sustainability Standards Board)",
      "CDP (Carbon Disclosure Project)",
      "UN SDGs (Sustainable Development Goals)",
    ],
    optionsZh: [
      "GRI (全球報告倡議組織)",
      "TCFD (氣候相關財務資訊揭露)",
      "SASB (可持續性會計準則委員會)",
      "ISSB (國際可持續性準則委員會)",
      "CDP (碳披露項目)",
      "UN SDGs (聯合國可持續發展目標)",
    ],
    category: "esg-policy"
  },
  {
    id: 8,
    type: "rating",
    question: "How would you rate your current ESG maturity level?",
    questionZh: "您如何評價目前的ESG成熟度？",
    category: "esg-policy"
  },

  // Current Initiatives (Steps 9-10)
  {
    id: 9,
    type: "checkbox",
    question: "Which ESG initiatives are you currently implementing? (Select all that apply)",
    questionZh: "您目前正在實施哪些ESG措施？（可選多項）",
    options: [
      "Carbon footprint monitoring",
      "Sustainable supply chain",
      "Diversity & inclusion programs",
      "Employee wellbeing initiatives",
      "Ethical governance practices",
      "Community engagement",
      "Waste reduction programs",
      "Energy efficiency measures",
      "Water conservation",
      "Renewable energy adoption",
    ],
    optionsZh: [
      "碳足跡監測",
      "可持續供應鏈",
      "多元化與共融計劃",
      "員工福祉措施",
      "道德管治實踐",
      "社區參與",
      "廢物減量計劃",
      "能源效益措施",
      "節水措施",
      "採用可再生能源",
    ],
    category: "initiatives"
  },
  {
    id: 10,
    type: "checkbox",
    question: "Which material ESG topics are most relevant to your business? (Select all that apply)",
    questionZh: "哪些重要性ESG議題與您的業務最相關？（可選多項）",
    options: [
      "Climate Change",
      "Energy Management",
      "Water Management",
      "Waste Management",
      "Employee Diversity",
      "Occupational Health & Safety",
      "Supply Chain Management",
      "Data Privacy & Security",
      "Anti-corruption",
      "Community Investment",
      "Product Quality",
      "Innovation & R&D",
    ],
    optionsZh: [
      "氣候變化",
      "能源管理",
      "水資源管理",
      "廢物管理",
      "員工多樣性",
      "職業健康與安全",
      "供應鏈管理",
      "數據私隱與安全",
      "反貪腐",
      "社區投資",
      "產品質量",
      "創新研發",
    ],
    category: "initiatives"
  },

  // Goals & Challenges (Steps 11-13)
  {
    id: 11,
    type: "textarea",
    question: "What are your organization's primary ESG goals for the next 2-3 years?",
    questionZh: "貴組織未來2-3年的主要ESG目標是什麼？",
    placeholder: "Describe your ESG objectives and targets...",
    placeholderZh: "描述您的ESG目標和指標...",
    category: "goals"
  },
  {
    id: 12,
    type: "checkbox",
    question: "What are the main challenges you face in implementing ESG practices?",
    questionZh: "實施ESG措施時面臨的主要挑戰是什麼？",
    options: [
      "Limited budget/resources",
      "Lack of expertise",
      "Measuring impact",
      "Stakeholder buy-in",
      "Regulatory compliance",
      "Data collection and reporting",
      "Supply chain complexity",
      "Cultural change management",
    ],
    optionsZh: [
      "預算/資源有限",
      "缺乏專業知識",
      "衡量影響",
      "持份者支持",
      "監管合規",
      "數據收集和報告",
      "供應鏈複雜性",
      "文化變革管理",
    ],
    category: "goals"
  },
  {
    id: 13,
    type: "radio",
    question: "How important is ESG to your stakeholders?",
    questionZh: "ESG對您的持份者有多重要？",
    options: [
      "Critical - Top priority",
      "Very important",
      "Moderately important",
      "Somewhat important",
      "Not currently a priority",
    ],
    optionsZh: [
      "至關重要 - 首要任務",
      "非常重要",
      "中等重要",
      "有些重要",
      "目前不是優先事項",
    ],
    category: "goals"
  },

  // Data Collection (Steps 14-15)
  {
    id: 14,
    type: "text",
    question: "What is your fiscal year for ESG reporting?",
    questionZh: "您的ESG報告財政年度是？",
    placeholder: "e.g., 2024",
    placeholderZh: "例如：2024",
    category: "data"
  },
  {
    id: 15,
    type: "textarea",
    question: "Do you have any greenhouse gas emissions data? (Optional - provide estimates or leave blank)",
    questionZh: "您是否有溫室氣體排放數據？（可選 - 提供估算值或留空）",
    placeholder: "e.g., Scope 1: 1,200 tons CO2e, Scope 2: 3,500 tons CO2e, Scope 3: 8,900 tons CO2e",
    placeholderZh: "例如：範圍一：1,200噸CO2e，範圍二：3,500噸CO2e，範圍三：8,900噸CO2e",
    category: "data"
  },
];

