import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import LiveWebcam from "../WebCamInterface/Cameras";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-white text-center">Loading...</div>; 
  }

  // If no user → redirect to login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If logged in → show child route (Layout etc.)
  return <Outlet />;
};

export default ProtectedRoute;
