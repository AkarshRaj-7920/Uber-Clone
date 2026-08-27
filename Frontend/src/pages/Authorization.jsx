import React, { useState } from 'react'
import UberLogo from '../assets/imgs/UberLogo.svg'
import { Outlet, useLocation } from 'react-router-dom';

const Authorization = () => {

    return (
        <main className='min-h-screen'>
            {/* Header */}
            <div className='w-full h-[10vh] px-15 py-1 flex items-center justify-center'>
                <img src={UberLogo} alt="" className='w-20 h-full' /> 
            </div>

            <Outlet />
        </main>
    )
}

export default Authorization