import PostionalImages from '@/app/guardian/components/PositionalImages'
import styles from '../dashboard.module.css'
export default function Quests () {
  return (
      <div className={`${styles.questWrapper}`}>
        <h2>Embark on a Language Adventure</h2>
        <p>
          "Learn new words and phrases as you journey through fun, interactive
          stories!"{' '}
        </p>

        <div className={`${styles.questItr}`}>
          <PostionalImages />
        </div>
      </div>
  )
}
