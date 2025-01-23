import Image from 'next/image'
export default function SignUp () {
  return (
    <div className='relative bg-[#5B00FF] w-full h-screen overflow-hidden'>
      {/* content-wrapper */}
      <div className='flex justify-center items-center h-full'>
        {/* signup image */}
        <div>
          <Image
            src='/signupimg.png'
            alt='children'
            width={300}
            height={300}
            className='object-contain'
          />
        </div>
        {/* signup form details */}
        <div></div>
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
