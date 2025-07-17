// import { useState, useEffect } from "react";
// import FinlogixWidget from "../Utils/Graphs";

// const FinancialDashboard = () => {
//   const [salary, setSalary] = useState("");
//   const [houseRent, setHouseRent] = useState("");
//   const [electricityBill, setElectricityBill] = useState("");
//   const [groceryExpenses, setGroceryExpenses] = useState("");
//   const [otherExpenses, setOtherExpenses] = useState("");
//   const [totalSpending, setTotalSpending] = useState(0);
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setTotalSpending(
//       Number(houseRent) + Number(electricityBill) + Number(groceryExpenses) + Number(otherExpenses)
//     );
//   }, [houseRent, electricityBill, groceryExpenses, otherExpenses]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const spendings = [Number(houseRent), Number(electricityBill), Number(groceryExpenses), Number(otherExpenses)];

//     try {
//       const response = await fetch("http://localhost:5000/financial_dashboard", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ salary: Number(salary), spendings }),
//       });

//       if (!response.ok) throw new Error("Failed to fetch dashboard data.");

//       const data = await response.json();
//       setDashboardData(data);
//     } catch (error) {
//       console.error("Error:", error);
//       setDashboardData({ error: "Error fetching dashboard data. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">AI-Driven Financial Dashboard</h2>

//         {/* Input Form */}
//         <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
//           <div>
//             <label className="font-medium text-gray-700 block mb-2">Monthly Salary (₹):</label>
//             <input
//               type="number"
//               value={salary}
//               onChange={(e) => setSalary(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="font-medium text-gray-700 block mb-2">House Rent (₹):</label>
//             <input
//               type="number"
//               value={houseRent}
//               onChange={(e) => setHouseRent(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="font-medium text-gray-700 block mb-2">Electricity Bill (₹):</label>
//             <input
//               type="number"
//               value={electricityBill}
//               onChange={(e) => setElectricityBill(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="font-medium text-gray-700 block mb-2">Grocery Expenses (₹):</label>
//             <input
//               type="number"
//               value={groceryExpenses}
//               onChange={(e) => setGroceryExpenses(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="font-medium text-gray-700 block mb-2">Other Expenses (₹):</label>
//             <input
//               type="number"
//               value={otherExpenses}
//               onChange={(e) => setOtherExpenses(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="font-medium text-gray-700 block mb-2">Total Spending (₹):</label>
//             <input
//               type="number"
//               value={totalSpending}
//               readOnly
//               className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
//             />
//           </div>
//           <button
//             type="submit"
//             className="col-span-full p-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition text-lg"
//             disabled={loading}
//           >
//             {loading ? "Loading Dashboard..." : "Generate Dashboard"}
//           </button>
//         </form>

//         {/* Current Savings (Outside the Box) */}
//         {dashboardData && (
//           <div className="mb-8 text-center">
//             <h3 className="text-2xl font-semibold text-gray-700">Current Savings</h3>
//             {dashboardData.error ? (
//               <p className="text-red-600 text-xl">{dashboardData.error}</p>
//             ) : (
//               <p className="text-4xl text-green-600 font-bold mt-2">₹{dashboardData.savings}</p>
//             )}
//           </div>
//         )}

//         {/* Dashboard Display */}
//         {dashboardData && !dashboardData.error && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* AI Suggestions */}
//             <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col">
//               <h3 className="text-xl font-semibold text-gray-700 mb-4">AI Suggestions</h3>
//               {dashboardData.suggestions ? (
//                 <ol className="list-decimal list-inside text-gray-700 flex-1">
//                   {dashboardData.suggestions
//                     .split(". ")
//                     .filter((s) => s.trim())
//                     .map((suggestion, index) => (
//                       <li key={index} className="mb-3 text-base leading-relaxed">{suggestion.trim()}</li>
//                     ))}
//                 </ol>
//               ) : (
//                 <p className="text-gray-500 flex-1">Suggestions not available.</p>
//               )}
//             </div>

//             {/* Financial Analysis */}
//             <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col">
//               <h3 className="text-xl font-semibold text-gray-700 mb-4">Financial Analysis</h3>
//               {dashboardData.predicted_savings && dashboardData.analysis ? (
//                 <div className="flex-1">
//                   <p className="text-gray-700 text-lg mb-4">
//                     Predicted Savings Next Month: <span className="font-semibold">{dashboardData.predicted_savings}</span>
//                   </p>
//                   <ol className="list-decimal list-inside text-gray-700">
//                     {dashboardData.analysis
//                       .split(". ")
//                       .filter((s) => s.trim())
//                       .map((insight, index) => (
//                         <li key={index} className="mb-3 text-base leading-relaxed">{insight.trim()}</li>
//                       ))}
//                   </ol>
//                 </div>
//               ) : (
//                 <p className="text-gray-500 flex-1">No analysis available.</p>
//               )}
//             </div>

//             {/* Investment Recommendations */}
//             <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col lg:col-span-2">
//               <h3 className="text-xl font-semibold text-gray-700 mb-4">Investment Recommendations</h3>
//               {dashboardData.stocks && dashboardData.stocks.length > 0 ? (
//                 <ul className="list-disc list-inside text-gray-700 flex-1">
//                   {dashboardData.stocks.map((stock, index) => (
//                     <li key={index} className="mb-3 text-base leading-relaxed">{stock}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 flex-1">No recommendations available.</p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FinancialDashboard;
import { useState, useEffect } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import SimpleMouseFollower from "./SimpleMouseFollower";

const FinancialDashboard = () => {
  const [salary, setSalary] = useState("");
  const [houseRent, setHouseRent] = useState("");
  const [electricityBill, setElectricityBill] = useState("");
  const [groceryExpenses, setGroceryExpenses] = useState("");
  const [otherExpenses, setOtherExpenses] = useState("");
  const [totalSpending, setTotalSpending] = useState(0);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotalSpending(
      Number(houseRent) + Number(electricityBill) + Number(groceryExpenses) + Number(otherExpenses)
    );
  }, [houseRent, electricityBill, groceryExpenses, otherExpenses]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const spendings = [Number(houseRent), Number(electricityBill), Number(groceryExpenses), Number(otherExpenses)];

    try {
      const response = await fetch("http://localhost:5000/financial_dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ salary: Number(salary), spendings }),
      });

      if (!response.ok) throw new Error("Failed to fetch dashboard data.");

      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error("Error:", error);
      setDashboardData({ error: "Error fetching dashboard data. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <SimpleMouseFollower/>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-green-700 text-white py-6 text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          AI-Driven Dashboard
        </h1>
        <p className="mt-2 text-sm">
          Your intelligent financial companion that analyzes your income and expenses to provide personalized investment recommendations and savings strategies.
        </p>
      </header>

      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Input Form */}
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-white p-6 rounded-xl shadow-lg" onSubmit={handleSubmit}>
            <div className="col-span-full mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Financial Information</h2>
              <p className="text-sm text-gray-600">Enter your monthly income and expenses to get started</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Monthly Salary:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></span>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full pl-8 p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">House Rent:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></span>
                <input
                  type="number"
                  value={houseRent}
                  onChange={(e) => setHouseRent(e.target.value)}
                  className="w-full pl-8 p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Electricity Bill:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 mx-2 transform -translate-y-1/2 text-gray-500"></span>
                <input
                  type="number"
                  value={electricityBill}
                  onChange={(e) => setElectricityBill(e.target.value)}
                  className="w-full pl-8 p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Grocery Expenses:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></span>
                <input
                  type="number"
                  value={groceryExpenses}
                  onChange={(e) => setGroceryExpenses(e.target.value)}
                  className="w-full pl-8 p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Other Expenses:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></span>
                <input
                  type="number"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(e.target.value)}
                  className="w-full pl-8 p-3 bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Total Spending:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></span>
                <input
                  type="number"
                  value={totalSpending}
                  readOnly
                  className="w-full pl-8 p-3 bg-gray-100 rounded-md border border-gray-200 font-semibold text-gray-800"
                />
              </div>
            </div>
            <button
              type="submit"
              className="col-span-full p-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition flex items-center justify-center"
              disabled={loading}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {loading ? "Loading Dashboard..." : "Generate AI Dashboard"}
            </button>
          </form>

          {/* Current Savings (Outside the Box) */}
          {dashboardData && (
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-700">Current Savings</h3>
              {dashboardData.error ? (
                <p className="text-red-600 text-xl">{dashboardData.error}</p>
              ) : (
                <p className="text-4xl text-green-500 font-bold mt-2">₹{dashboardData.savings}</p>
              )}
            </div>
          )}

          {/* Dashboard Display */}
          {dashboardData && !dashboardData.error && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI Suggestions */}
              <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">AI Suggestions</h3>
                {dashboardData.suggestions ? (
                  <ul className="flex-1">
                    {dashboardData.suggestions
                      .split(". ")
                      .filter((s) => s.trim())
                      .map((suggestion, index) => (
                        <li
                          key={index}
                          className="mb-4 pl-8 pr-4 py-3 bg-gradient-to-r from-green-400/10 to-white rounded-lg border border-green-400/20 relative animate-fade-in group"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="absolute left-2 top-3 text-green-400">
                            <svg className="w-5 h-5 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-700 font-medium">
                            <span className="text-green-400 mr-2">→</span>
                            {suggestion.trim()}
                          </p>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 flex-1">Suggestions not available.</p>
                )}
              </div>

              {/* Financial Analysis */}
              <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Financial Analysis</h3>
                {dashboardData.predicted_savings && dashboardData.analysis ? (
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg mb-4">
                      Predicted Savings Next Month: <span className="font-semibold">{dashboardData.predicted_savings}</span>
                    </p>
                    <ul>
                      {dashboardData.analysis
                        .split(". ")
                        .filter((s) => s.trim())
                        .map((insight, index) => (
                          <li
                            key={index}
                            className="mb-4 pl-8 pr-4 py-3 bg-gradient-to-r from-green-400/10 to-white rounded-lg border border-green-400/20 relative animate-fade-in group"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="absolute left-2 top-3 text-green-400">
                              <svg className="w-5 h-5 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-gray-700 font-medium">
                              <span className="text-green-400 mr-2">→</span>
                              {insight.trim()}
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-gray-500 flex-1">No analysis available.</p>
                )}
              </div>

              {/* Investment Recommendations */}
              <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col lg:col-span-2">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Investment Recommendations</h3>
                {dashboardData.stocks && dashboardData.stocks.length > 0 ? (
                  <ul className="flex-1">
                    {dashboardData.stocks.map((stock, index) => (
                      <li
                        key={index}
                        className="mb-4 pl-8 pr-4 py-3 bg-gradient-to-r from-green-400/10 to-white rounded-lg border border-green-400/20 relative animate-fade-in group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="absolute left-2 top-3 text-green-400">
                          <svg className="w-5 h-5 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium">
                          <span className="text-green-400 mr-2">→</span>
                          {stock}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 flex-1">No recommendations available.</p>
                )}
              </div>

              {/* Stock Charts */}
              {dashboardData.stock_symbols && dashboardData.stock_symbols.length > 0 && (
                <div className="p-6 bg-white rounded-lg shadow-lg lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Stock Charts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dashboardData.stock_symbols.map((symbol, index) => (
                      <div key={index} className="w-full h-[400px]">
                        <AdvancedRealTimeChart
                          symbol={symbol}
                          theme="light"
                          interval="D"
                          autosize
                          allow_symbol_change={true}
                          container_id={`tradingview_chart_${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p className="text-sm flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Your personal AI-powered financial advisor for smarter investing and saving
        </p>
      </footer>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FinancialDashboard;