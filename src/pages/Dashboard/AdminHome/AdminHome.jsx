import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3>
        hi welcome back<span>{user.displayName}</span>{" "}
      </h3>
    </div>
  );
};

export default AdminHome;
