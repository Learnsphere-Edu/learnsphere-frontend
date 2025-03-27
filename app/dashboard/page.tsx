import DashboardHeader from './components/DashHead'
import Statistics from './components/Statistics'
import styles from './dashboard.module.css'
import Quests from './components/Quests'
import ProgressTrackOverview from './components/ProgressTrackOverview'
import { CustomBtn } from '../globalcomponents'

export default function Dashboard () {
  return (
    <main className='pb-12 w-full min-h-screen dashboard-wrapper'>
      <div>
        <DashboardHeader />
      </div>

      {/* statistics */}
      <section className={`${styles.statistics}`}>
        <h2>Statistics</h2>
        <Statistics />
        <div className='my-4'>
          <CustomBtn
            title='Start Learning'
            disabled={false}
            type='button'
            styles='bg-[#5B00FF] text-white font-bold px-6 md:px-4 md:py-2.5 py-3  rounded-lg text-[14px] md:text-[17px]'
          />
        </div>
      </section>

      {/* Quest */}
      <section className={`${styles.questSection}`}>
        <h2 className={`${styles.heading}`}>Join a Quest</h2>
        <Quests />
        <div className='my-4'>
          <CustomBtn
            title='Start Learning'
            disabled={false}
            type='button'
            styles='bg-[#FF7A00]  text-white font-bold px-6 md:px-4 md:py-2.5 py-3  rounded-lg text-[14px] md:text-[17px]'
          />
        </div>
      </section>

      {/* Quest record */}
      <section className={`${styles.progressSection}`}>
        <h2>Your Quest So Far</h2>

        {/* quest record */}
        <ProgressTrackOverview />
      </section>
    </main>
  )
}
