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
  "src/assets/vietnam.png",
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
  "src/assets/vietnam.png",
];

const LandingPage = () => {
  const imgRef = useRef(null);
  const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Determine visible count based on window width:
  // For sm devices (<768px): 3 images; md: 5; lg: 7; xl: 10.
  const [visibleCount, setVisibleCount] = useState(() => {
    const w = window.innerWidth;
    if (w < 768) return 3;
    else if (w < 1024) return 5;
    else if (w < 1280) return 7;
    else return 10;
  });

  // Update placeholder text every 2 seconds—but stop after one full cycle.
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < placeholderTexts.length - 1) {
        currentIndex++;
        setPlaceholder(placeholderTexts[currentIndex]);
      } else {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Update visibleCount on window resize.
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(3);
      else if (w < 1024) setVisibleCount(5);
      else if (w < 1280) setVisibleCount(7);
      else setVisibleCount(10);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickCameraIcon = () => {
    imgRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  // Navigation: move 2 images per click.
  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(prev - 2, 0));
  };

  const handleNext = () => {
    const maxIndex = countryImages.length - visibleCount;
    setCarouselIndex((prev) => Math.min(prev + 2, maxIndex));
  };

  const translatePercentage = (carouselIndex * 100) / visibleCount;

  return (
    <div className="relative h-screen xl:h-[70vh]">
      {/* Background Image */}
      <img
        src="/stonepedia_img.webp"
        alt="Background"
        className="h-full absolute inset-0 w-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/100 opacity-50"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Content Block (centered) */}
        <div className="w-full flex flex-col gap-3 lg:gap-5 items-center px-5">
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
              <div className="flex items-center gap-2 md:gap-3">
                {uploadedImage && (
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="w-6 h-6 md:w-9 md:h-9 lg:w-12 lg:h-12 rounded-full object-cover border"
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
                    onChange={handleImageUpload}
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
            className="relative inline-flex items-center justify-center lg:px-8 lg:py-2 overflow-hidden font-mono font-medium tracking-tighter text-white border-2 border-[#FBAD30] rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FBAD30] rounded-full group-hover:w-80 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative flex items-center gap-2 text-nowrap text-sm">
              <FaExternalLinkAlt />
              Learn about StonePedia.com
            </span>
          </a>
        </div>

        {/* Carousel Block (placed below the content) */}
        <div className="mt-8 w-full px-5">
          <div className="relative w-full">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${translatePercentage}%)` }}
              >
                {countryImages.map((src, idx) => (
                  <div
                    key={idx}
                    style={{ flex: `0 0 ${100 / visibleCount}%` }}
                  >
                    <img
                      src={src}
                      alt={`Country ${idx + 1}`}
                      className="object-cover w-10 h-10 md:w-12 md:h-12 mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Left Button */}
            <button
              onClick={handlePrev}
              disabled={carouselIndex === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-200 rounded-full disabled:opacity-50"
            >
              {"<"}
            </button>
            {/* Right Button */}
            <button
              onClick={handleNext}
              disabled={carouselIndex >= countryImages.length - visibleCount}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-200 rounded-full disabled:opacity-50"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
