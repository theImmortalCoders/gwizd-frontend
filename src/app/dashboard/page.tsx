"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import getUser from "@/data/userData";
import { getReportsByUser } from "@/data/reportData";
import ReportRow from "./components/reportRow";

function Dashboard() {
  const [reports, setReports] = useState<Array<AnimalReport>>([]);
  useEffect(() => {
    const fetchData = async () => {
      getReportsByUser(await getUser(), setReports);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.dashboardpagemain}>
      <h1>Historia zgłoszeń:</h1>
      <div className={styles.containertable}>
        <table className={styles.dashboardTable}>
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
            {reports.length === 0 ? (
              <tr>
                <td>Nie znaleziono</td>
              </tr>
            ) : (
              reports.map((rep: AnimalReport) => {
                return <ReportRow report={rep} key={rep.id} />;
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
