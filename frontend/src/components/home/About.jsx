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
      icon: <FaCheckDouble size={32} className="text-[#FBAD30]" />,
      description:
        "Multi-level inspections ensure every stone meets the highest durability and aesthetic standards.",
    },
    {
      title: "Certified Suppliers & Compliance",
      icon: <MdContactEmergency size={32} className="text-[#FBAD30]" />,
      description:
        "Sourced from certified suppliers, every stone complies with global and local regulations.",
    },
    {
      title: "Expert Guidance and Support",
      icon: <IoIosContact size={32} className="text-[#FBAD30]" />,
      description:
        "StonePedia’s specialists provide expert advice on material selection, application, and maintenance.",
    },
    {
      title: "Comprehensive High-Quality Stones",
      icon: <GiStoneSphere size={32} className="text-[#FBAD30]" />,
      description:
        "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
    },
    {
      title: "Doorstep Delivery",
      icon: <FaHome size={32} className="text-[#FBAD30]" />,
      description:
        "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
    },
    {
      title: "Guaranteed Order Fulfillment",
      icon: <IoDocumentTextOutline size={32} className="text-[#FBAD30]" />,
      description:
        "Accurate and timely order processing to meet all project timelines without delays.",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center py-16 px-4 md:px-12 lg:px-24 bg-gray-300"
      style={{ backgroundImage: 'url("src/assets/abcd.jpg")' }}
    >
      <div className="absolute inset-0 bg-white opacity-70 z-0"></div>

      <style>{`
        .group:hover .spin-icon {
          animation: spin360 0.5s ease-in-out;
        }
        @keyframes spin360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#871B58]">
            Why <span className="text-[#FBAD30]">StonePedia</span>?
          </h1>
          <p className="text-[#6F431A] mt-4">
            Discover our core strengths that make us the leading stone sourcing partner.
          </p>
        </div>

        <div className="space-y-16">
          {courseData.map((course, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group flex flex-col md:flex-row items-center transition-transform duration-500 hover:scale-105 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="spin-icon w-32 h-32 rounded-full bg-white border-4 border-[#871B58] flex items-center justify-center transition-transform duration-500">
                    {course.icon}
                  </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 px-6 text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-[#871B58] transition-colors duration-500 group-hover:text-[#FBAD30]">
                    {course.title}
                  </h2>
                  <p className="mt-3 text-[#6F431A] transition-colors duration-500 group-hover:text-gray-950">
                    {course.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
