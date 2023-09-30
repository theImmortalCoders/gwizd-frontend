import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import styles from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebarlist}>
        <li className={styles.sidebaritem}>
          <Link to="/dashboard">
            <div className={styles.iconTextContainer}>
              <AiOutlineHome className={styles.icon} />
              <h4>Home</h4>
            </div>
          </Link>
        </li>
        <li className={styles.sidebaritem}>
          <Link to="/zoo">
            <div className={styles.iconTextContainer}>
              <AiOutlineHome className={styles.icon} />
              <h4>Page 1</h4>
            </div>
          </Link>
        </li>
        <li className={styles.sidebaritem}>
          <a
            href="http://localhost:8080/api/oauth2/logout"
            className={styles.logout}
          >
            <AiOutlineLogout className={styles.icon} />
            <h4>Logout</h4>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
