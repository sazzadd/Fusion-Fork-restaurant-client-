import React from "react";
import SecTitile from "../../../components/SecTitile";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();
  const  handleDelete = (item )=> {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        }
      });
  }
  return (
   
    <div>
      <SecTitile subHeading="Huury Up" heading="MANAGE ALL ITEMS"></SecTitile>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>index</label>
              </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                <button
                    className="text-orange-400 hover:text-orange-600 transition-transform transform hover:scale-110"
                    // onClick={() => handleDelete(item)}
                  >
                    <FaEdit className="text-2xl" />
                    {/* <FaTrashAlt className="text-2xl" /> */}
                  </button>
                </th>

                <td>
                  <button
                    className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrashAlt className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
