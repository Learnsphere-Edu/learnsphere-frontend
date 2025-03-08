import CustomBtn from './CustomBtn'

export default function ChildProfileFormSection () {
  return (
    <form className='flex flex-col gap-5' method='post'>
      {/*form  rows */}
      <div className='flex md:flex-row flex-col items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='firstName  ' className='font-bold'>
            First name{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full'
            type='text'
            name='firstName'
            placeholder='Enter First Name'
          />
        </div>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='lastName  ' className='font-bold'>
            Last name{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full'
            type='text'
            name='lastName'
            placeholder='Enter Last Name'
          />
        </div>
      </div>

      {/* row 2 */}
      <div className='flex md:flex-row flex-col items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='gender  ' className='font-bold'>
            Gender{' '}
          </label>
          <select
            name='gender'
            id='gender'
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full appearance-none'
          >
            <option value='nil'>Select Your Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='age  ' className='font-bold'>
            Age <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full'
            type='text'
            name='age'
            placeholder='How old are you?'
          />
        </div>
      </div>

      {/* row 3 */}
      <div className='flex md:flex-row flex-col items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='email  ' className='font-bold'>
            Preferred Language{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full'
            type='text'
            name='language'
            placeholder='Select language'
          />
        </div>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='mobileNumber  ' className='font-bold'>
            Language Level{' '}
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full'
            type='text'
            name='level'
            placeholder='Select your language level'
          />
        </div>
      </div>
      {/* row 4 */}
      <div className='flex flex-col gap-2 w-full'>
        <label htmlFor='residentialAddress  ' className='font-bold'>
          Residential Address
        </label>
        <input
          className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full'
          type='text'
          placeholder='Enter Residential Address'
          name='residentialAddress'
        />
      </div>

      <div className='flex flex-col justify-center items-center'>
        <CustomBtn
          title='Save'
          styles='bg-[#5B00FF] text-white font-bold rounded-lg w-full md:w-[80%] py-3'
          type='submit'
        />
      </div>
    </form>
  )
}
