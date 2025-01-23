'use client'
import { CustomBtn } from '../components'
import { useRouter } from 'next/navigation'

export default function RouteChange () {
  const router = useRouter()
  const changeRouteLeft = () => {
    router.push('/onboarding')
  }
  const changeRouteRight = () => {
    router.push('/signup')
  }
  return (
    <div className='flex gap-2'>
      <CustomBtn
        title='<  Back'
        styles='bg-[#FF7A00] text-white px-8 py-[0.3rem] rounded-l-full'
        event={changeRouteLeft}
      />
      <CustomBtn
        title='Next  >'
        styles='bg-[#5B00FF] text-white px-8 py-[0.3rem] rounded-r-full'
        event={changeRouteRight}
      />
    </div>
  )
}
