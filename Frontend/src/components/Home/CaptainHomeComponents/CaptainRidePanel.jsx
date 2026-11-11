import CaptainRideHeader from "./CaptainRideHeader"
import CaptainGoOnline from "./CaptainGoOnline"
import CaptainGoOffline from "./CaptainGoOffline"
import CaptainRideRequests from "./CaptainRideRequests"
import CaptainSummary from "./CaptainSummary"

const CaptainRidePanel = ({ isOnline, setisOnline, goOnline, goOffline, captainName }) => {
    return (
        <div className='flex flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl'>
            {!isOnline && (
                <>
                    {/* Header */}
                    <CaptainRideHeader />
                </>
            )}

            <div className='p-2'>
                {!isOnline ? (
                    <CaptainGoOnline setisOnline={setisOnline} goOnline={goOnline} />
                ) : (
                    <div className='p-2'>
                        {/* All Available Rides */}
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-2 md:mb-4">
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-slate-900">
                                        Nearby Requests
                                    </h2>
                                    <p className="text-xs md:text-sm text-slate-500">
                                        4 rides available nearby
                                    </p>
                                </div>

                                <button className="px-2 py-1 md:px-3 md:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs md:text-sm font-medium text-slate-700 transition-all">
                                    Refresh
                                </button>
                            </div>

                            {/* Ride Requests */}
                            <ul className="flex-1 max-h-50 md:max-h-78 overflow-y-auto space-y-1.5 md:space-y-3 scrollbar-thin pr-1">
                                <CaptainRideRequests />
                            </ul>

                            {/* Captain's Summary */}
                            <div className="sticky bottom-0 bg-white mt-2">
                                {/* Summary */}
                                <CaptainSummary />

                                {/* Go Offline */}
                                <CaptainGoOffline setisOnline={setisOnline} goOffline={goOffline} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CaptainRidePanel