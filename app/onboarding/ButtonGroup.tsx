import CustomBtn from "../globalcomponents/CustomBtn";

export default function ButtonGrp() {
    return(
        <div className="items-center gap-2 grid grid-cols-3 md:grid-cols-6 m-0 mt-[1rem] p-0 grp">
            <CustomBtn 
                title="Learn"
                styles="bg-[#7C33FF] font-poppins  text-white font-bold rounded-r-full px-6 py-2"
            />
            <CustomBtn 
                title="Practice"
                styles="bg-[#FC9E48] font-poppins  text-white font-bold rounded-full px-6 py-2"
            />
            <CustomBtn 
                title="Grow"
                styles="bg-[#7C33FF] font-poppins  text-white font-bold rounded-full px-6 py-2"
            />
            <CustomBtn 
                title="Improve"
                styles="bg-[#FC9E48] font-poppins  text-white font-bold rounded-full px-6 py-2"
            />
            <CustomBtn 
                title="Learn"
                styles="bg-[#7C33FF] font-poppins  text-white font-bold rounded-full px-6 py-2"
            />
            <CustomBtn 
                title="Practice"
                styles="bg-[#FC9E48] font-poppins  text-white font-bold rounded-l-full px-6 py-2"
            />
        </div>
    )
}