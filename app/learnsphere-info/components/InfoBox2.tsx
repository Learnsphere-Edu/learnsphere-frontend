import type { InfoProps } from './InfoBox'

// this component is to serve as the reusable infoBox with the curved rectangle aligned to the left
export default function InfoBox2 ({
  infoBg,
  infoText,
  infoTitle,
  textColor,
  titleColor
}: InfoProps) {
    return (
        <div className='relative flex flex-col gap-0 w-[350px] h-[250px] info-box-wrapper'>
      <div className={`${textColor} ${infoBg} z-20 flex flex-col gap-2 bg-[#5B00FF] rounded-[2rem] w-[350px] h-[180px] font-bold`}>
        <div className={`${titleColor} flex items-center z-[25] bg-white mx-auto mt-5 rounded-[0.5rem] w-[80%] h-[50px] info-title text-left pr-4 pl-4`}>
            {infoTitle}
        </div>
        <span className="px-8 text-[13px] text-left">{infoText}</span>
      </div>
      <div className={`curve-box-left z-15 bg-[#5B00FF] w-[100px] h-[70px] ${infoBg}`}></div>
    </div>
    )
}