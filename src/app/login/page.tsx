import React from "react";
import styles from "./page.module.css";
import LoginBox from "./components/box/box";

export default function Login() {
  const loginText: string = "Logowanie";
  return (
    <main className={styles.main}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <LoginBox loginText={loginText} />
        </div>
      </div>
    </main>
  );
}
