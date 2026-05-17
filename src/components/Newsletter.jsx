import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setIsSubscribed(true);
      setEmail('');
      // In a real app, you would send the email to your API here
    }
  };

  return (
    <section className="bg-slate-900 py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30" aria-hidden="true">
        <div className="w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Join Our Local Community
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter to get the latest updates on fresh arrivals, exclusive local deals, and community events delivered straight to your inbox.
        </p>

        {isSubscribed ? (
          <div className="inline-flex items-center justify-center p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-100 backdrop-blur-sm animate-fade-in-up">
            <svg className="w-6 h-6 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Thanks for subscribing! Keep an eye on your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-auto rounded-lg border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:text-slate-400 transition-all"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="flex-none rounded-lg bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        
        {!isSubscribed && (
          <p className="mt-4 text-sm text-slate-400">
            We care about your data. Read our <a href="#" className="text-white underline hover:text-indigo-400 transition-colors">Privacy Policy</a>.
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
