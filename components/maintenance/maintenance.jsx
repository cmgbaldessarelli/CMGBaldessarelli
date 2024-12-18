import Image from "next/image";

import styles from "./maintenance.module.css";

import cmgLogoFull from "@/assets/logo-full-white.svg";
import maintenanceImage from "@/assets/hero.webp";
import emailIcon from "@/assets/email.svg";
import phoneIcon from "@/assets/phone.svg";

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
          <a href="mailto:info@cmgbaldessarelli.it">
            <Image src={emailIcon} alt="Invia un'email" />
            info@cmgbaldessarelli.it
          </a>
          <a href="tel:+393450219562">
            <Image src={phoneIcon} alt="Chiamaci" />
            +39 345 0219562
          </a>
        </div>
      </div>
    </section>
  );
}
