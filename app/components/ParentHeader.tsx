import Image from 'next/image'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function ParentHeader () {
  return (
    <header className='flex justify-between items-center gap-4 bg-white w-full h-[80px] parentHeader'>
      <Image
        src='/logo.jpg'
        alt='logo'
        width={150}
        height={150}
        className='w-[150px] md:w-[200px] object-contain'
      />

      {/* search input container */}
      <div className='hidden md:block relative w-[60%] search-input'>
        <input
          type='text'
          name='search'
          placeholder='Search'
          className='bg-[#F6F6F6] px-[2.5rem] py-3 rounded-3xl focus:outline-none w-full'
        />

        <div className='hidden md:block top-4 left-4 absolute'>
          {' '}
          <span className='text-red-700'>
            <FaMagnifyingGlass />
          </span>
        </div>
      </div>

      {/* hamburger */}
      <div className='md:hidden hamburger'>
        <Image
          src='/hamburger.png'
          alt='menuicon'
          width={30}
          height={30}
          className='object-contain'
        />
      </div>
    </header>
  )
}
