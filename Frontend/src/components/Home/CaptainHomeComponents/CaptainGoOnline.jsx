import React from 'react'

const CaptainGoOnline = ({goOnline}) => {
    return (
        <>
            {/* Go Online */}
            < button
                type='button'
                onClick={goOnline}
                className='w-full my-2 bg-slate-800 hover:bg-slate-950 active:scale-[0.99] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base'
            >
                <span>Go Online</span>
            </button>
        </>
    )
}

export default CaptainGoOnline