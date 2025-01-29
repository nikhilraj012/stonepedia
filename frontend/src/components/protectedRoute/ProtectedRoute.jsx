import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, restricted }) => {
  const authToken = localStorage.getItem("authToken");
  const userEmail = localStorage.getItem("userEmail");

  // Define admin emails
  const adminEmails = ["admin@stonepedia.com", "superuser@stonepedia.com"];

  // If the user is logged in as an admin and tries to access the home route, redirect them to admin
  if (authToken && adminEmails.includes(userEmail) && window.location.pathname === "/") {
    return <Navigate to="/admin" replace />;
  }

  // If a non-admin user is logged in and tries to access the admin route, redirect them to home
  if (authToken && !adminEmails.includes(userEmail) && window.location.pathname === "/admin") {
    return <Navigate to="/" replace />;
  }

  // If restricted and the user is logged in, redirect them to home (e.g., login or signup)
  if (restricted && authToken) {
    return <Navigate to="/" replace />;
  }

  // If the user is not authenticated and trying to access a protected route, redirect them to login
  if (!authToken && !restricted) {
    return <Navigate to="/login" replace />;
  }

  return children; // If none of the above conditions are met, render the children (protected content)
};

export default ProtectedRoute;
