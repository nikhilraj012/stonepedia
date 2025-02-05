import { div } from "framer-motion/client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Category = () => {
  const category = [
    {
      id: 1,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/g-01.png",
      title: "Indian Granite",
    },
    {
      id: 2,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/ig-01.png",
      title: "Imported Granite",
    },
    {
      id: 3,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/on-01.png",
      title: "Onyx",
    },
    {
      id: 4,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/q-01.png",
      title: "Quartz",
    },
    {
      id: 5,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/Untitled-1-01.png",
      title: "Travertine",
    },
    {
      id: 6,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/1-07-1.png",
      title: "Sandstone",
    },
    {
      id: 7,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/LI-01.png",
      title: "LimeStone",
    },
    {
      id: 8,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/b-01.png",
      title: "Indian Marble",
    },
    {
      id: 9,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/im-01.png",
      title: "Imported Marble ",
    },
  ];
  return (
    <div className="px-5 md:px-14 pt-5 xl:px-28 2xl:px-52">
      {/* bg-gradient-to-br from-amber-300 via-gray-700 to-amber-900 */}
      <div className="space-y-2 md:flex justify-between ">
        <h1 className="text-xl md:text-2xl font-bold font-serif text-[#871B58]">
          Choose By Category
        </h1>
        {/* <button className="flex items-center gap-2 border px-2 my-1 font-semibold rounded-md hover:border-white bg-yellow-300 hover:bg-pink-700 hover:text-white">
          VIEW MORE
          <span>
            <FaArrowRightLong />
          </span>
        </button> */}
        {/* <button class="relative inline-flex items-center justify-center px-6 py-1 overflow-hidden font-bold text-[#FBAD30]  rounded-md shadow-2xl group">
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#871B58] to-[#FBAD30] group-hover:opacity-100"></span>
          <!-- Top glass gradient -->
          <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <!-- Bottom gradient -->
          <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <!-- Left gradient -->
          <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <!-- Right gradient -->
          <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span class="relative">VIEW MORE</span>
        </button> */}

        <a
          href="#_"
          class="relative inline-flex items-center justify-start px-6 py-1 overflow-hidden font-medium transition-all border-2 border-[#871B58] bg-white rounded hover:bg-white group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#871B58] absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            VIEW MORE
          </span>
        </a>
      </div>
      <div className="py-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-y-5 place-items-center">
        {category.map((each) => (
          <div
            key={each.id}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            {/* Image */}
            <img
              src={each.img}
              alt={`category ${each.title}`}
              className="h-24 w-24 xl:h-28 xl:w-28 2xl:h-28 2xl:w-28 object-cover  group-hover:border-2 rounded-full border-[#FBAD30] " 
            />
            {/* Title */}
            <p className="text-sm font-semibold text-nowrap group-hover:animate-bounce group-hover:font-bold text-black group-hover:text-[#FBAD30]">
              {each.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
