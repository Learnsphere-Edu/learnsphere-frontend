'use client'

import Image from 'next/image'
import CustomBtn from './CustomBtn'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function SignUpForm () {

  const [error,setError] = useState<string>('')
  const [loading,setLoading] = useState<boolean>(false)
  const [data,setData] = useState<string>('')
  const [showPasword,setShowPassword] = useState<boolean>(false)
  const [showConfirmPasword,setShowConfirmPassword] = useState<boolean>(false)

  const handleSignUp =(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  setLoading(true);
  setError('');

  // automatically retrieves every form field onSubmission
  const formData = new FormData(e.currentTarget)


  fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      setLoading(false);
      if (data.error) {
        setError(data.error);
      } else {
        setData(data.message);
      }
    })
    .catch((error) => {
      setLoading(false);
      setError('An error occurred. Please try again.');
      console.log(error)
    });
  }



  // console.log(formData)
  return (
    <div className='relative md:w-[500px] h-[600px] md:h-[470px]'>
      <form className='bg-white px-16 py-6 w-full h-full' onSubmit={handleSignUp}>
        <h2 className='mb-2 font-bold text-center'>Sign Up</h2>
        <div className='relative mb-3'>
          <input
            type='text'
            name='fullName'
            placeholder='Full name'
            className='bg-[#F8F4FF] form-input'
            
          />
        </div>
        <div className='relative mb-3'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='bg-[#F8F4FF] form-input'
            
          />
        </div>
        <div className='relative mb-3'>
          <input
            type= {`${showPasword ? 'text' : 'password'}`}
            name='password'
            placeholder='Password'
            className='bg-[#F8F4FF] form-input'
            
          />
          <span className='top-3 right-3 absolute cursor-pointer'
           onClick={() => setShowPassword(!showPasword)} 
          >
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
            type= {`${showConfirmPasword ? 'text' : 'password'}`}
            name='confirmPassword'
            placeholder='Confirm Password'
            className='bg-[#F8F4FF] form-input'
            
          />
          <span className='top-3 right-3 absolute cursor-pointer'
            onClick={() => setShowConfirmPassword(!showConfirmPasword)}
          >
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
          title= {`${loading ? 'Signing Up' : 'Sign Up'}`}
          styles='w-full py-3 text-white font-semibold bg-[#5B00FF] rounded-lg'
          
        />
        {error && <span
          className='opacity-75 text-[14px]'
        >{error}</span>}

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
            <div className='relative rounded-lg w-full cursor-pointer'>
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