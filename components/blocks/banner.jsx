import Image from "next/image";
import React from "react";

const Banner = ({ image, label }) => {
  return (
    <div className="w-full 2xl:h-[280px] md:h-44 h-[80px] overflow-hidden flex items-center relative">
      {label && (
        <div className="absolute w-full h-full">
          <div className="absolute md:w-5/12 w-1/2 bg-green4wd bg-opacity-80 h-full ">
            <div className="w-full h-full absolute flex items-center justify-center ">
              <span className="md:w-2/3 w-full absolute md:font-extrabold font-semibold 2xl:text-4xl md:text-2xl text-base text-white4wd 2xl:px-24 md:px-12 px-6 2xl:py-8 md:py-4 py-2 inline-block">
                {label}
              </span>
            </div>
          </div>
        </div>
      )}

      <Image
        src={image}
        width={1920}
        height={480}
        alt={"banner"}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Banner;
