import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const SubNavbar = ({ isHovered, onMouseEnter, onMouseLeave }) => {
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isBuyerCentralHovered, setIsBuyerCentralHovered] = useState(false);
  const [isHelpCenterHovered, setIsHelpCenterHovered] = useState(false);
  const [isGetTheAppHovered, setIsGetTheAppHovered] = useState(false);
  const [isSupplierHovered, setIsSupplierHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(0);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(0);
  const [hoveredSubsubcategory, setHoveredSubsubcategory] = useState(0);

  const categories = [
    {
      name: "Category 1",
      subcategories: [
        {
          name: "Subcategory 1.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
            { name: "Random5", image: "https://picsum.photos/150?random=5" },
            { name: "Random6", image: "https://picsum.photos/150?random=6" },
            { name: "Random7", image: "https://picsum.photos/150?random=3" },
            { name: "Random8", image: "https://picsum.photos/150?random=4" },
            { name: "Random9", image: "https://picsum.photos/150?random=5" },
            { name: "Random5", image: "https://picsum.photos/150?random=5" },
            { name: "Random6", image: "https://picsum.photos/150?random=6" },
            { name: "Random7", image: "https://picsum.photos/150?random=3" },
            { name: "Random8", image: "https://picsum.photos/150?random=4" },
            { name: "Random9", image: "https://picsum.photos/150?random=5" },
          ],
        },
        {
          name: "Subcategory 1.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 1.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
            { name: "Random5", image: "https://picsum.photos/150?random=5" },
            { name: "Random6", image: "https://picsum.photos/150?random=6" },
            { name: "Random7", image: "https://picsum.photos/150?random=3" },
            { name: "Random8", image: "https://picsum.photos/150?random=4" },
            { name: "Random9", image: "https://picsum.photos/150?random=5" },
          ],
        },
        {
          name: "Subcategory 1.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 1.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
            { name: "Random5", image: "https://picsum.photos/150?random=5" },
            { name: "Random6", image: "https://picsum.photos/150?random=6" },
            { name: "Random7", image: "https://picsum.photos/150?random=3" },
            { name: "Random8", image: "https://picsum.photos/150?random=4" },
            { name: "Random9", image: "https://picsum.photos/150?random=5" },
          ],
        },
        {
          name: "Subcategory 1.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 1.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
            { name: "Random5", image: "https://picsum.photos/150?random=5" },
            { name: "Random6", image: "https://picsum.photos/150?random=6" },
            { name: "Random7", image: "https://picsum.photos/150?random=3" },
            { name: "Random8", image: "https://picsum.photos/150?random=4" },
            { name: "Random9", image: "https://picsum.photos/150?random=5" },
          ],
        },
        {
          name: "Subcategory 1.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 1.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
            { name: "Random5", image: "https://picsum.photos/150?random=5" },
            { name: "Random6", image: "https://picsum.photos/150?random=6" },
            { name: "Random7", image: "https://picsum.photos/150?random=3" },
            { name: "Random8", image: "https://picsum.photos/150?random=4" },
            { name: "Random9", image: "https://picsum.photos/150?random=5" },
          ],
        },
        {
          name: "Subcategory 1.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
      ],
    },
    {
      name: "Category 2",
      subcategories: [
        {
          name: "Subcategory 2.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 2.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
      ],
    },
    {
      name: "Category 3",
      subcategories: [
        {
          name: "Subcategory 3.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 3.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
          ],
        },
      ],
    },
    {
      name: "Category 1",
      subcategories: [
        {
          name: "Subcategory 1.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
            { name: "Random5", image: "https://picsum.photos/150?random=5" },
            { name: "Random6", image: "https://picsum.photos/150?random=6" },
            { name: "Random7", image: "https://picsum.photos/150?random=3" },
            { name: "Random8", image: "https://picsum.photos/150?random=4" },
            { name: "Random9", image: "https://picsum.photos/150?random=5" },
          ],
        },
        {
          name: "Subcategory 1.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
      ],
    },
    {
      name: "Category 2",
      subcategories: [
        {
          name: "Subcategory 2.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 2.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
      ],
    },
    {
      name: "Category 3",
      subcategories: [
        {
          name: "Subcategory 3.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 3.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
          ],
        },
      ],
    },
    {
      name: "Category 2",
      subcategories: [
        {
          name: "Subcategory 2.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 2.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
      ],
    },
    {
      name: "Category 3",
      subcategories: [
        {
          name: "Subcategory 3.1",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
            { name: "Random4", image: "https://picsum.photos/150?random=4" },
          ],
        },
        {
          name: "Subcategory 3.2",
          subsubcategories: [
            { name: "Random1", image: "https://picsum.photos/150?random=1" },
            { name: "Random2", image: "https://picsum.photos/150?random=2" },
            { name: "Random3", image: "https://picsum.photos/150?random=3" },
          ],
        },
      ],
    },
  ];

  const handleOptionClick = (option, type = "subcategory") => {
    console.log(`Selected: ${option}`);
    if (type === "subcategory") {
      setHoveredSubsubcategory(0);
    }
  };

  return (
    <div className="hidden md:flex justify-between mt-2">
      <ul
        className="flex gap-5 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <li
          className={`relative flex items-center gap-2 cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          } ${
            isCategoriesHovered ? "font-bold underline underline-offset-4" : ""
          }`}
          onMouseEnter={() => {
            setIsCategoriesHovered(true);
            setHoveredCategory(0);
            setHoveredSubcategory(0);
            setHoveredSubsubcategory(0);
          }}
          onMouseLeave={() => setIsCategoriesHovered(false)}
        >
          <span>
            <RxHamburgerMenu />
          </span>
          All Categories
          {isCategoriesHovered && (
            <div className="absolute top-6 -left-4 right-0 flex bg-white shadow-lg rounded-md p-2 z-50 w-[100vw] h-80 lg:h-96 px-5">
              <ul className="w-1/4 border-r border-gray-200 lg:max-h-96 overflow-y-auto mt-5 space-y-5 ">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 font-medium ${
                      hoveredCategory === index ? "bg-gray-100" : ""
                    }`}
                    onMouseEnter={() => {
                      setHoveredCategory(index);
                      setHoveredSubcategory(0);
                      setHoveredSubsubcategory(0);
                    }}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>

              {/* Subcategories and Sub-subcategories List */}
              <div className="flex w-full justify-between px-4 mt-5">
                {/* Subcategories List */}
                <ul className="w-2/5 lg:w-1/3 border-r border-gray-200 overflow-y-auto space-y-3">
                  {categories[hoveredCategory]?.subcategories.map(
                    (subcategory, subIndex) => (
                      <li
                        key={subIndex}
                        className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 ${
                          hoveredSubcategory === subIndex ? "bg-gray-200" : ""
                        }`}
                        onMouseEnter={() => {
                          setHoveredSubcategory(subIndex);
                          setHoveredSubsubcategory(0);
                        }}
                        onClick={() =>
                          handleOptionClick(subcategory.name, "subcategory")
                        }
                      >
                        {subcategory.name}
                      </li>
                    )
                  )}
                </ul>

                {/* Sub-subcategories List */}
                <ul className="w-full pl-4 overflow-y-auto grid grid-cols-2 lg:grid-cols-4 ">
                  {categories[hoveredCategory]?.subcategories[
                    hoveredSubcategory
                  ]?.subsubcategories.map((subSubcategory, subSubIndex) => (
                    <li
                      key={subSubIndex}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-center h-28 text-gray-700 ${
                        hoveredSubsubcategory === subSubIndex
                          ? "bg-gray-200"
                          : ""
                      }`}
                      onMouseEnter={() => setHoveredSubsubcategory(subSubIndex)}
                      onClick={() =>
                        handleOptionClick(subSubcategory.name, "subsubcategory")
                      }
                    >
                      <img
                        src={subSubcategory.image}
                        alt={subSubcategory.name}
                        className="w-14 h-14 object-cover"
                      />
                      <p>{subSubcategory.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* Shop Item - Bold on hover */}
        <Link to="/category">
          <li
            className={`cursor-pointer ${
              isHovered ? "text-black" : "text-white"
            } ${isShopHovered ? "font-bold underline underline-offset-4" : ""}`}
            onMouseEnter={() => setIsShopHovered(true)}
            onMouseLeave={() => setIsShopHovered(false)}
          >
            Shop By Category
          </li>
        </Link>
      </ul>
      <ul
        className="flex gap-5 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link>
          <li
            className={`cursor-pointer ${
              isHovered ? "text-black" : "text-white"
            } ${
              isBuyerCentralHovered
                ? "font-bold underline underline-offset-4"
                : ""
            }`}
            onMouseEnter={() => setIsBuyerCentralHovered(true)}
            onMouseLeave={() => setIsBuyerCentralHovered(false)}
          >
            Buyer Central
          </li>
        </Link>

        <li
          className={`cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          } ${
            isHelpCenterHovered ? "font-bold underline underline-offset-4" : ""
          }`}
          onMouseEnter={() => setIsHelpCenterHovered(true)}
          onMouseLeave={() => setIsHelpCenterHovered(false)}
        >
          Help Center
        </li>
        <li
          className={`cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          } ${
            isGetTheAppHovered ? "font-bold underline underline-offset-4" : ""
          }`}
          onMouseEnter={() => setIsGetTheAppHovered(true)}
          onMouseLeave={() => setIsGetTheAppHovered(false)}
        >
          Get the app
        </li>
        <Link to="/becomeSupplier">
          <li
            className={`cursor-pointer ${
              isHovered ? "text-black" : "text-white"
            } ${
              isSupplierHovered ? "font-bold underline underline-offset-4" : ""
            }`}
            onMouseEnter={() => setIsSupplierHovered(true)}
            onMouseLeave={() => setIsSupplierHovered(false)}
          >
            Become a supplier
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SubNavbar;
