"use client";
import { Option } from "@material-tailwind/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import Select from "react-select";

export function Filter({ filters }) {
  const [collapse, setCollapse] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      params.delete("page");

      return params.toString();
    },
    [searchParams]
  );
  const removeQueryString = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams);
      params.delete(name);
      params.delete("page");

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="2xl:mt-10 md:py-0 py-2 w-full">
      <h4
        className="2xl:text-3xl md:text-2xl text-lg text-center font-extrabold"
        onClick={() => setCollapse(!collapse)}
      >
        Filters
      </h4>
      <div className={`mt-2 2xl:flex w-full ${collapse ? "hidden" : ""}`}>
        <div className="2xl:pl-4 p-0  w-full  text-base text-white4wd">
          <div className="px-2">
            {filters.map((filterType) => {
              return (
                <div key={filterType.attributes.slug}>
                  <SelectFilter
                    filters={filterType.attributes.filters.data}
                    filterValue={searchParams.get(filterType.id)}
                    filterName={filterType.attributes.title}
                    onclickState={(e) => {
                      if (e) {
                        router.replace(
                          pathname +
                            "?" +
                            createQueryString(filterType.id, e.value),
                          { scroll: false }
                        );
                      } else {
                        router.replace(
                          pathname + "?" + removeQueryString(filterType.id),
                          { scroll: false }
                        );
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SelectFilter({
  filters,
  filterValue,
  filterName,
  onclickState,
}) {
  const options = [];
  var defaultIndex = null;
  for (let index = 0; index < filters.length; index++) {
    if (filters[index].id == filterValue) defaultIndex = index;
    options.push({
      value: filters[index].id,
      label: filters[index].attributes.name,
    });
  }
  return (
    <div className="py-2 px-4">
      <Select
        className="text-black"
        placeholder={`Select ${filterName}`}
        name={filterName}
        options={options}
        defaultValue={options[defaultIndex]}
        onChange={(e) => {
          onclickState(e);
        }}
        isClearable
        isSearchable
      />
    </div>
  );
}
