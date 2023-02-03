import Image from "next/image";
import React from "react";

const SingleTeamCard = ({ item }) => {
  return (
    <div>
      {/* card wrapper  */}
      <div className="border border-gray-300 pb-8 shadow-md rounded-md cursor-pointer">
        {/* image */}
        <div className="max-w-full h-[235px]">
          <img src={item?.image} className="w-full h-full object-fill" />
        </div>
        {/* content */}
        <div className="p-y flex items-center flex-col pt-8">
          <h2 className="text-2xl font-semibold text-black">{item.name}</h2>
          <p className="text-lg text-center">{item.position}</p>
          {/* social icons */}
          <div className="flex items-center space-x-2 pt-4">
            {item?.social?.map(({ icon }) => (
              <img src={icon} className="w-9 h-7 object-contain" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeamCard;
