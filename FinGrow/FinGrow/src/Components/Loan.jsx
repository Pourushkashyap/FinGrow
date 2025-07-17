// import React from 'react'
// import Crousal from '../Utils/Crousal'
// import { NavLink } from 'react-router-dom'
// import Chatbot from './ChatBot'

// function Loan() {
//   return (
//     <div className="pb-10"> 
//       <Crousal />
//       <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 pt-10"> 
//         <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Rules to Borrow Money</h1>
//           <ul className="list-inside text-lg text-gray-600 space-y-2">
//             <li><span className="font-bold text-gray-500">Rule 1:</span> Borrow responsibly</li>
//             <li><span className="font-bold text-gray-500">Rule 2:</span> Understand the interest rates</li>
//             <li><span className="font-bold text-gray-500">Rule 3:</span> Have a repayment plan</li>
//             <li><span className="font-bold text-gray-500">Rule 4:</span> Borrow only what you need</li>
//             <li><span className="font-bold text-gray-500">Rule 5:</span> Read all terms carefully</li>
//             <li><span className="font-bold text-gray-500">Rule 6:</span> Maintain a good credit score</li>
//           </ul>
//           <NavLink to="/loan/get-loan" className="mt-6 no-underline bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all">
//             Get Loan
//           </NavLink>
//         </div>

//         <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Rules to Lend Money</h1>
//           <ul className="list-inside text-lg text-gray-600 space-y-2">
//             <li><span className="font-bold text-gray-500">Rule 1:</span> Verify borrower's credibility</li>
//             <li><span className="font-bold text-gray-500">Rule 2:</span> Set clear terms and agreements</li>
//             <li><span className="font-bold text-gray-500">Rule 3:</span> Keep proper records</li>
//             <li><span className="font-bold text-gray-500">Rule 4:</span> Consider interest and risks</li>
//             <li><span className="font-bold text-gray-500">Rule 5:</span> Have a legal contract</li>
//             <li><span className="font-bold text-gray-500">Rule 6:</span> Be prepared for repayment delays</li>
//           </ul>
//           <NavLink to="/loan/provide-loan" className="mt-6 no-underline bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all">
//             Give Loan
//           </NavLink>
//         </div>
//       </div>
//       <Chatbot />
//     </div>
//   );
// }

// export default Loan;



/// 2nd
import React from 'react';
import Crousal from '../Utils/Crousal';
import { NavLink } from 'react-router-dom';
import Chatbot from './ChatBot';
import LoanOptions from './LoanOptions';
import SimpleMouseFollower from './SimpleMouseFollower';


function Loan() {

  return (
    <>
    <SimpleMouseFollower/>
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Carousel Section */}
      <section className="mb-12">
        <Crousal />
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 animate-fade-in">
          Explore Loan Options
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Borrow Money Card */}
          <div className="bg-white shadow-xl rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
              Rules to Borrow Money
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="font-semibold text-blue-500 mr-2">1.</span> Borrow responsibly
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-500 mr-2">2.</span> Understand the interest rates
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-500 mr-2">3.</span> Have a repayment plan
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-500 mr-2">4.</span> Borrow only what you need
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-500 mr-2">5.</span> Read all terms carefully
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-blue-500 mr-2">6.</span> Maintain a good credit score
              </li>
            </ul>
            <NavLink
              to="/loan/get-loan"
              className="mt-8 inline-block no-underline bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Get Loan Now
            </NavLink>
          </div>

          {/* Lend Money Card */}
          <div className="bg-white shadow-xl rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-6 text-center">
              Rules to Lend Money
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="font-semibold text-green-500 mr-2">1.</span> Verify borrower's credibility
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-green-500 mr-2">2.</span> Set clear terms and agreements
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-green-500 mr-2">3.</span> Keep proper records
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-green-500 mr-2">4.</span> Consider interest and risks
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-green-500 mr-2">5.</span> Have a legal contract
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-green-500 mr-2">6.</span> Be prepared for repayment delays
              </li>
            </ul>
            <NavLink
              to="/loan/provide-loan"
              className="mt-8 inline-block no-underline bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Give Loan Now
            </NavLink>
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="fixed bottom-4 right-4 z-50">
        <Chatbot />
      </div>
    </div>
    </>
  );
}

export default Loan;



