import Image from "next/image";
import { useEffect, useState } from "react";
import asianMale from "../../public/it/asianMale.jpg";
import BlogPageHero from "../Blog/BlogPageHero";
import {
  CoursesHealth,
  CoursesDesign,
  CoursesHospitality,
  CoursesIT,
  CoursesManagement,
  CoursesTrades,
} from "../Global/Footer/CollapseMenus";
import BlogHeader from "../Blog/BlogHeader";
import CourseStepper from "./CourseStepper";

export default function App() {
  const [step, setStep] = useState(0);
  const [subject, setSubject] = useState(false);
  const [major, setMajor] = useState(false);

  const handleStepper = () => {
    setSubject(!subject);
  };

  useEffect(() => {
    if (subject) {
      setStep(1);
    } else {
      setStep(0);
    }
    if (major) {
      setStep(2);
    }
  }, [subject, major]);

  return (
    <div className="bg-homeBody">
      <div className="pt-5 text-center">
        <h2 className="logoFont text-3xl md:text-5xl text-gray-700 py-1 md:py-10">
          Ready to Explore?
        </h2>
        <h2 className="logoFont text-xl md:text-5xl text-gray-700 py-1 md:py-10">
          Let&apos;s go step-by-step
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center space-y-12 pt-12 pb-12 px-10 container mx-auto ">
        <CourseStepper step={step} />
        <div className="flex -tems-center-justify-center space-y-1 flex-col">
          <CoursesIT handleStepper={handleStepper} />
          <CoursesHealth handleStepper={handleStepper} />
          <CoursesManagement handleStepper={handleStepper} />
          <CoursesDesign handleStepper={handleStepper} />
          <CoursesHospitality handleStepper={handleStepper} />
          <CoursesTrades handleStepper={handleStepper} />
        </div>
        <h2 className="text-3xl logoFont text-gray-700 md:text-5xl lg:text-6xl">
          Lý Do Lựa Chọn Uptogo?
        </h2>
        <p className="text-xl text-gray-600">
          Tư vấn hàng đầu Việt Nam, thành lập bởi chuyên gia có kinh nghiệm hơn
          12 năm trong nghề.
          <br></br>
          <br></br>
          Không chỉ dừng lại ở kinh nghiệm tư vấn, đội ngũ tư vấn viên là những
          người đã từng học tập, sinh sống và làm việc tại nhiều nơi trên Thế
          Giới như: Úc, Canada, Thụy Sỹ...
          <br></br>
          <br></br>
          Cung cấp các dịch vụ từ vấn nghề và du học (Canada, Úc, Mỹ, New
          Zealand Thụy Sĩ, Anh)
        </p>
      </div>

      <BlogPageHero />
    </div>
  );
}
