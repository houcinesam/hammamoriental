"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Gallery = ({ images, imageSize }) => {
  return (
    <div className="flex flex-col items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="h-auto md:w-64 lg:ml-20 mt-10 mb-10 border-8 rounded-3xl border-buttonColor"
        >
          <Image src={image.src} alt={image.alt} {...imageSize} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
