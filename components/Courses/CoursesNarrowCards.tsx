import { motion } from "framer-motion";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

interface CardData {
  cardData: CourseLink[];
}

type CourseLink = {
  course: string;
  link: string;
};

export default function CoursesNarrowCards({ cardData }: CardData) {
  return (
    <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto divide divide-orange bg-body space-y-4 py-8">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.99 }}
        >
          <Link href={card.link}>
            <div className="flex items-center justify-between bg-white px-6 text-center text-lg shadow-md text-darkBlue">
              {card.course}
              <div className="p-2 py-6 bg-body h-full">
                <BsChevronRight />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
