import Image from "next/image";
import styles from "./catalogo.module.css";

import catalogoPhoto from "@/assets/categorie.webp";
import downArrow from "@/assets/down-arrow.svg";
import tenditori from "@/assets/tenditori.webp";
import cavallotti from "@/assets/cavallotti.webp";
import collariIntermedi from "@/assets/collari-intermedi.webp";
import accessoriTestata from "@/assets/accessori-testata.webp";
import testImage from "@/assets/test-image_1x.webp";

import Link from "next/link";

export default function Catalogo() {
  return (
    <main>
      <section className={styles.catalogoHero}>
        <div className={styles.catalogoOverlay}>
          <Image
            src={catalogoPhoto}
            alt="CMG BALDESSARELLI - Soluzioni per l'Agricoltura"
          />
          <div></div>
        </div>
        <div className={styles.catalogoHeroHeading}>
          <h1>Accessori per il Vigneto</h1>
          <p>Esplora i Nostri Prodotti</p>
        </div>
        <div className={styles.arrow}>
          <Link href="#categorie">
            <Image src={downArrow} alt="Scopri di più" />
          </Link>
        </div>
      </section>
      <section id="categorie" className={styles.catalogoCategories}>
        <div className="container">
          <h2>
            Scegli la <span>Categoria</span>
          </h2>
          <div className={`${styles.categoriesGrid} row gap-4 gap-md-0`}>
            <div className="col-12 col-md-6">
              <Link href="/catalogo/tenditori">
                <div className={styles.category}>
                  <Image src={tenditori} alt="Tenditori" />
                  <div className={styles.categoryOverlay}>
                    <h3>Tenditori</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link href="/catalogo/accessori-testata">
                <div className={styles.category}>
                  <Image src={accessoriTestata} alt="Accessori Testata" />
                  <div className={styles.categoryOverlay}>
                    <h3>Accessori Testata</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoriesGrid} row gap-4 gap-md-0`}>
            <div className="col-12 col-md-6">
              <Link href="/catalogo/collari-di-testata">
                <div className={styles.category}>
                  <Image src={testImage} alt="Collari di Testata" />
                  <div className={styles.categoryOverlay}>
                    <h3>Collari di Testata</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link href="/catalogo/collari-intermedi">
                <div className={styles.category}>
                  <Image src={collariIntermedi} alt="Collari Intermedi" />
                  <div className={styles.categoryOverlay}>
                    <h3>Collari Intermedi</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.categoriesGrid}>
            <Link href="/catalogo/cavallotti">
              <div className={styles.category}>
                <Image src={cavallotti} alt="Cavallotti" />
                <div className={styles.categoryOverlay}>
                  <h3>Cavallotti</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
