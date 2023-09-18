"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import CreatableSelect from "react-select/creatable";

const SearchBar = ({ searchResult = [] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const removeQueryString = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams);
      params.delete(name);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="w-[600px]">
      <CreatableSelect
        className="text-black"
        name="searchbar"
        placeholder="Search..."
        options={searchResult}
        onChange={(e) => {
          if (e) {
            router.replace(
              pathname + "?" + createQueryString("search", e.value),
              { scroll: false }
            );
          } else {
            router.replace(pathname + "?" + removeQueryString("search"), {
              scroll: false,
            });
          }
        }}
        isClearable
        isSearchable
      />
    </div>
  );
};

export default SearchBar;
