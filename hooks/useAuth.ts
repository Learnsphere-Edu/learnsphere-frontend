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

  // const register = async (formData: FormData) => {
  //   setLoading(true)
  //   setError('')

  //   const requestData: Record<string,string> = {}
  //   formData.forEach((value,key) => {
  //     requestData[key] = value.toString()
  //   })
  //   try {
  //     const response = await fetch('/api/signup', {
  //       method: 'POST',
  //       body: JSON.stringify(requestData),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     const data = await response.json()
  //     if(data.error) {
  //       setError(data.error)
  //     }
      
  //   } catch (error) {
  //     setLoading(false)
  //     setError('An error occurred, please try again')
  //     console.error(error)
  //   }
  // }

  return {
    loading,
    error,
    login
  }
}
