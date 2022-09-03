import Image from "next/image";
import image from "../../public/heroImages/biawweb.jpeg";
import Divider from "../../components/UI/Divider";
import TopDivider from "../UI/TopDivider";

export default function App() {
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
      <TopDivider color="blue" />
      <div className="px-10 container mx-auto">
        <h2>Lý Do Lựa Chọn Uptogo?</h2>
        <p className="py-4 text-xl">
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
