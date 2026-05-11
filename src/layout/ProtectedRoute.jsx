import { Navigate } from "react-router-dom";
import { useAdminContext } from "../context/AdminContextProvider";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAdminContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
