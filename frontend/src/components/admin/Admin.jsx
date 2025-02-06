import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBoxOpen, FaHome, FaUsers } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { BiSearch } from "react-icons/bi";
import AcceptedOrders from "./AcceptedOrders";
import RejectedOrders from "./RejectedOrders";
import { Puff } from "react-loader-spinner";
import { useCart } from "../../context/CartContext";

const Admin = () => {
  const navigate = useNavigate();
  const {setOrderStatus} = useCart()
  const [activeTab, setActiveTab] = useState(() => {
    // Retrieve active tab from localStorage, default to "orders" if not found
    return localStorage.getItem("activeTab") || "orders";
  });
  const [acceptedOrders, setAcceptedOrder] = useState([]);
  const [rejectedOrders, setRejectedOrders] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

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
        console.log("Pending Orders:", ordersList);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };
    fetchOrders();
  }, []);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const filteredOrders = pendingOrders.filter(
    (order) =>
      order.customername.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toString().includes(searchQuery)
  );

  const handleAcceptOrders = async (order, product) => {
    try {
      // Create a new order object containing only the accepted product
      const newOrder = {
        customername: order.customername,
        email: order.email,
        orderId: order.orderId,
        orderDate: order.orderDate,
        orderStatus: "accepted",
        products: [{ ...product }], // Ensure only the selected product is added
      };
  
      // Add the new accepted order with only the selected product
      await addDoc(collection(db, "acceptedOrders"), newOrder);
      setOrderStatus("accepted")
  
      // Filter out the accepted product from the pending order
      const updatedProducts = order.products.filter((p) => p.title !== product.title);
  
      if (updatedProducts.length === 0) {
        // If all products have been accepted, remove the order from pendingProducts
        await deleteDoc(doc(db, "pendingProducts", order.id));
        setPendingOrders(pendingOrders.filter((o) => o.id !== order.id));
      } else {
        // Update pendingOrders state with remaining products
        setPendingOrders((prevOrders) =>
          prevOrders.map((o) =>
            o.id === order.id ? { ...o, products: updatedProducts } : o
          )
        );
      }
  
      setAcceptedOrder((prev) => [...prev, newOrder]); // Update accepted orders state
    } catch (error) {
      console.error("Error accepting product:", error);
    }
  };
  
  const handleRejectOrders = async (order, product) => {
    try {
      // Create a new order object containing only the rejected product
      const newOrder = {
        customername: order.customername,
        email: order.email,
        orderId: order.orderId,
        orderDate: order.orderDate,
        orderStatus: "rejected",
        products: [{ ...product }], // Ensure only the selected product is added
      };
  
      // Add the new rejected order with only the selected product
      await addDoc(collection(db, "rejectedOrders"), newOrder);
      setOrderStatus("rejected")
  
      // Filter out the rejected product from the pending order
      const updatedProducts = order.products.filter((p) => p.title !== product.title);
  
      if (updatedProducts.length === 0) {
        // If all products have been rejected, remove the order from pendingProducts
        await deleteDoc(doc(db, "pendingProducts", order.id));
        setPendingOrders(pendingOrders.filter((o) => o.id !== order.id));
      } else {
        // Update pendingOrders state with remaining products
        setPendingOrders((prevOrders) =>
          prevOrders.map((o) =>
            o.id === order.id ? { ...o, products: updatedProducts } : o
          )
        );
      }
  
      setRejectedOrders((prev) => [...prev, newOrder]); // Update rejected orders state
    } catch (error) {
      console.error("Error rejecting product:", error);
    }
  };
  

  // Update the active tab and store it in localStorage
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab); // Store active tab in localStorage
  };

  return (
    <div className="pt-16 flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-52 xl:w-64 bg-gray-900 text-white flex flex-col p-5">
        <h1 className="text-xl font-bold">Admin</h1>
        <nav className="mt-5 space-y-3">
          <button
            className={`flex items-center gap-2 p-2 ${
              activeTab === "dashboard" ? "bg-gray-800" : "hover:bg-gray-700"
            } rounded-lg w-full`}
            onClick={() => handleTabChange("dashboard")}
          >
            <FaBoxOpen /> Dashboard
          </button>
          <button
            className={`flex items-center gap-2 p-2 ${
              activeTab === "orders" ? "bg-gray-800" : "hover:bg-gray-700"
            } rounded-lg w-full`}
            onClick={() => handleTabChange("orders")}
          >
            <FaBoxOpen /> Orders
          </button>
          <button
            className={`flex items-center gap-2 p-2 ${
              activeTab === "acceptedOrders"
                ? "bg-gray-800"
                : "hover:bg-gray-700"
            } rounded-lg w-full`}
            onClick={() => handleTabChange("acceptedOrders")}
          >
            <FaBoxOpen /> Accepted Orders
          </button>
          <button
            className={`flex items-center gap-2 p-2 ${
              activeTab === "rejectedOrders"
                ? "bg-gray-800"
                : "hover:bg-gray-700"
            } rounded-lg w-full`}
            onClick={() => handleTabChange("rejectedOrders")}
          >
            <FaBoxOpen /> Rejected Orders
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
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
              <div className="flex items-center gap-1 border rounded-lg w-96 px-2">
                <label htmlFor="search" className="cursor-pointer">
                  <BiSearch />
                </label>
                <input
                  id="search"
                  type="search"
                  className="bg-transparent outline-none text-sm w-full"
                  placeholder="Search Name or Id"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-5 bg-white shadow rounded-lg p-5">
              {loading ? (
                <div className="flex justify-center">
                  <Puff color="#00BFFF" height={50} width={50} />
                </div>
              ) : filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border p-3 border-gray-100 shadow-md rounded-lg my-3"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <div className="w-80">
                          <p className="font-semibold">
                            Name: {order.customername}
                          </p>
                          <p>Email: {order.email}</p>
                        </div>
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
                        {order.products.length > 0 && (
                          <ul>
                            {order.products.map((product, index) => (
                              <li
                                key={index}
                                className="flex justify-between items-center py-2 bg-gray-100 my-2 rounded-lg p-3"
                              >
                                <div className="flex gap-4 ">
                                  <img
                                    src={product.imgUrl}
                                    alt={product.title}
                                    className="h-16 w-16 rounded-lg border"
                                  />
                                  <div>
                                    <p className="font-semibold">
                                      {product.title}
                                    </p>
                                    <p className="text-sm"><span className="font-semibold">ProductId :</span>  {product.productId}</p>
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
                                    onClick={() => handleAcceptOrders(order, product)}
                                  >
                                    Accept
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-red-500 text-sm py-1 text-white font-semibold px-2 rounded-lg"
                                    onClick={() => handleRejectOrders(order, product)}
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
                ))
              ) : (
                <p className="text-gray-600">No accepted orders found.</p>
              )}
            </div>
          </>
        )}

        {activeTab === "acceptedOrders" && <AcceptedOrders />}

        {activeTab === "rejectedOrders" && <RejectedOrders />}
      </main>
    </div>
  );
};

export default Admin;
