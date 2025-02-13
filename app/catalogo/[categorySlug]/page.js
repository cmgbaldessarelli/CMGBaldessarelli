import styles from "../catalogo.module.css";

import Image from "next/image";

import { products } from "@/lib/products";

import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;

  const category = categorySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const categoryProducts = products.filter(
    (product) => product.categorySlug === categorySlug
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return {
    title: `${category} - Catalogo CMG BALDESSARELLI`,
    description: `Scopri la nostra selezione di ${category} per il vigneto. Qualità e innovazione con CMG Baldessarelli.`,
  };
}

export default async function CategoryPage({ params }) {
  const { categorySlug } = await params;

  const categoryProducts = products.filter(
    (product) => product.categorySlug === categorySlug
  );

  const category = categorySlug.replace(/-/g, " ");

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <main className={styles.categoryPage}>
      <section>
        <div className={styles.catalogoHeading}>
          <h1>{category}</h1>
        </div>
        <div className={styles.catalogoContent}>
          <div className="container">
            <ul className={styles.products}>
              {categoryProducts.map((product, index) => (
                <li key={index} className={styles.productCard}>
                  <Link href={`/catalogo/${categorySlug}/${product.slug}`}>
                    <Image src={product.images[0]} alt={product.name} />
                    <div className={styles.productInfo}>
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <span className={styles.moreDetails}>
                        Maggiori dettagli
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
