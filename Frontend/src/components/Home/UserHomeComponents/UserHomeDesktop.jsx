import { useState } from 'react'
import { MdDirectionsCar, MdTwoWheeler, MdLocalTaxi, MdMessage } from 'react-icons/md'
import UberMobileTrip from "../../../assets/imgs/UberMobileTrip.png"
import LocationandRide from './HomeDesktop/LocationandRide'
import ConfirmLocationandRide from './HomeDesktop/ConfirmLocationandRide'
import { IoIosCall } from 'react-icons/io'

const UserHomeDesktop = ({ DriverFound, setDriverFound }) => {
    const VEHICLES = [
        {
            id: 'car',
            name: 'UberGo',
            image: UberMobileTrip,
            capacity: 4,
            eta: '2 mins away',
            price: '$14.50',
            description: 'Affordable, compact rides for everyday trips',
            badge: 'Popular',
            icon: MdDirectionsCar
        },
        {
            id: 'moto',
            name: 'Moto',
            image: UberMobileTrip,
            capacity: 1,
            eta: '1 min away',
            price: '$6.20',
            description: 'Quick bike rides through traffic',
            badge: 'Fastest',
            icon: MdTwoWheeler
        },
        {
            id: 'auto',
            name: 'UberAuto',
            image: UberMobileTrip,
            capacity: 3,
            eta: '3 mins away',
            price: '$8.80',
            description: 'Hassle-free auto rides at your doorstep',
            badge: 'Eco',
            icon: MdLocalTaxi
        }
    ];

    const [isRiding, setisRiding] = useState(false)
    const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);

    return (
        <>
            {DriverFound ? (
                <section className='z-20 flex w-full shrink-0 flex-col px-2 transition-all duration-300 md:w-96 md:py-1 lg:w-105 xl:w-115 cursor-default'>
                    <div className='bg-white border border-gray-200/90 shadow-xl shadow-slate-200/50 rounded-2xl p-5 flex flex-col gap-4 text-center'>
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="font-semibold text-gray-900">
                                    Wait at Pickup Point
                                </h2>
                                <p className="text-[11px] text-gray-500 text-left">
                                    Your driver is on the way
                                </p>
                            </div>

                            <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold text-green-700 border border-green-200 whitespace-nowrap">
                                4 mins away
                            </span>
                        </div>

                        {/* Driver */}
                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop"
                                    alt="Driver"
                                    className="h-9 w-9 rounded-full object-cover ring-2 ring-gray-100"
                                />

                                <div className="leading-tight">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        Satish Kumar
                                    </h3>
                                    <p className="text-[11px] text-gray-500">
                                        Driver
                                    </p>
                                </div>
                            </div>

                            <div className="text-right leading-tight">
                                <p className="text-sm font-semibold text-gray-900">
                                    DL 09 CC 3684
                                </p>
                                <p className="text-[11px] text-gray-500">
                                    Grey • WagonR
                                </p>
                            </div>

                        </div>

                        {/* Message + Call */}
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <MdMessage
                                    size={15}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Message your driver..."
                                    className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-xs outline-none focus:border-gray-400 transition"
                                />
                            </div>

                            <button className="h-9 w-9 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center hover:bg-blue-100 transition">
                                <IoIosCall size={18} />
                            </button>
                        </div>

                        {/* Cancel */}
                        <button
                            onClick={() => {
                                setDriverFound(false)
                            }}
                            className="w-full rounded-full border border-red-200 bg-red-50 py-2 text-sm font-medium text-red-600 hover:bg-red-100/80 transition">
                            Cancel Ride
                        </button>
                    </div>
                </section >
            ) : (
                <section className='z-20 flex w-full shrink-0 flex-col px-2 transition-all duration-300 md:w-96 md:py-1 lg:w-105 xl:w-115'>
                    {!isRiding ? (
                        <LocationandRide selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} VEHICLES={VEHICLES} isRiding={isRiding} setisRiding={setisRiding} />
                    ) : (
                        <ConfirmLocationandRide isRiding={isRiding} setisRiding={setisRiding} selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} VEHICLES={VEHICLES} />
                    )}
                </section >
            )}

            <section className='relative h-auto w-full px-2 md:w-3/7 md:px-1.5 md:py-1 lg:w-4/7 xl:w-3/5'>
                <div className='h-full w-full overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_20px_70px_rgba(15,23,42,0.12)]'>
                    <img
                        src='https://i.sstatic.net/gtiI7.gif'
                        alt='Uber Live Navigation Map'
                        className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]'
                    />
                </div>
            </section>
        </>
    )
}

export default UserHomeDesktop