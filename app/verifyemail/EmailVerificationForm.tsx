'use client'
import React, { FormEvent } from 'react'
import Image from 'next/image'
import CustomBtn from '../globalcomponents/CustomBtn'

import Wazobia from '../globalcomponents/Wazobia'
import { useRouter } from 'next/navigation'

export default function EmailVerificationForm () {
  const router = useRouter()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/emailverified')
  }
  return (
    <div className='relative w-full md:w-[500px] h-[100%] md:h-[470px] form-padding signupform'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleSubmit}
      >
        <h2 className='mt-10 mb-2 font-bold text-center'>Email Verification</h2>
        <p className='md:text-[20px]'>Please check your Email</p>
        <p className='opacity-50 mt-3 text-[14px] text-black'>
          We have sent a Verification link to{' '}
          <span className='font-semibold text-[12px] underline italic'>
            Johndoe@gmail.com{' '}
          </span>
        </p>
        <p className='opacity-50 text-[14px]'>
          {' '}
          click on the link in the mail to complete your sign up.
        </p>

        <div className='mt-[7rem]'>
          <p className='opacity-50 text-[14px]'>
            Haven&apos;t received email? No problem.
          </p>
          <CustomBtn
            title='Resend Email'
            styles='w-full mt-3 py-4 text-white font-semibold bg-[#5B00FF] rounded-lg text-[14px] md:text-[18px] '
          />
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
