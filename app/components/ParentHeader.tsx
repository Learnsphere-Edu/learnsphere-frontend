import Image from 'next/image'

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
      <div className='hidden md:block w-[60%] search-input'>
        <input
          type='text'
          name='search'
          placeholder='Search'
          className='bg-[#F6F6F6] px-[2rem] py-3 rounded-3xl focus:outline-none w-full'
        />
      </div>

      {/* hamburger */}
      <div className="md:hidden hamburger">
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
// https://8fnt5dgr-3000.uks1.devtunnels.ms/