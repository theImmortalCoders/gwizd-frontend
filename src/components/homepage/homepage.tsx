import { cookies } from "next/headers";
import styles from "./homepage.module.css";
import { redirect } from "react-router-dom";
import ReportButton from "../common/reportButton";

export default function Homepage() {
  return (
    <div className={styles.reportpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <ReportButton />
        </div>
      </div>
    </div>
  );
}
