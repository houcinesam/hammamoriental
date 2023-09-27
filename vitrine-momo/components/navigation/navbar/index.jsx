import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>  
    <div className="bg-gray-300 text-2xl md:3xl flex flex-row vw-full justify-between mb-10">
      <div className="display flex items-center justify-between ">
        <img
          className="h-auto md:w-64"
          src="/MomoLeBricolo.png"
          alt="logo de momo le bricolo"
        />
      </div>
      <div className=" flex-row  vw-[100%] justify-between items-center mr-[10%] md:mt-[1%] mb-[1%]">
        <ul className="  flex flex-col md:flex-row md:space-x-4 text-2xl md:text-3xl  mt-2 md:mt-6 justify-around ">
          <li className="block px-4 py-2 rounded-md border border-blue-500 shadow-inner-xl md:bg-transparent hover:bg-gray-200">
            <Link href="/">Home</Link>
          </li>
          <li className="block px-4 py-2 rounded-md  border border-blue-500 md:bg-transparent hover:bg-gray-200">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="block px-4 py-2 rounded-md border border-blue-500 md:bg-transparent hover:bg-gray-200">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="block px-4 py-2 rounded-md border border-blue-500 md:bg-transparent hover:bg-gray-200">
            <Link href="/gallery">Photos</Link>
          </li>
        </ul>
        <h2 className="hidden md:text-xl md:flex md:flex-col md:items-center md:justify-center  transition-transform transform hover:scale-150 mt-10 hover:border border-gray-600 hover:rounded-mdd p-2">
          Pour tout vos travaux autour de Hombourg-Haut
        </h2>
      </div>
    </div>
    </header>
  );
};
export default Navbar;
