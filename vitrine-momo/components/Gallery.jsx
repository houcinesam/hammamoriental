"use client";
import React from "react";
import Image from "next/image";

const Gallery = ({ images, imageSize }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="h-auto md:w-64 lg:ml-20 mt-10 mb-10 border-8 rounded-3xl border-buttonColor transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
        >
          <Image src={image.src} alt={image.alt} {...imageSize} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
