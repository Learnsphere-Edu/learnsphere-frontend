'use client'
import Image from 'next/image'
import ScheduleForm from '../components/ScheduleForm'
import { isAuthenticated } from '@/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Schedule () {
  const [loading,setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    console.log('Checking authentication');
    if (!isAuthenticated()) {
      console.log('Not authenticated, redirecting to /signin');
      router.push('/signin');
    }
    setLoading(false)
  }, [router]);

  if (loading) {
    return <><h2>Loading...</h2></>
  }

  return (
    <div className='relative bg-[#5B00FF] w-full h-screen overflow-hidden'>
      {/* content-wrapper */}
      <div className='flex justify-center items-center gap-20 -mt-[3rem] h-full'>
        {/* signup image */}
        <div className='md:flex items-center hidden w-[500px]'>
          <Image
            src='/signupimg.png'
            alt='children'
            width={450}
            height={450}
            className='object-contain'
          />
        </div>
        {/* signup form details */}
        <div>
          <ScheduleForm />
        </div>
      </div>

      {/* bubble designs */}
      <div className='bubble'>
        <Image
          src='/white-bubble-design.png'
          alt='background image'
          width={200}
          height={200}
          className='bottom-[-1rem] z-20 absolute w-full overflow-hidden object-cover'
        />
      </div>
    </div>
  )
}
