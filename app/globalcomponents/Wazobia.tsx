interface Props{
    styles: string
}
export default function Wazobia({styles}:Props) {
    return(
        <h1 className={`text-[60px] sm:text-[80px] ${styles}`}>
            WAZOBIA
            
        </h1>
    )
}

