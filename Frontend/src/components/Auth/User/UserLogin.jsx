import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { IoMdArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { ContextData } from '../../../context/Context'
import axios from 'axios'

const UserLogin = () => {
  const navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false)

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const { user, setUser } = React.useContext(ContextData)

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: Email,
      password: Password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='mx-auto w-full max-w-xl relative rounded-4xl border border-slate-200/80 bg-white shadow-xl shadow-slate-300/50 px-8 py-4 sm:px-10'>
      <button
        type='button'
        onClick={() => {
          navigate('/')
        }}
        className='absolute bg-gray-200/50 hover:bg-gray-200 top-5 sm:top-7 left-5 sm:left-7 flex gap-2 justify-center items-center px-1.5 sm:px-3 py-1.5 rounded-full transition-all duration-200'>
        <IoMdArrowBack size={18} />
        <span className='font-medium hidden sm:block'>Back</span>
      </button>

      <div className='mb-4 text-center'>
        <p className='text-xs uppercase tracking-[0.35em] text-slate-500'>Login</p>
        <h1 className='mt-1.5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>Welcome back</h1>
        <p className='mt-1 text-sm leading-6 text-slate-600'>Sign in to continue to your account.</p>
      </div>

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='space-y-4'>
        {/* Email */}
        <div className='space-y-3'>
          <label htmlFor='email' className='block text-sm font-medium text-slate-700'>What's your Email?</label>
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

        <div className='flex gap-4 text-xs sm:text-sm items-center justify-between'>
          <label className='flex items-center gap-2 text-slate-600'>
            <input type='checkbox' name='rememberme' className='h-4 w-4 rounded border-slate-300 bg-white text-black focus:ring-slate-400' />
            Remember me
          </label>

          <a href='#' className='text-xs sm:text-sm font-medium text-slate-700 transition hover:text-slate-900'>Forgot password?</a>
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

        <div className='flex justify-center items-center gap-4'>
          <span>Google</span>
          <span>Apple</span>
          <span>Microsoft</span>
        </div>
      </form>

      <div className='mt-6 text-center text-sm text-slate-500'>
        New here? <Link to={'/users/register'} className='font-medium text-slate-900 hover:text-slate-700 hover:underline'>Create an account</Link>
      </div>
    </div>
  )
}

export default UserLogin