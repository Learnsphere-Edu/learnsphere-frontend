import type { Metadata } from 'next'
import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import ParentHeader from './components/ParentHeader'
import PSideNav from './components/ParentSideNav'
import FooterNavigationBar from '../globalcomponents/FooterNav'
import SearchBox from '../globalcomponents/SearchBox'

export const metadata: Metadata = {
  title: 'Manage your child activities with Learnsphere',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className='relative flex flex-col bg-white w-full h-auto min-h-screen'>
        {/* Parent header */}
        <div className='top-0 z-[50] sticky w-full'>
          <ParentHeader />
        </div>

        {/* Page-specific content */}
        <div className='flex flex-1 overflow-y-auto parent'>
          {/* side nav */}
          <div className='bg-white w-[23%] hide_on_sm'>
            <PSideNav />
          </div>
          {/* content */}
          <div className='mx-0 md:mx-[20px] w-full md:w-[77%] h-auto full_on_sm'>
            <div className='md:hidden flex flex-col justify-center items-center my-4 px-6'>
              <SearchBox />
            </div>
            {children}
          </div>
        </div>

        <div className='md:hidden bottom-0 left-0 z-50 fixed flex w-full footer_nav_bar'>
          <FooterNavigationBar 
            dashboardRouteTo='/guardian/dashboard'
            homeRouteTo='/guardian/home'
            inboxRouteTo='/guardian/inbox'
            profileRouteTo='/guardian/profile'
          />
        </div>
      </div>
    </>
  )
}
