import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const News = () => {
  const [activeTab, setActiveTab] = useState(1);

  const news = [
    {
      id: 1,
      title: "Bharat Business Award 2023",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company.",
    },
    {
      id: 2,
      title: "The Print",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company.",
    },
    {
      id: 3,
      title: "Times Of India",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company.",
    },
    {
      id: 4,
      title: "Hindustan Times",
      description:
        "This award recognizes an employee who has come up with a new idea or process that has positively impacted the company.",
    },
  ];

  return (
    <div
      className="relative p-5 md:p-10 xl:p-20 2xl:px-40 bg-cover bg-center"
      style={{ backgroundImage: 'url("src/assets/abcd.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-15 z-0"></div>

      <div className="relative z-10 xl:space-y-3">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl xl:text-3xl font-bold font-serif text-[#871B58]"
          >
            Latest News
          </motion.h1>
          <motion.button
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center md:px-4 md:py-2 p-2 bg-[#FBAD30] text-white text-sm md:text-base font-semibold rounded-full shadow-md transition"
          >
            VIEW MORE <FaArrowRightLong className="ml-2" />
          </motion.button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/4 gap-2 pb-3 border-b md:border-b-0 md:border-r border-gray-300 pr-4">
            {news.map((item) => (
              <button
                key={item.id}
                className={`px-4 py-2 text-left font-semibold ${
                  activeTab === item.id
                    ? "bg-[#FBAD30] text-white rounded-md"
                    : "text-gray-50 hover:bg-gray-200 rounded-md"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="flex-1 p-4 md:p-6 bg-white bg-opacity-90 rounded-xl shadow-lg mt-4 md:mt-0 md:ml-4">
            {news.map(
              (item) =>
                activeTab === item.id && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                  >
                    <h2 className="text-2xl font-bold text-[#871B58] mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
