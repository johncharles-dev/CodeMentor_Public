import React from "react";

const PricingSection = () => {
  return (
    <section className="bg-black px-6 py-20 w-full">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-stretch gap-4 sm:gap-0">
        {/* Free Plan */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 bg-black bg-opacity-20 border border-gray-700 rounded-lg sm:rounded-r-none">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-4xl font-semibold text-gray-100">Free Plan</h3>
          </div>
          <div className="mb-4 space-x-2">
            <span className="text-4xl font-bold text-gray-100">$0/mo</span>
          </div>
          <ul className="mb-6 space-y-2 text-gray-300">
            {["One Project", "Limited Designs", "Basic Settings"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="block w-full text-center px-8 py-3 rounded-lg text-sm md:text-base font-semibold text-gray-100 bg-white/10 hover:bg-white/20 transition"
          >
            Get Started for Free
          </a>
        </div>

        {/* Pro Plan */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-l-none shadow-xl">
          <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
            <h3 className="text-2xl sm:text-4xl font-semibold text-white">Pro Plan</h3>
            <span className="order-first sm:order-none inline-block px-3 py-1 text-xs font-semibold uppercase bg-black/20 text-white rounded-full">
              Go Pro
            </span>
          </div>
          <div className="mb-4 space-x-2">
            <span className="text-4xl font-bold text-white">$15/mo</span>
            <span className="text-2xl text-indigo-100 line-through">$39/mo</span>
          </div>
          <ul className="mb-6 space-y-2 text-indigo-100">
            {[
              "Unlimited Projects",
              "Unlimited API calls",
              "Advanced Project Settings",
              "Priority Support",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="block w-full text-center px-8 py-3 rounded-lg text-sm md:text-base font-semibold text-white bg-white/20 hover:bg-white/30 transition"
          >
            Get Started for Free
          </a>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
    />
  </svg>
);

export default PricingSection;
