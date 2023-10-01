import styles from "./page.module.css";
import Image from "next/image";

export default function Animals() {
  const imageStyle = {
    width: "100vw",
    height: "auto",
  };
  return (
    <div className={styles.animalspagemain}>
      <div className={styles.container1}>
        <div className={styles.blur}>
          <div className={styles.text}>
            <h1>Zwierzęta w mieście</h1>
            <h3>Dlaczego?</h3>
            <p>
              Wydaje się, że miejscem o wiele dla nich przyjaźniejszym są parki
              narodowe, rezerwaty przyrody.
            </p>
            <h3>jednak...</h3>
            <h2>
              wiele z nich zdecydowało się na prowadzenie miejskiego żywota.
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.blur}>
          <div className={styles.text}>
            <h1>Czego im trzeba?</h1>
            <p>Zrozumienia.</p>
            <h2>
              Zwierzęta w mieście dostosowują się do istniejących warunków.
            </h2>
            <h3>
              Znajdują schronienie blisko ciepłych miejsc, szukają pożywienia w
              śmietnikach i na ulicy. Muszą też uważać na szybkie pojazdy!
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.blur}>
          <div className={styles.text}>
            <h1>A po co "GWIZD"?</h1>
            <p>Chcemy zjednoczyć.</p>
            <h3>Podziel się obserwacją - pomóż podjąć odpowiednie działania</h3>
            <h2>
              Marzymy, by obserwacja zwierzęcia w mieście stała się czymś wartym
              odnotowania.
            </h2>
            <p>
              Zobaczyłeś zwierzę? Pomożesz Urzędowi Województwa Małopolskiego
              prowadzić statystyki występowania różnych gatunków na terenie
              miasta.{" "}
            </p>
            <p>
              {" "}
              Byłeś świadkiem niebezpiecznej sytuacji? Odpowiednie służby
              sprawią, że skończy się ona bezpiecznie dla człowieka i dla
              zwierzęcia.
            </p>
            <p>
              {" "}
              Znalazłeś zagubionego pupila? Dzięki Tobie szybko znajdzie się
              jego właściciel!
            </p>
          </div>
        </div>
        <div className={styles.center}>
          <button className={styles.submitbutton} type={"submit"}>
            <a href="/report">Zgłoś obserwację</a>
          </button>
        </div>
      </div>
    </div>
  );
}
