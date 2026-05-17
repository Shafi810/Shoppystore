import { useState, useEffect } from 'react';

const PromoBanner = () => {
  // Set target date to 3 days, 14 hours, 30 mins from now for the demo
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    // We create a fixed target time based on when the component mounts
    // so it functions like a real countdown.
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(targetDate.getHours() + 14);
    targetDate.setMinutes(targetDate.getMinutes() + 30);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Headline Area */}
          <div className="text-center lg:text-left flex-1">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 shadow-sm backdrop-blur-sm border border-white/20">
              Limited Time Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Spring Artisan Sale
            </h2>
            <p className="text-indigo-100 text-lg max-w-xl mx-auto lg:mx-0">
              Get up to <span className="font-bold text-white">40% off</span> on our best-selling local goods. Support your community and save!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex space-x-3 sm:space-x-6 justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 w-16 sm:w-20 text-center border border-white/20 shadow-lg">
                <span className="text-2xl sm:text-4xl font-bold text-white tabular-nums leading-none block mb-1">
                  {timeLeft.days.toString().padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-indigo-200 uppercase tracking-wider">Days</span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center pb-6">
              <span className="text-2xl sm:text-3xl text-indigo-300 font-bold">:</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 w-16 sm:w-20 text-center border border-white/20 shadow-lg">
                <span className="text-2xl sm:text-4xl font-bold text-white tabular-nums leading-none block mb-1">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-indigo-200 uppercase tracking-wider">Hours</span>
              </div>
            </div>

            <div className="flex flex-col justify-center pb-6">
              <span className="text-2xl sm:text-3xl text-indigo-300 font-bold">:</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 w-16 sm:w-20 text-center border border-white/20 shadow-lg">
                <span className="text-2xl sm:text-4xl font-bold text-white tabular-nums leading-none block mb-1">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-indigo-200 uppercase tracking-wider">Mins</span>
              </div>
            </div>

            <div className="flex flex-col justify-center pb-6">
              <span className="text-2xl sm:text-3xl text-indigo-300 font-bold">:</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 w-16 sm:w-20 text-center border border-white/20 shadow-lg">
                <span className="text-2xl sm:text-4xl font-bold text-white tabular-nums leading-none block mb-1">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-indigo-200 uppercase tracking-wider">Secs</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-4 lg:mt-0 flex-shrink-0">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-indigo-700 bg-white hover:bg-indigo-50 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Shop Sale Now
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
