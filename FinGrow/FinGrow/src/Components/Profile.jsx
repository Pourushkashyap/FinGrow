import React, { useEffect, useState } from "react";
import userPhoto from "../assets/img/mentors1.jpg";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = ({ isProfileOpen, toggleProfile, name, email }) => {
  const [user, setUser] = useState(null);
  const [timeSpentData, setTimeSpentData] = useState(null);

  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem("user")) || {};

    const userData = {
      name: name || storedUser.name || "User",
      email: email || storedUser.email || "user@example.com",
      borrowedLoans: storedUser.borrowedLoans || [
        { amount: `₹${Math.floor(Math.random() * 5000) + 100}`, status: "Approved" },
        { amount: `₹${Math.floor(Math.random() * 8000) + 500}`, status: "Pending" },
      ],
      givenLoans: storedUser.givenLoans || [
        { amount: `₹${Math.floor(Math.random() * 10000) + 500}`, status: "Completed" },
        { amount: `₹${Math.floor(Math.random() * 3000) + 200}`, status: "Pending" },
      ],
      bookedSessions: storedUser.bookedSessions || [
        { title: "Stock Investment 101", date: "2025-03-25" },
        { title: "Loan Management Strategies", date: "2025-04-02" },
      ],
      monthlyContributions: storedUser.monthlyContributions || [
        { month: "January", amount: Math.floor(Math.random() * 5000) + 100 },
        { month: "February", amount: Math.floor(Math.random() * 5000) + 100 },
        { month: "March", amount: Math.floor(Math.random() * 5000) + 100 },
      ],
      totalSessions: storedUser.totalSessions || Math.floor(Math.random() * 20) + 5,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);

    const timeData = {
      labels: ["Loans", "Financial Planning", "Goal Tracker", "Trends", "Suggestions"],
      datasets: [
        {
          label: "Time Spent (Hours)",
          data: [
            Math.floor(Math.random() * 20) + 5,
            Math.floor(Math.random() * 15) + 3,
            Math.floor(Math.random() * 10) + 2,
            Math.floor(Math.random() * 8) + 1,
            Math.floor(Math.random() * 5) + 1,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    setTimeSpentData(timeData);
  }, [name, email]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const totalLoansTaken = user && Array.isArray(user.borrowedLoans)
    ? user.borrowedLoans.reduce((total, loan) => {
        const amount = parseFloat(loan.amount.replace("₹", ""));
        return total + (isNaN(amount) ? 0 : amount);
      }, 0)
    : 0;

  const totalLoansGiven = user && Array.isArray(user.givenLoans)
    ? user.givenLoans.reduce((total, loan) => {
        const amount = parseFloat(loan.amount.replace("₹", ""));
        return total + (isNaN(amount) ? 0 : amount);
      }, 0)
    : 0;

  const totalInvested = user && Array.isArray(user.monthlyContributions)
    ? user.monthlyContributions.reduce((total, contribution) => {
        return total + (contribution.amount || 0);
      }, 0)
    : 0;

  if (!user) {
    return (
      <div className="bg-white text-gray-800">
        <div
          className={`fixed top-0 right-0 h-full w-[40%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isProfileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto p-6">
            <p className="text-gray-600">Loading user data...</p>
          </div>
        </div>
        {isProfileOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleProfile}
          ></div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isProfileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-6 text-gray-800">
          <div className="flex items-center space-x-4">
            <img
              src={userPhoto}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold flex items-center">{user.name}</h2>
              <p className="text-blue-600">{user.email}</p>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Financial Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Loans Taken:</span>
                <span className="text-red-600">₹{totalLoansTaken.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Loans Given:</span>
                <span className="text-green-600">₹{totalLoansGiven.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Invested:</span>
                <span className="text-blue-600">₹{totalInvested.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Time Spent on Website</h3>
            {timeSpentData ? (
              <div className="w-full h-64">
                <Pie
                  data={timeSpentData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => {
                            const label = context.label || "";
                            const value = context.raw || 0;
                            return `${label}: ${value} hours`;
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            ) : (
              <p className="text-gray-600">Loading time data...</p>
            )}
          </div>

          <div className="h-20"></div>

          <div className="mt-6">
            <button
              className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {isProfileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleProfile}
        ></div>
      )}
    </div>
  );
};

export default Profile;