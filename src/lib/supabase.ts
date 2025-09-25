import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

// Helper functions for authentication
export const authHelpers = {
  signUp: async (email: string, password: string, userData?: Record<string, unknown>) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    })
    return { data, error }
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
    })
    return { data, error }
  },
}

// Database helpers
export const dbHelpers = {
  // User operations
  createUser: async (userData: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from('users')
      .insert([userData])
      .select()
    return { data, error }
  },

  getUserById: async (id: string) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  // Report operations
  createReport: async (reportData: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from('reports')
      .insert([reportData])
      .select()
    return { data, error }
  },

  getUserReports: async (userId: string) => {
    const { data, error } = await supabase
      .from('reports')
      .select('*')
      .eq('author_id', userId)
      .order('created_at', { ascending: false })
    return { data, error }
  },

  updateReport: async (id: string, updates: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from('reports')
      .update(updates)
      .eq('id', id)
      .select()
    return { data, error }
  },

  // Payment operations
  createPayment: async (paymentData: Record<string, unknown>) => {
    const { data, error } = await supabase
      .from('payments')
      .insert([paymentData])
      .select()
    return { data, error }
  },

  updatePaymentStatus: async (paymentId: string, status: string) => {
    const { data, error } = await supabase
      .from('payments')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('payment_id', paymentId)
      .select()
    return { data, error }
  },
}

// Storage helpers
export const storageHelpers = {
  uploadPDF: async (file: File, fileName: string) => {
    const { data, error } = await supabase.storage
      .from('reports')
      .upload(`pdfs/${fileName}`, file, {
        cacheControl: '3600',
        upsert: false,
      })
    return { data, error }
  },

  getPDFUrl: async (fileName: string) => {
    const { data } = supabase.storage
      .from('reports')
      .getPublicUrl(`pdfs/${fileName}`)
    return data.publicUrl
  },

  deletePDF: async (fileName: string) => {
    const { data, error } = await supabase.storage
      .from('reports')
      .remove([`pdfs/${fileName}`])
    return { data, error }
  },
}
