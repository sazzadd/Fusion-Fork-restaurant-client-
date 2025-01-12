import React from "react";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaCommentDots,
  FaConciergeBell,
  FaHome,
  FaShoppingCart,
  FaTasks,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-orange-400 shadow-lg">
        <ul className="menu p-4 space-y-4 text-white">
          {isAdmin ? (
            <>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/adminHome"
                  className="flex items-center gap-3"
                >
                  <FaHome />
                  <span>Admin Home</span>
                </NavLink>
              </li>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center gap-3"
                >
                  <FaUtensils />
                  <span>Add Items</span>
                </NavLink>
              </li>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex items-center gap-3"
                >
                  <FaTasks />
                  <span>Manage Items</span>
                </NavLink>
              </li>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/bookings"
                  className="flex items-center gap-3"
                >
                  <FaClipboardList />
                  <span>Manage Booking</span>
                </NavLink>
              </li>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/users"
                  className="flex items-center gap-3"
                >
                  <FaUsers />
                  <span>All Users</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/userHome"
                  className="flex items-center gap-3"
                >
                  <FaHome />
                  <span>User Home</span>
                </NavLink>
              </li>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="flex items-center gap-3"
                >
                  <FaCalendarAlt />
                  <span>Reservation</span>
                </NavLink>
              </li>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center gap-3"
                >
                  <FaShoppingCart />
                  <span>My Cart</span>
                </NavLink>
              </li>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/review"
                  className="flex items-center gap-3"
                >
                  <FaCommentDots />
                  <span>Add Review</span>
                </NavLink>
              </li>
              <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
                <NavLink
                  to="/dashboard/bookings"
                  className="flex items-center gap-3"
                >
                  <FaConciergeBell />
                  <span>My Bookings</span>
                </NavLink>
              </li>
            </>
          )}
          {/* Shared */}

          <div className="divider"></div>
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/" className="flex items-center gap-3">
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="hover:bg-orange-500 rounded-lg transition-all duration-300">
            <NavLink to="/menu" className="flex items-center gap-3">
              <FaUtensils />
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
