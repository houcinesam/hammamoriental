"use client";
import ContactForm from "../../components/ContactForm";
import "../globals.css";
import Image from "next/image";
import background from "@/public/backgroundImage.webp";
const page = () => {
  return (
    <div className="flex flex-col  md:flex-row bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }} >
      <ContactForm />
       
    </div>
  );
};
export default page;
