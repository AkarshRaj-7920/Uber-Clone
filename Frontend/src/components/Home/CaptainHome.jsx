import React, { useState } from 'react'
import { FaBoxOpen, FaCarAlt } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CaptainHome = () => {
  const [isOnline, setisOnline] = useState(false)
  const [isTrip, setisTrip] = useState(true)
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
          {!isOnline && (
            <>
              {/* Header */}
              < div className='border-b border-slate-200/80 bg-white px-5 py-3 flex flex-col gap-1'>
                <div className='flex justify-start items-center gap-2'>
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop"
                    alt="Passenger"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <h1 className='font-semibold'>Welcome <span>Name</span>!</h1>
                </div>

                <div className='leading-tight whitespace-nowrap'>
                  <h1 className='text-lg md:text-xl font-bold tracking-tight sm:text-2xl'>Find a Ride</h1>
                  <p className='text-xs font-medium text-slate-800'>Accept nearby ride requests</p>
                </div>
              </div>
            </>
          )}

          <div className='p-2'>
            {!isOnline ? (
              <>
                {/* Go Online */}
                < button
                  type='button'
                  onClick={() => {
                    setisOnline(true)
                  }}
                  className='w-full my-2 bg-slate-800 hover:bg-slate-950 active:scale-[0.99] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base'
                >
                  <span>Go Online</span>
                </button>
              </>
            ) : (
              <div className='p-2'>
                {/* All Available Rides */}
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <div>
                      <h2 className="text-lg md:text-xl font-bold text-slate-900">
                        Nearby Requests
                      </h2>
                      <p className="text-xs md:text-sm text-slate-500">
                        4 rides available nearby
                      </p>
                    </div>

                    <button className="px-2 py-1 md:px-3 md:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs md:text-sm font-medium text-slate-700 transition-all">
                      Refresh
                    </button>
                  </div>

                  {/* Ride Requests */}
                  <ul className="flex-1 max-h-50 md:max-h-78 overflow-y-auto space-y-1.5 md:space-y-3 scrollbar-thin pr-1">
                    <li className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Passenger & Fare */}
                      <div className="flex items-center justify-between px-4 py-1.5 md:py-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop"
                            alt="Passenger"
                            className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-gray-100"
                          />

                          <div className='flex flex-col justify-center items-start'>
                            <h2 className="font-semibold text-slate-900 text-sm">
                              Niharika Mehta
                            </h2>

                            <p className="px-2 py-0.5 text-[10px] md:text-xs text-white bg-black font-semibold flex justify-center items-center gap-1 rounded-md">
                              2.2 <span>KM</span>
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-[10px] md:text-xs text-slate-500">
                            Fare
                          </p>

                          <h2 className="md:text-2xl font-bold text-emerald-600">
                            ₹26.56
                          </h2>
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

                      {/* Buttons */}
                      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                        <button
                          onClick={() => {
                            navigate('/riding/captain')
                          }}
                          className="py-1.5 md:py-2 rounded-xl bg-black hover:bg-slate-900 text-white text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
                          Accept
                        </button>

                        <button className="py-1.5 md:py-2 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
                          Decline
                        </button>
                      </div>
                    </li>
                  </ul>

                  <div className="sticky bottom-0 bg-white mt-2">
                    {/* Summary */}
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-sm flex md:flex-col justify-between md:justify-center items-center md:items-start">
                        <p className="hidden md:inline-block text-xs font-medium text-slate-500">
                          Today's Earnings
                        </p>

                        <h2 className="mt-1 md:text-lg font-bold text-slate-900">
                          ₹2,450
                        </h2>
                      </div>

                      <div className="rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-sm flex md:flex-col justify-between md:justify-center items-center md:items-start">
                        <p className="hidden md:inline-block text-xs font-medium text-slate-500">
                          Trips Today
                        </p>

                        <h2 className="mt-1 md:text-lg font-bold text-slate-900">
                          12
                        </h2>
                      </div>
                    </div>

                    {/* Go Offline */}
                    <button
                      type="button"
                      onClick={() => setisOnline(false)}
                      className="w-full mt-2 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold py-2.5 md:py-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    >
                      Go Offline
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section >

      {!isOnline && (
        <section className='md:hidden z-20 flex w-full shrink-0 flex-col px-2 transition-all duration-300'>
          <div className='flex flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl'>
            {/* Header */}
            < div className='border-b border-slate-200/80 bg-white px-5 py-3'>
              <div className='leading-tight whitespace-nowrap'>
                <h1 className='text-lg font-bold tracking-tight'>Suggestions</h1>
              </div>
            </div>

            <div className='mb-3 grid grid-cols-2 gap-2 px-3'>
              <button
                type='button'
                onClick={() => {
                  setisTrip(true)
                }}
                className={`py-2 flex flex-col justify-between items-center gap-1 ${isTrip ? 'text-white bg-slate-900 border border-black' : 'bg-gray-200/80 border border-gray-300'} rounded-xl active:scale-95 transition-all duration-150`}
              >
                <div className={`${isTrip ? 'bg-white text-slate-950' : 'bg-slate-900 text-white'} p-3 rounded-full`}>
                  <FaCarAlt size={25} />
                </div>
                <span className='font-semibold'>Trip</span>
              </button>

              <button
                type='button'
                onClick={() => {
                  setisTrip(false)
                }}
                className={`py-2 flex flex-col justify-between items-center gap-1 ${!isTrip ? 'text-white bg-slate-900 border border-black' : 'bg-gray-200/80 border border-gray-300'} rounded-xl active:scale-95 transition-all duration-150`}
              >
                <div className={`${!isTrip ? 'bg-white text-slate-950' : 'bg-slate-900 text-white'} p-3 rounded-full`}>
                  <FaBoxOpen size={25} />
                </div>
                <span className='font-semibold'>Deliver</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default CaptainHome