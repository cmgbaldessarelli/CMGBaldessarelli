import styles from "../catalogo.module.css";

import Image from "next/image";

import { products } from "@/lib/products";

import Link from "next/link";
import { notFound } from "next/navigation";

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
    <main className={styles.categoryCatalogo}>
      <section>
        <div className={styles.catalogoHeading}>
          <h1>{category}</h1>
        </div>
        <div className={styles.catalogoContent}>
          <div className="container">
            <ul className={styles.products}>
              {categoryProducts.map((product, index) => (
                <li key={index} className={styles.productCard}>
                  <Image src={product.images[0]} alt={product.name} />
                  <div className={styles.productInfo}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <Link href={`/catalogo/${categorySlug}/${product.slug}`}>
                      Maggiori dettagli
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
