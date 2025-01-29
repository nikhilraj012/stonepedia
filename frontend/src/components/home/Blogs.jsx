import React, { useState } from "react";
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

  const handleImageClick = (id) => {
    if (selectedImage !== id) {
      setSelectedImage(id);
    }
  };

  return (
    <div className="2xl:px-40">
      <div className="md:flex justify-between items-center p-5 max-md:space-y-2 md:px-10">
        <h1 className="text-lg font-serif md:text-xl lg:text-2xl font-bold text-orange-600">
          Watch Our Latest Blog
        </h1>
        <button className="flex items-center gap-2 bg-yellow-400 text-white font-semibold px-3 py-1 hover:bg-pink-800">
          VIEW MORE
          <span>
            <ImArrowRight2 />
          </span>
        </button>
      </div>

      <div className="flex items-center justify-center mb-5">
        <div className="flex gap-x-1">
          {blogs.map((image) => (
            <div
              key={image.id}
              className={`relative rounded-lg transition-all duration-300 cursor-pointer ${
                selectedImage === image.id
                  ? "w-[100px] h-[150px] md:h-[200px] lg:h-[300px] md:w-[240px] lg:w-[300px] xl:w-[400px] flex-shrink-0"
                  : "w-[24px] h-[150px] md:h-[200px] lg:h-[300px] md:w-[50px] lg:w-[80px] xl:w-[100px] flex-shrink-0"
              }`}
              style={{
                backgroundImage: `url(${image.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleImageClick(image.id)}
            >
              {selectedImage === image.id && (
                <div className="absolute text-white bg-black/50 rounded-lg bottom-4 w-full p-2">
                  <h3 className="text-xs lg:text-base font-bold ">
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
