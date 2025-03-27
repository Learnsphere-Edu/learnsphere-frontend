
interface ButtonProps {
  title: string
  styles?: string
  event?: () => void
  type?: 'submit' | 'reset' | 'button'
  disabled? : boolean
}

export default function CustomBtn ({ title, styles, event, type, disabled }: ButtonProps) {
  return (
    // we have to add the bubble designs later on the buttons
    <>
      <button type={type} className={`${styles}`} onClick={event} disabled={disabled}>
        {title}
      </button>
    </>
  )
}
