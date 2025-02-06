import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Orders = () => {
  const navigate = useNavigate();
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state

  useEffect(() => {
    // Listen for auth state changes (user login/logout)
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, subscribe to that user's Orders subcollection
        const ordersRef = collection(db, "Users", user.uid, "Orders");

        // Listen for real-time updates from that subcollection
        const unsubscribeOrders = onSnapshot(ordersRef, (snapshot) => {
          const ordersArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setUserOrders(ordersArray);
          setLoading(false); // data fetched, stop loading
        });

        // Cleanup Firestore subscription when user logs out or component unmounts
        return () => unsubscribeOrders();
      } else {
        // If user is not logged in, or there's no user data
        setUserOrders([]);
        setLoading(false); // done checking, stop loading
      }
    });

    // Cleanup the onAuthStateChanged listener on unmount
    return () => unsubscribeAuth();
  }, []);


  if (loading) {
    // 1. Still loading => show spinner or loading text
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading orders...</p>
        {/* Or put a spinner here */}
      </div>
    );
  }

  // 2. Not loading, but userOrders might be empty => show "No Orders Found"
  if (userOrders.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
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
    );
  }

  // 3. Not loading, and we have orders => display them
  return (
    <div className="py-20">
      <div className="py-10 px-20">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-gray-400">My Orders</h1>
        </div>

        <ul className="md:grid grid-cols-2 mt-5">
          {userOrders.map((eachOrder, idx) => {
            const products = eachOrder.products || [];
            const hasManyProducts = products.length > 2;

            const containerClasses = hasManyProducts
              ? "scrollbar flex gap-4 overflow-x-scroll whitespace-nowrap"
              : "flex flex-wrap gap-4";

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
                  {products.map((product, productIdx) => (
                    <div
                      key={productIdx}
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
      </div>
    </div>
  );
};

export default Orders;
