import Image from "next/image";
import React from "react";

const ImageWithBG = ({
  image,
  color = "green",
  size = 450,
  classProps = "",
}) => {
  return (
    <div className={classProps}>
      <div
        className={`flex items-center justify-center relative w-full h-full ${classProps}`}
      >
        <Image
          src={image}
          width={size}
          height={size}
          alt={image}
          className="absolute "
        />
        {
          {
            white: <div className="w-full h-full bg-white rounded-full" />,
            green: <div className="w-full h-full bg-green4wd rounded-full" />,
          }[color]
        }
      </div>
    </div>
  );
};

export default ImageWithBG;
