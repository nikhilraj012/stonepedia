import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [value, setvalue] = useState(6000);
  const [cartData, setCartData] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCartData(initialData);
  }, []);

  const handleCancelItem = (id) => {
    const filteredData = cartData.filter((item) => item.id !== id);
    setCartData(filteredData);
    if (filteredData.length === 0) {
      setIsCartEmpty(true);
    }
  };

  const handleRemoveAll = () => {
    setCartData([]);
    setIsCartEmpty(true);
  };

  const handleIncrement = () => {
    setvalue(value + 100);
  };

  const handleDecrement = () => {
    if (value > 6000) {
      setvalue(value - 100);
    }
  };

  const initialData = [
    {
      id: 1,
      title: "Lalitpur Grey",
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/Lalitpur-Grey-Limestone-01-.png",
      thickness: 55,
      finish: "River Polish",
    },
    {
      id: 2,
      title: "Lalitpur Grey",
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/Lalitpur-Grey-Limestone-01-.png",
      thickness: 55,
      finish: "River Polish",
    },
  ];

  return (
    <div className="py-20">
      <div className="py-10 px-20">
        {!isCartEmpty && <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-gray-400">My Cart</h1>
          <button
            onClick={handleRemoveAll}
            className="text-xl font-bold text-orange-600"
          >
            Remove All
          </button>
        </div>}
        

        {isCartEmpty ? (
          <div className="flex flex-col items-center gap-1 mt-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-60 h-60"
            />
            <h1 className="text-2xl font-bold text-gray-600 mt-5">
              Your Cart is Empty!
            </h1>
            <p className="text-gray-500 mt-3">
              Looks like you haven't added any items to the cart yet
            </p>
            <button className="text-xl bg-blue-400 px-5 py-2 my-5 text-white rounded-xl" onClick={() => navigate("/category")}>Shop Now</button>
          </div>
        ) : (
          <div className="mt-5 ">
            <ul className="flex flex-col gap-5">
              {cartData.map((eachProduct) => (
                <li
                  key={eachProduct.id}
                  className="border flex items-center justify-between p-5 rounded-xl shadow-lg"
                >
                  <div className="flex gap-3">
                    <img
                      src={eachProduct.imgUrl}
                      alt={eachProduct.title}
                      className="h-36 rounded-lg"
                    />
                    <div className="space-y-2">
                      <h1 className="text-lg font-bold text-pink-600">
                        {eachProduct.title}
                      </h1>
                      <p className="font-bold">
                        Selected Thickness :
                        <span className="font-semibold ml-1 text-orange-600">
                          {eachProduct.thickness}
                        </span>
                      </p>
                      <p className="font-bold">
                        Selected Finish :
                        <span className="font-semibold ml-1 text-orange-600">
                          {eachProduct.finish}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center border gap-5 p-3 ">
                    <button type="button" onClick={handleDecrement}>
                      <FaMinus />
                    </button>
                    <p>{value}</p>
                    <button type="button" onClick={handleIncrement}>
                      <FaPlus />
                    </button>
                  </div>

                  <p className="font-bold text-orange-500 text-xl">
                    Rs 6500 /-
                  </p>

                  <button
                    type="button"
                    className="hover:text-orange-600"
                    onClick={() => handleCancelItem(eachProduct.id)}
                  >
                    <ImCancelCircle size={20} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!isCartEmpty && (
          <div className=" mt-8 flex justify-end">
            <div className="space-y-1">
              <h1 className="text-xl font-bold text-gray-600">
                Order Total:{" "}
                <span className="font-semibold text-black">Rs 62000/-</span>
              </h1>
              <p className="text-gray-500 text-lg">
                <span className="font-bold text-black">1</span> items in cart
              </p>
              <button
                type="button"
                className="border w-full bg-orange-500 font-bold p-2 rounded-lg text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
