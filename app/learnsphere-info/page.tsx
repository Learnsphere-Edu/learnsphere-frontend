import Image from 'next/image'
import InfoBox from '../components/InfoBox'
import { InfoDetailsCurveLeft, InfoDetailsCurveRight } from '../constants'
import InfoBox2 from '../components/InfoBox2'
export default function AboutLearnsphere () {
  return (
    <main className='bg-[#F8F4FF] w-full h-screen'>
      <div className='flex flex-col justify-center items-center pt-16'>
        {/* info-question */}
        <h1 className='font-bold font-poppins text-[30px] text-center'>
          What Makes <span className='text-[#5B00FF]'>Learn</span>
          <span className='text-[#FF7A00]'>Sphere</span> Special
        </h1>
        <div className='flex items-center gap-5'>
          <div>
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

          <div>
            {
                InfoDetailsCurveLeft.map((info) => (
                    <InfoBox2 
                        infoBg={info.infoBg}
                        infoText={info.content}
                        infoTitle={info.title}
                        textColor={info.textColor}
                        titleColor={info.titleColor}
                        key={info.id}
                    />
                ))
            }
          </div>
        </div>
      </div>

      {/* design-balls */}
      <div>
        <Image
          src='/left-bubble.png'
          alt='eclipse'
          width={350}
          height={350}
          className='top-0 left-0 absolute object-contain rotate-x-180'
        />
        <Image
          src='/right-bubble.png'
          alt='eclipse'
          width={350}
          height={350}
          className='top-0 right-0 absolute object-contain rotate-x-180'
        />
      </div>
    </main>
  )
}
