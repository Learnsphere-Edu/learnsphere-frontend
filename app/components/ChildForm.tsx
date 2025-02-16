'use client'

import Image from 'next/image'
import CustomBtn from './CustomBtn'
import { redirect } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function ChildForm () {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [data, setData] = useState<string>('')

  const handleChildInfoCollection = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const childFormData = new FormData(e.currentTarget)
    redirect('/schedule')
    
  }

  return (
    <div className='relative md:w-[500px] h-[100%] md:h-[470px] signupform'>
      <form
        className='bg-white px-16 py-6 w-full h-full'
        onSubmit={handleChildInfoCollection}
      >
        <h2 className='mb-2 font-bold text-center'>Child's Information</h2>
        <div className='relative mb-3'>
          <input
            type='text'
            name='fullName'
            placeholder='Full name'
            className='bg-[#F8F4FF] form-input'
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='text'
            name='age'
            placeholder='Age'
            className='bg-[#F8F4FF] form-input'
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='text'
            name='preferredLanguage'
            placeholder='Preferred Language'
            className='bg-[#F8F4FF] form-input'
          />
        </div>

        {/* image of child studying */}
        <div className='flex flex-col justify-center items-center'>
          <Image
            src='/studying.png'
            alt='a child studying'
            width={150}
            height={150}
            className='object-contain'
          />
        </div>

        <CustomBtn
          // notify user if loading or not
          title={`${loading ? 'Saving your data' : 'Proceed'}`}
          styles='w-full mt-3 py-3 text-white font-semibold bg-[#5B00FF] rounded-lg z-[26]'
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
