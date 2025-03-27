'use client'

import Image from 'next/image'
import CustomBtn from '../../globalcomponents/CustomBtn'
import { redirect } from 'next/navigation'
import { FormEvent, useState } from 'react'
import Wazobia from '../../globalcomponents/Wazobia'

export default function ChildForm () {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  // const [data, setData] = useState<string>('')

  const handleChildInfoCollection = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // const childFormData = new FormData(e.currentTarget)
    redirect('/schedule')
  }
  console.log(error)

  return (
    <div className='relative md:w-[500px] h-[100%] md:h-[470px] signupform'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleChildInfoCollection}
      >
        <h2 className='mb-5 font-bold text-center'>Child&apos;s Information</h2>
        <div className='relative mb-3'>
          <input
            type='text'
            name='fullName'
            placeholder='Full name'
            className='bg-[#F8F4FF] signupform-input'
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='text'
            name='age'
            placeholder='Age'
            className='bg-[#F8F4FF] signupform-input'
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='text'
            name='preferredLanguage'
            placeholder='Preferred Language'
            className='bg-[#F8F4FF] signupform-input'
          />
        </div>

        {/* image of child studying */}
        <div className='hidden md:flex flex-col justify-center items-center'>
          <Image
            src='/studying.png'
            alt='a child studying'
            width={150}
            height={150}
            className='w-[200px] md:w-[150px] object-contain'
          />
        </div>

        <CustomBtn
          // notify user if loading or not
          title={`${loading ? 'Saving your data' : 'Proceed'}`}
          styles='w-full mt-12 md:mt-3 py-3 text-white font-semibold bg-[#5B00FF] rounded-lg z-[26] text-[15px] md:text-[18px]'
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
