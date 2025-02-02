import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./../components/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
