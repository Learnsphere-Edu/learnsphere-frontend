import { Header } from './components'
import Image from 'next/image'
import NextButton from './components/NextBtn'
import SignUpBtn from './components/SignUpBtn'

export default function Onboarding () {
  return (
    <div className='relative min-h-screen onboarding'>
      {/* header component */}
      <div>
        <Header />
      </div>
      <div className='wrapper'>
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
                Community of young nigerians and lorem ipsum Learn Naija
                Languages in a fun and exciting way, Grow in the Community of
                young nigerians and lorem ipsum
              </p>
              {/* sign up button */}
              {/* change this to be a component later on */}
              <SignUpBtn />
            </div>

            {/* hero-image */}
            <div className='md:h-[400px] cartoon-wrapper'>
              <div className='block hidden-heading md:hidden'>
                <h1 className='mt-3 font-bold text-[#09001A] text-[25px] text-center leading-[2.3rem]'>
                  Celebrate Nigeria&apos;s rich cultural diversity!
                </h1>
              </div>
              <Image
                alt='cartoonised image'
                src='/new_child_img.png'
                width={800}
                height={800}
                className='cartoon object-contain'
              />
            </div>
          </div>
          <div className='mt-8 not-visible'>
            <h1 className='z-10 font-potta_one text-[#EFE5FF] text-[80px]'>
              WAZOBIA
            </h1>
          </div>
        </div>

        <div className='after-hero'>
          {/* next button */}
          <div className='flex flex-col justify-center items-center'>
            <NextButton />
          </div>
          {/* hero-wazobia */}
          <div className='md:block hidden -mt-[20rem] overflow-hidden'>
            <h1 className='z-10 -ml-3 font-potta_one text-[#EFE5FF] text-[260px]'>
              WAZOBIA
            </h1>
          </div>

          {/* base designs (orange and purple joint balls) */}
          <div className='absolute-balls'>
            <div className='bottom-0 left-0 z-20 absolute'>
              <Image
                alt='design'
                src='/left-bubble.png'
                width={350}
                height={350}
                className='left-bubble object-contain'
              />
            </div>
            <div className='right-0 bottom-0 z-20 absolute'>
              <Image
                alt='design'
                src='/right-bubble.png'
                width={350}
                height={350}
                className='right-bubble object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
