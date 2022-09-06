import CollapseMenus from "../components/Global/Footer/CollapseMenus";
import HomeMain from "../components/HomePage/Index";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import Image from "next/image";
import Hero from "../components/HomePage/Hero";
export default function App() {
  return (
    <>
      <div className="md:px-10 md:container mx-auto">
        <div className="pb-12">
          <Hero />
        </div>
      </div>
      <HomeMain />
      <Image
        src={image}
        alt="image"
        width={950}
        height={280}
        layout="responsive"
      />
    </>
  );
}
