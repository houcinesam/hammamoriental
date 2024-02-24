import Link from "next/link";
import Image from "next/image";
import IconeFacebook from "@/public/iconeFacebook.png";
import IconeInstagram from "@/public/iconeInstagram.png";
import IconeSnapchat from "@/public/iconeSnapchat.png";

function Footer() {
  return (
    <footer className=" font-Rubik sticky bottom-0  z-[-50] h- flex justify-center items-center flex-col min-w-full bg-backgroundColor text-gray-800 py-8 ">
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
                href="https://www.facebook.com/profile.php?id=100087252550078"
                className="text-blue-400 hover:text-blue-600 mr-2"
              >
                {" "}
                <Image
                  src={IconeFacebook}
                  alt="icone facebook"
                  width={50}
                  height={50}
                />
              </Link>
            </button>

            {/* <button
              className=" text-xl ml-10 mr-3  md:ml-20 md:text-xl text-gray-900 lg:text-xl lg:items-center mb-4 md:mt-5 bg-buttonColor rounded-lg "
              style={{ padding: "10px 20px" }}
            >
              facebook
            </button> */}

            <Link
              href="https://www.facebook.com/profile.php?id=100087252550078"
              className="text-blue-400 hover:text-blue-600 mr-2"
            >
              {/* <button
              className=" text-xl ml-10 mr-10  md:ml-20 md:text-xl text-gray-900 lg:text-xl lg:items-center mb-4 md:mt-5 bg-buttonColor rounded-lg "
              style={{ padding: "10px 20px" }}
            >
              Instagram
            </button> */}
            </Link>
          </div>
        </div>
        <p>
          {" "}
          Images de{" "}
          <Link href="https://fr.freepik.com/vecteurs-libre/couverture-facebook-hammam-realiste_23178181.htm#query=hammam%20oriental%20banniere&position=10&from_view=search&track=ais&uuid=90a88bef-da63-4b54-a730-548e29c85c43">
            Freepik
          </Link>
        </p>
        <p className="">
          &copy; site créé par: David Abruzzo Tous droits réservés.
        </p>
        <p> &#9993; davidabruzzogames@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
