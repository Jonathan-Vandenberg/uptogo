import Link from "next/link";
import { BsChevronBarRight, BsChevronRight } from "react-icons/bs";

export default function CoursesNarrowCards() {
  return (
    <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto divide divide-orange bg-body space-y-4">
      <Link href={"/courses/information-technology/software-development"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Software Development
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/blockchain-technology"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Blockchain Technology
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/data-management"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Data Management
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/machine-learning"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Machine Learning
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/web-development"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Website Development
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/game-programming"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Game Programming
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/telecommunication"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Telecommunication
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/business-analysis"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Business Analysis
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/cloud-computing"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Cloud Computing
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/computer-networking"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          Computer Networking
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
      <Link href={"/courses/information-technology/artificial-intelligence"}>
        <div className="flex items-center justify-between px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105 hover:border-orange hover:rounded-lg">
          <p>A.I.</p>
          <div className="p-2 py-6 bg-white h-full">
            <BsChevronRight />
          </div>
        </div>
      </Link>
    </div>
  );
}
