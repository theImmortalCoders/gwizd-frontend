"use client";
import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
import AchievementBox from "../components/box/box";

export default function Home() {
  const [userInfo, setUserInfo] = useState(null);

  const handleGetUserInfo = () => {
    getUserInfo(setUserInfo);
  };

  const getUserInfo = (setUserInfo: any) => {
    fetch("http://localhost:8080/api/user/me", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data: { username: string; email: string }) => {
        setUserInfo(data);
        console.log(data);
      })
      .catch((error) => console.log("Authorization failed: " + error.message));
  };

  return (
    <div className={styles.achievementpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <h1>Osiągnięcia</h1>
          <AchievementBox />
        </div>
      </div>
    </div>
  );
}
