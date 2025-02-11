interface Props {
  image: string
  icon: string
  title: string
  text: string
}

import Image from 'next/image'
export default function StatisticsCard ({ image, icon, title, text }: Props) {
  return (
    <div className='flex flex-col justify-center items-center gap-2 bg-white p-2 rounded-xl w-[170px] h-[170px]'>
      <div className=''>
        <Image
          src={image}
          alt='icon'
          width={50}
          height={50}
          className='w-[60px] h-[60px] object-contain'
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='flex justify-center items-center gap-2'>
            <Image
              src={icon}
              alt='smaller icon'
              width={30}
              height={30}
              className='w-[30px] h-[30px] object-contain'
            />
          <span className='font-bold text-[14px]'>{title}</span>
        </div>
        <div>
          <p className='text-[14px] motivate'>{text}</p>
        </div>
      </div>
    </div>
  )
}
