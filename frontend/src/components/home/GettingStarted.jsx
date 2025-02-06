import React from "react";

const GettingStarted = () => {
  return (
    <div className="relative text-center py-12 px-3 md:py-16 xl:py-24 " style={{ backgroundImage: 'url("src/assets/abcd.jpg")' }}>
      <div className="absolute inset-0 bg-[#4E342E] opacity-60 z-0"></div>

      <div className="relative z-10 space-y-3 xl:space-y-5">
        <h1 className="text-2xl xl:text-5xl text-white font-serif font-bold">Ready to get started?</h1>
        <p className="text-gray-200 xl:text-xl">
          Explore millions of granites and marbles from trusted suppliers by
          signing up today!!
        </p>
        <button className="bg-[#FBAD30] text-white font-semibold py-1 px-4 xl:px-6 xl:py-2 rounded shadow-lg transition">
          Signup
        </button>
      </div>
    </div>
  );
};

export default GettingStarted;
