import styles from "./page.module.css";

export default function Contact() {
  const emergencyNumbers = [
    { type: "Numer alarmowy", number: "112" },
    { type: "Policja", number: "997" },
    { type: "Straż Pożarna", number: "998" },
  ];

  return (
    <div className={styles.backgroundImage}>
      <div className={styles.contactpagemain}>
        <h1>Lista numerów alarmowych:</h1>
        <div className={styles.emergencyNumbers}>
          <ul>
            {emergencyNumbers.map((item, index) => (
              <li key={index}>
                <strong>- {item.type}:</strong> {item.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
