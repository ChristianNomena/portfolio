import React from "react";
import MenuTitleButton from "./MenuTitleButton";

const MenuTitle = ({ setCurrentPage }) => {
  return (
    <div className="menu-title grid grid-cols-12">
      <MenuTitleButton
        rounded="rounded-tl-3xl"
        title="Resume"
        onClick={() => setCurrentPage("resume")}
      />
      <MenuTitleButton
        title="Web Development"
        onClick={() => setCurrentPage("web")}
      />
      <MenuTitleButton
        title="Mobile Development"
        onClick={() => setCurrentPage("mobile")}
      />
      <MenuTitleButton
        rounded="rounded-tr-3xl"
        title="Game Development"
        onClick={() => setCurrentPage("video-game")}
      />
    </div>
  );
};

export default MenuTitle;
