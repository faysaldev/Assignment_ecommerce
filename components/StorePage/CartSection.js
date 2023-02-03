import React from "react";
import {
  ShoppingBagIcon,
  HomeIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../redux/Slice/appSlice";
import SingleCartItem from "./SingleCartItem";

const CartSection = () => {
  const selectCartProduct = useSelector(selectItems);
  const TotalPrice = useSelector(selectTotal);
  console.log(selectCartProduct);
  return (
    <div className="px-4 py-8 border min-w-[350px] md:min-w-[270px] border-gray-100 flex flex-col shadow-md md:min-h-[70vh]">
      <div className="flex items-center justify-between">
        <h1 className="uppercase text-3xl">Cart</h1>
        {/* //todo cart icon */}
        <ShoppingBagIcon className="h-8" />
      </div>
      {/* middle content */}
      <div className="flex-1 pt-4">
        <div className="mt-4 max-h-[275px] overflow-scroll scrollbarHidden scroll-smooth space-y-3 ">
          {selectCartProduct?.map((item) => (
            <SingleCartItem key={item.quantity} product={item} />
          ))}
          {!selectCartProduct.length > 0 && (
            <h3 className="text-black text-sm text-center font-semibold pt-16">
              What's stopping you, designer?
            </h3>
          )}
        </div>
      </div>
      {/* bottom section */}
      <div className="flex flex-col">
        {selectCartProduct.length > 0 && (
          <p className="pb-2 font-semibold">Total : {TotalPrice}</p>
        )}
        {/* home */}
        <div className="flex items-center pb-6 space-x-6 cursor-pointer">
          <div className="flex items-center space-x-2">
            {/* icon */}
            <HomeIcon className="h-6" />

            <p>Home</p>
          </div>
          <div
            className="flex items-center space-x-2"
            onClick={() => document.querySelector(".input_date").click()}
          >
            <input type="date" className="hidden input_date" />
            {/* date */}
            <CalendarIcon className="h-6" />

            <p>Select Date</p>
          </div>
        </div>
        <button
          disabled={!selectCartProduct.length > 0}
          className={`bg-[#858585] text-white px-5 py-2 rounded max-w-fit mx-auto ${
            !selectCartProduct.length > 0 && "cursor-not-allowed"
          }`}
        >
          Order now
        </button>
      </div>
    </div>
  );
};

export default CartSection;
