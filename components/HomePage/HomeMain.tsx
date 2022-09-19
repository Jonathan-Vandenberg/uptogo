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
      <div className="bg-body">
        <WhyUptogo />
      </div>
      <div className="max-w-[678px] md:max-w-[900px] mx-auto container">
        <div className="bg-body my-6">
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
    </>
  );
}

const WhyUptogo = () => {
  return (
    <div className="p-6 md:p-0 max-w-[678px] md:max-w-[900px] mx-auto container">
      <div className="flex items-center justify-center flex-col md:grid md:grid-cols-2">
        <div className="md:grid-cols-1 md:py-12 px-2">
          <h2 className="pb-12  text-3xl logoFont text-gray-700 md:text-5xl lg:text-5xl">
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
    </div>
  );
};
