import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Orders = () => {
  const { placedOrders } = useCart();
  const navigate = useNavigate();

  return (
    <div className="py-20">
      <div className="py-10 px-20">
        {placedOrders.length > 0 ? (
          <>
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold text-gray-400">My Orders</h1>
            </div>

            <ul className="md:grid grid-cols-2 mt-5">
              {placedOrders.map((eachOrder, idx) => {
                const hasManyProducts = eachOrder.products.length > 2;
                
                // Conditionally set container classes
                const containerClasses = hasManyProducts
                  ? // If more than 2 products, show horizontal scroll with custom scrollbar
                    "scrollbar flex gap-4 overflow-x-scroll whitespace-nowrap"
                  : // If 2 or fewer, just wrap normally
                    "flex flex-wrap gap-4";

                return (
                  <li
                    key={idx}
                    className="border p-5 rounded-xl shadow-lg m-5 space-y-4"
                  >
                    {/* Order Info */}
                    <div className="flex justify-between items-start">
                      <div>
                        <p>
                          <strong>Order Id:</strong> {eachOrder.orderId}
                        </p>
                        <p>
                          <strong>Order Date:</strong> {eachOrder.orderDate}
                        </p>
                      </div>
                      <p>
                        <strong>Status:</strong> {eachOrder.orderStatus}
                      </p>
                    </div>

                    {/* Products List */}
                    <div className={containerClasses}>
                      {eachOrder.products.map((product, productIdx) => (
                        <div
                          key={productIdx}
                          // Prevent shrink when horizontal
                          className={
                            hasManyProducts
                              ? "inline-block flex-shrink-0 border rounded-lg p-3 min-w-[200px] shadow-sm"
                              : "border rounded-lg p-3 min-w-[200px] shadow-sm"
                          }
                        >
                          <img
                            src={product.imgUrl}
                            alt={product.title}
                            className="h-28 w-full object-cover rounded-md"
                          />
                          <h2 className="mt-2 text-md font-bold">
                            {product.title}
                          </h2>
                          <p>Thickness: {product.thickness}</p>
                          <p>Finish: {product.finish}</p>
                          <p>Quantity: {product.value}</p>
                        </div>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <div className="flex flex-col justify-center h-[80vh] items-center">
            <p className="text-gray-900 text-5xl font-serif font-bold">
              No Orders Found
            </p>
            <h1 className="text-2xl font-bold text-gray-600 mt-5">
              Your orders will appear here
            </h1>
            <p className="text-gray-500 mt-3">
              Explore the wide range of products and start shopping
            </p>
            <button
              className="text-xl bg-blue-400 px-5 py-2 my-5 text-white rounded-xl"
              onClick={() => navigate("/category")}
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
