"use client";
import Image from "next/image";
import React from "react";

const InnerFormulaOption = ({ formulaOption }) => {
  return (
    <div className="flex flex-col items-center md:px-20 px-10 ">
      <Image
        src={formulaOption?.image?.data[0].attributes.url}
        alt={formulaOption?.image?.data[0].attributes.name}
        width={240}
        height={240}
      />
      <h3 className="md:text-3xl text-xl md:mt-8 mt:4">
        {formulaOption.title}
      </h3>
      <div className="border-t-2 border-black4wd md:w-52 w-64 md:mt-6 mt-1" />
      <p className="text-center md:mt-6 mt-2 md:text-lg text-sm">
        {formulaOption.desc}
      </p>
    </div>
  );
};

const FormulaOptions = ({ header, formulaOptions }) => {
  return (
    <div className="bg-white4wd items-center flex flex-col text-black4wd md:p-8 p-4 ">
      <h2 className="md:text-4xl text-2xl mt-8">{header}</h2>
      <div className="border-t-2 border-black4wd w-52 md:mt-4 mt-2" />
      <div className="flex 2xl:flex-row flex-col md:mt-16 mt-4 md:gap-4 gap-10">
        {formulaOptions?.map((formulaOption) => {
          return (
            <InnerFormulaOption
              formulaOption={formulaOption}
              key={formulaOption.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FormulaOptions;
