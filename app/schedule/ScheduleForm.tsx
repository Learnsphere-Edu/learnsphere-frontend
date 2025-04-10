'use client'
import { FormEvent, useState } from 'react'
import CustomBtn from '../globalcomponents/CustomBtn'
import Image from 'next/image'
import { showInfoToast } from '@/utils/toastUtils'
import Wazobia from '../globalcomponents/Wazobia'
import { useProfileStore } from '../store/profileStore'
import { useRouter } from 'next/navigation'
import PrevFormNav from '../globalcomponents/PreviousFormNav'
import useAuthStore from '../store/authStore'

export default function ScheduleForm () {
  // const loading = useProfileStore(state => state.loading)
  const setProfileData = useProfileStore(state => state.setProfileData)
  const loading = useProfileStore(state => state.loading)
  const setLoading = useProfileStore(state => state.setLoading)
  const setError = useProfileStore(state => state.setError)
  const router = useRouter()
  const resetProfile = useProfileStore(state => state.resetProfile)
  const fullState = useProfileStore.getState()

  const profileData = {
    parent: useAuthStore.getState().parentId,
    first_name: fullState.first_name,
    last_name: fullState.last_name,
    age: fullState.age,
    primary_language: fullState.primary_language,
    schedule: fullState.daiily_goal_minutes,
    language_level: fullState.secondary_languages
  }
  const options = [
    '5 - 10 minutes a day',
    '10 - 20 minutes a day',
    '20 - 30 minutes a day',
    '30m - 1 hour a day'
  ]
  const [selectedScheduleOption, setSelectedScheduleOption] =
    useState<string>('')

  const handleClick = (option: string) => [
    setSelectedScheduleOption(option) //update selected option
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // if an option is selected
    if (selectedScheduleOption) {
      showInfoToast(`You selected: ${selectedScheduleOption}`)
      setProfileData({
        daiily_goal_minutes: selectedScheduleOption
      })

      // final submission logic
      // basic validation
      if (
        !profileData.first_name ||
        !profileData.primary_language ||
        !profileData.age ||
        !profileData.language_level ||
        !profileData.last_name ||
        !profileData.schedule ||
        !profileData.parent
      ) {
        showInfoToast('Please complete all required profile fields!')
        setLoading(false)
        return
      }

      try {
        const token = useAuthStore.getState().token
        const response = await fetch(
          'https://learnsphere-jjlc.onrender.com/v1/children/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(token ? { Authorization: `Bearer ${token}` } : {})
            },
            body: JSON.stringify(profileData)
          }
        )

        if (!response.ok) {
          showInfoToast('Error while saving profile')
          return
        }

        showInfoToast('Profile saved successfully!')
        // reset after sending to backend
        resetProfile()
        setLoading(false)
        router.push('/dashboard')
      } catch (error) {
        console.error(error)
        setError('An error occurred while saving profile')
        showInfoToast('An error occurred while saving profile')
        setLoading(false)
      }
    } else {
      showInfoToast('Please select an option!')
      setLoading(false)
    }
  }

  return (
    <div className='relative md:w-[500px] h-[500px] md:h-[470px]'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleSubmit}
      >
        <PrevFormNav routeTo='/child-info' />
        <h2 className='mb-5 md:mb-2 font-bold text-center'>
          Learning Scheduling
        </h2>
        <div className='flex flex-col gap-4 md:gap-3 options'>
          {options.map(option => (
            <CustomBtn
              key={option}
              title={option}
              type='button'
              styles={`${
                selectedScheduleOption === option
                  ? 'bg-[#5B00FF]  text-white'
                  : 'bg-[#F8F4FF]'
              } w-full text-[#09001A] rounded-lg border border-[#9C66FF] font-poppins text-left font-normal py-3 px-6`}
              event={() => handleClick(option)}
            />
          ))}
        </div>

        <CustomBtn
          title={loading ? 'Almost There...' : 'Proceed'}
          styles={`w-full bg-[#5B00FF] text-white font-semibold py-3  rounded-lg mt-3`}
        />
        <Wazobia styles='md:hidden opacity-60 mt-6 font-potta_one text-[#f8f4ff] text-[80px] text-center' />
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
