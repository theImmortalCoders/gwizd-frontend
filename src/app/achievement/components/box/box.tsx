"use client";
import React from "react";
import styles from "./box.module.css";
import { BsTrophy } from "react-icons/bs";
import AchievementButton from "../button/button";
import AchievementButtonGlow from "../buttonglow/buttonglow";

export default function AchievementBox() {
  const iconName1 = BsTrophy;
  const trophyName1 = "Zoolog";
  const trophyDescription1 = "Zgłoś 5 zwierząd";

  const trophyName2 = "Byczek";
  const trophyDescription2 = "Zgłoś byka";

  const trophyName3 = "Dzikus";
  const trophyDescription3 = "Zgłoś dzika";

  const trophyName4 = "Sarenka";
  const trophyDescription4 = "Zgłoś sarnę";

  return (
    <div className={styles.main}>
      <AchievementButtonGlow
        iconname={iconName1}
        trophyname={trophyName1}
        trophydescription={trophyDescription1}
      />
      <AchievementButton
        iconname={iconName1}
        trophyname={trophyName2}
        trophydescription={trophyDescription2}
      />
      <AchievementButton
        iconname={iconName1}
        trophyname={trophyName3}
        trophydescription={trophyDescription3}
      />
      <AchievementButton
        iconname={iconName1}
        trophyname={trophyName4}
        trophydescription={trophyDescription4}
      />
    </div>
  );
}
