import Link from "next/link";
import Image from "next/image";
import IconeFacebook from "@/public/iconeFacebook.png";
import IconeInstagram from "@/public/iconeInstagram.png";
import IconeSnapchat from "@/public/iconeSnapchat.png";

function Footer() {
  return (
    <footer className=" font-Rubik    h- flex justify-center items-center flex-col min-w-full bg-backgroundColor text-gray-800 py-8 ">
      <div className="ml-8 text-left ">
        <p className="mt-2 text-xl">Sur rendez-vous</p>
        <p className="mb-2 text-xl">
          &#9990;: 06 03 74 39 23 | &#9993; : hammamoriental57800@gmail.com
        </p>
        <div className="mb-2">
          Suivez-nous sur les résaux sociaux :
          <div className="flex flex-row">
            <button>
              <Link
                href="https://www.snapchat.com/add/hammam.oriental?share_id=UpS478WE6uM&locale=fr-FR"
                className="text-blue-400 hover:text-blue-600 mr-2"
              >
                {" "}
                <Image
                  src={IconeSnapchat.src}
                  alt="icone snapchat"
                  width={50}
                  height={50}
                />
              </Link>
            </button>
            <button>
              <Link
                href="https://www.instagram.com/hammamoriental/"
                className="text-blue-400 hover:text-blue-600 mr-2"
              >
                {" "}
                <Image
                  src={IconeInstagram.src}
                  alt="icone instagram"
                  width={50}
                  height={50}
                />
              </Link>
            </button>
           

           
          </div>
        </div>
        <button>
         
          Images de{" "}
          <Link href="https://www.freepik.com/">
            Freepik
          </Link>
        </button>
        <p className="">
          &copy; site créé par: David Abruzzo Tous droits réservés.
        </p>
        <p> &#9993; davidabruzzogames@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
