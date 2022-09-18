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
import { useAppSelector } from "../../../redux-hooks/hooks";

const App = ({ handleStepper }: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="divide-y-2 divide-sky-900 border-b-2 border-t-2 border-blue">
      <Courses handleStepper={handleStepper} />

      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4 text-blue text-lg">Visa</p>
            <div className="pr-4">
              <FaAngleRight color={"white"} fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-gray-300">
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue text-lg">
            {translate ? "Visa Application" : "Đơn xin thị thực"}
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
            <p className="p-4 text-blue text-lg">
              {translate ? "Things you should know" : "Tìm hiểu thêm"}
            </p>
            <div className="pr-4">
              <FaAngleRight color={"white"} fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-gray-300">
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue text-lg">
            Something
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue text-lg">
            FAQs
          </p>
        </div>
      </Collapsible>
    </div>
  );
};

export default App;

export const Courses = ({ handleStepper }: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div className="flex  items-center justify-between bg-darkBlue text-gray-100">
          <p className="p-4 text-blue text-lg">
            {translate ? "Majors" : "Ngành Học"}
          </p>
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
  const translate = useAppSelector((state) => state.translationState.translate);

  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          className="flex items-center justify-between px-6 bg-sky-100  text-white"
          onClick={handleStepper}
        >
          <p className="p-4 ml-2 text-gray-700  text-lg">
            {translate ? "Information Technology" : "Công nghệ thông tin"}
          </p>
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
              {translate ? item.courseE : item.course}
            </p>
          </Link>
        ))}
      </div>
    </Collapsible>
  );
};

export const CoursesHealth = ({ handleStepper }: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-sky-100 text-white"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">
            {translate ? "Health" : "Sức khỏe"}
          </p>
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
              {translate ? item.courseE : item.course}
            </p>
          </Link>
        ))}
      </div>
    </Collapsible>
  );
};

export const CoursesManagement = ({ handleStepper }: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-sky-100 text-gray-100"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">
            {translate ? "Management" : "Quản lý"}
          </p>
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
              {translate ? item.courseE : item.course}
            </p>
          </Link>
        ))}
      </div>
    </Collapsible>
  );
};

export const CoursesDesign = ({ handleStepper }: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-sky-100 text-white"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">
            {translate ? "Design" : "Thiết kế"}
          </p>
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
              {translate ? item.courseE : item.course}
            </p>
          </Link>
        ))}
      </div>
    </Collapsible>
  );
};

export const CoursesHospitality = ({ handleStepper }: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-sky-100 text-white"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">
            {translate ? "Hospitality" : "Nhà hàng khách sạn"}
          </p>
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
              {translate ? item.courseE : item.course}
            </p>
          </Link>
        ))}
      </div>
    </Collapsible>
  );
};

export const CoursesTrades = ({ handleStepper }: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleStepper}
          className="flex items-center justify-between px-6 bg-sky-100 text-white"
        >
          <p className="p-4 ml-2 text-gray-700 text-lg">
            {translate ? "Trades & Sport" : "Thương mại & Thể thao"}
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
              {translate ? item.courseE : item.course}
            </p>
          </Link>
        ))}
      </div>
    </Collapsible>
  );
};
