import Image from 'next/image'

export default function PostionalImages () {
  return (
    <>
      {/* beauty images positioned absolute  */}
      <Image
        src='/1.png'
        alt='flower image'
        width={200}
        height={180}
        className='bottom-0 left-0 z-10 absolute object-contain'
      />
      <Image
        src='/line1.png'
        alt='line coloured'
        width={180}
        height={50}
        className='bottom-8 left-[9.5rem] z-[8] absolute object-contain'
      />
      <Image
        src='/2.png'
        alt='flower image'
        width={110}
        height={90}
        className='bottom-0 left-[20rem] z-10 absolute object-contain'
      />
      <Image
        src='/line2.png'
        alt='line coloured'
        width={40}
        height={50}
        className='bottom-11 left-[24.5rem] z-[8] absolute object-contain'
      />
      <Image
        src='/3.png'
        alt='flower image'
        width={180}
        height={90}
        className='bottom-[9rem] left-[25.4rem] z-10 absolute object-contain'
      />
      <Image
        src='/line3.png'
        alt='line coloured'
        width={100}
        height={50}
        className='bottom-[1.3rem] left-[36rem] z-[8] absolute object-contain'
      />
      <Image
        src='/4.png'
        alt='flower image'
        width={180}
        height={90}
        className='bottom-[2.5rem] left-[40.7rem] z-10 absolute object-contain'
      />
      <Image
        src='/line4.png'
        alt='line coloured'
        width={50}
        height={50}
        className='bottom-[2.7rem] left-[50.2rem] z-[8] absolute object-contain'
      />
      <Image
        src='/5.png'
        alt='flower image'
        width={180}
        height={90}
        className='top-[9rem] left-[51.3rem] z-10 absolute object-contain'
      />
      <Image
        src='/line5.png'
        alt='line coloured'
        width={120}
        height={50}
        className='top-[15.4rem] left-[62.4rem] z-[8] absolute object-contain'
      />
      <Image
        src='/new tree.png'
        alt='flower image'
        width={180}
        height={90}
        className='top-[0] right-0 z-10 absolute object-contain'
      />
    </>
  )
}
