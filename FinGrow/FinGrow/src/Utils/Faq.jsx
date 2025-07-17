import { useState } from "react";

const faqs = [
  {
     question: "What services do you offer?",
     answer: "We provide financial planning, investment suggestions, loan options, and expense management tools to help you take control of your finances efficiently."
     },
  { 
    question: "How can I apply for a loan?",
     answer: "Applying for a loan is easy! Simply complete your KYC verification with Aadhaar and PAN card, check your credit score, and submit your loan request through our platform." 
    },
  { 
    question: "What are the eligibility criteria for a loan?",
     answer: "Loan eligibility is based on your credit score. If you have a good credit score, you can apply for loans. If your score is low, we provide financial guidance to help you improve it." 
    },
  {
     question: "How does your investment suggestion system work?", 
     answer: "Our platform analyzes your income, expenses, and savings to suggest low-risk and high-return investment opportunities tailored to your financial goals."
     },
     {
      question:"Can I track my expenses and savings?",
      answer:"Yes! Our platform provides real-time tracking of your income, fixed and variable expenses, and suggests better financial management strategies."
     },
     {
      question:" Is my financial data secure?",
      answer: "Absolutely! We use advanced encryption and security measures to ensure that your financial information remains safe and confidential."
     },
     {
      question: " What happens if my loan application is rejected?",
      answer: "If your loan application is not approved due to a low credit score, we provide guidance on improving your credit and alternative financial solutions."
     },
     {
      question: "Do you charge any fees for financial planning services?",
      answer: "Basic financial planning is free! However, for advanced investment guidance and premium services, minimal charges may apply."
     },
     {
      question: "Can I access the platform from my mobile device?",
      answer: "Yes! Our platform is mobile-friendly, and we are also working on a dedicated mobile app for a seamless experience."
     },
     {
      question: "How can I contact customer support?",
      answer: "You can reach our support team via email, chat, or phone for any queries related to loans, investments, or expense tracking."
     }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <div className="w-[80vw]">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <button 
                className="w-full text-left flex justify-between items-center text-md font-medium py-2"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl text-green-400">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
