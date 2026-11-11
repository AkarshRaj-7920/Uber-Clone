import { useEffect, useRef, useState } from 'react'
import { CaptainContextData } from '../../../context/CaptainContext'
import CaptainRidePanel from './CaptainRidePanel';
import CaptainRideSuggestionPanel from './CaptainRideSuggestionPanel';
import LibreMap from '../../Map/LibreMap';

const CaptainHome = () => {
  const [isOnline, setisOnline] = useState(
    localStorage.getItem('isOnline') === 'true'
  );
  const [isTrip, setisTrip] = useState(true);
  const mapRef = useRef(null);

  const goOnline = () => {
    localStorage.setItem('isOnline', 'true');
    setisOnline(true);
  };

  const goOffline = () => {
    localStorage.setItem('isOnline', 'false');
    setisOnline(false);
  };

  return (
    <>
      {/* Map */}
      <section
        ref={mapRef}
        className='relative h-50 md:h-auto w-full px-2 md:w-3/7 md:px-1.5 md:py-1 mt-1 md:mt-0 lg:w-4/7 xl:w-3/5'>
        <div className='h-full w-full overflow-hidden rounded-[15px] border border-slate-200/80 shadow-[0_20px_70px_rgba(15,23,42,0.12)]'>
          <LibreMap />
        </div>
      </section>

      <section className='z-20 flex w-full shrink-0 flex-col px-2 transition-all duration-300 md:w-96 md:py-1 lg:w-105 xl:w-115'>
        <CaptainRidePanel isOnline={isOnline} setisOnline={setisOnline} goOnline={goOnline} goOffline={goOffline} />
      </section >

      {!isOnline && (
        <CaptainRideSuggestionPanel isTrip={isTrip} setisTrip={setisTrip} />
      )}
    </>
  )
}

export default CaptainHome