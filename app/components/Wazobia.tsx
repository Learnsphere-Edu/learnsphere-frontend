interface Props{
    styles: string
}
export default function Wazobia({styles}:Props) {
    return(
        <h1 className={`${styles}`}>
            WAZOBIA
            
        </h1>
    )
}

