"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { BsTrophy } from "react-icons/bs";
import AchievementButton from "../history/components/button/button";
import AchievementButtonGlow from "../history/components/buttonglow/buttonglow";
import { apiDomain } from "../variables";

function Home() {
  const [achievements, setAchievements] = useState([]);

  const getAchievements = async () => {
    try {
      const response = await fetch(`${apiDomain}/api/user/me`, {
        credentials: "include",
      });
      const user = await response.json();
      setAchievements(user.achievements);
      console.log(achievements);
    } catch (error) {
      console.error("Error fetching achievements:", error);
    }
  };

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await fetch(`${apiDomain}/api/user/me`, {
        credentials: "include",
      });
      const user = await response.json();
      setUser(user.id);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUser();
    getAchievements();
  }, []);

  const iconName1 = BsTrophy;
  const trophyName1 = "Zoolog";
  const trophyDescription1 = "Zgłoś 5 zwierząt";

  const trophyName2 = "Byczek";
  const trophyDescription2 = "Zgłoś byka";

  const trophyName3 = "Dzikus";
  const trophyDescription3 = "Zgłoś dzika";

  const trophyName4 = "Sarenka";
  const trophyDescription4 = "Zgłoś sarnę";

  return (
    <div className={styles.achievementpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <h1>Osiągnięcia:</h1>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
