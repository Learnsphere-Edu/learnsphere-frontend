import { create } from 'zustand'
import { UserDataProps } from '@/types'

interface AuthState {
  user: UserDataProps | null
  token: string | null
  loading: boolean
  error: string | null
  message: string | null

  setError: (message: string | null) => void
  setMessage: (message: string | null) => void

  signup: (formData: UserDataProps) => Promise<string | null>
  signin: (formData: {
    email: string
    password: string
  }) => Promise<string | null>
  checkAuth: () => boolean
//   verifyEmail: (formData: {
//        userEmail
//   }) => Promise<string | null>
}
const useAuthStore = create<AuthState>(set => ({
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('accTkn') : null,
  loading: false,
  error: null,
  message: null,
  isAuthenticated: false,

  setError: message => set({ error: message }),
  setMessage: message => set({ message: message }),

  signup: async formData => {
    set({ 
       loading: true,
        error: null,
         message: null
        })

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        let errorMessage = 'An unknown error occurred'

        switch (response.status) {
          case 400:
            errorMessage =
              data.message || 'Invalid input. Please check your details.'
            break
          case 401:
            errorMessage = 'Unauthorized. Please log in again.'
            break
          case 403:
            errorMessage =
              'Forbidden. You do not have permission to perform this action.'
            break
          case 404:
            errorMessage = 'Resource not found. Please try again later.'
            break
          case 409:
            errorMessage =
              data.message || 'User already exists. Try logging in instead.'
            break
          case 500:
            errorMessage = 'Internal server error. Please try again later.'
            break
          default:
            errorMessage =
              data.message || 'Something went wrong. Please try again.'
        }

        throw new Error(errorMessage)
      }

      set({
        message: 'Signup successful, Kindly check your email to verify',
        loading: false
      })
      return data.parent_id ?? null
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred'

      if (error instanceof Error) {
        errorMessage = error.message
      }

      set({ 
       error: errorMessage,
        loading: false
        })
      return null
    }
  },

  signin: async formData => {
    set({ loading: true, error: null, message: null })

    try {
      const response = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const data = await response.json()
        let errorMessage = 'An unknown error occurred!'
        switch (response.status) {
          case 400:
            errorMessage = 'Please try again'
            break
          case 500:
            errorMessage = 'Internal Server Error'
            break
          default:
            errorMessage = 'Something went wrong. Please try again.'
        }
        throw new Error(errorMessage)
      }

      const data = await response.json()
      //      retrieve tokens from backend response
      set({ loading: false, token: data.access })
      //       store refresh token in local storage
      localStorage.setItem('refTkn', data.refresh)
      //       come back to check this.
      return data.access ?? null
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred'

      if (error instanceof Error) {
        errorMessage = error.message
      }

      set({ error: errorMessage, loading: false })
      return null
    }
  },

  checkAuth: () => {
    return Boolean(localStorage.getItem('accTkn'))
  }
}))

export default useAuthStore
