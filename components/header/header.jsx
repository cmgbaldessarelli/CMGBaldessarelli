"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./header.module.css";

import cmgLogo from "@/assets/logo-partial-white.svg";

export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className={isScrolled ? `${styles.header} ${styles.headerScrolled}` : styles.header }>
      <div className="container">
        <nav>
          <Link href="/">
            <Image
              src={cmgLogo}
              alt="CMG BALDESSARELLI - Soluzioni per l'Agricoltura"
            />
          </Link>
          <ul>
            <li>
              <Link href="/catalogo">Catalogo</Link>
            </li>
            <li>
              <Link href="/#about">Chi Siamo</Link>
            </li>
            <li>
              <Link href="/contatti">Contatti</Link>
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
              <Link href="/catalogo">Catalogo</Link>
            </li>
            <li>
              <Link href="/#about">Chi Siamo</Link>
            </li>
            <li>
              <Link href="/contatti">Contatti</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
