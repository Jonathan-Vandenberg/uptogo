import HeroSlides from "../../components/UI/HeroSlides";
import Stationary from "../UI/Stationary";
import Image from "next/image";
import landingImage from "../../public/landingImage1.png";

export default function App() {
  return (
    <>
      {/* <Image src={landingImage} width={375} height={812} alt="landing Image" /> */}
      <Stationary />
      <HeroSlides />
    </>
  );
}
