import Image from 'next/image'
import SignUpForm from '../components/SignUpForm'

export default function SignUp () {
  return (
    <div className='z-30 relative bg-[#5B00FF] w-full h-screen overflow-hidden'>
      {/* content-wrapper */}
      <h1 className='hidden md:block top-20 z-20 absolute opacity-40 font-potta_one text-[#FFEBD5] text-[260px]'>
        WAZOBIA
      </h1>
      <div className='z-30 relative flex justify-center items-center gap-20 -mt-[3rem] h-full'>
        {/* signup image */}
        <div className='hidden md:flex items-center w-[500px]'>
          <Image
            src='/signupimg.png'
            alt='children'
            width={450}
            height={450}
            className='object-contain'
          />
        </div>
        {/* signup form details */}
        <div className='h-[80vh]'>
          <SignUpForm />
        </div>
      </div>

      <h1 className='md:hidden opacity-40 -mt-[2rem] font-potta_one text-[#FFEBD5] text-[40px] text-center'>
        WAZOBIA
      </h1>

      {/* bubble designs */}
      <div className='bubble'>
        <Image
          src='/white-bubble-design.png'
          alt='background image'
          width={200}
          height={200}
          className='bottom-[-1rem] z-20 absolute w-full object-cover overflow-hidden'
        />
      </div>
    </div>
  )
}
