"use client";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";

export default function BreadcrumbsEx({ paths }) {
  return (
    <div className="md:pl-12 md:pt-2 pl-4 pt-1 w-full sm:flex hidden responsive">
      <Breadcrumbs
        separator=">"
        className="bg-transparent md:text-base !text-xs"
      >
        {paths.map((href, i) => {
          if (i < paths.length - 1)
            return (
              <Link
                href={href.url || "#"}
                key={i}
                className=" text-white opacity-60 font-thin"
              >
                {href.label}
              </Link>
            );
          else
            return (
              <Link
                href={href.url || "#"}
                key={i}
                className=" text-white font-light"
              >
                {href.label}
              </Link>
            );
        })}
      </Breadcrumbs>
    </div>
  );
}
