import React, { useState } from "react";
import { IoTelescopeOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Step1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black text-white flex justify-center h-[90vh] border-t-2">
      <div className="max-md:px-5 md:flex gap-10 mt-20">
        <div className="max-md:space-y-3">
          <p>(Step 1)</p>
          <h1 className="text-4xl font-bold">Discovery</h1>
        </div>
        <div className="md:w-[500px] max-md:my-1">
          <div className="max-md:space-y-2 md:flex items-center gap-3">
            <p className="text-2xl">
              Together, we dive into your world. A brainstorming session where
              your challenges meet our creative thinking
            </p>
            <div className="max-md:flex justify-center max-md:text-3xl">
              <IoTelescopeOutline size={60} />
            </div>
          </div>

          <div className=" border-y mt-5">
            <div className="flex items-center justify-between py-3 px-2">
              <h1 className="text-lg font-semibold">We learn from you</h1>
              {isOpen ? (
                <FaMinus className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
              ) : (
                <FaPlus className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
              )}
            </div>
            {isOpen ? (
              <ul className="ml-5 mb-2">
                <li className="list-disc">Identify painpoints</li>
                <li className="list-disc">Uncover opportunities</li>
                <li className="list-disc">Flag ineffeciences</li>
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

export default Step1;
