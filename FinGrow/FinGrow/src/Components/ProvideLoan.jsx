import { useState, useEffect } from "react";
import axios from "axios";
import Chatbot from "./ChatBot";

const ProvideLoan = () => {
  const [name, setName] = useState("Pourush");
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [amountError, setAmountError] = useState(null);
  const [interestError, setInterestError] = useState(null);

  const MAX_AMOUNT = 40000;

  const getMaxAllowedInterest = (loanAmount) => {
    if (loanAmount < 10000) return 12;
    else if (loanAmount >= 10000 && loanAmount <= 24999) return 11;
    else if (loanAmount >= 25000 && loanAmount <= 39999) return 10;
    else return 9;
  };

  useEffect(() => {
    const loanAmount = Number(amount);
    const enteredInterest = Number(interest);

    if (!isNaN(loanAmount) && loanAmount > 0) {
      if (loanAmount > MAX_AMOUNT) {
        setAmountError("Maximum allowed amount is ₹40,000.");
      } else {
        setAmountError(null);
      }

      const maxAllowed = getMaxAllowedInterest(loanAmount);
      if (!isNaN(enteredInterest) && enteredInterest > maxAllowed) {
        setInterestError(
          `Interest rate cannot exceed ${maxAllowed}% for ₹${loanAmount.toLocaleString()}.`
        );
      } else {
        setInterestError(null);
      }
    } else {
      setAmountError(null);
      setInterestError(null);
    }
  }, [amount, interest]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loanAmount = Number(amount);
    const enteredInterest = Number(interest);
    const maxAllowedInterest = getMaxAllowedInterest(loanAmount);

    if (loanAmount > MAX_AMOUNT) {
      setError("Amount exceeds the maximum allowed limit of ₹40,000.");
      return;
    }

    if (enteredInterest > maxAllowedInterest) {
      setError(
        `Interest rate cannot exceed ${maxAllowedInterest}% for ₹${loanAmount.toLocaleString()}.`
      );
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("/api/v1/users/createoffer", {
        name,
        loanAmount,
        interestRate: enteredInterest,
      });

      setSuccess("Loan offer created successfully!");
      setName("");
      setAmount("");
      setInterest("");
      console.log("API Response:", response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to create loan offer. Please try again."
      );
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Offer a Loan
        </h2>

        {success && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
            {success}
          </div>
        )}
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Loan Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                amountError
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-400"
              }`}
              required
            />
            {amountError && (
              <p className="text-red-500 text-sm mt-1">{amountError}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="Enter interest rate"
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                interestError
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-400"
              }`}
              required
            />
            {interestError && (
              <p className="text-red-500 text-sm mt-1">{interestError}</p>
            )}
            <small className="text-gray-500">
              Max allowed for this amount:{" "}
              {amount && !amountError && `${getMaxAllowedInterest(Number(amount))}%`}
            </small>
          </div>

          <button
            type="submit"
            disabled={loading || !!amountError || !!interestError}
            className={`w-full p-2 rounded-lg text-white transition ${
              loading || amountError || interestError
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Submitting..." : "Submit Loan Offer"}
          </button>
        </form>
      </div>
      <Chatbot />
    </div>
  );
};

export default ProvideLoan;
