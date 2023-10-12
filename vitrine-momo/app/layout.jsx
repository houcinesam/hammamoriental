

export const metadata = {
  title: "Multiservices Pro",
  description: "Création & Rénovation",
  og: {
    title: "Multiservice Pro",
    description: "Renovation & Rénovation",
  },
};
import Layout from "@/components/Layout";
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head ><meta name="google-site-verification" content="EsetRKUhqW3gIS_m9j9If0AEgjMnhZH_w2Rw_DTOYqY" /></head>
      <body className="bg-gray-200">
        <Layout>{children} </Layout>
      </body>
    </html>
  );
}
