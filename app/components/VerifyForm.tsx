'use client'
import React from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
import VerifyCode from './VerifyCode'
import { useRouter } from 'next/navigation'
import Wazobia from './Wazobia'

export default function VerifyForm () {
  const router = useRouter()

  const handleVerifyCodeFromEmail = () => {
    router.push('/reset')
  }
  return (
    <div className='relative form-padding md:w-[500px] h-[500px] md:h-[470px] signupform'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        // onSubmit={handleLoginAuth}
      >
        <h2 className='mb-2 font-bold text-center'>Verify Password</h2>
        {/* guide */}
        <h2 className='font-normal'>Please check your Email</h2>
        <p className='opacity-50 mt-4 md:mt-0 text-black'>
          We have sent a verification code to{' '}
          <span className='opacity-100 font-semibold'>
            omotoshopeter737@gmail.com
          </span>
        </p>
        {/* receive verification code from user */}
        <div className='mt-12'>
          <VerifyCode />
        </div>
        <CustomBtn
          title='Verify'
          styles='mt-4 w-full bg-[#5B00FF] text-white rounded-lg py-2 mt-[6rem]'
          type='button'
          event={handleVerifyCodeFromEmail}
        />

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
