"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";

const Globe = ({ pinLocation, pinIcon }) => {
  const [hover, setHover] = useState(null);
  const PlacePin = () => {
    return (
      <div className=" 2xl:left-0 2xl:top-0 md:left-[-8px]  left-[-20px] relative">
        <Image
          width={25}
          height={30}
          src={pinIcon.attributes.url}
          alt={"pin"}
        />
      </div>
    );
  };

  return (
    <div className="2xl:p-8 md:p-4 p-2 w-full">
      <Typography className="2xl:font-extrabold 2xl:text-5xl 2xl:mt-24 md:font-bold md:text-4xl md:mt-8 mt-8 font-semibold text-2xl 2xl:px-12 md:px-8 px-6">
        Location
      </Typography>
      <div className="2xl:mt-16 md:mt-8 mt-4 relative flex md:flex-row flex-col items-center justify-center w-full gap-4">
        <div className="relative  2xl:w-[900px] md:w-[500px] w-[300px] 2xl:h-[500px] h-auto">
          <div
            className={`absolute 2xl:top-[29.5%] 2xl:left-[47%] md:top-[22.8%] md:left-[47.8%] top-[16.5%] left-[51%] transition-opacity w-fit  ${
              hover === pinLocation[0].id ? "opacity-100" : ""
            } opacity-0`}
          >
            <PlacePin />
          </div>
          <div
            className={`absolute 2xl:top-[50.5%] 2xl:left-[73.5%] md:top-[46.5%] md:left-[74%] top-[40%] left-[78%] transition-opacity w-fit  ${
              hover === pinLocation[1].id ? "opacity-100" : ""
            } opacity-0`}
          >
            <PlacePin />
          </div>
          <div
            className={`absolute 2xl:top-[46.5%] 2xl:left-[77%] md:top-[41%] md:left-[77.2%] top-[34%] left-[81%] transition-opacity w-fit ${
              hover === pinLocation[2].id ? "opacity-100" : ""
            } opacity-0`}
          >
            <PlacePin />
          </div>
          <div
            className={`absolute 2xl:top-[46.5%] 2xl:left-[77%] md:top-[41%] md:left-[77.2%] top-[34%] left-[81%] transition-opacity w-fit ${
              hover === pinLocation[3].id ? "opacity-100" : ""
            } opacity-0`}
          >
            <PlacePin />
          </div>
          <div
            className={`absolute 2xl:top-[29.6%] 2xl:left-[45.5%] md:top-[22%] md:left-[46%] top-[16.5%] left-[49.5%] transition-opacity w-fit ${
              hover === pinLocation[4].id ? "opacity-100" : ""
            } opacity-0`}
          >
            <PlacePin />
          </div>
          <div className="flex items-center self-center h-full">
            <Image
              width={1000}
              height={500}
              src={"/4wdGlobe.png"}
              alt="globe"
            />
          </div>
        </div>
        <div className="relative  h-full flex md:flex-col flex-row flex-wrap justify-center items-center md:h-full">
          {pinLocation.map((location) => {
            return (
              <div
                key={location.id}
                onMouseOver={() => setHover(location.id)}
                onMouseLeave={() => setHover(null)}
                className="2xl:p-4 md:p-3 p-2 hover:bg-green4wd hover:text-white4wd transition-colors 2xl:w-48 md:w-36 w-28  flex justify-center items-center"
              >
                <Typography
                  key={location.id}
                  className="2xl:text-xl md:text-base text-xs 2xl:font-bold md:font-semibold font-medium"
                >
                  {location.title}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Globe;
