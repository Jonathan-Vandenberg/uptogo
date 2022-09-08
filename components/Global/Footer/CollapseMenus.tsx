import React from "react";
import Collapsible from "react-collapsible";
import { FaAngleRight } from "react-icons/fa";

const App = ({ handleStepper }: IStepper) => {
  return (
    <div className="divide-y-2 divide-blue border-b-2 border-t-2 border-blue">
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4 text-blue text-lg">Application Process</p>
            <div className="pr-4">
              <FaAngleRight color={"white"} fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-gray-300">
          <p className="cursor-pointer pl-6 p-4 hover:bg-lightBlue border-t-2 border-gray-200 text-lg">
            Step 1: Choose Your Course
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue text-lg">
            step 2: Speak with our Consultants
          </p>
          <p className="cursor-pointer pl-6 p-4 hover:bg-lightBlue text-lg">
            Step 3: Prepare for Visa Application
          </p>
          <p className="text-lg cursor-pointer p-4 pl-6 hover:bg-lightBlue border-b-2 border-blue">
            Step 4: Study Abroad!
          </p>
        </div>
      </Collapsible>

      <Courses handleStepper={handleStepper} />

      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4 text-blue text-lg">Visa Application</p>
            <div className="pr-4">
              <FaAngleRight color={"white"} fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-gray-300">
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue text-lg">
            Visa Requirements
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue text-lg">
            Something Else
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue border-b-2 border-blue text-lg">
            Another thing
          </p>
        </div>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4 text-blue text-lg">Things you should know</p>
            <div className="pr-4">
              <FaAngleRight color={"white"} fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-gray-300">
          <p className="text-lg cursor-pointer p-4 pl-6 hover:bg-lightBlue">
            Promotions
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue text-lg">
            Documents and Fees
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue text-lg">
            FAQs
          </p>
          <p className="text-lg cursor-pointer p-4 pl-6 hover:bg-lightBlue">
            Tools and Utilities
          </p>
        </div>
      </Collapsible>
    </div>
  );
};

export default App;

export const Courses = ({ handleStepper }: IStepper) => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div className="flex  items-center justify-between bg-darkBlue text-gray-100">
          <p className="p-4 text-blue text-lg">Ngành Học</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} color={"white"} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-white">
        <CoursesIT handleStepper={handleStepper} />
        <CoursesHealth handleStepper={handleStepper} />
        <CoursesManagement handleStepper={handleStepper} />
        <CoursesDesign handleStepper={handleStepper} />
        <CoursesHospitality handleStepper={handleStepper} />
        <CoursesTrades handleStepper={handleStepper} />
      </div>
    </Collapsible>
  );
};

interface IStepper {
  handleStepper: () => void;
}

export const CoursesIT = ({ handleStepper }: IStepper) => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          className="flex items-center justify-between px-6 bg-orange  text-white"
          onClick={handleStepper}
        >
          <p className="p-4 ml-2 text-white  text-lg">Công nghệ thông tin</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
          Phát triển phần mền – Software Development
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Mạng máy tính – Compute Networking
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Điện toán đám mây – Cloud Computing
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Phân tích kinh doanh – Business Analysis
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Viễn thông – Telecommunication
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Lập trình trò chơi - Game Programming
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Phát triển Website – Website Development
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Phương tiện máy móc – Machine Learing
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Quản lý dữ liệu – Data Management
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Công nghệ tiền ảo – Blockchain Technology
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Trí tuệ nhân tạo - Artificial Intelligence (AI)
        </p>
      </div>
    </Collapsible>
  );
};

export const CoursesHealth = ({ handleStepper }: IStepper) => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-orange text-white"
        >
          <p className="p-4 ml-2 text-white text-lg">Sức khỏe - Health</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
          Chăm sóc người già – Aged Care
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Dinh dưỡng – Nutrition
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Y tá – Nursing
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Thú ý – Veterinary
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Dược sĩ – Medicine{" "}
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Sức khỏe cộng đồng – Public health
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Nha khoa – Dental{" "}
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">Massage</p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Tâm lý học – Mental Health
        </p>
      </div>
    </Collapsible>
  );
};

export const CoursesManagement = ({ handleStepper }: IStepper) => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-orange text-gray-100"
        >
          <p className="p-4 ml-2 text-white text-lg">Quản lý - Management</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
          Quản lý dự án – Project Management
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Quản trị kinh doanh – Business Management
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Quản lý nhân sự - Human Resources
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Ngân hàng – Banking Management
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Kinh doanh quốc tế - International Business
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Truyền thông xã hội & Tiếp thị - Social Media & Marketing
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Quản lý nông nghiệp – Agribusiness Management
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Quản lý chuỗi cung ứng – Supply chain Management
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Lãnh đạo & Quản lý – Leadership & Management
        </p>
      </div>
    </Collapsible>
  );
};

export const CoursesDesign = ({ handleStepper }: IStepper) => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-orange text-white"
        >
          <p className="p-4 ml-2 text-white text-lg">Thiết kế - Design</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
          Thiết kế thời trang – Fashion Design
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Kiến trúc môi trường – Landscape
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Âm nhạc & Âm thanh – Music & Audio
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Phim & Truyền thông – Film & Media
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Thiết kế đồ họa – Graphic Design
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Thiết kế nội thất – Interior Design
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Truyền thông kỹ thuật số - Digital Media
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Diễn viên – Acting
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Hoạt hình & 3D – Animation 3D
        </p>
      </div>
    </Collapsible>
  );
};

export const CoursesHospitality = ({ handleStepper }: IStepper) => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-orange text-white"
        >
          <p className="p-4 ml-2 text-white text-lg">
            Nhà hàng khách sạn – Hospitality
          </p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
          Bếp bánh – Patisserie & Baking
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Bếp – Commercial Cookery
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Du lịch lữ hành – Travel & Tourism
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Events – Sự kiện
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Quản lý khách sạn quốc tế - International Hotel Management
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Quản lý nhà hàng khách sạn – Hospitality Management
        </p>
      </div>
    </Collapsible>
  );
};

export const CoursesTrades = ({ handleStepper }: IStepper) => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-orange text-white"
        >
          <p className="p-4 ml-2 text-white text-lg">Thương mại & Thể thao</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
          Máy móc – Automotive
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Làm đẹp – Beauty
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Công trình xây dựng – Building & Construction
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Mộc – Carpentry
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Giáo dục – Education
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Thể thao – Fitness
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Làm tóc – Hairdressing
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Làm vườn – Horticulture
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Giáo dục thể chất – Sport Development
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Yoga
        </p>
      </div>
    </Collapsible>
  );
};
