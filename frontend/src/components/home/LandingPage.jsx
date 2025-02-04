import React, { useEffect, useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const placeholderTexts = [
  "marbles",
  "granite",
  "limestone",
  "travertine",
  "onyx",
  "quartz",
  "indian granite",
];

const LandingPage = () => {
  const imgRef = useRef(null);
  const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);
  const [uploadedImage, setUploadedImage] = useState(null); // State to store the uploaded image
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % placeholderTexts.length;
      setPlaceholder(placeholderTexts[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const onClickCameraIcon = () => {
    imgRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl); // Set the image URL to display the preview
    }
  };

  return (
    <div className="relative h-screen xl:h-[70vh]">
      <img
        src="/stonepedia_img.webp"
        alt="Background"
        className="h-full absolute inset-0 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/100 opacity-50"></div>
      <div className="relative h-full overflow-hidden bg-opacity-50 z-10 flex items-center justify-center lg:mx-16">
        <div className="absolute flex gap-10 w-full">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-white">
              The Leading B2B ecommerce platform for global trade
            </h1>
            <a
              href="#"
              class="relative inline-flex items-center mt-5 justify-center px-8 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white border-2 border-[#FBAD30] rounded-lg group"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FBAD30] rounded-full group-hover:w-80 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span class="relative flex items-center gap-2 text-nowrap">
                <FaExternalLinkAlt />
                Learn about StonePedia.com
              </span>
            </a>
          </div>

          <div className="w-full">
            <div className="md:mt-5 flex  rounded-full p-1 lg:p-3 gap-2 md:gap-5 overflow-hidden w-full bg-gray-200">
              {uploadedImage ? (
                <input
                  type="search"
                  className="w-[75%] outline-none rounded-full pl-2 md:pl-5 text-sm md:text-lg"
                  placeholder={placeholder}
                />
              ) : (
                <input
                  type="search"
                  className="w-full outline-none rounded-full pl-2 md:pl-5 text-sm md:text-lg"
                  placeholder={placeholder}
                />
              )}
              <div className="flex items-center gap-2 md:gap-3 ">
                {uploadedImage && (
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                )}
                <div className="relative flex items-center gap-2">
                  <BsCamera
                    className="text-xl md:text-2xl lg:text-3xl cursor-pointer"
                    onClick={onClickCameraIcon}
                  />
                  <input
                    type="file"
                    hidden
                    ref={imgRef}
                    onChange={handleImageUpload} // Handle image upload
                  />
                </div>
                <button className="bg-[#871B58] flex items-center gap-2 p-1 md:p-3 rounded-full text-white font-semibold">
                  <span>
                    <IoSearch className="text-lg md:text-xl lg:text-2xl" />
                  </span>
                  <span className="hidden md:block">Search</span>
                </button>
              </div>
            </div>

            <div className="flex gap-2 py-2 items-center justify-end ">
              <p className="text-nowrap text-white font-bold lg:text-lg">
                Frequently searched :
              </p>
              <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
                <li className="px-3 border rounded-lg text-white hover:bg-gradient-to-tr hover:from-[#080d11] hover:via-gray-700 hover:to-amber-600 cursor-pointer">
                  Marble
                </li>
                <li className="px-3 border rounded-lg text-white hover:bg-gradient-to-tr hover:from-[#080d11] hover:via-gray-700 hover:to-amber-600 cursor-pointer">
                  granites
                </li>
                <li className="px-3 border rounded-lg text-white hover:bg-gradient-to-tr hover:from-[#080d11] hover:via-gray-700 hover:to-amber-600 cursor-pointer">
                  Onyx
                </li>
                {/* <li className="px-3 border rounded-lg text-white hover:bg-gradient-to-tr hover:from-[#080d11] hover:via-gray-700 hover:to-amber-600 cursor-pointer">
                  Marble
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
