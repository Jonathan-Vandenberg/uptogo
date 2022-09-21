import Image from "next/image";
import Link from "next/link";
import designIcon from "../../public/courseIcons/designIcons/designMain.png";
import healthIcon from "../../public/courseIcons/healthIcons/healthMain.png";
import eventIcon from "../../public/courseIcons/hospitalityIcons/events.png";
import hospitalityIcon from "../../public/courseIcons/hospitalityIcons/hospitality (1).png";
import itIcon from "../../public/courseIcons/ITIcons/ITMain.png";
import managementIcon from "../../public/courseIcons/managementIcons/management (1).png";
import tradeIcon from "../../public/courseIcons/tradesIcons/tradesMain.png";
import newsIcon from "../../public/newspaper (1).png";
import { useAppSelector } from "../../redux-hooks/hooks";
import landmarks from "../../public/heroImages/heroTravel.jpg";

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen bg-gradient-to-b from-sky-200 via-white to-white z-30">
      <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-2 mt-20 w-screen h-auto z-40 bg-">
        <div className="pb-4">
          <Link href={"/courses/information-technology"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="z-10 h-full items-center flex justify-center w-auto rounded-lg shadow-md bg-white p-2">
                <Image
                  src={itIcon}
                  alt="IT image"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="z-10 text-gray-700 w-full text-center px-6 py-1 leading-5">
                {translate ? "Information Technology" : "Công nghệ thông tin"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/courses/management"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="z-10 h-full items-center flex justify-center w-auto rounded-lg shadow-md bg-white p-2">
                <Image
                  src={managementIcon}
                  alt="IT image"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="z-10 text-gray-700 w-full text-center px-6 py-1">
                {translate ? "Management" : "Quản lý"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/design"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="z-10 h-full items-center flex justify-center w-auto rounded-lg shadow-md bg-white p-2">
                <Image
                  src={designIcon}
                  alt="IT image"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="z-10 text-gray-700 w-full text-center px-6 py-1">
                {translate ? "Design" : "Thiết kế"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/courses/health"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="z-10 h-full items-center flex justify-center w-auto rounded-lg shadow-md bg-white p-2">
                <Image
                  src={healthIcon}
                  alt="IT image"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="z-10 text-gray-700 w-full text-center px-6 py-1">
                {translate ? "Health" : "Sức khỏe"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/courses/hospitality"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="z-10 h-full items-center flex justify-center w-auto rounded-lg shadow-md bg-white p-2">
                <Image
                  src={hospitalityIcon}
                  alt="IT image"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="z-10leading-5  text-gray-700 w-full text-center px-6 py-1">
                {translate ? "Hospitality" : "Nhà hàng khách sạn"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/courses/trades"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="z-10 h-full items-center flex justify-center w-auto rounded-lg shadow-md bg-white p-2">
                <Image
                  src={tradeIcon}
                  alt="IT image"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="z-10 text-gray-700 w-full text-center px-6 py-1 leading-5">
                {translate ? "Trades & Sports" : "Thương mại & Thể thao"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/events"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="z-10 h-full items-center flex justify-center w-auto rounded-lg shadow-md bg-white p-2">
                <Image
                  src={eventIcon}
                  alt="Events image"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="z-10 text-gray-700 w-full text-center px-6 py-1 leading-5">
                {translate ? "Events" : "Events-VN"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-4">
          <Link href={"/blogs"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="z-10 h-full items-center flex justify-center w-auto rounded-lg shadow-md bg-white p-2">
                <Image
                  src={newsIcon}
                  alt="News Image"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="z-10 text-gray-700 w-full text-center px-6 py-1 leading-5">
                {translate ? "News" : "News-VN"}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-12 left-0 w-screen">
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
