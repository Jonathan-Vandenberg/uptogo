import Link from "next/link";
import Image from "next/image";
import it from "../../public/courseMain/it/Data_Management.jpeg";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 xl:grid-cols-6">
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/information-technology")}
      >
        <div className="w-full h-full relative">
          <Image
            src={it}
            alt="IT image"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            priority
          />
        </div>
        <div className="text-lg text-gray-700 bg-sky-100 w-full text-center py-2">
          Công nghệ thông tin
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/management")}
      >
        <div className="w-full h-full relative">
          <Image
            src={it}
            alt="management image"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            priority
          />
        </div>
        <div className="text-lg text-gray-700 bg-sky-100 w-full text-center py-2">
          Quản lý
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/design")}
      >
        <div className="w-full h-full relative">
          <Image
            src={it}
            alt="design image"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            priority
          />
        </div>
        <div className="text-lg text-gray-700 bg-sky-100 w-full text-center py-2">
          Thiết kế
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/health")}
      >
        <div className="w-full h-full relative">
          <Image
            src={it}
            alt="health image"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            priority
          />
        </div>
        <div className="text-lg text-gray-700 bg-sky-100 w-full text-center py-2">
          Sức khỏe
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/hospitality")}
      >
        <div className="w-full h-full relative">
          <Image
            src={it}
            alt="hospitality image"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            priority
          />
        </div>
        <div className="text-lg text-gray-700 bg-sky-100 w-full text-center py-2">
          Nhà hàng khách sạn
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/trades")}
      >
        <div className="w-full h-full relative">
          <Image
            src={it}
            alt="trades image"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            priority
          />
        </div>
        <div className="text-lg text-gray-700 bg-sky-100 w-full text-center py-2">
          Thương mại & Thể thao
        </div>
      </div>
    </div>
  );
}
