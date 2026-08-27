import React, { useEffect, useRef, useState } from 'react'
import { FaBoxOpen, FaCarAlt } from 'react-icons/fa';
import { IoIosArrowBack, IoIosCall } from 'react-icons/io';
import { IoClose } from "react-icons/io5";
import { MdArrowForwardIos, MdMessage, MdOutlineSubdirectoryArrowLeft, MdOutlineTurnLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import OtpInput from './OtpInput';

const CaptainRiding = () => {
    const [TripState, setTripState] = useState('accepted')

    const [Otp, setOtp] = useState(new Array(4).fill(''))
    const otpinputRefs = useRef([])

    console.log(otpinputRefs);
    // console.log(Otp);

    useEffect(() => {
        if (otpinputRefs.current[0]) {
            otpinputRefs.current[0].focus();
        }
    }, [TripState])


    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...Otp];
        //Allow only one input
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        //Move to next input if current field if filled
        if (value && index < Otp.length - 1 && otpinputRefs.current[index + 1]) {
            otpinputRefs.current[index + 1].focus();
        }
    }

    const handleClick = (index, e) => {
        otpinputRefs.current[index].setSelectionRange(1, 1)

        if (index > 0 && !Otp[index - 1]) {
            otpinputRefs.current[otp.indexOf('')]
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !Otp[index] && index > 0 && otpinputRefs.current[index - 1]) {
            otpinputRefs.current[index - 1].focus();
        }
    }

    //Submit Handler
    const OtpSubmit = (e) => {
        e.preventDefault();
        const combinedOtp = Otp.join("");
        console.log(combinedOtp);
        setOtp(new Array(4).fill(''))
        setTripState('riding')
    }

    const navigate = useNavigate()

    return (
        <>
            <section className='relative h-50 md:h-auto w-full px-2 md:w-3/7 md:px-1.5 md:py-1 lg:w-4/7 xl:w-3/5'>
                <div className='h-full w-full overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_20px_70px_rgba(15,23,42,0.12)]'>
                    <img
                        src='https://i.sstatic.net/gtiI7.gif'
                        alt='Uber Live Navigation Map'
                        className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]'
                    />
                </div>
            </section>

            <section className='z-20 flex w-full shrink-0 flex-col px-2 transition-all duration-300 md:w-96 md:py-1 lg:w-105 xl:w-115'>
                <div className='flex flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl'>
                    {TripState === 'accepted' ? (
                        <div>
                            {/* Direction */}
                            <div className='px-4 py-1.5 bg-emerald-700 text-white'>
                                <div className=' flex justify-between items-center'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <div className='mb-1.5'>
                                            <MdOutlineTurnLeft size={32} />
                                        </div>
                                        <h1 className='text-lg font-semibold'>Turn Left</h1>
                                    </div>

                                    <span>400 meters</span>
                                </div>

                                <span className='pb-1 flex justify-center text-sm font-bold text-gray-100'>
                                    Arriving in 2 Minutes
                                </span>
                            </div>

                            {/* Passenger & Distance Away */}
                            <div className="flex items-center justify-between px-4 py-1.5 md:py-3 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop"
                                        alt="Passenger"
                                        className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-gray-100"
                                    />

                                    <div className='flex flex-col justify-center items-start'>
                                        <h2 className="font-semibold text-slate-900 text-lg">
                                            Niharika Mehta
                                        </h2>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 border border-green-200 whitespace-nowrap">
                                        4 Km away
                                    </span>
                                </div>
                            </div>

                            {/* Locations */}
                            <div className="px-4 py-1.5 md:py-3">
                                <div className="relative">
                                    {/* Connector */}
                                    <div className="absolute left-1.75 top-3 bottom-3 w-0.5 bg-slate-300 rounded-full"></div>

                                    {/* Pickup */}
                                    <div className="flex gap-3 mb-2.5 md:mb-4">
                                        <div className="w-4 flex justify-center mt-1">
                                            <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow"></div>
                                        </div>

                                        <div>
                                            <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-slate-400">
                                                Pickup
                                            </p>

                                            <p className="font-medium text-slate-800 text-xs md:text-sm">
                                                Gorakhpur Railway Station
                                            </p>
                                        </div>
                                    </div>

                                    {/* Destination */}
                                    <div className="flex gap-3 mb-2 md:mb-0">
                                        <div className="w-4 flex justify-center mt-1">
                                            <div className="w-3 h-3 rounded-sm bg-slate-900 shadow"></div>
                                        </div>

                                        <div>
                                            <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-slate-400">
                                                Destination
                                            </p>

                                            <p className="font-medium text-slate-800 text-xs md:text-sm">
                                                City Mall, Civil Lines
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message + Call */}
                            <div className="flex items-center gap-2 px-4 mb-3">
                                <div className="relative flex-1">
                                    <MdMessage
                                        size={15}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Message Passenger..."
                                        className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-xs outline-none focus:border-gray-400 transition"
                                    />
                                </div>

                                <button className="h-9 w-9 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center hover:bg-blue-100 transition">
                                    <IoIosCall size={18} />
                                </button>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                                <button
                                    onClick={() => {
                                        setTripState('otp')
                                    }}
                                    className="py-1.5 md:py-2 rounded-xl bg-black hover:bg-slate-900 text-white text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
                                    Enter OTP
                                </button>

                                <button
                                    onClick={() => {
                                        navigate(-1)
                                    }}
                                    className="py-1.5 md:py-2 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
                                    Cancel Ride
                                </button>
                            </div>
                        </div>
                    ) : TripState === 'otp' ? (
                        <form onSubmit={(e) => {
                            OtpSubmit(e)
                        }}>
                            {/* Passenger & Distance Away */}
                            <div className="flex items-center px-4 py-1.5 md:py-3 border-b border-gray-100 bg-black text-white">
                                <div className='w-2/3 flex justify-between items-center pr-5'>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setTripState('accepted')
                                        }}
                                        className='px-2 py-1 rounded-2xl flex justify-between items-center gap-1 hover:text-gray-900 hover:bg-white border border-gray-10 hover:border-gray-300 transition-all duration-200'>
                                        <IoIosArrowBack size={16} />
                                        <span className='text-sm font-semibold'>Back</span>
                                    </button>

                                    <h2 className="font-semibold text-lg">
                                        Enter OTP
                                    </h2>
                                </div>
                            </div>

                            <div className='space-y-3 py-3'>
                                {/* Input */}
                                <div className='flex justify-center items-center gap-5 py-3'>
                                    {
                                        Otp.map((value, index) => {
                                            return (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    ref={(otpinput) => (otpinputRefs.current[index] = otpinput)}
                                                    value={value}
                                                    onChange={(e) => handleChange(index, e)}
                                                    onClick={() => handleClick(index)}
                                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                                    className='w-13 h-13 bg-gray-300 outline outline-gray-300 focus:outline-2 focus:outline-sky-500 text-center text-lg rounded-lg transition-all duration-50'
                                                />
                                            )
                                        })
                                    }
                                </div>

                                {/* Submit */}
                                <div className='p-3'>
                                    <button
                                        type="submit"
                                        className='p-2 bg-slate-800 hover:bg-black text-white text-lg font-semibold w-full rounded-xl transition-all duration-150'
                                    >
                                        Start Ride
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : TripState === 'riding' ? (
                        <div className='space-y-2.5'>
                            {/* Direction */}
                            <div className='px-4 py-1.5 bg-emerald-700 text-white'>
                                <div className=' flex justify-between items-center'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <div className='mb-1.5'>
                                            <MdOutlineTurnLeft size={32} />
                                        </div>
                                        <h1 className='text-lg font-semibold'>Turn Left</h1>
                                    </div>

                                    <span>400 meters</span>
                                </div>

                                <span className='pb-1 flex justify-center text-sm font-bold text-gray-100'>
                                    Arriving in 2 Minutes
                                </span>
                            </div>

                            {/* Destination */}
                            <div className='px-7 py-3 flex justify-between items-center'>
                                <div className="flex gap-3 mb-2 md:mb-0">
                                    <div className="w-4 flex justify-center mt-1">
                                        <div className="w-3 h-3 rounded-sm bg-slate-900 shadow"></div>
                                    </div>

                                    <div>
                                        <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-slate-400">
                                            Destination
                                        </p>

                                        <p className="font-medium text-slate-800 text-xs md:text-sm">
                                            City Mall, Civil Lines
                                        </p>
                                    </div>
                                </div>

                                <div className="">
                                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 border border-green-200 whitespace-nowrap">
                                        4 Km remaining
                                    </span>
                                </div>
                            </div>

                            {/* Payment Options  */}
                            <div className='px-6 pt-1 flex justify-between items-center'>
                                {/* Payment Options */}
                                <div className='px-3 py-1 rounded-full text-sm text-gray-700 font-semibold border border-gray-400 flex justify-between items-center gap-2'>
                                    <span>Uber Cash</span>
                                    <span className='mt-0.5'><MdArrowForwardIos size={12} /></span>
                                </div>

                                {/* Ammount */}
                                <div className='font-black text-lg'>
                                    <span>$26.5</span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-rows-1 gap-2 px-4 py-2">
                                <button
                                    onClick={() => {
                                        setTripState('ridecompleted')
                                    }}
                                    className="py-1.5 md:py-2 rounded-xl bg-slate-800 hover:bg-black text-white text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
                                    Complete Trip
                                </button>
                            </div>
                        </div>
                    ) : TripState === 'ridecompleted' ? (
                        <div>
                            Ride Completed
                        </div>
                    ) : ''}
                </div>
            </section >
        </>
    )
}

export default CaptainRiding