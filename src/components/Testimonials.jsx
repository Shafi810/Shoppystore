import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Local Resident',
    content: "The quality of the fresh produce is unmatched. It feels great knowing I'm supporting local farmers while getting the best ingredients for my family. Highly recommend the artisan bakery section too!",
    rating: 5,
    avatarColor: 'bg-indigo-100 text-indigo-600',
    initial: 'S'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Coffee Enthusiast',
    content: "I've tried coffees from all over the city, but the locally roasted beans I found here are by far my favorite. The delivery was incredibly fast and the packaging was completely eco-friendly.",
    rating: 5,
    avatarColor: 'bg-emerald-100 text-emerald-600',
    initial: 'M'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Home Chef',
    content: "This storefront has completely changed how I shop for groceries. The curated selection of pantry essentials is phenomenal, and everything arrives fresh. It's a game changer for my weekly meal prep.",
    rating: 4,
    avatarColor: 'bg-rose-100 text-rose-600',
    initial: 'E'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Small Business Owner',
    content: "The handcrafted soaps are incredible. I started buying them as gifts and now I can't stop using them myself. The local artisans featured here are truly talented.",
    rating: 5,
    avatarColor: 'bg-blue-100 text-blue-600',
    initial: 'D'
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Community Says
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Don't just take our word for it. Hear from your neighbors who love shopping local.
            </p>
          </div>
          
          <div className="hidden sm:flex items-center space-x-3 pb-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors focus:outline-none"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors focus:outline-none"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="snap-start flex-none w-80 sm:w-96 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col relative"
            >
              {/* Quote Icon Background */}
              <svg 
                className="absolute top-6 right-6 w-12 h-12 text-gray-50 opacity-50" 
                fill="currentColor" 
                viewBox="0 0 32 32" 
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <StarRating rating={testimonial.rating} />
              
              <blockquote className="flex-grow">
                <p className="text-gray-600 text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
              </blockquote>
              
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.avatarColor}`}>
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Arrows */}
        <div className="flex justify-center space-x-4 mt-2 sm:hidden">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
