import Link from "next/link";
import React from "react";
import Collapsible from "react-collapsible";
import { FaAngleRight } from "react-icons/fa";
import {
  designLinks,
  healthLinks,
  managementLinks,
  tradeLinks,
  hospitalityLinks,
  itLinks,
} from "../../../lib/links";

const App = ({ handleStepper }: IStepper) => {
  return (
    <div className="divide-y-2 divide-sky-900 border-b-2 border-t-2 border-blue">
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
          className="flex items-center justify-between px-6 bg-sky-100  text-white"
          onClick={handleStepper}
        >
          <p className="p-4 ml-2 text-gray-700  text-lg">Công nghệ thông tin</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y divide-gray-300">
        {itLinks.map((item, i) => (
          <Link key={i} href={item.link}>
            <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
              {item.course}
            </p>
          </Link>
        ))}
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
          className="flex items-center justify-between px-6 bg-sky-100 text-white"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">Sức khỏe</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y divide-gray-300">
        {healthLinks.map((item, i) => (
          <Link key={i} href={item.link}>
            <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
              {item.course}
            </p>
          </Link>
        ))}
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
          className="flex items-center justify-between px-6 bg-sky-100 text-gray-100"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">Quản lý</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y divide-gray-300">
        {managementLinks.map((item, i) => (
          <Link key={i} href={item.link}>
            <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
              {item.course}
            </p>
          </Link>
        ))}
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
          className="flex items-center justify-between px-6 bg-sky-100 text-white"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">Thiết kế</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y divide-gray-300">
        {designLinks.map((item, i) => (
          <Link key={i} href={item.link}>
            <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
              {item.course}
            </p>
          </Link>
        ))}
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
          className="flex items-center justify-between px-6 bg-sky-100 text-white"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">Nhà hàng khách sạn</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y divide-gray-300">
        {hospitalityLinks.map((item, i) => (
          <Link key={i} href={item.link}>
            <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
              {item.course}
            </p>
          </Link>
        ))}
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
          className="flex items-center justify-between px-6 bg-sky-100 text-white"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">
            Thương mại & Thể thao
          </p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y divide-gray-300">
        {tradeLinks.map((item, i) => (
          <Link key={i} href={item.link}>
            <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
              {item.course}
            </p>
          </Link>
        ))}
      </div>
    </Collapsible>
  );
};
