import { useForm, ValidationError } from "@formspree/react";
import "../app/globals.css";
import Image from "next/image";
import background from "@/public/backgroundImage.webp";
 import ReCAPTCHA from "react-google-recaptcha";
function ContactForm() {
  const key = process.env.NEXT_PUBLIC_FORMSPREE;
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [state, handleSubmit] = useForm(key);

  if (state.succeeded) {
    return (
      <p className="text-2xl flex justify-center items-center text-backgroundColor">Merci de votre message, nous vous recontacterons au plus vite.</p>
    );
  }

  return (
    <div className="flex flex-col   mb-4 md:w-2/3 lg:w-1/2  md:mx-auto bg-cover bg-center bg-transparent ">
      <div className=" p-8 rounded-lg shadow-md text-gray-700">
        <p className="text-2xl font-semibold mb-4">Contactez-nous : </p>
        <p className="text-xl font-semibold mb-4"> &#9990; 06 03 74 39 23</p>
        <p className="text-xl font-semibold mb-4">
          {" "}
          &#9993; hammamoriental57800@gmail.com
        </p>
        <p className="text-xl font-semibold mb-4">
          {" "}
           adresse : 12 rue Goethe 57800 freyming merlebach
        </p>
       
        <p className="text-xl font-semibold">Ou avec le formulaire :</p>
        <div className="h-1 bg-buttonColor"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2 "
            >
              Prénom
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            <ValidationError
              prefix="firstName"
              field="firstName"
              errors={state.errors}
            />
          </div>
          <div className="h-1 bg-buttonColor"></div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-bold mb-2"
            >
              Nom
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />

            <ValidationError
              prefix="lastName"
              field="lastName"
              errors={state.errors}
            />
          </div>
          <div className="h-1 bg-buttonColor"></div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="h-1 bg-buttonColor"></div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <ValidationError prefix="phone" field="phone" errors={state.errors} />
          <div className="h-1 bg-buttonColor"></div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-lg resize-none focus:outline-none focus:ring focus:border-blue-500"
              rows="4"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="h-1 bg-[#f79b20]"></div>
           <ReCAPTCHA sitekey={captchaKey} /> 
          <button
            type="submit"
            className="bg-blue-500 text-white mt-2 py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            disabled={state.submitting}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
