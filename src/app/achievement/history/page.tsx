import React from "react";
import styles from "./page.module.css";

function History() {
  const historyData = [
    {
      id: 1,
      data: "2023-10-01",
      typSpotkania: "Spotkanie 1",
      iloscZwierzat: 3,
      tytul: "Spotkanie z psami",
      opis: "Opis spotkania z psami",
    },
    {
      id: 2,
      data: "2023-10-02",
      typSpotkania: "Spotkanie 2",
      iloscZwierzat: 2,
      tytul: "Spotkanie z kotami",
      opis: "Opis spotkania z kotami",
    },
    // Dodaj więcej danych historii tutaj
  ];

  return (
    <div className={styles.historypagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <h1>Historia zgłoszeń:</h1>
          <div className={styles.containertable}>
            <table className={styles.historyTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Data</th>
                  <th>Typ spotkania</th>
                  <th>Ilość</th>
                  <th>Tytuł</th>
                  <th>Opis</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.data}</td>
                    <td>{item.typSpotkania}</td>
                    <td>{item.iloscZwierzat}</td>
                    <td>{item.tytul}</td>
                    <td>{item.opis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
