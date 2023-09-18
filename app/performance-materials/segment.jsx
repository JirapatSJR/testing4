import Link from "next/link";
import React from "react";

const Segment = ({ label, href }) => {
  return (
    <Link href={href}>
      <div className="2xl:font-bold font-semibold 2xl:text-sm text-xs text-white flex items-center justify-center border border-white4wd h-16  hover:bg-green4wd hover:bg-opacity-20">
        {label}
      </div>
    </Link>
  );
};

export default Segment;
