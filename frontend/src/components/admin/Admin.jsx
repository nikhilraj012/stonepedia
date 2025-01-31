import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBoxOpen, FaHome, FaUsers } from "react-icons/fa";
// import { LuCircleArrowDown } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("orders");
  const [expandedRow, setExpandedRow] = useState(null);
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const pendingOrdersCollection = collection(db, "pendingProducts");
        const ordersSnapshot = await getDocs(pendingOrdersCollection);
        const ordersList = ordersSnapshot.docs.map((doc) => {
          // Add the doc.id as a property for each order object
          return { id: doc.id, ...doc.data() };
        });
        setPendingOrders(ordersList);
        console.log("Pending Orders:", ordersList); // Log the orders to the console
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };
    fetchOrders();
  }, []);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="pt-16 flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-40 xl:w-64 bg-gray-900 text-white flex flex-col p-5">
        <h1 className="text-xl font-bold">Admin</h1>
        <nav className="mt-5 space-y-3">
          <button
            className={`flex items-center gap-2 p-2 ${
              activeTab === "dashboard" ? "bg-gray-800" : "hover:bg-gray-700"
            } rounded-lg w-full`}
            onClick={() => setActiveTab("dashboard")}
          >
            <FaBoxOpen /> Dashboard
          </button>
          <button
            className={`flex items-center gap-2 p-2 ${
              activeTab === "orders" ? "bg-gray-800" : "hover:bg-gray-700"
            } rounded-lg w-full`}
            onClick={() => setActiveTab("orders")}
          >
            <FaBoxOpen /> Orders
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        {activeTab === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <div className="mt-5 bg-white shadow rounded-lg p-5">
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome Admin
              </h1>
              <p className="text-gray-700 mt-2">
                Here you can manage orders and customers.
              </p>
            </div>
          </>
        )}

        {activeTab === "orders" && (
          <>
            <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
            <div className="mt-5 bg-white shadow rounded-lg p-5">
              {pendingOrders.map((order) => (
                <div key={order.id} className="border-b border-gray-200 py-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">
                        Name: {order.customername}
                      </p>
                      <p>Email: {order.email}</p>
                    </div>
                    <div>
                      <h1 className="font-semibold">
                        Order Id: {order.orderId}
                      </h1>
                      <p>Date & Time: {order.orderDate}</p>
                    </div>
                    <button
                      className="text-sm font-semibold text-gray-800"
                      onClick={() => toggleExpand(order.id)}
                    >
                      <MdKeyboardArrowDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          expandedRow === order.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {expandedRow === order.id && (
                    <div className="rounded-lg">
                      {/* <h2 className="font-bold">Ordered Products:</h2> */}
                      {order.products.length > 0 && (
                        <ul className="">
                          {order.products.map((product, index) => (
                            <li
                              key={index}
                              className="flex justify-between  items-center py-2 bg-gray-100 my-2 rounded-lg p-3"
                            >
                              <div className="flex gap-4 items-center">
                                <img
                                  src={product.imgUrl}
                                  alt={product.title}
                                  className="h-16 w-16 rounded-lg border"
                                />
                                <div>
                                  <p className="font-semibold">
                                    {product.title}
                                  </p>
                                  <p className="text-gray-700 text-sm">
                                    <span className="font-semibold text-gray-950">
                                      Thickness:{" "}
                                    </span>
                                    {product.thickness}mm,
                                    <span className="font-semibold text-gray-950">
                                      Finish:{" "}
                                    </span>
                                    {product.finish},
                                  </p>
                                  <p className="text-gray-700 text-sm">
                                    <span className="font-semibold text-gray-950">
                                      Value:{" "}
                                    </span>
                                    {product.value}
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-2">
                                <button
                                  type="button"
                                  className="bg-green-500 text-sm py-1 text-white font-semibold px-2 rounded-lg"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="bg-red-500 text-sm py-1 text-white font-semibold px-2 rounded-lg"
                                >
                                  Reject
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Admin;
