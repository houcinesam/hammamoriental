"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Gallery from "../../components/Gallery";
import background from "@/public/backgroundImage.webp";

function Page() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Mettre à jour la largeur de la fenêtre lors du chargement de la page et lors du redimensionnement
    window.addEventListener("resize", handleResize);
    handleResize(); // Obtenez la largeur initiale de la fenêtre lors du chargement de la page

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Déterminez la taille de l'image en fonction de la largeur de la fenêtre
  let imageSize;
  if (windowWidth < 640) {
    // Par exemple, pour les téléphones portables
    imageSize = { width: 300, height: 300 };
  } else if (windowWidth < 1024) {
    // Par exemple, pour les tablettes
    imageSize = { width: 400, height: 400 };
  } else {
    // Pour les écrans plus grands
    imageSize = { width: 500, height: 500 };
  }

  const images = [
    { src: "/imageDouche.jpg", alt: "photo de la douche" },
    { src: "/imageAccueil.jpg", alt: "photo de l'accueil" },
    { src: "/imageHammam.jpg", alt: "photo du hammam" },
  ];

  return (
    <div
      className="text-3xl flex flex-col justify-center items-center w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <Gallery images={images} imageSize={imageSize} />
      <Link href="/contact " className="flex justify-end">
        <button
          className="text-3xl ml-10 mr-10 mt-[3%] md:ml-20 md:text-3xl text-gray-900 lg:text-3xl lg:items-center mb-4 md:mt-5 bg-buttonColor rounded-lg lg:mb-50 "
          style={{ padding: "15px 30px" }}
        >
          {`Nous contacter`}
        </button>
      </Link>
    </div>
  );
}

export default Page;
