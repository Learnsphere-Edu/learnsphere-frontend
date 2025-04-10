import { create } from 'zustand'
import { UserDataProps } from '@/types'

interface AuthState {
  user: UserDataProps | null
  token: string | null
  parentId: number | null
  isEmailVerified: boolean

  loading: boolean
  error: string | null
  message: string | null

  setToken: (token: string | null) => void // Function to set the token
  setError: (error: string | null) => void
  setMessage: (message: string | null) => void
  signup: (formData: UserDataProps) => Promise<string | null>
  signin: (formData: {
    email: string
    password: string
  }) => Promise<string | null>
}
const useAuthStore = create<AuthState>(set => ({
  user: null,
  isEmailVerified: false,
  parentId: null,

  loading: false,
  error: null,
  message: null,

  // Initialize the token from localStorage if available
  token: typeof window !== 'undefined' ? localStorage.getItem('accTkn') : null,

  // Function to set the token and sync with localStorage
  setToken: token => {
    if (token) {
      localStorage.setItem('accTkn', token) // Store token in localStorage
    } else {
      localStorage.removeItem('accTkn') // Remove token from localStorage if null
    }
    set({ token }) // Update Zustand state with the token
  },

  setError: message => set({ error: message }),
  setMessage: message => set({ message: message }),

  // signup logic
  // signup logic
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
              data.email ||
              data.password_confirm ||
              data.username ||
              'Invalid input. Please check your details.'
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

        // Throwing error message for the switch block
        throw new Error(errorMessage)
      }

      // Handling successful signup
      set({
        message:
          data.message ||
          'Signup successful, Kindly check your email to verify',
        loading: false,
        parentId: data.parent_id ?? null // Ensuring it's null if not present
      })

      return data.parent_id ?? null // Returning parent_id if available
    } catch (error: unknown) {
      // Default error message in case error type is not handled
      let errorMessage = 'An unknown error occurred'

      if (error instanceof Error) {
        errorMessage = error.message
      }

      // Setting error state
      set({
        error: errorMessage,
        loading: false
      })
      return null
    }
  },
  // signin logic
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
          case 401:
            errorMessage = data.error || 'Invalid Email or Password'
            break
          case 500:
            errorMessage = 'Internal Server Error'
            break
          default:
            errorMessage =
              data.message || 'Something went wrong. Please try again.'
        }
        throw new Error(errorMessage)
      }

      const data = await response.json()
      //      retrieve tokens from backend response
      set({ loading: false })
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
  }
}))

export default useAuthStore
