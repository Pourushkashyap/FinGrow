import React from "react";
import missionimg from '../assets/img/missionimg.jpg'
import valueimg from '../assets/img/valueimg.jpg'
import visionimg from '../assets/img/visionimg.jpg'
import iconmission  from '../assets/img/iconmission.svg'
import iconvision from '../assets/img/iconvision.svg'
import iconvalue from '../assets/img/iconvalue.svg'




const Card = ({ icon, title, description, image }) => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg bg-white text-black group transition-all duration-300">
      {/* Text Content Section */}
      <div className="relative p-6 transition-all duration-500 overflow-hidden">
        {/* Animated green overlay only for text area */}
        <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-t-xl" />

        {/* Content on top */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="p-2 inline-block rounded bg-green-500 group-hover:bg-black transition-colors duration-300">
            <img src={icon} alt="icon" className="w-6 h-6" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold mt-4 group-hover:text-white transition-colors duration-300">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Image Section (no hover effect here) */}
      <img src={image} alt={title} className="w-full object-cover h-56" />
    </div>
  );
};

const FinancialSuccess = () => {
  return (
    <div className=" min-h-screen py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black mb-12 text-center">
        Financial success
      </h1>
      <div className="grid md:grid-cols-3 gap-6 justify-center">
        <Card
          icon={iconmission}
          title="Our Mission"
          description="To empower individuals and businesses with innovative financial strategies that ensure long-term stability and growth."
          image={missionimg}
        />
        <Card
          icon={iconvision}
          title="Our Vision"
          description="To become the most trusted financial partner, revolutionizing how people manage, grow, and secure their wealth."
          image={visionimg}
        />
        <Card
          icon={iconvalue}
          title="Our Value"
          description="Integrity, innovation, and client-first commitment — the core principles that drive every decision we make."
          image={valueimg}
        />
      </div>
    </div>
  );
};

export default FinancialSuccess;
