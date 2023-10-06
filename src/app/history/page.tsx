"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import getUser from "@/data/userData";
import getReports from "@/data/reportData";
import ReportRow from "./components/reportRow";

function History() {
  const [reports, setReports] = useState<Array<AnimalReport>>([]);
  useEffect(() => {
    const fetchData = async () => {
      getReports(await getUser(), setReports);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.historypagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <h1>Historia zgłoszeń:</h1>
          <div className={styles.containertable}>
            <table className={styles.historyTable}>
              <thead>
                <tr>
                  <th>Nazwa</th>
                  <th>Opis</th>
                  <th>Typ</th>
                  <th>Zwierzę</th>
                  <th>Ilość</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((rep: AnimalReport) => {
                  return <ReportRow report={rep} key={rep.id} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
