'use client'
import React from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ErrorBox from './ErrorBox'
import Wazobia from './Wazobia'

export default function LoginForm () {
  const { loading, error, login } = useAuth()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleLoginAuth = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const loginData = new FormData(e.currentTarget)
    // get credentials from formData
    const email = loginData.get('email')?.toString() || ''
    const password = loginData.get('password')?.toString() || ''

    // send a request to the backend to check if the credentials match / exist
    await login(email, password)
  }

  return (
    <div className='relative form-padding w-full md:w-[500px] h-[100%] md:h-[470px] signupform'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleLoginAuth}
      >
        <h2 className='mt-10 mb-2 font-bold text-center'>Sign In</h2>
        <h3 className='mt-8 mb-4 text-sm'>Please enter your details</h3>
        <div className='relative mb-6 md:mb-3'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='bg-[#F8F4FF] signupform-input px-8'
            autoComplete='email'
          />
        </div>

        <div className='relative mb-6 md:mb-3'>
          <input
            // render password type as text or password depending on state
            type={`${showPassword ? 'text' : 'password'}`}
            name='password'
            placeholder='Password'
            className='bg-[#F8F4FF] signupform-input px-8'
            autoComplete='current-password'
          />
          <span
            className='top-3 right-3 absolute cursor-pointer'
            // toggle password-icon state
            onClick={() => setShowPassword(!showPassword)}
          >
            <Image
              src='/password-icon.png'
              alt='icon'
              width={20}
              height={20}
              className='object-contain'
            />
          </span>
          <span className='right-0 -bottom-7 md:-bottom-5 absolute opacity-50 text-[13px] text-black'>
            {/* redirect to reset password */}
            <Link href='/forgot-password'>Forgot your password</Link>
          </span>
        </div>

        {error && <ErrorBox error={error} />}

        <CustomBtn
          // notify user if loading or not
          title={`${loading ? 'Signing In' : 'Sign In'}`}
          styles='w-full mt-3 py-4 text-white font-semibold bg-[#5B00FF] rounded-lg text-[14px] md:text-[18px]'
        />

        {/* display error gracefully when error occurs */}
        {/* {error && <span className='opacity-75 text-[14px]'>{error}</span>} */}

        <div className='flex flex-col items-end md:items-center'>
          <span className='opacity-50 mt-3 text-[#000] text-[13px] text-center'>
            Don&apos;t have an account?{' '}
            <Link
              href='/signup'
              className='text-[#5B00FF] text-[13px]'
            >
              Sign up
            </Link>
          </span>
        </div>

        <Wazobia styles='md:hidden opacity-60 mt-4 font-potta_one text-[#f8f4ff] text-[80px] text-center' />
      </form>

      {/* Eclipse images for designs */}
      <div className='hidden md:block -top-6 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -top-6 -right-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -bottom-12 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -right-6 -bottom-12 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
    </div>
  )
}
