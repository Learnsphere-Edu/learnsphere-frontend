import {
  YorubaAlphabets,
  YorubaColours,
  YorubaCulture,
  YorubaNumbers
} from '@/constants'
import styles from '../modules.module.css'
import ModuleCard from '../../components/ModuleCard'

export default function Igbo () {
  // the different modules available for learning the Yoruba language
  return (
    <div className={styles.moduleWrapper}>
      {/* alphabets */}
      <div className={styles.modules}>
        {YorubaAlphabets.map((module, index) => (
          <div className={styles.module} key={index}>
            <ModuleCard
              alt={module.alt}
              imageUrl={module.imageUrl}
              textHead={module.moduleHead}
            />
          </div>
        ))}
      </div>

      {/* colours */}
      <div className={styles.modules}>
        {YorubaColours.map((module, index) => (
          <div className={styles.module} key={index}>
            <ModuleCard
              alt={module.alt}
              imageUrl={module.imageUrl}
              textHead={module.moduleHead}
            />
          </div>
        ))}
      </div>

      {/* numbers */}
      <div className={styles.modules}>
        {YorubaNumbers.map((module, index) => (
          <div className={styles.module} key={index}>
            <ModuleCard
              alt={module.alt}
              imageUrl={module.imageUrl}
              textHead={module.moduleHead}
            />
          </div>
        ))}
      </div>

      {/* culture */}
      <div className={styles.modules}>
        {YorubaCulture.map((module, index) => (
          <div className={styles.module} key={index}>
            <ModuleCard
              alt={module.alt}
              imageUrl={module.imageUrl}
              textHead={module.moduleHead}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
