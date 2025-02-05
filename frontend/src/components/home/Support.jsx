import React from "react";
import CountUp from "react-countup";
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

const Support = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className=" md:grid grid-cols-2 gap-4 lg:grid-cols-4 md:justify-center py-5 md:py-10 lg:p-20"
    >
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-gray-900">
          <CountUp
            start={10000}
            end={1000000}
            duration={2.5}
            formattingFn={(value) => {
              if (value >= 1000000) return Math.floor(value / 1000000) + "M";
              if (value >= 1000) return Math.floor(value / 1000) + "K";
              return value;
            }}
          />
          +
        </h2>
        <p className="text-gray-400">SQ FT STONE DELIVERED</p>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-gray-900">
          <CountUp start={0} end={2} duration={4.5} />
        </h2>
        <p className="text-gray-400 text-nowrap">NATIONAL/GLOBALLY AWARD</p>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-gray-900">
          <CountUp start={0} end={20} duration={4.5} />+
        </h2>
        <p className="text-gray-400">PROJECT COMPLETED</p>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-gray-900">
          <CountUp start={0} end={99.9} duration={2.5} decimals={1} />%
        </h2>
        <p className="text-gray-400">CUSTOMER SATISFIED</p>
      </div>
    </motion.div>
  );
};

export default Support;
