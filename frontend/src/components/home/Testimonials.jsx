import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dev Patel",
    date: "2 months ago",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nam molestiae possimus velit expedita ipsa corporis, earum explicabo, sint reiciendis perferendis quam a maxime magnam?",
  },
  {
    id: 2,
    name: "Priya Sharma",
    date: "1 month ago",
    review:
      "Deleniti, molestias soluta dolorem quasi voluptate fugiat ipsum! Officia laborum, dolore, sit velit sunt reiciendis optio perspiciatis consequuntur minima facilis perferendis!",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    date: "3 weeks ago",
    review:
      "Velit incidunt saepe debitis cumque ipsum adipisci, quod quibusdam fugit ducimus tenetur molestias quidem, odit harum obcaecati nisi maiores nulla?",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-2xl mx-auto py-5">
      <h2 className="text-2xl font-bold text-center mb-6 mx-4 text-amber-500">
        What Our Happy Client Say About Us
      </h2>
      <div className="relative max-md:h-80 bg-gray-100 rounded-lg flex items-center justify-center shadow-lg">
        <div className="text-center px-10 py-8 transition-all duration-300 ease-in-out">
          <p className="text-lg text-gray-700 italic mb-4">
            "{testimonials[currentIndex].review}"
          </p>
          <h4 className="text-xl font-semibold text-gray-800">
            {testimonials[currentIndex].name}
          </h4>
          <p className="text-sm text-gray-500">
            {testimonials[currentIndex].date}
          </p>
        </div>

        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
