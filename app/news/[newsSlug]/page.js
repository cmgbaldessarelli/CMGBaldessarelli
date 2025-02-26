import Image from "next/image";
import styles from "./newsPage.module.css";
import { news } from "@/lib/news";

export default async function NewsPage({ params }) {
  const { newsSlug } = await params;

  const currentNews = news.find((news) => news.slug === newsSlug);

  return (
    <main className={styles.newsPage}>
      <section>
        <div className={styles.newsHeading}>
          <div className="container">
            <h1>{currentNews.title}</h1>
          </div>
        </div>
        <div className="container">
          <p className={styles.newsDescription}>{currentNews.description}</p>
          {currentNews.images.length > 0 && (
            <div className={styles.newsImagesContainer}>
              <Image src={currentNews.images[0]} alt={currentNews.title} />
              <Image src={currentNews.images[1]} alt={currentNews.title} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
