import AchievementBox from "./components/box/box";
import styles from "./page.module.css";

export default function Achievement() {
  const loginText: string = "Logowanie";
  return (
    <div className={styles.achievementpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <h1>Osiągndsadęcia</h1>
          <AchievementBox loginText={loginText} />
        </div>
      </div>
    </div>
  );
}
