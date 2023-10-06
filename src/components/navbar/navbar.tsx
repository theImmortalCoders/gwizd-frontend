import styles from "./navbar.module.css";
import UserButton from "./components/userButton";
import Menu from "./components/menu";
import Logo from "./components/logo";
import MenuMobile from "./components/menuMobile";

export default function Navbar() {
  return (
    <div className={styles.spaceBetween}>
      <div className={styles.navbarLeft}>
        <Logo />
      </div>
      <div className={styles.navbarRight}>
        <Menu />
        <MenuMobile />
        <UserButton />
      </div>
    </div>
  );
}
