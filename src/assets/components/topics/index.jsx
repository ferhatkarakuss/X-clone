import React from "react";

const Topics = () => {
  return (
    <section className="bg-[#16181c] rounded-2xl border border-[#16181c]  flex flex-col gap-2.5 text-[#e7e9ea]">
      <h6 className="text-xl leading-6 font-extrabold px-3 py-2 ">
        Trends for you{" "}
      </h6>

      <div className=" hover:bg-white/[0.03] py-2 pl-3">
        <p className="text-gray-500">Sports · Trending</p>
        <h2 className="font-bold ">#Football News</h2>
        <p className="text-gray-500"> 28.2K posts</p>
      </div>
      <div className=" hover:bg-white/[0.03]  py-2 pl-3 ">
        <p className="text-gray-500">News · Trending</p>
        <h2 className="font-bold ">#Starlink</h2>
        <p className="text-gray-500">24.6K posts</p>
      </div>
      <div className=" hover:bg-white/[0.03] py-2  pl-3">
        <p className="text-gray-500">Sports · Trending</p>
        <h2 className="font-bold ">#Muslera</h2>
        <p className="text-gray-500">21.2K posts</p>
      </div>
      <div className=" hover:bg-white/[0.03] py-2  pl-3">
        <p className="text-gray-500">News · Trending</p>
        <h2 className="font-bold ">#New York</h2>
        <p className="text-gray-500">12.2K posts</p>
      </div>
    </section>
  );
};

export default Topics;
