import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { motion } from "framer-motion";
import SubNavbar from "./SubNavbar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const userEmail = localStorage.getItem("userEmail");
  const { cartItems } = useCart();

  const adminEmails = ["admin@stonepedia.in", "super@stonepedia.in"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    signOut(auth)
      .then(() => {
        console.log("User Logged out successfully!!");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  const isNotHome = location.pathname !== "/";
  const isAdminOrSupplier =
    adminEmails.includes(userEmail) || location.pathname === "/becomeSupplier";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isNotHome || isHovered
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            {isScrolled || isNotHome || isHovered ? (
              <img
                src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
                alt="stonepedia-logo"
                className="w-40"
              />
            ) : (
              <img
                src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png"
                alt="stonepedia-logo"
                className="w-40"
              />
            )}
          </Link>

          {isAdminOrSupplier ? (
            <ul className="flex items-center space-x-2 lg:space-x-8 font-semibold text-black text-sm">
              {/* <li
                onClick={handleLogOut}
                className="flex items-center gap-2 bg-[#FBAD30] p-2 rounded-xl hover:text-[#871B58]"
              >
                <a href="#">Log</a>
                <span>
                  <LuLogOut size={20} />
                </span>
              </li> */}
              <a
                href="#"
                onClick={handleLogOut}
                class="relative inline-flex items-center py-2 px-12 overflow-hidden text-base font-medium text-[#000000] border-2 border-[#FBAD30] rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span class="absolute left-0 block w-full h-0 transition-all bg-[#FBAD30] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative">Logout</span>
              </a>
            </ul>
          ) : (
            <ul
              className={`hidden md:flex items-center space-x-2 md:space-x-6 lg:space-x-8 font-semibold ${
                isScrolled || isNotHome || isHovered
                  ? "text-black"
                  : "text-gray-200"
              } text-sm`}
            >
              <Link to="/">
                <motion.li
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 5 }}
                >
                  <a className="hover:text-orange-500 hover:underline underline-offset-4 cursor-pointer ">
                    HOME
                  </a>
                </motion.li>
              </Link>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 5 }}
              >
                <a className="hover:text-orange-500 hover:underline underline-offset-4 cursor-pointer ">
                  ABOUT US
                </a>
              </motion.li>
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 5 }}
              >
                <a className="hover:text-orange-500 hover:underline underline-offset-4 cursor-pointer ">
                  SERVICES
                </a>
              </motion.li>

              <Link to="/orders">
                <motion.li
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 5 }}
                >
                  <a className="hover:text-orange-500 hover:underline underline-offset-4 cursor-pointer">
                    ORDERS
                  </a>
                </motion.li>
              </Link>

              <Link to="/cart">
                <div className="relative inline-block cursor-pointer">
                  <span className=" cursor-pointer">
                    <BsCart3 size={20} />
                  </span>
                  <span className="absolute -top-4 px-1 py-0.5 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {cartItems.length}
                  </span>
                </div>
              </Link>

              <a
                href="#"
                onClick={handleLogOut}
                class="relative p-2 overflow-hidden font-medium text-gray-100 bg-[#871B58] rounded-lg shadow-inner group"
              >
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-pink-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-pink-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#871B58] opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex gap-2">
                  Logout
                  <span>
                    <LuLogOut size={20} />
                  </span>
                </span>
              </a>


              {/* <li
                onClick={handleLogOut}
                className="flex items-center gap-2 text-white p-2 rounded-xl bg-[#871B58] hover:bg-[#FBAD30]"
              >
                <a href="#">Logout</a>
                <span>
                  <LuLogOut size={20} />
                </span>
              </li> */}
            </ul>
          )}

          <span
            onClick={toggleMenu}
            className={`cursor-pointer md:hidden ${
              isScrolled || isNotHome ? "text-black" : "text-white"
            }`}
          >
            <RxHamburgerMenu size={28} />
          </span>
        </div>

        {location.pathname === "/" && !isScrolled && (
          <SubNavbar
            isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        )}

        <div
          className={`absolute top-14 left-0 md:hidden bg-white shadow-md w-48 px-4 z-50 border-t-2 rounded-br-xl transition-all duration-500 ease-out-in ${
            isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
        >
          <ul className="flex flex-col items-center space-y-4 my-2">
            {["Home", "About Us", "Services", "Contact"].map((item, index) => (
              <li key={index}>
                <a className="text-gray-700 hover:text-black font-semibold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
