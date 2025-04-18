import { FaMagnifyingGlass } from 'react-icons/fa6';
import Image from 'next/image';

interface Props{
  placeholder?: string
}
export default function SearchBox({placeholder}:Props) {
  return (
    <div className="relative flex justify-center items-center gap-4 w-full">
      <div className="relative w-[80%]">
        <FaMagnifyingGlass className="top-1/2 left-4 absolute text-red-700 -translate-y-1/2" />
        <input
          type="text"
          name="search"
          placeholder={`Search ${placeholder}`}
          className="bg-[#F6F6F6] px-12 md:px-[3.5rem] py-3 rounded-full focus:outline-none w-full"
        />
      </div>

      <Image
        src="/Notification.png"
        alt="notification"
        width={30}
        height={30}
        className="object-contain"
      />
    </div>
  );
}
