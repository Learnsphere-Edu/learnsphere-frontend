'use client'
import Image from 'next/image'
import CustomBtn from '../../globalcomponents/CustomBtn'
import { redirect } from 'next/navigation'
import { FormEvent, useState } from 'react'
import Wazobia from '../../globalcomponents/Wazobia'
import { useProfileStore } from '@/app/store/profileStore'
import { showInfoToast } from '@/utils/toastUtils'

export default function ChildForm () {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    age: '',
    preferredLanguage: ''
  })
  console.log(personalInfo)
  const setProfileData = useProfileStore(state => state.setProfileData)
  const loading = useProfileStore(state => state.loading)
  const error = useProfileStore(state => state.error)
  const setLoading = useProfileStore(state => state.setLoading)
  const setError = useProfileStore(state => state.setError)

  const handleChildInfoCollection = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setProfileData({
      age: personalInfo.age,
      first_name: personalInfo.fullName,
      primary_language: personalInfo.preferredLanguage
    })
    setLoading(false)
    showInfoToast('Saved!')
    console.log(useProfileStore.getState())
    redirect('/schedule')
    // code to  collect child-information
  }

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
            value={personalInfo.fullName}
            onChange={e =>
              setPersonalInfo(prev => ({ ...prev, fullName: e.target.value }))
            }
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='text'
            name='age'
            placeholder='Age'
            className='bg-[#F8F4FF] signupform-input'
            value={personalInfo.age}
            onChange={e =>
              setPersonalInfo(prev => ({ ...prev, age: e.target.value }))
            }
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='text'
            name='preferredLanguage'
            placeholder='Preferred Language'
            className='bg-[#F8F4FF] signupform-input'
            value={personalInfo.preferredLanguage}
            onChange={e =>
              setPersonalInfo(prev => ({
                ...prev,
                preferredLanguage: e.target.value
              }))
            }
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
          event={() => handleChildInfoCollection}
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
