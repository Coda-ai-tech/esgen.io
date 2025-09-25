'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase, authHelpers } from '@/lib/supabase'
import { AuthSession, AuthUser } from '@/types/database'

interface AuthContextType extends AuthSession {
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signUp: (email: string, password: string, userData?: Record<string, unknown>) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: Error | null }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          await setUserFromSession(session.user)
        }
      } catch (err) {
        console.error('Error getting initial session:', err)
        setError('Failed to load user session')
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session)
        
        if (event === 'SIGNED_IN' && session?.user) {
          await setUserFromSession(session.user)
        } else if (event === 'SIGNED_OUT') {
          setUser(null)
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const setUserFromSession = async (supabaseUser: User) => {
    try {
      // Transform Supabase user to our AuthUser type
      const authUser: AuthUser = {
        id: supabaseUser.id,
        email: supabaseUser.email!,
        name: supabaseUser.user_metadata?.name || supabaseUser.email!,
        companyName: supabaseUser.user_metadata?.companyName,
        subscriptionStatus: supabaseUser.user_metadata?.subscriptionStatus || 'free',
      }
      
      setUser(authUser)
      setError(null)
    } catch (err) {
      console.error('Error setting user from session:', err)
      setError('Failed to load user data')
    }
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const { error } = await authHelpers.signIn(email, password)
      
      if (error) {
        setError(error.message)
        return { error }
      }

      // User will be set via the auth state change listener
      return { error: null }
    } catch (err) {
      const errorMessage = 'An unexpected error occurred during sign in'
      setError(errorMessage)
      return { error: new Error(errorMessage) }
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, userData: Record<string, unknown> = {}) => {
    setLoading(true)
    setError(null)
    
    try {
      const { error } = await authHelpers.signUp(email, password, {
        name: (userData.name as string) || email,
        companyName: userData.companyName as string,
        subscriptionStatus: 'free',
        ...userData,
      })
      
      if (error) {
        setError(error.message)
        return { error }
      }

      // User will be set via the auth state change listener
      return { error: null }
    } catch (err) {
      const errorMessage = 'An unexpected error occurred during sign up'
      setError(errorMessage)
      return { error: new Error(errorMessage) }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const { error } = await authHelpers.signOut()
      
      if (error) {
        setError(error.message)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Error signing out:', error)
      setError('Failed to sign out')
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    setError(null)
    
    try {
      const { error } = await authHelpers.resetPassword(email)
      
      if (error) {
        setError(error.message)
      }
      
      return { error }
    } catch (error) {
      const errorMessage = 'Failed to send password reset email'
      setError(errorMessage)
      return { error: new Error(errorMessage) }
    }
  }

  const value: AuthContextType = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    resetPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
