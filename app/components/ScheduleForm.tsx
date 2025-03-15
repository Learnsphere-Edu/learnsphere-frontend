'use client'
import { FormEvent, useState } from 'react'
import CustomBtn from './CustomBtn'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { showInfoToast } from '@/utils/toastUtils'
import Wazobia from './Wazobia'

export default function ScheduleForm () {
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
    if (selectedScheduleOption) {
      // alert(`You selected: ${selectedScheduleOption}`)
      showInfoToast(`You selected: ${selectedScheduleOption}`)

      //   redirect to next form
      redirect('/knowledge')
    } else {
      // alert('Please select an option!')
      showInfoToast('Please select an option!')
    }
  }
  return (
    <div className='relative md:w-[500px] h-[500px] md:h-[470px]'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleSubmit}
      >
        <h2 className='mb-5 md:mb-2 font-bold text-center'>Learning Scheduling</h2>
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
          title='Proceed'
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
