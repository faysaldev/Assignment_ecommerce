import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="px-4 pt-6 mx-auto max-w-7xl">
      {/* header wrapper */}
      <div className="flex items-center justify-between">
        {/* left icon */}
        <div className="w-[100px]">
          <Image src="/Asset/logoB.png" width={50} height={20} />
        </div>

        {/* middle nav */}
        <div className="flex items-center space-x-4">
          <Link className="relative" href="/">
            <p className="active_underline uppercase font-semibold text-[#000]">
              Home
            </p>
          </Link>
          <Link className="relative" href="/">
            <p className="active_underline uppercase font-semibold text-[#000]">
              The Journey
            </p>
          </Link>
          <Link className="relative" href="/">
            <p className="active_underline uppercase font-semibold text-[#000]">
              Store
            </p>
          </Link>
          <Link className="relative" href="/">
            <p className="active_underline uppercase font-semibold text-[#000]">
              Contact
            </p>
          </Link>
        </div>
        {/* right */}
        <div className="flex items-center space-x-2">
          <UserIcon className="h-6 text-[#777]" />
          {/* text */}
          <p className="uppercase font-semibold text-[#000]">Gagan</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
