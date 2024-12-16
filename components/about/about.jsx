import Image from "next/image";
import styles from "./about.module.css";

import testImage from "@/assets/test-image_1x.webp";
import fileIcon from "@/assets/file.svg";

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
              <h2>Innovazione e Personalizzazione per l&apos;Agricoltura</h2>
              <p>
                CMG Baldessarelli è una giovane e dinamica azienda con una forte
                esperienza nella costruzione di accessori per impianti agricoli,
                specializzata nella viticoltura a pergola. Grazie al nostro
                know-how e alla passione, offriamo soluzioni personalizzate che
                migliorano l&apos;efficienza e la durata degli impianti,
                rispondendo alle esigenze specifiche dei clienti.
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
              <h2>Progettazione Avanzata e Qualità Garantita</h2>
              <p>
                Ogni progetto nasce dall&apos;analisi delle necessità
                specifiche, utilizzando software 3D e tecniche avanzate di
                produzione per creare accessori di qualità superiore. Offriamo
                una vasta gamma di prodotti caratterizzati da precisione,
                durabilità e affidabilità, garantendo un supporto continuo per
                l&apos;imprenditore agricolo.
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
              <h2>Efficienza e Sostenibilità al Servizio del Cliente</h2>
              <p>
                L&apos;obiettivo di CMG Baldessarelli è ridurre i costi di
                gestione e manutenzione degli impianti agricoli, migliorando la
                sostenibilità e l&apos;efficienza operativa. Provenendo da una
                realtà agricola, comprendiamo le esigenze del mercato e
                lavoriamo ogni giorno per creare soluzioni che rendano il lavoro
                sul campo più semplice e redditizio.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <Image src={testImage} alt="CMG Baldessarelli" />
            </div>
          </div>
          <div className={styles.aboutFooter}>
            <h2>Scopri il Nostro Catalogo Prodotti</h2>
            <p>
              Offriamo una vasta gamma di accessori progettati per soddisfare le
              esigenze degli imprenditori agricoli, garantendo qualità,
              precisione e durabilità. Esplora le nostre soluzioni innovative e
              trova gli accessori perfetti per migliorare l&apos;efficienza e la
              sostenibilità dei tuoi impianti agricoli.
            </p>
            <div className={styles.aboutCta}>
              <Link href="/catalogo">Scopri il Catalogo</Link>
              <a href="/cmg-catalogo.pdf" download><Image src={fileIcon} alt="CMG Catalogo PDF" /> Catalogo in PDF</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
