import React, { useState } from "react";
import CarouselCard from "./CarouselCard";

const itemsData = [
  {
    id: 1,
    title: "Dhoni and E-Motorad",
    description: "We cloned Dhoni's voice from speech samples...",
    imageUrl: "https://picsum.photos/500/300?random=1", // Random image
    overlayColor: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Mirzapur S3 Launch",
    description: "Deepfake & LipSync Campaign for Prime Video",
    imageUrl: "https://picsum.photos/500/300?random=2", // Random image
    overlayColor: "bg-green-300",
  },
  {
    id: 3,
    title: "112 Emergency AI Agents",
    description: "Live Translation & Voice Agents for Bangalore Police",
    imageUrl: "https://picsum.photos/500/300?random=3", // Random image
    overlayColor: "bg-blue-300",
  },
  {
    id: 4,
    title: "Scene Stitch",
    description: "Short Form Video at Scale",
    imageUrl: "https://picsum.photos/500/300?random=4", // Random image
    overlayColor: "bg-pink-300",
  },
  {
    id: 5,
    title: "Another Project",
    description: "Some interesting project details here",
    imageUrl: "https://picsum.photos/500/300?random=5", // Random image
    overlayColor: "bg-orange-300",
  },
  {
    id: 6,
    title: "Yet Another Project",
    description: "More interesting project details here",
    imageUrl: "https://picsum.photos/500/300?random=6", // Random image
    overlayColor: "bg-purple-300",
  },
];


const ExclusiveDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = itemsData.length;
  const visibleCount = 4; // We want 4 cards visible at once.

  // Helper to wrap index properly.
  const getWrappedIndex = (baseIndex, offset) => {
    return (baseIndex + offset + totalItems) % totalItems;
  };

  // Build an array of the 4 "visible" items
  const visibleItems = Array.from({ length: visibleCount }, (_, i) => {
    return itemsData[getWrappedIndex(currentIndex, i)];
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    // bg-gray-900
    <div className="relative w-full min-h-[700px]  flex flex-col justify-center items-center">
      <h2 className="text-white text-2xl font-semibold mb-6">Exclusive Deals</h2>

      {/* Carousel Container */}
      <div className="relative w-[90%] max-w-7xl h-[500px] overflow-hidden flex items-center">
        {/* Left/Right Buttons */}
        <button
          onClick={handlePrev}
          className="absolute z-10 left-8 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white focus:outline-none"
        >
          &#8592;
        </button>

        <button
          onClick={handleNext}
          className="absolute z-10 right-8 transform translate-x-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white focus:outline-none"
        >
          &#8594;
        </button>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-4 w-full h-full gap-4 relative">
          {visibleItems.map((item, i) => {
            // The middle two columns (indices 1 and 2) are fully opaque; 
            // The outer columns (0, 3) are half opaque to achieve the partial look.
            const isCenter = i === 1 || i === 2;
            const cardOpacity = isCenter ? "opacity-100" : "opacity-50 scale-90";

            return (
              <div
                key={item.id}
                className={`
                  relative w-full h-full
                  ${cardOpacity}
                  transition-opacity duration-300
                `}
              >
                <CarouselCard
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  overlayColor={item.overlayColor}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicators (optional) */}
      <div className="flex space-x-2 mt-6">
        {itemsData.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveDeals;
