import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.reportpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <a href="/report">
            <button>Widzę zwierzę!</button>
          </a>
        </div>
      </div>
    </div>
  );
}
