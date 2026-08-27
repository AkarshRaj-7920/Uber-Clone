import { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaChevronRight, FaCircle, FaClock, FaCreditCard, FaLocationArrow, FaSquare, FaUser } from 'react-icons/fa'
import { IoIosAdd, IoIosArrowDown, IoMdClose, IoMdSearch } from 'react-icons/io'

const LocationandRide = ({ selectedVehicle, setSelectedVehicle, VEHICLES, setisRiding }) => {
    // Dummy Datas
    const SUGGESTED_LOCATIONS = [
        { id: 1, name: "Gorakhpur - Spain", address: "Puvanchal, Gorakhpur, UP 10036" },
        { id: 2, name: "Times Square", address: "Manhattan, New York, NY 10036" },
        { id: 3, name: "JFK International Airport", address: "Queens, NY 11430" },
        { id: 4, name: "Central Park West", address: "Central Park West, New York, NY" },
        { id: 5, name: "Grand Central Terminal", address: "89 E 42nd St, New York, NY 10017" },
        { id: 6, name: "Brooklyn Bridge Park", address: "334 Furman St, Brooklyn, NY 11201" }
    ];

    const [Pickup, setPickup] = useState('')
    const [Dropoff, setDropoff] = useState('')
    const [selectVehicle, setselectVehicle] = useState(false)
    const [showSuggestions, setshowSuggestions] = useState(false)
    const [activeInput, setactiveInput] = useState('')
    const searchContainerRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target)
            ) {
                setshowSuggestions(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, [])

    const LocationRideDetails = {
        pickup: Pickup,
        drop: Dropoff,
        vehicle: selectedVehicle
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setPickup('')
        setDropoff('')
        setselectVehicle(false)
        console.log(LocationRideDetails);
        setisRiding(true)
    }

    return (
        <div className='flex flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl'>
            <div className='border-b border-slate-200/80 bg-white px-5 py-3'>
                <div className='leading-tight whitespace-nowrap'>
                    <h1 className='text-xl font-bold tracking-tight sm:text-2xl'>Find a trip</h1>
                    <p className='text-xs font-medium text-slate-800'>Choose your pickup and drop-off points</p>
                </div>
            </div>

            <form
                ref={searchContainerRef}
                onSubmit={submitHandler}
                className={`flex flex-col gap-4 bg-transparent ${selectVehicle ? 'p-2' : 'p-3'}`}
            >
                {!selectVehicle ? (
                    <>
                        {/* Input Locaiton */}
                        <div className='relative flex flex-col gap-3'>
                            <div className='absolute left-4.5 z-10 top-6 bottom-6 w-0.5 rounded-full bg-slate-800/70' />

                            <div className='group relative w-full'>
                                <div className='absolute left-3.5 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-slate-900'>
                                    <FaCircle size={9} />
                                </div>
                                <input
                                    type='text'
                                    value={Pickup}
                                    onChange={(e) => setPickup(e.target.value)}
                                    onFocus={() => {
                                        setshowSuggestions(true)
                                        setactiveInput('pickup')
                                        if (!Pickup) {
                                            setPickup('Current Location')
                                        }
                                    }}
                                    autoComplete='off'
                                    name='pickuplocation'
                                    placeholder='Enter pickup location'
                                    className='w-full rounded-2xl border border-transparent bg-slate-100 py-3.5 pl-10 pr-10 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 placeholder:text-slate-400 hover:bg-slate-200/70 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10'
                                />
                                {Pickup ? (
                                    <button
                                        type='button'
                                        onClick={() => setPickup('')}
                                        className='absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-600 transition-all hover:bg-slate-200/70 hover:text-slate-900'
                                        title='Add stop'
                                    >
                                        <IoMdClose size={18} />
                                    </button>
                                ) : null}
                            </div>

                            <div className='group relative w-full'>
                                <div className='absolute left-3.5 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-slate-900'>
                                    <FaSquare size={9} />
                                </div>
                                <input
                                    type='text'
                                    value={Dropoff}
                                    onChange={(e) => setDropoff(e.target.value)}
                                    onFocus={() => {
                                        setshowSuggestions(true)
                                        setactiveInput('dropoff')
                                    }}
                                    autoComplete='off'
                                    name='dropoflocation'
                                    placeholder='Where to?'
                                    className='w-full rounded-2xl border border-transparent bg-slate-100 py-3.5 pl-10 pr-10 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 placeholder:text-slate-400 hover:bg-slate-200/70 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10'
                                />
                                {Dropoff ? (
                                    <button
                                        type='button'
                                        onClick={() => setDropoff('')}
                                        className='absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-600 transition-all hover:bg-slate-200/70 hover:text-slate-900'
                                        title='Add stop'
                                    >
                                        <IoMdClose size={18} />
                                    </button>
                                ) : (
                                    <button
                                        type='button'
                                        className='absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-600 transition-all hover:bg-slate-200/70 hover:text-slate-900'
                                        title='Add stop'
                                    >
                                        <IoIosAdd size={18} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Show Suggestions */}
                        {showSuggestions && (
                            <div className='relative flex flex-col gap-3' style={{ maxHeight: '13rem' }}>
                                <div className='h-full overflow-y-auto scrollbar-thin rounded-2xl border border-slate-200 bg-white shadow-sm'>
                                    <div className='flex items-center justify-between px-4 pt-1'>
                                        <h4 className='text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500'>Recent places</h4>
                                        <button
                                            type='button'
                                            onClick={() => setshowSuggestions(false)}
                                            className='rounded-full p-1 text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900'
                                        >
                                            <IoMdClose size={15} />
                                        </button>
                                    </div>

                                    {SUGGESTED_LOCATIONS.map((loc) => (
                                        <button
                                            key={loc.id}
                                            type='button'
                                            onClick={() => {
                                                if (activeInput === 'pickup') {
                                                    setPickup(loc.name)
                                                } else {
                                                    setDropoff(loc.name)
                                                }
                                                setshowSuggestions(false)
                                            }}
                                            className='flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3 text-left transition-colors hover:bg-slate-50'
                                        >
                                            <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700'>
                                                <FaLocationArrow size={12} />
                                            </div>

                                            <div className='min-w-0 flex-1'>
                                                <h3 className='truncate text-sm font-semibold text-slate-900'>{loc.name}</h3>
                                                <p className='truncate text-xs text-slate-500'>{loc.address}</p>
                                            </div>

                                            <FaChevronRight className='shrink-0 text-slate-400' />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className='flex flex-wrap items-center gap-2.5'>
                            <button
                                type='button'
                                className='flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-2.5 text-xs font-semibold text-slate-800 transition-all duration-200 hover:bg-slate-200/80'
                            >
                                <FaClock size={13} className='text-slate-700' />
                                <span>Pickup now</span>
                                <IoIosArrowDown size={13} className='text-slate-500' />
                            </button>

                            <button
                                type='button'
                                className='flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-2.5 text-xs font-semibold text-slate-800 transition-all duration-200 hover:bg-slate-200/80'
                            >
                                <FaUser size={11} className='text-slate-700' />
                                <span>For me</span>
                                <IoIosArrowDown size={13} className='text-slate-500' />
                            </button>
                        </div>


                        <button
                            type='button'
                            onClick={() => {
                                setselectVehicle(true)
                            }}
                            className='mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-200 hover:bg-black active:scale-[0.99]'
                        >
                            <IoMdSearch size={18} />
                            <span>Search rides</span>
                        </button>
                    </>
                ) : (
                    <div className='bg-white border border-gray-200/90 shadow-xl shadow-slate-200/50 rounded-2xl flex flex-col overflow-hidden max-h-full'>
                        {/* Header */}
                        <div className='p-4 border-b border-slate-100 flex items-center justify-between bg-white'>
                            <button
                                type='button'
                                onClick={() => {
                                    setselectVehicle(false)
                                }}
                                className='flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer'
                            >
                                <FaArrowLeft size={14} />
                                <span>Change route</span>
                            </button>
                            <span className='text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200/60'>
                                Trip Options
                            </span>
                        </div>

                        {/* Route Summary Bar */}
                        <div className='bg-slate-50 p-3 px-4 border-b border-slate-100 flex items-center justify-between text-xs'>
                            <div className='flex items-center gap-2 overflow-hidden pr-2'>
                                <div className='flex flex-col items-center gap-1 shrink-0'>
                                    <FaCircle size={8} className='text-slate-900' />
                                    <div className='w-0.5 h-3 bg-slate-300' />
                                    <FaSquare size={8} className='text-slate-900' />
                                </div>
                                <div className='overflow-hidden text-slate-700 font-medium'>
                                    <p className='truncate'><span className='text-slate-400 font-normal'>From:</span> {Pickup || 'Current Location'}</p>
                                    <p className='truncate'><span className='text-slate-400 font-normal'>To:</span> {Dropoff}</p>
                                </div>
                            </div>
                            <span className='text-xs font-bold text-slate-900 shrink-0 bg-white px-2 py-1 rounded-md shadow-2xs border border-slate-200'>
                                4.2 mi
                            </span>
                        </div>

                        {/* Vehicles List */}
                        <div className='p-3 sm:p-4 overflow-y-auto scrollbar-thin max-h-50 flex flex-col gap-2.5 divide-y divide-slate-100/60'>
                            {VEHICLES.map((vehicle) => {
                                const isSelected = selectedVehicle.id === vehicle.id;
                                const Icon = vehicle.icon;
                                return (
                                    <button
                                        key={vehicle.id}
                                        type='button'
                                        onClick={() => setSelectedVehicle(vehicle)}
                                        className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer text-left ${isSelected
                                            ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                                            : 'bg-white hover:bg-slate-50 border-slate-200/80 text-slate-900 shadow-2xs'
                                            }`}
                                    >
                                        <div className='flex items-center gap-3.5 flex-1 min-w-0'>
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-800'
                                                }`}>
                                                <Icon size={24} />
                                            </div>

                                            <div className='flex-1 min-w-0 pr-2'>
                                                <div className='flex items-center gap-2'>
                                                    <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                                                        {vehicle.name}
                                                    </h4>
                                                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${isSelected ? 'bg-slate-700 text-slate-200' : 'bg-slate-100 text-slate-600'
                                                        }`}>
                                                        <FaUser size={8} className='inline mr-1' />
                                                        {vehicle.capacity}
                                                    </span>
                                                    {vehicle.badge && (
                                                        <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-100 text-emerald-800'
                                                            }`}>
                                                            {vehicle.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className={`text-xs mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                                                    {vehicle.eta} • {vehicle.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className='text-right shrink-0'>
                                            <span className={`text-base font-extrabold block ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                                                {vehicle.price}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Payment & Action Footer */}
                        <div className='p-4 border-t border-slate-100 bg-white flex flex-col gap-3'>
                            <div className='flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60'>
                                <div className='flex items-center gap-2'>
                                    <FaCreditCard size={14} className='text-slate-700' />
                                    <span className='font-semibold text-slate-800'>Uber Cash</span>
                                </div>
                                <button
                                    type='button'
                                    className='text-slate-900 font-bold hover:underline text-xs cursor-pointer'
                                >
                                    Change
                                </button>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-slate-900 hover:bg-black active:scale-[0.99] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base'
                            >
                                <span>Confirm {selectedVehicle.name}</span>
                                <span>• {selectedVehicle.price}</span>
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    )
}

export default LocationandRide