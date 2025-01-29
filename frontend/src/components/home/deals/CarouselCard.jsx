// 2. CARD COMPONENT: Shows background image and a “hover overlay”
import React from "react";

const CarouselCard = ({ title, description, imageUrl, overlayColor }) => {
  return (
    <div className="relative w-full h-full cursor-pointer group overflow-hidden rounded-lg shadow-lg">
      {/* 
        Background Image that fades out on hover.
        - 'absolute inset-0' so it fills the card.
        - 'bg-cover bg-center' to size and position it nicely.
      */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          transition-opacity duration-500
          group-hover:opacity-0
        "
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      {/* 
        If you want some minimal text or a slight overlay shown by default, 
        you can do something like this. 
        It also fades out on hover (group-hover:opacity-0).
      */}
      <div
        className="
          absolute inset-0
          bg-black bg-opacity-30
          flex flex-col justify-end
          p-4
          text-white
          transition-opacity duration-500
          group-hover:opacity-0
        "
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description.slice(0, 40)}...</p>
      </div>

      {/* 
        Hover Overlay: hidden by default (opacity-0), 
        revealed on hover (opacity-100).
      */}
      <div
        className={`
          absolute inset-0
          flex flex-col items-center justify-center
          p-4 text-center text-black
          opacity-0
           translate-x-full
          ${overlayColor}
          transition-all duration-700
          group-hover:opacity-100
          group-hover:translate-x-0
        `}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
