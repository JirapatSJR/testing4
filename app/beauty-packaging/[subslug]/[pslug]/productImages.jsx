"use client";
import React, { useState } from "react";
import ProductImage from "@/components/blocks/productImage/productImage";
import Link from "next/link";
import Image from "next/image";

const ProductImages = ({ images }) => {
  if (!images) return;
  const [Thumbnails, setThumbnails] = useState(images[0]);
  return (
    <div className="flex items-start  justify-center w-auto">
      <div className="flex flex-col  gap-4">
        <div className="2xl:w-[500px] 2xl:h-[500px] lg:w-[400px] lg:h-[400px] sm:w-[500px] sm:h-[500px]   w-[350px] h-[350px] flex justify-center items-center  border-2 border-green4wd">
          {Thumbnails.attributes.formats == null ? (
            <Image
              fill
              src={Thumbnails.attributes.url}
              alt={Thumbnails.attributes.url}
            />
          ) : (
            <ProductImage img={Thumbnails.attributes} />
          )}
        </div>
        <div className="flex flex-row gap-2 justify-start w-full">
          {images?.map((img) => {
            return (
              <div
                onClick={() => setThumbnails(img)}
                className={`${
                  Thumbnails === img
                    ? "border-green4wd border-[3px] p-[2px]"
                    : "p-[5px]"
                } w-[80px] h-[80px] relative`}
                key={img.attributes.url}
              >
                <Image
                  fill
                  src={img.attributes.url}
                  alt={img.attributes.url}
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
