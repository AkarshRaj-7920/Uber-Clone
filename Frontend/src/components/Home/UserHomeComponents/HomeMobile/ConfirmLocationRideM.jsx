import React from 'react'
import { MdDirectionsCar, MdTwoWheeler, MdLocalTaxi } from 'react-icons/md'

const ConfirmLocationRideM = ({ isRiding, setisRiding, selectedVehicle, setSelectedVehicle, VEHICLES }) => {
    return (
        <div className='bg-white border border-gray-200/90 shadow-xl shadow-slate-200/50 rounded-2xl p-5 flex flex-col gap-4 text-center'>
            <div className='relative w-16 h-16 mx-auto flex items-center justify-center'>
                <div className='absolute inset-0 rounded-full border-4 border-slate-900 border-t-transparent animate-spin' />
                <MdDirectionsCar size={28} className='text-slate-900' />
            </div>

            <div>
                <h3 className='text-lg font-bold text-slate-900'>Contacting drivers nearby...</h3>
                <p className='text-xs text-slate-500 mt-1'>Connecting you to the closest {selectedVehicle.name} driver</p>
            </div>

            <div className='bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-left text-xs space-y-1.5'>
                <div className='flex justify-between text-slate-600'>
                    <span>Vehicle:</span>
                    <span className='font-bold text-slate-900'>{selectedVehicle.name}</span>
                </div>
                <div className='flex justify-between text-slate-600'>
                    <span>Fare:</span>
                    <span className='font-bold text-slate-900'>{selectedVehicle.price}</span>
                </div>
                <div className='flex justify-between text-slate-600'>
                    <span>Payment:</span>
                    <span className='font-bold text-slate-900'>Cash</span>
                </div>
            </div>

            <button
                type='button'
                onClick={() => {
                    setisRiding(false)
                }}
                className='w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 rounded-xl transition-colors cursor-pointer text-xs sm:text-sm mt-1'
            >
                Cancel Ride Request
            </button>
        </div>
    )
}

export default ConfirmLocationRideM