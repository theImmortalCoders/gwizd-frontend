import styles from "../navbar.module.css";
const Menu = () => {
  return (
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
  );
};
export default Menu;
