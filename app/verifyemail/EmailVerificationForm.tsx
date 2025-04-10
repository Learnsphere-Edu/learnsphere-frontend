'use client'
import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import CustomBtn from '../globalcomponents/CustomBtn'
import Wazobia from '../globalcomponents/Wazobia'
import useAuthStore from '../store/authStore'
import { showInfoToast } from '@/utils/toastUtils'

const EmailVerificationForm = () => {
  const router = useRouter()
  const userEmail = useAuthStore(state => state.userEmail)
  const parentId = useAuthStore(state => state.parentId)

  const [code, setCode] = useState<string[]>(['', '', '', '', ''])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const isCodeComplete = code.every(c => c !== '')

  useEffect(() => {
    inputsRef.current[0]?.focus()
  }, [])

  const handleChange = (index: number, value: string) => {
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    if (value && index < 4) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handleSubmit = useCallback(
    async (e?: FormEvent<HTMLFormElement>) => {
      if (e) e.preventDefault()
      setLoading(true)
      setError(null)

      if (!parentId) {
        setError('Please signup first')
        setLoading(false)
        return
      }

      const payload = {
        email: userEmail,
        otp_code: code.join('')
      }

      try {
        const response = await fetch(
          'https://learnsphere-jjlc.onrender.com/v1/verify-otp/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }
        )

        if (!response.ok) {
          const data = await response.json()
          throw new Error(data?.message || 'Invalid OTP, please try again')
        }

        showInfoToast('Email Verified')
        router.push('/emailverified')
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    },
    [code, parentId, router, userEmail]
  )

  // Auto-submit on full input
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isCodeComplete && !loading) {
        handleSubmit()
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [code, isCodeComplete, loading, handleSubmit])

  return (
    <div className='relative w-full md:w-[500px] h-full md:h-[470px] form-padding signupform'>
      <form
        className='bg-white px-8 md:px-16 py-4 w-full h-full'
        onSubmit={handleSubmit}
      >
        <h2 className='mt-10 mb-2 font-bold text-center'>Email Verification</h2>
        <p className='md:text-[20px]'>Please check your Email</p>
        <p className='opacity-50 mt-3 text-[14px] text-black'>
          We have sent a verification link to{' '}
          <span className='font-semibold text-[12px] underline italic'>
            {userEmail || ''}
          </span>
        </p>
        <p className='opacity-50 text-[14px]'>
          Click on the link in the mail to complete your signup.
        </p>

        <div className='mt-[3rem]'>
          <div className='flex gap-3 verification-code'>
            {code.map((digit, index) => (
              <input
                key={index}
                type='text'
                maxLength={1}
                value={digit}
                onChange={e => {
                  const value = e.target.value.replace(/\D/g, '') // Only digits
                  handleChange(index, value)
                }}
                onKeyDown={e => handleKeyDown(index, e)}
                ref={el => {
                  inputsRef.current[index] = el
                }}
                className='code-input'
              />
            ))}
          </div>

          {error && <p className='mt-2 text-[14px] text-red-600'>{error}</p>}

          <CustomBtn
            title={loading ? 'Verifying...' : 'Verify'}
            type='submit'
            styles={`w-full mt-3 py-4 text-white font-semibold bg-[#5B00FF] rounded-lg text-[14px] md:text-[18px] ${
              !isCodeComplete || loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isCodeComplete || loading}
          />

          <p className='opacity-50 mt-4 text-[14px]'>
            Haven&apos;t received the email? No problem.
          </p>
          <CustomBtn
            title='Resend Email'
            styles='w-full mt-3 py-4 text-white font-semibold bg-[#5B00FF] rounded-lg text-[14px] md:text-[18px]'
          />
        </div>

        <Wazobia styles='md:hidden opacity-60 mt-4 font-potta_one text-[#f8f4ff] text-[80px] text-center' />
      </form>

      {/* Decorative Circles */}
      {[
        '-top-6 -left-6',
        '-top-6 -right-6',
        '-bottom-12 -left-6',
        '-right-6 -bottom-12'
      ].map((pos, i) => (
        <div key={i} className={`hidden md:block absolute ${pos}`}>
          <Image
            src='/eclipse.png'
            alt='circle'
            width={100}
            height={100}
            className='object-contain'
          />
        </div>
      ))}
    </div>
  )
}

export default EmailVerificationForm
