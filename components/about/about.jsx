"use client";

import Image from "next/image";
import styles from "./about.module.css";

import { motion } from "framer-motion";

import chiSiamo1 from "@/assets/chi-siamo-1.jpg";
import chiSiamo2a from "@/assets/chi-siamo-2a.webp";
import chiSiamo2b from "@/assets/chi-siamo-2b.webp";
import chiSiamo3 from "@/assets/chi-siamo-3.webp";

import ImageSlideshow from "../image-slideshow/image-slideshow";

export default function About() {
  const chiSiamo2Images = [chiSiamo2a, chiSiamo2b];

  const animationVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.aboutContent}>
          <div
            className={`row ${styles.aboutColumns} gap-3 gap-md-0 align-items-center`}
          >
            <motion.div
              className="col-12 col-md-6"
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2>
                <span>Innovazione</span> e <span>Personalizzazione</span> per
                l&apos;Agricoltura
              </h2>
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
            </motion.div>
            <motion.div
              className="col-12 col-md-6"
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image src={chiSiamo1} alt="CMG Baldessarelli" />
            </motion.div>
          </div>
          <div
            className={`row ${styles.aboutColumns} gap-3 gap-md-0 align-items-center`}
          >
            <motion.div
              className="col-12 col-md-6 order-0 order-md-1"
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2>
                Progettazione Avanzata e <span>Qualità Garantita</span>
              </h2>
              <p>
                Ogni progetto nasce dall&apos;analisi accurata delle necessità
                del cliente, utilizzando software 3D e tecniche avanzate di
                produzione. Realizziamo accessori di altissima qualità,
                garantendo precisione, durabilità e affidabilità. La nostra
                gamma di prodotti è pensata per supportare l&apos;imprenditore
                agricolo con soluzioni innovative e personalizzate, offrendo
                un&apos;assistenza continua per il successo delle sue attività.
              </p>
            </motion.div>
            <motion.div
              className="col-12 col-md-6"
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImageSlideshow images={chiSiamo2Images}></ImageSlideshow>
            </motion.div>
          </div>
          <div
            className={`row ${styles.aboutColumns} gap-3 gap-md-0 align-items-center`}
          >
            <motion.div
              className="col-12 col-md-6"
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2>
                <span>Efficienza</span> e <span>Sostenibilità</span> al Servizio
                del Cliente
              </h2>
              <p>
                Il nostro obiettivo è ridurre i costi di gestione e manutenzione
                degli impianti agricoli, migliorando al contempo sostenibilità
                ed efficienza operativa. Provenendo da una lunga tradizione
                agricola, comprendiamo profondamente le sfide del settore e
                lavoriamo ogni giorno per sviluppare soluzioni che rendano il
                lavoro nei vigneti più semplice, produttivo e redditizio.
              </p>
            </motion.div>
            <motion.div
              className="col-12 col-md-6"
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image src={chiSiamo3} alt="CMG Baldessarelli - Azienda" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}