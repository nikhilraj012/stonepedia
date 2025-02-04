import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { db } from "../firebase/firebase";
import { Puff } from "react-loader-spinner";
import { MdKeyboardArrowDown } from "react-icons/md";

const AcceptedOrders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    const fetchAcceptedOrders = async () => {
      try {
        const acceptedOrdersCollection = collection(db, "acceptedOrders");
        const ordersSnapshot = await getDocs(acceptedOrdersCollection);
        const ordersList = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAcceptedOrders(ordersList);
        console.log("Accepted Orders: ", ordersList);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching accepted orders", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAcceptedOrders();
  }, []);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const filteredOrders = acceptedOrders.filter(
    (order) =>
      order.customername.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toString().includes(searchQuery)
  );

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Accepted Orders</h1>
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
            <Puff
              color="#00BFFF" // Customize the loader color
              height={50} // Loader size
              width={50} // Loader size
            />
          </div>
        ) : filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="border p-3 border-gray-100 shadow-md rounded-lg my-3"
            >
              <div className="flex justify-between items-center">
                <div className="w-80">
                  <p className="font-semibold">Name: {order.customername}</p>
                  <p>Email: {order.email}</p>
                </div>
                <div>
                  <h1 className="font-semibold">Order Id: {order.orderId}</h1>
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
                          className="flex justify-between  py-2 bg-gray-100 my-2 rounded-lg p-3"
                        >
                          <div className="flex gap-4">
                            <img
                              src={product.imgUrl}
                              alt={product.title}
                              className="h-16 w-16 rounded-lg border"
                            />
                            <div>
                              <p className="font-semibold text-gray-700">
                                <span className="font-semibold text-gray-950">Name :</span>{" "}
                                {product.title}
                              </p>
                              <p className="text-sm">
                                <span className="font-semibold">
                                  ProductId :
                                </span>{" "}
                                {product.productId}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700 text-sm">
                              <span className="font-semibold text-gray-950">
                                Thickness:{" "}
                              </span>
                              {product.thickness}mm
                            </p>
                            <p className="text-gray-700 text-sm">
                              <span className="font-semibold text-gray-950">
                                Finish:{" "}
                              </span>
                              {product.finish}
                            </p>

                            <p className="text-gray-700 text-sm">
                              <span className="font-semibold text-gray-950">
                                Value:{" "}
                              </span>
                              {product.value}
                            </p>
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
          <p className="text-gray-600 text-center text-2xl">
            No accepted orders.
          </p>
        )}
      </div>
    </div>
  );
};

export default AcceptedOrders;
