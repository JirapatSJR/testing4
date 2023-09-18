import React from "react";

const PageHeaderLine = ({ header = null, desc = null }) => {
  return (
    <div>
      <div className="2xl:px-72 md:px-36 px-8 2xl:mt-20 md:mt-12 mt-6 flex flex-col items-center whitespace-pre-wrap">
        <div className="w-full font-bold 2xl:text-4xl md:text-3xl text-lg md:text-center text-left tracking-widest uppercase">
          {header}
        </div>
        <div className=" 2xl:text-xl md:text-lg text-sm 2xl:mt-8 mt-4 md:text-center text-left text-white4wd">
          {desc}
        </div>
      </div>
      <div className="2xl:border-t-4 border-t-2 border-green4wd 2xl:mt-16 mt-8 md:mx-0 mx-6"></div>
    </div>
  );
};

export default PageHeaderLine;
