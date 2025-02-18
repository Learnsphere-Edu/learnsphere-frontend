import CustomBtn from './CustomBtn'

export default function ParentProfileFormSection () {
  return (
    <form className='flex flex-col gap-5' method='post'>
      {/*form  rows */}
      <div className='flex items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2'>
          <label htmlFor='firstName  ' className='font-bold'>
            First name{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 rounded-lg focus:outline-none w-full'
            type='text'
            name='firstName'
            placeholder='Enter First Name'
          />
        </div>
        <div className='flex flex-col flex-1 gap-2'>
          <label htmlFor='lastName  ' className='font-bold'>
            Last name{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 rounded-lg focus:outline-none w-full'
            type='text'
            name='lastName'
            placeholder='Enter Last Name'
          />
        </div>
      </div>
      {/* row 2 */}
      <div className='flex items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2'>
          <label htmlFor='email  ' className='font-bold'>
            Email <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 rounded-lg focus:outline-none w-full'
            type='email'
            name='email'
            placeholder='Enter Email Address'
          />
        </div>
        <div className='flex flex-col flex-1 gap-2'>
          <label htmlFor='mobileNumber  ' className='font-bold'>
            Mobile Number{' '}
          </label>
          <input
            className='px-[25px] py-3 rounded-lg focus:outline-none w-full'
            type='text'
            name='mobileNumber'
          />
        </div>
      </div>
      {/* row 3 */}
      <div className='flex items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2'>
          <label htmlFor='gender  ' className='font-bold'>
            Gender{' '}
          </label>
          <select
            name='gender'
            id='gender'
            className='px-[25px] py-3 rounded-lg focus:outline-none w-full'
          >
            <option value='nil'>Select Your Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div className='flex flex-col flex-1 gap-2'>
          <label htmlFor='linkAccount  ' className='font-bold'>
            Link Account{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <select
            name='gender'
            id='gender'
            className='px-[25px] py-3 rounded-lg focus:outline-none w-full'
          >
            <option value='nil'>Select Account Type</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
      </div>
      {/* row 4 */}
      <div className='flex flex-col gap-2 w-full'>
        <label htmlFor='residentialAddress  ' className='font-bold'>
          Residential Address
        </label>
        <input
          className='px-[25px] py-3 rounded-lg focus:outline-none w-full'
          type='text'
          placeholder='Enter Residential Address'
          name='residentialAddress'
        />
      </div>

      <CustomBtn
        title='Save'
        styles='bg-[#5B00FF] text-white font-bold rounded-lg w-[100px] py-3'
        type='submit'
      />
    </form>
  )
}
