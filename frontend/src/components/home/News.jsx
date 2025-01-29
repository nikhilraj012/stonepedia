import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const News = () => {
  const news = [
    {
      id: 1,
      number: "01",
      title: "Bharat Business Award 2023",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company",
    },
    {
      id: 2,
      number: "02",
      title: "The Print",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company",
    },
    {
      id: 3,
      number: "03",
      title: "Times Of India",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company",
    },
    {
      id: 4,
      number: "04",
      title: "Hindustan Times",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company",
    },
  ];

  return (
    <div className="m-5 md:mx-10 xl:px-20 2xl:px-40">
      {/* Header Section */}
      <div className="md:flex justify-between">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-2xl font-bold font-serif text-orange-500"
        >
          In The News
        </motion.h1>
        <motion.button
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="flex items-center gap-2 border px-2 my-1 font-semibold rounded-md hover:border-white bg-yellow-300 hover:bg-pink-700 hover:text-white"
        >
          VIEW MORE
          <span>
            <FaArrowRightLong />
          </span>
        </motion.button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {news.map((card) => (
          <div
            className="relative w-full h-48 cursor-pointer"
            style={{ perspective: "1000px" }}
            key={card.id}
          >
            <div
              className="absolute inset-0 w-full h-full transition-transform duration-[800ms] ease-in-out hover:rotate-y-180 "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full bg-lime-300 text-black rounded-lg backface-hidden flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl">{card.number}</h1>
                <p className="mt-4 text-center text-2xl font-semibold">
                  {card.title}
                </p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full bg-[#DED93E] text-gray-800 rounded-lg transform rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center">
                <p className="text-base px-4 text-black font-semibold">
                  {card.description}
                </p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Style Section */}
      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default News;
