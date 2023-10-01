import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle, AiOutlineLogout } from "react-icons/ai";
import { BsTrophy } from "react-icons/bs";
import styles from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebarlist}>
        <li className={styles.sidebaritem}>
          <Link to="/achievement">
            <div className={styles.iconTextContainer}>
              <BsTrophy className={styles.icon} />
              <h4>Osiągnięcia</h4>
            </div>
          </Link>
        </li>
        <li className={styles.sidebaritem}>
          <Link to="/history">
            <div className={styles.iconTextContainer}>
              <AiOutlineClockCircle className={styles.icon} />
              <h4>Historia</h4>
            </div>
          </Link>
        </li>
        <li className={styles.sidebaritem}>
          <a
            href="http://localhost:8080/api/oauth2/logout"
            className={styles.logout}
          >
            <AiOutlineLogout className={styles.icon} />
            <h4>Wylogowanie</h4>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
