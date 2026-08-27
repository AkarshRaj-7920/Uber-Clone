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

const Riding = () => {
    const location = useLocation();
    const isCaptain = location.pathname.startsWith('/riding/captain')
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
                </div>
            </div>

            <main className={`h-[89vh] bg-white text-slate-900 flex flex-col ${isCaptain ? 'md:flex-row-reverse gap-2 md:gap-4 md:justify-center' : 'md:flex-row justify-center gap-4'} relative`}>
                <Outlet />
            </main>
        </main >
    )
}

export default Riding