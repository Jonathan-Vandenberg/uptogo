import Link from "next/link";
import { useAppSelector } from "../redux-hooks/hooks";
import Image from "next/image";

import baking from "../public/courseIcons/hospitalityIcons/bake.png";
import cookery from "../public/courseIcons/hospitalityIcons/cooking.png";
import hospitalityManagement from "../public/courseIcons/hospitalityIcons/hospitality (1).png";
import hotelManagement from "../public/courseIcons/hospitalityIcons/manager (2).png";
import travelTourism from "../public/courseIcons/hospitalityIcons/travel.png";
import events from "../public/courseIcons/hospitalityIcons/events.png";

import landmarks from "../public/heroImages/heroTravel.jpg";

export const hospitalityLinks = [
  {
    courseE: "Commercial Cooking",
    course: "Bếp",
    link: "/courses/hospitality/commercial-cooking",
    icon: cookery,
  },
  {
    courseE: "Baking",
    course: "Bếp bánh",
    link: "/courses/hospitality/baking",
    icon: baking,
  },
  {
    courseE: "Event Organising",
    course: "Sự kiện",
    link: "/courses/hospitality/events",
    icon: events,
  },
  {
    courseE: "Hospitality Management",
    course: "Quản lý nhà hàng khách sạn",
    link: "/courses/hospitality/hospitality-management",
    icon: hospitalityManagement,
  },
  {
    courseE: "Hotel Management",
    course: "Quản lý khách sạn quốc tế",
    link: "/courses/hospitality/hotel-management",
    icon: hotelManagement,
  },
  {
    courseE: "Travel & Tourism",
    course: "Du lịch lữ hành",
    link: "/courses/hospitality/travel-tourism",
    icon: travelTourism,
  },
];

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-30  bg-gradient-to-b from-sky-200 via-white to-white">
      <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 ">
        {hospitalityLinks.map((item, i) => (
          <div key={i} className="pb-7 z-10">
            <Link href={item.link}>
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <div className="w-auto h-full items-center flex justify-center mb-1">
                  <Image
                    src={item.icon}
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
