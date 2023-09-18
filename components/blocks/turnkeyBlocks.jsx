"use client";
import { Button, Collapse } from "@material-tailwind/react";
import React, { useState } from "react";

const InnerBlock = ({ block }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div
      className="w-full bg-green4wd 2xl:py-16 md:py-12 py-8 2xl:px-28 md:px-16 px-10 text-white4wd"
      key={block.id}
    >
      <div className="md:w-64 w-72 flex flex-col md:items-center items-start">
        <h2 className=" 2xl:text-4xl md:text-3xl text-base font-bold ">
          {block.title}
        </h2>
        <div className="border-t-2 border-white4wd w-full mt-2" />
      </div>
      <div className="md:mt-10 mt-4">
        <p className="2xl:text-2xl md:text-xl text-sm mb-6">{block.desc}</p>
        <Button
          size="lg"
          className="bg-white4wd text-green4wd rounded-none shadow-inner shadow-gray-400 font-bold md:text-2xl text:xl md:h-16 h-12 md:w-64 w-52"
          onClick={toggleOpen}
        >
          {block.ButtonText}
        </Button>
        <Collapse open={open}>
          <div className="mt-10 px-4 2xl:text-2xl md:text:xl text-base">
            {block?.items?.map((item) => {
              return <p key={item.id}>{item.text}</p>;
            })}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

const TurnkeyBlock = ({ blocks }) => {
  return (
    <div className="w-full bg-white grid 2xl:grid-cols-2 grid-cols-1 gap-1">
      {blocks.map((block) => {
        return <InnerBlock block={block} key={block.id} />;
      })}
    </div>
  );
};

export default TurnkeyBlock;
