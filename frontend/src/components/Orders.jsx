import { del } from "framer-motion/client";
import React from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const initialOrders = [
    {
      id: 1,
      orderDate: "2022-01-01",
      expectedDeliveryDate: "2022-01-10",
      deliveryDate: "2022-01-09",
      orderStatus: "Approved",
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/Lalitpur-Grey-Limestone-01-.png",
      title: "Lalitpur Grey Limestone",
      thickness: "20mm",
      finish: "Honed",
      value: 1000,
    },
    {
      id: 2,
      orderDate: "2022-01-02",
      expectedDeliveryDate: "2022-01-10",
      deliveryDate: "2022-01-09",
      orderStatus: "In Progress",
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/kurnool-grey-limestone-01-.png",
      title: "Kurnool Grey Limestone",
      thickness: "30mm",
      finish: "Polished",
      value: 2000,
    },
    {
      id: 3,
      orderDate: "2022-01-03",
      expectedDeliveryDate: "2022-01-10",
      deliveryDate: "2022-01-09",
      orderStatus: "Cancelled",
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/Kandla-Grey-Sandstone-01-.png",
      title: "Kandla Grey Sandstone",
      thickness: "30mm",
      finish: "Polished",
      value: 2000,
    },
  ];

  return (
    <div className="py-20 ">
      <div className="py-10 px-20">
        {initialOrders.length > 0 ? (
          <>
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold text-gray-400">My Orders</h1>
            </div>

            <ul className="grid xl:grid-cols-2 gap-5 mt-5">
              {initialOrders.map((eachOrder) => (
                <li
                  key={eachOrder.id}
                  className="border flex  justify-between p-5 rounded-xl shadow-lg"
                >
                  <div className="flex gap-3 lg:w-96">
                    <img
                      src={eachOrder.imgUrl}
                      alt={eachOrder.title}
                      className="h-28 rounded-lg"
                    />
                    <div className="space-y-1">
                      <h1 className="text-lg font-bold">{eachOrder.title}</h1>
                      <p className="">
                        Thickness:
                        <span className="font-semibold ml-1 text-gray-800">
                          {eachOrder.thickness}
                        </span>
                      </p>
                      <p className="">
                        Finish:
                        <span className="font-semibold ml-1 text-gray-800">
                          {eachOrder.finish}
                        </span>
                      </p>
                      <p className="">
                        Quantity:
                        <span className="font-semibold ml-1 text-gray-800">
                          {eachOrder.value}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 items-end px-3 w-60  ">
                    <p className="text-sm">
                      <span className="mr-1">Ordered Date :</span>
                      {eachOrder.orderDate}
                    </p>
                    <p className="text-sm">
                      <span className="mr-1">Expected Date :</span>
                      {eachOrder.expectedDeliveryDate}
                    </p>
                    <p className="text-sm">
                      <span className="mr-1">Delivery Date :</span>
                      {eachOrder.deliveryDate}
                    </p>
                    <p
                      className={`font-semibold text-center self-center w-full ${
                        eachOrder.orderStatus === "Approved"
                          ? "text-green-500"
                          : eachOrder.orderStatus === "Cancelled"
                          ? "text-red-500"
                          : "text-orange-500"
                      }`}
                    >
                      {eachOrder.orderStatus}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex flex-col justify-center h-[80vh] items-center">
            <p className="text-gray-900 text-5xl font-serif font-bold">No Orders Found</p>
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
