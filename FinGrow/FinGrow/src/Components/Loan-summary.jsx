import { useState } from "react";
import { Link } from "react-router-dom";
import Loaninfo from "./LoanInfo";
import Progressbar from "./ProgressBar";
import { useSearchParams } from "react-router-dom";
// import { Route, Routes, Link } from "react-router-dom";
// import UserForm from './UserForm'; // Import the UserForm component
// import AdharCard from './adhar-card'; // Import the adhar-card component
// import BankDetails from './BankDetails'; // Import the BankDetails component
// import "./Loan.css";

const LoanForm =()=> {

  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount");
  const totalRepayment = searchParams.get("totalRepayment");
  const firstName = searchParams.get("firstName")
  const lastName = searchParams.get("lastName")
  const address = searchParams.get("address")
  const monthlyIncome = searchParams.get("monthlyIncome")
  const email = searchParams.get("email")
  const interestRate = searchParams.get("interestRate")
  const phone = searchParams.get("phone")
  const repaymentDate = searchParams.get("repaymentDate")
 

  const [pan, setPan] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pan) {
      setError("Please enter your PAN number");
    } else {
      setError("");
      // Proceed to next step
    }
  };

  const nextPageUrl = `/Aadhar-verify?amount=${encodeURIComponent(amount)}&totalRepayment=${encodeURIComponent(totalRepayment)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&address=${encodeURIComponent(address)}&monthlyIncome=${encodeURIComponent(monthlyIncome)}&email=${encodeURIComponent(email)}&pan=${encodeURIComponent(pan)}&repaymentDate=${repaymentDate}&interestRate=${interestRate}&phone=${phone}`;


  return (
    <div className="flex flex-col items-center min-h-screen p-5">
      <Loaninfo amount={amount} totalRepayment={totalRepayment} />

      <Progressbar currentStep={2}/>

      {/* Form Section */}
      <div className="bg-white p-5 rounded-lg shadow-md w-[800px] hover:shadow-lg">
        <h2 className="text-center font-bold text-2xl mb-12">Pan</h2>
        <form onSubmit={handleSubmit} className="mx-24">
          <label className="block font-bold mb-1">Pan Id:*</label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            className="w-full p-2 border-b-2 border-black outline-none"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <div className="flex justify-between mt-3">
          <Link to={`/Basic-verify?amount=${amount}&totalRepayment=${totalRepayment}`}>      
              <button type="button" className="bg-red-500 text-white py-3 px-8 rounded-full transition duration-300 hover:bg-red-700">
                Back
              </button>
              </Link>
            {/* <Link to={"/Aadhar-verify"}> */}
            <Link to={nextPageUrl}>      
            <button type="submit" className="bg-blue-500 text-white py-3 px-16 rounded-full transition duration-300 hover:bg-blue-700">
              Next
            </button>
            </Link>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default LoanForm;
