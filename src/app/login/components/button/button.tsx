import styles from "./button.module.css";
import React from "react";
import { IconType } from "react-icons";

interface LoginButtonProps {
  iconname: IconType;
  companyname: string;
}

export default function LoginButton({
  iconname,
  companyname,
}: LoginButtonProps) {
  return (
    <div className={styles.boxes}>
      <div className={styles.boxicon}>
        <a>
          {React.createElement(iconname as IconType, {
            color: "var(--whitetowrite)",
          })}
        </a>
      </div>
      <div className={styles.boxtext}>
        <h3>Zaloguj się za pomocą {companyname}</h3>
      </div>
    </div>
  );
}
