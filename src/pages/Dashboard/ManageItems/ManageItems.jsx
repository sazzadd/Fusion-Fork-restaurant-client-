import React from 'react';
import SecTitile from '../../../components/SecTitile';

const ManageItems = () => {
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
          index
        </th>
        <th>Ieem Image</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
  
      
      {/* row 4 */}
      
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

export default ManageItems;