import { useState } from "react";
import { Link } from "react-router-dom";
import Loaninfo from "./LoanInfo";
import Progressbar from "./ProgressBar";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const UserForm=()=> {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { amount, totalRepayment, repaymentDate,interestRate,phone } = location.state || {};

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [email,setemail] = useState("")
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !monthlyIncome) {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Proceed to next step
    }
  };

  const nextPageUrl = `/Pan-Verify?amount=${encodeURIComponent(amount)}&totalRepayment=${encodeURIComponent(totalRepayment)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&address=${encodeURIComponent(address)}&monthlyIncome=${encodeURIComponent(monthlyIncome)}&email=${encodeURIComponent(email)}&repaymentDate=${repaymentDate}&interestRate=${interestRate}&phone=${phone}`;

  return (
    <div className="flex flex-col items-center min-h-screen p-5">
       <Loaninfo amount={amount} totalRepayment={totalRepayment} />

      <Progressbar currentStep={1}/>

      {/* Form Section */}
      <div className="bg-white p-5 rounded-lg shadow-md w-[800px] transition-shadow hover:shadow-lg">
        <h2 className="text-center font-bold text-3xl mb-12">User Information</h2>
        <form onSubmit={handleSubmit} className="mx-[100px]">
          {[
            { label: "First Name", value: firstName, setValue: setFirstName },
            { label: "Last Name", value: lastName, setValue: setLastName },
            { label: "Address", value: address, setValue: setAddress },
            { label: "Monthly Income", value: monthlyIncome, setValue: setMonthlyIncome },
            {label: "Email",value:email,setValue:setemail}
          ].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block font-bold mb-1">{field.label}:</label>
              <input
                type="text"
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                className="w-full p-2 border-b-2 border-black outline-none"
              />
            </div>
          ))}

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-between mt-2">
          <Link to={"/loan/get-loan"}>
            <button
              type="button"
              className="bg-red-500 text-white px-10 py-4 rounded-full transition hover:bg-red-700 mt-[70px] mb-[60px]"
            >
              Back
            </button>
            </Link>
            {/* <Link to="/Pan-Verify"> */}
            <Link to={nextPageUrl}>
            <button
              type="submit"
              className="bg-blue-500 text-white px-[150px] py-4 rounded-full transition hover:bg-blue-700 mt-[70px] mb-[60px]"
            >
              Next
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default UserForm;