import React from "react";
import Header from "../components/Header/Header";
import SingleTeamCard from "../components/TeamPage/SingleTeamCard";
import { SocialData } from "../utils/data";

const index = () => {
  return (
    <div className="p-4 mx-auto">
      <Header />
      <main className="pt-36 max-w-[90rem] mx-auto">
        <h2 className="text-center text-2xl md:text-3xl text-black font-semibold">
          Without bonding and coordination, every project is a failure. Look at
          who makes KICKSUP great ;)
        </h2>
        {/* all teammates */}
        <div className="pt-16 grid gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8">
          {SocialData?.map((item) => (
            <SingleTeamCard key={item.id} item={item} />
          ))}
        </div>

        <h1 className="text-center text-2xl md:text-3xl text-black font-semibold mt-8">
          and You! ;)
        </h1>
      </main>
    </div>
  );
};

export default index;
