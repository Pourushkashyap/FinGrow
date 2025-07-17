import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const KnowMore = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            About <span className="text-yellow-500">FinGrow</span>
          </h1>
          <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto leading-relaxed">
            FinGrow is your financial guru, offering smart investment insights, instant loans, and personalized financial planning.
          </p>
        </motion.div>

        {/* Why Choose FinGrow Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">Why Choose FinGrow?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: "Instant Loan Approval with minimal documentation.", icon: "💸" },
              { text: "Investment Suggestions based on your financial goals.", icon: "📈" },
              { text: "Expense Tracker to manage your monthly budget efficiently.", icon: "📊" },
              { text: "Credit Score Analysis to help you improve your financial health.", icon: "⭐" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mr-4">{item.icon}</span>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">How It Works?</h2>
          <div className="mt-6 space-y-4">
            {[
              { step: "Sign up and complete KYC verification.", icon: "📝" },
              { step: "Explore loan options and investment suggestions.", icon: "🔍" },
              { step: "Track your expenses and get financial advice.", icon: "💡" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="flex items-center p-4 bg-green-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xl font-bold text-green-600 mr-4">{index + 1}.</span>
                <span className="text-2xl mr-4">{item.icon}</span>
                <p className="text-gray-600">{item.step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">Join Us Today!</h2>
          <p className="text-gray-600 mt-3 max-w-md mx-auto leading-relaxed">
            Take control of your financial future with FinGrow. Sign up now and get started on a journey to smart financial management.
          </p>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <NavLink
              to="/Signup" // Changed from /KnowMore/Signup to /Signup
              className="inline-block mt-6 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-colors no-underline"
            >
              Sign Up
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KnowMore;