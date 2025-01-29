import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { PiSkypeLogoBold } from "react-icons/pi";

const Footer = () => {
  const product = [
    {
      title: "StonePedia Exclusive",
    },
    {
      title: "Best Seller",
    },
    {
      title: "Premium Stones",
    },
    {
      title: "Shop By Color",
    },
    {
      title: "Shop By Category",
    },
    {
      title: "Applications",
    },
    {
      title: "Customer Review",
    },
  ];

  const support = [
    {
      title: "Request For Quotation",
    },
    {
      title: "FAQs",
    },
    {
      title: "Blogs",
    },
    {
      title: "Help Center",
    },
    {
      title: "Login",
    },
    {
      title: "Sign Up",
    },
    {
      title: "Report Complaint",
    },
  ];

  const company = [
    {
      title: "About Us",
    },
    {
      title: "Carrier",
    },
    {
      title: "Terms & Conditions",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Cookies Policy",
    },
    {
      title: "Cancellation Policy",
    },
    {
      title: "Disclaimer",
    },
  ];

  const reachUs = [
    {
      title: "In The Press",
    },
    {
      title: "Instagram",
    },
    {
      title: "Facebook",
    },
    {
      title: "LinkedIn",
    },
    {
      title: "Youtube",
    },
    {
      title: "Feedback",
    },
    {
      title: "PartnerWithUs",
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-5 p-3">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
          className="absolute inset-0 w-full h-full opacity-5 bg-cover"
          alt="Background-image"
        />
      </div>
      <div className="flex max-md:flex-col-reverse items-start md:justify-between lg:mx-10">
        <div className="flex gap-4 lg:gap-8 mt-4">
          <span className="text-white bg-gray-600 p-2 rounded-lg hover:text-yellow-400 cursor-pointer">
            <FaFacebookF size={28} />
          </span>
          <span className="text-white  bg-gray-600 p-2 rounded-lg hover:text-yellow-400 cursor-pointer">
            <FaInstagram size={28} />
          </span>
          <span className="text-white  bg-gray-600 p-2 rounded-lg hover:text-yellow-400 cursor-pointer">
            <FiTwitter size={28} />
          </span>
          <span className="text-white  bg-gray-600 p-2 rounded-lg hover:text-yellow-400 cursor-pointer">
            <PiSkypeLogoBold size={28} />
          </span>
        </div>
        <img
          src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png"
          alt=""
          className="h-14"
        />
      </div>

      <div className="my-3 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div>
          <h1 className="text-lg text-white font-semibold">Product</h1>
          <ul className="">
            {product.map((each) => (
              <li key={each.id} className="md:py-1 cursor-pointer">
                <p className="text-gray-300 text-sm md:text-base hover:text-yellow-400">
                  {each.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-lg text-white font-semibold">Support</h1>
          <ul className="">
            {support.map((each) => (
              <li key={each.id} className="md:py-1 cursor-pointer">
                <p className="text-gray-300 text-sm md:text-base hover:text-yellow-400">
                  {each.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-lg text-white font-semibold">Company</h1>
          <ul className="">
            {company.map((each) => (
              <li key={each.id} className="md:py-1 cursor-pointer">
                <p className="text-gray-300 text-sm md:text-base hover:text-yellow-400">
                  {each.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-lg text-white font-semibold">Reach Us</h1>
          <ul className="">
            {reachUs.map((each) => (
              <li key={each.id} className="md:py-1 cursor-pointer">
                <p className="text-gray-300 text-sm md:text-base hover:text-yellow-400">
                  {each.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center font-serif text-gray-200 py-1 md:text-lg">
        Copyright © 2024 - StonePedia Private Limited. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
