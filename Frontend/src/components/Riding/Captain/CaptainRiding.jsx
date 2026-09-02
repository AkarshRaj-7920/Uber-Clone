import { useState } from 'react'
import CaptainToRide from './CaptainToRide'
import { useNavigate } from 'react-router-dom';
import CaptainOtpInput from './CaptainOtpInput';
import CaptainRideCompleted from './CaptainRideCompleted';
import CaptainPickRide from './CaptainPickRide';

const CaptainRiding = () => {
    const [TripState, setTripState] = useState('accepted')


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
                    {TripState === 'accepted' ? <CaptainToRide setTripState={setTripState} /> : TripState === 'otp' ? <CaptainOtpInput TripState={TripState} setTripState={setTripState} /> : TripState === 'riding' ? <CaptainPickRide setTripState={setTripState} /> : TripState === 'ridecompleted' ? <CaptainRideCompleted /> : ''}
                </div>
            </section >
        </>
    )
}

export default CaptainRiding