// import React from 'react';
// import { motion } from 'framer-motion';

// import phoneimage from "../assets/img/phoneimage.jpg";
import { NavLink } from 'react-router-dom';
// import FinancialWorkshopCard from '../Utils/BodyCrousel';


// // Slide-in effect for images only
// const slideUpVariants = {
//   hidden: { opacity: 0, y: 80 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.2, ease: "easeOut" }
//   }
// };

// // Letter-by-letter animation for text
// const letterVariants = {
//   hidden: { opacity: 0 },
//   visible: (index) => ({
//     opacity: 1,
//     transition: { delay: index * 0.05 } // Delay each letter for effect
//   })
// };

// // Animated text component (keeps letter animation)
// const AnimatedText = ({ text }) => (
//   <motion.h1
//     className="text-4xl font-bold text-gray-900 leading-snug"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: false, amount: 0.3 }}
//   >
//     {text.split("").map((char, index) => (
//       <motion.span key={index} custom={index} variants={letterVariants}>
//         {char}
//       </motion.span>
//     ))}
//   </motion.h1>
// );

// const Body = () => {


//   return (
//     <>
//       <div>
//         <FinancialWorkshopCard />

//       </div>
//       <div className="max-w-6xl  mx-auto px-6 md:px-12 mt-16 space-y-16">

//         {/* Section 1 */}
//         <div className="flex flex-col md:flex-row items-center gap-16">
//           <motion.div
//             className="md:w-1/2 flex justify-start w-full"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             variants={slideUpVariants}
//           >
//             <img src={img3d} className="mix-blend-multiply w-96 h-96 rounded-md object-cover" alt="3D Illustration" />
//           </motion.div>
//           <div className="md:w-1/2 md:text-left space-y-4">
//             <AnimatedText text="Empowering Your Financial Growth!" />
//             <p className="text-gray-600 text-lg">
//               Take control of your financial future with smart investment insights with AI, instant loan options, and expert financial planning.
//             </p>
//             <NavLink to={"/KnowMore"} className="inline-block no-underline bg-green-500 hover:bg-green-700 text-white font-semibold px-10 py-2 rounded-2xl text-lg transition-all">
//               Know Us
//             </NavLink>
//           </div>
//         </div>

//         {/* Section 2 */}
//         <div className="flex flex-col md:flex-row-reverse items-center">
//           <motion.div
//             className="md:w-1/2 flex justify-end"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             variants={slideUpVariants}
//           >
//             <img src={bodyimg2} className="w-96 h-96 rounded-md object-cover" alt="Financial Planning" />
//           </motion.div>
//           <div className="md:w-1/2 md:text-left space-y-4">
//             <AnimatedText text="Personalized Financial Planning Made Easy!" />
//             <p className="text-gray-600 text-lg">
//               Financial success starts with a solid plan! Track your income, manage expenses, and discover smart saving opportunities.
//             </p>
//             <NavLink to={"/FinancialFreedom"} className="inline-block no-underline bg-green-500 hover:bg-green-700 text-white font-semibold px-10 py-2 rounded-2xl text-lg transition-all">
//               Know More
//             </NavLink>
//           </div>
//         </div>

//         {/* Section 3 */}
//         <div className="flex flex-col md:flex-row items-center gap-16">
//           <motion.div
//             className="md:w-1/2 flex justify-left"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             variants={slideUpVariants}
//           >
//             <img src={phoneimage} className="relative left-10 w-96 h-[400px] rounded-md object-cover" alt="Loan Offers" />
//           </motion.div>
//           <div className="md:w-1/2 md:text-left space-y-4">
//             <AnimatedText text="Getting Started with a Personalized Financial Plan" />
//             <ol className="mt-6 space-y-6 text-left">
//               {[
//                 "Let us know your financials",
//                 "Define your key life goals",
//                 "Get a plan to achieve your life goals",
//                 "Act & course correct when needed"
//               ].map((step, index) => (
//                 <li key={index} className="flex items-start gap-4">
//                   <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">{index + 1}</span>
//                   <p className="font-semibold text-gray-900 text-lg">{step}</p>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Body;


// import img3d from '../assets/img/img3d.jpeg';
// import bodyimg2 from '../assets/img/bodyimg2.jpeg';



// another test 



import React from 'react';
import { motion } from 'framer-motion';
import img3d from '../assets/img/img3d.jpeg';
import bodyimg2 from "../assets/img/bodyimg2.jpeg";
import phoneimage from "../assets/img/phoneimage.jpg";
// import { NavLink } from 'react-router-dom';
import FinancialWorkshopCard from '../Utils/BodyCrousel';

// Slide-in effect for images only
const slideUpVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

// Letter-by-letter animation for text
const letterVariants = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    transition: { delay: index * 0.05 }
  })
};

// Updated AnimatedText component with consistent word spacing
const AnimatedText = ({ text }) => {
  // Split text into words and preserve spaces
  const words = text.split(" ");
  
  return (
    <motion.h1
      className="text-4xl font-bold text-gray-900 leading-snug"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      data-animated-text
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              custom={wordIndex * word.length + charIndex} // Unique index for animation
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
          {/* Add space after each word except the last */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block w-2" /> // Consistent 0.5rem (8px) space
          )}
        </span>
      ))}
    </motion.h1>
  );
};

const Body = () => {
  return (
    <>
      <div>
        <FinancialWorkshopCard />
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16 space-y-16">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="md:w-1/2 flex justify-start w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideUpVariants}
          >
            <img src={img3d} className="mix-blend-multiply w-96 h-96 rounded-md object-cover" alt="3D Illustration" />
          </motion.div>
          <div className="md:w-1/2 md:text-left space-y-4">
            <AnimatedText text="Empowering Your Financial Growth!" />
            <p className="text-gray-600 text-lg">
              Take control of your financial future with smart investment insights with AI, instant loan options, and expert financial planning.
            </p>
            <NavLink to={"/KnowMore"} className="inline-block no-underline bg-green-500 hover:bg-green-700 text-white font-semibold px-10 py-2 rounded-2xl text-lg transition-all">
              Know Us
            </NavLink>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <motion.div
            className="md:w-1/2 flex justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideUpVariants}
          >
            <img src={bodyimg2} className="w-96 h-96 rounded-md object-cover" alt="Financial Planning" />
          </motion.div>
          <div className="md:w-1/2 md:text-left space-y-4">
            <AnimatedText text="Personalized Financial Planning Made Easy!" />
            <p className="text-gray-600 text-lg">
              Financial success starts with a solid plan! Track your income, manage expenses, and discover smart saving opportunities.
            </p>
            <NavLink to={"/FinancialFreedom"} className="inline-block no-underline bg-green-500 hover:bg-green-700 text-white font-semibold px-10 py-2 rounded-2xl text-lg transition-all">
              Know More
            </NavLink>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="md:w-1/2 flex justify-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideUpVariants}
          >
            <img src={phoneimage} className="relative left-10 w-96 h-[400px] rounded-md object-cover" alt="Loan Offers" />
          </motion.div>
          <div className="md:w-1/2 md:text-left space-y-4">
            <AnimatedText text="Getting Started with a Personalized Financial Plan" />
            <ol className="mt-6 space-y-6 text-left">
              {[
                "Let us know your financials",
                "Define your key life goals",
                "Get a plan to achieve your life goals",
                "Act & course correct when needed"
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">{index + 1}</span>
                  <p className="font-semibold text-gray-900 text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;


