import Link from "next/link";
import styles from "./page.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundPage}>
      <section>
        <div className={styles.notFoundHeading}>
          <h1>404</h1>
        </div>
        <div className={styles.notFoundContent}>
          <p>La pagina che stai cercando non esiste.</p>
        </div>
        <Link href="/">Torna alla home</Link>
      </section>
    </main>
  );
}
