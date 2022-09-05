import CollapseMenus from "../components/Global/Footer/CollapseMenus";
import HomeMain from "../components/HomePage/Index";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import Image from "next/image";
export default function App() {
  return (
    <>
      <HomeMain />
      <div className="px-10 container mx-auto">
        <Image
          src={image}
          alt="image"
          width={950}
          height={280}
          layout="responsive"
        />
      </div>
      <div className="h-96 flex items-center justify-center">SPACER TIME</div>
    </>
  );
}
