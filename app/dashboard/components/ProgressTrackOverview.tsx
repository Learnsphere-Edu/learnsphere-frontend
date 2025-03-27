import QuestProgress from '@/app/dashboard/components/QuestProgress'
import Image from 'next/image'
import styles from '../dashboard.module.css'

export default function ProgressTrackOverview () {
  return (
    <div className={`${styles.progressWrapper}`}>
      <h2 className={`${styles.heading_}`}>
        <Image
          src='/clockicon.png'
          alt='timer'
          width={30}
          height={30}
          className='object-contain'
        />
        <span>
          09 Days
        </span>
      </h2>

      <div className={`${styles.questProgress}`}>
        <h2>
          Complete 10 Quests
        </h2>
        <div>
          <span>3/10</span>
          {/* progress */}
          <div className={` ${styles.progress}`}>
            <div>
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
      <div className={`${styles.message}`}>
        <span>
          You have achieved <span className='text-black'>225</span> Diamonds so
          far
        </span>
        <span>Don&apos;t stop now, keep going and uncover more treasures</span>
      </div>
    </div>
  )
}
