import React from "react";
import Header from "../components/Header/Header";
import CartSection from "../components/StorePage/CartSection";
import FilterSide from "../components/StorePage/FilterSide";
import ProductsSection from "../components/StorePage/ProductsSection";
import { SocialData } from "../utils/data";

const StorePage = () => {
  return (
    <div className="p-4 mx-auto">
      <Header />
      <main className="pt-16 max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:space-x-6 lg:flex-row mx-auto items-start justify-between">
          {/* todo left filter option */}
          <FilterSide />
          {/* MIddleSite */}
          <ProductsSection />
          {/* cartSite */}
          <CartSection />
        </div>
      </main>
    </div>
  );
};

export default StorePage;
