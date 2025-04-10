import styles from './home.module.css'
import HomeHeader from './components/Header'
import SearchBox from '@/app/globalcomponents/SearchBox'
import { LearningContent } from '@/constants'
import ContentCard from './components/ContentCard'

export default function LearningHome () {
  // the id of the selected child will be used to control the display of the content from here onward
  return (
    <div className={styles.home}>
      <div>
        <HomeHeader />
      </div>

      {/* search box */}
      <div className={styles.searchBox}>
        <SearchBox placeholder='for lessons' />
      </div>

      {/* learning content */}
      <div className={styles.learningContent}>
        {LearningContent.map(content => (
          <ContentCard
            key={content.textHead}
            alt={content.alt}
            imageUrl={content.imageUrl}
            textHead={content.textHead}
            routeTo={content.routeTo}
          />
        ))}
      </div>
    </div>
  )
}
