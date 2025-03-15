'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface FooterProps {
  homeRouteTo: string
  dashboardRouteTo: string
  inboxRouteTo: string
  profileRouteTo: string
}
export default function FooterNavigationBar ({
  homeRouteTo,
  dashboardRouteTo,
  inboxRouteTo,
  profileRouteTo
}: FooterProps) {
  const pathName = usePathname()
  console.log(pathName)

  return (
    <footer className='w-full'>
      <hr />
      {/* nav wrapper */}
      <div className='flex justify-evenly items-center bg-[#ffffff] w-full h-[80px]'>
        <Link href={homeRouteTo}>
          <div className='flex flex-col items-center'>
            {/* icon */}
            <Image
              src='/Home.png'
              alt='icon'
              width={30}
              height={30}
              className={`object-contain w-[20px] md:w-[25px] ${pathName === homeRouteTo ? 'imageInvert' : ''}`}
            />
            <h2 className={`${pathName === homeRouteTo ? 'activeNav' : ''}`}>Home</h2>
          </div>
        </Link>
        <Link href={dashboardRouteTo}>
          <div className='flex flex-col items-center'>
            {/* icon */}
            <Image
              src='/Dashboard.svg'
              alt='icon'
              width={30}
              height={30}
              className={`object-contain w-[20px] md:w-[25px] ${pathName === dashboardRouteTo ? 'invertImage' : ''}`}
            />
            <h2 className={`${pathName === dashboardRouteTo ? 'activeNav' : ''}`}>Dashboard</h2>
          </div>
        </Link>
        <Link href={inboxRouteTo}>
          <div className='flex flex-col items-center'>
            {/* icon */}
            <Image
              src='/Mail.png'
              alt='icon'
              width={30}
              height={30}
              className={`object-contain w-[20px] md:w-[25px] ${pathName === inboxRouteTo ? 'invertImage' : ''}`}
            />
            <h2 className={`${pathName === inboxRouteTo ? 'activeNav' : ''}`}>Inbox</h2>
          </div>
        </Link>
        <Link href={profileRouteTo}>
          <div className='flex flex-col items-center'>
            {/* icon */}
            <Image
              src='/Male User.png'
              alt='icon'
              width={30}
              height={30}
              className={` object-contain w-[20px] md:w-[25px] ${pathName === profileRouteTo ? 'invertImage' : ''}`}
            />
            <h2 className={`${pathName === profileRouteTo ? 'activeNav' : ''}`}>Profile</h2>
          </div>
        </Link>
      </div>
    </footer>
  )
}
