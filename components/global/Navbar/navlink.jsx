"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavLinks = ({ links, navIcon }) => {
  const pathname = usePathname();
  const [showNav, setshowNav] = useState(false);
  return (
    <div
      className="flex flex-col w-full lg:flex-row lg:items-center items-end lg:justify-center  
    2xl:font-bold font-semibold lg:h-full h-8 2xl:pl-4 relative"
    >
      <div
        className={`w-8 h-8 flex items-center lg:hidden relative`}
        onClick={() => setshowNav(!showNav)}
      >
        <Image
          width={32}
          height={32}
          src={navIcon?.data.attributes.url}
          alt="navIcon"
        />
      </div>
      <div
        className={`${
          !showNav && "hidden"
        } lg:flex lg:relative absolute z-10 flex-row lg:h-full h-auto lg:w-full w-auto bg-black4wd lg:top-0 top-[32px]`}
      >
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.id}
              href={link.href}
              target={link.target}
              onClick={() => setshowNav(false)}
              className={`lg:h-full h-[40px] z-10 flex items-center lg:w-max w-full justify-center 2xl:px-4 px-2 ${
                isActive && "underline"
              } hover:bg-green4wd hover:bg-opacity-20 hover:underline`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
