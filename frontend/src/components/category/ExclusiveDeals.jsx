import React from "react";

const ExclusiveDeals = () => {
  const deals = [
    {
      id: 1,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-2.jpg",
      title: "Premium Granite",
      shopBy: "Granite",
      price: 300,
      rating: 4.6,
    },
    {
      id: 2,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg",
      title: "Classic Marble Slabs",
      shopBy: "Marble",
      price: 150,
      rating: 4.8,
    },
    {
      id: 3,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-3.jpg",
      title: "Textured Sandstone",
      shopBy: "Sandstone",
      price: 95,
      rating: 4.2,
    },
  ];

  return (
    <div className="md:px-10 px-5">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-5">Exclusive Prime Deals</h1>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-10">
        {deals.map((deal) => (
          <li
            key={deal.id}
            className="border rounded-lg shadow-md hover:shadow-lg cursor-pointer"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="p-3">
              <h2 className="md:text-base lg:text-xl font-semibold">{deal.title}</h2>
              <p className="text-gray-500 md:text-sm lg:text-base">By {deal.shopBy}</p>
              <div className="flex justify-end items-center mt-2">
                {/* <p className="text-gray-900 font-bold md:text-base lg:text-lg">
                  Rs {deal.price}/-
                </p> */}
                <p className="text-white md:text-sm lg:text-base font-semibold bg-[#3b82f6] px-2 py-1 rounded-lg">{deal.rating} ★</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExclusiveDeals;
