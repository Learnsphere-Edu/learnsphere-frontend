'use client'
import React from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

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
    <div className='relative form-padding md:w-[500px] h-[500px] md:h-[470px] signupform'>
      <form
        className='bg-white px-16 py-6 w-full h-full'
        onSubmit={handleLoginAuth}
      >
        <h2 className='mb-2 font-bold text-center'>Sign In</h2>
        <div className='relative mb-3'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='bg-[#F8F4FF] form-input'
          />
        </div>

        <div className='relative mb-3'>
          <input
            // render password type as text or password depending on state
            type={`${showPassword ? 'text' : 'password'}`}
            name='password'
            placeholder='Password'
            className='bg-[#F8F4FF] form-input'
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
          <span className='right-0 -bottom-5 absolute opacity-50 text-[13px] text-black'>
            {/* redirect to reset password */}
            <Link href='/forgot-password'>Forgot your password</Link>
          </span>
        </div>

        <CustomBtn
          // notify user if loading or not
          title={`${loading ? 'Signing In' : 'Sign In'}`}
          styles='w-full mt-3 py-3 text-white font-semibold bg-[#5B00FF] rounded-lg'
        />

        {/* display error gracefully when error occurs */}
        {error && <span className='opacity-75 text-[14px]'>{error}</span>}

        <div className='flex flex-col justify-center items-center'>
          <span className='opacity-50 mt-3 text-[#000] text-center'>
            Don&apos;t have an account?{' '}
            <Link href='/signup' className='text-[#5B00FF]'>
              Sign up
            </Link>
          </span>
        </div>
      </form>

      {/* Eclipse images for designs */}
      <div className='-top-6 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-top-6 -right-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-bottom-12 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-right-6 -bottom-12 absolute'>
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
