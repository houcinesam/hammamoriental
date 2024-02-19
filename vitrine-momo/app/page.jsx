import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import background from "@/public/backgroundImage.webp";

function Home() {
  return (
    <main
      className="flex flex-col  min-h-screen min-w-full justify-around bg-cover bg-center "
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className=" mt-5 ">
        <div className="w-full font-mono text-m ">
          <div className=" flex flex-col md:flex-row md:justify-around">
            <div className=" text-logoBackground text-[1.3rem] lg:text-3xl  ml-10 mr-10 md:ml-20 md:text-xl text-black lg:text-xl lg:items-center  mb-2 md:mt-5bg-backgroundColor opacity-90">
              <div className="mb-[25%] md:mt-[10%] ">
                
                <p className="md:mb-[2%] md:text-2xl">
                 { `Véritable moment de détente et de plaisir grâce à la chaleur
                  humide qu'il dégage. `}
                </p>
                <p className="md:mb-[2%] md:text-2xl">
                 { `Permet d'éliminer efficacement les fatigues, tensions
                  musculaires et d'évacuer le stress.`}
                </p>
                <p className="md:mb-[2%] md:text-2xl">
                { ` Venez profiter d'un moment de détente totale.`}
                </p>
                <p className="md:mb-[2%] md:text-2xl">
                 { `Un verre de thé à la menthe et une confiserie orientale
                  offerts.`}
                </p>
                <div className="flex flex-col lg:flex-row justify-between md:mt-[5%]">
                  <div>
                    <p className="mt-3 lg:mt-[10%] lg:text-5xl">{`rendez-vous`}</p>
                    <p className="text-3xl lg:text-5xl ">
                      &#9990; {`: 06 03 74 39 23`}
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
