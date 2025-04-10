import styles from '../home.module.css'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
interface Props {
  imageUrl: string
  textHead: string
  alt: string
}
export default function ModuleCard ({ imageUrl, textHead, alt }: Props) {
  return (
    <div className='relative contentCard'>
      <div className={styles.contentImage}>
        <Image
          src={imageUrl}
          alt={alt}
          width={400}
          height={400}
          className='object-contain'
        />
      </div>
      <div className={styles.contentText}>
        <h3 className='font-semibold text-[14px]'>{textHead}</h3>
      </div>
      <div className='bottom-10 left-4 absolute flex justify-between items-center gap-4 bg-[#5B00FF] px-3 py-2 rounded-full'>
        <span className='font-bold text-[12px] text-white'>Start Learning</span>
        <BsArrowRight size={20} color='white' />
      </div>
    </div>
  )
}
