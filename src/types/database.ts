// Database types matching our Keystone schema

export interface User {
  id: string
  name: string
  email: string
  companyName?: string
  jobTitle?: string
  phone?: string
  subscriptionStatus: 'free' | 'paid' | 'trial'
  preferredLanguage: 'zh-TW' | 'zh-CN' | 'en'
  createdAt: string
  updatedAt: string
}

export interface Report {
  id: string
  title: string
  status: 'draft' | 'preview' | 'paid' | 'complete' | 'failed'
  
  // Company information
  companyName: string
  industry: string
  companySize: string
  location?: string
  description?: string
  
  // ESG Framework
  frameworks: string[]
  fiscalYear: string
  
  // Material topics
  materialTopics: string[]
  
  // Emissions data
  scope1Emissions?: string
  scope2Emissions?: string
  scope3Emissions?: string
  
  // Generated content
  previewContent?: string
  fullContent?: string
  
  // File references
  pdfUrl?: string
  
  // Payment
  paymentRequired: boolean
  paymentAmount: number
  
  // Relationships
  authorId: string
  paymentId?: string
  
  // Timestamps
  createdAt: string
  updatedAt: string
  completedAt?: string
}

export interface Payment {
  id: string
  paymentId: string
  airwallexTransactionId?: string
  
  // Payment details
  amount: number
  currency: string
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'
  paymentMethod?: string
  
  // Metadata
  metadata: Record<string, any>
  
  // Relationships
  userId: string
  reportId: string
  
  // Timestamps
  createdAt: string
  updatedAt: string
  paidAt?: string
}

// Form data types
export interface ESGFormData {
  // Step 1: Company Information
  companyName: string
  industry: string
  size: string
  location: string
  description: string
  
  // Step 2: Framework Selection
  frameworks: string[]
  fiscalYear: string
  
  // Step 3: Material Topics
  materialTopics: string[]
  
  // Step 4: Emissions Data
  scope1: string
  scope2: string
  scope3: string
  evidence: string[]
}

// API Response types
export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface ReportGenerationResponse {
  reportId: string
  previewContent: string
  status: 'preview' | 'failed'
  paymentRequired: boolean
  paymentAmount: number
}

export interface PaymentResponse {
  paymentId: string
  redirectUrl?: string
  status: string
}

// Auth types
export interface AuthUser {
  id: string
  email: string
  name: string
  companyName?: string
  subscriptionStatus: 'free' | 'paid' | 'trial'
}

export interface AuthSession {
  user: AuthUser | null
  loading: boolean
  error: string | null
}
