

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/Footer";



export default function Layout({ children }) {
  return (
    <html lang="fr" className="max-w-[900px] mx-auto">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
