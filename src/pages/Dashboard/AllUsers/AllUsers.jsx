import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
       headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });
  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "The item has been removed.", "success");
          }
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    console.log(user);
    axiosSecure
      .patch(`/users/admin/${user}`)
      .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            title: "Good job!",
            text: `${user.name} in an Admin Now`,
            icon: "success"
          });
        }
      })
      .catch((error) => {
        console.error("Error updating user role:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  // const handleMakeAdmin = user => {
  //   axiosSecure.patch(`/users/admin/${user}`)
  //   .then(res => {
  //     console.log(res.data);
  //     if(res.data.modifiedCount > 0) {
  //       refetch()
  //       Swal.fire({
  //         title: "Good job!",
  //         text: `${user.name} in an Admin Now`,
  //         icon: "success"
  //       });
  //     }
  //   })
  // }
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-5">
        <h1 className="text-2xl font-bold text-[#D1A054] mb-4 flex items-center gap-2">
          <FaUsers className="text-orange-500" />
          All Users: {users.length}
        </h1>

        {users.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-[#D1A054] text-lg font-semibold mb-2">
              No users found!
            </p>
            <FaUsers className="text-gray-300 text-6xl mx-auto" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-[#D1A054] text-white">
                  <th className="px-4 py-2 border border-gray-300">#</th>
                  <th className="px-4 py-2 border border-gray-300">Name</th>
                  <th className="px-4 py-2 border border-gray-300">Email</th>
                  <th className="px-4 py-2 border border-gray-300">Role</th>
                  <th className="px-4 py-2 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user._id}
                    className={`${
                      index % 2 === 0 ? "bg-[#FFF7E7]" : "bg-white"
                    } hover:bg-orange-50 transition`}
                  >
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {user.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {user.email}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      {user.role === "admin" ? (
                        <span className="text-[#D1A054] font-semibold">
                          Admin
                        </span>
                      ) : (
                        <button
                          className="text-white bg-orange-500 px-3 py-1 rounded hover:bg-orange-600 transition"
                          onClick={() => handleMakeAdmin(user._id)}
                        >
                          <FaUser className="text-xl" />
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      <button
                        className="text-red-500 hover:text-red-700 transition"
                        onClick={() => handleDeleteUser(user)}
                      >
                        <FaTrashAlt className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
<h1>all users </h1>;
