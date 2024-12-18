import Image from "next/image";
import styles from "./about.module.css";

import testImage from "@/assets/test-image_1x.webp";

import Link from "next/link";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.aboutContent}>
          <div
            className={`row ${styles.aboutColumns} gap-3 gap-md-0 align-items-center`}
          >
            <div className="col-12 col-md-6">
              <h2><span>Innovazione</span> e <span>Personalizzazione</span> per l&apos;Agricoltura</h2>
              <p>
                CMG Baldessarelli è un&apos;azienda giovane e dinamica con sede
                a Villa Lagarina, in provincia di Trento, che vanta una solida
                esperienza nella progettazione e costruzione di accessori per
                impianti agricoli, con un focus particolare sulla viticoltura a
                pergola. Grazie al nostro know-how e alla passione per il
                settore, offriamo soluzioni su misura per migliorare
                l&apos;efficienza e la durata degli impianti, rispondendo alle
                esigenze specifiche di ogni cliente.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <Image src={testImage} alt="CMG Baldessarelli" />
            </div>
          </div>
          <div
            className={`row ${styles.aboutColumns} gap-3 gap-md-0 align-items-center`}
          >
            <div className="col-12 col-md-6 order-0 order-md-1">
              <h2>Progettazione Avanzata e <span>Qualità Garantita</span></h2>
              <p>
                Ogni progetto nasce dall&apos;analisi accurata delle necessità
                del cliente, utilizzando software 3D e tecniche avanzate di
                produzione. Realizziamo accessori di altissima qualità,
                garantendo precisione, durabilità e affidabilità. La nostra
                gamma di prodotti è pensata per supportare l&apos;imprenditore
                agricolo con soluzioni innovative e personalizzate, offrendo
                un&apos;assistenza continua per il successo delle sue attività.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <Image src={testImage} alt="CMG Baldessarelli" />
            </div>
          </div>
          <div
            className={`row ${styles.aboutColumns} gap-3 gap-md-0 align-items-center`}
          >
            <div className="col-12 col-md-6">
              <h2><span>Efficienza</span> e <span>Sostenibilità</span> al Servizio del Cliente</h2>
              <p>
                Il nostro obiettivo è ridurre i costi di gestione e manutenzione
                degli impianti agricoli, migliorando al contempo sostenibilità
                ed efficienza operativa. Provenendo da una lunga tradizione
                agricola, comprendiamo profondamente le sfide del settore e
                lavoriamo ogni giorno per sviluppare soluzioni che rendano il
                lavoro nei vigneti più semplice, produttivo e redditizio.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <Image src={testImage} alt="CMG Baldessarelli" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
