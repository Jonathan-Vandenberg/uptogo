import HeroSlides from "../../components/UI/HeroSlides";
import slide1 from "../../public/heroImages/biawweb.jpeg";
import slide2 from "../../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import slide3 from "../../public/heroImages/Gold-and-Blue-Trendy-New-Season-Boutique-Ads-Facebook-Cover-820-×-312-px-820-×-258-px.png";
import Image from "next/image";
import Loading3D from "../UI/Loading3D";
const images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
];

export default function App() {
  return (
    <div className="bg-homeBody -mt-48">
      <Loading3D />
    </div>
  );
}
