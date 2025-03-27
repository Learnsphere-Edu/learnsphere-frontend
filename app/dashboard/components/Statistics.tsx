import StatisticsCard from '@/app/dashboard/components/StatisticsCard'
import styles from '../dashboard.module.css'
import { DashboardStatistics } from '@/constants'
export default function Statistics () {
  return (
    <div
      className={`${styles.statisticsWrapper}`}
      style={{ backgroundImage: 'url(/barchartbg.png)' }}
    >
      <div className={styles.statItems}>
        {DashboardStatistics.map((stat, index) => (
          <StatisticsCard
            icon={stat.icon}
            title={stat.title}
            image={stat.image}
            key={index}
            text={stat.text}
          />
        ))}
      </div>
    </div>
  )
}
