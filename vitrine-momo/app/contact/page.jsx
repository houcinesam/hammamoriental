"use client";
import ContactForm from "../../components/ContactForm";

const page = () => {
  return (
    <div className="flex flex-row items-center justify-around">
      <ContactForm />
      <div className="flex flex-col">
        <p>vous pouvez egalement nous contacter:</p>
        <p> par telephone 06.06.06.06.06</p>
        par courrier : 28 rue du bout de la rue
      </div>
    </div>
  );
};
export default page;
