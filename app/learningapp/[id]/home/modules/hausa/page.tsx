import {
  HausaAlphabets,
  HausaColours,
  HausaCulture,
  HausaNumbers
} from '@/constants'
import styles from '../modules.module.css'
import ModuleCard from '../../components/ModuleCard'
export default function Igbo () {
  // the different modules available for learning the Hausa language
  return (
    <div className={styles.moduleWrapper}>
      {/* alphabets */}
      <div className={styles.modules}>
        {HausaAlphabets.map((module, index) => (
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
        {HausaColours.map((module, index) => (
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
        {HausaNumbers.map((module, index) => (
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
        {HausaCulture.map((module, index) => (
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
