import styles from "./navbar.module.css";
/* Icons */
import { BiMap } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { BsMegaphone } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";

/* Logo */
import logoWhite from "./components/logo_white.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.spaceBetween}>
      <div className={styles.navbarLeft}>
        <a href="/">
          <Image src={logoWhite} alt="Logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.spaceCenterDesktop}>
          <a className={styles.menuDesktop} href="/maps">
            Okolica
          </a>
          <a className={styles.menuDesktop} href="/statistic">
            Statystyki
          </a>
          <a className={styles.menuDesktop} href="/animals">
            Zwierzęta w Mieście
          </a>
          <a className={styles.menuDesktop} href="/contact">
            Kontakt
          </a>
        </div>

        <div className={styles.spaceCenterPhone}>
          <a className={styles.menuPhone} href="/maps">
            <button>
              <BiMap size="1.5rem" />
            </button>
          </a>
          <a className={styles.menuPhone} href="/statistic">
            <button>
              <ImStatsBars size="25.5px" />
            </button>
          </a>
          <a className={styles.menuPhone} href="/animals">
            <button>
              <BsMegaphone size="25.5px" />
            </button>
          </a>
          <a className={styles.menuPhone} href="/contact">
            <button>
              <BiPhone size="25.5px" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
