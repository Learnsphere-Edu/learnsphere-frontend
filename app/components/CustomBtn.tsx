import { MouseEventHandler } from "react"

interface ButtonProps{
    title: string
    styles?: string
    event?: () => void
}

export default function CustomBtn({title,styles,event}:ButtonProps){
    return(
        // we have to add the bubble designs later on the buttons
        <>
        <button
            className={`${styles}`}
            onClick={event}
        >
            {title}
        </button>
        </>
        
    )
}