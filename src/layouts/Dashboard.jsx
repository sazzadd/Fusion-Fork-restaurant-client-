import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUtensils, FaShoppingCart, FaStar, FaBook } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-orange-400 shadow-lg">
        <ul className="menu p-4 space-y-4 text-white">
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/dashboard/userHome" className="flex items-center gap-3">
              <FaHome />
              <span>User Home</span>
            </NavLink>
          </li>
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/dashboard/reservation" className="flex items-center gap-3">
              <FaUtensils />
              <span>Reservation</span>
            </NavLink>
          </li>
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/dashboard/cart" className="flex items-center gap-3">
              <FaShoppingCart />
              <span>My Cart</span>
            </NavLink>
          </li>
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/dashboard/review" className="flex items-center gap-3">
              <FaStar />
              <span>Add Review</span>
            </NavLink>
          </li>
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/dashboard/bookings" className="flex items-center gap-3">
              <FaBook />
              <span>My Bookings</span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/" className="flex items-center gap-3">
              <FaBook />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/menu" className="flex items-center gap-3">
              <FaBook />
              <span>Menu</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Right side and main content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
