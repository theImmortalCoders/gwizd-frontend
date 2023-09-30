import styles from "./report.module.css";

export default function Report() {
  return (
    <div className={styles.reportpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <button>Zgłoś znalezione zwierzę</button>
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
