import Link from "next/link";
import React from "react";

const EnquireButton = ({
  text = "ENQUIRE NOW",
  href = "contact-us",
  cssColor = "green4wd",
}) => {
  return (
    <div className="w-full relative flex justify-center">
      <Link href={href} className="md:w-auto w-full">
        <div
          className={`${
            cssColor === "green4wd" ? "bg-green4wd" : "bg-orange4wd"
          } bg-or md:h-16 2xl:w-60 md:w-48 w-full 2xl:py-8 md:py-6 py-3 px-3 md:rounded-lg text-white flex items-center justify-center 2xl:text-xl md:text-lg text-lg font-bold`}
        >
          {text}
        </div>
      </Link>
    </div>
  );
};

export default EnquireButton;
