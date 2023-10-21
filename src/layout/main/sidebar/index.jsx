import React from "react";
import Logo from "./logo";
import Menu from "./menu/index.jsx";

const Sidebar = () => {
  return (
    <aside className="w-[275px] min-h-screen px-2">
      <Logo></Logo>
      <Menu></Menu>
    </aside>
  );
};

export default Sidebar;
