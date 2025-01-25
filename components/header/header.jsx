"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
                      <Link href="/catalogo/accessori-di-testata">
                        Accessori di Testata
                      </Link>
                    </li>
                    <li>
                      <Link href="/catalogo/collari-di-testata">
                        Collari di Testata
                      </Link>
                    </li>
                    <li>
                      <Link href="/catalogo/collari-intermedi">
                        Collari Intermedi
                      </Link>
                    </li>
                    <li>
                      <Link href="/catalogo/cavallotti">Cavallotti</Link>
                    </li>
                    <li>
                      <Link href="/catalogo/tenditori">Tenditori</Link>
                    </li>
                    <li>
                      <Link href="/catalogo/accessori-speciali">
                        Accessori Speciali
                      </Link>
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
          <div
            className={
              isMenuOpen
                ? `${styles.hamburgerActive} ${styles.hamburger}`
                : styles.hamburger
            }
            onClick={handleMenuOpen}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.375 }}
            className={styles.mobileMenu}
          >
            <div className="container">
              <ul>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link href="/#about">Azienda</Link>
                </li>
                <li onClick={() => setIsMenuItemHovered(!isMenuItemHovered)}>
                  <p>Accessori per il Vigneto</p>
                  <DropdownMenu isOpen={isMenuItemHovered}>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link href="/catalogo/accessori-di-testata">
                        Accessori di Testata
                      </Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link href="/catalogo/collari-di-testata">
                        Collari di Testata
                      </Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link href="/catalogo/collari-intermedi">
                        Collari Intermedi
                      </Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link href="/catalogo/cavallotti">Cavallotti</Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link href="/catalogo/tenditori">Tenditori</Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link href="/catalogo/accessori-speciali">
                        Accessori Speciali
                      </Link>
                    </li>
                  </DropdownMenu>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link href="/contatti">Contatti</Link>
                </li>
                <li onClick={() => setIsMenuOpen(false)}>
                  <Link href="/#news">News</Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const DropdownMenu = ({ children, isOpen }) => {
  const ref = useRef(null);

  return (
    <motion.ul
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? ref.current?.scrollHeight : 0,
        opacity: isOpen ? 1 : 0,
      }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={styles.submenuMobile}
      style={{ overflow: "hidden" }}
      ref={ref}
    >
      {children}
    </motion.ul>
  );
};
