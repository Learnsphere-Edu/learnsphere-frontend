'use client'
import { FormEvent, useState } from 'react'
import CustomBtn from './CustomBtn'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function ScheduleForm () {
  const options = [
    '5 - 10 minutes a day',
    '10 - 20 minutes a day',
    '20 - 30 minutes a day',
    '30m - 1 hour a day'
  ]
  const [selectedScheduleOption, setSelectedScheduleOption] = useState<string>('')
  const handleClick = (option: string) => [
    setSelectedScheduleOption(option) //update selected option
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedScheduleOption) {
      alert(`You selected: ${selectedScheduleOption}`)
      // send `selectedScheduleOption` to a server here.

    //   redirect to next form
    redirect('/knowledge')

    } else {
      alert('Please select an option!')
    }
  }
  return (
    <div className='relative w-[500px] h-[470px]'>
      <form
        className='bg-white px-16 py-6 w-full h-full'
        onSubmit={handleSubmit}
      >
        <h2 className='mb-2 font-bold text-center'>Learning Scheduling</h2>
        <div className='flex flex-col gap-3 options'>
          {options.map(option => (
            <CustomBtn
            key={option}
              title={option}
              type='button'
              styles={`${
                selectedScheduleOption === option
                  ? 'bg-[#5B00FF]  text-white'
                  : 'bg-[#F8F4FF]'
              } w-full text-[#09001A] rounded-lg font-poppins font-normal py-3 px-6`}
              event={() => handleClick(option)}
            />
          ))}
        </div>

        <CustomBtn
          title='Proceed'
          styles={`w-full bg-[#5B00FF] text-white font-semibold py-3  rounded-lg mt-3`}
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
