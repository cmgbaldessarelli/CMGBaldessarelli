import Image from "next/image";
import Link from "next/link";

import styles from "./hero.module.css";

import heroPhoto from "@/assets/hero.webp";
import cmgFullLogo from "@/assets/logo-full-white.svg";
import downArrow from "@/assets/down-arrow.svg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <Image
          src={heroPhoto}
          alt="CMG BALDESSARELLI - Soluzioni per l'Agricoltura"
        />
        <div></div>
      </div>
      <div className={styles.heroContent}>
        <Image
          src={cmgFullLogo}
          alt="CMG BALDESSARELLI - Soluzioni per l'Agricoltura"
        />
        <div className={styles.ctaButtons}>
            <Link href="/catalogo" className={styles.ctaButton}>
                Esplora i Prodotti
            </Link>
        </div>
        <div className={styles.visuallyHidden}>
            <h1 className={styles.title}>CMG BALDESSARELLI</h1>
            <p className={styles.description}>Soluzioni per l&apos;Agricoltura</p>
        </div>
      </div>
      <div className={styles.arrow}>
        <Link href="#about">
          <Image src={downArrow} alt="Scopri di più" />
        </Link>
      </div>
    </section>
  );
}
