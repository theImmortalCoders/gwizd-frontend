"use client";
import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
import AchievementBox from "../components/box/box";

export default function Home() {
  return (
    <div className={styles.achievementpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <h1>Osiągnięcia:</h1>
          <AchievementBox />
        </div>
      </div>
    </div>
  );
}
