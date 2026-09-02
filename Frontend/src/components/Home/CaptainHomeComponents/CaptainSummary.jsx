import React from 'react'

const CaptainSummary = () => {
    return (
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
    )
}

export default CaptainSummary