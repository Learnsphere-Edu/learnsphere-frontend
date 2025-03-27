'use client'

import { useEffect, useState } from 'react'
import CustomBtn from '../../globalcomponents/CustomBtn'
import Wazobia from '../../globalcomponents/Wazobia'
import { showInfoToast } from '@/utils/toastUtils'

export default function ParentProfileFormSection () {
  const [isRequiredData, setIsRequiredData] = useState<boolean>(false)
  const [parentProfileFormData, setParentProfileFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mob_no: '',
    gender: '',
    linkAcc: '',
    address: '',
    relationship_with_child: ''
  })

  useEffect(() => {
    const checkRequiredData = () => {
      if (
        (parentProfileFormData.firstName,
        parentProfileFormData.lastName,
        parentProfileFormData.relationship_with_child,
        parentProfileFormData.gender,
        parentProfileFormData.linkAcc === '')
      ) {
        setIsRequiredData(false)
      } else {
        setIsRequiredData(true)
      }
    }
    checkRequiredData()
  }, [parentProfileFormData])

  // function to handle normal form Input element change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setParentProfileFormData(prev => ({ ...prev, [name]: value }))
  }
  // function to handle select element change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setParentProfileFormData(prev => ({ ...prev, [name]: value }))
  }

  // function to  handle submission and dislay of profile.
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/profile/', {
        method: 'POST',
        body: JSON.stringify(parentProfileFormData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        const data = await response.json()
        console.log(data?.error)
        showInfoToast('Issue dey')
      }

      // for successful response
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('An unknown error occurred', error)
    }
  }
  // console.log(parentProfileFormData);
  // showInfoToast(`Your Email is: ${parentProfileFormData.email}`)
  return (
    <form
      className='relative flex flex-col gap-5 profileform'
      method='post'
      onSubmit={handleSubmit}
    >
      {/* absolute placement wazobia  */}
      <div className='flex flex-col justify-center items-center'>
        <Wazobia styles='text-[#FC9E481A] font-bold px-2 font-potta_one text-[70px] absolute top-[58vh] opacity-[75] md:hidden block z-10' />
      </div>
      {/*form  rows */}
      <div className='flex md:flex-row flex-col items-start md:items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='firstName  ' className='font-bold'>
            First name{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] md:border-0 rounded-lg focus:outline-none w-full'
            type='text'
            name='firstName'
            placeholder='Enter First Name'
            value={parentProfileFormData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='lastName  ' className='font-bold'>
            Last name{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] md:border-0 rounded-lg focus:outline-none w-full'
            type='text'
            name='lastName'
            placeholder='Enter Last Name'
            value={parentProfileFormData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* row 2 */}
      <div className='flex md:flex-row flex-col items-start md:items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='email  ' className='font-bold'>
            Email <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] md:border-0 rounded-lg focus:outline-none w-full'
            type='email'
            name='email'
            placeholder='Enter Email Address'
            value={parentProfileFormData.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='mobileNumber  ' className='font-bold'>
            Mobile Number{' '}
          </label>
          <input
            className='z-[20] px-[25px] py-3 border border-[#5B00FF] md:border-0 rounded-lg focus:outline-none w-full'
            type='text'
            name='mob_no'
            value={parentProfileFormData.mob_no}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* row 3 */}
      <div className='flex md:flex-row flex-col items-start md:items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='gender  ' className='font-bold'>
            Gender{' '}
          </label>
          <select
            name='gender'
            id='gender'
            className='z-[20] px-[25px] py-3 border border-[#5B00FF] md:border-0 rounded-lg focus:outline-none w-full text-[#CCCCCC] text-[12px] md:text-[13px] appearance-none cursor-pointer'
            value={parentProfileFormData.gender}
            onChange={handleSelectChange}
          >
            <option value='nil'>Select Your Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='linkAccount  ' className='font-bold'>
            Link Account{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <select
            name='linkAcc'
            id='linkAcc'
            className='px-[25px] py-3 border border-[#5B00FF] md:border-0 rounded-lg focus:outline-none w-full text-[#CCCCCC] text-[12px] md:text-[13px] appearance-none cursor-pointer'
            value={parentProfileFormData.linkAcc}
            onChange={handleSelectChange}
          >
            <option value='nil'>Select Account Type</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
      </div>
      {/* row 4 */}
      <div className='flex flex-col gap-2 w-full'>
        <label
          htmlFor='residentialAddress  '
          className='font-bold text-[17px] md:text-[19px]'
        >
          Residential Address
        </label>
        <input
          className='px-[25px] py-3 border border-[#5B00FF] md:border-0 rounded-lg focus:outline-none w-full'
          type='text'
          placeholder='Enter Residential Address'
          name='address'
          value={parentProfileFormData.address}
          onChange={handleChange}
        />
      </div>
      {/* row 5 */}
      <div className='flex flex-col gap-2 w-full'>
        <label
          htmlFor='relationship  '
          className='font-bold text-[17px] md:text-[19px]'
        >
          Relationship with app user
        </label>
        <select
          name='relationship_with_child'
          id='relationship'
          className='px-[25px] py-3 border border-[#5B00FF] md:border-0 rounded-lg focus:outline-none w-full text-[#CCCCCC] text-[12px] md:text-[13px] appearance-none cursor-pointer'
          value={parentProfileFormData.relationship_with_child}
          onChange={handleSelectChange}
        >
          <option value='Father'>Father</option>
          <option value='Mother'>Mother</option>
          <option value='Guardian'>Guardian</option>
        </select>
      </div>

      <CustomBtn
        title='Save'
        styles={`bg-[#5B00FF] text-white disabled:opacity-50 disabled:cursor-not-allowed font-bold rounded-lg md:w-[100px] w-full py-3`}
        type='submit'
        disabled={isRequiredData ? false : true}
      />
    </form>
  )
}
