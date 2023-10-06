import { BsFillPersonFill } from "react-icons/bs";
import styles from "../navbar.module.css";
import { cookies } from "next/headers";
const UserButton = () => {
  var redirect = "";
  const myCookies = cookies();
  if (!myCookies.get("JSESSIONID")) {
    redirect = "/login";
  } else {
    redirect = "/history";
  }
  return (
    <a className={styles.menuDesktopAndPhone} href={redirect}>
      <button>
        <BsFillPersonFill size="3vh" />
      </button>
    </a>
  );
};
export default UserButton;
