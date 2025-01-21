'use client'
import CustomBtn from './CustomBtn'
import { useRouter } from 'next/navigation'


export default function NextButton () {
  const router = useRouter()
  const handleNextRoute = () => {
    router.push('/onboarding')
    console.log('kilode');
    

  }
  return (
// c
      <CustomBtn
        title='Next  >'
        styles='px-8 py-2 bg-[#5B00FF] rounded-r-full z-[100] absolute bottom-10 text-white'
        event={handleNextRoute}
      />
  )
}
