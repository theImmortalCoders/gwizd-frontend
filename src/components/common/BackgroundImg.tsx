import Image from "next/image";
import HomepageLogo from "@/assets/homepage.jpg";

const BackgroundImg = () => {
  return (
    <div>
      <Image
        src={HomepageLogo}
        alt={"Logo"}
        layout="responsive"
        className={"w-[100vw] h-[10vh] bg-center bg-top-55"}
      />
    </div>
  );
};

export default BackgroundImg;
