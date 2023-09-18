import ImageWithBG from "@/components/shared/imageWithBG";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatalogLogo = ({ label, href, img }) => {
  return (
    <div className="flex flex-col items-center 2xl:w-[270px] md:w-[200px] w-[120px] 2xl:h-[470px] md:h-[320px] h-[190px] relative">
      <Link
        href={href}
        className="2xl:w-[300px] 2xl:h-[300px] md:w-[160px] md:h-[160px] w-[100px] h-[100px] relative"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-full h-full bg-white rounded-full relative" />
          <Image
            src={img}
            width={350}
            height={350}
            alt={label}
            className="absolute 2xl:w-[420px] 2xl:mt-[-30px] 2xl:h-[420px] md:mt-[-16px] md:w-[224px] md:h-[224px] mt-[-10px] w-[140px] h-[140px] pointer-events-none max-w-none"
          />
        </div>
        <h5 className=" text-white text-center 2xl:text-2xl md:text-base text-xs h-20 2xl:mt-16 md:mt-9 mt-6 uppercase">
          {label}
        </h5>
      </Link>
    </div>
  );
};

export default CatalogLogo;
