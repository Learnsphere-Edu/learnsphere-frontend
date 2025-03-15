import Image from "next/image"
import CustomBtn from "./CustomBtn"
import SignUpBtn from "./SignUpBtn"
export default function Header() {
    return (
        <header>
            <div className="logo">
                {/* chnage this to a logo component later for reusability*/}
                <Image 
                    alt="logo"
                    src='/logo.jpg'
                    width={200}
                    height={200}
                    className="object-contain logo_image"
                />
            </div>
            <div className="header-btn">
                <SignUpBtn />
            </div>
        </header>
    )
}