

import React from 'react';
import moneyimg from "../assets/img/loan-fingrow-detail.png";

const FinancialAdvise = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto p-10  font-sans h-screen">
      <div className="w-1/2 pr-2">
        <div className="  p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">💲</span>
              <h1 className="text-sm text-gray-600">OUR BENEFITS</h1>
            </div>
            <h2 className="text-4xl text-green-600 font-bold mb-2">Maximizing value expert financial solutions</h2>
            <p className="text-gray-600 mb-5">Unlocking growth opportunities with tailored financial strategies for maximum value and long-term success.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center mb-5 hover:bg-green-700 transition">
              Get Started <span className="ml-2">↑</span>
            </button>
          </div>
          <div className="rounded-xl overflow-hidden flex-grow">
            <img src={moneyimg} alt="Financial consultation" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-2 bg-gray-100 px-4  rounded-3xl pt-20">
      <div className="grid grid-cols-2 gap-6">
          <div className="benefit-card hover-effect bg-white rounded-lg shadow-md p-4 h-60 flex flex-col justify-between">
            <span className="text-green-600 block mb-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 7.5a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zM8 11a1 1 0 100 2h6a1 1 0 100-2H8z" clipRule="evenodd" />
              </svg>
            </span>
            <h3 className="text-lg text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-500 text-sm">Access to professionals with in-depth industry seasoned knowledge.</p>
          </div>
          <div className="benefit-card hover-effect bg-white rounded-lg shadow-md p-4 h-60  flex flex-col justify-between">
            <span className="text-green-600 block mb-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.5a2 2 0 00-1.667.888L8.5 9.167l-1.833-1.833A2 2 0 004.5 6H4z" clipRule="evenodd" />
              </svg>
            </span>
            <h3 className="text-lg text-gray-800 mb-2">Risk Management</h3>
            <p className="text-gray-500 text-sm">Access to professionals with in-depth industry seasoned knowledge.</p>
          </div>
          <div className="benefit-card hover-effect bg-white rounded-lg shadow-md p-4 h-60  flex flex-col justify-between">
            <span className="text-green-600 block mb-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0V6H3a1 1 0 110-2h1V3a1 1 0 011-1zm7 7a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1zm-5 4a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1zm5-4a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
            <h3 className="text-lg text-gray-800 mb-2">Long-Term Growth</h3>
            <p className="text-gray-500 text-sm">Access to professionals with in-depth industry seasoned knowledge.</p>
          </div>
          <div className="benefit-card hover-effect bg-white rounded-lg shadow-md p-4 h-60  flex flex-col justify-between">
            <span className="text-green-600 block mb-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414l-1.793-1.793A1 1 0 0011 8V6z" clipRule="evenodd" />
              </svg>
            </span>
            <h3 className="text-lg text-gray-800 mb-2">Time Efficiency</h3>
            <p className="text-gray-500 text-sm">Access to professionals with in-depth industry seasoned knowledge.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .benefit-card {
          @apply bg-white p-4 rounded-lg shadow-md relative;
        }
        .hover-effect::after {
          content: '';
          @apply absolute bottom-0 left-0 w-full h-0 bg-green-600 transition-all duration-300 z-0 rounded-lg;
        }
        .hover-effect:hover::after {
          @apply h-full;
        }
        .hover-effect h3,
        .hover-effect p,
        .hover-effect span {
          @apply relative z-10;
        }
        .hover-effect:hover h3,
        .hover-effect:hover p,
        .hover-effect:hover span svg {
          @apply text-white;
        }
      `}</style>
      </div>
  
  );
};

export default FinancialAdvise;
