"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Home from "../achievement/page";
import { apiDomain } from "../variables";

function History() {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch(`${apiDomain}/api/user/me`, {
      credentials: "include",
    });
    const user = await response.json();
    setUser(user.id);
  };
  const [reports, setReports] = useState([]);
  const getReports = async () => {
    const response = await fetch(`${apiDomain}/api/report/?userId=${user}`);
    const reports = await response.json();
    console.log(reports);
    setReports(
      reports.map((rep: any) => {
        return {
          id: rep.id,
          title: rep.title,
          description: rep.description,
          type: rep.reportType,
          animal: rep.animal,
          quantity: rep.quantity,
          date: rep.createdDate,
        };
      })
    );
  };
  useEffect(() => {
    getUser();
    getReports();
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
                {reports.map((rep: any) => {
                  console.log(rep);
                  return (
                    <tr key={rep.id}>
                      <td>{rep.title}</td>
                      <td>{rep.description}</td>
                      <td>{rep.type}</td>
                      <td>{rep.animal.name}</td>
                      <td>{rep.quantity}</td>
                      <td>{rep.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default History;
