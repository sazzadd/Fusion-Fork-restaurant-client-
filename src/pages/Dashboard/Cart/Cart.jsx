import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import SecTitile from "./../../../components/SecTitile";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#FF6B35",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "The item has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header Section */}
      <SecTitile
        heading="MANAGE ALL BOOKINGS"
        subHeading="At a Glance!"
      ></SecTitile>

      {/* Cart Summary */}
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div className="text-2xl font-semibold text-gray-700">
          Total Orders: <span className="text-[#D1A054]">{cart.length}</span>
        </div>
        <div className="text-2xl font-semibold text-gray-700">
          Total Price:{" "}
          <span className="text-orange-600">${totalPrice.toFixed(2)}</span>
        </div>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button
              disabled={!cart.length}
              className="btn bg-[#D1A054] hover:bg-orange-500 text-white py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
            >
              Pay Now
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="btn bg-[#D1A054] hover:bg-orange-500 text-white py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Pay Now
          </button>
        )}
      </div>

      {/* Cart Items */}
      {cart.length > 0 ? (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="table-auto w-full text-center bg-white border rounded-lg">
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th className="py-4">#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-100 transition-colors duration-300"
                >
                  <td className="py-4">{index + 1}</td>
                  <td className="flex items-center gap-4 px-4 py-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="font-medium text-gray-800">{item.name}</div>
                  </td>
                  <td className="text-orange-600 font-medium">
                    ${item.price.toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrashAlt className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-xl font-medium text-gray-600">
            Your cart is empty! Add items to see them here. 😊
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
