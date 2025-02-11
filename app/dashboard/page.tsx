import { DashboardStatistics } from '@/constants'
import DashboardHeader from '../components/DashHead'
import StatisticsCard from '../components/StatisticsCard'
import Image from 'next/image'

export default function Dashboard () {
  return (
    <main className='w-full min-h-screen dashboard-wrapper'>
      <div>
        <DashboardHeader />
      </div>

      {/* statistics */}
      <section className='mb-[1rem] px-[5rem]'>
        <h2 className='pt-4 font-bold text-[#360099] text-[27px]'>
          Statistics
        </h2>
        {/* display statistics */}
        <div
          className='flex justify-evenly items-center gap-4 bg-[#5b00ff] bg-contain bg-bottom rounded-t-xl h-[330px]'
          style={{ backgroundImage: 'url(/barchartbg.png)' }}
        >
          {DashboardStatistics.map(statistics => (
            <StatisticsCard
              icon={statistics.icon}
              image={statistics.image}
              text={statistics.text}
              title={statistics.title}
              key={statistics.id}
            />
          ))}
        </div>
      </section>         

      {/* Quest */}
      <section className='relative mb-[1rem] px-[5rem]'>
        <h2 className='mb-[1rem] pt-4 font-bold text-[#FF7A00] text-[27px]'>
          Join a Quest
        </h2>
        {/* Adventure */}
        <div className='bg-[#FFF4E5] px-8 py-4 rounded-t-xl h-[380px]'>
          <h2 className='font-bold text-[#FF7A00] text-[25px]'>
            Embark on a Language Adventure
          </h2>
          <p className='mt-[0.5rem] max-w-[50%] text-[#FF7A00] text-[18px]'>
            "Learn new words and phrases as you journey through fun, interactive
            stories!"
          </p>

          {/* beauty images positioned absolute  */}

          <Image
            src='/1.png'
            alt='flower image'
            width={200}
            height={180}
            className='bottom-0 left-0 z-10 absolute object-contain'
          />
          <Image
            src='/line1.png'
            alt='line coloured'
            width={180}
            height={50}
            className='bottom-8 left-[9.5rem] z-[8] absolute object-contain'
          />
          <Image
            src='/2.png'
            alt='flower image'
            width={110}
            height={90}
            className='bottom-0 left-[20rem] z-10 absolute object-contain'
          />
          <Image
            src='/line2.png'
            alt='line coloured'
            width={40}
            height={50}
            className='bottom-11 left-[24.5rem] z-[8] absolute object-contain'
          />
          <Image
            src='/3.png'
            alt='flower image'
            width={180}
            height={90}
            className='bottom-[9rem] left-[25.4rem] z-10 absolute object-contain'
          />
          <Image
            src='/line3.png'
            alt='line coloured'
            width={100}
            height={50}
            className='bottom-[1.3rem] left-[36rem] z-[8] absolute object-contain'
          />
          <Image
            src='/4.png'
            alt='flower image'
            width={180}
            height={90}
            className='bottom-[2.5rem] left-[40.7rem] z-10 absolute object-contain'
          />
          <Image
            src='/line4.png'
            alt='line coloured'
            width={50}
            height={50}
            className='bottom-[2.7rem] left-[50.2rem] z-[8] absolute object-contain'
          />
          <Image
            src='/5.png'
            alt='flower image'
            width={180}
            height={90}
            className='top-[9rem] left-[51.3rem] z-10 absolute object-contain'
          />
          <Image
            src='/line5.png'
            alt='line coloured'
            width={120}
            height={50}
            className='top-[15.4rem] left-[62.4rem] z-[8] absolute object-contain'
          />
          <Image
            src='/new tree.png'
            alt='flower image'
            width={180}
            height={90}
            className='top-[2.3rem] right-0 z-10 absolute object-contain'
          />
        </div>
      </section>

      {/* Quest record */}
      <section className='mb-3 px-[5rem] w-full quests'>
        <h2 className='pt-4 font-bold text-[#360099] text-[27px]'>
          Your Quest So Far
        </h2>

        {/* quest record */}
        <div className='flex flex-col justify-center gap-2 bg-[#F8F4FF] px-[2rem] rounded-lg w-full h-[330px] quest-record'>
          <h2 className='flex items-center gap-1.5'>
            <Image
              src='/clockicon.png'
              alt='timer'
              width={30}
              height={30}
              className='object-contain'
            />
            <span className='text-[#360099] text-[20px]'>09 Days</span>
          </h2>

          {/* progress wr */}
          <div className='flex flex-col justify-center gap-1 bg-[#5B00FF] px-[2rem] rounded-lg h-[170px]'>
            <h2 className='font-bold text-[20px] text-white'>
              Complete 10 Quests
            </h2>

            <div className='bg-white rounded-lg h-[100px]'>
              {/* progress */}
            </div>
          </div>
          <div className='flex flex-col gap-3 message'>
            <span className='font-bold text-[#360099] text-[18px]'>you have achieved 225 Diamonds so far</span>
            <span className='text-[#7C33FF] text-[20px]'>
              Don&apos;t stop now, keep going and uncover more treasures
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
