import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Maintenance from "@/components/maintenance/maintenance";

export const metadata = {
  title:
    "CMG BALDESSARELLI - Soluzioni per l'Agricoltura",
  description:
    "CMG Baldessarelli è un'azienda specializzata nella vendita di accessori per il vigneto a Villa Lagarina, in provincia di Trento.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {

  const isMaintenance = false;

  return (
    <html lang="it">
      <head>
        <Script
          src={`https://cdn-cookieyes.com/client_data/61847c3470e48698986681a7/script.js`}
          strategy="beforeInteractive"
        ></Script>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="CMG" />
      </head>
      <body>
          {isMaintenance ? (
            <Maintenance />
          ) : (
            <>
              <Header />
              {children}
              <Footer />
            </>
          )}
      </body>
    </html>
  );
}
