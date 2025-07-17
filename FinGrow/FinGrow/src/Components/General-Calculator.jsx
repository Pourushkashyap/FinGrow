import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const GeneralCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [tenure, setTenure] = useState(1);
  const [tenureType, setTenureType] = useState("Yr");
  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    const months = tenureType === "Yr" ? tenure * 12 : tenure;
    const monthlyRate = interestRate / (12 * 100);

    let emiAmount = 0;
    if (monthlyRate > 0) {
      emiAmount =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    } else {
      emiAmount = loanAmount / months;
    }

    setEmi(isNaN(emiAmount) ? 0 : parseFloat(emiAmount.toFixed(0)));
    setTotalPayable(
      isNaN(emiAmount) ? 0 : parseFloat((emiAmount * months).toFixed(0))
    );
  }, [loanAmount, interestRate, tenure, tenureType]);

  const interestAmount = totalPayable - loanAmount; // Fixed calculation

  const data = [
    { name: "Principal", value: loanAmount, color: "#FFC107" },
    { name: "Interest", value: interestAmount, color: "#66BB6A" },
  ];

  return (
    <div className="flex flex-col md:flex-row p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-md space-x-6 mb-20">
      {/* Left Side - Loan Calculator */}
      <div className="w-full md:w-2/3 space-y-6">
        {/* Loan Amount */}
        <div className="mb-12">
          <div className="flex mb-5 justify-between items-center">
            <label className="font-semibold">
              Loan Amount <span className="text-yellow-500">?</span>
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
              <input
                type="text"
                className=" bg-transparent px-3 py-2 w-24 text-left outline-none"
                value={loanAmount.toLocaleString("en-IN")}
                readOnly
              />
              <span className="ml-2 bg-green-500 py-2 px-3 rounded-lg text-white">
                ₹
              </span>
            </div>
          </div>
          <input
            type="range"
            min="1000"
            max="40000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full mt-3 bg-green-500"
          />
            <div className="flex justify-between text-sm text-gray-600">
            <span>1K</span> <span>5k</span> <span>10k</span> <span>20k</span> <span>30k</span> <span>40k</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div className="mb-12">
          <div className="flex mb-5 justify-between items-center">
            <label className="font-semibold">
              Rate Of Interest <span className="text-yellow-500">?</span>
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
              <input 
                type="text"
                className="bg-transparent px-3 py-2 w-24 text-left outline-none "
                value={interestRate}
                readOnly
              />
              <span className="ml-2 bg-green-500 py-2 px-3 rounded-lg text-white">
                %
              </span>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="28.5"
            step="0.5"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full mt-3"
          />
           <div className="flex justify-between text-sm text-gray-600">
            <span>0</span> <span>5</span> <span>10</span> <span>15</span> <span>20</span> <span>25</span> <span>28.5</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <label className="font-semibold">
              Tenure <span className="text-yellow-500">?</span>
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
              <input
                type="text"
                className="bg-transparent px-3 py-2 w-16 text-left outline-none"
                value={tenure}
                readOnly
              />
              <div className="flex space-x-1 ml-1 bg-gray-200 rounded-lg p-1">
                <button
                  className={`px-2 py-1 rounded-md text-sm ${
                    tenureType === "Mo"
                      ? "bg-green-500 text-white"
                      : " text-gray-600"
                  }`}
                  onClick={() => setTenureType("Mo")}
                >
                  Mo
                </button>
                <button
                  className={`px-2 py-1 rounded-md text-sm ${
                    tenureType === "Yr"
                      ? "bg-green-500 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => setTenureType("Yr")}
                >
                  Yr
                </button>
              </div>
            </div>
          </div>
          <input
            type="range"
            min="1"
            max={tenureType === "Yr" ? "30" : "360"}
            step="1"
            value={tenure}
            onChange={(e) => setTenure(parseInt(e.target.value))}
            className="w-full mt-3"
          />
           <div className="flex justify-between text-sm text-gray-600">
            <span>1</span> <span>2</span> <span>4</span> <span>6</span> <span>8</span> <span>10</span> 
          </div>
        </div>
      </div>

      {/* Right Side - EMI Breakdown */}
      <div className="w-full md:w-1/3 space-y-6">
        <div className="bg-black text-white p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold">
            Equated Monthly Installments (EMI)
          </p>
          <p className="text-xl font-bold mt-2">
            ₹ {emi.toLocaleString("en-IN")}
          </p>
          <p className="text-sm mt-2">Total Amt Payable</p>
          <p className="text-lg font-semibold">
            ₹ {totalPayable.toLocaleString("en-IN")}
          </p>
          {/* <NavLink to={"/loan/get-loan?amount=${loanAmount}"} className="mt-4 no-underline bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
            Apply Now
          </NavLink> */}
        </div>

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
    </div>
  );
};

export default GeneralCalculator;
