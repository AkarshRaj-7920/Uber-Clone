import React from 'react'
import { MdArrowForwardIos, MdCheckCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const CaptainRideCompleted = () => {
  const Navigate = useNavigate();

  return (
    <div className='bg-liner-to-b from-slate-50 to-white cursor-default'>
      {/* Header */}
      <div className='px-4 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 flex flex-col justify-center items-center text-center shadow-lg'>
        <h1 className='text-lg md:text-lg font-bold text-white'>
          Ride Completed! with <span className='font-semibold text-emerald-50 '>Niharika</span>
        </h1>
      </div>

      <div className='space-y-4 px-4 py-2'>
        {/* Trip Details */}
        <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
          <div className='px-5 py-2 bg-linear-to-r from-slate-50 to-slate-100 border-b border-slate-200'>
            <h2 className='text-sm md:text-base font-bold text-slate-800'>Trip Details</h2>
          </div>

          <div className="px-5 py-3">
            <div className="relative">
              {/* Connector */}
              <div className="absolute left-1.75 top-3 bottom-5 w-0.5 bg-slate-300 rounded-full z-0"></div>

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
              <div className="flex gap-3">
                <div className="w-4 flex justify-center mt-1 z-10">
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

            {/* Distance Covered */}
            <div className='mt-2 pt-1.5 border-t border-slate-200 flex justify-between items-center'>
              <h3 className="text-sm font-semibold text-slate-700">Distance Covered</h3>
              <span className='font-bold text-emerald-600'>4 km</span>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
          <div className='px-5 py-2 bg-linear-to-r from-slate-50 to-slate-100 border-b border-slate-200'>
            <h2 className='font-bold text-slate-800'>Payment Summary</h2>
          </div>

          <div className='px-5 py-2 space-y-2 flex justify-between items-center'>
            {/* Payment Method */}
            <div className='px-4 py-2 rounded-full text-sm text-slate-800 font-semibold border border-emerald-300 bg-emerald-50 flex justify-between items-center gap-2 hover:bg-emerald-100 transition-colors cursor-pointer'>
              <span>Uber Cash</span>
              <span className='text-emerald-600'><MdArrowForwardIos size={14} /></span>
            </div>

            {/* Amount */}
            <div className='text-right'>
              <p className='font-black text-lg text-emerald-600'>$26.50</p>
              <p className='text-xs text-slate-500 mt-1'>Payment completed</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pb-6">
          <button
            onClick={() => {
              Navigate('/home/captain-home')
            }}
            className="w-full py-3 md:py-3.5 rounded-xl bg-linear-to-r from-slate-800 to-slate-900 hover:from-black hover:to-black text-white text-base md:text-lg font-bold transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaptainRideCompleted