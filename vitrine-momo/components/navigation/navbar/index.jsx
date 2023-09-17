import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="bg-gray-300 text: 3xl flex flex-row vw-full justify-between">
      <div className="display flex items-center justify-between ">
        <a className="text-3xl">My Website</a>
      </div>
      <div className="flex-row vw-[100%] justify-between mr-[10%] mt-[1%] mb-[1%]">
        <ul className="flex flex-row space-x-4 text-3xl ">
          <li className="block px-4 py-2 rounded-md hover:bg-gray-200">
            <Link href="/">Home</Link>
          </li>
          <li className="block px-4 py-2 rounded-md hover:bg-gray-200">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="block px-4 py-2 rounded-md hover:bg-gray-200">
            <Link href="/dashboard">Dasboard</Link>
          </li>
          <li className="block px-4 py-2 rounded-md hover:bg-gray-200">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
