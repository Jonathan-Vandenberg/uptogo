import Link from "next/link";
import { useAppSelector } from "../redux-hooks/hooks";
import Image from "next/image";

import automotive from "../public/courseIcons/tradesIcons/car.png";
import beauty from "../public/courseIcons/tradesIcons/makeover.png";
import construction from "../public/courseIcons/tradesIcons/building.png";
import carpentry from "../public/courseIcons/tradesIcons/toolbox.png";
import education from "../public/courseIcons/tradesIcons/mortarboard.png";
import fitness from "../public/courseIcons/tradesIcons/dumbbell.png";
import hairdressing from "../public/courseIcons/tradesIcons/hairdresser.png";
import horticulture from "../public/courseIcons/tradesIcons/horticulture.png";
import sportDevelopment from "../public/courseIcons/tradesIcons/sports.png";
import yoga from "../public/courseIcons/tradesIcons/meditation.png";

import landmarks from "../public/heroImages/heroTravel.jpg";

export const tradeLinks = [
  {
    courseE: "Automotive",
    course: "Máy móc",
    link: "/courses/trades/automotive",
    icon: automotive,
  },
  {
    courseE: "Beauty",
    course: "Làm đẹp",
    link: "/courses/trades/beauty",
    icon: beauty,
  },
  {
    courseE: "Construction",
    course: "Công trình xây dựng",
    link: "/courses/trades/construction",
    icon: construction,
  },
  {
    courseE: "Carpentry",
    course: "Mộc",
    link: "/courses/trades/carpentry",
    icon: carpentry,
  },
  {
    courseE: "Education",
    course: "Giáo dục",
    link: "/courses/trades/education",
    icon: education,
  },
  {
    courseE: "Fitness",
    course: "Thể thao",
    link: "/courses/trades/fitness",
    icon: fitness,
  },
  {
    courseE: "Hairdressing",
    course: "Làm tóc",
    link: "/courses/trades/hairdressing",
    icon: hairdressing,
  },
  {
    courseE: "Horticulture",
    course: "Làm vườn",
    link: "/courses/trades/horticulture",
    icon: horticulture,
  },
  {
    courseE: "Sport Development",
    course: "Giáo dục thể chất",
    link: "/courses/trades/sport-development",
    icon: sportDevelopment,
  },
  {
    courseE: "Yoga",
    course: "Yoga",
    link: "/courses/trades/yoga",
    icon: yoga,
  },
];

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-30  bg-gradient-to-b from-sky-200 via-white to-white">
      <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 ">
        {tradeLinks.map((item, i) => (
          <div key={i} className="pb-3 z-10">
            <Link href={item.link}>
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <div className="w-auto h-full items-center flex justify-center p-2 rounded-lg bg-white shadow-md mb-1">
                  <Image
                    src={item.icon}
                    alt="IT image"
                    width={40}
                    height={40}
                    priority
                  />
                </div>
                <div className="text-sm text-gray-700 w-full text-center px-6 py-1 leading-4">
                  {translate ? item.courseE : item.course}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="fixed bottom-12 left-0 w-screen">
        <Image
          src={landmarks}
          alt="landmarks decorational"
          layout="responsive"
          priority
        />
      </div>
      <span className="fixed bottom-0 left-0 w-screen h-12 bg-orange md:hidden" />
    </div>
  );
}
