import Image from 'next/image'
import InfoBox from '../components/InfoBox'
import { InfoDetailsCurveLeft, InfoDetailsCurveRight } from '../../constants'
import InfoBox2 from '../components/InfoBox2'
import { CustomBtn } from '../components'
import RouteChange from './RouteBtn'
export default function AboutLearnsphere () {
  return (
    <main className='relative bg-[#F8F4FF] w-full min-h-screen overflow-hidden'>
      <div className='flex flex-col justify-center items-center pt-12'>
        {/* info-question */}
        <h1 className='mt-6 md:mt-0 px-16 md:px-0 font-poppins font-bold text-[20px] md:text-[30px] text-center'>
          What Makes <span className='text-[#5B00FF]'>Learn</span>
          <span className='text-[#FF7A00]'>Sphere</span> Special
        </h1>

        {/* wazobia */}
        <div className='top-[15rem] absolute opacity-50 -mt-[3rem] overflow-hidden wazobia'>
          <h1 className='z-10 -ml-12 font-potta_one text-[#EFE5FF] text-[260px]'>
            WAZOBIA
          </h1>
        </div>
        <div className='flex md:flex-row flex-col-reverse items-center gap-2 mt-4 md:mt-0'>
          <div className='md:block flex flex-col m-0 px-8 md:px-0'>
            {InfoDetailsCurveRight.map(info => (
              <InfoBox
                infoBg={info.infoBg}
                infoText={info.content}
                infoTitle={info.title}
                textColor={info.textColor}
                titleColor={info.titleColor}
                key={info.id}
              />
            ))}
          </div>

          <div className='md:block flex flex-col-reverse m-0 px-8 md:px-0'>
            {InfoDetailsCurveLeft.map(info => (
              <InfoBox2
                infoBg={info.infoBg}
                infoText={info.content}
                infoTitle={info.title}
                textColor={info.textColor}
                titleColor={info.titleColor}
                key={info.id}
              />
            ))}
          </div>
        </div>

        {/* Nav buttons */}
        <div className='mb-16'>
        <RouteChange />
        </div>
      </div>

      {/* design-balls */}
      <div>
        <Image
          src='/left-bubble.png'
          alt='eclipse'
          width={350}
          height={350}
          className='top-0 left-0 absolute w-[170px] md:w-[350px] object-contain rotate-x-180'
        />
        <Image
          src='/right-bubble.png'
          alt='eclipse'
          width={350}
          height={350}
          className='top-0 right-0 absolute w-[170px] md:w-[350px] object-contain rotate-x-180'
        />

        <Image
          src='/childillus.png'
          alt='child studying'
          width={100}
          height={100}
          className='top-0 absolute w-[70px] md:w-[120px] object-contain'
        />
        <Image
          src='/childillus.png'
          alt='child studying'
          width={100}
          height={100}
          className='top-0 right-0 absolute w-[70px] md:w-[120px] object-contain rotate-x-90'
        />
      </div>

      <div className='md:hidden block bubble'>
        <Image
          src='/bubble puruple.png'
          alt='background image'
          width={200}
          height={200}
          className='bottom-[-1rem] z-20 absolute w-full object-cover overflow-hidden'
        />
      </div>
    </main>
  )
}
