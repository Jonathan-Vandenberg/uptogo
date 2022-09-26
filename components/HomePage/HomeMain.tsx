import Image from "next/image";
import { useEffect, useState } from "react";
import UserInterestedForm from "../../components/UserInterestedForm";
import { reviews } from "../../lib/reviews";
import graduationWeb from "../../public/graduationWeb.jpg";
import banner2 from "../../public/heroImages/biawweb.jpeg";
import banner1 from "../../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import travel from "../../public/heroImages/heroTravel.jpg";
import CustomerReview from "../UI/CustomerReview";
import Popup from "../UI/Popup";
import ReadyToExplore from "./ReadyToExplore";
import WhyUptogo from "./WhyUptogo";
import banner3 from "../../public/heroImages/Gold-and-Blue-Trendy-New-Season-Boutique-Ads-Facebook-Cover-820-×-312-px-820-×-258-px.png";

export default function App() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState(false);
  const [major, setMajor] = useState(false);

  const handleCategoryStepper = () => {
    setCategory(!category);
  };

  const handleMajorStepper = () => {
    setMajor(!major);
  };

  useEffect(() => {
    if (category) {
      setStep(1);
    } else {
      setStep(0);
    }
    if (major && category) {
      setStep(2);
    }
  }, [category, major]);

  return (
    <>
      <div className="md:-mt-40 lg:-mt-68 xl:-mt-72 w-full -z-10">
        <div className="block w-full mx-auto 2xl:container">
          <Image
            src={travel}
            alt="travel locations image, decorational"
            layout="responsive"
            priority
          />
        </div>
        <span className="absolute w-screen h-full left-0 top-0 bg-gradient-to-t from-transparent to-sky-500/20" />
      </div>
      <div className="pt-2 md:pt-16">
        <WhyUptogo whyUptogoImage={graduationWeb} />
      </div>
      <div className="w-full block container mx-auto mt-16">
        <Image src={banner1} alt="uptogo banner" layout="responsive" />
      </div>
      <div className="container mx-auto">
        <div className="pt-12 flex items-center justify-center">
          <Popup />
        </div>
        <ReadyToExplore
          handleMajorStepper={handleMajorStepper}
          handleCategoryStepper={handleCategoryStepper}
          step={step}
        />
        <div className="block w-full pb-20">
          <Image src={banner3} alt={"uptogo banner"} layout="responsive" />
        </div>
        <CustomerReview reviews={reviews} />
        <UserInterestedForm />
      </div>
      {/* <CourseCard
        course={"Yoga"}
        description={"Learn Yoga in London with the professionals"}
        category={"Yoa"}
      /> */}
    </>
  );
}
