import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGooglePlus } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const EachDetail = ({product}) => {
  const [value, setvalue] = useState(6000);

  const handleIncrement = () => {
    setvalue(value + 100);
  };

  const handleDecrement = () => {
    if (value > 6000) {
      setvalue(value - 100);
    }
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

      <p className="mt-3 flex justify-end gap-2 p-1  "><span className="font-semibold">Origin :</span>India</p>

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
          Select Thickness :{" "}
        </h1>

        <select className="border border-gray-300 p-2 rounded-md w-[70%] ml-3">
          <option value="">Choose an option</option>
          <option value="16">16mm</option>
          <option value="18">18mm</option>
          <option value="20">20mm</option>
          <option value="25">25mm</option>
          <option value="30">30mm</option>
          <option value="35">35mm</option>
          <option value="40">40mm</option>
          <option value="45">45mm</option>
          <option value="50">50mm</option>
          <option value="55">55mm</option>
          <option value="60">60mm</option>
          <option value="65">65mm</option>
          <option value="70">70mm</option>
          <option value="75">75mm</option>
          <option value="80">80mm</option>
          <option value="85">85mm</option>
          <option value="90">90mm</option>
          <option value="95">95mm</option>
        </select>
      </div>

      <div className="flex items-center justify-between ">
        <h1 className="text-nowrap font-semibold text-lg">Select Finish :</h1>

        <select className="border border-gray-300 p-2 rounded-md w-[70%] ml-3">
          <option value="">Choose an option</option>
          <option value="flamed">Flamed</option>
          <option value="honed">Honed</option>
          <option value="lapato">Lapato</option>
          <option value="leather">Leather</option>
          <option value="mirror-polished">Mirror polished</option>
          <option value="polished">Polished</option>
          <option value="river-polished">River-Polished</option>
          <option value="sand-blast">Sand-Blast</option>
          <option value="shot-blast">Shot-Blast</option>
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
        <button className="p-3 border rounded-lg bg-pink-800 text-white font-bold">
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
              <FaSquareFacebook size={20}/>
            </button>
            <button>
              <IoLogoTwitter size={20}/>
            </button>
            <button>
              <FaGooglePlus size={20}/>
            </button>
            <button>
              <IoLogoLinkedin size={20}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachDetail;
