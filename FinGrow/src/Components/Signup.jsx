import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Profile from "./Profile"; // Import your Profile component
import Home from "./Home";
const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if the user is already logged in
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        if (password.current.value !== confirmPassword.current.value) {
          setError("Passwords do not match");
          return;
        }
        const response = await axios.post("/api/v1/users/register", {
          username: name.current?.value,
          email: email.current?.value,
          password: password.current?.value,
        });

        // Save authentication state after successful signup
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true); // Update state to trigger rendering of Profile
        alert("Signup successful!");
      } else {
        const response = await axios.post("/api/v1/users/login", {
          email: email.current?.value,
          password: password.current?.value,
        });

        // Save authentication state after successful sign-in
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
        alert("Signin successful!");
      }
    } catch (err) {
      console.log("Error:", err.response ? err.response.data : err.message);
      setError("Something went wrong");
      alert("Something went wrong");
    }
  };

  if (isAuthenticated) {
    return <Home />; // Show Profile page if authenticated
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r border">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white shadow-2xl rounded-lg p-6"
      >
        <motion.h2
          className="text-2xl font-bold text-center text-gray-800 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </motion.h2>

        <motion.p className="text-gray-600 text-center mb-4">
          {isSignUp ? "Sign up to get started!" : "Sign in to continue"}
        </motion.p>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                ref={name}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2"
                required
              />
            </div>
          )}

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              ref={email}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              ref={password}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2"
              required
            />
          </div>

          {isSignUp && (
            <div>
              <label className="text-gray-700 font-medium">Confirm Password</label>
              <input
                type="password"
                ref={confirmPassword}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2"
                required
              />
            </div>
          )}

          {error && <p className="text-red-500 text-center">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </motion.button>
        </form>

        <motion.p
          className="text-center text-gray-600 mt-4 cursor-pointer"
          whileHover={{ scale: 1.05, color: "#2563EB" }}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;