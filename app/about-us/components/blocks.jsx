"use client";
import React from "react";

const Blocks = ({ blocks }) => {
  return (
    <div className="2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid md:gap-6 gap-4 md:mt-8 mt-2">
      {blocks?.map((block) => {
        return (
          <div
            className="w-full 2xl:min-h-[280px] md:min-h-[200px] min-h-[120px]"
            id={block.id}
            key={block.id}
          >
            <h4 className="font-extrabold 2xl:text-3xl md:text-xl text-base text-green4wd ">
              {block.title}
            </h4>
            <p className="2xl:text-lg md:text-base text-xs 2xl:mt-4 md:mt-2 mt-1 2xl:leading-7 md:leading-5 leading-4 text-white4wd">
              {block.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Blocks;
