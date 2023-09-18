"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

export function Pagination({ meta }) {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

  const setPage = useCallback(
    (value) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", value);

      return params.toString();
    },
    [searchParams]
  );

  const PageIndex = () => {
    const pageIndex = [];
    for (
      let index = 0;
      index < meta.pagination.total / meta.pagination.limit;
      index++
    ) {
      pageIndex.push(
        <div
          key={index}
          className={`${
            currentPage == index ? "font-bold" : "text-opacity-60 text-gray-300"
          } cursor-pointer`}
          onClick={() => {
            router.replace(pathname + "?" + setPage(index), {
              scroll: false,
            });
            setCurrentPage(index);
          }}
        >
          {index + 1}
        </div>
      );
    }
    return pageIndex;
  };
  return (
    <div className="2xl:mt-10 w-full">
      <div className="flex flex-row text-white4wd items-center justify-center gap-4 text-lg">
        <PageIndex />
      </div>
    </div>
  );
}
