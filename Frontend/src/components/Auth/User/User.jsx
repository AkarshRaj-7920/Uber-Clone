import React from 'react'
import { Outlet } from 'react-router-dom'

const Login = () => {
    return (
        <main className='h-[90vh] bg-white text-slate-900'>

            <div className='mx-auto flex max-w-6xl flex-col justify-center items-center px-4 py-2 sm:px-6 lg:px-8 cursor-default'>
                <Outlet />
            </div>
        </main>
    )
}

export default Login