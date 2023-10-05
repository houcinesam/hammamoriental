import "./globals.css";

function Home() {
  return (
    <main className="flex min-h-screen flex-col   bg-grey-200">
      <div className="h-4 bg-[#f79b20]"></div>
      <div className="flex flex-col mt-5">
        {" "}
        <div className="z-10 max-w-5xl w-full   font-mono text-sm lg:flex">
        <h1 className=" flex flex-row text-left ml-8 text-3xl">Multiservice <p className="text-[#f79b20]">Pro</p></h1>
          <h2 className="text-2xl flex  w-full ml-8 text-center ">Auto-entrepreneur dans divers travaux et habitat</h2>
          <p className="h-1 w-full bg-neon mb-10"></p>
          <div className="flex flex-col  bg-[#484848] justify-center text-neon text-2xl m-5  shadow-lg shadow-neon rounded-2xl ">
            <p className="ml-5 mt-5 hover:text-3xl  hover:rounded hover:shadow-md hover:shadow-white">Rafraichissement des murs</p>
            <p className="ml-5 mt-5 hover:text-3xl  hover:rounded hover:shadow-md hover:shadow-white">Bricolage</p>
            <p className="ml-5 mt-5 hover:text-3xl  hover:rounded hover:shadow-md hover:shadow-white">Reparations divers</p>
            <p className="ml-5 mt-5 hover:text-3xl  hover:rounded hover:shadow-md hover:shadow-white">Montage des meubles</p>
            <p className="ml-5 mt-5 mb-5 hover:text-3xl  hover:rounded hover:shadow-md hover:shadow-white">Renovation & creation</p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
