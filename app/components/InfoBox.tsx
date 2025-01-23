export interface InfoProps {
  infoTitle: string
  infoText: string
  infoBg: string
  textColor: string
  titleColor: string
}


// this component is to serve as the reusable infoBox with the curved rectangle aligned to the left
export default function InfoBox ({
  infoTitle,
  infoText,
  infoBg,
  textColor,
  titleColor
}: InfoProps) {
  return (
    <div className='relative flex flex-col gap-0 w-[350px] h-[250px] info-box-wrapper'>
      <div className={`${textColor} ${infoBg} z-20 flex flex-col gap-2 bg-[#5B00FF] rounded-[2rem] w-[350px] h-[180px] font-bold`}>
        <div className={`${titleColor} flex items-center justify-end z-[25] bg-white mx-auto mt-5 rounded-[0.5rem] w-[80%] h-[50px] info-title text-end pr-4 pl-2`}>
            {infoTitle}
        </div>
        <span className="text-right px-8 text-[13px]">{infoText}</span>
      </div>
      <div className={`z-15 w-[100px] h-[70px] curve-box ${infoBg}`}></div>
    </div>
  )
}
