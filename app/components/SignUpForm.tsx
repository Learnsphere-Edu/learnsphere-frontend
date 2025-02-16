'use client'

import Image from 'next/image'
import CustomBtn from './CustomBtn'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { showInfoToast } from '@/utils/toastUtils'
import { UserDataProps } from '@/types'

export default function SignUpForm () {
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  // Removed unused "userToken" state variable
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formData, setFormData] = useState<UserDataProps>({
    email: '',
    username: '',
    password: '',
    password2: ''
  })
  const router = useRouter()

  // Update formData state on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Simple email validation using regex
  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  // Check if two password fields match
  const isPasswordMatch = (password: string, password2: string): boolean =>
    password === password2

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    let errors: string[] = []

    // Client-side validations:
    if (!validateEmail(formData.email)) {
      errors.push('Invalid Email Address.')
    }
    if (formData.password.length < 8) {
      errors.push('Password must be at least 8 characters.')
    }
    if (!formData.password || !formData.password2) {
      errors.push('Password fields cannot be empty.')
    }
    if (!isPasswordMatch(formData.password, formData.password2)) {
      errors.push('Passwords do not match.')
    }

    if (errors.length > 0) {
      setError(errors.join(' '))
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const data = await response.json()
        // Consolidate backend error messages from different fields
        const errorMessages: string[] = []
        if (data.email) {
          errorMessages.push(...data.email)
        }
        if (data.username) {
          errorMessages.push(...data.username)
        }
        if (data.password) {
          errorMessages.push(...data.password)
        }
        if (!errorMessages.length && data.message) {
          errorMessages.push(data.message)
        }
        setError(errorMessages.join(' '))
        setLoading(false)
        return
      }

      // If registration is successful
      const data = await response.json()
      console.log('Registration Successful:', data.message)
      // Redirect to next page (child-info) upon success
      showInfoToast(data.message)
      console.log(data)
      // router.push('/child-info')
    } catch (err) {
      console.error('Error:', err)
      setError('An unknown error occurred, please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative form-padding md:w-[500px] h-[100%] md:h-[470px] signupform'>
      <form
        className='bg-white px-16 py-6 w-full h-full'
        onSubmit={handleSignUp}
      >
        <h2 className='mb-2 font-bold text-center'>Sign Up</h2>
        <div className='relative mt-4 mb-6 md:mb-3'>
          <input
            type='text'
            name='username'
            placeholder='Full name'
            className='bg-[#F8F4FF] form-input'
            value={formData.username}
            onChange={handleChange}
            autoComplete='username'
            required
          />
        </div>
        <div className='relative mb-6 md:mb-3'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='bg-[#F8F4FF] form-input'
            value={formData.email}
            onChange={handleChange}
            autoComplete='email'
            required
          />
        </div>
        <div className='relative mb-6 md:mb-3'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            className='bg-[#F8F4FF] form-input'
            value={formData.password}
            onChange={handleChange}
            autoComplete='new-password'
            required
          />
          <span
            className='top-3 right-3 absolute cursor-pointer'
            onClick={() => setShowPassword(prev => !prev)}
          >
            <Image
              src='/password-icon.png'
              alt='Toggle password visibility'
              width={20}
              height={20}
              className='object-contain'
            />
          </span>
        </div>
        <div className='relative mb-6 md:mb-3'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password2'
            placeholder='Confirm Password'
            className='bg-[#F8F4FF] form-input'
            value={formData.password2}
            onChange={handleChange}
            autoComplete='new-password'
            required
          />
          <span
            className='top-3 right-3 absolute cursor-pointer'
            onClick={() => setShowPassword(prev => !prev)}
          >
            <Image
              src='/password-icon.png'
              alt='Toggle password visibility'
              width={20}
              height={20}
              className='object-contain'
            />
          </span>
        </div>
        <CustomBtn
          title={loading ? 'Signing Up' : 'Sign Up'}
          styles='w-full py-4 text-white font-semibold bg-[#5B00FF] rounded-lg'
          type='submit'
          disabled={loading}
        />
        {error && (
          <span className='opacity-75 text-[14px] text-red-500'>{error}</span>
        )}

        <div className='flex flex-col justify-center items-center'>
          <span className='opacity-50 mt-3 text-[#000] text-center'>
            Already have an account?{' '}
            <Link href='/signin' className='text-[#5B00FF]'>
              Login
            </Link>
          </span>

          {/* Other authentication options */}
          <Image
            src='/or.png'
            alt='Other authentication options'
            width={300}
            height={300}
            className='mt-3 object-contain'
          />

          {/* Google auth option button */}
          <div
            className='relative mt-6 rounded-lg w-full cursor-pointer'
            onClick={() => router.push('/signin')}
          >
            <Image
              src='/google icon.png'
              alt='Google icon'
              width={30}
              height={30}
              className='top-3 left-5 absolute cursor-pointer object-contain'
            />
            <CustomBtn
              type='button'
              title='Login with Google'
              styles='bg-[#5B00FF] w-full font-semibold py-4 text-white cursor-pointer rounded-lg'
            />
          </div>
        </div>
      </form>

      {/* Decorative Eclipse Images */}
      <div className='-top-6 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='Decorative circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-top-6 -right-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='Decorative circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-bottom-12 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='Decorative circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-right-6 -bottom-12 absolute'>
        <Image
          src='/eclipse.png'
          alt='Decorative circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
    </div>
  )
}
