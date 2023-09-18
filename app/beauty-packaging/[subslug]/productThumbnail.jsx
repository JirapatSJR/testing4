"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductThumbnail = ({ product, url }) => {
  return (
    <div className="2xl:w-[300px] 2xl:h-[420px] lg:w-[260px] lg:h-[360px] md:w-[200px] md:h-[300px] w-[100px] h-[160px] relative">
      <div className="2xl:border-[4px] md:border-[3px] border-[2px] border-opacity-100 border-green4wd flex justify-center">
        <Link href={url + "/" + product.id}>
          <Image
            width={300}
            height={300}
            src={product.attributes.thumbnail.data.attributes.url}
            alt={product.attributes.slug}
            className="2xl:w-[300px] 2xl:h-[300px] lg:w-[260px] lg:h-[260px] md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
          />
        </Link>
      </div>
      <h1 className="text-center md:font-bold font-light 2xl:text-xl md:text-base text-xs">
        {product.attributes.name}
      </h1>
    </div>
  );
};

export default ProductThumbnail;
