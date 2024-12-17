import Image from "next/image";

import styles from "./maintenance.module.css";

import cmgLogoFull from "@/assets/logo-full-white.svg";
import maintenanceImage from "@/assets/maintenance.webp";

export default function Maintenance() {
  return (
    <section className={styles.maintenance}>
      <Image src={maintenanceImage} alt="Manutenzione" />
      <div className={styles.overlay}>
        <Image src={cmgLogoFull} alt="Logo" />
        <div className={styles.maintenanceContent}>
          <h1>Il nostro nuovo sito web è in fase di sviluppo.</h1>
          <h2>Tornate presto a trovarci!</h2>
        </div>
        <div className={styles.maintenanceContacts}>
          <a href="mailto:info@cmgbaldessarelli.it">info@cmgbaldessarelli.it</a>
          <a href="tel:+393453924434">+39 345 3924434</a>
        </div>
      </div>
    </section>
  );
}
