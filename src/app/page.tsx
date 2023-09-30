import Image from "next/image";
import styles from "./page.module.css";
import Report from "@/components/report/report";

export default function Home() {
  return (
    <main className={styles.main}>
      <Report />
    </main>
  );
}
