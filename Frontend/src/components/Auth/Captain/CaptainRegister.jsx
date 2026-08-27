import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { IoMdArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainContextData } from '../../../context/CaptainContext'

const CaptainRegister = () => {
  const navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false)
  const [showConfirmPassword, setshowConfirmPassword] = useState(false)

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')

  const [vehicleColor, setvehicleColor] = useState('')
  const [vehiclePlate, setvehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain, setcaptain } = React.useContext(CaptainContextData)

  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullName: {
        firstName: FirstName,
        lastName: LastName
      },
      email: Email,
      password: Password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setcaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/home/captain-home')
    }

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className='mx-auto w-full relative rounded-4xl bg-white shadow-xl shadow-slate-300/50 px-8 py-3 sm:px-10'>
      <button
        type='button'
        onClick={() => {
          navigate(-1)
        }}
        className='absolute bg-gray-200/50 hover:bg-gray-200 top-5 sm:top-7 left-5 sm:left-7 flex gap-2 justify-center items-center px-1.5 sm:px-3 py-1.5 rounded-full transition-all duration-200'>
        <IoMdArrowBack size={18} />
        <span className='font-medium hidden sm:block'>Back</span>
      </button>

      <div className='mb-4 text-center'>
        <p className='text-xs uppercase tracking-[0.35em] text-slate-500'>Captain Sign Up</p>
        <h1 className='mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>Hello there</h1>
        <p className='m-1 text-sm leading-6 text-center text-slate-600'>Fill below to Drive</p>
      </div>

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='space-y-3'>

        <div className='flex flex-col gap-4 lg:flex-row'>
          {/* Personal Details */}
          <div className='w-full lg:w-1/2 space-y-2 px-1.5'>
            <p className='mb-1.5 leading-6 text-center text-slate-600 underline'>Personal Details</p>

            {/* Full Name */}
            <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-around'>
              {/* First Name */}
              <div className='space-y-1 w-full sm:w-1/2'>
                <label htmlFor='firstname' className='block text-sm font-medium text-slate-700'>First Name</label>
                <input
                  id='firstname'
                  type='text'
                  value={FirstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                  placeholder="What's your First name"
                  className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
                />
              </div>

              {/* Last Name */}
              <div className='space-y-1 w-full sm:w-1/2'>
                <label htmlFor='lastname' className='block text-sm font-medium text-slate-700'>Last Name</label>
                <input
                  id='lastname'
                  type='text'
                  value={LastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                  placeholder="What's your Last name"
                  className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
                />
              </div>
            </div>

            {/* Email */}
            <div className='space-y-1'>
              <label htmlFor='email' className='block text-sm font-medium text-slate-700'>What's your Email</label>
              <input
                id='email'
                type='email'
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder='Email'
                className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
              />
            </div>
          </div>

          {/* Vehicle Info */}
          <div className='w-full lg:w-1/2 space-y-2 px-1.5'>
            <p className='mb-1.5 leading-6 text-center text-slate-600 underline'>Vehicle Details</p>

            <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-around'>
              {/* Vehicle Color */}
              <div className='space-y-1 w-full sm:w-1/2'>
                <label htmlFor='vehiclecolor' className='block text-sm font-medium text-slate-700'>Vehicle Color</label>
                <input
                  id='vehiclecolor'
                  type='text'
                  value={vehicleColor}
                  onChange={(e) => {
                    setvehicleColor(e.target.value)
                  }}
                  placeholder="Vehicle Color"
                  className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
                />
              </div>

              {/* Vehicle Plate */}
              <div className='space-y-1 w-full sm:w-1/2'>
                <label htmlFor='vehicleplate' className='block text-sm font-medium text-slate-700'>Vehicle Plate</label>
                <input
                  id='vehicleplate'
                  type='text'
                  value={vehiclePlate}
                  onChange={(e) => {
                    setvehiclePlate(e.target.value)
                  }}
                  placeholder="Vehicle Plate"
                  className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
                />
              </div>
            </div>

            <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-around'>
              {/* Vehicle Capacity */}
              <div className='space-y-1 w-full sm:w-1/2'>
                <label htmlFor='capacity' className='block text-sm font-medium text-slate-700'>Vehicle Capacity</label>
                <div className='relative'>
                  <select
                    id='capacity'
                    value={vehicleCapacity}
                    onChange={(e) => setVehicleCapacity(e.target.value)}
                    className='w-full appearance-none rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-900 shadow-sm outline-none transition duration-200 hover:border-slate-300 focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
                  >
                    <option value=''>Select capacity</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5+</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Vehicle Type */}
              <div className='space-y-1 w-full sm:w-1/2'>
                <label htmlFor='vehicletype' className='block text-sm font-medium text-slate-700'>Vehicle Type</label>
                <div className='relative'>
                  <select
                    id='vehicletype'
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className='w-full appearance-none rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-900 shadow-sm outline-none transition duration-200 hover:border-slate-300 focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
                  >
                    <option value=''>Select vehicle type</option>
                    <option value='car'>Car</option>
                    <option value='moto'>Moto</option>
                    <option value='auto'>auto</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Passwords */}
        <div className='flex flex-col gap-3 w-full sm:flex-row'>
          {/* Password */}
          <div className='w-full sm:w-1/2 space-y-1'>
            <label htmlFor='password' className='block text-sm font-medium text-slate-700'>Decide a Password</label>
            <div className='relative'>
              <input
                id='password'
                type={showPassword ? 'text' : 'password'}
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder='••••••••'
                className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
              />
              <button
                onClick={() => setshowPassword(prev => !prev)}
                type='button'
                className='absolute top-2.5 right-3 text-gray-600 p-1.5 hover:bg-gray-200/60 rounded-full transition-all duration-200'>
                {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className='w-full sm:w-1/2 space-y-1'>
            <label htmlFor='confirm-password' className='block text-sm font-medium text-slate-700'>Confirm</label>
            <div className='relative'>
              <input
                id='confirm-password'
                type={showConfirmPassword ? 'text' : 'password'}
                value={ConfirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                placeholder='••••••••'
                className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200'
              />
              <button
                onClick={() => setshowConfirmPassword(prev => !prev)}
                type='button'
                className='absolute top-2.5 right-3 text-gray-600 p-1.5 hover:bg-gray-200/60 rounded-full transition-all duration-200'>
                {showConfirmPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
              </button>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full rounded-3xl bg-black/95 mt-3 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-black'
        >
          Continue
        </button>

        {/* Divider */}
        <div className='flex justify-center items-center gap-5'>
          <div className='border border-gray-600/50 w-1/3'></div>
          <span>OR</span>
          <div className='border border-gray-600/50 w-1/3'></div>
        </div>
      </form>

      <div className='mt-2 text-center text-sm text-slate-500'>
        Already been here? <Link to={'/captains/login'} className='font-medium text-slate-900 hover:text-slate-700 hover:underline'>Login</Link>
      </div>
    </div>
  )
}

export default CaptainRegister