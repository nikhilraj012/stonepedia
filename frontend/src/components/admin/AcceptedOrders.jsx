import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { db } from "../firebase/firebase";
import {Puff} from "react-loader-spinner";

const AcceptedOrders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAcceptedOrders = async () => {
      try {
        setLoading(true);
        const acceptedOrdersCollection = collection(db, "acceptedOrders");
        const ordersSnapshot = await getDocs(acceptedOrdersCollection);
        const ordersList = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAcceptedOrders(ordersList);
      } catch (error) {
        console.error("Error fetching accepted orders", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAcceptedOrders();
  }, []);
  

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
            <div key={order.id} className="border-b border-gray-200 py-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Name: {order.customername}</p>
                  <p>Email: {order.email}</p>
                </div>
                <div>
                  <h1 className="font-semibold">Order Id: {order.orderId}</h1>
                  <p>Date & Time: {order.orderDate}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No accepted orders found.</p>
        )}
      </div>
    </div>
  );
};

export default AcceptedOrders;
