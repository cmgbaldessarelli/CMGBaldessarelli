import styles from "./product-page.module.css";

import Image from "next/image";
import { notFound } from "next/navigation";

import { products } from "@/lib/products";

export default async function ProductPage({ params }) {
  const { productSlug } = await params;

  const product = products.find((product) => product.slug === productSlug);

  if (!product) {
    notFound();
  }

  return (
    <section className={styles.productPage}>
      <div className={styles.productPageHeading}>
        <div className="container">
          <h1>{product.name}</h1>
        </div>
      </div>
      <div className={styles.productPageContent}>
        <div className={`${styles.hiddenOnMobile} container`}>
          <div className={styles.productPageImages}>
            <Image src={product.images[0]} alt={product.name} />
            {product.images.length > 1 && (
              <Image src={product.images[1]} alt={product.name} />
            )}
          </div>
        </div>
        <div className="container">
          <div className={styles.productPageInfo}>
            {product.informations ? (
              <table>
                <thead>
                  <tr>
                    <th>Codice Articolo</th>
                    <th>Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  {product.informations.articles.map((article, index) => (
                    <tr key={index}>
                      <td>{article.code}</td>
                      <td>{article.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Nessuna informazione disponibile sul prodotto.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
