import styles from '../learner.module.css'
import Image from 'next/image'

interface Props {
  imageUrl: string
  learnerName: string
}
export default function LearnerBox ({ imageUrl, learnerName }: Props) {
  return (
    <div className={styles.learnerBox}>
      <div className={styles.learnerImageContainer}>
        <Image
          src={imageUrl}
          alt='learner'
          width={100}
          height={100}
          className={`${styles.learnerImage} object-contain`}

        />
      </div>
      <div className={styles.learnerName}>
        <h2>{learnerName}</h2>
      </div>
    </div>
  )
}
