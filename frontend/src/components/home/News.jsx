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
    <div className="p-5 md:px-10 xl:px-20 2xl:px-40 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-[#871B58]"
        >
          Latest News
        </motion.h1>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          href="#_"
          className="inline-flex items-center px-4 py-2 bg-[#FBAD30] text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition"
        >
          VIEW MORE <FaArrowRightLong className="ml-2" />
        </motion.a>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/4 gap-2 border-b md:border-b-0 md:border-r border-gray-300 pr-4">
          {news.map((item) => (
            <button
              key={item.id}
              className={`px-4 py-2 text-left font-semibold ${
                activeTab === item.id
                  ? "bg-[#FBAD30] text-white rounded-md"
                  : "text-gray-700 hover:bg-gray-200 rounded-md"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="flex-1 p-4 md:p-6 bg-white rounded-xl shadow-lg mt-4 md:mt-0 md:ml-4">
          {news.map(
            (item) =>
              activeTab === item.id && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
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
  );
};

export default News;
