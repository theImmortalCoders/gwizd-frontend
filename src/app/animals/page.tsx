import styles from "./page.module.css";
import Content from "./components/content";

export default function Animals() {
  const imageStyle = {
    width: "100vw",
    height: "auto",
  };
  return (
    <div className={styles.animalspagemain}>
      <Content />
    </div>
  );
}
