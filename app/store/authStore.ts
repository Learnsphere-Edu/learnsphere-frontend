import { create } from 'zustand'
import { UserDataProps } from '@/types'

interface AuthState {
  user: UserDataProps | null
  token: string | null
  parentId: number | null
  isEmailVerified: boolean
  userEmail: string | null
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
  userEmail: null,
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
            'Invalid input'
          break
        case 403:
          errorMessage = 'Forbidden'
          break
        case 404:
          errorMessage = 'Not found'
          break
        case 409:
          errorMessage = data.message || 'User already exists'
          break
        case 500:
          errorMessage = 'Server error'
          break
        default:
          errorMessage = data.message || 'Something went wrong'
      }

      throw new Error(errorMessage)
    }

    set({
      message: data.message || 'Signup successful',
      parentId: data.parent_id ?? null
    })

    return data.parent_id ?? null
  },

  // signin logic
  signin: async formData => {
    set({ message: null })

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
      localStorage.setItem('refTkn', data.refresh)
      return data.access ?? null
    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred'
      if (error instanceof Error) {
        errorMessage = error.message
        throw new Error(errorMessage)
      }
      return null
    }
  }
}))

export default useAuthStore
