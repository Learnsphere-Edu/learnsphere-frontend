'use client'
import Image from 'next/image'
import MobileSideNav from './MobileSideNav'
import { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function ChildHeader () {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const closeSideNav = () => setShowMenu(false)
  const openSideNav = () => setShowMenu(true)
  return (
    <>
      <div className='z-[1000]'>
        {showMenu && <MobileSideNav closeNav={closeSideNav} />}
      </div>
      <header className='flex justify-between gap-4 bg-white h-[80px] parentHeader'>
        <Image
          src='/logo.jpg'
          alt='logo'
          width={150}
          height={150}
          className='object-contain'
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
        <div className='md:hidden hamburger' onClick={openSideNav}>
          <Image
            src='/hamburger.png'
            alt='menuicon'
            width={24}
            height={24}
            className='object-contain'
          />
        </div>
      </header>
    </>
  )
}
