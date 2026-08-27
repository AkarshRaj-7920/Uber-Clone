import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaChevronRight, FaCircle, FaClock, FaCreditCard, FaLocationArrow, FaSquare, FaUser } from 'react-icons/fa'
import { IoIosAdd, IoIosArrowDown, IoIosCall, IoMdClose, IoMdSearch } from 'react-icons/io'
import { MdDirectionsCar, MdTwoWheeler, MdLocalTaxi, MdElectricCar, MdMessage } from 'react-icons/md';
import UberMobileTrip from "../../../assets/imgs/UberMobileTrip.png";
import UberMobileParcel from "../../../assets/imgs/UberMobileParcel.png";
import UberMobileRentals from "../../../assets/imgs/UberMobileRentals.png";
import gsap from 'gsap'
import LocationandRideM from './HomeMobile/LocationandRideM';
import ConfirmLocationRideM from './HomeMobile/ConfirmLocationRideM';

const UserHomeMobile = ({ DriverFound, setDriverFound }) => {

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

    const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);
    const [isRiding, setisRiding] = useState(false)
    const pannelRef = useRef(null)

    return (
        <div className='relative h-full w-full bg-white'>
            <section className={`relative ${DriverFound ? 'h-100' : 'h-full'} w-full overflow-hidden px-2`}>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_40%)]' />
                <img
                    src='https://i.sstatic.net/gtiI7.gif'
                    alt='Uber Live Navigation Map'
                    className='h-full w-full object-cover transition-transform duration-700 rounded-2xl hover:scale-[1.02]'
                />
            </section>

            {DriverFound ? (
                <section className="h-55 w-full p-1 flex items-center justify-center">
                    <div className="h-full w-full rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-xl shadow-[0_20px_70px_rgba(15,23,42,0.18)] px-3 py-2 flex flex-col justify-between">

                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-semibold text-gray-900">
                                    Wait at Pickup Point
                                </h2>
                                <p className="text-[11px] text-gray-500">
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
                            className="w-full rounded-full border border-red-200 bg-red-50 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition">
                            Cancel Ride
                        </button>

                    </div>
                </section>
            ) : (
                <section ref={pannelRef} className='absolute inset-x-0 bottom-0 z-20 w-full bg-transparent'>
                    {!isRiding ? (
                        <LocationandRideM selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} VEHICLES={VEHICLES} isRiding={isRiding} setisRiding={setisRiding} pannelRef={pannelRef} />
                    ) : (
                        <ConfirmLocationRideM isRiding={isRiding} setisRiding={setisRiding} selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} VEHICLES={VEHICLES} />
                    )}
                </section>
            )}
        </div>
    )
}

export default UserHomeMobile