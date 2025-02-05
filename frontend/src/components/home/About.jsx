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
    <div className="bg-gradient-to-b from-gray-800 to-black py-16 px-4 md:px-12 lg:px-24">
      {/* Custom CSS for a 360° spin on hover */}
      <style>{`
        .group:hover .spin-icon {
          animation: spin360 0.5s ease-in-out;
        }
        @keyframes spin360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Why <span className="text-[#FBAD30]">StonePedia</span>?
          </h1>
          <p className="text-gray-400 mt-4">
            Discover our core strengths that make us the leading stone sourcing partner.
          </p>
        </div>

        {/* Alternating (zig-zag) layout with hover effects */}
        <div className="space-y-16">
          {courseData.map((course, index) => {
            // Alternate layout: even indexes have the icon on the left, odd on the right.
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group flex flex-col md:flex-row items-center transition-transform duration-500 hover:scale-105 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 flex justify-center">
                  {/* Icon container with custom 'spin-icon' class */}
                  <div className="spin-icon w-32 h-32 rounded-full bg-gray-700 border-4 border-[#FBAD30] flex items-center justify-center transition-transform duration-500">
                    {course.icon}
                  </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 px-6 text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-white transition-colors duration-500 group-hover:text-[#FBAD30]">
                    {course.title}
                  </h2>
                  <p className="mt-3 text-gray-300 transition-colors duration-500 group-hover:text-gray-200">
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
