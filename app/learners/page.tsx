'use client'
import styles from './learner.module.css'
import Image from 'next/image'
import LearnerBox from './components/LearnerBox'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '../store/authStore'

export type Learner = {
  id: number,
  name: string,
  avatarUrl: string
}
export default function Learners () {
  const router = useRouter()
  const { token } = useAuthStore()
  const [learners, setLearners] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchLearners = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          'https://learnsphere-jjlc.onrender.com/v1/children/',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              ...(token ? { Authorization: `Bearer ${token}` } : {})
            }
          }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch learners')
        }
        const data = await response.json()
        setLearners(data) // Update based on actual structure
      } catch (error) {
        console.error('Error fetching learners:', error)
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      fetchLearners()
    } else {
      console.log('Unauthorized request')
    }
  }, [token])

  const handleLearnerSelect = (id: number | string) => {
    router.push(`/learningapp/${id}/home`)
  }

  return (
    <div className={styles.learner}>
      <div>
        <Image
          src='/bubble puruple.png'
          alt='background image'
          width={200}
          height={200}
          className='md:hidden block bottom-0 z-20 absolute w-full object-cover overflow-hidden'
        />
      </div>
      <div className={styles.learnerWrapper}>
        <div className={styles.learnerHeading}>
          <h2>Select who is learning</h2>
        </div>
        <div className={styles.allLearners}>
          <div className={styles.Learners}>
            {loading ? (
              <p>Loading learners...</p>
            ) : learners.length > 0 ? (
              learners.map((learner: Learner) => (
                <div
                  key={learner.id}
                  onClick={() => handleLearnerSelect(learner.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <LearnerBox
                    imageUrl='/learnerbig.png'
                    learnerName={learner.name}
                  />
                </div>
              ))
            ) : (
              <p>No learners found.</p>
            )}

            <div
              className={styles.addUser}
              onClick={() => router.push('/child-info')}
            >
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
