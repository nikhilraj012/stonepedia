import React, { useEffect, useState } from "react";
import { ImArrowRight2 } from "react-icons/im";

const Blogs = () => {
  const [selectedImage, setSelectedImage] = useState(1);

  const blogs = [
    {
      id: 1,
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/14d7af350175da9c3414a859a6404384-467x352.webp",
      title:
        "Sustainability in the Marble Industry: How Eco-Friendly Practices Are Shaping the Future",
    },
    {
      id: 2,
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/urja-infracon-and-projects-faridabad-faridabad-civil-contractors-due1vl1ets-467x352.png",
      title:
        "The Economics of Marble: Why It’s a Lucrative Material for Builders",
    },
    {
      id: 3,
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/container-cargo-ship-import-export-business-across-globe-aerial-top-down-drone-view-running-open-sea-freight-carrying-319582594-transformed-UUtXJY0Ac-transformed-467x352.jpeg",
      title: "Global Market Capitalization of the Natural Stone Industry",
    },
    {
      id: 4,
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/A-spacious-feel-in-your-kitchen-where-practical-splendor-meets-design-orchestration-467x352.jpg",
      title:
        "Marble in Modern Kitchen Design: Why It Remains a Timeless Favorite",
    },
    {
      id: 5,
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/240_F_830701413_SHu9MSkuj0loVrCuYMhzM7PT3FP7f7ME-transformed-467x352.jpeg",
      title: "The Role of Marble in Luxury Commercial Spaces",
    },
    {
      id: 6,
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/krotov_studio_Keeping_Your_Stone_Countertops_Pristine_women_wor_ee2bba4c-3d09-42b5-acfc-49b42c2d89a9-1024x574-1-467x352.webp",
      title: "Marble Care and Maintenance: How to Keep Your Surfaces Pristine",
    },
    {
      id: 7,
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/12-6-scaled-1-467x352.webp",
      title:
        "The Rise of Granite: Why It’s More Than Just a Countertop Material",
    },
    {
      id: 8,
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/381301677487946-467x352.jpg",
      title:
        "Understanding the Economic Factors That Influence the Cost of Marble",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev % blogs.length) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="2xl:px-40 bg-gray-200">
      <div className="md:flex justify-between items-center p-5 max-md:space-y-2 md:px-10">
        <h1 className="text-lg font-serif md:text-xl lg:text-2xl font-bold text-[#871B58]">
          Watch Our Latest Blog
        </h1>

        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-[#FBAD30] transition duration-300 ease-out border-2 border-orange-300 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
            <ImArrowRight2 className="w-6 h-6" />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-[#FBAD30] transition-all duration-300 transform group-hover:translate-x-full ease">
            VIEW MORE
          </span>
          <span className="relative invisible">Button Text</span>
        </a>
      </div>

      <div className="flex items-center justify-center mb-5">
        <div className="flex gap-x-1">
          {blogs.map((image) => (
            <div
              key={image.id}
              className={`relative rounded-lg transition-all duration-300 cursor-pointer overflow-hidden shadow-lg ${
                selectedImage === image.id
                  ? "w-[100px] h-[180px] md:h-[200px] lg:h-[300px] md:w-[240px] lg:w-[300px] xl:w-[400px] flex-shrink-0"
                  : "w-[24px] h-[180px] md:h-[200px] lg:h-[300px] md:w-[50px] lg:w-[80px] xl:w-[100px] flex-shrink-0"
              }`}
              style={{
                backgroundImage: `url(${image.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {selectedImage === image.id && (
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4 text-white text-center">
                  <h3 className="text-sm lg:text-lg font-semibold leading-snug">
                    {image.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
