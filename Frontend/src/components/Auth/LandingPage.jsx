import React, { useState, useRef, useEffect } from 'react';
import HomePageIllustration from '../../assets/imgs/HomePageIllustration.png';
import { IoLocationSharp, IoChevronDown, IoTime, IoShieldCheckmark, IoCar } from "react-icons/io5";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import { RiSteering2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const LandingPage = () => {
  const [pickupOption, setPickupOption] = useState('now');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero elements entrance animation
      gsap.fromTo(
        ".anim-fade-up",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // Floating badges gentle float animation
      gsap.to(".anim-float", {
        y: -6,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "easeInOut",
        stagger: 0.3
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className='min-h-[85vh] relative flex flex-col xl:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-6 overflow-hidden'
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-neutral-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-neutral-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Left Content Section */}
      <section className='w-full xl:w-1/2 flex flex-col justify-center items-start z-10 space-y-6 max-w-xl mx-auto xl:mx-0 py-4'>

        {/* Hero Title & Subtitle */}
        <div className='anim-fade-up space-y-2'>
          <p className='text-sm sm:text-base font-semibold tracking-wider uppercase text-neutral-500'>
            Welcome to Uber
          </p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]'>
            Go anywhere with <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              Uber
            </span>
          </h1>
          <p className='text-neutral-600 text-sm sm:text-base max-w-md pt-2 leading-relaxed'>
            Request a trip, hop in, and relax. Safe, reliable rides available 24/7 with upfront pricing.
          </p>
        </div>

        {/* Pickup Time Selector Pill */}
        <div className='anim-fade-up relative w-full sm:w-auto z-10'>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className='inline-flex items-center justify-between gap-4 bg-neutral-100 hover:bg-neutral-200/70 border border-neutral-200/80 text-neutral-800 font-semibold px-4 py-2.5 rounded-full text-sm cursor-pointer transition-all duration-200 shadow-xs hover:shadow-sm select-none'
          >
            <div className="flex items-center gap-2">
              <BsClockFill className="text-black text-base" />
              <span>{pickupOption === 'now' ? 'Pickup Now' : 'Schedule for Later'}</span>
            </div>
            <IoChevronDown className={`transition-transform duration-300 text-neutral-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-12 left-0 w-56 bg-white border border-neutral-200 rounded-2xl shadow-xl z-30 py-2 animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => { setPickupOption('now'); setIsDropdownOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center justify-between hover:bg-neutral-50 transition-colors ${pickupOption === 'now' ? 'text-black font-semibold bg-neutral-100/60' : 'text-neutral-600'}`}
              >
                <div className="flex items-center gap-2">
                  <IoTime className="text-black" />
                  <span>Pickup Now</span>
                </div>
                {pickupOption === 'now' && <span className="w-1.5 h-1.5 bg-black rounded-full" />}
              </button>
              <button
                onClick={() => { setPickupOption('later'); setIsDropdownOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center justify-between hover:bg-neutral-50 transition-colors ${pickupOption === 'later' ? 'text-black font-semibold bg-neutral-100/60' : 'text-neutral-600'}`}
              >
                <div className="flex items-center gap-2">
                  <BsClockFill className="text-black" />
                  <span>Reserve for Later</span>
                </div>
                {pickupOption === 'later' && <span className="w-1.5 h-1.5 bg-black rounded-full" />}
              </button>
            </div>
          )}
        </div>

        {/* Action Cards / Navigation Buttons */}
        <div className='anim-fade-up flex flex-col sm:flex-row gap-4 w-full pt-2'>

          {/* Ride with us */}
          <Link
            to='/users'
            className='group relative flex-1 flex items-center justify-between p-4 bg-black text-white rounded-2xl transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 group-hover:bg-neutral-700 flex items-center justify-center transition-colors">
                <IoCar className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Ride with us</h3>
                <p className="text-xs text-neutral-400 font-normal">Request a ride in seconds</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <FaArrowRight size={14} className="transition-transform duration-300 group-hover:-rotate-45" />
            </div>
          </Link>

          {/* Drive with us */}
          <Link
            to='/captains'
            className='group relative flex-1 flex items-center justify-between p-4 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/80 text-neutral-900 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-black group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <RiSteering2Line className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Drive with us</h3>
                <p className="text-xs text-neutral-500 font-normal">Earn on your schedule</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-neutral-200 group-hover:bg-black text-neutral-700 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <FaArrowRight size={14} className="transition-transform duration-300 group-hover:-rotate-45" />
            </div>
          </Link>
        </div>

      </section>

      {/* Right Hero Visual Section */}
      <section className='anim-fade-up w-full xl:w-1/2 relative flex items-center justify-center mt-8 xl:mt-0 p-2'>
        <div className='relative w-full max-w-lg xl:max-w-xl aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/60 bg-linear-to-tr from-neutral-100 to-neutral-50 group'>
          <img
            src={HomePageIllustration}
            alt="Uber Ride Illustration"
            className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]'
          />

          {/* Subtle gradient overlay for elegance */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        </div>
      </section>

    </main>
  );
};

export default LandingPage;