// useAuth.ts
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { showInfoToast } from '@/utils/toastUtils'

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const login = async (email: string, password: string) => {
    setLoading(true)
    setError('')

    // check if email  and password are empty
    if(!email || !password){
      // setError('Fields cannot be empty')
      showInfoToast('Fields cannot be empty')
      setLoading(false)
      return
    }

    // check if password is valid
    if (password.length < 8) {
      // setError('Password is not Valid')
      showInfoToast('Password is not valid!')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })

      if (!response.ok){
        const data = await response.json()
        // handle specific error messages

        if(response.status === 401){
          // setError('Invalid Email or Password')
          showInfoToast('Invalid Email or Password!')
        }
        else{
          // setError(data.message || 'Login Failed')
          showInfoToast(data.message || 'Login Failed')
        }
        setLoading(false)
        return
      }

      const data = await response.json()
      // store user tokens
      localStorage.setItem('accessToken', data.tokens.access)
      localStorage.setItem('refreshToken', data.tokens.refresh)
      localStorage.setItem('currentUser', data.user.username)
      // store success message 
      console.log(data.message);
      
      // Redirect after successful login
      showInfoToast(data.message)
      router.push('/child-info')
    } catch (err) {
      console.error('Error', err)
      // setError('An error occurred. Please try again.')
      showInfoToast('An error occurred. Please try again later!')
    }
    finally{
      setLoading(false)
    }
  }
  
  return {
    loading,
    error,
    login
  }
}
