import { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const CaptainOtpInput = ({ TripState, setTripState }) => {
    const [Otp, setOtp] = useState(new Array(4).fill(''))
    const otpinputRefs = useRef([])

    console.log(otpinputRefs);
    // console.log(Otp);

    useEffect(() => {
        if (otpinputRefs.current[0]) {
            otpinputRefs.current[0].focus();
        }
    }, [TripState])


    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...Otp];
        //Allow only one input
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        //Move to next input if current field if filled
        if (value && index < Otp.length - 1 && otpinputRefs.current[index + 1]) {
            otpinputRefs.current[index + 1].focus();
        }
    }

    const handleClick = (index, e) => {
        otpinputRefs.current[index].setSelectionRange(1, 1)

        if (index > 0 && !Otp[index - 1]) {
            otpinputRefs.current[otp.indexOf('')]
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !Otp[index] && index > 0 && otpinputRefs.current[index - 1]) {
            otpinputRefs.current[index - 1].focus();
        }
    }

    //Submit Handler
    const OtpSubmit = (e) => {
        e.preventDefault();
        const combinedOtp = Otp.join("");
        console.log(combinedOtp);
        setOtp(new Array(4).fill(''))
        setTripState('riding')
    }

    return (
        <form onSubmit={(e) => {
            OtpSubmit(e)
        }}>
            {/* Passenger & Distance Away */}
            <div className="flex items-center px-4 py-1.5 md:py-3 border-b border-gray-100 bg-black text-white">
                <div className='w-2/3 flex justify-between items-center pr-5'>
                    <button
                        type='button'
                        onClick={() => {
                            setTripState('accepted')
                        }}
                        className='px-2 py-1 rounded-2xl flex justify-between items-center gap-1 hover:text-gray-900 hover:bg-white border border-gray-10 hover:border-gray-300 transition-all duration-200'>
                        <IoIosArrowBack size={16} />
                        <span className='text-sm font-semibold'>Back</span>
                    </button>

                    <h2 className="font-semibold text-lg">
                        Enter OTP
                    </h2>
                </div>
            </div>

            <div className='space-y-3 py-3'>
                {/* Input */}
                <div className='flex justify-center items-center gap-5 py-3'>
                    {
                        Otp.map((value, index) => {
                            return (
                                <input
                                    key={index}
                                    type="text"
                                    ref={(otpinput) => (otpinputRefs.current[index] = otpinput)}
                                    value={value}
                                    onChange={(e) => handleChange(index, e)}
                                    onClick={() => handleClick(index)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className='w-13 h-13 bg-gray-300 outline outline-gray-300 focus:outline-2 focus:outline-sky-500 text-center text-lg rounded-lg transition-all duration-50'
                                />
                            )
                        })
                    }
                </div>

                {/* Submit */}
                <div className='p-3'>
                    <button
                        type="submit"
                        className='p-2 bg-slate-800 hover:bg-black text-white text-lg font-semibold w-full rounded-xl transition-all duration-150'
                    >
                        Start Ride
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CaptainOtpInput