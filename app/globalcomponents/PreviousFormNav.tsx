'use client'
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Props {
  routeTo: string;
}

export default function PrevFormNav({ routeTo }: Props) {
  const router = useRouter();

  const handlePrevForm = () => {
    if (routeTo) router.push(routeTo);
  };

  return (
    <div 
      onClick={handlePrevForm} 
      className="top-2 md:top-6 left-6 md:left-16 absolute cursor-pointer"
      role="button"
      aria-label="Go to previous form"
    >
      <FaChevronLeft  className="z-[100] font-bold text-[20px] text-black md:text-[30px] md:text-white cursor-pointer" />
    </div>
  );
}
