import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ProductData } from "../../utils/data";
import SingleProductCard from "./SingleProductCard";

const ProductsSection = () => {
  return (
    <div className="shadow rounded-md">
      {/* product wrapper */}
      <div className="px-5 py-6">
        {/* top */}
        <div className="flex items-center justify-between">
          <h1 className="uppercase text-2xl font-semibold">Shoes</h1>
          {/* right */}
          <div className="flex items-center space-x-3 cursor-pointer font-bold">
            <MagnifyingGlassIcon className="h-6" />
            <p className="px-2 py-1 border border-gray-700">Sort by</p>
          </div>
        </div>

        {/* all shouse products */}
        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {ProductData.map((product) => (
            <SingleProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
