import DashboardHeader from './components/DashHead'
import Statistics from './components/Statistics'
import styles from './dashboard.module.css'
import Quests from './components/Quests'
import ProgressTrackOverview from './components/ProgressTrackOverview'

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
      </section>

      {/* Quest */}
      <section className={`${styles.questSection}`}>
        <h2 className={`${styles.heading}`}>Join a Quest</h2>

        <Quests />
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
