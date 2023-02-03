import React, { useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";

const FilterSide = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  // todo for cost filtering

  const handleRadioButtonChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // todo for color filtering
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="px-5 py-6 border shadow-md min-w-[350px] md:min-w-[250px]">
      {/* wrapper */}
      <div className="space-y-3">
        {/* filter top  */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">Filters</h2>
          {/* icons filter */}
          <FunnelIcon className="h-7 cursor-pointer" />
        </div>
        {/* cost */}
        <div className="pt-2">
          <h2 className="text-xl font-semibold pb-2">Cost</h2>
          <div className="space-y-2">
            <div className="input_flex">
              <input
                type="radio"
                value="1500-4000"
                checked={selectedValue === "1500-4000"}
                onChange={handleRadioButtonChange}
              />
              <p>Rs. 1500-4000</p>
            </div>
            <div className="input_flex">
              <input
                type="radio"
                value="4001-7000"
                checked={selectedValue === "4001-7000"}
                onChange={handleRadioButtonChange}
              />
              <p>Rs. 4001-7000</p>
            </div>
            <div className="input_flex">
              <input
                type="radio"
                value="7001+"
                checked={selectedValue === "7001+"}
                onChange={handleRadioButtonChange}
              />
              <p>Rs. 7001+</p>
            </div>
          </div>
        </div>

        {/* color option */}
        <div>
          <h2 className="text-xl font-semibold pb-2">Colour</h2>
          <div className="space-x-3">
            <div
              className={`inline-block w-[30px] h-[30px] bg-[red] cursor-pointer ${
                selectedColor == "red" && "border-2 border-gray-700"
              }`}
              onClick={() => setSelectedColor("red")}
            ></div>
            <div
              className={`inline-block w-[30px] h-[30px] bg-[#4fb7dc] cursor-pointer ${
                selectedColor == "blue" && "border-2 border-gray-700"
              }`}
              onClick={() => setSelectedColor("blue")}
            ></div>
            <div
              className={`inline-block w-[30px] h-[30px] bg-[#f5ea5e] cursor-pointer ${
                selectedColor == "yellow" && "border-2 border-gray-700"
              }`}
              onClick={() => setSelectedColor("yellow")}
            ></div>
            <div
              className={`inline-block w-[30px] h-[30px] bg-[#4fdc84] cursor-pointer ${
                selectedColor == "green" && "border-2 border-gray-700"
              }`}
              onClick={() => setSelectedColor("green")}
            ></div>
            <div
              className={`inline-block w-[30px] h-[30px] bg-[#babf22] cursor-pointer ${
                selectedColor == "orange" && "border-2 border-gray-700"
              }`}
              onClick={() => setSelectedColor("orange")}
            ></div>
          </div>
        </div>
        {/* design templates */}
        <div>
          <h2 className="text-xl font-semibold pb-2">Design templates</h2>
          <div className="space-y-2">
            <div className="input_flex">
              <input
                type="radio"
                value="2"
                checked={selectedValue === "2"}
                onChange={handleRadioButtonChange}
              />
              <p>2</p>
            </div>
            <div className="input_flex">
              <input
                type="radio"
                value="3"
                checked={selectedValue === "3"}
                onChange={handleRadioButtonChange}
              />
              <p>3</p>
            </div>
            <div className="input_flex">
              <input
                type="radio"
                value="3+"
                checked={selectedValue === "3+"}
                onChange={handleRadioButtonChange}
              />
              <p>3+</p>
            </div>
          </div>
        </div>
        {/* type */}
        <div>
          <h2 className="text-xl font-semibold pb-2">Type</h2>
          <div className="space-y-2">
            <div className="input_flex">
              <input
                type="radio"
                value="Loafers"
                checked={selectedValue === "Loafers"}
                onChange={handleRadioButtonChange}
              />
              <p>Loafers</p>
            </div>
            <div className="input_flex">
              <input
                type="radio"
                value="Sneakers"
                checked={selectedValue === "Sneakers"}
                onChange={handleRadioButtonChange}
              />
              <p>Sneakers</p>
            </div>
          </div>
        </div>
        {/* apply button */}
        <div className="flex items-center justify-center pt-16">
          <button className="px-3 py-1 bg-black text-white rounded">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
