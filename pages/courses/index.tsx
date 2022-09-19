import Image from "next/image";
import { useRouter } from "next/router";
import healthIcon from "../../public/courseIcons/healthcare.png";
import managementIcon from "../../public/courseIcons/management.png";
import designIcon from "../../public/courseIcons/web-design.png";
import hospitalityIcon from "../../public/courseIcons/hospitality.png";
import tradeIcon from "../../public/courseIcons/competence.png";
import itIcon from "../../public/courseIcons/computer.png";
import { useAppSelector } from "../../redux-hooks/hooks";
import Link from "next/link";

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white z-30">
      <div className="grid grid-cols-2 mt-20 w-screen h-auto z-40 bg-white">
        <div>
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
              <div className="text-lg text-gray-700 w-full text-center py-2 leading-5">
                {translate ? "Information Technology" : "Công nghệ thông tin"}
              </div>
            </div>
          </Link>
        </div>
        <div>
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
              <div className="text-lg text-gray-700 w-full text-center py-2">
                {translate ? "Management" : "Quản lý"}
              </div>
            </div>
          </Link>
        </div>
        <div>
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
              <div className="text-lg text-gray-700 w-full text-center py-2">
                {translate ? "Design" : "Thiết kế"}
              </div>
            </div>
          </Link>
        </div>
        <div>
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
              <div className="text-lg text-gray-700 w-full text-center py-2">
                {translate ? "Health" : "Sức khỏe"}
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/courses/hospitality"}>
            <div
              className="flex items-center justify-center flex-col cursor-pointer"
              onClick={() => router.push("/courses/hospitality")}
            >
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={hospitalityIcon}
                  alt="IT image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center py-2">
                {translate ? "Hospitality" : "Nhà hàng khách sạn"}
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/courses/trades"}>
            <div
              className="flex items-center justify-center flex-col cursor-pointer"
              onClick={() => router.push("/courses/trades")}
            >
              <div className="w-60 h-full items-center flex justify-center">
                <Image
                  src={tradeIcon}
                  alt="IT image"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="text-lg text-gray-700 w-full text-center py-2 leading-5">
                {translate ? "Trades & Sports" : "Thương mại & Thể thao"}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
