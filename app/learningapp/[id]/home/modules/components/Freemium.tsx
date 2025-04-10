import { CustomBtn } from '@/app/globalcomponents'
import styles from '../modules.module.css'

export default function FreemiumAccount () {
  return (
    <div className={styles.freemiumWrapper}>
      <h2>This account is freemium</h2>
      <CustomBtn
        title='Upgrade'
        styles='bg-[#FF7A00] rounded-lg px-4 py-1.5 text-white font-bold text-[14px]'
      />
    </div>
  )
}
