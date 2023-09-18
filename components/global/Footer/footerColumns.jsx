import Link from "next/link";
import React from "react";
import SocialNetworks from "./socialNetworks";

const FooterColumns = ({ footerColumns, socialNetworks }) => {
  return (
    <div className="w-full font-bold 2xl:text-base text-sm  flex flex-col md:flex-row justify-evenly">
      {footerColumns.map((column, i) => {
        return (
          <div className="flex flex-row md:flex-col">
            {column.links.map((link) => {
              return (
                <div className="px-2 py-4 hover:underline hover:bg-green4wd hover:bg-opacity-10">
                  <Link href={link.href} target={link.target}>
                    {link.label}
                  </Link>
                </div>
              );
            })}
            {i == 0 && <SocialNetworks socialNetworks={socialNetworks} />}
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
