// ESG Question Bank - Comprehensive questions for random selection
// Based on CEPAR framework and materiality assessments

export type QuestionCategory = 'environmental' | 'social' | 'governance';
export type QuestionType = 'radio' | 'textarea' | 'checkbox' | 'text' | 'attachment';

export interface ESGQuestion {
  id: string;
  section: string; // A1, A2, A3, B1, B2, B3, C1
  category: QuestionCategory;
  type: QuestionType;
  question: string;
  questionZh: string;
  options?: string[];
  optionsZh?: string[];
  placeholder?: string;
  placeholderZh?: string;
  requiresAttachment?: boolean;
  attachmentPrompt?: string;
  attachmentPromptZh?: string;
  remark?: string;
  remarkZh?: string;
  weight: number; // For scoring (1-10)
}

// Environmental Questions
export const environmentalQuestions: ESGQuestion[] = [
  // A1 - Environmental Policy
  {
    id: 'A1-1',
    section: 'A1',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company have a written environmental-related policy?',
    questionZh: '公司是否有書面的環境相關政策？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    requiresAttachment: true,
    attachmentPrompt: 'Please attach a copy of your environmental policy',
    attachmentPromptZh: '請附上環境政策副本',
    weight: 8
  },
  {
    id: 'A1-2',
    section: 'A1',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company adopt any green procurement practices or requirements?',
    questionZh: '公司是否採用任何綠色採購措施或要求？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'A1-3',
    section: 'A1',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company obtain any environmental-related certificate, such as ISO 14001, and 50001?',
    questionZh: '公司是否獲得任何與環境相關的證書，例如ISO 14001 和 50001？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    requiresAttachment: true,
    attachmentPrompt: 'Please attach a copy of your ISO certificate',
    attachmentPromptZh: '請附上ISO證書副本',
    weight: 9
  },
  {
    id: 'A1-4',
    section: 'A1',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company assess the suppliers\' environmental/sustainable practices or measures during the supplier assessment or enlisting?',
    questionZh: '公司是否在供應商評估或招募期間評估供應商的環境/可持續實踐或措施？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'A1-5',
    section: 'A1',
    category: 'environmental',
    type: 'radio',
    question: 'Will green labels be considered during the supplier assessment?',
    questionZh: '在供應商評估期間會考慮綠色標籤嗎？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 6
  },
  {
    id: 'A1-6',
    section: 'A1',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company encourage any water-saving measures (e.g., posting of water-saving reminders, etc.)?',
    questionZh: '公司是否有任何節水措施？（例如︰張貼節水提醒等）',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 6
  },
  {
    id: 'A1-7',
    section: 'A1',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company adopt any measures to ensure the indoor air quality (e.g., regularly checking and cleaning of A/C units, placement of air purifiers, etc.)?',
    questionZh: '公司是否採用任何措施來確保室內空氣品質（例如︰定期檢查和清潔空調設備﹑放置空氣清淨機等）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 5
  },
  
  // A2 - Energy and Emissions
  {
    id: 'A2-8',
    section: 'A2',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company keep energy, fuel or water usage record?',
    questionZh: '公司是否有保留能源﹑燃料或水的使用記錄？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'A2-9',
    section: 'A2',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company quantify electricity usage (kWh)?',
    questionZh: '公司是否有監察用電量（千瓦時）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'A2-10',
    section: 'A2',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company utilize any energy-efficient equipment, emission monitoring system, or technology (e.g., equipment with energy efficient label, energy management system, etc)?',
    questionZh: '公司是否使用任何節能設備﹑掛放監控系統或技術（例如︰具有節能標籤的設備﹑能源管理系統等）',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  {
    id: 'A2-11',
    section: 'A2',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company encourage any energy-saving behavior (e.g., switching off air conditioning when not in use)?',
    questionZh: '公司是否有鼓勵一些節能的行動（例如︰沒有人在辦公室時關閉空調）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 6
  },
  {
    id: 'A2-12',
    section: 'A2',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company quantify or calculate the carbon footprint on products/services/company as a whole?',
    questionZh: '公司是否有量化或計算整個產品/服務/公司的碳足印？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    requiresAttachment: true,
    attachmentPrompt: 'Please attach carbon footprint analysis report or calculation record',
    attachmentPromptZh: '請附上碳足印分析報告或計算記錄',
    weight: 9
  },
  
  // A3 - Resource Management
  {
    id: 'A3-13',
    section: 'A3',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company adopt paper-saving initiatives (e.g., double-sided printing)?',
    questionZh: '公司是否有採取節紙措施（例如︰雙面列印）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 5
  },
  {
    id: 'A3-14',
    section: 'A3',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company recycle plastics/paper/glass bottles/electronic equipment/others?',
    questionZh: '公司是否有收集並回收塑膠/紙張/玻璃瓶/電子設備/其他？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'A3-15',
    section: 'A3',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company reuse the promotion banners or materials?',
    questionZh: '公司是否重複使用宣傳橫幅或材料？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 5
  },
  {
    id: 'A3-16',
    section: 'A3',
    category: 'environmental',
    type: 'radio',
    question: 'Does the company encourage the employees to prepare their utensils?',
    questionZh: '公司是否鼓勵員工自備餐具？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 4
  },
];

// Social Questions
export const socialQuestions: ESGQuestion[] = [
  // B1 - Employment and Labor
  {
    id: 'B1-17',
    section: 'B1',
    category: 'social',
    type: 'radio',
    question: 'Does the company have written employment policy or staff handbook?',
    questionZh: '公司是否有書面的僱傭政策或員工手冊？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    requiresAttachment: true,
    attachmentPrompt: 'Please attach employment policy or staff handbook',
    attachmentPromptZh: '請附上僱傭政策或員工手冊',
    weight: 8
  },
  {
    id: 'B1-18',
    section: 'B1',
    category: 'social',
    type: 'radio',
    question: 'Does the company check the identification documents of the new employees before recruitment?',
    questionZh: '公司在招聘前是否有檢查新員工的身份證明文件？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'B1-19',
    section: 'B1',
    category: 'social',
    type: 'radio',
    question: 'Are there any measures adopted to prevent discrimination and harassment?',
    questionZh: '是否採取了任何措施來防止歧視和騷擾？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 9
  },
  {
    id: 'B1-20',
    section: 'B1',
    category: 'social',
    type: 'radio',
    question: 'Are there any measures adopted regarding family-friendly employment practices?',
    questionZh: '是否採取了家庭友善僱傭的措施？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'B1-21',
    section: 'B1',
    category: 'social',
    type: 'radio',
    question: 'Is there any flexible working arrangement (e.g., hybrid mode working, work from home)?',
    questionZh: '是否採取了彈性工作安排（例如︰混合工作模式﹑在家工作）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'B1-22',
    section: 'B1',
    category: 'social',
    type: 'radio',
    question: 'Does the company establish any mechanism to handle complaints related to workers\' rights?',
    questionZh: '公司是否有建立機制處理與員工權利相關的投訴？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  {
    id: 'B1-23',
    section: 'B1',
    category: 'social',
    type: 'radio',
    question: 'Has the company participate in or organize any voluntary and community events, or donate to charitable/NGO/non-profit organizations (NPO)?',
    questionZh: '公司是否有參與或組織任何義工及社區活動，或捐款給慈善機構/非政府組織/非營利組織？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 6
  },
  {
    id: 'B1-24',
    section: 'B1',
    category: 'social',
    type: 'radio',
    question: 'Does the company have at least 20% of employees who are of different genders?',
    questionZh: '公司是否至少有20%的員工來自不同性別？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  
  // B2 - Health and Safety
  {
    id: 'B2-25',
    section: 'B2',
    category: 'social',
    type: 'radio',
    question: 'Does the company establish health and safety policy?',
    questionZh: '公司是否有制定職業健康和安全政策？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    requiresAttachment: true,
    attachmentPrompt: 'Please attach health and safety policy',
    attachmentPromptZh: '請附上職業健康和安全政策',
    weight: 9
  },
  {
    id: 'B2-26',
    section: 'B2',
    category: 'social',
    type: 'radio',
    question: 'Does the company provide any regular drills or training regarding occupational health and safety to the relevant staff?',
    questionZh: '公司是否有定期向員工提供職業健康與安全方面的演習或培訓？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  {
    id: 'B2-27',
    section: 'B2',
    category: 'social',
    type: 'radio',
    question: 'Does the company provide professional development training or subsidy to the employee?',
    questionZh: '公司是否有為員工提供專業發展或補貼？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'B2-28',
    section: 'B2',
    category: 'social',
    type: 'radio',
    question: 'Does the company adopt any measure for the employee health and wellness benefits (e.g., establishing breastfeeding friendly premises, using ergonomic furniture, organize yoga workshop, body checks, etc.)?',
    questionZh: '公司是否採取了任何措施來提供員工健康與福利（例如︰設立友善哺乳的場所﹑使用人體工學家具﹑組織瑜伽工作坊﹑健康檢查等）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'B2-29',
    section: 'B2',
    category: 'social',
    type: 'radio',
    question: 'Has there been any serious work-related injuries or illnesses in the company?',
    questionZh: '公司是否發生過任何嚴重的工傷或職業病？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    remark: 'Refer to Labour Department, a serious work-related injury is defined as an accident arising out of and in the course of employment with incapacity for a period exceeding 3 days',
    remarkZh: '根據勞工處的定義，嚴重的工傷事故是指在僱傭期間發生的事故，並導致超過3天的喪失工作能力。',
    weight: 10
  },
  {
    id: 'B2-30',
    section: 'B2',
    category: 'social',
    type: 'radio',
    question: 'Is there any work-related fatalities occurred in the company?',
    questionZh: '公司是否發生過任何與工作相關的死亡事故？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 10
  },
  {
    id: 'B2-31',
    section: 'B2',
    category: 'social',
    type: 'radio',
    question: 'Does the company obtain any certification in related to occupational health and safety, such as ISO 45001?',
    questionZh: '公司是否有獲得任何與職業健康與安全相關的認證，例如ISO 45001？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    requiresAttachment: true,
    attachmentPrompt: 'Please attach certificate',
    attachmentPromptZh: '請附上證書',
    weight: 9
  },
  
  // B3 - Product Responsibility
  {
    id: 'B3-32',
    section: 'B3',
    category: 'social',
    type: 'radio',
    question: 'Does the company establish guidelines or procedures to handle customer complaints (e.g., provide training, manual for personnel responsible for customer service, etc.)?',
    questionZh: '公司是否有制定處理客戶投訴的指引或程序？（例如︰提供培訓﹑向負責客戶服務的員工提供指引等）',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  {
    id: 'B3-33',
    section: 'B3',
    category: 'social',
    type: 'radio',
    question: 'Does the company establish any quality control mechanism on products or services (e.g., perform sample checking, conduct regular calibration and checking on equipment, etc.)?',
    questionZh: '公司是否有針對產品或服務建立任何品質控制機制（例如︰進行抽樣檢查﹑定期校準和檢查設備等）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  {
    id: 'B3-34',
    section: 'B3',
    category: 'social',
    type: 'radio',
    question: 'Does the company gather customer feedback after the provision of products and services (e.g., establish customer satisfaction survey, customer hotline, mystery shoppers, etc.)?',
    questionZh: '公司在提供產品和服務後是否有收集客戶反饋（例如︰進行顧客滿意度調查﹑顧客熱線﹑神秘顧客等）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
  {
    id: 'B3-35',
    section: 'B3',
    category: 'social',
    type: 'radio',
    question: 'Does the company obtain any certification for product or service (e.g., Q-mark, ISO 9001 Certification, Green label, FSC, Organic Certification, BEAM plus)?',
    questionZh: '公司是否有獲得任何產品或服務相關的認證，（例如︰Qmark，ISO9001 認證﹑綠色標籤﹑FSC﹑有機認證﹑綠建環評plus）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    requiresAttachment: true,
    attachmentPrompt: 'Please attach certificate',
    attachmentPromptZh: '請附上證書',
    weight: 9
  },
];

// Governance Questions
export const governanceQuestions: ESGQuestion[] = [
  {
    id: 'C1-36',
    section: 'C1',
    category: 'governance',
    type: 'radio',
    question: 'Does the company establish a Code of Conduct?',
    questionZh: '公司是否有制定了行為準則？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    requiresAttachment: true,
    attachmentPrompt: 'Please attach policy or employee handbook',
    attachmentPromptZh: '請附上書面政策或員工手冊',
    weight: 9
  },
  {
    id: 'C1-37',
    section: 'C1',
    category: 'governance',
    type: 'radio',
    question: 'Does the company perform an annual financial audit?',
    questionZh: '公司是否有進行年度財務審計？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 9
  },
  {
    id: 'C1-38',
    section: 'C1',
    category: 'governance',
    type: 'radio',
    question: 'Is the company involved in any prosecutions/lawsuits in relation to products, services, employment, etc.?',
    questionZh: '公司是否有涉及任何有關產品﹑服務﹑就業等方面的起訴/訴訟？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 10
  },
  {
    id: 'C1-39',
    section: 'C1',
    category: 'governance',
    type: 'radio',
    question: 'Does the company implement a whistleblowing system, or establish related written policies and procedures?',
    questionZh: '公司是否有實施舉報系統，或制定相關的書面政策和程序？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  {
    id: 'C1-40',
    section: 'C1',
    category: 'governance',
    type: 'radio',
    question: 'Does the company provide regular training to the employees and management level about corporate integrity, such as anti-corruption, anti-bribery, conflict of interest, etc.?',
    questionZh: '公司是否有定期對員工和管理層進行有關企業誠信的培訓，例如反貪污﹑反賄賂﹑利益衝突等？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  {
    id: 'C1-41',
    section: 'C1',
    category: 'governance',
    type: 'radio',
    question: 'Does the company subscribe to labour insurance (or others necessary insurance of the industry, such as public liability insurance)?',
    questionZh: '公司是否有購買勞工保險（或該行業的其他必要保險，例如公共責任保險）？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 8
  },
  {
    id: 'C1-42',
    section: 'C1',
    category: 'governance',
    type: 'radio',
    question: 'Does the company perform any background search on newly employed personnel, new customers or new suppliers?',
    questionZh: '公司是否會對新入職員工﹑新客戶或新供應商進行背景調查的流程？',
    options: ['Yes', 'No'],
    optionsZh: ['是', '否'],
    weight: 7
  },
];

// Combined question bank
export const allQuestions: ESGQuestion[] = [
  ...environmentalQuestions,
  ...socialQuestions,
  ...governanceQuestions,
];

// Random question selector
export function selectRandomQuestions(
  numPerCategory: { environmental: number; social: number; governance: number }
): ESGQuestion[] {
  const selected: ESGQuestion[] = [];
  
  // Select environmental questions
  const shuffledEnv = [...environmentalQuestions].sort(() => Math.random() - 0.5);
  selected.push(...shuffledEnv.slice(0, numPerCategory.environmental));
  
  // Select social questions
  const shuffledSocial = [...socialQuestions].sort(() => Math.random() - 0.5);
  selected.push(...shuffledSocial.slice(0, numPerCategory.social));
  
  // Select governance questions
  const shuffledGov = [...governanceQuestions].sort(() => Math.random() - 0.5);
  selected.push(...shuffledGov.slice(0, numPerCategory.governance));
  
  return selected;
}

// Get questions by section
export function getQuestionsBySection(section: string): ESGQuestion[] {
  return allQuestions.filter(q => q.section === section);
}

// Get questions by category
export function getQuestionsByCategory(category: QuestionCategory): ESGQuestion[] {
  return allQuestions.filter(q => q.category === category);
}

