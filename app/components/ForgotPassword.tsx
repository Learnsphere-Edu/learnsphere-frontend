'use client'
import React from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
import { useRouter } from 'next/navigation'

export default function ForgotPwordForm () {
    const router = useRouter()

    const handleVerifyEmail = () => {
        router.push('/verify')
    }
  return (
    <div className='relative form-padding md:w-[500px] h-[500px] md:h-[470px] signupform'>
      <form
        className='bg-white px-16 py-6 w-full h-full'
        // onSubmit={handleLoginAuth}
      >
        <h2 className='mb-2 font-bold text-center'>Forgot Password</h2>
        {/* guide */}
        <p className='opacity-50 mt-4 text-black'>Enter the email address with your account and we&apos;ll send an email with confirmation to reset your password.</p>

        {/* retrieve user email */}
        <div className='relative mt-4 mb-3'>
          <input 
            type='email'
            name='email'
            placeholder='Email'
            className='bg-[#F8F4FF] form-input'
          /> 
        </div>

        {/* send verification code to user registered email */}
        <CustomBtn
          title='Send Code'
          styles='mt-4 w-full bg-[#5B00FF] text-white rounded-lg py-2 mt-[6rem]'
          type='button'
          event={handleVerifyEmail}
          />
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

