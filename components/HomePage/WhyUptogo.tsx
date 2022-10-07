import Image, { StaticImageData } from "next/image";

interface IProps {
  whyUptogoImage: StaticImageData;
}

export default function App({ whyUptogoImage }: IProps) {
  return (
    <div className="overflow-hidden md:overflow-visible my-14 relative lg:p-0 lg:my-0 container mx-auto">
      <div className="flex items-center justify-center flex-col space-y-6 lg:grid lg:grid-cols-2 gap-12">
        <div className="md:grid-cols-1 lg:py-12">
          <h2 className="pb-6 text-center lg:text-left text-3xl logoFont text-orange md:text-5xl lg:text-5xl">
            Lý Do Lựa Chọn Uptogo?
          </h2>
          <p className="text-xl text-gray-600 md:grid-cols-1 px-8 lg:px-0">
            Tư vấn hàng đầu Việt Nam, thành lập bởi chuyên gia có kinh nghiệm
            hơn 12 năm trong nghề.
            <br></br>
            <br></br>
            Không chỉ dừng lại ở kinh nghiệm tư vấn, đội ngũ tư vấn viên là
            những người đã từng học tập, sinh sống và làm việc tại nhiều nơi
            trên Thế Giới như: Úc, Canada, Thụy Sỹ...
            <br></br>
            <br></br>
            Cung cấp các dịch vụ từ vấn nghề và du học (Canada, Úc, Mỹ, New
            Zealand Thụy Sĩ, Anh)
          </p>
        </div>
        <div className="block w-96">
          <Image
            src={whyUptogoImage}
            alt="graduation picture"
            layout="responsive"
          />
        </div>
      </div>
      <span className="absolute -z-10 rounded-full w-96 h-40 rotate-45 top-48 transform -translate-x-2/3 bg-orange/10" />
      <span className="absolute -z-10 rounded-full w-96 h-40 rotate-45 md:top-44 top-28 transform translate-x-2/3 bg-orange/10 md:bg-sky-100/50" />
      <span className="absolute -z-10 rounded-full w-96 h-40 -rotate-45 top-72 md:top-44 transform -right-60 md:-right-52 bg-orange/10 hidden lg:block" />
    </div>
  );
}
