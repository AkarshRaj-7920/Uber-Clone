import '@fontsource/poppins'
import React, { useState, useRef, useEffect } from 'react'
import UberLogo from '../assets/imgs/UberLogo.svg'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaCarAlt, FaBox, FaRegUser } from 'react-icons/fa'
import { MdCarCrash } from 'react-icons/md'
import { IoIosArrowDown, IoMdMore } from 'react-icons/io'
import UberMobileTrip from "../assets/imgs/UberMobileTrip.png";
import UberMobileParcel from "../assets/imgs/UberMobileParcel.png";
import UberMobileRentals from "../assets/imgs/UberMobileRentals.png";

const Home = () => {
  const location = useLocation();
  const isCaptain = location.pathname.startsWith('/home/captain-home')
  const [ProfileMenu, setProfileMenu] = useState(false)
  const [selectedService, setSelectedService] = useState('trip');
  const menuRef = useRef(null)

  const services = [
    { id: 'trip', label: 'Trip', image: UberMobileTrip, badge: 'Popular' },
    { id: 'parcel', label: 'Parcel', image: UberMobileParcel, badge: null },
    { id: 'rentals', label: 'Rentals', image: UberMobileRentals, badge: null },
  ];

  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setProfileMenu(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])


  return (
    <main className='min-h-screen overflow-y-auto' style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Header */}
      <div className='w-full h-[10vh] px-4 md:px-15 py-1 mb-1 flex items-center justify-between cursor-default relative z-30'>
        {/* Navbar */}
        <div className='flex justify-between items-center w-auto xl:w-1/3 md:w-2/3'>
          {/* Logo */}
          <div className='relative py-1'>
            <img src={UberLogo} alt="" className='w-20 h-full' />
            {isCaptain ? (
              <p className='absolute bottom-0 left-0.5 text-xs uppercase tracking-[0.35em]'>captain</p>
            ) : ''}
          </div>

          <nav className='hidden md:flex items-center gap-6 md:gap-2 md:mt-2'>
            {isCaptain ? (
              <>
                <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white transition-shadow text-sm font-medium text-slate-700 shadow-sm'>
                  <FaCarAlt size={16} />
                  <span>Find</span>
                </button>

                <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white transition-shadow text-sm font-medium text-slate-700 shadow-sm'>
                  <FaBox size={16} />
                  <span>Deliver</span>
                </button>

                <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white transition-shadow text-sm font-medium text-slate-700 shadow-sm'>
                  <MdCarCrash size={16} />
                  <span>Give Rent</span>
                </button>
              </>
            ) : (
              <>
                <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white transition-shadow text-sm font-medium text-slate-700 shadow-sm'>
                  <FaCarAlt size={16} />
                  <span>Trip</span>
                </button>

                <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white transition-shadow text-sm font-medium text-slate-700 shadow-sm'>
                  <FaBox size={16} />
                  <span>Parcel</span>
                </button>

                <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white transition-shadow text-sm font-medium text-slate-700 shadow-sm'>
                  <MdCarCrash size={16} />
                  <span>Rentals</span>
                </button>
              </>
            )}
          </nav>
        </div>

        {/* Profile */}
        <div ref={menuRef} className='relative'>
          <button
            type='button'
            onClick={() => setProfileMenu((p) => !p)}
            aria-haspopup='true'
            aria-expanded={ProfileMenu}
            className='flex items-center gap-3 p-2 rounded-full hover:bg-white shadow-sm transition'
          >
            <IoMdMore size={20} className='sm:hidden text-slate-700' />
            <FaRegUser size={22} className='hidden sm:block text-slate-700' />
            <IoIosArrowDown size={16} className='hidden sm:block text-slate-700' />
          </button>

          <div className={`origin-top-right absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition transform ${ProfileMenu ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
            {/* Profile */}
            <div className='px-4 py-3 border-b border-gray-100 flex items-center gap-3'>
              <div className='h-9 w-9 rounded-full flex items-center justify-center text-gray-500'>
                <FaRegUser />
              </div>
              <div>
                <p className='text-sm font-semibold text-slate-800'>Guest User</p>
                <p className='text-xs text-slate-500'>guest@example.com</p>
              </div>
            </div>

            {/* Logout */}
            <div className='p-2'>
              <Link to={`/${isCaptain ? 'captains' : 'users'}/logout`} className='block w-full text-center px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition'>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className={`h-[89vh] bg-white text-slate-900 flex flex-col ${isCaptain ? 'md:flex-row-reverse gap-2 md:gap-4 md:justify-center' : 'md:flex-row justify-center gap-4'} relative`}>
        <Outlet />
      </main>
    </main >
  )
}

export default Home