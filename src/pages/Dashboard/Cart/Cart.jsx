import React from "react";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="flex flex-wrap justify-evenly items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Total Orders: {cart.length}
        </h2>
        <h2 className="text-4xl font-bold text-gray-800">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
        <button className="btn bg-[#D1A054] hover:bg-[#b8833b] text-white">
          Pay Now
        </button>
      </div>

      {/* Cart Table */}
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Rows */}
              {cart.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-800 font-medium">
                    ${item.price.toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost text-red-500 hover:text-red-700"
                      onClick={() => console.log("Delete item", item.id)}
                    >
                      <FaTrashAlt className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-600">
            Your cart is empty! Start adding items to see them here. 😊
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
