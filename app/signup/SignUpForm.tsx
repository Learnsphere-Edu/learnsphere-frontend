'use client'

import Image from 'next/image'
import CustomBtn from '../globalcomponents/CustomBtn'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserDataProps } from '@/types'
import Wazobia from '../globalcomponents/Wazobia'
import useAuthStore from '../store/authStore'
import { showInfoToast } from '@/utils/toastUtils'

export default function SignUpForm () {
  const signup = useAuthStore(state => state.signup)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  // these details are for the gurardian registering for the child
  const [formData, setFormData] = useState<UserDataProps>({
    email: '',
    username: '',
    password: '',
    password_confirm: ''
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
  const isPasswordMatch = (
    password: string,
    password_confirm: string
  ): boolean => password === password_confirm

  // handle signup logic
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    // Client-side validations:
    // Check if the input contains uppercase letters
    if (/[A-Z]/.test(formData.username)) {
      setError('Input cannot contain uppercase letters.')
      return
    }
    if (!/[a-zA-Z]/.test(formData.password)) {
      setError('Your password must contain at least a letter')
      return
    }
    if (!validateEmail(formData.email)) {
      setError('Invalid Email Address.')
      return
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (!formData.password || !formData.password_confirm) {
      setError('Password fields cannot be empty.')
      return
    }
    if (!isPasswordMatch(formData.password, formData.password_confirm)) {
      setError('Passwords does not match')
      return
    }

    setLoading(true)
    // receive response from backend
    try {
      const parentId = await signup(formData)
      if (parentId) {
        showInfoToast('Signup successful! Check your email to verify.')
        localStorage.setItem('parentId', parentId)
        useAuthStore.setState({userEmail: formData.email})
        router.push('/verifyemail')
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Signup failed. Please try again.'
      setError(message)
      showInfoToast(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative flex flex-col justify-center md:w-[500px] h-[100%] md:h-[470px] form-padding signupform'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleSignUp}
      >
        <h2 className='mb-2 font-bold text-center'>Sign Up</h2>
        <h3 className='md:hidden block mt-3 mb-2 text-sm'>
          Please enter your details
        </h3>
        <div className='relative mt-4 mb-4 md:mb-3'>
          <input
            type='text'
            name='username'
            placeholder='Username: e.g Jane or Jane Doe'
            className='bg-[#F8F4FF] signupform-input'
            value={formData.username}
            onChange={handleChange}
            autoComplete='username'
            required
          />
        </div>
        <div className='relative mb-4 md:mb-3'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='bg-[#F8F4FF] signupform-input'
            value={formData.email}
            onChange={handleChange}
            autoComplete='email'
            required
          />
        </div>
        <div className='relative mb-4 md:mb-3'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            className='bg-[#F8F4FF] signupform-input'
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
        <div className='relative mb-4 md:mb-3'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password_confirm'
            placeholder='Confirm Password'
            className='bg-[#F8F4FF] signupform-input'
            value={formData.password_confirm}
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
          styles='w-full py-4 text-white font-semibold bg-[#5B00FF] rounded-lg text-[14px] md:text-[18px]'
          type='submit'
          disabled={loading ? true : false}
        />
        {error && (
          <span className='opacity-75 text-[14px] text-red-500'>{error}</span>
        )}

        <div className='flex flex-col items-end md:items-center'>
          <span className='opacity-50 mt-1 text-[#000] text-[13px] text-center'>
            Already have an account?{' '}
            <Link href='/signin' className='text-[#5B00FF] text-[13px]'>
              Login
            </Link>
          </span>

          {/* Other authentication options */}
          <Image
            src='/or.png'
            alt='Other authentication options'
            width={300}
            height={300}
            className='mt-1.5 object-contain'
          />

          {/* Google auth option button */}
          <div
            className='relative mt-1 rounded-lg w-full cursor-pointer'
            onClick={() => router.push('/signin')}
          >
            <Image
              src='/google icon.png'
              alt='Google icon'
              width={30}
              height={30}
              className='top-3 left-5 absolute object-contain cursor-pointer'
            />
            <CustomBtn
              type='button'
              title='Login with Google'
              styles='bg-[#5B00FF] w-full font-semibold py-4 text-white text-[14px] cursor-pointer rounded-lg'
            />
          </div>
        </div>
        <Wazobia styles='md:hidden opacity-60 mt-0 font-potta_one text-[#f8f4ff] text-[80px] text-center' />
      </form>

      {/* Decorative Eclipse Images */}
      <div className='hidden md:block -top-6 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='Decorative circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -top-6 -right-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='Decorative circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -bottom-12 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='Decorative circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -right-6 -bottom-12 absolute'>
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
