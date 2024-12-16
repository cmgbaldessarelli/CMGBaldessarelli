import Image from "next/image";

import styles from "./catalogo.module.css";
import downArrow from "@/assets/down-arrow.svg";

import { products } from "@/lib/products";
import Link from "next/link";

export default function Catalogo() {
  return (
    <section className={styles.catalogo}>
      <div className={styles.catalogoHeading}>
        <h1>Il Nostro Catalogo</h1>
      </div>
      <div className={styles.catalogoContent}>
        <div className="container">
          <div className={styles.catalogoColumns}>
            {products.map((product, index) => (
              <div className={styles.productCard} key={index}>
                <div className={styles.productImage}>
                  <Image src={product.images[0]} alt={product.name} />
                </div>
                <div className={styles.productInfo}>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <Link href={`/catalogo/${product.slug}`}>Maggiori dettagli</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
