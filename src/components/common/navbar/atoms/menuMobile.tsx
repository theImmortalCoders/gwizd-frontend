import { BiMap } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";

const MenuMobile = () => {
  return (
    <div>
      <a href="/maps">
        <button>
          <BiMap size="3vh" />
        </button>
      </a>
      <a href="/animals">
        <button>
          <BsMegaphone size="3vh" />
        </button>
      </a>
    </div>
  );
};
export default MenuMobile;
