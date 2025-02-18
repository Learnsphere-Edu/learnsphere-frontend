// this page is the profile page of the currently logged in guradian, where he can edit and save his/her profile bio

import ProfileSection from '@/app/components/Profile'
import ParentProfileFormSection from '@/app/components/ProfileFormSection'

export default function GuardianProfile () {
  return (
    <main className='bg-[#F8F4FF] h-[125vh]'>
      <section className='profile'>
        <div className='flex justify-center items-center px-8 pt-10'>
          <ProfileSection />
        </div>
      </section>

      <section className='mt-16 form'>
        <div className='px-16'>
          <ParentProfileFormSection />
        </div>
      </section>
    </main>
  )
}
