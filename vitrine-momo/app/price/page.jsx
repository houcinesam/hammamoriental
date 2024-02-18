"use client";

import "../globals.css";
import PriceList from "../../components/PriceList";
import Image from "next/image";
import background from "@/public/backgroundImage.webp";
const page = () => {
  return (
    <div className="flex flex-col   lg:justify-center  h-screen md:flex-row bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }} >
     
       <PriceList   />
    </div>
  );
};
export default page;
