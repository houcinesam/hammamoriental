export const metadata = {
  title: 'sitemomo',
  description: 'test for sitemomo',
}
import Layout from "@/components/Layout"

 
export default function RootLayout({ children }) {
 return (
    <html lang="fr">
      <body className="bg-gray-200"><Layout >{children} </Layout></body>
    </html>
  )
}
