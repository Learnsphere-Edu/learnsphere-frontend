import Image from 'next/image'
import CustomBtn from './CustomBtn'

export default function ChildProfileSection () {
  return (
    <div className='flex items-center gap-4'>
      <div>
        {/* this image will have a defualt image at first, but it will be dynamic, specific to what a user chooses. the user will be allowed to select from their computer */}
        <Image
          src='/profile img.png'
          alt='Profile Image'
          width={120}
          height={120}
          className='object-contain'
        />
      </div>
      <div className='flex gap-4'>
        {/* buttons */}
        <CustomBtn
          title='Edit Account'
          disabled={false}
          styles='bg-[#5B00FF] text-white rounded-lg px-[30px] py-3 font-[500]'
          type='button'
        />
        <CustomBtn
          title='Delete Account'
          disabled={false}
          styles='bg-[#ffffff] text-black rounded-lg px-[30px] py-3 font-[500]'
          type='button'
        />
      </div>
    </div>
  )
}