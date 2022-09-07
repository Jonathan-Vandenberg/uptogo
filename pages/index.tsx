import CollapseMenus from "../components/Global/Footer/CollapseMenus";
import HomeMain from "../components/HomePage/HomeMain";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import Image from "next/image";
import Hero from "../components/HomePage/Hero";

export default function App() {
  return (
    <div className="container mx-auto">
      <div className="md:px-10 p-4 py-10 md:p-0 md:mt-12 md:mb-6 bg-body">
        <Hero />
      </div>
      <HomeMain />
      <Image
        src={image}
        alt="image"
        width={950}
        height={280}
        layout="responsive"
      />
    </div>
  );
}
