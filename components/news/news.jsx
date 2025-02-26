"use client";

import styles from "./news.module.css";
import { news } from "@/lib/news";
import linkOutIcon from "@/assets/link-out.svg";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
                <h3>{news[0].title}</h3>
                <p>{news[0].short_description}</p>
                <div>
                  <a href={news[0].ig_link} target="_blank" rel="noreferrer">
                    Guarda il video <Image src={linkOutIcon} alt="Segui link" />
                  </a>
                  <Link href={`/news/${news[0].slug}`}>
                    Maggiori informazioni{" "}
                    <Image src={linkOutIcon} alt="Segui link" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
