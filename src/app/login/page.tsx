import React from "react";
import styles from "./page.module.css";
import LoginBox from "./components/box/box";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Login() {
  const loginText: string = "Logowanie";

  const myCookies = cookies();

  if (myCookies.get("JSESSIONID")) {
    redirect("/");
  }

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
