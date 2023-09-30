import styles from "./page.module.css";

export default function Contact() {
  const emergencyNumbers = [
    { type: "Policja", number: "997" },
    { type: "Straż Pożarna", number: "998" },
    { type: "Pogotowie Ratunkowe", number: "999" },
    { type: "Pogotowie Gazowe", number: "992" },
    { type: "Pogotowie Energetyczne", number: "991" },
  ];

  return (
    <div className="emergency-numbers">
      <h1>Numery Alarmowe</h1>
      <ul>
        {emergencyNumbers.map((item, index) => (
          <li key={index}>
            <strong>{item.type}:</strong> {item.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
