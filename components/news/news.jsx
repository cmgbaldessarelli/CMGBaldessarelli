import styles from "./news.module.css";

import Image from "next/image";

export default function News() {
  return (
    <section className={styles.news}>
      <div className="container">
        <div className={`${styles.newsColumns} row gap-5 gap-md-0`}>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.newsItem}>
              <Image
                src="/assets/news/news-1.jpg"
                alt="News 1"
                width={400}
                height={300}
              />
              <h3>Titolo News 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae nunc et nisl ultr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
