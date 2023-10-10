import Image from "next/image";
import logoWhite from "@/assets/logo_white.png";
import styles from "../navbar.module.css";
const Logo = () => {
  return (
    <a href="/">
      <Image src={logoWhite} alt="Logo" className="h-[100px] w-auto" />
    </a>
  );
};
export default Logo;
