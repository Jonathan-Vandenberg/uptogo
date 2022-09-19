import Image from "next/image";
import { useRouter } from "next/router";
import healthIcon from "../../public/courseIcons/healthcare.png";
import managementIcon from "../../public/courseIcons/management.png";
import designIcon from "../../public/courseIcons/web-design.png";
import hospitalityIcon from "../../public/courseIcons/hospitality.png";
import tradeIcon from "../../public/courseIcons/competence.png";
import itIcon from "../../public/courseIcons/computer.png";
import newsIcon from "../../public/courseIcons/newspaper.png";
import eventIcon from "../../public/courseIcons/event.png";
import { useAppSelector } from "../../redux-hooks/hooks";
import Link from "next/link";

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white z-30">
      <div className="grid grid-cols-2 mt-20 w-screen h-auto z-40 bg-white">
        <div className="pb-6">
          <Link href={"/courses/information-technology"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={itIcon}
                  alt="IT image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center px-6 py-1 leading-5">
                {translate ? "Information Technology" : "Công nghệ thông tin"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-6">
          <Link href={"/courses/management"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={managementIcon}
                  alt="IT image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center px-6 py-1">
                {translate ? "Management" : "Quản lý"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-6">
          <Link href={"/courses/design"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={designIcon}
                  alt="IT image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center px-6 py-1">
                {translate ? "Design" : "Thiết kế"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-6">
          <Link href={"/courses/health"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={healthIcon}
                  alt="IT image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center px-6 py-1">
                {translate ? "Health" : "Sức khỏe"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-6">
          <Link href={"/courses/hospitality"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={hospitalityIcon}
                  alt="IT image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="leading-5 text-lg text-gray-700 w-full text-center px-6 py-1">
                {translate ? "Hospitality" : "Nhà hàng khách sạn"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-6">
          <Link href={"/courses/trades"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={tradeIcon}
                  alt="IT image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center px-6 py-1 leading-5">
                {translate ? "Trades & Sports" : "Thương mại & Thể thao"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-6">
          <Link href={"/events"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={eventIcon}
                  alt="Events image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center px-6 py-1 leading-5">
                {translate ? "Events" : "Events-VN"}
              </div>
            </div>
          </Link>
        </div>
        <div className="pb-6">
          <Link href={"/blogs"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={newsIcon}
                  alt="News Image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center px-6 py-1 leading-5">
                {translate ? "News" : "News-VN"}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <span className="fixed bottom-0 left-0 w-screen h-12 bg-orange" />
    </div>
  );
}
