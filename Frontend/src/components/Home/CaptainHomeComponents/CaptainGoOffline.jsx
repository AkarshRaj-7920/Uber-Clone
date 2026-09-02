import React from 'react'

const CaptainGoOffline = ({goOffline}) => {
    return (
        <>
            {/* Go Offline */}
            <button
                type="button"
                onClick={goOffline}
                className="w-full mt-2 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold py-2.5 md:py-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
                Go Offline
            </button>
        </>
    )
}

export default CaptainGoOffline