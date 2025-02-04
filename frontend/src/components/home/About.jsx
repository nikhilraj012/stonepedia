import React from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { MdContactEmergency } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GiStoneSphere } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {
  const courseData = [
    {
      title: "Rigorous Quality Control",
      icon: <FaCheckDouble size={20} />,
      description:
        "Multi-level inspections ensure every stone meets the highest durability and aesthetic standards.",
    },
    {
      title: "Certified Suppliers & Compliance",
      icon: <MdContactEmergency size={20} />,
      description:
        "Sourced from certified suppliers, every stone complies with global and local regulations.",
    },
    {
      title: "Expert Guidance and Support",
      icon: <IoIosContact size={20} />,
      description:
        "StonePedia’s specialists provide expert advice on material selection, application, and maintenance.",
    },
    {
      title: "Comprehensive High-Quality Stones",
      icon: <GiStoneSphere size={20} />,
      description:
        "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
    },
    {
      title: "Doorstep Delivery",
      icon: <FaHome size={20} />,
      description:
        "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
    },
    {
      title: "Guaranteed Order Fulfillment",
      icon: <IoDocumentTextOutline size={20} />,
      description:
        "Accurate and timely order processing to meet all project timelines without delays.",
    },
  ];

  return (
    <div
      className="bg-cover bg-center  relative py-5 "
      // bg-gradient-to-br from-amber-900 via-gray-700 to-gray-900
    >
      <div className="relative flex flex-col justify-center items-center text-center space-y-4 px-4">
        <p className="text-sm md:text-lg font-semibold text-[#FBAD30]">
          REDEFINING STONE SOURCING
        </p>
        <h1 className="text-2xl md:text-4xl font-serif text-[#871B58]">
          Why <span className="">StonePedia</span>?
        </h1>

        <div className="flex justify-center md:px-10 xl:px-24">
          <div
            id="maindiv"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-4 justify-center items-center"
          >
            {courseData.map((course, index) => (
              <div
                key={index}
                id="card"
                className="w-full cursor-pointer rounded-lx p-4 group duration-600 ease-out transform bg-gray-900 text-white relative rounded-2xl shadow-md  flex flex-col justify-between transition-transform duration-500 hover:scale-105 before:absolute before:w-1/5 before:h-1/5 before:bg-gradient-to-tr before:from-[#FBAD30] before:to-[#871B58] before:transition-all before:duration-500 before:top-0 before:right-0 before:rounded-tr-[15px] before:rounded-bl-[100%] hover:before:w-full hover:before:h-full hover:before:rounded-[15px]  hover:after:w-full hover:after:h-full hover:after:rounded-[15px] "
              >
                <div className=" relative md:h-40">
                  <span>{course.icon}</span>
                  <div className="my-2">
                    <h1 className="text-lg font-bold">{course.title}</h1>
                    <p className="text-white">{course.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
