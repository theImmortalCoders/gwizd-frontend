import { lazy } from "react";
import styles from "./navbar.module.css";
/* Icons */
import { BiMap } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { BsMegaphone } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";

/* Logo */
import logoWhite from "./components/logo_white.png"; // Import obrazka loga
import Image from "next/image"; // Import komponentu Image z next/image

export default function Navbar() {
  return (
    <div className={styles.spaceBetween}>
      <div className={styles.navbarLeft}>
        <a className={styles.menuDesktop} href="/">
          <Image src={logoWhite} alt="Logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.spaceCenterDesktop}>
          <a className={styles.menuDesktop} href="/przekierowanie">
            Okolica
          </a>
          <a className={styles.menuDesktop} href="/przekierowanie">
            Statystyki
          </a>
          <a className={styles.menuDesktop} href="/przekierowanie">
            Co robimy
          </a>
          <a className={styles.menuDesktop} href="/przekierowanie">
            Kontakt
          </a>
        </div>

        <div className={styles.spaceCenterPhone}>
          <a className={styles.menuPhone} href="/przekierowanie">
            <button>
              <BiMap size="1.5rem" />
            </button>
          </a>
          <a className={styles.menuPhone} href="/przekierowanie">
            <button>
              <ImStatsBars size="25.5px" />
            </button>
          </a>
          <a className={styles.menuPhone} href="/przekierowanie">
            <button>
              <BsMegaphone size="25.5px" />
            </button>
          </a>
          <a className={styles.menuPhone} href="/przekierowanie">
            <button>
              <BiPhone size="25.5px" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
