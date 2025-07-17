// export default LoanCalculator;
import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000);
  const [tenure, setTenure] = useState(2); // in months
  const [interestRate, setInterestRate] = useState(16);
  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);

  useEffect(() => {
    const calculatedInterest = (loanAmount * interestRate) / 100;
    const totalAmount = loanAmount + calculatedInterest;
    const monthlyEmi = totalAmount / tenure;

    setInterestAmount(calculatedInterest);
    setTotalPayable(totalAmount);
    setEmi(monthlyEmi);
  }, [loanAmount, tenure, interestRate]);

  const data = [
    { name: "Principal", value: loanAmount, color: "#FFC107" },
    { name: "Interest", value: interestAmount, color: "#1976D2" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Loan Calculator</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Side Controls */}
        <div>
          <div className="mb-4">
            <label className="block font-medium">Loan Amount (₹)</label>
            <Slider value={loanAmount} onChange={(e, val) => setLoanAmount(val)} min={1000} max={50000} step={1000} />
            <span>{loanAmount}</span>
          </div>

          <div className="mb-4">
            <label className="block font-medium">Rate of Interest (%)</label>
            <Slider value={interestRate} onChange={(e, val) => setInterestRate(val)} min={5} max={25} step={0.5} />
            <span>{interestRate} %</span>
          </div>

          <div className="mb-4">
            <label className="block font-medium">Tenure (Months)</label>
            <Slider value={tenure} onChange={(e, val) => setTenure(val)} min={2} max={24} step={1} />
            <span>{tenure} Months</span>
          </div>
        </div>

        {/* Right Side Display */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Equated Monthly Installments (EMI)</h3>
          <p className="text-xl font-bold">₹ {emi.toFixed(2)}</p>

          <h3 className="mt-4 text-lg font-semibold">Total Amount Payable</h3>
          <p className="text-xl font-bold">₹ {totalPayable.toFixed(2)}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center mt-2 bg-gray-100 mb-6">
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="value" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default LoanCalculator;
