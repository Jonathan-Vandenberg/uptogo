import Image from "next/image";
import { useRouter } from "next/router";
import healthIcon from "../../public/courseIcons/healthcare.png";
import managementIcon from "../../public/courseIcons/management.png";
import designIcon from "../../public/courseIcons/web-design.png";
import hospitalityIcon from "../../public/courseIcons/hospitality.png";
import tradeIcon from "../../public/courseIcons/competence.png";
import itIcon from "../../public/courseIcons/computer.png";
import { useAppSelector } from "../../redux-hooks/hooks";

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 xl:grid-cols-6">
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/information-technology")}
      >
        <div className="w-60 h-full items-center flex justify-center">
          <Image src={itIcon} alt="IT image" width={60} height={60} priority />
        </div>
        <div className="text-lg text-gray-700 w-full text-center py-2">
          {translate ? "Information Technology" : "Công nghệ thông tin"}
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/management")}
      >
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
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/design")}
      >
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
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/health")}
      >
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
        <div className="text-lg text-gray-700 w-full text-center py-2">
          {translate ? "Trades & Sports" : "Thương mại & Thể thao"}
        </div>
      </div>
    </div>
  );
}
