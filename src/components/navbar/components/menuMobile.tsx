import { BiMap } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import styles from "../navbar.module.css";
const MenuMobile = () => {
  return (
    <div className={styles.spaceCenterPhone}>
      <a className={styles.menuPhone} href="/maps">
        <button>
          <BiMap size="3vh" />
        </button>
      </a>
      <a className={styles.menuPhone} href="/animals">
        <button>
          <BsMegaphone size="3vh" />
        </button>
      </a>
    </div>
  );
};
export default MenuMobile;
