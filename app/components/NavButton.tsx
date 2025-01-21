'use client'
import { useRouter } from 'next/navigation'
import CustomBtn from './CustomBtn'

export default function NavBtnRouteHandler () {
    const router  = useRouter()
    const handleNextRoute = () => {
        router.push('/auth/signup')
    }
    const handlePrevRoute = () => {
        router.push('/')
    }
  return (
    <div className='flex justify-center items-center gap-3 mt-5 nav-btns'>
      <CustomBtn
        title='<  Back'
        styles='bg-[#FF7A00] font-poppins text-white text-[13px] px-8 py-2 md:px-6 md:py-1 rounded-l-full'
        event={handlePrevRoute}
      />
      <CustomBtn
        title='Next  >'
        styles='bg-[#5B00FF] font-poppins text-white text-[13px] px-8 py-2 md:px-6 md:py-1 rounded-r-full'
        event={handleNextRoute}
      />
    </div>
  )
}
