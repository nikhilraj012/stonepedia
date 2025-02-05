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
    <div className="p-5 md:px-10 xl:px-20 2xl:px-40 bg-gray-200">
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
        {/* <motion.button
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="flex items-center gap-2 border px-2 my-1 font-semibold rounded-md hover:border-white bg-yellow-300 hover:bg-pink-700 hover:text-white"
        >
          VIEW MORE
          <span>
            <FaArrowRightLong />
          </span>
        </motion.button> */}

        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          href="#_"
          class="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-[#871B58] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >
          <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#871B58] group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              class="w-5 h-5 text-[#871B58]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              class="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            VIEW MORE
          </span>
        </motion.a>
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
