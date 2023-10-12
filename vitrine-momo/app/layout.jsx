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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="bg-gray-200">
        <Layout>{children} </Layout>
      </body>
    </html>
  );
}
