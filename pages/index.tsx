import CollapseMenus from "../components/Global/Footer/CollapseMenus";
import HomeMain from "../components/HomePage/HomeMain";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import Image from "next/image";
import Hero from "../components/HomePage/Hero";
import Popup from "../components/UI/Popup";

export default function App() {
  return (
    <>
      <div className="md:px-10 p-4 md:py-10 md:p-0 md:mb-6 bg-body">
        <Hero />
      </div>
      <div className="container mx-auto className=">
        <HomeMain />
        <Popup />
        <Image
          src={image}
          alt="image"
          width={950}
          height={280}
          layout="responsive"
        />
      </div>
    </>
  );
}
