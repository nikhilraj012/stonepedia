import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/"); // Redirect to home page after 60 seconds
    }, 10000);

    return () => {
      clearInterval(timer); // Clear the countdown interval
      clearTimeout(redirectTimer); // Clear the redirect timeout
    };
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl">Thankyou for Ordering!!!</h1>
      <p className="font-semibold text-pink-600">
        <span className="font-bold text-black">Special Note :</span> Our
        professionals are here to guide you with the best quote, ensuring it
        meets your exact requirements.
      </p>
      <h1 className="font-serif text-xl">
        Our Executive will get back to you within next 24 hours.
      </h1>
      <p className="text-lg text-gray-400 mt-4">
        Redirecting to home page in <span className="font-bold text-orange-500">{countdown}</span> seconds...
      </p>
    </div>
  );
};

export default Checkout;
