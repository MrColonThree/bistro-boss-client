import { Children } from "react";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = () => {
  const { user, loading } = useAuth();
  const [admin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && admin) {
    return Children;
  }
  return <Navigate to="/signIn" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
