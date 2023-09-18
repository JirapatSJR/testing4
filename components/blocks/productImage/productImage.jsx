"use client";
import React from "react";
import ReactImageZoom from "react-image-zoom";
const ProductImage = ({ img }) => {
  return (
    <div className="relative max-w-none">
      <ReactImageZoom
        img={img.url}
        fill
        style={{ objectFit: "cover" }}
        zoomPosition={"original"}
      />
    </div>
  );
};

export default ProductImage;
