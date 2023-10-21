import React from "react";

const Search = () => {
  return (
    <div className="min-h[32px] h-[53px] mb-3  flex items-center">
      <label className="h-[43px] rounded-full bg-[#202327]  relative border border-transparent w-full group focus-within:bg-black focus-within:border-[#1d9bf0]">
        <div className="w-[56px] h-full flex items-center justify-center  absolute top-0 left-0">
          <svg
            viewBox="0 0 24 24 "
            height={18.75}
            className="min-w-[32px] text-[#71767b]  "
          >
            <g>
              <path
                fill="#fff"
                d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
              ></path>
            </g>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full bg-transparent rounded-full outline-none pl-[55px] text-[15px]"
        />
        <button className="h-[22px] w-[22px] rounded-full ">
          <svg viewBox="0 0 15 15" width={10} height={10}>
            <g>
              <path fill="#fff"></path>
            </g>
          </svg>
        </button>
      </label>
    </div>
  );
};

export default Search;
