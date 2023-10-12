

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/Footer";



export default function Layout({ children }) {
  return (
    <html lang="fr">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
