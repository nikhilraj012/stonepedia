import React, { useState } from "react";
import { BsTools } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Step3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black text-white flex justify-center items-center  h-[90vh] border-t-2">
      <div className="flex gap-10 ">
        <div>
          <p>(Step 3)</p>
          <h1 className="text-4xl font-bold">Execution</h1>
        </div>
        <div className="w-[500px]">
          <div className="flex items-center gap-3">
            <p className="text-2xl">
              It's go time. Ourteam gets to work, setting plans into motion, turning ideas into real-world impact
            </p>
            <span>
              <BsTools size={60} />
            </span>
          </div>

          <div className=" border-y mt-5">
            <div className="flex items-center justify-between py-3 px-2">
              <h1 className="text-lg font-semibold">We keep you looped</h1>
              {isOpen ? (
                <FaMinus className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
              ) : (
                <FaPlus className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
              )}
            </div>
            {isOpen ? (
              <ul className="ml-5 mb-2">
                <li className="list-disc">Regular status calls</li>
                <li className="list-disc">Open line of communication</li>
                <li className="list-disc">Documentation % support</li>
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

export default Step3;
