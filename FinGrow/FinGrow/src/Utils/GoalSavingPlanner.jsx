import { FaArrowUp, FaArrowDown, FaChartBar } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import SimpleMouseFollower from "../Components/SimpleMouseFollower";

// Sample data for the dashboard
const financialData = {
  loansGiven: 12000.50, // Total amount the user has lent to others
  loansTaken: 8500.75, // Total amount the user has borrowed from others
  stocksEarnings: 4500.25,
  profitLoss: 1200.50,
};

// Distribution of the loans given by the user across borrower risk levels
const loansGivenDistribution = [
  { name: "Low Risk", value: 60, color: "#A7F3D0" }, // Light green for Low Risk
  { name: "Medium Risk", value: 25, color: "#34D399" }, // Medium green for Medium Risk
  { name: "High Risk", value: 15, color: "#059669" }, // Dark green for High Risk
];

const profitLossData = [
  { name: "Stocks", budget: 3000, actual: 4500 },
  { name: "Bonds", budget: 2000, actual: 1800 },
  { name: "Loan", budget: 4000, actual: 3800 },
  { name: "Crypto", budget: 1500, actual: 1200 },
];

// Pie Chart Component for Loans Given Distribution by Risk Level
const PieChartComponent = ({ data }) => {
  return (
    <div className="flex  items-center gap-6">
      <SimpleMouseFollower/>
      <ResponsiveContainer width={250} height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-gray-800">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Bar Chart Component
const BarChartComponent = ({ data }) => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#D1FAE5" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#059669" }} />
          <YAxis
            tickFormatter={(value) => `₹${value}`}
            domain={[0, 5000]}
            ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            tick={{ fontSize: 12, fill: "#059669" }}
          />
          <Tooltip
            formatter={(value) => `₹${value}`}
            contentStyle={{
              backgroundColor: "#F0FDF4",
              border: "1px solid #34D399",
              borderRadius: "4px",
            }}
            labelStyle={{ color: "#059669" }}
          />
          <Legend
            wrapperStyle={{ fontSize: 14, paddingTop: 10 }}
            formatter={(value) => (
              <span className="text-gray-600">{value}</span>
            )}
          />
          <Bar dataKey="budget" name="Budget" fill="#A7F3D0" barSize={20} />
          <Bar dataKey="actual" name="Actual" fill="#34D399" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Financial Dashboard Component
const FinancialDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Financial Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full">
            <FaArrowUp className="text-green-600" />
          </div>
          <div>
            <h2 className="text-sm text-gray-600">Loans Given</h2>
            <p className="text-2xl font-semibold text-gray-800">
            ₹{financialData.loansGiven.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">Total amount you lent to others</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-3 bg-red-100 rounded-full">
            <FaArrowDown className="text-red-600" />
          </div>
          <div>
            <h2 className="text-sm text-gray-600">Loans Taken</h2>
            <p className="text-2xl font-semibold text-gray-800">
            ₹{financialData.loansTaken.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">Total amount you borrowed</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <FaChartBar className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-sm text-gray-600">Stocks Investments</h2>
            <p className="text-2xl font-semibold text-gray-800">
            ₹{financialData.stocksEarnings.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">Money made in stocks</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
          <div
            className={`p-3 rounded-full ${
              financialData.profitLoss >= 0 ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {financialData.profitLoss >= 0 ? (
              <FaArrowUp className="text-green-600" />
            ) : (
              <FaArrowDown className="text-red-600" />
            )}
          </div>
          <div>
            <h2 className="text-sm text-gray-600">Profit/Loss</h2>
            <p
              className={`text-2xl font-semibold ${
                financialData.profitLoss >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {financialData.profitLoss >= 0 ? "+" : "-"}₹
              {Math.abs(financialData.profitLoss).toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">Net financial outcome</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Loans Given Distribution
          </h2>
          <PieChartComponent data={loansGivenDistribution} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Profit vs Loss
          </h2>
          <BarChartComponent data={profitLossData} />
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;