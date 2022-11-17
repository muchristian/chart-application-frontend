import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useAuth } from "../contexts/AuthContext";

const WithPrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(useAuth);
  console.log(currentUser);
  if (currentUser) {
    console.log("home");
    return children;
  }

  return <Navigate to="/login" />;
};

export default WithPrivateRoute;
