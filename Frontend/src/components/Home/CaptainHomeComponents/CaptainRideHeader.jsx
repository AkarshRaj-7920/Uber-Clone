import React from 'react'

const CaptainRideHeader = () => {
    return (
        <div className='border-b border-slate-200/80 bg-white px-5 py-3 flex flex-col gap-1'>
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
    )
}

export default CaptainRideHeader