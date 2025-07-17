// import mentor1 from "../assets/img/mentors1.jpg";
// import { FaStar, FaVideo, FaBullseye } from "react-icons/fa";

// const mentors = [
//   {
//     name: "Divang Sharma",
//     position: "Senior Financial Advisor @ Goldman Sachs",
//     experience: 17,
//     rating: 4.5,
//     sessions: 10,
//     about: "I am a Senior Financial Advisor at Goldman Sachs, specializing in wealth management and investment strategies...",
//     image: mentor1,
//   },
//   {
//     name: "Aman Gupta",
//     position: "Investment Banker @ JP Morgan",
//     experience: 12,
//     rating: 4.7,
//     sessions: 15,
//     about: "I specialize in mergers and acquisitions, helping clients navigate complex financial deals...",
//     image: mentor1,
//   },
//   {
//     name: "Neha Sharma",
//     position: "Financial Analyst @ Morgan Stanley",
//     experience: 9,
//     rating: 4.8,
//     sessions: 20,
//     about: "I am an expert in financial modeling and market analysis, providing insights for investment decisions...",
//     image: mentor1,
//   },
//   {
//     name: "Raj Verma",
//     position: "Wealth Manager @ CitiBank",
//     experience: 8,
//     rating: 4.6,
//     sessions: 12,
//     about: "Helping high-net-worth individuals manage their portfolios and achieve financial goals...",
//     image: mentor1,
//   },
//   {
//     name: "Priya Patel",
//     position: "Tax Consultant @ Deloitte",
//     experience: 10,
//     rating: 4.9,
//     sessions: 18,
//     about: "Specialist in tax planning and compliance, helping clients optimize their financial strategies...",
//     image: mentor1,
//   },
//   {
//     name: "Rohan Mehta",
//     position: "Risk Analyst @ HSBC",
//     experience: 7,
//     rating: 4.7,
//     sessions: 14,
//     about: "Focused on financial risk management and developing strategies to mitigate market risks...",
//     image: mentor1,
//   },
// ];

// const MentorCard = ({ mentor }) => {
//   return (
//     <div className="">
//       <div className="p-4 rounded-2xl bg-white shadow-lg flex flex-col w-[500px]">
//         <div className="flex items-start gap-4">
//           <img
//             src={mentor.image}
//             alt="Profile"
//             className="w-16 h-16 rounded-full border-2 border-gray-400"
//           />
//           <div className="flex-1">
//             <h2 className="text-lg font-semibold text-black">
//               {mentor.name} <span className="text-blue-500">✔</span>
//             </h2>
//             <p className="text-sm text-gray-600">{mentor.position}</p>
//             <p className="text-sm text-gray-600">{mentor.experience}+ Years of Experience</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2 mt-2 text-sm text-black">
//           <FaStar className="text-yellow-500" />
//           <span>{mentor.rating} Ratings</span>
//           <span className="text-green-600">• {mentor.sessions} Sessions</span>
//         </div>
//         <p className="text-gray-700 text-sm mt-2 truncate">
//           {mentor.about} <span className="text-blue-500 cursor-pointer">Read More</span>
//         </p>
//         <div className="flex items-center justify-between mt-2">
//           <button
//             onClick={() => alert("The session has successfully booked")}
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg text-sm"
//           >
//             Book 1:1 Session Now!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MentorList = () => {
//   return (
//     <div className="grid grid-cols-2 mt-4 mb-4 pl-40 max-w-[1300px] mx-auto gap-2 px-1 items-center">
//       {mentors.map((mentor, index) => (
//         <MentorCard key={index} mentor={mentor} />
//       ))}
//     </div>
//   );
// };

// export default MentorList;

import mentor1 from "../assets/img/mentors1.jpg";
import { FaStar } from "react-icons/fa";

const mentors = [
  {
    name: "Divang Sharma",
    position: "Senior Financial Advisor @ Goldman Sachs",
    experience: 17,
    rating: 4.5,
    sessions: 10,
    about: "Specializing in wealth management and investment strategies for high-net-worth clients...",
    image: mentor1,
  },
  {
    name: "Aman Gupta",
    position: "Investment Banker @ JP Morgan",
    experience: 12,
    rating: 4.7,
    sessions: 15,
    about: "Expert in mergers and acquisitions, navigating complex financial deals...",
    image: mentor1,
  },
  {
    name: "Neha Sharma",
    position: "Financial Analyst @ Morgan Stanley",
    experience: 9,
    rating: 4.8,
    sessions: 20,
    about: "Providing insights through financial modeling and market analysis...",
    image: mentor1,
  },
  {
    name: "Raj Verma",
    position: "Wealth Manager @ CitiBank",
    experience: 8,
    rating: 4.6,
    sessions: 12,
    about: "Helping individuals manage portfolios and achieve financial goals...",
    image: mentor1,
  },
  {
    name: "Priya Patel",
    position: "Tax Consultant @ Deloitte",
    experience: 10,
    rating: 4.9,
    sessions: 18,
    about: "Optimizing financial strategies through tax planning and compliance...",
    image: mentor1,
  },
  {
    name: "Rohan Mehta",
    position: "Risk Analyst @ HSBC",
    experience: 7,
    rating: 4.7,
    sessions: 14,
    about: "Developing strategies to mitigate market risks in finance...",
    image: mentor1,
  },
  {
    name: "Sanya Kapoor",
    position: "Portfolio Manager @ BlackRock",
    experience: 11,
    rating: 4.8,
    sessions: 16,
    about: "Managing investment portfolios with a focus on sustainable growth...",
    image: mentor1,
  },
  {
    name: "Vikram Singh",
    position: "Equity Research Analyst @ Barclays",
    experience: 13,
    rating: 4.6,
    sessions: 19,
    about: "Analyzing market trends to guide equity investment decisions...",
    image: mentor1,
  },
  {
    name: "Meera Desai",
    position: "Corporate Finance Lead @ PwC",
    experience: 15,
    rating: 4.9,
    sessions: 22,
    about: "Leading corporate finance initiatives and strategic planning...",
    image: mentor1,
  },
];

const MentorCard = ({ mentor }) => {
  return (
    <div className="w-full max-w-[360px] group">
      <div className="relative p-5 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-[360px] flex flex-col">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={mentor.image}
                alt={`${mentor.name}'s profile`}
                className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs">✔</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {mentor.name}
              </h2>
              <p className="text-xs text-gray-600 font-medium line-clamp-1">{mentor.position}</p>
              <p className="text-xs text-gray-500 mt-1">{mentor.experience}+ Years</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 text-xs">
            <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold text-yellow-700">{mentor.rating}</span>
            </div>
            <span className="text-gray-600">•</span>
            <span className="text-green-600 font-semibold">{mentor.sessions} Sessions</span>
          </div>

          <p className="text-gray-600 text-xs mt-3 flex-1 line-clamp-3 group-hover:text-gray-700">
            {mentor.about} 
            <span className="text-blue-500 font-medium cursor-pointer hover:underline ml-1">Read More</span>
          </p>

          <button
            onClick={() => alert("The session has successfully booked")}
            className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium text-sm
              hover:from-green-600 hover:to-emerald-700 transform hover:-translate-y-1 transition-all duration-300 shadow-md
              hover:shadow-lg"
          >
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

const MentorList = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default MentorList;