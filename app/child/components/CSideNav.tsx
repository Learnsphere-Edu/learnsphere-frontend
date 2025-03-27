'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function CSideNav () {
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
      <div className='bg-white h-auto childSideNavWrapper'>
        {/* nav-items */}
        <Link href='/child/dashboard'>
          <div
            className={` childSideNavBox cursor-pointer ${
              pathName === '/child/dashboard' ? 'childSideNavBoxActive' : ''
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
                className='w-[30px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Dashboard</h2>
            </div>
          </div>
        </Link>

        <Link href='/child/profile'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/profile' ? 'childSideNavBoxActive' : ''
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
            </div>
          </div>
        </Link>
        <Link href='/child/lessons'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/lessons' ? 'childSideNavBoxActive' : ''
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
              <h2>Modules</h2>
            </div>
          </div>
        </Link>

        <Link href='/child/controls'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/controls' ? 'childSideNavBoxActive' : ''
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
              <h2>Tasks</h2>
            </div>
          </div>
        </Link>

        <Link href='/child/report'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/report' ? 'childSideNavBoxActive' : ''
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
              <h2>Progress</h2>
            </div>
          </div>
        </Link>

        <Link href='/child/accounts'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/accounts' ? 'childSideNavBoxActive' : ''
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
              <h2>Peer Group</h2>
            </div>
          </div>
        </Link>

        <Link href='/child/inbox'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/inbox' ? 'childSideNavBoxActive' : ''
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
                className='w-[30px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Gamification</h2>
            </div>
          </div>
        </Link>

        <Link href='/child/notification'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/notification'
                ? 'childSideNavBoxActive'
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
                className='w-[50px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Recommendations</h2>
            </div>
          </div>
        </Link>
        <Link href='/child/notification'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/notification'
                ? 'childSideNavBoxActive'
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
                className='w-[50px] h-[50px] object-contain'
              />
            </div>
            {/* content */}
            <div>
              <h2>Verified linked parent&apos;s account</h2>
            </div>
          </div>
        </Link>
        <Link href='/child/notification'>
          <div
            className={`childSideNavBox cursor-pointer ${
              pathName === '/child/notification'
                ? 'childSideNavBoxActive'
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
                className='w-[30px] h-[50px] object-contain'
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
        <Link href='/child/settings'>
          <div
            className={`flex h-[50px] gap-6 px-[2.5rem] py-2 items-center cursor-pointer ${
              pathName === '/child/settings' ? 'childSideNavBoxActive' : ''
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
              pathName === '/log-out' ? 'childSideNavBoxActive' : ''
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
