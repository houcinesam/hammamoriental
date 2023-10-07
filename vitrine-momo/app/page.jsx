import "./globals.css";
import Link from "next/link";
import Image from "next/image";
function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-full  bg-gray-200">
      <div className="h-4 bg-[#f79b20]"></div>
      <div className=" mt-5">
        {" "}
        <div className="   w-full   font-mono text-sm ">
          <h1 className=" flex flex-row text-left text-[#484848] mt-5 ml-2 mb-4 text-5xl   lg:text-7xl lg:ml-20 lg:mb-10">
            Multiservice <p className="text-[#f79b20]">Pro</p>
          </h1>
          <div className="bg-[#484848]">
            <h2 className="text-3xl flex  w-full ml-2 text-center text-neon lg:text-5xl lg:ml-20 ">
              Rénovation & création
            </h2>
          </div>
          <p className="h-1 w-full bg-neon mb-10 "></p>
          <div>
            <Image
              className="h-auto md:w-64 pl-10 lg:ml-20"
              src="/imageRenovation.jpg"
              alt="logo de Multiservice pro"
              width={300}
              height={300}
            />
          </div>
          <p className="flex  h-1 w-[90%] bg-neon mb-10 mt-5 mr-5 ml-5 shadow-neon "></p>
          <div className="flex flex-col   justify-center text-[#484848] text-2xl m-5 lg:ml-20 lg:text-3xl    ">
            <p className="ml-5 mt-5 mr-5   ">Rafraichissement des murs</p>
            <p className="ml-5 mt-5 mr-5   ">Bricolage</p>
            <p className="ml-5 mt-5 mr-5   ">Reparations divers</p>
            <p className="ml-5 mt-5 mr-5   ">Montage des meubles</p>
          </div>
          <div className=" pt-4 pb-4 bg-[#484848] text-neon text-center text-3xl flex items-center">
  <p className="h-16">  DEVIS GRATUIT : <Link className="hover:border-b-2  hover:border-neon" href="/contact">Contactez nous</Link></p>
</div>

        </div>
      </div>
    </main>
  );
}
export default Home;
