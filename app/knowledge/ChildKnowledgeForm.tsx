'use client'
import { FormEvent, useState } from 'react'
import CustomBtn from '../globalcomponents/CustomBtn'
import Image from 'next/image'
import { showInfoToast } from '@/utils/toastUtils'
import { useProfileStore } from '../store/profileStore'
import { useRouter } from 'next/navigation'
import PrevFormNav from '../globalcomponents/PreviousFormNav'

export default function ChildKnowledgeForm () {
  const router = useRouter()
  const setProfileData = useProfileStore(state => state.setProfileData)
  const setLoading = useProfileStore(state => state.setLoading)
  const setError = useProfileStore(state => state.setError)
  const loading = useProfileStore(state => state.loading)


  const options = [
    'New to language',
    'Know a little bit',
    'Can make simple sentences',
    'Can converse properly'
  ]

  const [selectedKnowledgeOption, setSelectedKnowledgeOption] =
    useState<string>('')

  const handleClick = (option: string) => {
    setSelectedKnowledgeOption(option)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!selectedKnowledgeOption) {
      showInfoToast('Please select an option!')
      setLoading(false)
      return
    }
    // store knoledge option
    setProfileData({ secondary_languages: selectedKnowledgeOption })
    setLoading(false)
    router.push('/schedule')
  }
  return (
    <div className='relative md:w-[500px] h-[500px] md:h-[470px]'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleSubmit}
      >
        <PrevFormNav routeTo='/schedule' />
        <h2 className='mb-5 md:mb-2 font-bold text-center'>
          Language Knowledge
        </h2>
        <div className='flex flex-col gap-5 md:gap-3 options'>
          {options.map(option => (
            <div onChange={() => handleClick(option)} key={option}>
              <CustomBtn
                title={option}
                type='button'
                styles={`${
                  selectedKnowledgeOption === option
                    ? 'bg-[#5B00FF]  text-white'
                    : 'bg-[#F8F4FF]'
                } w-full text-[#09001A] border border-[#9C66FF] rounded-lg font-poppins font-normal text-left py-3 px-6`}
                event={() => handleClick(option)}
              />
            </div>
          ))}
        </div>

        <CustomBtn
          title={loading ? 'Almost There. . .' : 'Proceed'}
          styles={`w-full bg-[#5B00FF] text-white font-semibold py-3 rounded-lg mt-8`}
        />

        {/* <Wazobia styles='md:hidden opacity-60 mt-6 font-potta_one text-[#f8f4ff] text-[80px] text-center' /> */}
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
