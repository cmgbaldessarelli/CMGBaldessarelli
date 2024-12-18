"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./header.module.css";

import cmgLogo from "@/assets/logo-partial-white.svg";
import downArrow from "@/assets/down-arrow.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuItemHovered, setIsMenuItemHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header
      className={
        isScrolled ? `${styles.header} ${styles.headerScrolled}` : styles.header
      }
    >
      <div className="container">
        <nav>
          <Link href="/">
            <Image
              src={cmgLogo}
              alt="CMG BALDESSARELLI - Soluzioni per l'Agricoltura"
            />
          </Link>
          <ul className={styles.menu}>
            <li>
              <Link href="/#about">Azienda</Link>
            </li>
            <li
              onMouseOver={() => setIsMenuItemHovered(true)}
              onMouseLeave={() => setIsMenuItemHovered(false)}
              className={styles.parentItem}
            >
              <p>Accessori per il Vigneto</p>
              <Image src={downArrow} alt="Sottomenu" width={10} height={10} />
              <AnimatePresence>
                {isMenuItemHovered && (
                  <motion.ul
                    initial={{ opacity: 0, translateY: "-50px" }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: "-50px" }}
                    className={styles.submenu}
                  >
                    <li>
                      <Link href="/tenditori">Tenditori</Link>
                    </li>
                    <li>
                      <Link href="/collari-di-testata">Collari di Testata</Link>
                    </li>
                    <li>
                      <Link href="/collari-intermedi">Collari Intermedi</Link>
                    </li>
                    <li>
                      <Link href="/cavallotti">Cavallotti</Link>
                    </li>
                    <li>
                      <Link href="/accessori-testata">Accessori Testata</Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <Link href="/contatti">Contatti</Link>
            </li>
            <li>
              <Link href="/#news">News</Link>
            </li>
          </ul>
          <div className={styles.hamburger} onClick={handleMenuOpen}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href="/#about">Azienda</Link>
            </li>
            <li
              onMouseOver={() => setIsMenuItemHovered(true)}
              onMouseLeave={() => setIsMenuItemHovered(false)}
              className={styles.parentItem}
            >
              <p>Accessori per il Vigneto</p>
              <Image src={downArrow} alt="Sottomenu" width={10} height={10} />
              <AnimatePresence>
                {isMenuItemHovered && (
                  <motion.ul
                    initial={{ opacity: 0, translateY: "-50px" }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: "-50px" }}
                    className={styles.submenu}
                  >
                    <li>
                      <Link href="/tenditori">Tenditori</Link>
                    </li>
                    <li>
                      <Link href="/collari-di-testata">Collari di Testata</Link>
                    </li>
                    <li>
                      <Link href="/collari-intermedi">Collari Intermedi</Link>
                    </li>
                    <li>
                      <Link href="/cavallotti">Cavallotti</Link>
                    </li>
                    <li>
                      <Link href="/accessori-testata">Accessori Testata</Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <Link href="/contatti">Contatti</Link>
            </li>
            <li>
              <Link href="/#news">News</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
