import React from "react";
import { BiSearch } from "react-icons/bi";

const RejectedOrders = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold text-gray-800">Rejected Orders</h1>
      <div className="flex items-center gap-1 border rounded-lg w-96 px-2">
        <label htmlFor="search" className="cursor-pointer">
          <BiSearch />
        </label>
        <input
          id="search"
          type="search"
          className="bg-transparent outline-none text-sm w-full"
          placeholder="Search Name or Id"
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RejectedOrders;
