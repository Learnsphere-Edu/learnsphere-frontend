import Image from 'next/image'
import CustomBtn from './CustomBtn'
export default function ProfileSection () {
  return (
    <div className='flex md:flex-row flex-col items-center gap-4'>
      <div>
        {/* this image will have a defualt image at first, but it will be dynamic, specific to what a user chooses. the user will be allowed to select from their computer */}
        <Image
          src='/profile img.png'
          alt='Profile Image'
          width={120}
          height={120}
          className='w-[100px] sm:w-[110px] md:w-[130px] object-contain'
        />
      </div>
      <div className='flex gap-4'>
        {/* buttons */}
        <CustomBtn
          title='Edit Account'
          disabled={false}
          styles='bg-[#5B00FF] text-white rounded-lg px-[8px] sm:px-[15px] md:px-[30px] py-3 font-[500]'
          type='button'
        />
        <CustomBtn
          title='Delete Account'
          disabled={false}
          styles='bg-[#ffffff] text-black rounded-lg px-[8px] md:px-[30px]  py-3 font-[500] border border-[#5B00FF] md:border-0'
          type='button'
        />
      </div>
    </div>
  )
}