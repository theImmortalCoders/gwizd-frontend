import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.reportpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <a href="/report">
            <button>Zgłoś znalezione zwierzę</button>
          </a>
        </div>
        <div className={styles.containertext}>
          <h2>
            Kliknij przycisk na górze jeżeli znalazłeś zaginionę lub dzikie
            zwierzę
          </h2>
        </div>
      </div>
    </div>
  );
}
