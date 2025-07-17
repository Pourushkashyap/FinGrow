import React from 'react';
import { useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const LoanConfirmation = () => {
  // Sample loan data (you can fetch this dynamically based on user input and CIBIL score)
  const location = useLocation();
//   const [searchParams] = useSearchParams();
//   const amount = searchParams.get("amount");
//   const totalRepayment = searchParams.get("totalRepayment");
//   const repaymentDate = searchParams.get("repaymentDate")
const { amount, totalRepayment, repaymentDate,interestRate } = location.state || {};
//   const loanDetails = {
//     amountBorrowed: 5000, // ₹1,000 as selected in the image
//     totalRepayment: 6500, // ₹6,500 as shown in the image
//     repaymentDate: '03/05/2025', // Repayment date from the image
//     interestRate: '150%', // Example interest rate (adjust based on your logic)
//   };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
          Loan Confirmation
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Congratulations! Your KYC is successfully verified. Please review your loan details below.
        </p>

        {/* Loan Details Section */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Amount Borrowed:</span>
            <span className="font-semibold">₹{amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Total Repayment:</span>
            <span className="font-semibold">₹{totalRepayment}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Interest Rate:</span>
            <span className="font-semibold">{interestRate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Repayment Date:</span>
            <span className="font-semibold">{repaymentDate}</span>
          </div>
        </div>

        {/* CIBIL Score Info (Optional) */}
        <div className="mt-6 text-center">
          <p className="text-green-600 font-semibold">
            Your CIBIL score is eligible for this loan!
          </p>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            By clicking "Confirm Loan," you agree to the{' '}
            <a href="#" className="text-blue-600 underline">
              terms and conditions
            </a>{' '}
            and authorize the disbursement of funds.
          </p>
        </div>

        {/* Confirm Button */}
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition duration-200"
          onClick={() => alert('Loan disbursed successfully!')}
        >
          Confirm Loan
        </button>
      </div>
    </div>
  );
};

export default LoanConfirmation;