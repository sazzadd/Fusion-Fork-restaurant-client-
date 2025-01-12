import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import SecTitile from "../../../components/SecTitile";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="bg-gradient-to-r from-white via-[#f9f9f9] to-[#f4f4f4] p-10 rounded-lg shadow-2xl">
      <SecTitile 
        heading="Payment History" 
        subHeading="Your Transactions at a Glance"
      ></SecTitile>

      <div className="text-center my-6">
        <h1 className="text-3xl font-bold text-[#D1A054]">
          Total Payments: {payments?.length}
        </h1>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full text-left bg-white border border-gray-200">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th className="py-4 px-6 text-center text-lg font-medium">#</th>
              <th className="py-4 px-6 text-lg font-medium">Price</th>
              <th className="py-4 px-6 text-lg font-medium">Transaction ID</th>
              <th className="py-4 px-6 text-lg font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No Payment History Found
                </td>
              </tr>
            ) : (
              payments.map((payment, index) => (
                <tr
                  key={payment._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-[#fdf2e9] transition duration-300`}
                >
                  <td className="py-4 px-6 text-center font-semibold text-gray-700">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-800">
                    ${payment.price}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    {payment.transactionId}
                  </td>
                  <td
                    className={`py-4 px-6 text-center font-bold ${
                      payment.status === "Success"
                        ? "text-green-600"
                        : "text-yellow-500"
                    }`}
                  >
                    {payment.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
