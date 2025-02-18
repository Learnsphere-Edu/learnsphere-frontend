'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PSideNav () {
  const router = useRouter()
  const [activeLink, setActiveLink] = useState<string>('dashboard')
  const pathName = usePathname()
  console.log(pathName)
  // function to handle active link change
  // const handleActiveLink = (link: string) => {
  //   setActiveLink(link)
  //   router.push(link)
  // }
  // useEffect(()=>{
  //     setActiveLink(pathName)
  // },[pathName])
  return (
    <aside className=''>
      {/* side navigation */}
      {/* upper section */}
      <div className='bg-white h-auto parentSideNavWrapper'>
        {/* nav-items */}
        <Link href='/guardian/dashboard'>
          <div
            className={` parentSideNavBox cursor-pointer ${
              pathName === '/guardian/dashboard' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('dashboard')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/Dashboard.svg'
                alt='icon'
                height={30}
                width={30}
                className='w-[50px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Dashboard</h2>
              <p>Access your child&apos;s dashboard</p>
            </div>
          </div>
        </Link>

        <Link href='/guardian/profile'>
          <div
            className={`parentSideNavBox cursor-pointer ${
              pathName === '/guardian/profile' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('profile')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/Male User.png'
                alt='icon'
                height={50}
                width={50}
                className='w-[30px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Profile</h2>
              <p>Access your account</p>
            </div>
          </div>
        </Link>
        <Link href='/guardian/lessons'>
          <div
            className={`parentSideNavBox cursor-pointer ${
              pathName === '/guardian/lessons' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('lessons')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/Classroom.png'
                alt='icon'
                height={25}
                width={25}
                className='w-[30px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Lessons</h2>
              <p>Access your child&apos;s lessons</p>
            </div>
          </div>
        </Link>

        <Link href='/guardian/controls'>
          <div
            className={`parentSideNavBox cursor-pointer ${
              pathName === '/guardian/controls' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('controls')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/Control Panel.png'
                alt='icon'
                height={25}
                width={25}
                className='w-[30px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Controls</h2>
              <p>Approve or restrict interactions</p>
            </div>
          </div>
        </Link>

        <Link href='/guardian/report'>
          <div
            className={`parentSideNavBox cursor-pointer ${
              pathName === '/guardian/report' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('report')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/Report Card.png'
                alt='icon'
                height={30}
                width={30}
                className='w-[30px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Progress Report</h2>
              <p>Access your child&apos;s progress report</p>
            </div>
          </div>
        </Link>

        <Link href='/guardian/accounts'>
          <div
            className={`parentSideNavBox cursor-pointer ${
              pathName === '/guardian/accounts' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('accounts')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/Add User Male.png'
                alt='icon'
                height={35}
                width={35}
                className='w-[30px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Linked Accounts</h2>
              <p>Add or remove child&apos;s account</p>
            </div>
          </div>
        </Link>

        <Link href='/guardian/inbox'>
          <div
            className={`flex h-[50px] gap-6 px-[2.5rem] py-2 items-center cursor-pointer ${
              pathName === '/guardian/inbox' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('inbox')}
          >
            <div>
              {/* icon  className=''*/}
              <Image
                src='/Mail.png'
                alt='icon'
                height={30}
                width={30}
                className='w-[25px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Inbox</h2>
            </div>
          </div>
        </Link>

        <Link href='/guardian/notification'>
          <div
            className={`flex h-[50px] gap-6 px-[2.5rem] py-2 items-center cursor-pointer ${
              pathName === '/guardian/notification'
                ? 'parentSideNavBoxActive'
                : ''
            }`}
            // onClick={() => handlepathName('notify')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/Notification.png'
                alt='icon'
                height={30}
                width={30}
                className='w-[25px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Notifications</h2>
            </div>
          </div>
        </Link>
      </div>

      {/* lower section */}
      <div className='mt-[150px]'>
        <Link href='/guardian/settings'>
          <div
            className={`flex h-[50px] gap-6 px-[2.5rem] py-2 items-center cursor-pointer ${
              pathName === '/guardian/settings' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('settings')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/Settings.png'
                alt='icon'
                height={30}
                width={30}
                className='w-[25px] h-[50px] object-contain'
              />
            </div>

            {/* content */}
            <div>
              <h2>Settings</h2>
            </div>
          </div>
        </Link>

        <Link href='/log-out'>
          <div
            className={`flex h-[50px] gap-6 px-[2.5rem] py-2 items-center cursor-pointer ${
              pathName === '/log-out' ? 'parentSideNavBoxActive' : ''
            }`}
            // onClick={() => handlepathName('logout')}
          >
            {/* icon */}
            <div className=''>
              <Image
                src='/ic_baseline-logout.png'
                alt='icon'
                height={30}
                width={30}
                className='w-[25px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Log out</h2>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  )
}
