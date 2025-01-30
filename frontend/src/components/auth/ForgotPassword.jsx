import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.", {
        position: "top-center",
        autoClose: 3000,
      });
      setEmail("");
    } catch (error) {
      toast.error("Failed to send reset email. Check your email address.", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/stone.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Form Container */}
      <div className="relative bg-white bg-opacity-50 shadow-lg p-6 rounded-lg w-96 text-center z-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Reset Your Password
        </h1>
        <p className="text-sm text-gray-700 mb-4">
          Enter your email address and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleResetPassword} className="space-y-3">
          <input
            type="email"
            className="border w-full p-2 rounded-md outline-none"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-4">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
