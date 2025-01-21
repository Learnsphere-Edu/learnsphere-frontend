'use client'
import { useRouter } from "next/navigation";
import CustomBtn from "./CustomBtn";


export default function SignUpBtn () {
    const router = useRouter()
    const redirectTSignUp = () => {
        router.push('/auth/signup')
    }
  return (
    <CustomBtn
      title='Sign up'
      styles='px-6 py-2 text-white text-[13px] bg-[#5B00FF] rounded-md mt-3 font-poppins z-[200]'
      event={redirectTSignUp}
    />
  )
}
