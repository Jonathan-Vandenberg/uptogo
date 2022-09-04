import Image from "next/image";
import image from "../../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import InitDivider from "../UI/InitDivider";
import TopDivider from "../UI/TopDivider";
import asianMale from "../../public/it/asianMale.jpg";
import { useBlogPostsQuery } from "../../types";

export default function App() {
  const { data } = useBlogPostsQuery();

  return (
    <div className="bg-homeBody md:-mt-48">
      <div className="mt-0 md:mt-48 hidden md:block">
        <Image
          src={image}
          alt="image"
          width={950}
          height={280}
          layout="responsive"
        />
      </div>
      <div className="md:hidden">
        <InitDivider color="blue" />
      </div>
      <div className="hidden md:block">
        <TopDivider color="blue" />
      </div>
      <div className="px-10 container mx-auto">
        <div className="relative">
          <Image
            src={asianMale}
            alt="one"
            width={604}
            height={410}
            className="rounded-tl-2xl"
          />
          <div className="bg-black/50 top-0 left-0 absolute w-full h-full"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 md:text-4xl lg:text-5xl">
          Lý Do Lựa Chọn Uptogo?
        </h2>
        <p className="py-4 text-xl text-gray-600">
          Tư vấn hàng đầu Việt Nam, thành lập bởi chuyên gia có kinh nghiệm hơn
          12 năm trong nghề. Không chỉ dừng lại ở kinh nghiệm tư vấn, đội ngũ tư
          vấn viên là những người đã từng học tập, sinh sống và làm việc tại
          nhiều nơi trên Thế Giới như: Úc, Canada, Thụy Sỹ,… cung cấp các dịch
          vụ từ vấn nghề và du học (Canada, Úc, Mỹ, New Zealand Thụy Sĩ, Anh)
        </p>
      </div>
    </div>
  );
}
