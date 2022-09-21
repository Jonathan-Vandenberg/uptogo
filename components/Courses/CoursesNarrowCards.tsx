import { motion } from "framer-motion";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useAppSelector } from "../../redux-hooks/hooks";

interface CardData {
  cardData: CourseLink[] | null;
}

type CourseLink = {
  course: string;
  link: string;
  courseE: string;
};

export default function CoursesNarrowCards({ cardData }: CardData) {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto divide divide-orange bg-body space-y-4 py-8">
      {cardData?.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.99 }}
        >
          {translate ? (
            <Link href={card.link}>
              <div className="flex items-center justify-between bg-white px-6 text-center text-lg shadow-md text-darkBlue">
                {card.courseE}
                <div className="p-2 py-6 bg-body h-full">
                  <BsChevronRight />
                </div>
              </div>
            </Link>
          ) : (
            <Link href={card.link}>
              <div className="flex items-center justify-between bg-white px-6 text-center text-lg shadow-md text-darkBlue">
                {card.course}
                <div className="p-2 py-6 bg-body h-full">
                  <BsChevronRight />
                </div>
              </div>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
}
