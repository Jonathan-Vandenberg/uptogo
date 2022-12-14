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

const App = ({ handleCategoryStepper, handleMajorStepper }: IStepper) => {
  return (
    <div className="divide-y-2 divide-sky-900 border-b-2 border-t-2 border-blue">
      <Courses
        handleCategoryStepper={handleCategoryStepper}
        handleMajorStepper={handleMajorStepper}
      />
    </div>
  );
};

export default App;

export const Courses = ({
  handleCategoryStepper,
  handleMajorStepper,
}: IStepper) => {
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
        <CoursesIT
          handleCategoryStepper={handleCategoryStepper}
          handleMajorStepper={handleMajorStepper}
        />
        <CoursesHealth
          handleCategoryStepper={handleCategoryStepper}
          handleMajorStepper={handleMajorStepper}
        />
        <CoursesManagement
          handleCategoryStepper={handleCategoryStepper}
          handleMajorStepper={handleMajorStepper}
        />
        <CoursesDesign
          handleCategoryStepper={handleCategoryStepper}
          handleMajorStepper={handleMajorStepper}
        />
        <CoursesHospitality
          handleCategoryStepper={handleCategoryStepper}
          handleMajorStepper={handleMajorStepper}
        />
        <CoursesTrades
          handleCategoryStepper={handleCategoryStepper}
          handleMajorStepper={handleMajorStepper}
        />
      </div>
    </Collapsible>
  );
};

interface IStepper {
  handleCategoryStepper: () => void;
  handleMajorStepper: () => void;
}

export const CoursesIT = ({
  handleCategoryStepper,
  handleMajorStepper,
}: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);

  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          className="flex items-center justify-between px-6 bg-sky-100  text-white"
          onClick={handleCategoryStepper}
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
      <div className="divide-y divide-gray-300" onClick={handleMajorStepper}>
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

export const CoursesHealth = ({
  handleCategoryStepper,
  handleMajorStepper,
}: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleCategoryStepper}
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

export const CoursesManagement = ({
  handleCategoryStepper,
  handleMajorStepper,
}: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleCategoryStepper}
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
      <div className="divide-y divide-gray-300" onClick={handleMajorStepper}>
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

export const CoursesDesign = ({
  handleCategoryStepper,
  handleMajorStepper,
}: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleCategoryStepper}
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
      <div className="divide-y divide-gray-300" onClick={handleMajorStepper}>
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

export const CoursesHospitality = ({
  handleCategoryStepper,
  handleMajorStepper,
}: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleCategoryStepper}
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
      <div className="divide-y divide-gray-300" onClick={handleMajorStepper}>
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

export const CoursesTrades = ({
  handleCategoryStepper,
  handleMajorStepper,
}: IStepper) => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div
          onClick={handleCategoryStepper}
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
      <div className="divide-y divide-gray-300" onClick={handleMajorStepper}>
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
