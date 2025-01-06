import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDeleteUser = ()=> {

  }
  return (
    <div>
      <h1>all users {users.length}</h1>
      <h1></h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <button
                    className="text-red-500 bg-orange-300 p-1 rounded hover:text-red-700 transition-transform transform hover:scale-110"
                    onClick={() => handleDeleteUser(user)}
                  >
                    <FaUser className="text-2xl" />
                  </button>

                </td>
                <td>
                  <button
                    className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                    onClick={() => handleDeleteUser(user)}
                  >
                    <FaTrashAlt className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
<h1>all users </h1>;
