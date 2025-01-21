import { CustomBtn, Header } from './components'
import Image from 'next/image'
import NextButton from './components/NextBtn'
import Link from 'next/link'
import SignUpBtn from './components/SignUpBtn'

export default function Onboarding () {
  return (
    <div className='onboarding'>
      {/* header component */}
      <div>
        <Header />
      </div>

      {/* hero component */}
      <div className='hero'>
        {/* hero-showcase */}
        <div>
          {/* hero-text */}
          <div className='z-[200] hero-text-head'>
            <h1 className='max-w-[70%] font-bold text-[#09001A] text-[35px] leading-[2.8rem]'>
              Celebrate Nigeria&apos;s rich cultural diversity!
            </h1>
            <p className='mt-3 max-w-[70%] font-normal text-[#09001A] text-[13px]'>
              Learn Naija Languages in a fun and exciting way, Grow in the
              Community of young nigerians and lorem ipsum Learn Naija Languages
              in a fun and exciting way, Grow in the Community of young
              nigerians and lorem ipsum
            </p>
            {/* sign up button */}
            {/* change this to be a component later on */}
            <SignUpBtn />
          </div>
          {/* hero-image */}
          <div className='h-[400px]'>
            <Image
              alt='cartoonised image'
              src='/babycloud.png'
              width={800}
              height={800}
              className='object-contain'
            />
          </div>
        </div>
      </div>

      {/* next button */}
      <div className='flex flex-col justify-center items-center'>
        <NextButton />
      </div>
      {/* hero-wazobia */}
      <div className='-mt-[10rem] overflow-hidden'>
        <h1 className='z-10 -ml-3 font-potta_one text-[#EFE5FF] text-[260px]'>
          WAZOBIA
        </h1>
      </div>

      {/* base designs (orange and purple joint balls) */}
      <div className='bottom-0 left-0 z-20 absolute'>
        <Image
          alt='design'
          src='/left-bubble.png'
          width={350}
          height={350}
          className='object-contain'
        />
      </div>
      <div className='right-0 bottom-0 z-20 absolute'>
        <Image
          alt='design'
          src='/right-bubble.png'
          width={350}
          height={350}
          className='object-contain'
        />
      </div>
    </div>
  )
}
