import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoanOptions from "./LoanOptions"; // Import LoanOptions
import Chatbot from "./ChatBot";

function GetLoan() {
  const [amount, setAmount] = useState(5000);
  const [phone, setPhone] = useState("");
  const [count, setCount] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const interestRate = 0.3;
  const totalRepayment = Math.round(amount * (1 + interestRate));

  const repaymentDate = new Date();
  repaymentDate.setMonth(repaymentDate.getMonth() + 1);
  const formattedDate = repaymentDate.toLocaleDateString("en-GB");

  const handleGetCashToday = async () => {
    try {
      const phoneWithoutCountryCode = phone.replace(/^\+\d{1,2}/, "");
      console.log("Original phone:", phone);
      console.log("Phone without country code:", phoneWithoutCountryCode);

      const response = await axios.post(
        "/api/v1/users/Kycstatus",
        { phone: phoneWithoutCountryCode },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Full API Response:", response.data);
      const kycStatus = response.data.message;
      console.log("kycstatus:", kycStatus);

      if (kycStatus === "success") {
        navigate(`/LoanConfirmation`, {
          state: {
            amount,
            totalRepayment,
            repaymentDate: formattedDate,
            interestRate: `${interestRate * 100}%`,
          },
        });
      } else {
        navigate(`/Basic-verify`, {
          state: {
            amount,
            totalRepayment,
            repaymentDate: formattedDate,
            interestRate: `${interestRate * 100}%`,
            phone: phoneWithoutCountryCode,
          },
        });
      }
    } catch (error) {
      console.error("Error checking KYC status:", error.response || error.message);
      alert("Failed to check KYC status. Please try again.");
    }

    setCount(count + 1);
  };

  const handleSuggest = () => {
    setShowSuggestions(true);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen border p-5">
      {/* Main Loan Card */}
      <div className="flex flex-col md:flex-row bg-white border border-gray-100 shadow-2xl rounded-3xl overflow-hidden w-[900px] h-auto">
        <div className="p-8 md:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">
            <span className="text-blue-600">Instant</span> Cash Loans
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Get up to <span className="font-bold">₹40,000</span> for up to 180 days in just 5 minutes.
            <span className="block text-blue-600 font-semibold">First loan is FREE!</span>
          </p>
          <p className="text-black font-semibold mt-3 text-sm">
            No income proof, no references, no office visits required.
          </p>

          <div className="mt-4">
            <p className="font-bold text-lg">I am borrowing</p>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>₹1,000</span>
              <span>₹40,000</span>
            </div>
            <input
              type="range"
              min="1000"
              max="40000"
              step="500"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full mt-1 accent-blue-600 cursor-pointer"
            />
            <p className="text-right font-bold text-xl">₹{amount.toLocaleString()}</p>
          </div>

          {/* <div className="mt-4 text-gray-600 text-sm grid grid-cols-2 gap-4">
            <p className="font-bold">Total repayment</p>
            <p className="font-bold text-right">Repayment date</p>
            <p className="font-semibold text-lg text-black">₹{totalRepayment.toLocaleString()}</p>
            <p className="font-semibold text-lg text-right text-black">{formattedDate}</p>
          </div> */}
        </div>

        <div className="bg-blue-600 p-8 md:w-1/3 flex flex-col justify-center items-center rounded-r-3xl">
          <div className="w-full flex justify-center">
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(value) => setPhone("+" + value)}
              inputStyle={{
                width: "100%",
                paddingLeft: "43px",
              }}
            />
          </div>

          <p className="text-white text-xs text-center mt-2">
            Enter your mobile number
          </p>

          {/* <button
            className="mt-4 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200"
            onClick={handleGetCashToday}
          >
            GET CASH TODAY
          </button> */}

          <button
            className="mt-4 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200"
            onClick={handleSuggest}
          >
            SUGGEST
          </button>

          <p className="text-white text-xs text-center mt-3">
            By clicking "Get cash today", you agree to the
            <a href="#" className="underline"> Terms & Conditions </a> and
            <a href="#" className="underline"> Privacy Policy</a>.
          </p>
        </div>
      </div>

      {/* Suggestions Section */}
      {showSuggestions && (
        <div className="mt-6 w-[900px]">
          <LoanOptions
            loanAmount={amount}
            phone={phone}
            navigate={navigate} // Pass navigate function
            amount={amount}
            totalRepayment={totalRepayment}
            repaymentDate={repaymentDate}
            interestRate={interestRate}
            formattedDate={formattedDate}
          />
        </div>
      )}

      <Chatbot />
    </div>
  );
}

export default GetLoan;