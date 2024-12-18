import Image from "next/image";
import Link from "next/link";

import styles from "./hero.module.css";

import heroPhoto from "@/assets/test-image_1x.webp";
import cmgFullLogo from "@/assets/logo-full-white.svg";

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
        {/* <div className={styles.ctaButtons}>
            <Link href="/contatti" className={styles.ctaButton}>
                Contatti
            </Link>
        </div> */}
        <div className={styles.visuallyHidden}>
            <h1 className={styles.title}>CMG BALDESSARELLI</h1>
            <p className={styles.description}>Soluzioni per l&apos;Agricoltura</p>
        </div>
      </div>
    </section>
  );
}
