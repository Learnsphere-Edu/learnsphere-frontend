import Image from 'next/image'
import LoginForm from '../components/LoginForm'

export default function SignIn () {
  return (
    <div className='z-30 relative bg-white md:bg-[#5B00FF] w-full min-h-screen overflow-hidden'>
      {/* content-wrapper */}
      <h1 className='hidden md:block top-20 z-20 absolute opacity-40 font-potta_one text-[#FFEBD5] text-[260px]'>
        WAZOBIA
      </h1>
      <div className='z-30 relative md:flex justify-center items-center gap-20 mt-[2rem] h-full'>
        {/* signup image */}
        <div className='hidden md:flex items-center w-[500px]'>
          <Image
            src='/signupimg.png'
            alt='children'
            width={450}
            height={450}
            className='w-[400px] object-contain'
          />
        </div>
        {/* signup form details */}
        <div className='h-[80vh]'>
          <LoginForm />
        </div>
      </div>

      {/* display on desktop */}
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

      {/* display on mobile */}
      <div className='md:hidden block bubble'>
        <Image
          src='/bubble puruple.png'
          alt='background image'
          width={200}
          height={200}
          className='md:hidden block bottom-[-1rem] z-20 absolute w-full object-cover overflow-hidden'
        />
      </div>
    </div>
  )
}
