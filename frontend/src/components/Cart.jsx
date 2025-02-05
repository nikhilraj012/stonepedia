import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../components/firebase/firebase";
import { auth } from "../components/firebase/firebase";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    updateCartItemQuantity,
  } = useCart();
  const navigate = useNavigate();

  const handleIncrement = (id, currentValue) => {
    updateCartItemQuantity(id, currentValue + 100);
  };

  const handleDecrement = (id, currentValue) => {
    if (currentValue > 6000) {
      updateCartItemQuantity(id, currentValue - 100);
    }
  };

  const saveOrderToFirebase = async () => {
    try {
      const userDocRef = doc(db, "Users", auth.currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data();

      // Create a new order object that contains all products in the cart
      const orderData = {
        uid: auth.currentUser.uid, 
        orderId: Math.floor(Math.random() * 100000),
        orderDate: (() => {
          const now = new Date();
          const day = String(now.getDate()).padStart(2, "0");
          const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
          const year = now.getFullYear();
          const hours = String(now.getHours()).padStart(2, "0");
          const minutes = String(now.getMinutes()).padStart(2, "0");

          return `${day}-${month}-${year} ${hours}:${minutes}`;
        })(),
        customername: userData.userName,
        email: auth.currentUser.email,
        orderStatus: "pending",
        products: cartItems.map((eachProduct) => ({
          productId: eachProduct.id,
          imgUrl: eachProduct.imgUrl,
          title: eachProduct.title,
          thickness: eachProduct.thickness,
          finish: eachProduct.finish,
          value: eachProduct.value,
        })),
      };

      // console.log("Order Data: ", orderData);

      // Save the order in Firebase under "pendingProducts"
      await addDoc(collection(db, "pendingProducts"), orderData);

      //  ALSO save the same order to user’s "Orders" subcollection
      //    If "Orders" doesn't exist yet, this automatically creates it once we add the doc.
      await addDoc(
        collection(db, "Users", auth.currentUser.uid, "Orders"),
        orderData
      );

      // Store the order data in Cart Provider state for quick access
      // setPlacedOrders((prevOrders) => [...prevOrders, orderData]);

      // Clear the cart after successful order placement
      clearCart();
      navigate("/checkout");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="py-20">
      <div className="py-10 px-20">
        {cartItems.length > 0 ? (
          <>
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold text-gray-400">My Cart</h1>
              <button
                onClick={clearCart}
                className="text-xl font-bold text-orange-600"
              >
                Remove All
              </button>
            </div>

            <ul className="flex flex-col gap-5 mt-5">
              {cartItems.map((eachProduct) => (
                <li
                  key={eachProduct.id}
                  className="border flex items-center justify-between p-5 rounded-xl shadow-lg"
                >
                  <div className="flex gap-3 lg:w-96">
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
                        Thickness:
                        <span className="font-semibold ml-1 text-orange-600">
                          {eachProduct.thickness}
                        </span>
                      </p>
                      <p className="font-bold">
                        Finish:
                        <span className="font-semibold ml-1 text-orange-600">
                          {eachProduct.finish}
                        </span>
                      </p>
                      <p className="font-bold">
                        Quantity:
                        <span className="font-semibold ml-1 text-orange-600">
                          {eachProduct.value}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center border gap-5 p-3 ">
                    <button
                      type="button"
                      onClick={() =>
                        handleDecrement(eachProduct.id, eachProduct.value)
                      }
                    >
                      <FaMinus />
                    </button>
                    <p>{eachProduct.value}</p>
                    <button
                      type="button"
                      onClick={() =>
                        handleIncrement(eachProduct.id, eachProduct.value)
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <p className="font-bold text-orange-500 text-xl">
                    Rs 6500 /-
                  </p>

                  <button
                    type="button"
                    className="hover:text-orange-600"
                    onClick={() => removeFromCart(eachProduct.id)}
                  >
                    <ImCancelCircle size={20} />
                  </button>
                </li>
              ))}
            </ul>

            <div className=" mt-8 flex justify-end">
              <div className="space-y-1">
                <h1 className="text-xl font-bold text-gray-600">
                  Order Total:
                  <span className="font-semibold text-black">Rs 62000/-</span>
                </h1>
                <p className="text-gray-500 text-lg">
                  <span className="font-bold text-black">
                    {cartItems.length}
                  </span>{" "}
                  items in cart
                </p>
                <button
                  type="button"
                  className="border w-full bg-orange-500 font-bold p-2 rounded-lg text-white"
                  onClick={saveOrderToFirebase}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
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

export default Cart;
