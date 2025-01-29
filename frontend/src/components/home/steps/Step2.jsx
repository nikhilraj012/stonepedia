import React, { useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Step2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black text-white flex justify-center  h-[90vh] border-t-2">
      <div className="flex gap-10 mt-20 ">
        <div>
          <p>(Step 2)</p>
          <h1 className="text-4xl font-bold">Analysis</h1>
        </div>
        <div className="w-[500px]">
          <div className="flex items-center gap-3">
            <p className="text-2xl">
              We craft a tailored action plan that aligns with your budget and requirements - no guesswork, just solutions
            </p>
            <span>
              <HiOutlineLightBulb size={60} />
            </span>
          </div>

          <div className=" border-y mt-5">
            <div className="flex items-center justify-between py-3 px-2">
              <h1 className="text-lg font-semibold">We build for you</h1>
              {isOpen ? (
                <FaMinus className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
              ) : (
                <FaPlus className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
              )}
            </div>
            {isOpen ? (
              <ul className="ml-5 mb-2">
                <li className="list-disc">Compatible with your stack</li>
                <li className="list-disc">Designed for the end user</li>
                <li className="list-disc">Future ready & modular</li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
