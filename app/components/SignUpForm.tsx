import Image from 'next/image'
import CustomBtn from './CustomBtn'
import Link from 'next/link'

export default function SignUpForm () {
  return (
    <div className='relative w-[500px] h-[470px]'>
      <form action='' className='bg-white px-16 py-6 w-full h-full'>
        <h2 className='mb-2 font-bold text-center'>Sign Up</h2>
        <div className='relative mb-3'>
          <input
            type='text'
            placeholder='Full name'
            className='bg-[#F8F4FF] form-input'
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='email'
            placeholder='Email'
            className='bg-[#F8F4FF] form-input'
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='password'
            placeholder='Password'
            className='bg-[#F8F4FF] form-input'
          />
          <span className='top-3 right-3 absolute'>
            <Image
              src='/password-icon.png'
              alt='icon'
              width={20}
              height={20}
              className='object-contain'
            />
          </span>
        </div>
        <div className='relative mb-3'>
          <input
            type='password'
            placeholder='Confirm Password'
            className='bg-[#F8F4FF] form-input'
          />
          <span className='top-3 right-3 absolute'>
            <Image
              src='/password-icon.png'
              alt='icon'
              width={20}
              height={20}
              className='object-contain'
            />
          </span>
        </div>

        <CustomBtn
          title='Sign Up'
          styles='w-full py-3 text-white font-semibold bg-[#5B00FF] rounded-lg'
        />

        <div className='flex flex-col justify-center items-center'>
          <span className='opacity-50 mt-3 text-[#000] text-center'>
            Already have an account?{' '}
            <Link href='/signin' className='text-[#5B00FF]'>
              Login
            </Link>
          </span>

          {/* other auth options */}
          <Image
            src='/or.png'
            alt='auth option icon'
            width={300}
            height={300}
            className='mt-0 object-contain'
          />


            {/* google auth option btn */}
            <div className='relative w-full cursor-pointer'>
                <Image 
                    src='/google icon.png'
                    alt='google icon'
                    width={30}
                    height={30}
                    className='top-2 left-5 absolute cursor-pointer object-contain'
                />
            <CustomBtn 
                title='Login with Google'
                styles='bg-[#5B00FF] w-full font-semibold py-3 text-white cursor-pointer'
            />
            </div>


        </div>
      </form>

      {/* Eclipse images for designs */}
      <div className='-top-6 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-top-6 -right-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-bottom-12 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='-right-6 -bottom-12 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
    </div>
  )
}
 