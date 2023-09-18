"use client";
import Link from "next/link";
import React, { useState } from "react";

const Categories = ({ productCategories, subslug }) => {
  const [collapse, setCollapse] = useState(true)

  return (
    <div className="w-full md:py-0 py-2">
      <h4 className="2xl:text-3xl md:text-2xl text-lg text-center font-extrabold"
        onClick={() => setCollapse(!collapse)}
      >
        Category
      </h4>
      <div className={`mt-2 2xl:flex w-full ${collapse&&"hidden"}`}>
        <div className="pl-4 text-sm text-white4wd">
          {productCategories.map((productCategory) => {
            return (
              <div key={productCategory.attributes.slug} className="px-2">
                <div className={`pl-4`}>
                  <div
                    key={productCategory.attributes.slug}
                    className={`${productCategory.attributes.slug === subslug
                        ? "text-green4wd"
                        : "opacity-60"
                      } hover:text-green4wd`}
                  >
                    <Link
                      href={`/beauty-packaging/${productCategory.attributes.slug}`}
                    >
                      {productCategory.attributes.name}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
