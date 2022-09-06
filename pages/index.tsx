import CollapseMenus from "../components/Global/Footer/CollapseMenus";
import HomeMain from "../components/HomePage/Index";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import Image from "next/image";
export default function App() {
  return (
    <>
      <div className="md:px-10 md:container mx-auto">
        <Image
          src={image}
          alt="image"
          width={950}
          height={280}
          layout="responsive"
        />
      </div>
      <HomeMain />
    </>
  );
}
