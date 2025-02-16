import Image from "next/image"
import ResetPasswordForm from "../components/ResetPasswordForm"
import Wazobia from "../components/Wazobia"
export default function ResetPassword() {
    return(
         <div className='relative z-30 bg-white md:bg-[#5B00FF] w-full min-h-screen overflow-hidden'>
              {/* content-wrapper */}
              <h1 className='md:block top-20 z-20 absolute hidden opacity-40 font-potta_one text-[#FFEBD5] text-[260px]'>WAZOBIA</h1>
              <div className='relative z-30 flex justify-center items-center gap-20 mt-[2rem] h-full'>
                {/* reset image */}
                <div className='md:flex items-center hidden w-[500px]'>
                  <Image
                    src='/signupimg.png'
                    alt='children'
                    width={450}
                    height={450}
                    className='object-contain'
                  />
                </div>
                {/* reset form details */}
                <div className="z-[10]">
                  <ResetPasswordForm />
                </div>
              </div>
        
        
              {/* bubble designs */}
              <div className='bubble'>
                <Image
                  src='/white-bubble-design.png'
                  alt='background image'
                  width={200}
                  height={200}
                  className='md:block bottom-[-1rem] z-20 absolute hidden w-full overflow-hidden object-cover'
                />
              </div>
              <div className="flex justify-center items-center md:hidden">
                <Wazobia 
                  styles="text-[#FC9E48] text-[60px] font-bold font-potta_one absolute bottom-0 opacity-10"
                />
              </div>
            </div>
    )
}