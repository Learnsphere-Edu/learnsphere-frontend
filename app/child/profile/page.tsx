// this page is the profile page of the currently logged in guradian, where he can edit and save his/her profile bio

import ChildProfileFormSection from '@/app/components/ChildProfileForm'
import ChildProfileSection from '@/app/components/ChildProfileSection'


export default function ChildProfile () {
  return (
    <main className='bg-white md:bg-[#F8F4FF] h-[200vh] md:h-[125vh]'>
      <section className='profile'>
        <div className='flex justify-center items-center px-8 pt-10'>
          <ChildProfileSection />
        </div>
      </section>

      <section className='mt-16 form'>
        <div className='px-8 md:px-16'>
          <ChildProfileFormSection />
        </div>
      </section>
    </main>
  )
}
