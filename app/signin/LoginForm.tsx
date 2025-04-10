'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import CustomBtn from '../globalcomponents/CustomBtn'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
// import { useAuth } from '@/hooks/useAuth'
import ErrorBox from '../globalcomponents/ErrorBox'
import Wazobia from '../globalcomponents/Wazobia'
import useAuthStore from '../store/authStore'
import { showInfoToast } from '@/utils/toastUtils'
import { useRouter } from 'next/navigation'

export default function LoginForm () {
  const router = useRouter()
  const [redirect, setRedirect] = useState(false)
  const [loading,setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const signin = useAuthStore(state => state.signin)
  const isEmailVerified = useAuthStore((state) => state.isEmailVerified)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // Update formData state on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

const handleLoginAuth = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  useAuthStore.setState({ error: '', message: '' });

  // check is email is verified
  if(!isEmailVerified){
    showInfoToast('Kindly verify your email before login')
    console.log('Email not verified!')
    return
  }
  // Check if email and password are empty
  if (!formData.email || !formData.password) {
    useAuthStore.setState({ error: 'Fields cannot be empty' });
    showInfoToast('Fields cannot be empty');
    return;
  }

  // Check if password is valid
  if (formData.password.length < 8) {
    useAuthStore.setState({ error: 'Password is not valid' });
    showInfoToast('Password is not valid!');
    return;
  }

  setLoading(true)
  try {
    // Send request to the backend
  const accessToken = await signin(formData);

  if (accessToken) {
    useAuthStore.getState().setToken(accessToken)
    setRedirect(true);
  } else {
    showInfoToast('Login failed, please check your credentials');
  }
  } catch (err) {
    const message =
    err instanceof Error ? err.message : 'Signup failed. Please try again.'
  setError(message)
  showInfoToast(message)
  }
  finally{
    setLoading(false)
  }
};

useEffect(() => {
  if (redirect) {
    showInfoToast('Login Successful');
    router.push('/child-info');
  }
}, [redirect, router]);


  return (
    <div className='relative w-full md:w-[500px] h-[100%] md:h-[470px] form-padding signupform'>
      <form
        className='bg-white px-8 md:px-16 py-6 w-full h-full'
        onSubmit={handleLoginAuth}
      >
        <h2 className='mt-10 mb-2 font-bold text-center'>Sign In</h2>
        <h3 className='mt-8 mb-4 text-sm'>Please enter your details</h3>
        <div className='relative mb-6 md:mb-3'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='bg-[#F8F4FF] px-8 signupform-input'
            autoComplete='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='relative mb-6 md:mb-3'>
          <input
            // render password type as text or password depending on state
            type={`${showPassword ? 'text' : 'password'}`}
            name='password'
            placeholder='Password'
            className='bg-[#F8F4FF] px-8 signupform-input'
            autoComplete='current-password'
            value={formData.password}
            onChange={handleChange}
          />
          <span
            className='top-3 right-3 absolute cursor-pointer'
            // toggle password-icon state
            onClick={() => setShowPassword(!showPassword)}
          >
            <Image
              src='/password-icon.png'
              alt='icon'
              width={20}
              height={20}
              className='object-contain'
            />
          </span>
          <span className='right-0 -bottom-7 md:-bottom-5 absolute opacity-50 text-[13px] text-black'>
            {/* redirect to reset password */}
            <Link href='/forgot-password'>Forgot your password</Link>
          </span>
        </div>

        {error && <ErrorBox error={error} />}

        <CustomBtn
          // notify user if loading or not
          title={`${loading ? 'Signing In' : 'Sign In'}`}
          styles='w-full mt-3 py-4 text-white font-semibold bg-[#5B00FF] rounded-lg text-[14px] md:text-[18px]'
        />

        {/* display error gracefully when error occurs */}
        {/* {error && <span className='opacity-75 text-[14px]'>{error}</span>} */}

        <div className='flex flex-col items-end md:items-center'>
          <span className='opacity-50 mt-3 text-[#000] text-[13px] text-center'>
            Don&apos;t have an account?{' '}
            <Link href='/signup' className='text-[#5B00FF] text-[13px]'>
              Sign up
            </Link>
          </span>
        </div>

        <Wazobia styles='md:hidden opacity-60 mt-4 font-potta_one text-[#f8f4ff] text-[80px] text-center' />
      </form>

      {/* Eclipse images for designs */}
      <div className='hidden md:block -top-6 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -top-6 -right-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -bottom-12 -left-6 absolute'>
        <Image
          src='/eclipse.png'
          alt='circle'
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='hidden md:block -right-6 -bottom-12 absolute'>
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
