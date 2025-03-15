
interface ProgressProps {
  progress: number
}
const ProgressBar = ({ progress }: ProgressProps) => {
  return (
    <div className='bg-gray-300 rounded-full w-full h-[30px]'>
      {/* inner bar */}
      <div
        style={{ width: `${progress}%` }}
        className={`bg-[#5B00FF] h-[30px] rounded-full z-10`}
      ></div>
    </div>
  )
}

export default ProgressBar
