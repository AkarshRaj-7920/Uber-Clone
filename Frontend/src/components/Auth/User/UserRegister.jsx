import React, { useState } from 'react'
import axios from 'axios'
import { FaRegEye } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { IoMdArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { ContextData } from '../../../context/Context'

const UserRegister = () => {
  const navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false)
  const [showConfirmPassword, setshowConfirmPassword] = useState(false)

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')

  const { user, setUser } = React.useContext(ContextData)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullName: {
        firstName: FirstName,
        lastName: LastName
      },
      email: Email,
      password: Password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='mx-auto w-full max-w-xl relative rounded-4xl border border-slate-200/80 bg-white shadow-xl shadow-slate-300/50 px-8 py-3 sm:px-10'>
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
        <p className='text-xs uppercase tracking-[0.35em] text-slate-500'>Sign Up</p>
        <h1 className='mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>Hello there</h1>
        <p className='mt-1 text-sm leading-6 text-slate-600'>Sign up to get a ride.</p>
      </div>

      <form
        onSubmit={(e) => {
          submitHandler(e)
          console.log('Hello');
        }}
        className='space-y-1.5'>

        {/* Full Name */}
        <div className='space-y-1.5 sm:space-y-0 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between'>
          {/* First Name */}
          <div className='space-y-1 w-full sm:w-auto'>
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
          <div className='space-y-1  w-full sm:w-auto'>
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

        {/* Password */}
        <div className='space-y-1'>
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
        <div className='space-y-1'>
          <label htmlFor='confirmpassword' className='block text-sm font-medium text-slate-700'>Confirm Password</label>
          <div className='relative'>
            <input
              id='confirmpassword'
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
              {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
            </button>
          </div>
        </div>

        <button
          type='submit'
          className='w-full rounded-3xl bg-black/95 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-black'
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
        Already been here? <Link to={'/users/login'} className='font-medium text-slate-900 hover:text-slate-700 hover:underline'>Login</Link>
      </div>
    </div>
  )
}

export default UserRegister