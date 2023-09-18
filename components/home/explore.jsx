import React from "react";
import ImageWithBG from "../shared/imageWithBG";
import Link from "next/link";

const Explore = ({ image, title, desc, url }) => {
  return (
    <div className="flex items-center justify-center md:flex-col flex-row 2xl:w-96 md:w-80 w-[85%] relative md:gap-0 gap-4">
      <ImageWithBG
        image={image}
        classProps="2xl:w-96 md:w-72 2xl:h-96 md:h-72 w-24 h-24 relative"
      />
      <div className="flex flex-col 2xl:gap-4 md:gap-2 gap-1 md:px-2 px-0 md:mt-4 mt-0 relative md:w-[100%] w-[60%]">
        <div className=" w-full md:font-extrabold font-bold 2xl:text-2xl md:text-lg text-sm flex items-center md:text-center md:justify-center justify-normal text-left uppercase">
          {title}
        </div>
        <div className=" w-full md:font-extralight font-thin 2xl:text-xl md:text-base text-xs  text-white items-center md:text-center text-left md:justify-center justify-normal">
          {desc}
        </div>
        <Link className="flex md:justify-center justify-normal" href={url}>
          <div className="2xl:w-64 md:w-32 w-24 rounded-3xl bg-green4wd text-white flex items-center 2xl:text-2xl md:text-lg text-xs font-extrabold p-1 justify-center">
            EXPLORE
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
