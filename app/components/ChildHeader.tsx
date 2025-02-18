import Image from "next/image"

export default function ChildHeader() {
       return(
              <header className="flex bg-white h-[80px] parentHeader">
                     <Image 
                            src='/logo.jpg'
                            alt="logo"
                            width={200}
                            height={200}
                            className="object-contain"
                     />

                     {/* search input container */}
                     <div className="search-input">
                            <input type="text" name="search" placeholder="Search" className="bg-[#F6F6F6] px-[2rem] py-3 rounded-3xl focus:outline-none w-[600px]"/>
                     </div>
              </header>
       )
}