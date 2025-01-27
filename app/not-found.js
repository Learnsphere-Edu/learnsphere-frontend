import Link from 'next/link'
export default function NotFound () {
  return (
    <div className='justify-center flex items-center bg-[#5B00FF] w-full h-screen'>
      <div>
        <h1 className='text-[#FF7A00] text-[30px] font-bold'>Oops, 404</h1>
        <span className='text-white font-bold'>
          The page you are looking for does not exist.
        </span>
        <button className='block bg-[#FF7A00] rounded-lg px-6 py-2 mt-2 font-semibold'>
          <Link href='/'>Go Home</Link>
        </button>
      </div>
    </div>
  )
}
