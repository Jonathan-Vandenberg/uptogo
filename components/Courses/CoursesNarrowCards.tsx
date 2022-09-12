import Link from "next/link";
import { BsChevronBarRight, BsChevronRight } from "react-icons/bs";

interface CardData {
  cardData: CourseLink[];
}

type CourseLink = {
  course: string;
  link: string;
};

export default function CoursesNarrowCards({ cardData }: CardData) {
  return (
    <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto divide divide-orange bg-body space-y-4">
      {cardData.map((card, index) => (
        <Link key={index} href={card.link}>
          <div className="flex items-center justify-between bg-white px-6 text-center text-lg shadow-md text-darkBlue hover:scale-105">
            {card.course}
            <div className="p-2 py-6 bg-body h-full">
              <BsChevronRight />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
