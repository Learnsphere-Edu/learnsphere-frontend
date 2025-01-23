'use client'
import { useRouter } from 'next/navigation'
import CustomBtn from './CustomBtn'

export default function NavBtnRouteHandler () {
    const router  = useRouter()
    const handleNextRoute = () => {
        router.push('/learnsphere-info')
    }
    const handlePrevRoute = () => {
        router.push('/')
    }
  return (
    <div className='flex justify-center items-center gap-3 mt-5 nav-btns'>
      <CustomBtn
        title='<  Back'
        styles='bg-[#FF7A00] font-poppins text-white px-8 py-[0.3rem] md:px-6 md:py-1 rounded-l-full'
        event={handlePrevRoute}
      />
      <CustomBtn
        title='Next  >'
        styles='bg-[#5B00FF] font-poppins text-white  px-10 py-[0.3rem] md:px-6 md:py-1 rounded-r-full'
        event={handleNextRoute}
      />
    </div>
  )
}
// Compare this snippet from app/components/CustomBtn.tsx: