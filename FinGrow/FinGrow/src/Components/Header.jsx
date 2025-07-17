import logo from "../assets/img/Fingrow.png";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ toggleProfile, isProfileOpen }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  const INITIAL_HEIGHT = 128;

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShrink = scrollPosition > 50;
  const headerHeight = shouldShrink
    ? Math.max(INITIAL_HEIGHT * 0.7, INITIAL_HEIGHT - scrollPosition / 10)
    : INITIAL_HEIGHT;

  const handlePersonIconClick = () => {
    if (isAuthenticated) {
      if (toggleProfile) {
        toggleProfile();
      } else {
        navigate("/profile");
      }
    }
  };

  const links = [
    { name: "Home", route: "/" },
    { name: "Loan", route: "/loan" },
    { name: "Trends", route: "/trends" },
    { name: "Financial Planning", route: "/FinancialFreedom" },
    { name: "Dashboard", route: "/GoalSavingPlanner" },
    { name: "Suggestion", route: "/suggestion" },
    ...(isAuthenticated ? [] : [{ name: "Sign-Up", route: "/signup" }]),
    {name:"Wallet",route:"/Wallet"}
  ];

  return (
    <div
      className={`flex justify-between shadow-lg items-center transition-all duration-300 fixed right-0 top-0 left-0 z-50 bg-white`}
      style={{
        height: `${headerHeight}px`,
        minHeight: `${INITIAL_HEIGHT * 0.7}px`,
      }}
    >
      <div className="pl-4 flex items-center h-full">
        <img
          className="transition-all duration-300 object-contain"
          src={logo}
          alt="logo"
          style={{
            height: `${headerHeight}px`,
            width: "auto",
            transform: shouldShrink ? "scale(0.85)" : "scale(1)",
            maxHeight: `${INITIAL_HEIGHT}px`,
          }}
        />
      </div>
      <nav className="flex list-none gap-12 items-center justify-center text-xl pr-12">
        {links.map((link, index) => (
          <NavLink
            to={link.route}
            key={index}
            className={({ isActive }) =>
              `no-underline ${isActive ? "text-yellow-500 font-bold" : "text-black"}`
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            {link.name}
          </NavLink>
        ))}
        {isAuthenticated && (
          <div
            className="cursor-pointer flex items-center justify-center w-10 h-10 bg-yellow-200 rounded-full hover:bg-yellow-500 transition-colors"
            onClick={handlePersonIconClick}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;