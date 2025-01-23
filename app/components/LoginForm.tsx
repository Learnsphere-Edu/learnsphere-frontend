import Image from "next/image";
import CustomBtn from "./CustomBtn";
import Link from "next/link";

export default function LoginForm(){
    return(
        <div className='relative w-[500px] h-[470px]'>
      <form action='' className='bg-white px-16 py-6 w-full h-full'>
        <h2 className='mb-2 font-bold text-center'>Sign In</h2>
        <div className='relative mb-3'>
          <input
            type='text'
            placeholder='Username'
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
          <span className="right-0 -bottom-5 absolute opacity-50 text-[13px] text-black"><Link href='/'>Forgot your password</Link></span>

        </div>

        <CustomBtn
          title='Sign In'
          styles='w-full mt-3 py-3 text-white font-semibold bg-[#5B00FF] rounded-lg'
        />

        <div className='flex flex-col justify-center items-center'>
          <span className='opacity-50 mt-3 text-[#000] text-center'>
            Don&apos;t have an account?{' '}
            <Link href='/signup' className='text-[#5B00FF]'>
              Sign up
            </Link>
          </span>

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