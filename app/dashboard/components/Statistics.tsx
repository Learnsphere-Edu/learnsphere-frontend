'use client'
import StatisticsCard from '@/app/dashboard/components/StatisticsCard'
import styles from '../dashboard.module.css'
import { DashboardStatistics } from '@/constants'
import { useEffect, useRef } from 'react'

export default function Statistics () {
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <div
      className={`${styles.statisticsWrapper}`}
      ref={containerRef}
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
