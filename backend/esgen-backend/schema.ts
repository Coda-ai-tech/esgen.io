// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'

// see https://keystonejs.com/docs/fields/overview for the full list of fields
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
  float,
  json,
  checkbox,
} from '@keystone-6/core/fields'

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document'
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import { type Lists } from '.keystone/types'

export const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),
      password: password({ validation: { isRequired: true } }),
      
      // Company information
      companyName: text(),
      jobTitle: text(),
      phone: text(),
      
      // Subscription and billing
      subscriptionStatus: select({
        options: [
          { label: 'Free', value: 'free' },
          { label: 'Paid', value: 'paid' },
          { label: 'Trial', value: 'trial' },
        ],
        defaultValue: 'free',
      }),
      
      // User preferences
      preferredLanguage: select({
        options: [
          { label: 'Traditional Chinese', value: 'zh-TW' },
          { label: 'Simplified Chinese', value: 'zh-CN' },
          { label: 'English', value: 'en' },
        ],
        defaultValue: 'zh-TW',
      }),
      
      // Relationships
      reports: relationship({ ref: 'Report.author', many: true }),
      payments: relationship({ ref: 'Payment.user', many: true }),
      
      // Timestamps
      createdAt: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({ db: { updatedAt: true } }),
    },
  }),

  Report: list({
    access: allowAll,
    fields: {
      // Report identification
      title: text({ validation: { isRequired: true } }),
      status: select({
        options: [
          { label: 'Draft', value: 'draft' },
          { label: 'Preview Generated', value: 'preview' },
          { label: 'Paid', value: 'paid' },
          { label: 'Complete', value: 'complete' },
          { label: 'Failed', value: 'failed' },
        ],
        defaultValue: 'draft',
      }),
      
      // Company information from form
      companyName: text({ validation: { isRequired: true } }),
      industry: text({ validation: { isRequired: true } }),
      companySize: text({ validation: { isRequired: true } }),
      location: text(),
      description: text({ ui: { displayMode: 'textarea' } }),
      
      // ESG Framework selection
      frameworks: json({ defaultValue: [] }), // Array of selected frameworks
      fiscalYear: text({ defaultValue: '2024' }),
      
      // Material topics
      materialTopics: json({ defaultValue: [] }), // Array of selected topics
      
      // Emissions data
      scope1Emissions: text(),
      scope2Emissions: text(),
      scope3Emissions: text(),
      
      // AI Generated content
      previewContent: text({ ui: { displayMode: 'textarea' } }),
      fullContent: text({ ui: { displayMode: 'textarea' } }),
      
      // File references
      pdfUrl: text(), // URL to generated PDF in Supabase storage
      
      // Payment tracking
      paymentRequired: checkbox({ defaultValue: true }),
      paymentAmount: float({ defaultValue: 299.0 }), // Default price in HKD
      
      // Relationships
      author: relationship({ 
        ref: 'User.reports',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          linkToItem: true,
        },
      }),
      payment: relationship({ ref: 'Payment.report' }),
      
      // Timestamps
      createdAt: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({ db: { updatedAt: true } }),
      completedAt: timestamp(),
    },
  }),

  Payment: list({
    access: allowAll,
    fields: {
      // Payment identification
      paymentId: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      airwallexTransactionId: text(),
      
      // Payment details
      amount: float({ validation: { isRequired: true } }),
      currency: text({ defaultValue: 'HKD' }),
      status: select({
        options: [
          { label: 'Pending', value: 'pending' },
          { label: 'Processing', value: 'processing' },
          { label: 'Completed', value: 'completed' },
          { label: 'Failed', value: 'failed' },
          { label: 'Refunded', value: 'refunded' },
        ],
        defaultValue: 'pending',
      }),
      
      // Payment method
      paymentMethod: text(), // e.g., 'card', 'alipay', 'wechat'
      
      // Metadata
      metadata: json({ defaultValue: {} }),
      
      // Relationships
      user: relationship({ 
        ref: 'User.payments',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          linkToItem: true,
        },
      }),
      report: relationship({ 
        ref: 'Report.payment',
        ui: {
          displayMode: 'cards',
          cardFields: ['title', 'companyName'],
          linkToItem: true,
        },
      }),
      
      // Timestamps
      createdAt: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({ db: { updatedAt: true } }),
      paidAt: timestamp(),
    },
  }),
} satisfies Lists
