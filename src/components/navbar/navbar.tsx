import styles from "./navbar.module.css";
import { BiMap } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { BsFillPersonFill, BsMegaphone } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import logoWhite from "../../app/statistic/logo_white.png";
import Image from "next/image";
import { cookies } from "next/headers";
import { red } from "@mui/material/colors";

export default function Navbar() {
  var redirect = "";
  const myCookies = cookies();
  if (!myCookies.get("JSESSIONID")) {
    redirect = "/login";
  } else {
    redirect = "/history";
  }
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
        </div>

        <div className={styles.spaceCenterPhone}>
          <a className={styles.menuPhone} href="/maps">
            <button>
              <BiMap size="3vh" />
            </button>
          </a>
          <a className={styles.menuPhone} href="/statistic">
            <button>
              <ImStatsBars size="3vh" />
            </button>
          </a>
          <a className={styles.menuPhone} href="/animals">
            <button>
              <BsMegaphone size="3vh" />
            </button>
          </a>
        </div>
        <a className={styles.menuDesktopAndPhone} href={redirect}>
          <button>
            <BsFillPersonFill size="3vh" />
          </button>
        </a>
      </div>
    </div>
  );
}
