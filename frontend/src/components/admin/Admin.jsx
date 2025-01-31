import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBoxOpen, FaHome, FaUsers } from "react-icons/fa";
import { LuCircleArrowDown } from "react-icons/lu";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("orders");
  const [expandedRow, setExpandedRow] = useState(null);

  const orders = [
    {
      id: 10523,
      userName : "Micheal",
      email : "micheal@gmail.com",
      orderDate: "2025-01-12",
      status: "Approved",
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/Lalitpur-Grey-Limestone-01-.png",
      title: "Lalitpur Grey Limestone",
      quantity: 1000,
      thickness: "20mm",
      finish: "Honed",
    },
    {
      id: 12568,
      userName : "John Doe",
      email : "John@gmail.com",
      orderDate: "2025-01-12",
      status: "In Progress",
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/kurnool-grey-limestone-01-.png",
      title: "Kurnool Grey Limestone",
      quantity: 2000,
      thickness: "20mm",
      finish: "Honed",
    },
  ];

  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      orders: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      orders: 3,
    },
  ];

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
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-3">Product</th>
                    <th className="p-3">Order Id</th>
                    <th className="p-3">Status</th>
                    {/* <th className="p-3">Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <React.Fragment key={order.id}>
                      <tr className="border-t">
                        <td className="p-3 flex items-center gap-3">
                          <img
                            src={order.imgUrl}
                            alt={order.title}
                            className="h-12 w-12 rounded-lg border"
                          />
                          <span>{order.title}</span>
                        </td>
                        <td className="p-3">{order.id}</td>
                        <td className="p-3 font-semibold text-blue-600">
                          {order.status}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="mx-5"
                            onClick={() => toggleExpand(order.id)}
                          >
                            <LuCircleArrowDown
                              size={20}
                              className={`transform transition-transform duration-300 ${
                                expandedRow === order.id ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </td>
                      </tr>

                      {/* Expanded Row with Smooth Animation */}
                      <tr>
                        <td colSpan="4">
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-linear ${
                              expandedRow === order.id
                                ? "max-h-60 p-3"
                                : "max-h-0 p-0"
                            }`}
                          >
                            {expandedRow === order.id && (
                              <div className="flex justify-between items-center border-t pt-2 mx-5">
                                <div>
                                  <p className="font-semibold">
                                    Customer Name:{" "}
                                    <span className="text-gray-700">
                                      {order.userName}
                                    </span>
                                  </p>
                                  <p className="font-semibold">
                                    Email:{" "}
                                    <span className="text-gray-700">
                                      {order.email}
                                    </span>
                                  </p>
                                  <p className="font-semibold">
                                    Order Date:{" "}
                                    <span className="text-gray-700">
                                      {order.orderDate}
                                    </span>
                                  </p>
                                </div>
                                <div>
                                  <p className="font-semibold">
                                    Thickness:{" "}
                                    <span className="text-gray-700">
                                      {order.thickness}
                                    </span>
                                  </p>
                                  <p className="font-semibold">
                                    Finishing:{" "}
                                    <span className="text-gray-700">
                                      {order.finish}
                                    </span>
                                  </p>
                                  <p className="font-semibold">
                                    Quantity:{" "}
                                    <span className="text-gray-700">
                                      {order.quantity}
                                    </span>
                                  </p>
                                </div>
                                <div className="flex gap-2 ">
                                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
                                    Approve
                                  </button>
                                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
                                    Reject
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* {activeTab === "customers" && (
          <>
            <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
            <div className="mt-5 bg-white shadow rounded-lg p-5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Orders</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{customer.name}</td>
                      <td className="p-3">{customer.email}</td>
                      <td className="p-3">{customer.orders}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )} */}
      </main>
    </div>
  );
};

export default Admin;
