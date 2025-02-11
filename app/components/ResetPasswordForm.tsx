'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
import { useRouter } from 'next/navigation'

export default function ResetPasswordForm () {
  const [showPasword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPasword, setShowConfirmPassword] = useState<boolean>(false)
    const router = useRouter()

    const handleResetPassword = () => {
        router.push('/dashboard')
    }
  return (
    <div className='relative form-padding md:w-[500px] h-[500px] md:h-[470px] signupform'>
      <form
        className='bg-white px-16 py-6 w-full h-full'
        // onSubmit={handleLoginAuth}
      >
        <h2 className='mb-2 font-bold text-center'>Reset Password</h2>
        {/* guide */}
        <h2 className='font-normal'>Create new password</h2>
        <p className='opacity-50 text-black'>
          This password must be different from the previous password
        </p>
        {/* allow user set new password */}

        <div className='relative mt-8 mb-3'>
          <input
            type={`${showPasword ? 'text' : 'password'}`}
            name='password'
            placeholder='Password'
            className='bg-[#F8F4FF] form-input'
          />
          <span
            className='top-3 right-3 absolute cursor-pointer'
            onClick={() => setShowPassword(!showPasword)}
          >
            <Image
              src='/password-icon.png'
              alt='icon'
              width={20}
              height={20}
              className='object-contain'
            />
          </span>
        </div>
        <div className='relative mb-3'>
          <input
            type={`${showConfirmPasword ? 'text' : 'password'}`}
            name='confirmPassword'
            placeholder='Confirm Password'
            className='bg-[#F8F4FF] form-input'
          />
          <span
            className='top-3 right-3 absolute cursor-pointer'
            onClick={() => setShowConfirmPassword(!showConfirmPasword)}
          >
            <Image
              src='/password-icon.png'
              alt='icon'
              width={20}
              height={20}
              className='object-contain'
            />
          </span>
        </div>

        <CustomBtn
          title='Reset'
          styles='mt-4 w-full bg-[#5B00FF] text-white rounded-lg py-2 mt-[6rem]'
          type='button'
          event={handleResetPassword}
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
