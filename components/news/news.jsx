"use client";

import styles from "./news.module.css";

import { motion } from "framer-motion";

export default function News() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section className={styles.news} id="news">
      <h2>News</h2>
      <div className={styles.newsWrapper}>
        <div className={styles.greenLine}></div>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`${styles.newsColumns} row gap-5 gap-md-0 justify-content-center`}
          >
            <div className="col-12 col-md-6 col-lg-4">
              <motion.div
                variants={animationVariants}
                className={styles.newsItem}
              >
                <h3>
                  Piastra porta tubo a V M10 piastra con bulloneria (bulloni
                  M10)
                </h3>
                <p>
                  Siamo entusiasti di presentare la{" "}
                  <strong>Piastra Porta Tubo a V M10</strong>, una soluzione
                  innovativa e resistente, progettata per garantire una tenuta
                  sicura e stabile. <br />
                  Questa piastra è dotata di bulloneria M10, perfetta per il
                  fissaggio dei tubi in modo semplice e duraturo.
                </p>
              </motion.div>
            </div>
            {/* <div className="col-12 col-md-6 col-lg-4">
              <motion.div
                variants={animationVariants}
                className={styles.newsItem}
              >
                <h3>
                  Piastra porta tubo a V M10 piastra con bulloneria (bulloni
                  M10)
                </h3>
                <p>
                  Siamo entusiasti di presentare la{" "}
                  <strong>Piastra Porta Tubo a V M10</strong>, una soluzione
                  innovativa e resistente, progettata per garantire una tenuta
                  sicura e stabile. <br />
                  Questa piastra è dotata di bulloneria M10, perfetta per il
                  fissaggio dei tubi in modo semplice e duraturo.
                </p>
              </motion.div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
