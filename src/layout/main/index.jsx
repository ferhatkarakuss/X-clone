import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar/rightbar";

const MainLayout = () => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar></Sidebar>
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet></Outlet>
        </main>
        <RightBar></RightBar>
      </main>
    </div>
  );
};

export default MainLayout;
