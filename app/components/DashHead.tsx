import Image from 'next/image'
export default function DashboardHeader () {
  return (
    <header className='flex items-center bg-[#5B00FF] w-full h-[10vh]'>
      <div className='flex items-center gap-4 avatar_name_notfn'>

        {/* dynamic avatar */}
        <div className='avatar'>
          <Image
            src='/userAvatar.png'
            alt='avatar'
            width={50}
            height={50}
            className='rounded-full object-contain'
          />
        </div>

        <div className='flex items-center gap-8 name_notfn'>
            <h2 className='font-bold text-white'>Hello, <span>Ebuka</span></h2>

            <div className='flex items-center gap-2'>
                <Image 
                    src='/notfnicon.png'
                    alt='notification'
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <span className='md:block hidden font-bold text-[#F8F4FF]'>"A new quest is waiting"</span>
            </div>
        </div>
      </div>

      <div className='flex gap-4 streaks'>
        <div className='flex items-center gap-3 fire-streak'>
            <Image 
                src='/fire.png'
                alt='fire'
                width={30}
                height={30}
                className='object-contain'
            />
            {/* dynamic number */}
            <span className='font-normal text-lg text-white'>2</span>
        </div>
        <div className='flex items-center gap-3 life-count'>
        <Image 
                src='/heart.png'
                alt='fire'
                width={30}
                height={30}
                className='object-contain'
            />
            {/* dynamic number */}
            <span className='font-normal text-lg text-white'>5</span>
        </div>
        <div className='flex items-center gap-3 star-streak'>
        <Image 
                src='/blue gradient star.png'
                alt='fire'
                width={30}
                height={30}
                className='object-contain'
            />
            {/* dynamic number */}
            <span className='font-normal text-lg text-white'>225</span>
        </div>
      </div>
    </header>
  )
}
