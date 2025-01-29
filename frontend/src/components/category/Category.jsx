import React from "react";
import ExclusiveDeals from "./ExclusiveDeals";
import AllProducts from "./AllProducts";

const Category = () => {
  return (
    <div className="pt-28 h-full bg-gradient-to-tr from-amber-700 via-gray-900 to-amber-600">
      {/* <ExclusiveDeals /> */}
      <AllProducts />
    </div>
  );
};

export default Category;
