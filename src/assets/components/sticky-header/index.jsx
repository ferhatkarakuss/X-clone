import React from "react";

const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-10 bg-black/[.65] backdrop-blur-md">
      <h3 className="px-4 h-[3.3rem] flex items-center text-xl border-b border-[#2f3336]">
        Home{" "}
      </h3>
    </header>
  );
};

export default StickyHeader;
