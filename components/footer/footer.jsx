import Image from "next/image";
import styles from "./footer.module.css";

import partialLogo from "@/assets/logo-partial-white.svg";
import instagramIcon from "@/assets/instagram.svg";

import Link from "next/link";

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`row ${styles.footerColumns} gap-5 gap-md-0`}>
          <div className="col-12 col-md-4">
            <Image
              src={partialLogo}
              alt="CMG BALDESSARELLI - Soluzioni per l'Agricoltura"
            />
            <div className={styles.footerAddress}>
              <p>
                <strong>CMG Baldessarelli</strong>
              </p>
              <p>Via Alcide Degasperi, 55</p>
              <p>38060 - Villa Lagarina (TN)</p>
              <p>
                <strong>P.IVA 02752280228</strong>
              </p>
            </div>
          </div>
          <div className={`col-12 col-md-4 ${styles.centeredCol}`}>
            <p>Links utili</p>
            <div className={styles.footerLinks}>
              <Link href="/#about">Chi Siamo</Link>
              <Link href="/contatti">Contatti</Link>
              <Link href="/#news">News</Link>
              <Link href="/privacy-cookies">Privacy e Cookie Policy</Link>
            </div>
          </div>
          <div className={`col-12 col-md-4 ${styles.centeredCol}`}>
            <a href="https://www.instagram.com/cmg_baldessarelli">
              <Image
                src={instagramIcon}
                alt="CMG BALDESSARELLI pagina Instagram"
              />
            </a>
          </div>
        </div>
        <div className={styles.footerCopy}>
          <p>&copy; {currentYear} CMG Baldessarelli</p>
          <p>
            Web Design: <a href="https://fmwebagency.it">Francesco Merighi</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
