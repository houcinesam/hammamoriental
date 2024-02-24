"use client";

import "../globals.css";
import PriceList from "../../components/PriceList";
import Image from "next/image";
import Link from "next/link";
import background from "@/public/backgroundImage.webp";
const page = () => {
  return (
    <div className="flex flex-col    items-center h-screen  bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }} >
     
       <PriceList />
       <div className="flex flex-col  justify-start md:mt-[5%] text-logoBackground">
                  <div className="flex justify-center items-center mt-10">
                    <p className=" lg:mt-[10%] lg:text-4xl">{`rendez-vous:`}</p>
                    <p className="lg:mt-[10%] text-3xl lg:text-4xl ">
                      &#9990; {` 06 03 74 39 23`}
                    </p>
                  </div>
                  <Link href="/contact " className="flex justify-end">
                    <button
                      className="  text-3xl ml-10 mr-10 mt-[25%]  md:ml-20 md:text-3xl text-gray-900 lg:text-3xl lg:items-center mb-4 md:mt-5 bg-buttonColor rounded-lg lg:mb-50 "
                      style={{ padding: "15px 30px" }}
                    >
                      {`Nous contacter`}
                    </button>
                  </Link>
                </div>
    </div>
  );
};
export default page;
