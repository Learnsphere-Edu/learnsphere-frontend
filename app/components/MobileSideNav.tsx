import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

interface Props {
  closeNav: () => void
}
export default function ({ closeNav }: Props) {
  return (
    <nav className='md:hidden top-0 left-0 z-[100] fixed bg-white p-8 w-full h-screen transition-all duration-300 ease-in-out mobileNav'>
      <div className='mb-16 logo'>
        {/* chnage this to a logo component later for reusability*/}
        <Image
          alt='logo'
          src='/logo.jpg'
          width={130}
          height={130}
          className='object-contain logo_image'
        />
      </div>
      <span
        className='top-8 right-8 absolute cursor-pointer'
        onClick={closeNav}
      >
        <span>
          <FaTimes size={30} color='#FF7A00' strokeWidth={6} />
        </span>
      </span>
      <ul className='flex flex-col justify-start items-start gap-12 mx-auto w-full max-w-[200px]'>
        <li>
          <a
            className='block hover:bg-[#FF7A00] px-4 py-2 rounded w-full text-[#5B00FF] text-[13px] transition-all duration-1000'
            href='#'
          >
            Modules
          </a>
        </li>
        <li>
          <a
            className='block hover:bg-[#FF7A00] px-4 py-2 rounded w-full text-[#5B00FF] text-[13px] transition-all duration-1000'
            href='#'
          >
            Tasks
          </a>
        </li>
        <li>
          <a
            className='block hover:bg-[#FF7A00] px-4 py-2 rounded w-full text-[#5B00FF] text-[13px] transition-all duration-1000'
            href='#'
          >
            Progress
          </a>
        </li>
        <li>
          <a
            className='block hover:bg-[#FF7A00] px-4 py-2 rounded w-full text-[#5B00FF] text-[13px] transition-all duration-1000'
            href='#'
          >
            Gamification
          </a>
        </li>
        <li>
          <a
            className='block hover:bg-[#FF7A00] px-4 py-2 rounded w-full text-[#5B00FF] text-[13px] transition-all duration-1000'
            href='#'
          >
            Notifications
          </a>
        </li>
      </ul>
    </nav>
  )
}
