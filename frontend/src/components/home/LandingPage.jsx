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

const countryImages = [
  "src/assets/argentina.png",
  "src/assets/canada.png",
  "src/assets/china.png",
  "src/assets/england 1.10.28 PM.png",
  "src/assets/india.png",
  "src/assets/norway.png",
  "src/assets/qatar.png",
  "src/assets/south-korea.png",
  "src/assets/united-kingdom.png",
  "src/assets/united-states.png",
  "src/assets/vietnam.png"
];

const LandingPage = () => {
  const imgRef = useRef(null);
  const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
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
      <div className="relative h-full overflow-hidden bg-opacity-50 z-10 flex items-center justify-center">
        <div className="absolute w-full flex flex-col gap-3 lg:gap-5 items-center px-5">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-center">
            The Leading B2B ecommerce platform for global trade
          </h1>

          <div className="md:w-4/6">
            <div className="flex justify-between rounded-full p-1 lg:p-2 gap-2 md:gap-5 overflow-hidden bg-gray-200">
              {uploadedImage ? (
                <input
                  type="search"
                  className="w-[64%] md:w-[60%] lg:w-[65%] xl:w-[75%] 2xl:w-[82%] outline-none rounded-full pl-2 md:pl-3 text-sm md:text-lg"
                  placeholder={placeholder}
                />
              ) : (
                <input
                  type="search"
                  className="w-full outline-none rounded-full pl-2 md:pl-3 text-sm md:text-lg"
                  placeholder={placeholder}
                />
              )}
              <div className="flex items-center gap-2 md:gap-3 ">
                {uploadedImage && (
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className=" w-6 h-6 md:w-9 md:h-9 lg:w-12 lg:h-12 rounded-full object-cover border"
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
                <button className="bg-[#871B58] flex items-center gap-2 p-1 lg:p-3 rounded-full text-white font-semibold">
                  <span>
                    <IoSearch className="text-lg md:text-xl lg:text-2xl" />
                  </span>
                  <span className="hidden md:block">Search</span>
                </button>
              </div>
            </div>
          </div>
          <a
            href="#"
            class="relative inline-flex items-center  justify-center lg:px-8 lg:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white border-2 border-[#FBAD30] rounded-lg group"
          >
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FBAD30] rounded-full group-hover:w-80 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span class="relative flex items-center gap-2 text-nowrap text-sm">
              <FaExternalLinkAlt />
              Learn about StonePedia.com
            </span>
          </a>

        </div>

        <div>
           {/* add a carosel of countries images of 5 */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
