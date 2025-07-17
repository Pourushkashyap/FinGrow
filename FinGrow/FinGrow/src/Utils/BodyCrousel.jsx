import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import bodypick from '../assets/img/bodypick.jpg';
import { NavLink } from 'react-router-dom';

const FinancialWorkshopCard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "Save Smart Invest Wisely Borrow Easily";
  const words = text.split(" "); // Split into words first

  return (
    <div className="w-full h-[70vh] relative" ref={ref}>
      <div
        className="relative w-full h-full overflow-hidden transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, #00994d 70%, transparent 100%)`,
        }}
      >
        <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
          {/* Left Side Text Content */}
          <div
            className={`space-y-4 md:space-y-6 transform transition-all duration-1000 ease-out ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">
                Meet Financial goal
              </span>
              <div className="h-0.5 w-8 md:w-12 bg-gradient-to-r from-yellow-500 to-pink-500"></div>
            </div>
            <h1
              className="text-3xl mb-4 md:text-5xl font-bold text-white leading-tight"
              style={{
                position: 'relative',
                display: 'inline-block',
                transformOrigin: 'center',
              }}
            >
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block">
                  {word.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className="inline-block"
                      data-letter // Custom attribute to identify letters
                    >
                      {letter}
                    </span>
                  ))}
                  {/* Add space between words, except after the last word */}
                  {wordIndex < words.length - 1 && (
                    <span className="inline-block w-2" /> // 0.5rem spacing
                  )}
                </span>
              ))}
            </h1>
            <NavLink
              to={"/KnowMore"}
              className="px-8 py-2 no-underline md:px-6 md:py-3 bg-gradient-to-r from-yellow-500 to-yellow-200 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Know Us
            </NavLink>
          </div>

          {/* Right Side Image */}
          <div
            className={`w-full md:w-1/2 h-full transform transition-all duration-1000 ease-out ${
              inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div
              className="w-full h-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                transform: `rotateY(${scrollPosition / 50}deg)`,
              }}
            >
              <img
                src={bodypick}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialWorkshopCard;