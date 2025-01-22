import Image from 'next/image'
import ButtonGrp from '../components/ButtonGroup'
import NavBtnRouteHandler from '../components/NavButton'

export default function Onboarding2 () {
  return (
    <div className='min-h-screen onboarding2'>
      <div className='designs'>
        <div className='top-0 left-0 z-20 absolute rotate-x-180'>
          <Image
            src='/left-bubble.png'
            alt='joint balls'
            width={350}
            height={350}
            className='object-contain'
            priority
          />
        </div>
        <div className='top-0 right-0 z-20 absolute rotate-x-180'>
          <Image
            src='/right-bubble.png'
            alt='joint balls'
            width={350}
            height={350}
            className='object-contain'
            priority
          />
        </div>
      </div>
      {/* wazobia */}
      <div className='-mt-[1rem] overflow-hidden wazobia'>
        <h1 className='z-10 -ml-12 font-potta_one text-[#ffebd5] text-[260px]'>
          WAZOBIA
        </h1>
      </div>

      {/* showcase */}
      <div className='relative flex md:flex-row flex-col justify-center items-center gap-[3rem] md:gap-[10rem] mt-[5rem] md:-mt-[4rem] engage'>
        <div className='engage-text'>
          <Image
            src='/eclipse text.png'
            alt='cloud'
            width={300}
            height={300}
            className='object-contain textbase'
            priority
          />
          {/* <h5 className='top-16 left-[16rem] absolute max-w-[20%] font-bold engage-text-para text-center'>
            Engage in fun and exciting games, while you learn your Mother tongue
          </h5> */}
        </div>
        <div className='engage-image'>
          <Image
            src='/children.png'
            alt='children'
            width={350}
            height={350}
            className='object-contain'
          />
        </div>
        <div className='hidden-wazobia'>
          <h1 className='z-10 font-potta_one text-[#ffebd5] text-[80px]'>
            WAZOBIA
          </h1>
        </div>
      </div>

      {/* button display design */}
      <div className='btn-display'>
        <ButtonGrp />
      </div>

      {/* navigation buttons */}
      <div>
        <NavBtnRouteHandler />
      </div>
    </div>
  )
}
