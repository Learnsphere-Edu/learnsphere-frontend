import {
  IgboAlphabets,
  IgboColours,
  IgboCulture,
  IgboNumbers
} from '@/constants'
import styles from '../modules.module.css'
import ModuleCard from '../../components/ModuleCard'
export default function Igbo () {
  // the different modules available for learning the igbo language
  return (
    <div className={styles.moduleWrapper}>
      {/* alphabets */}
      <div className={styles.modules}>
        {IgboAlphabets.map((module, index) => (
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
        {IgboColours.map((module, index) => (
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
        {IgboNumbers.map((module, index) => (
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
        {IgboCulture.map((module, index) => (
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
