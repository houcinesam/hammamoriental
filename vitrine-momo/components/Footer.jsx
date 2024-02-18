import Link from "next/link";

function Footer() {
  return (
    <div className=" sticky bottom-0  z-[-50] h- md:flex md:flex-col min-w-full bg-backgroundColor text-gray-800 py-8 text-left">
      <div className="ml-8 ">
        <p className="mt-2 text-xl">Sur rendez-vous</p>
        <p className="mb-2 text-xl">
          &#9990; : 06 03 74 39 23  | &#9993; : houcinesam@hotmail.fr
        </p>
        <div className="mb-2">
          Suivez-nous sur les résaux sociaux :
         <div className="flex flex-row">
          <Link
            href="https://www.facebook.com/profile.php?id=100087252550078"
            className="text-blue-400 hover:text-blue-600 mr-2"
          >
            <button
              className=" text-xl ml-10 mr-3  md:ml-20 md:text-xl text-gray-900 lg:text-xl lg:items-center mb-4 md:mt-5 bg-buttonColor rounded-lg "
              style={{ padding: "10px 20px" }}
            >
              facebook
            </button>
          </Link>
        
        <Link
            href="https://www.facebook.com/profile.php?id=100087252550078"
            className="text-blue-400 hover:text-blue-600 mr-2"
          >
            <button
              className=" text-xl ml-10 mr-10  md:ml-20 md:text-xl text-gray-900 lg:text-xl lg:items-center mb-4 md:mt-5 bg-buttonColor rounded-lg "
              style={{ padding: "10px 20px" }}
            >
              Instagram
            </button>
          </Link>
          </div>
          </div>
         <p> Images de <Link href="https://fr.freepik.com/vecteurs-libre/couverture-facebook-hammam-realiste_23178181.htm#query=hammam%20oriental%20banniere&position=10&from_view=search&track=ais&uuid=90a88bef-da63-4b54-a730-548e29c85c43">Freepik</Link></p>
        <p className="">
          &copy; site créé par: David Abruzzo Tous droits réservés.
        </p>
        <p> &#9993; davidabruzzogames@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
