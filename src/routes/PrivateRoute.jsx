import useAuth from "../hooks/useAuth.js";
import Loader from "../components/Shared/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loader />;

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default PrivateRoute;
