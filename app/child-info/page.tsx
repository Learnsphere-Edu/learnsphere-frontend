'use client'
import Image from 'next/image'
import ChildForm from './components/ChildForm'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useAuthStore from '../store/authStore'
import PrevFormNav from '../globalcomponents/PreviousFormNav'

export default function ChildInfo () {
  const token = useAuthStore(state => state.token)
  const router = useRouter()
  // if user is not authenticated , redirect to signin
  useEffect(() => {
    if (!token) {
      router.push('/signin')
    }
  }, [router, token])

  return (
    <div className='z-30 relative bg-white md:bg-[#5B00FF] w-full min-h-screen overflow-hidden'>
      {/* content-wrapper */}
      <h1 className='hidden md:block top-20 z-20 absolute opacity-40 font-potta_one text-[#FFEBD5] text-[260px]'>
        WAZOBIA
      </h1>
      <div className='hidden md:block'>
        <PrevFormNav routeTo='/signin' />
      </div>
      <div className='z-30 relative md:flex justify-center items-center gap-20 mt-[2rem] h-full'>
        {/* signin image */}
        <div className='hidden md:flex items-center w-[500px]'>
          <Image
            src='/signinimg.png'
            alt='children'
            width={450}
            height={450}
            className='object-contain'
          />
        </div>
        {/* child data form details */}
        <div className='h-[80vh]'>
          <ChildForm />
        </div>
      </div>

      {/* bubble designs */}
      <div className='hidden md:block bubble'>
        <Image
          src='/white-bubble-design.png'
          alt='background image'
          width={200}
          height={200}
          className='bottom-[-1rem] z-20 absolute w-full object-cover overflow-hidden'
        />
      </div>
      <div className='md:hidden block bubble'>
        <Image
          src='/bubble puruple.png'
          alt='background image'
          width={200}
          height={200}
          className='bottom-[-1rem] z-20 absolute w-full object-cover overflow-hidden'
        />
      </div>
    </div>
  )
}
