'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import CustomBtn from '../../globalcomponents/CustomBtn'
import { showInfoToast } from '@/utils/toastUtils'
import Wazobia from '../../globalcomponents/Wazobia'

export default function ForgotPwordForm () {
  // const router = useRouter()
  const [userEmail, setUserEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  console.log(error, loading)

  // fuction to send verification code to userEmail
  const handleSendVeriCode = async (veriCode: number | string | undefined) => {
    if (veriCode) {
      const sendCodeToEmail = () => {
        // send code to email logic
        console.log(veriCode)
      }
      sendCodeToEmail()
    } else {
      showInfoToast('Please request again')
    }
  }
  //function to send email to backend before verification
  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    console.log('Email requesting for verification:', userEmail)

    // return if email is empty
    if (!userEmail) {
      setLoading(false)
      showInfoToast('Field cannot be empty')
      return
    }

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userEmail)
      })

      if (!response.ok) {
        const data = await response.json()
        // handle error
        if (response.status === 401) {
          showInfoToast(data.message || 'This email is  not registered')
          console.log(data.message)
        }
      }

      // if response is ok
      const data = await response.json()
      // get code from response
      const code = data.code
      // send verification code to user email
      handleSendVeriCode(code)
      // log to console
      console.log(data)
    } catch (error) {
      console.error('Error', error)
      showInfoToast('An unknown error occurred, try again later!')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='relative md:w-[500px] h-[500px] md:h-[470px] md:form-padding signupform'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleSendEmail}
      >
        <h2 className='mb-2 font-bold text-center'>Forgot Password</h2>
        {/* guide */}
        <p className='opacity-50 mt-4 text-[12px] text-black md:text-[15px]'>
          Enter the email address with your account and we&apos;ll send an email
          with confirmation to reset your password.
        </p>

        {/* retrieve user email */}
        <div className='relative mt-4 mb-3'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='bg-[#F8F4FF] form-input'
            value={userEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserEmail(e.target.value)
            }
          />
        </div>

        {/* send verification code to user registered email */}
        <CustomBtn
          title='Send Code'
          styles='mt-4 w-full bg-[#5B00FF] text-white rounded-lg py-2 mt-[6rem]'
          type='submit'
        />

        <Wazobia styles='md:hidden opacity-60 mt-16 font-potta_one text-[#f8f4ff] text-[80px] text-center' />
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
