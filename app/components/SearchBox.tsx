import Image from "next/image"
export default function SearchBox () {
  return (
    <div  className="flex justify-center gap-4 tems-center w-full">
      <input
        type='text'
        name='search'
        placeholder='Search'
        className='bg-[#F6F6F6] px-[2rem] py-3 rounded-2xl focus:outline-none w-[80%]'
      />

      <Image 
       src='/Notification.png'
       alt="notification"
       width={30}
       height={30}
       className="object-contain"
      />
    </div>
  )
}
