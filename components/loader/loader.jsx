import styles from "./loader.module.css";

export default function Loader() {
    return (
      <div className={`${styles.loader} spinner-grow text-light`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
}