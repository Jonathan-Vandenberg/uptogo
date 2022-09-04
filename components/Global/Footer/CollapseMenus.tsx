import React from "react";
import Collapsible from "react-collapsible";
import { FaAngleRight } from "react-icons/fa";

const App = () => {
  return (
    <div className="divide-y-2 divide-blue border-b-2 border-blue md:hidden">
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4">Application Process</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-gray-300">
          <p className="cursor-pointer pl-6 p-4 hover:bg-lightBlue">
            Step 1: Choose Your Course
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue">
            step 2: Speak with our Consultants
          </p>
          <p className="cursor-pointer pl-6 p-4 hover:bg-lightBlue">
            Step 3: Prepare for Visa Application
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue border-b-2 border-blue">
            Step 4: Study Abroad!
          </p>
        </div>
      </Collapsible>

      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex  items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4">Courses</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-darkBlue">
          <CoursesIT />
          <CoursesHealth />
          <CoursesManagement />
        </div>
      </Collapsible>

      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4">Visa Application</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-gray-300">
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue">
            Visa Requirements
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue ">
            Something Else
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue border-b-2 border-blue">
            Another thing
          </p>
        </div>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4">Things you should know</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <div className="divide-y-2 divide-gray-300">
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue">
            Promotions
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue">
            Documents and Fees
          </p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue">FAQs</p>
          <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue">
            Tools and Utilities
          </p>
        </div>
      </Collapsible>
    </div>
  );
};

export default App;

const CoursesIT = () => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div className="flex items-center justify-between px-6 bg-blue text-white">
          <p className="p-4 ml-2 text-gray-100">Information Technology</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
          Computer Science
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">
          Web Development
        </p>
      </div>
    </Collapsible>
  );
};

const CoursesHealth = () => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div className="flex items-center justify-between px-6 bg-blue text-white">
          <p className="p-4 ml-2 text-gray-100">Health</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">Nursing</p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">Medicine</p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">Pharma</p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue">Dentistry</p>
      </div>
    </Collapsible>
  );
};

const CoursesManagement = () => {
  return (
    <Collapsible
      transitionTime={200}
      trigger={
        <div className="flex items-center justify-between px-6 bg-blue text-white">
          <p className="p-4 ml-2 text-gray-100">Management</p>
          <div className="pr-4">
            <FaAngleRight fontSize={20} />
          </div>
        </div>
      }
    >
      <div className="divide-y-2 divide-gray-300">
        <p className="pl-12 cursor-pointer p-4  hover:bg-lightBlue">
          Business Management
        </p>
        <p className="cursor-pointer p-4 pl-12 hover:bg-lightBlue border-b-2 border-darkBlue">
          Hotel Management
        </p>
      </div>
    </Collapsible>
  );
};
