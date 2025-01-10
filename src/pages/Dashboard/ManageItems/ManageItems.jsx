import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SecTitile from "../../../components/SecTitile";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d1a054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "The item has been removed.", "success");
        } else {
          Swal.fire("Error!", "Failed to delete the item.", "error");
        }
      }
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <SecTitile subHeading="Hurry Up" heading="Manage All Items" />

      {/* Table Container */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white p-6">
        <table className="table-auto w-full text-left">
          {/* Table Header */}
          <thead className="bg-[#d1a054] text-white">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Item Image</th>
              <th className="py-3 px-4">Item Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4 text-center">Edit</th>
              <th className="py-3 px-4 text-center">Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {menu.map((item, index) => (
              <tr
                key={item._id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-4 px-4">{index + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded h-12 w-12">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">{item.name}</td>
                <td className="py-4 px-4">${item.price.toFixed(2)}</td>
                <td className="py-4 px-4 text-center">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="text-[#d1a054] hover:text-orange-600 transition-transform transform hover:scale-110">
                      <FaEdit className="text-2xl" />
                    </button>
                  </Link>
                </td>
                <td className="py-4 px-4 text-center">
                  <button
                    className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-110"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrashAlt className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* If no items available */}
        {menu.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageItems;
