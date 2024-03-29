import Image from "next/image";
import Link from "next/link";
import designIcon from "../../public/courseIcons/designIcons/designMain.png";
import healthIcon from "../../public/courseIcons/healthIcons/healthMain.png";
import eventIcon from "../../public/courseIcons/hospitalityIcons/events.png";
import hospitalityIcon from "../../public/courseIcons/hospitalityIcons/hospitality (1).png";
import itIcon from "../../public/courseIcons/ITIcons/ITMain.png";
import managementIcon from "../../public/courseIcons/managementIcons/management (1).png";
import tradeIcon from "../../public/courseIcons/tradesIcons/tradesMain.png";
import landmarks from "../../public/heroImages/heroTravel.jpg";
import newsIcon from "../../public/newspaper (1).png";
import { useAppSelector } from "../../redux-hooks/hooks";

import BWtradeIcon from "../../public/courseIcons/BWIcons/coursesMainBWicons/competence (1).png";
import BWitIcon from "../../public/courseIcons/BWIcons/coursesMainBWicons/computer (1).png";
import BWeventIcon from "../../public/courseIcons/BWIcons/coursesMainBWicons/event (1).png";
import BWhealthIcon from "../../public/courseIcons/BWIcons/coursesMainBWicons/healthcare (1).png";
import BWnewsIcon from "../../public/courseIcons/BWIcons/coursesMainBWicons/newspaper (2).png";
import BWhospitalityIcon from "../../public/courseIcons/BWIcons/coursesMainBWicons/pin.png";
import BWmanagementIcon from "../../public/courseIcons/BWIcons/coursesMainBWicons/team-management.png";
import BWdesignIcon from "../../public/courseIcons/BWIcons/coursesMainBWicons/web-design (1).png";
import ColorLangBtn from "../UI/ColorLangBtn";

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  const color = useAppSelector((state) => state.iconState.color);
  const style = color
    ? "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen bg-gradient-to-b from-sky-200 via-white to-white z-30"
    : "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10 bg-bgUrl";
  return (
    <div className={style}>
      <span className="absolute left-0  top-0 w-screen h-screen" />
      <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-2 mt-20 w-screen h-auto">
        <div className="pb-4">
          <Link href={"/events"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              {color ? (
                <div className="p-2 rounded-lg z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={eventIcon}
                    alt="Events image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              ) : (
                <div className="z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={BWeventIcon}
                    alt="Events image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
              <div className="z-10 text-black w-full text-center px-6 py-1 leading-5">
                {translate ? "Uptogo Events" : "Sự Kiện Uptogo"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/blogs"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              {color ? (
                <div className="p-2 rounded-lg z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={newsIcon}
                    alt="News Image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              ) : (
                <div className="z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={BWnewsIcon}
                    alt="News Image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
              <div className="z-10 text-black w-full text-center px-6 py-1 leading-5">
                {translate ? "News" : "Tin Tức"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/information-technology"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              {color ? (
                <div className="p-2 rounded-lg z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={itIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              ) : (
                <div className="z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={BWitIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
              <div className="z-10 text-black w-full text-center px-6 py-1 leading-5">
                {translate ? "Information Technology" : "Công nghệ thông tin"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/management"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              {color ? (
                <div className="p-2 rounded-lg z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={managementIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              ) : (
                <div className="z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={BWmanagementIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
              <div className="z-10 text-black w-full text-center px-6 py-1">
                {translate ? "Management" : "Quản lý"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/design"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              {color ? (
                <div className="p-2 rounded-lg z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={designIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              ) : (
                <div className="z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={BWdesignIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
              <div className="z-10 text-black w-full text-center px-6 py-1">
                {translate ? "Design" : "Thiết kế"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/health"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              {color ? (
                <div className="p-2 rounded-lg z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={healthIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              ) : (
                <div className="z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={BWhealthIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
              <div className="z-10 text-black w-full text-center px-6 py-1">
                {translate ? "Health" : "Sức khỏe"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/hospitality"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              {color ? (
                <div className="p-2 rounded-lg z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={hospitalityIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              ) : (
                <div className="z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={BWhospitalityIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
              <div className="z-10 leading-5  text-black w-full text-center px-6 py-1">
                {translate ? "Hospitality" : "Nhà hàng khách sạn"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/trades"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              {color ? (
                <div className="p-2 rounded-lg z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={tradeIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              ) : (
                <div className="z-10 h-full items-center flex justify-center w-auto">
                  <Image
                    src={BWtradeIcon}
                    alt="IT image"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
              <div className="z-10 text-black w-full text-center px-6 py-1 leading-5">
                {translate ? "Trades & Sports" : "Thương mại & Thể thao"}
              </div>
            </div>
          </Link>
        </div>
      </div>
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
