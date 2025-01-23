"use client";

import styles from "./pills.module.css";

import { motion } from "framer-motion";

import qualityIcon from "@/assets/quality.svg";
import bulbIcon from "@/assets/bulb.svg";
import leafIcon from "@/assets/leaf.svg";
import handshakeIcon from "@/assets/handshake.svg";
import Image from "next/image";

export default function Pills() {
  // Parent container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  // Individual pill animation variants
  const pillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className={styles.pills}>
      <div className="container">
        <motion.div
          className={`${styles.pillsColumns} row gap-5 gap-md-0`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="col-12 col-md-6 col-lg-3"
            variants={pillVariants}
          >
            <div className={styles.pill}>
              <Image src={qualityIcon} alt="Materie Prime di Qualità" />
              <h3>Materie Prime di Qualità</h3>
              <p>
                I nostri accessori nascono da una rigorosa selezione delle
                migliori materie prime disponibili sul mercato.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-12 col-md-6 col-lg-3"
            variants={pillVariants}
          >
            <div className={styles.pill}>
              <Image src={bulbIcon} alt="Innovazione e Tecnologie" />
              <h3>Innovazione e Tecnologie</h3>
              <p>
                Investiamo costantemente in ricerca e sviluppo per portare
                innovazione nel settore agricolo.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-12 col-md-6 col-lg-3 mt-md-5 mt-lg-0"
            variants={pillVariants}
          >
            <div className={styles.pill}>
              <Image src={leafIcon} alt="Sostenibilità ed Efficienza" />
              <h3>Sostenibilità ed Efficienza</h3>
              <p>
                Creiamo prodotti che rispettano l&apos;ambiente e aiutano gli
                imprenditori agricoli a ottimizzare le risorse, riducendo gli
                sprechi e i costi di gestione.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-12 col-md-6 col-lg-3 mt-md-5 mt-lg-0"
            variants={pillVariants}
          >
            <div className={styles.pill}>
              <Image src={handshakeIcon} alt="Consulenza e Assistenza" />
              <h3>Consulenza e Assistenza</h3>
              <p>
                Affianchiamo i nostri clienti in ogni fase, dalla progettazione
                alla manutenzione degli impianti.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
