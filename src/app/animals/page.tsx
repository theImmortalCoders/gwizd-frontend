import styles from "./page.module.css";
import Image from "next/image";

export default function Animals() {
  const imageStyle = {
    width: "100vw",
    height: "auto",
  };
  return (
    <div className={styles.animalspagemain}>
      <div className={styles.container}>
        <div>
          <h1>zwierzęta w mieście</h1>
          <h3>dlaczego?</h3>
          <p>
            Wydaje się, że miejscem o wiele dla nich przyjaźniejszym są parki
            narodowe, rezerwaty przyrody.
          </p>
          <h3>jednak...</h3>
          <Image
            src="/animals.jpg"
            width={500}
            height={500}
            style={imageStyle}
            alt=""
          />
          <h2>
            wiele z nich zdecydowało się na prowadzenie miejskiego żywota.
          </h2>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <h1>czego im trzeba?</h1>
          <p>zrozumienia.</p>
          <h2>Zwierzęta w mieście dostosowują się do istniejących warunków.</h2>
          <h3>
            Znajdują schronienie blisko ciepłych miejsc, szukają pożywienia w
            śmietnikach i na ulicy. Muszą też uważać na szybkie pojazdy!
          </h3>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <h1>a po co "GWIZD"?</h1>
          <p>chcemy zjednoczyć.</p>
          <Image
            src="/image-dzik.jpg"
            width={500}
            height={500}
            style={imageStyle}
            alt=""
          />
          <h3>podziel się obserwacją - pomóż podjąć odpowiednie działania</h3>
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
            Byłeś świadkiem niebezpiecznej sytuacji? Odpowiednie służby sprawią,
            że skończy się ona bezpiecznie dla człowieka i dla zwierzęcia.
          </p>
          <p>
            {" "}
            Znalazłeś zagubionego pupila? Dzięki Tobie szybko znajdzie się jego
            właściciel!
          </p>
          <h4 className={styles.button}>
            <a href="/report">
              <div>Zgłoś obserwację</div>
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
