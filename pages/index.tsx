import Image from "next/image";
import Hero from "../components/HomePage/Hero";
import HomeMain from "../components/HomePage/HomeMain";
import CustomerReview from "../components/UI/CustomerReview";
import Popup from "../components/UI/Popup";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";
import banner1 from "../public/heroImages/biawweb.jpeg";

const customer = [
  {
    name: "Thanh Nguyệt",
    review:
      "Dịch vụ ở Uptogo trên cả tuyệt vời nhé. Em cảm ơn Uptogo đã giúp em thực hiện được ước mơ đi du học. Em cảm ơn các anh chị đã giúp em, dù hồ sơ của e có rất nhiều vấn đề nhưng các chị vẫn hoàn thành được hồ sơ rất nhanh chóng để em đi du học đúng với dự định và kế hoạch.",
    image: "https://picsum.photos/id/36/32/32",
  },
  {
    name: "Hải Sơn",
    review:
      "Mình rất ấn tượng với cách thức làm việc chuyên nghiệp của Uptogo. Các bạn đã hỗ trợ tích cực, tận tình từ  chọn trường, chọn ngành, visa, chuyển tiền và các thủ tục đi du học Úc. Cảm ơn Uptogo.",
    image: "https://picsum.photos/id/89/32/32",
  },
  {
    name: "Thanh Triều",
    review:
      "Cảm ơn Uptogo đã hỗ trợ rất nhiều tình trong quá trình apply và xin visa ạ. Mình đánh giá Uptogo là nơi uy tín để thực hiện các kế hoạch đi du học ạ.",
    image: "https://picsum.photos/id/87/32/32",
  },
];

export default function App() {
  return (
    <>
      <div className="md:px-10 p-4 md:py-10 md:p-0 md:mb-6 bg-white">
        <Hero />
      </div>
      <HomeMain />
      <div className="container mx-auto">
        <div className="py-12 flex items-center justify-center">
          <Popup />
        </div>
        <div className="block w-full pb-14">
          <Image src={image} alt={"uptogo banner"} layout="responsive" />
        </div>
        <CustomerReview customer={customer} />
        <div className="w-full block">
          <Image src={banner1} alt="uptogo banner" layout="responsive" />
        </div>
      </div>
    </>
  );
}
