import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Maintenance from "@/components/maintenance/maintenance";

export const metadata = {
  title: "CMG BALDESSARELLI - Soluzioni per l'Agricoltura a Villa Lagarina (TN)",
  description: "CMG Baldessarelli è un'azienda specializzata nella vendita di accessori per il vigneto a Villa Lagarina, in provincia di Trento.",
};

export default function RootLayout({ children }) {

  const isMaintenance = true;

  return (
    <html lang="it">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="CMG" />
        <link rel="manifest" href="/site.webmanifest" />
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
