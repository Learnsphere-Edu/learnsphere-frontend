'use client'
import styles from '../home.module.css'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

interface Props {
  imageUrl: string
  textHead: string
  alt: string
  routeTo: string
}
export default function ContentCard ({ imageUrl, textHead, alt, routeTo }: Props) {
 const router = useRouter()
  return (
    <div className='contentCard'>
      <div className={styles.contentImage}>
        <Image
          src={imageUrl}
          alt={alt}
          width={400}
          height={400}
          className='object-contain'
          onClick={() => router.push(routeTo)}
        />
      </div>
      <div className={styles.contentText}>
        <div className={styles.contentTextHead}>
          <h3 onClick={() => router.push(routeTo)}>{textHead}</h3>
        </div>
        <div className={styles.contentTextBtn}>
          <BsArrowRight
            size={20}
            color='black'
            style={{ fontWeight: 'bold' }}
            onClick={() => router.push(routeTo)}
          />
        </div>
      </div>
    </div>
  )
}
