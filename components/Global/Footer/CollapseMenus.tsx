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
        <p className="cursor-pointer pl-6 p-4 hover:bg-lightBlue">
          Step 1: Choose Your Course
        </p>
        <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue">
          step 2: Speak with our Consultants
        </p>
        <p className="cursor-pointer pl-6 p-4 hover:bg-lightBlue">
          Step 3: Prepare for Visa Application
        </p>
        <p className="cursor-pointer p-4 pl-6 hover:bg-lightBlue">
          Step 4: Study Abroad!
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4">Courses</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <Collapsible
          transitionTime={200}
          trigger={
            <div className="flex items-center justify-between px-6 bg-blue text-white">
              <p className="p-2 ml-2 text-gray-100">Information Technology</p>
              <div className="pr-4">
                <FaAngleRight fontSize={20} />
              </div>
            </div>
          }
        >
          <p className="pl-12 cursor-pointer p-2  hover:bg-lightBlue">
            Computer Science
          </p>
          <p className="cursor-pointer p-2 pl-12 hover:bg-lightBlue">
            Web Development
          </p>
        </Collapsible>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between bg-darkBlue text-gray-100">
            <p className="p-4">Secured Loans</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">
          Car Loan
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Home Loan
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Partners with VPBank
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="p-4">Savings Account</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">
          regular Savings
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Easy Savings
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="p-4">Other Products</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">Saving</p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Current Account
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Internet Banking
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          AIA Insurance
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="p-4">Things you should know</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">
          Promotions
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Documents and Fees
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">FAQs</p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Tools and Utilities
        </p>
      </Collapsible>
    </div>
  );
};

export default App;
