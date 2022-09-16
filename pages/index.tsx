import Image from "next/image";
import Hero from "../components/HomePage/Hero";
import HomeMain from "../components/HomePage/HomeMain";
import CustomerReview from "../components/UI/CustomerReview";
import Popup from "../components/UI/Popup";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";

const customer = [
  {
    name: "jon",
    review: "Uptogo has helped me achieve my dream of traveling and studying",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "Mandy",
    review: "It's been so easy to go abroad with Uptogo",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "Nancy",
    review:
      "I reccomement Uptogo to any wishing to travel abroad, they are professional.",
    image: "https://picsum.photos/32/32",
  },
];

export default function App() {
  return (
    <>
      <div className="md:px-10 p-4 md:py-10 md:p-0 md:mb-6 bg-white">
        <Hero />
      </div>
      <h2 className="text-red-600 text-3xl text-center bg-red-100 py-5 logoFont">
        web đang xây dựng
      </h2>
      <HomeMain />
      <div className="container mx-auto">
        <div className="py-12 flex items-center justify-center">
          <Popup />
        </div>
        <CustomerReview customer={customer} />
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
