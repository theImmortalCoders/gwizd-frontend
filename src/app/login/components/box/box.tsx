"use client";
import React from "react";
import LoginButton from "../button/button";
import styles from "./box.module.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { apiDomain, domain } from "../../../../variables";

interface LoginBoxProps {
  loginText: string;
}
export default function LoginBox({ loginText }: LoginBoxProps) {
  const iconName1 = AiFillGoogleCircle;
  const companyName1 = "Google";

  const handleLoginClick = () => {
    document.cookie = `redirectUrl=${domain}`;
    window.location.href = `${apiDomain}/api/oauth2/authorize/google`;
  };

  return (
    <div className={styles.main}>
      <div className={styles.text}>{loginText}</div>
      <a
        onClick={handleLoginClick}
        href={`${apiDomain}/api/oauth2/authorize/google`}
      >
        <LoginButton iconname={iconName1} companyname={companyName1} />
      </a>
    </div>
  );
}
