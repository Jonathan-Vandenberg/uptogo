import HeroSlides from "../../components/UI/HeroSlides";
import Stationary from "../UI/Stationary";
import Image from "next/image";
import landingImage2 from "../../public/landingImage2.png";

export default function App() {
  return (
    <>
      {/* <Image src={landingImage} width={375} height={812} alt="landing Image" /> */}
      <Image
        src={landingImage2}
        alt="lading image"
        width={390}
        height={844}
        layout="responsive"
      />
      <HeroSlides />
    </>
  );
}
