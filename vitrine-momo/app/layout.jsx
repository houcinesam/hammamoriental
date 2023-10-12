

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
    
      <body className="bg-gray-200">
        <Layout>{children} </Layout>
      </body>
    </html>
  );
}
