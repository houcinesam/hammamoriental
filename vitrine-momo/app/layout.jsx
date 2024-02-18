export const metadata = {
  title: "Hammam Oriental",
  description: "Hammam Oriental",
  og: {
    title: "Hammam Oriental",
    description: "Hammam Oriental",
  },
};
//la partie du dessus est à mettre dans un fichier metadata.js

import Layout from "@/components/Layout";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.og && (
  <div>
    <meta property="og:title" content={metadata.og.title} />
    <meta property="og:description" content={metadata.og.description} />
  </div>
)}

      </head>
      <body >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
