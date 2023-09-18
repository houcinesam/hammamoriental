"use client";
import ContactForm from "../../components/ContactForm";

const page = () => {
  return (
    <div className="flex flex-col   md:flex-row">
      <ContactForm />
      {/* <div className="flex flex-col   text-3xl m-5">
        <p> tel: 06.06.06.06.06</p>
        <p>adresse : 28 rue du bout de la rue</p>
      </div> */}
    </div>
  );
};
export default page;
