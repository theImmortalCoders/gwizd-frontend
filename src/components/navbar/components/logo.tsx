import Image from "next/image";
import logoWhite from "../../../../public/logo_white.png";
import styles from "../navbar.module.css";
const Logo = () => {
  return (
    <a href="/">
      <Image src={logoWhite} alt="Logo" className={styles.logo} />
    </a>
  );
};
export default Logo;
