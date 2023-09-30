"use client";
import React from "react";
import LoginButton from "../button/button";
import styles from "./box.module.css";
import { AiFillGoogleCircle } from "react-icons/ai";

interface LoginBoxProps {
  loginText: string;
}

export default function LoginBox({ loginText }: LoginBoxProps) {
  const handleLoginClick = () => {
    document.cookie = "redirectUrl=http://localhost:3000/";
    window.location.href = "http://localhost:8080/api/oauth2/authorize/github";
  };

  const iconName1 = AiFillGoogleCircle;
  const companyName1 = "Google";
  return (
    <div className={styles.main}>
      <div className={styles.text}>{loginText}</div>
      <a
        onClick={handleLoginClick}
        href="http://localhost:8080/api/oauth2/authorize/google"
      >
        <LoginButton iconname={iconName1} companyname={companyName1} />
      </a>
    </div>
  );
}