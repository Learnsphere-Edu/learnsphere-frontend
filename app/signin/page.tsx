import Image from 'next/image'
import LoginForm from '../components/LoginForm'

export default function SignIn () {
    // create a reusable component flgoin,signup and other pages since they are alike and it's oge and the form that is changing
  return (
    <div className='relative bg-[#5B00FF] w-full h-screen overflow-hidden'>
      {/* content-wrapper */}
      <div className='flex justify-center items-center gap-20 -mt-[3rem] h-full'>
        {/* signin image */}
        <div className='flex items-center w-[500px]'>
          <Image
            src='/signinimg.png'
            alt='children'
            width={450}
            height={450}
            className='object-contain'
          />
        </div>
        {/* signin form details */}
        <div>
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
