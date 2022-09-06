import Image from "next/image";
import { useEffect, useState } from "react";
import asianMale from "../../public/it/asianMale.jpg";
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
      <div className="flex flex-col items-center justify-center space-y-12 pt-12 pb-12 px-10 container mx-auto ">
        <h2 className="logoFont text-4xl md:text-5xl text-gray-700 py-1 md:py-10">
          Let&apos;s go step-by-step
        </h2>
        <CourseStepper step={step} />
        <div className="flex -tems-center-justify-center space-y-1 flex-col">
          <CoursesIT handleStepper={handleStepper} />
          <CoursesHealth handleStepper={handleStepper} />
          <CoursesManagement handleStepper={handleStepper} />
          <CoursesDesign handleStepper={handleStepper} />
          <CoursesHospitality handleStepper={handleStepper} />
          <CoursesTrades handleStepper={handleStepper} />
        </div>
      </div>
      <div className="bg-whote w-full h-60 flex items-center justify-center">
        spacer
      </div>
      <div className="px-10 container mx-auto ">
        <div className="relative">
          <Image
            src={asianMale}
            alt="one"
            width={604}
            height={410}
            className="rounded-tl-2xl"
          />
          <div className="bg-black/50 top-0 left-0 absolute w-full h-full"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 md:text-4xl lg:text-5xl">
          Lý Do Lựa Chọn Uptogo?
        </h2>
        <p className="py-4 text-xl text-gray-600">
          Tư vấn hàng đầu Việt Nam, thành lập bởi chuyên gia có kinh nghiệm hơn
          12 năm trong nghề. Không chỉ dừng lại ở kinh nghiệm tư vấn, đội ngũ tư
          vấn viên là những người đã từng học tập, sinh sống và làm việc tại
          nhiều nơi trên Thế Giới như: Úc, Canada, Thụy Sỹ,… cung cấp các dịch
          vụ từ vấn nghề và du học (Canada, Úc, Mỹ, New Zealand Thụy Sĩ, Anh)
        </p>
      </div>
    </div>
  );
}
