import React from 'react'
import { FaBoxOpen, FaCarAlt } from 'react-icons/fa';

const CaptainRideSuggestionPanel = ({isTrip, setisTrip}) => {
    return (
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
    )
}

export default CaptainRideSuggestionPanel