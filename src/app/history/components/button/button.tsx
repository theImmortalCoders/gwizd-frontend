import styles from "./button.module.css";
import React from "react";
import { IconType } from "react-icons";

interface AchievementButtonProps {
  iconname: IconType;
  trophyname: string;
  trophydescription: string;
}

export default function AchievementButton({
  iconname,
  trophyname,
  trophydescription,
}: AchievementButtonProps) {
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
        <h3>{trophyname}</h3>
        <p>{trophydescription}</p>
      </div>
    </div>
  );
}
