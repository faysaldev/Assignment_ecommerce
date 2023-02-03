import React from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  removeFulProduct,
} from "../../redux/Slice/appSlice";

const SingleCartItem = ({ product: { product, quantity } }) => {
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
    <div className="cursor-pointer flex items-center space-x-3 border-b py-3">
      {/* image site */}
      <div className="w-[100px] relative">
        <img className="w-full object-fill" src={product?.image} alt="" />
        <button onClick={() => dispatch(removeFulProduct(product.id))}>
          <XCircleIcon className="h-6 absolute -top-3 -left-1 text-[red] " />
        </button>
      </div>
      {/* right */}
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <h3 className="text-base font-semibold">Rs. {product.price}/-</h3>
        <div className="flex space-x-3 pt-1">
          <button onClick={AddtoCardHandler}>
            {" "}
            <PlusCircleIcon className="h-6" />
          </button>
          <p className="text-base">{quantity}</p>
          <button onClick={() => dispatch(removeFromBasket(product.id))}>
            <MinusCircleIcon className="h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
