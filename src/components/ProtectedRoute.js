import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const ProtectedRoute = ({ children }) => {
  const auth = isAuthenticated();
  return auth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
