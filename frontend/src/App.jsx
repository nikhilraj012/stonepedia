import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Category from "./components/category/Category";
import Admin from "./components/admin/Admin";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import BecomeASupplier from "./components/navbar/BecomeASupplier";
import ProductDetails from "./components/category/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

const AppWrapper = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <Navbar />
      )}

      <ToastContainer />

      <Routes>
        <Route
          path="/signup"
          element={
            <ProtectedRoute restricted={true}>
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute restricted={true}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute restricted={false}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category"
          element={
            <ProtectedRoute restricted={false}>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-details/:id"
          element={
            <ProtectedRoute restricted={false}>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute restricted={false}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/becomeSupplier"
          element={
            <ProtectedRoute restricted={false}>
              <BecomeASupplier />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute restricted={false}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <AppWrapper />
      </Router>
    </CartProvider>
  );
}

export default App;
