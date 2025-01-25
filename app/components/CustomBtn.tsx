import { MouseEventHandler } from 'react'

interface ButtonProps {
  title: string
  styles?: string
  event?: () => void
  type?: 'submit' | 'reset' | 'button'
}

export default function CustomBtn ({ title, styles, event, type }: ButtonProps) {
  return (
    // we have to add the bubble designs later on the buttons
    <>
      <button type={type} className={`${styles}`} onClick={event}>
        {title}
      </button>
    </>
  )
}
