"use client";
import React from "react";
import AchievementButton from "../button/button";
import styles from "./box.module.css";
import { AiFillGoogleCircle } from "react-icons/ai";

export default function AchievementBox() {
  const iconName1 = AiFillGoogleCircle;
  const companyName1 = "Google";

  return (
    <div className={styles.main}>
      <AchievementButton iconname={iconName1} companyname={companyName1} />
    </div>
  );
}
