import { Suspense, lazy } from "react";
import styles from "./navbar.module.css";
/* Icons */
import { BiLogIn } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import logoWhite from "./components/logo_white.png"; // Import obrazka loga
import Image from "next/image"; // Import komponentu Image z next/image

const NavLink = lazy(() => import("./navlink"));

export default function Navbar() {
  const button1 = <BiLogIn size="1.5rem" />;
  const button2 = <BsFillPersonFill size="1.5rem" />;

  return (
    <div className={styles.spaceBetween}>
      <div className={styles.navbarLeft}>
        <a className={styles.menuDesktop} href="/">
          <Image src={logoWhite} alt="Logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.spaceCenter}>
          <a className={styles.menuDesktop} href="/przekierowanie">
            Twoja Okolica
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
        <Suspense fallback={<h1>Loading...</h1>}>
          <a className={styles.menuDesktop} href="/przekierowanie">
            <button>
              <BsFillPersonFill size="1.5rem" />
            </button>
          </a>
        </Suspense>
        <a className={styles.menuPhone}>
          <button>
            <HiBars3BottomRight size="25.5px" />
          </button>
        </a>
      </div>
    </div>
  );
}
