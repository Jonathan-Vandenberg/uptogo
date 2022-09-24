import Link from "next/link";
import { useAppSelector } from "../../redux-hooks/hooks";
import Image from "next/image";

import automotive from "../../public/courseIcons/tradesIcons/car.png";
import beauty from "../../public/courseIcons/tradesIcons/makeover.png";
import construction from "../../public/courseIcons/tradesIcons/building.png";
import carpentry from "../../public/courseIcons/tradesIcons/toolbox.png";
import education from "../../public/courseIcons/tradesIcons/mortarboard.png";
import fitness from "../../public/courseIcons/tradesIcons/dumbbell.png";
import hairdressing from "../../public/courseIcons/tradesIcons/hairdresser.png";
import horticulture from "../../public/courseIcons/tradesIcons/horticulture.png";
import sportDevelopment from "../../public/courseIcons/tradesIcons/sports.png";
import yoga from "../../public/courseIcons/tradesIcons/meditation.png";

import BWautomotive from "../../public/courseIcons/BWIcons/tradesBWicons/car-parts.png";
import BWbeauty from "../../public/courseIcons/BWIcons/tradesBWicons/makeover.png";
import BWconstruction from "../../public/courseIcons/BWIcons/tradesBWicons/hook.png";
import BWcarpentry from "../../public/courseIcons/BWIcons/managementBWicons/icons8-carpentry-85.png";
import BWeducation from "../../public/courseIcons/BWIcons/tradesBWicons/graduation-cap.png";
import BWfitness from "../../public/courseIcons/BWIcons/tradesBWicons/dumbbell.png";
import BWhairdressing from "../../public/courseIcons/BWIcons/tradesBWicons/salon.png";
import BWhorticulture from "../../public/courseIcons/BWIcons/tradesBWicons/horticulture.png";
import BWsportDevelopment from "../../public/courseIcons/BWIcons/tradesBWicons/rating.png";
import BWyoga from "../../public/courseIcons/BWIcons/tradesBWicons/yoga.png";

import landmarks from "../../public/heroImages/heroTravel.jpg";
import ColorLangBtn from "../../components/UI/ColorLangBtn";

export const tradeLinks = [
  {
    courseE: "Automotive",
    course: "Máy móc",
    link: "/courses/trades/automotive",
    icon: automotive,
    BWicon: BWautomotive,
  },
  {
    courseE: "Beauty",
    course: "Làm đẹp",
    link: "/courses/trades/beauty",
    icon: beauty,
    BWicon: BWbeauty,
  },
  {
    courseE: "Construction",
    course: "Công trình xây dựng",
    link: "/courses/trades/construction",
    icon: construction,
    BWicon: BWconstruction,
  },
  {
    courseE: "Carpentry",
    course: "Mộc",
    link: "/courses/trades/carpentry",
    icon: carpentry,
    BWicon: BWcarpentry,
  },
  {
    courseE: "Education",
    course: "Giáo dục",
    link: "/courses/trades/education",
    icon: education,
    BWicon: BWeducation,
  },
  {
    courseE: "Fitness",
    course: "Thể thao",
    link: "/courses/trades/fitness",
    icon: fitness,
    BWicon: BWfitness,
  },
  {
    courseE: "Hairdressing",
    course: "Làm tóc",
    link: "/courses/trades/hairdressing",
    icon: hairdressing,
    BWicon: BWhairdressing,
  },
  {
    courseE: "Horticulture",
    course: "Làm vườn",
    link: "/courses/trades/horticulture",
    icon: horticulture,
    BWicon: BWhorticulture,
  },
  {
    courseE: "Sport Development",
    course: "Giáo dục thể chất",
    link: "/courses/trades/sport-development",
    icon: sportDevelopment,
    BWicon: BWsportDevelopment,
  },
  {
    courseE: "Yoga",
    course: "Yoga",
    link: "/courses/trades/yoga",
    icon: yoga,
    BWicon: BWyoga,
  },
];

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  const color = useAppSelector((state) => state.iconState.color);
  const style = color
    ? "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10 bg-gradient-to-b from-sky-200 via-white to-white"
    : "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10  bg-bgUrl";
  return (
    <div className={style}>
      {color ? (
        <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 ">
          {tradeLinks.map((item, i) => (
            <div key={i} className="pb-7 z-10">
              <Link href={item.link}>
                <div className="flex items-center justify-center flex-col cursor-pointer">
                  <div className="w-auto h-full items-center flex justify-center mb-1">
                    <Image
                      src={item.icon}
                      alt="Management image"
                      width={60}
                      height={60}
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
      ) : (
        <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 pt-20 w-screen h-auto z-40">
          {tradeLinks.map((item, i) => (
            <div key={i} className="pb-7 z-10">
              <Link href={item.link}>
                <div className="flex items-center justify-center flex-col cursor-pointer">
                  <div className="w-auto h-full items-center flex justify-center mb-1">
                    <Image
                      src={item.BWicon}
                      alt="IT image"
                      width={60}
                      height={60}
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
      )}
      {color && (
        <div className="fixed bottom-12 left-0 w-screen">
          <Image
            src={landmarks}
            alt="landmarks decorational"
            layout="responsive"
            priority
          />
        </div>
      )}
      <ColorLangBtn />
    </div>
  );
}
