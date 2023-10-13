import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLogin = localStorage.getItem("isLoggin");

  if (!isLogin) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
