import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const navList = (
    <>
      <li className="hover:text-yellow-400">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-yellow-400">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="hover:text-yellow-400">
        <Link to="/order">Order food</Link>
      </li>
      {user && isAdmin && (
        <li className="hover:text-yellow-400">
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li className="hover:text-yellow-400">
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      <li className="hover:text-yellow-400">
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-30 bg-black text-white bg-opacity-40">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navList}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Fusion Fork
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
          <div className="relative mr-3">
            <div className="relative">
              <Link to="/dashboard/cart">
                <button className="btn rounded-full bg-green-700 text-white p-3">
                  <BsCart4 className="text-white text-2xl" />{" "}
                  {/* Increase icon size here */}
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-110 transition-all duration-300"
              >
                <div className="w-13 rounded-full border-2 border-yellow-400">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" />
                  ) : (
                    <img
                      alt="Default Profile"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  )}
                </div>
              </div>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || "User"}
              ></div>
              <ul
                tabIndex="0"
                className="menu menu-sm z-[1000] absolute dropdown-content bg-white rounded-lg mt-3 w-48 p-2 shadow-lg transition-all duration-300"
              >
                <li className="font-semibold text-gray-900">
                  {user.displayName}
                </li>
                <li className="font-semibold text-gray-500">{user.email}</li>
                {/* <>{navLinks}</> */}
                <li className="font-semibold">
                  <button
                    onClick={logOut}
                    className="w-full py-2 px-4 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-3 flex">
              <Link
                to="/login"
                className="py-2 px-4 text-sm font-medium text-gray-800 bg-yellow-400 rounded-lg shadow-md border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
