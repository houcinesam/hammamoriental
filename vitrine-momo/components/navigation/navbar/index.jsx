"use client";
import Link from "next/link";
import Image from "next/image";
import React, { use } from "react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="bg-logoBackground sticky top-0 z-50 shadow-2xl shadow-neonColor ">
        <div className="text-2xl md:text-3xl flex flex-row vw-full justify-between ">
          <div className="flex flex-col justify-around md:w-1/3">
            <div>
              <h1 className=" flex flex-row text-left text-backgroundColor mt-5 ml-10 mb-4 text-4xl  md:text-5xl  lg:text-7xl lg:ml-20 lg:mb-10">
                Hammam <p className="text-goldText ml-2"> Oriental</p>
              </h1>
              <h2 className="ml-20 lg:mb-[5%] text-2xl text-goldText">
                {` à freyming merlebach`}
              </h2>
            </div>
          </div>
          <div className="flex-row vw-[100%] flex justify-around items-end md:w-2/3 md:mt-[1%] md:mb-[1%]">
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden  px-4 py-2 bg-gray-200 text-goldText hover:text-gray-900 text-5xl rounded-lg bg-transparent"
              type="button"
            >
              {menuOpen ? "X" : "≡"}
            </button>

            {/* Mobile Menu */}
            <nav>
              <div
                className={`${
                  menuOpen ? "block" : "hidden"
                }  text-logoBackground  lg:hidden  fixed top-20 right-20 flex flex-col  w-2/3 h-full bg-transparent  z-50 bg-transparent `}
              >
                <Link href="/">
                  <div
                    onClick={toggleMenu}
                    className="flex text-logoBackground px-4 py-2 rounded-md border  bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon pl-12"
                  >
                    Accueil
                  </div>
                </Link>
                <Link href="/contact">
                  <div
                    onClick={toggleMenu}
                    className="flex  px-4 py-2 rounded-md border bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon pl-12"
                  >
                    Contact
                  </div>
                </Link>

                <Link href="/gallery">
                  <div
                    onClick={toggleMenu}
                    className="flex  px-4 py-2 rounded-md border bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon pl-12"
                  >
                    Photos
                  </div>
                </Link>
                <Link href="/price">
                  <div
                    onClick={toggleMenu}
                    className="flex  px-4 py-2 rounded-md border bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon pl-12"
                  >
                    Tarifs
                  </div>
                </Link>
              </div>
              {/* menu desktop */}
              <div
                onClick={closeMenu}
                className="hidden lg:flex lg:flex-row md:w-full   space-x-8  text-2xl text-logoBackground h-full md:text-3xl md:text-center md:mr-10  md:pt-5 mb-[5%] "
              >
                <div className="flex-grow block px-4 py-2 rounded-xl border ml-8 bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon">
                  <Link href="/">Accueil</Link>
                </div>
                <div
                  onClick={closeMenu}
                  className="flex-grow block px-4 py-2 rounded-xl border bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon"
                >
                  <Link href="/contact">Contact</Link>
                </div>
                {/* <div onClick={closeMenu} className="flex-grow block px-4 py-2 rounded-xl border bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon">
                  <Link href="/dashboard">Realisations</Link>
                </div> */}
                <div
                  onClick={closeMenu}
                  className="flex-grow block px-4 py-2 rounded-xl border bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon"
                >
                  <Link href="/gallery">Photos</Link>
                </div>
                <div
                  onClick={closeMenu}
                  className="flex-grow block px-4 py-2 rounded-xl border bg-buttonColor hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon"
                >
                  <Link href="/price">Tarifs</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
