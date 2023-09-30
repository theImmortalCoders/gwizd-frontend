import styles from "./page.module.css";

export default function Animals() {
  return (
    <div className={styles.animalspagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <h1>Czym się zajmujemy?</h1>
          <p>
            Nasza strona to idealne narzędzie dla weterynarzy oraz obywateli,
            która integruje ludzi w celu pomagania zwierzętom.
          </p>
          <p>
            Naszą misją jest stworzenie zintegrowanego narzędzia pozwalającego
            wszystkim nam zgłaszać zaginione i/lub ranne zwierzęta,w celu
            zapewninia im wyśmienitej opieki zdrwotnej oraz znalezieniu ich
            właścicieli. W tym celu w nasza platworma integruje weterynarzy z
            całej Polski oraz wszystkich nas, zainteresowanych losem zwierząd.
          </p>
        </div>
      </div>
    </div>
  );
}
