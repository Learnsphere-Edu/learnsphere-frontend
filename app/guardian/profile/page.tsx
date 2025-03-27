// this page is the profile page of the currently logged in guradian, where he can edit and save his/her profile bio

import ProfileSection from '@/app/guardian/components/Profile'
import ParentProfileFormSection from '@/app/guardian/components/ProfileFormSection'

export default function GuardianProfile () {
  
  return (
    <main className='bg-white md:bg-[#F8F4FF] h-[200vh] md:h-[140vh]'>
      {/* search imput component */}

      <section className='profile'>
        <div className='flex justify-center items-center px-8 pt-10'>
          <ProfileSection />
        </div>
      </section>

      <section className='mt-16 form'>
        <div className='px-8 md:px-16'>
          <ParentProfileFormSection />
        </div>
      </section>
    </main>
  )
}
