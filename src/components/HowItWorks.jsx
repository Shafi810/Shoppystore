const steps = [
  {
    id: 1,
    title: 'Browse Products',
    description: 'Explore our curated selection of fresh, locally sourced goods from trusted neighborhood makers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Place Order',
    description: 'Add your favorite items to the cart and securely checkout with ease through our platform.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Get Local Delivery',
    description: 'Enjoy fast, eco-friendly delivery straight to your doorstep within hours, supporting local drivers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Supporting local businesses has never been easier. Follow these three simple steps to get started.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* REMOVED INDEX PARAMETER HERE */}
            {steps.map((step) => (
              <div key={step.id} className="relative text-center group">
                {/* Number Badge & Icon Container */}
                <div className="relative flex justify-center mb-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-md group-hover:border-indigo-100 group-hover:shadow-lg transition-all duration-300 relative z-10">
                    <div className="text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  {/* Step Number */}
                  <div className="absolute top-0 right-1/2 -mr-12 -mt-2 w-8 h-8 bg-indigo-600 text-white font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm z-20">
                    {step.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
