import React from "react";
import { HiDocument, HiOutlineDeviceMobile } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";

const MenuTitleButton = ({ title, onClick, rounded = "" }) => {
  return (
    <h2
      className={`bg-red-100 hover:bg-red-200 col-span-3 py-2 ${rounded} text-center cursor-pointer space-y-1`}
      onClick={onClick}
    >
      <div className="flex justify-center">
        {title === "Resume" && (
          <HiDocument className="text-red-300" size={40} />
        )}
        {title === "Web Development" && (
          <CgWebsite className="text-red-300" size={40} />
        )}
        {title === "Mobile Development" && (
          <HiOutlineDeviceMobile className="text-red-300" size={40} />
        )}
        {title === "Game Development" && (
          <IoGameController className="text-red-300" size={40} />
        )}
      </div>
      <button className="text-gray-600">{title}</button>
    </h2>
  );
};

export default MenuTitleButton;
