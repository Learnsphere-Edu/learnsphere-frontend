import styles from '../home.module.css'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'

export default function HomeHeader() {
  return (
    <div>
       <div className={styles.header}>
        <div className={styles.homeWelcome}>
          <div className={styles.homeWelcomeImage}>
          <Image
            src='/learner.png'
            alt='learner'
            width={40}
            height={40}
            className='object-contain'
          />
          </div>
          <div className={styles.homeWelcomeText}>
              <h2>Good morning, Amara</h2>
              <h3>What are you learning today</h3>
          </div>
        </div>
        <div className={styles.hamburger}>
              <FaBars size={21} color='black' />
        </div>
      </div>
    </div>
  );
}