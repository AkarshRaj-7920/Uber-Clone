import { useNavigate } from 'react-router-dom'

const CaptainRideRequests = () => {
    const navigate = useNavigate()

    return (
        <li className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Passenger & Fare */}
            <div className="flex items-center justify-between px-4 py-1.5 md:py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop"
                        alt="Passenger"
                        className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-gray-100"
                    />

                    <div className='flex flex-col justify-center items-start'>
                        <h2 className="font-semibold text-slate-900 text-sm">
                            Niharika Mehta
                        </h2>

                        <p className="px-2 py-0.5 text-[10px] md:text-xs text-white bg-black font-semibold flex justify-center items-center gap-1 rounded-md">
                            2.2 <span>KM</span>
                        </p>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-[10px] md:text-xs text-slate-500">
                        Fare
                    </p>

                    <h2 className="md:text-2xl font-bold text-emerald-600">
                        ₹26.56
                    </h2>
                </div>
            </div>

            {/* Locations */}
            <div className="px-4 py-1.5 md:py-3">
                <div className="relative">
                    {/* Connector */}
                    <div className="absolute left-1.75 top-3 bottom-5 w-0.5 bg-slate-300 rounded-full z-0"></div>

                    {/* Pickup */}
                    <div className="flex gap-3 mb-2.5 md:mb-4">
                        <div className="w-4 flex justify-center mt-1">
                            <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow"></div>
                        </div>

                        <div>
                            <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-slate-400">
                                Pickup
                            </p>

                            <p className="font-medium text-slate-800 text-xs md:text-sm">
                                Gorakhpur Railway Station
                            </p>
                        </div>
                    </div>

                    {/* Destination */}
                    <div className="flex gap-3 mb-2 md:mb-0">
                        <div className="w-4 flex justify-center mt-1 z-10">
                            <div className="w-3 h-3 rounded-sm bg-slate-900 shadow"></div>
                        </div>

                        <div>
                            <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-slate-400">
                                Destination
                            </p>

                            <p className="font-medium text-slate-800 text-xs md:text-sm">
                                City Mall, Civil Lines
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                <button
                    onClick={() => {
                        navigate('/riding/captain')
                    }}
                    className="py-1.5 md:py-2 rounded-xl bg-black hover:bg-slate-900 text-white text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
                    Accept
                </button>

                <button className="py-1.5 md:py-2 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
                    Decline
                </button>
            </div>
        </li>
    )
}

export default CaptainRideRequests