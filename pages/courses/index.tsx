import Link from "next/link";
import Image from "next/image";
import it from "../../public/courseMain/it/Data_Management.jpeg";
import { useRouter } from "next/router";
import healthIcon from "../../public/courseIcons/healthcare.png";
import managementIcon from "../../public/courseIcons/management.png";
import designIcon from "../../public/courseIcons/web-design.png";
import hospitalityIcon from "../../public/courseIcons/hospitality.png";
import tradeIcon from "../../public/courseIcons/competence.png";
import itIcon from "../../public/courseIcons/computer.png";

export default function App() {
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
          Công nghệ thông tin
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/management")}
      >
        <div className="w-60 h-full items-center flex justify-center">
          <Image src={itIcon} alt="IT image" width={60} height={60} priority />
        </div>
        <div className="text-lg text-gray-700 w-full text-center py-2">
          Quản lý
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
          Thiết kế
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
          Sức khỏe
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
          Nhà hàng khách sạn
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
          Thương mại & Thể thao
        </div>
      </div>
    </div>
  );
}
