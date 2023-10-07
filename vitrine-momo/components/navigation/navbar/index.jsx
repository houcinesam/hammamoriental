import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="bg-grey-200">
        <div className="text-2xl md:3xl flex flex-row vw-full justify-between bg-gray-200">
          <div className="display flex flex-col justify-between justify-around">
            <Image
                className="h-auto md:w-64 pl-10"
              src="/carteVisiteMomoLogo-removebg-preview.png"
              alt="logo de Multiservice pro"
              width={200}
              height={200}
            />
          </div>
          <div className=" flex-row  vw-[100%] justify-around items-center  md:mt-[1%]  ">
            <ul className="flex flex-col md:flex-row md:space-x-4 text-2xl md:text-3xl md:mt-6 justify-around md:pt-5 text-gray-200 h-full">
              <li className="flex-grow block px-4 py-2 rounded-md border shadow-inner-xl bg-[#484848] hover:bg-[#f79b20] md:max-h-12">
                <Link href="/">Accueil</Link>
              </li>
              <li className="flex-grow block px-4 py-2 rounded-md border  bg-[#484848] hover:bg-[#f79b20] md:max-h-12">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="flex-grow block px-4 py-2 rounded-md border  bg-[#484848] hover:bg-[#f79b20] md:max-h-12">
                <Link href="/dashboard">Realisations</Link>
              </li>
              <li className="flex-grow block px-4 py-2 rounded-md border bg-[#484848] hover:bg-[#f79b20] md:max-h-12">
                <Link href="/gallery">Photos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
