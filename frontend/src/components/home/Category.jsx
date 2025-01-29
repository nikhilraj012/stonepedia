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
    <div className="px-5 md:px-10 pt-5 2xl:px-40">
      {/* bg-gradient-to-br from-amber-300 via-gray-700 to-amber-900 */}
      <div className="md:flex justify-between ">
        <h1 className="text-2xl font-bold font-serif text-gray-100">
          Choose By Category
        </h1>
        <button className="flex items-center gap-2 border px-2 my-1 font-semibold rounded-md hover:border-white bg-yellow-300 hover:bg-pink-700 hover:text-white">
          VIEW MORE
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className="py-5 grid grid-cols-2 md:grid-cols-6 xl:grid-cols-9 gap-y-5 place-items-center xl:px-16">
        {category.map((each) => (
          <div
            key={each.id}
            className="w-28 h-32 2xl:w-32 2xl:h-36 flex flex-col items-center gap-2 cursor-pointer group"
          >
            {/* Image */}
            <img
              src={each.img}
              alt={`category ${each.title}`}
              className="h-24 w-24 2xl:h-28 2xl:w-28 object-cover group-hover:border-2 rounded-full border-white"
            />
            {/* Title */}
            <p className="text-sm font-semibold text-nowrap group-hover:animate-bounce group-hover:font-bold text-white">{each.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
