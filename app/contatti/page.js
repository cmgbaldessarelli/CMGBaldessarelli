import Image from "next/image";

import styles from "./contatti.module.css";
import locationIcon from "@/assets/location.svg";
import phoneIcon from "@/assets/phone.svg";
import emailIcon from "@/assets/email.svg";
import ContactForm from "@/components/contact-form/contact-form";

export default function Contatti() {
  return (
    <section className={styles.contatti}>
      <div className={styles.contactsHeading}>
        <h1>Contatti</h1>
      </div>
      <div className={styles.contactsContent}>
        <div className="container">
          <div
            className={`row ${styles.contactsColumns} gap-5 gap-md-0 align-items-start`}
          >
            <div className="col-12 col-md-6">
              <div className={styles.contactInfos}>
                  <div className={styles.contactsAddress}>
                    <Image
                      src={locationIcon}
                      alt="Indirizzo sede CMG BALDESSARELLI"
                    />
                    <div>
                      <p>Via Alcide Degasperi, 15</p>
                      <p>38060 - Villa Lagarina (TN)</p>
                    </div>
                  </div>
                  <div className={styles.contactsPhone}>
                    <Image src={phoneIcon} alt="Telefono CMG BALDESSARELLI" />
                    <a href="tel:+393450219562">+39 345 0219562</a>
                  </div>
                  <div className={styles.contactsEmail}>
                    <Image src={emailIcon} alt="Email CMG BALDESSARELLI" />
                    <div>
                        <a href="mailto:info@cmgbaldessarelli.it">
                          info@cmgbaldessarelli.it
                        </a>
                        <a href="mailto:cmgbaldessarelli@pec.it">
                          cmgbaldessarelli@pec.it
                        </a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
