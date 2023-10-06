import ReportButton from "@/components/reportButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.reportpagemain}>
        <div className={styles.backgroundImage}>
          <div className={styles.container}>
            <ReportButton />
          </div>
        </div>
      </div>
    </main>
  );
}
