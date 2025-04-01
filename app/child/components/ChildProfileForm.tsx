'use client'
import { useProfileStore } from '@/app/store/profileStore'
import CustomBtn from '../../globalcomponents/CustomBtn'
import { FormEvent, useState } from 'react'
import { showInfoToast } from '@/utils/toastUtils'

export default function ChildProfileFormSection () {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    primaryLanguage: '',
    languageLevel: '',
    residentialAddress: ''
  })
  
  const { setProfileData, loading, error, setLoading, setError } = useProfileStore(state => ({
    setProfileData: state.setProfileData,
    loading: state.loading,
    error: state.error,
    setLoading: state.setLoading,
    setError: state.setError
  }))
  
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    // setLoading(true)
    // setError('')
    // try {
    //    setProfileData({
    //     first_name: profile.firstName,
    //     last_name: profile.lastName,
    //     gender: profile.gender,
    //     age: profile.age,
    //     primary_language: profile.primaryLanguage,
    //     preferred_learning_time: profile.languageLevel,
    //     last_activity: profile.residentialAddress
    //   })
  
    //   showInfoToast('Saved!')
    // } catch (err) {
    //   setError('Failed to save profile')
    //   showInfoToast('Failed to save profile')
    // } finally {
    //   setLoading(false)
    // }
  }
  
  return (
    <form className='flex flex-col gap-5 childform' method='post'>
      {/*form  rows */}
      <div className='flex md:flex-row flex-col items-center gap-4 w-full'>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='firstName  ' className='font-bold'>
            First name{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full placeholder:text-[12px]'
            type='text'
            name='firstName'
            placeholder='Enter First Name'
            value={profile.firstName}
            onChange={e =>
              setProfile(prev => ({ ...prev, firstName: e.target.value }))
            }
          />
        </div>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='lastName  ' className='font-bold'>
            Last name{' '}
            <span className='text-[14px] text-red-600 required'>*</span>
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full placeholder:text-[12px]'
            type='text'
            name='lastName'
            placeholder='Enter Last Name'
            value={profile.lastName}
            onChange={e =>
              setProfile(prev => ({ ...prev, lastName: e.target.value }))
            }
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
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full text-[#CCCCCC] text-[12px] md:text-[13px] appearance-none'
            value={profile.gender}
            onChange={e =>
              setProfile(prev => ({ ...prev, gender: e.target.value }))
            }
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
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full placeholder:text-[12px]'
            type='text'
            name='age'
            placeholder='How old are you?'
            value={profile.age}
            onChange={e =>
              setProfile(prev => ({ ...prev, age: e.target.value }))
            }
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
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full placeholder:text-[12px]'
            type='text'
            name='language'
            placeholder='Select language'
            value={profile.primaryLanguage}
            onChange={e =>
              setProfile(prev => ({ ...prev, primaryLanguage: e.target.value }))
            }
          />
        </div>
        <div className='flex flex-col flex-1 gap-2 w-full'>
          <label htmlFor='mobileNumber  ' className='font-bold'>
            Language Level{' '}
          </label>
          <input
            className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full placeholder:text-[12px]'
            type='text'
            name='level'
            placeholder='Select your language level'
            value={profile.languageLevel}
            onChange={e =>
              setProfile(prev => ({ ...prev, languageLevel: e.target.value }))
            }
          />
        </div>
      </div>
      {/* row 4 */}
      <div className='flex flex-col gap-2 w-full'>
        <label htmlFor='residentialAddress  ' className='font-bold'>
          Residential Address
        </label>
        <input
          className='px-[25px] py-3 border border-[#5B00FF] rounded-lg focus:outline-none w-full placeholder:text-[12px]'
          type='text'
          placeholder='Enter Residential Address'
          name='residentialAddress'
          value={profile.residentialAddress}
          onChange={e =>
            setProfile(prev => ({
              ...prev,
              residentialAddress: e.target.value
            }))
          }
        />
      </div>

      <div className='flex flex-col justify-center items-center'>
        <CustomBtn
          title={loading ? 'Saving your profile' : 'Save'}
          styles='bg-[#5B00FF] text-white font-bold rounded-lg w-full md:w-[80%] py-3 disabled:opacity-50'
          type='submit'
          event={() => handleSubmitForm}
          disabled={profile ? false : true}
        />
      </div>
    </form>
  )
}
