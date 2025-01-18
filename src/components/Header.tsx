import { UserButton } from "@clerk/nextjs";
import { MenuItem } from "@/type";
import Image from "next/image";
import React from "react";
import { BiPackage } from "react-icons/bi";
import { FaTaxi } from "react-icons/fa";

const Header = () => {
  const headerMenu: MenuItem[] = [
    {
      id: 1,
      title: "Ride",
      icon: <FaTaxi />,
    },
    {
      id: 2,
      title: "Package",
      icon: <BiPackage />,
    },
  ];

  return (
    <div className="w-full shadow-xl mb-20 px-3 py-2">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="relative w-16 h-16">
          <Image alt="logo" fill src="/logo.png" className="object-contain" />
        </div>

        <div className="flex items-center gap-16">
          <div className="flex items-center gap-8">
            {headerMenu.map((item) => (
              <div
                key={item.id}
                className="flex  items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="text-black text-lg">{item.icon}</div>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
