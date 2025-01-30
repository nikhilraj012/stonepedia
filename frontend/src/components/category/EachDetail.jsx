import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGooglePlus } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { useCart } from "../../context/CartContext";

const EachDetail = ({ product}) => {
  const [value, setvalue] = useState(6000);
  const [thickness, setThickness] = useState("");
  const [finish, setFinish] = useState("");
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setvalue((prevValue) => prevValue + 100);
  };

  const handleDecrement = () => {
    setvalue((prevValue) => (prevValue > 6000 ? prevValue - 100 : prevValue));
  };

  const handleAddToCart = () => {
    if(thickness === "" || finish === "") {
      alert("Please select thickness and finish options!");
      return;
    }

    const cartItem = {
      id: product.id,
      title: product.title,
      imgUrl: product.imgUrl,
      thickness,
      finish,
      value,
    };

    addToCart(cartItem);
    console.log("Added to cart:", cartItem);
  };

  return (
    <div className="w-[50%]">
      <div>
        <h1 className="text-xl font-bold">{product.title}</h1>
        <p>
          <span className="font-semibold">Starting Price</span> : ₹1.00 per
          sq/ft
        </p>
      </div>

      <p className="mt-3 flex justify-end gap-2 p-1  ">
        <span className="font-semibold">Origin :</span>India
      </p>

      <table className="w-full border border-gray-300 my-3 rounded-lg">
        <tbody>
          <tr>
            <td className="border border-gray-300  p-2 font-semibold">Color</td>
            <td className="border border-gray-300 p-2">Black</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 font-semibold">
              Application
            </td>
            <td className="border border-gray-300 p-2">
              Counter/Vanity Top, Flooring, Cladding, Swimming Pool Areas,
              Bathroom Walls & Floors, Fireplace Walls, External & Internal Aids
              In Construction
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 font-semibold">Width</td>
            <td className="border border-gray-300 p-2">6 to 10 ft</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 font-semibold">Height</td>
            <td className="border border-gray-300 p-2">6 to 10 ft</td>
          </tr>
        </tbody>
      </table>

      <div className="flex items-center justify-between my-5">
        <h1 className="text-nowrap font-semibold text-lg">
          Select Thickness :
        </h1>

        <select
          className="border border-gray-300 p-2 rounded-md w-[70%] ml-3"
          onChange={(e) => setThickness(e.target.value)}
          value={thickness}
        >
          <option value="">Choose an option</option>
          {[
            16, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
            95,
          ].map((size) => (
            <option value={size} key={size}>
              {size}mm
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between ">
        <h1 className="text-nowrap font-semibold text-lg">Select Finish :</h1>

        <select
          className="border border-gray-300 p-2 rounded-md w-[70%] ml-3"
          onChange={(e) => setFinish(e.target.value)}
          value={finish}
        >
          <option value="">Choose an option</option>
          {[
            "Flamed",
            "Honed",
            "Lapato",
            "Leather",
            "Mirror polished",
            "Polished",
            "River-Polished",
            "Sand-Blast",
            "Shot-Blast",
          ].map((finishOption) => (
            <option value={finishOption.toLowerCase()} key={finishOption}>
              {finishOption}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-5 my-5 justify-end">
        <div className="flex items-center gap-5 border p-3 ">
          <button type="button" onClick={handleDecrement}>
            <FaMinus />
          </button>
          <p>{value}</p>
          <button type="button" onClick={handleIncrement}>
            <FaPlus />
          </button>
        </div>
        <button
          className="p-3 border rounded-lg bg-pink-800 text-white font-bold"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <p>
          <span className="font-semibold">SUK:</span> N/A
        </p>
        <p>
          <span className="font-semibold">Category:</span> Marble
        </p>
        <div className="flex gap-1">
          <p className="font-semibold">Share:</p>
          <div className="flex gap-2">
            <button>
              <FaSquareFacebook size={20} />
            </button>
            <button>
              <IoLogoTwitter size={20} />
            </button>
            <button>
              <FaGooglePlus size={20} />
            </button>
            <button>
              <IoLogoLinkedin size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachDetail;
