import { DashboardStatistics } from '@/constants'
import DashboardHeader from '../components/DashHead'
import StatisticsCard from '../components/StatisticsCard'
import Image from 'next/image'
import QuestProgress from '../components/QuestProgress'
import AuthContext from '../contexts/AuthContext'
import PostionalImages from '../components/PositionalImages'

export default function Dashboard () {
  return (
    <main className='w-full min-h-screen dashboard-wrapper'>
      <div>
        <DashboardHeader />
      </div>

      {/* statistics */}
      <section className='mb-[1rem] px-[1rem] md:px-[5rem]'>
        <h2 className='pt-4 font-bold text-[#360099] text-[21px] md:text-[27px]'>
          Statistics
        </h2>
        {/* display statistics */}
        <div
          className='flex justify-center md:justify-evenly items-center gap-4 bg-[#5b00ff] bg-contain bg-no-repeat bg-bottom px-[10px] rounded-t-xl h-[230px] md:h-[330px]'
          style={{ backgroundImage: 'url(/barchartbg.png)' }}
        >
          {/* mapping through properties of each element */}
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
      <section className='relative mb-[1rem] px-[1rem] md:px-[5rem]'>
        <h2 className='mb-[1rem] pt-4 font-bold text-[#FF7A00] text-[27px]'>
          Join a Quest
        </h2>
        {/* Adventure */}
        <div className='bg-[#FFF4E5] px-4 md:px-8 py-4 rounded-t-xl h-[380px]'>
          <h2 className='font-bold text-[#FF7A00] text-[20px] md:text-[25px]'>
            Embark on a Language Adventure
          </h2>
          <p className='mx-w- mt-[0.5remax-w-[70%] md:max-w-[50%] text-[#FF7A00] text-[18px]'>
            "Learn new words and phrases as you journey through fun, interactive
            stories!"{' '}
          </p>

          <PostionalImages />
        </div>
      </section>

      {/* Quest record */}
      <section className='mb-3 px-[1rem] md:px-[5rem] w-full quests'>
        <h2 className='pt-4 font-bold text-[#360099] text-[21px] md:text-[27px]'>
          Your Quest So Far
        </h2>

        {/* quest record */}
        <div className='flex flex-col justify-center gap-2 bg-[#F8F4FF] px-[1rem] md:px-[2rem] rounded-lg w-full h-[330px] quest-record'>
          <h2 className='flex items-center gap-1.5'>
            <Image
              src='/clockicon.png'
              alt='timer'
              width={30}
              height={30}
              className='object-contain'
            />
            <span className='text-[#360099] text-[15px] md:text-[20px]'>
              09 Days
            </span>
          </h2>

          {/* progress wr */}
          <div className='flex flex-col justify-center gap-1 bg-[#5B00FF] px-[1rem] md:px-[2rem] rounded-lg h-[170px]'>
            <h2 className='font-bold text-[17px] text-white md:text-[20px]'>
              Complete 10 Quests
            </h2>

            <div className='relative flex flex-col justify-end items-center bg-white pb-1.5 rounded-lg h-[100px] fl'>
              {/* this will be a dynamic number , in a new component */}
              <span className='absolute text-[#fff] Z-[20]'>3/10</span>
              {/* progress */}
              <div className='flex justify-center items-center w-full'>
                <div className='w-[70%] md:w-[80%]'>
                  <QuestProgress />
                </div>
                <Image
                  src='/crown.png'
                  alt='crown'
                  width={30}
                  height={30}
                  className='object-contain'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1.5 md:gap-3 message'>
            <span className='font-bold text-[#360099] text-[16px] md:text-[18px]'>
              you have achieved <span className='text-black'>225</span> Diamonds
              so far
            </span>
            <span className='text-[#7C33FF] text-[18px] md:text-[20px]'>
              Don&apos;t stop now, keep going and uncover more treasures
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
