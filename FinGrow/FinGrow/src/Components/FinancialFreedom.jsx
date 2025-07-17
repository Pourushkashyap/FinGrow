import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import FinancialAdvise from "./FinancialAdvise";
import SimpleMouseFollower from "./SimpleMouseFollower";



const financialPoints = [
  {
    title: "Financial Security",
    description: "Having savings ensures you have funds available for emergencies and unforeseen expenses.",
  },
  {
    title: "Peace of Mind",
    description: "Knowing you have a financial cushion reduces stress and anxiety about the future.",
  },
  {
    title: "Helps in Achieving Financial Goals",
    description: "Financial planning allows you to save for goals like buying a house, education, or retirement.",
  },
  {
    title: "Emergency Preparedness",
    description: "Savings act as a backup during job loss, medical emergencies, or unexpected events.",
  },
  {
    title: "Avoiding Debt Traps",
    description: "With proper planning, you rely less on loans and credit cards, reducing interest burdens.",
  },
  {
    title: "Retirement Planning",
    description: "Financial planning helps you build a retirement fund, ensuring a comfortable life post-retirement.",
  },
  {
    title: "Wealth Creation",
    description: "Regular savings and smart investments help in long-term wealth accumulation.",
  },
  {
    title: "Managing Inflation",
    description: "Proper savings and investment strategies help your money grow and beat inflation.",
  },
  {
    title: "Achieving Financial Independence",
    description: "With disciplined savings, you can reach a stage where you don’t have to depend on a paycheck.",
  },
  {
    title: "Planning for Major Life Events",
    description: "Weddings, vacations, home purchases, and other milestones are easier to manage with planned finances.",
  },
];



const FinancialFreedom = () => {
  return (
    <>
    <FinancialAdvise/>
    
    <div className="flex flex-col md:flex-row items-center justify-center  p-6 md:p-12 my-4 max-w-5xl mx-auto ">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start  mr-6  md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Financial freedom starts here.
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Aiming for early retirement, a dream home, or a comfortable future?
          Get a personalised financial plan and transform your finances.
        </p>
        <NavLink to={"/MentorCard"} className="bg-green-600 no-underline text-white flex items-center gap-2 px-6 py-3 rounded-lg mt-6 text-lg font-semibold hover:bg-green-700 transition">
          Personalise your Financial Plan <FaArrowRight />
        </NavLink>
       
      </div>


      {/* Right Section (YouTube Video) */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative  rounded-xl w-[500px] h-80 flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7oj6gpAbYgw"
            title="Gravitas Plus | Financial Literacy: The need of the hour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
      
    </div>
    <div className="max-w-5xl mx-auto p-6  ">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">💰 Financial Planning Benefits</h2>
      <ul className="space-y-4">
        {financialPoints.map((point, index) => (
          <li key={index} className="p-7 hover:scale-95 duration-100 shadow-sm hover:shadow-md transition">
            <span className="text-2xl font-semibold text-gray-600">{point.title}: </span>
            <span className="text-lg text-gray-800">{point.description}</span>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default FinancialFreedom;
