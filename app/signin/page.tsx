import Image from 'next/image'
 import LoginForm from '../components/LoginForm'

export default function SignIn () {
  return (
    <div className='relative z-30 bg-[#5B00FF] w-full min-h-screen overflow-hidden'>
      {/* content-wrapper */}
      <h1 className='md:block top-20 z-20 absolute hidden opacity-40 font-potta_one text-[#FFEBD5] text-[260px]'>WAZOBIA</h1>
      <div className='relative z-30 flex justify-center items-center gap-20 mt-[2rem] h-full'>
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
        <div className='h-[80vh]'>
          <LoginForm />
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
