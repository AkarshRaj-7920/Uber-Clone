import React from 'react'
import { MdArrowForwardIos, MdOutlineTurnLeft } from 'react-icons/md'

const CaptainPickRide = ({setTripState}) => {
    return (
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
                <div className='font-black text-lg text-emerald-500'>
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
    )
}

export default CaptainPickRide