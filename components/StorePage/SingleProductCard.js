import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { addToBasket } from "../../redux/Slice/appSlice";
import { useDispatch } from "react-redux";

const SingleProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const AddtoCardHandler = () => {
    dispatch(
      addToBasket({
        product: product,
        quantity: 1,
      })
    );
  };
  return (
    <div className="p-1 cursor-pointer group">
      <img
        className="w-full object-cover max-h-[120px]"
        src={product.image}
        alt=""
      />
      {/* ditals */}
      <div className="pt-3 pr-3">
        <h1 className="text-2xl">{product.name}</h1>
        <div className="flex items-center justify-between">
          <p>Rs. {product.price}/-</p>
          <div className="flex items-center space-x-1">
            <StarIcon className="h-4 text-orange-400" />
            <StarIcon className="h-4 text-orange-400" />
            <StarIcon className="h-4 text-orange-400" />
            <StarIcon className="h-4 text-orange-400" />
            <StarIcon className="h-4 text-orange-400" />
          </div>
        </div>
        {/* buttons */}
        <div className="opacity-0 flex group-hover:opacity-100 group-hover:ease-in-out group-hover:duration-150 items-center justify-between mt-8">
          <button
            onClick={AddtoCardHandler}
            className="px-3 py-1 bg-black text-white rounded text-sm"
          >
            Add to Cart
          </button>
          <button className="px-3 py-1 bg-gray-500 text-white rounded">
            Shere Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
