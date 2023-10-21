import React from "react";
import Search from "./search";
import Topics from "../../../assets/components/topics";

const RightBar = () => {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search></Search>
      <Topics></Topics>
    </aside>
  );
};

export default RightBar;
