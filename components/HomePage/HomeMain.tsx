import Image from "next/image";
import { useEffect, useState } from "react";
import graduationWeb from "../../public/graduationWeb.jpg";
import {
  CoursesHealth,
  CoursesDesign,
  CoursesHospitality,
  CoursesIT,
  CoursesManagement,
  CoursesTrades,
} from "../Global/Footer/CollapseMenus";
import CourseStepper from "./CourseStepper";
import travel from "../../public/heroImages/heroTravel.jpg";
import CustomerReview from "../UI/CustomerReview";
import Popup from "../UI/Popup";
import image from "../../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import banner1 from "../../public/heroImages/biawweb.jpeg";
import UserInterestedForm from "../../components/UserInterestedForm";
import { reviews } from "../../lib/reviews";
import CourseCard from "../UI/CourseCard";

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
        <div className="block w-full container mx-auto">
          <Image
            src={travel}
            alt="travel locations image, decorational"
            layout="responsive"
            width={900}
            height={400}
            priority
          />
        </div>
        <span className="absolute w-screen h-full left-0 top-0 bg-gradient-to-t from-transparent to-sky-500/20" />
      </div>
      <div className="pt-2 md:pt-16">
        <WhyUptogo />
      </div>
      <div className="max-w-[678px] md:max-w-[900px] mx-auto container">
        <div className="bg-sky-50 my-6">
          <div className="pt-5 text-center ">
            <h2 className="logoFont text-3xl md:text-5xl text-gray-700 py-1 md:py-3">
              Ready to Explore?
            </h2>
            <h2 className="logoFont text-xl md:text-3xl text-gray-700 py-1">
              Let&apos;s go step-by-step
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center space-y-12 py-12 px-10">
            <CourseStepper step={step} />
            <div className="flex -tems-center-justify-center space-y-1 flex-col">
              <CoursesIT
                handleMajorStepper={handleMajorStepper}
                handleCategoryStepper={handleCategoryStepper}
              />
              <CoursesHealth
                handleMajorStepper={handleMajorStepper}
                handleCategoryStepper={handleCategoryStepper}
              />
              <CoursesManagement
                handleMajorStepper={handleMajorStepper}
                handleCategoryStepper={handleCategoryStepper}
              />
              <CoursesDesign
                handleMajorStepper={handleMajorStepper}
                handleCategoryStepper={handleCategoryStepper}
              />
              <CoursesHospitality
                handleMajorStepper={handleMajorStepper}
                handleCategoryStepper={handleCategoryStepper}
              />
              <CoursesTrades
                handleMajorStepper={handleMajorStepper}
                handleCategoryStepper={handleCategoryStepper}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="py-12 flex items-center justify-center">
          <Popup />
        </div>
        <div className="block w-full pb-14">
          <Image src={image} alt={"uptogo banner"} layout="responsive" />
        </div>
        <CustomerReview reviews={reviews} />
        <div className="w-full block">
          <Image src={banner1} alt="uptogo banner" layout="responsive" />
        </div>
        <UserInterestedForm
          handleClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      {/* <CourseCard
        course={"Yoga"}
        description={"Learn Yoga in London with the professionals"}
        category={"Yoa"}
      /> */}
    </>
  );
}

const WhyUptogo = () => {
  return (
    <div className="overflow-hidden relative p-6 bg-body md:p-0 max-w-[678px] md:max-w-[900px] mx-auto container">
      <div className="flex items-center justify-center flex-col md:grid md:grid-cols-2">
        <div className="md:grid-cols-1 md:py-12 px-2">
          <h2 className="pb-8  text-3xl logoFont text-orange md:text-5xl lg:text-5xl">
            Lý Do Lựa Chọn Uptogo?
          </h2>
          <p className="text-xl text-gray-600 md:grid-cols-1">
            Tư vấn hàng đầu Việt Nam, thành lập bởi chuyên gia có kinh nghiệm
            hơn 12 năm trong nghề.
            <br></br>
            <br></br>
            Không chỉ dừng lại ở kinh nghiệm tư vấn, đội ngũ tư vấn viên là
            những người đã từng học tập, sinh sống và làm việc tại nhiều nơi
            trên Thế Giới như: Úc, Canada, Thụy Sỹ...
            <br></br>
            <br></br>
            Cung cấp các dịch vụ từ vấn nghề và du học (Canada, Úc, Mỹ, New
            Zealand Thụy Sĩ, Anh)
          </p>
        </div>
        <div className="relative w-full mt-14 md:mt-0">
          <Image
            src={graduationWeb}
            alt="graduation picture"
            layout="responsive"
          />
        </div>
      </div>
      <span className="md:hidden absolute -z-10 rounded-full w-96 h-40 rotate-45 top-48 transform -translate-x-2/3 bg-orange/10" />
      <span className="absolute -z-10 rounded-full w-96 h-40 md:hidden rotate-45 top-36 transform translate-x-2/3 bg-orange/10" />
    </div>
  );
};
