import React from "react";

const GettingStarted = () => {
  return (
    <div className="relative text-center py-8 md:py-16 " style={{ backgroundImage: 'url("src/assets/abcd.jpg")' }}>
      <div className="absolute inset-0 bg-[#4E342E] opacity-60 z-0"></div>

      <div className="relative z-10 space-y-3">
        <h1 className="text-2xl text-white font-bold">Ready to get started?</h1>
        <p className="text-gray-200">
          Explore millions of granites and marbles from trusted suppliers by
          signing up today!
        </p>
        <button className="bg-white text-[#4E342E] py-2 px-4 rounded shadow-md hover:bg-gray-100 transition">
          Signup
        </button>
      </div>
    </div>
  );
};

export default GettingStarted;
