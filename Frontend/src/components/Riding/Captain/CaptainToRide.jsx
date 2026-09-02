import { IoIosCall } from 'react-icons/io'
import { MdMessage, MdOutlineTurnLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const CaptainToRide = ({setTripState}) => {
  const navigate = useNavigate()

  return (
    <div>
      {/* Direction */}
      <div className='px-4 py-1.5 bg-emerald-700 text-white'>
        <div className=' flex justify-between items-center'>
          <div className='flex justify-center items-center gap-2'>
            <div className='mb-1.5'>
              <MdOutlineTurnLeft size={32} />
            </div>
            <h1 className='text-lg font-semibold'>Turn Left</h1>
          </div>

          <span>400 meters</span>
        </div>

        <span className='pb-1 flex justify-center text-sm font-bold text-gray-100'>
          Arriving in 2 Minutes
        </span>
      </div>

      {/* Passenger & Distance Away */}
      <div className="flex items-center justify-between px-4 py-1.5 md:py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop"
            alt="Passenger"
            className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-gray-100"
          />

          <div className='flex flex-col justify-center items-start'>
            <h2 className="font-semibold text-slate-900 text-lg">
              Niharika Mehta
            </h2>
          </div>
        </div>

        <div className="text-right">
          <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700 border border-green-200 whitespace-nowrap">
            4 Km away
          </span>
        </div>
      </div>

      {/* Locations */}
      <div className="px-4 py-1.5 md:py-3">
        <div className="relative">
          {/* Connector */}
          <div className="absolute left-1.75 top-3 bottom-3 w-0.5 bg-slate-300 rounded-full"></div>

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
            <div className="w-4 flex justify-center mt-1">
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

      {/* Message + Call */}
      <div className="flex items-center gap-2 px-4 mb-3">
        <div className="relative flex-1">
          <MdMessage
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Message Passenger..."
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-xs outline-none focus:border-gray-400 transition"
          />
        </div>

        <button className="h-9 w-9 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center hover:bg-blue-100 transition">
          <IoIosCall size={18} />
        </button>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
        <button
          onClick={() => {
            setTripState('otp')
          }}
          className="py-1.5 md:py-2 rounded-xl bg-black hover:bg-slate-900 text-white text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
          Enter OTP
        </button>

        <button
          onClick={() => {
            navigate(-1)
          }}
          className="py-1.5 md:py-2 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer">
          Cancel Ride
        </button>
      </div>
    </div>
  )
}

export default CaptainToRide