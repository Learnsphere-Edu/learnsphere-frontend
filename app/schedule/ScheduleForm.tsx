'use client'
import { FormEvent, useState } from 'react'
import CustomBtn from '../globalcomponents/CustomBtn'
import Image from 'next/image'
import { showInfoToast } from '@/utils/toastUtils'
import Wazobia from '../globalcomponents/Wazobia'
import { useProfileStore } from '../store/profileStore'
import { useRouter } from 'next/navigation'
import PrevFormNav from '../globalcomponents/PreviousFormNav'

export default function ScheduleForm () {
  // const loading = useProfileStore(state => state.loading)
  const setProfileData = useProfileStore(state => state.setProfileData)
  const loading = useProfileStore(state => state.loading)
  const setLoading = useProfileStore(state => state.setLoading)
  const setError = useProfileStore(state => state.setError)
  const router = useRouter()
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (selectedScheduleOption) {
      showInfoToast(`You selected: ${selectedScheduleOption}`)
      setProfileData({
        daiily_goal_minutes: selectedScheduleOption
      })
      //   redirect to next form
      setLoading(false)
      console.log(useProfileStore.getState())
      router.push('/knowledge')
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
        <PrevFormNav routeTo='/child-info'/>
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
