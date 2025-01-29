// useAuth.ts
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const login = async (username: string, password: string) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()

      setLoading(false)

      if (data.error) {
        setError(data.error)
        return
      }

      const token = data.token
      // Store token in cookies
      token ? localStorage.setItem('authToken',token) : ''

      // Redirect after successful login
      router.push('/child-info')
    } catch (err) {
      setLoading(false)
      setError('An error occurred. Please try again.')
      console.error(err)
    }
  }

  return {
    loading,
    error,
    login
  }
}
