import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import About from "./About";
import Footer from "./Footer";
import Category from "./Category";
import Clients from "./Clients";
import Support from "./Support";
import Blogs from "./Blogs";
import News from "./News";
import Testimonials from "./Testimonials";
import LandingPage from "./LandingPage";
import ExclusiveDeals from "./deals/ExclusiveDeals";
import Steps from "./steps/Steps";

const images = [
  {
    src: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-2.jpg",
    heading: "Granite",
    description:
      "Unleash the Strength and Beauty of Granite: A Perfect Blend of Durability and Elegance",
    buttonText: "Visit",
  },
  {
    src: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg",
    heading: "Marble",
    description:
      "Elevate Your Spaces with Exquisite Marble: Timeless Beauty and Unmatched Sophistication",
    buttonText: "Visit",
  },
  {
    src: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg",
    heading: "Onyx",
    description:
      "Experience the Luxurious Allure of Onyx: Nature's Artistry in Every Stone",
    buttonText: "Visit",
  },
];

const Home = () => {
  return (
    <div>
      <div className="bg-gray-300">
        <LandingPage />
        <About />
        <Category />
        <ExclusiveDeals />
        <Support />
        <News />
        <Steps />
      </div>
      {/* <div className="bg-gradient-to-tr from-[#080d11] via-gray-700 to-amber-600"> */}
        <Clients />
        <Blogs />
        <Testimonials />
      {/* </div> */}

      <Footer />
    </div>
  );
};

export default Home;
