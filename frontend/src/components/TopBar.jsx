import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [user, setUser] = useState(null);
  

  // Toggle phone text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPhone((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // Optionally redirect after logout
    // navigate("/login");
  };

  return (
    <div className="h-[50px] bg-[#2d2d2d] text-white px-4 py-2 text-sm flex items-center justify-between relative">
      
      {/* Left side - Call Button */}
      <div className="flex-shrink-0">
        <button className="bg-green-700 hover:bg-green-500 text-white px-3 py-1 rounded transition-all duration-300 ease-in-out overflow-hidden relative flex items-center justify-start">
          <span className="z-10 ml-2 mr-2 text-xl">📞</span>
          <div className="relative overflow-hidden">
            <span
              className={`block transition-opacity duration-500 ease-in-out ${
                showPhone ? "opacity-100" : "opacity-0"
              }`}
            >
              +91 9826352321
            </span>
            <span
              className={`block transition-opacity duration-500 ease-in-out absolute top-0 left-0 ${
                showPhone ? "opacity-0" : "opacity-100"
              }`}
            >
              Try Free Call Now
            </span>
          </div>
        </button>
      </div>

      {/* Center - Message */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <p>Your first 5 minutes instant call is free</p>
      </div>

      {/* Right side - Login/Welcome/Logout */}
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span className="text-sm font-medium">
              Welcome, {user.name?.split(" ")[0] || "User"}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopBar;
