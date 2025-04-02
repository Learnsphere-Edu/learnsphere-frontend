'use client'
import React from 'react'
import Image from 'next/image'
import CustomBtn from '../globalcomponents/CustomBtn'
import Wazobia from '../globalcomponents/Wazobia'

export default function VerifiedPage () {
  return (
    <div className='relative w-full md:w-[500px] h-[100%] md:h-[470px] form-padding signupform'>
      <form className='bg-white px-8 md:px-16 py-3 w-full h-full'>
        <h2 className='mt-10 mb-2 font-bold text-center'>Verification Complete</h2>
        <p className='text-[16px] md:text-[18px]'>You&apos;re All Set!</p>
        <p className='opacity-50 mt-3 text-[14px] text-black'>
          You&apos;re all set to access your account and enjoy a seamless learning experience.
        </p>

        <div className='flex flex-col items-center mt-[4rem] md:mt-[2rem]'>
          <Image 
            src= '/thumbs up.png'
            alt='thumbs up'
            width={150}
            height={150}
            className='object-contain'
          />
          <CustomBtn
            title='Let&apos;s Begin'
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
