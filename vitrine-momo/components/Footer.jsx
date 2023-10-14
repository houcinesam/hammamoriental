function Footer() {
  return (
    <div
      className=" sticky bottom-0  z-[-50] h- md:flex md:flex-col min-w-full bg-[#484848] text-gray-200 py-8 text-left"
    >
      <div className="ml-8 ">
        <p className="mb-2 text-xl">
          &#9990; : 07 52 06 31 20 | &#9993; : multiservicespro57gmail.com
        </p>
        <div className="mb-2">
          Suivez-nous sur facebook :{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100087252550078"
            className="text-blue-400 hover:text-blue-600 mr-2"
          >
            Facebook
          </a>{" "}
        </div>
        <p className="">&copy; site créé par: David Abruzzo Tous droits réservés.</p>
        <p> &#9993; davidabruzzogames@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
