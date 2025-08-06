import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Heart,
  ShoppingCart,
  Bell,
  User,
  Menu,
} from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#fdf6e9] text-[#2f5130] shadow-sm text-sm font-medium relative">
        {/* Top Row */}
        <div className="flex justify-between items-center px-6 py-2 relative">
          {/* Left: Phone */}
          <div className="flex items-center gap-2">
            
            <span className="text-[15px] font-medium"></span>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold tracking-widest mt-2">
            AMRUTAM
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between px-6 py-3 relative mt-2">
          {/* Navigation Links Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 mt-2">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/doctors" className="hover:underline">Find Doctors</Link>
            <Link to="/lab-tests" className="hover:underline">Lab Tests</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/forum" className="hover:underline">Forum</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 ml-auto">
            <Heart
              className="w-6 h-6 hover:text-[#1f3321] hover:scale-110 transition duration-200 cursor-pointer"
              aria-label="Wishlist"
            />
            <ShoppingCart
              className="w-6 h-6 hover:text-[#1f3321] hover:scale-110 transition duration-200 cursor-pointer"
              aria-label="Cart"
            />
            <Bell
              className="w-6 h-6 hover:text-[#1f3321] hover:scale-110 transition duration-200 cursor-pointer"
              aria-label="Notifications"
            />
            {/* ✅ Redirects to /login page */}
            <Link to="/login" aria-label="Login">
              <User className="w-6 h-6 hover:text-[#1f3321] hover:scale-110 transition duration-200 cursor-pointer" />
            </Link>
            <Menu
              className="w-4 h-4 hover:text-[#1f3321] hover:scale-110 transition duration-200 cursor-pointer"
              aria-label="Menu"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
