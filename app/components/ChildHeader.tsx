import Image from 'next/image'

export default function ChildHeader () {
  return (
    <header className='flex justify-between gap-4 bg-white h-[80px] parentHeader'>
      <Image
        src='/logo.jpg'
        alt='logo'
        width={150}
        height={150}
        className='object-contain'
      />

      {/* search input container */}
      <div className='hidden md:block w-[60%] search-input'>
        <input
          type='text'
          name='search'
          placeholder='Search'
          className='bg-[#F6F6F6] px-[2rem] py-3 rounded-3xl focus:outline-none w-full'
        />
      </div>

      {/* hamburger */}
      <div className='md:hidden hamburger'>
        <Image
          src='/hamburger.png'
          alt='menuicon'
          width={24}
          height={24}
          className='object-contain'
        />
      </div>
    </header>
  )
}
