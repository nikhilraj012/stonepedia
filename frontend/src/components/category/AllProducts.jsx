import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Adjust the path to your firebase.js
import Sorting from "./Sorting";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "allProducts"));
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log(products)
        setAllProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setItemsPerPage(10); // For 2xl and larger screens
      } else {
        setItemsPerPage(8); // Default for other screen sizes
      }
    };

    handleResize(); // Call it once for initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.title.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;
    const matchesColor =
      selectedColor.length > 0
        ? selectedColor.some((color) =>
            product.title.toLowerCase().includes(color.toLowerCase())
          )
        : true;
    const matchesRating = selectedRating
      ? Math.floor(product.rating) >= selectedRating
      : true;
    return matchesSearch && matchesCategory && matchesColor && matchesRating;
  });

  const sortedProducts = [...filteredProducts].sort((a,b) => a.title.localeCompare(b.title))

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 3;
    const startPage = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(maxVisiblePages / 2),
        totalPages - maxVisiblePages + 1
      )
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-3 py-1 rounded-full ${
            currentPage === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          1
        </button>
      );

      if (startPage > 2) {
        pages.push(
          <span key="start-dots" className="px-3 py-1">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-full ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-dots" className="px-3 py-1">
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-3 py-1 rounded-full ${
            currentPage === totalPages
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  if (loading) {
    return <div className="h-screen w-full flex justify-center items-center">
      <p className="text-white text-3xl font-bold ">Loading products...</p>
    </div>;
  }

  return (
    <div className="md:px-10 lg:px-16 lg:py-5 xl:px-20 2xl:px-32 px-5 md:flex gap-10 max-md:space-y-5">
      <Sorting
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      <div className="w-full border mb-5 rounded-lg shadow-lg">
        <div className="flex justify-between pt-3 px-5">
          <h1 className="font-bold text-2xl text-gray-100">All Products</h1>
          <p>{allProducts.length}</p>
        </div>
        {paginatedProducts.length > 0 ? (
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 lg:gap-10 p-5 w-full">
            {paginatedProducts.map((product) => (
              <li
                key={product.id}
                onClick={()=> navigate(`/product-details/${product.id}`)}
                className="border rounded-lg shadow-md hover:shadow-lg cursor-pointer bg-gray-900"
              >
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-full object-cover rounded-md border-b"
                />
                <div className="p-2 h-20 md:h-24 xl:h-28 flex flex-col justify-between overflow-hidden">
                  <h2 className="md:text-base 2xl:text-lg font-semibold text-white">
                    {product.title}
                  </h2>
                  <div className="self-end">
                    <p className="text-white md:text-sm lg:text-base font-semibold bg-[#3b82f6] px-2 py-1 rounded-lg">
                      {product.rating} ★
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center">
            <img src="src/assets/reject.png" alt="no-products-found-img" className="h-60"/>
            <p className="text-gray-100 text-2xl">No Products Found</p>
          </div>
        )}
        {paginatedProducts.length > 0 && <div className="flex justify-center items-center gap-2 py-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-3 rounded-full ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-500 text-white"
            }`}
          >
            <FaAngleDoubleLeft size={20} />
          </button>

          {renderPagination()}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-full ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-500 text-white"
            }`}
          >
            <FaAngleDoubleRight size={20} />
          </button>
        </div>}
        
      </div>
    </div>
  );
};

export default AllProducts;
