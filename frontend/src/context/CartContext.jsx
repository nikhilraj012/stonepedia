import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // console.log("Cart Items: ", cartItems);
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        toast.error("This product is already in your cart!", {
          position: "bottom-center",
          autoClose: 2000,
        });
        return prevItems;
      }
      toast.success("Added to cart!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      return [...prevItems, product];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, value: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
