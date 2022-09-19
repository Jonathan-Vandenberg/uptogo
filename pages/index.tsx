import Image from "next/image";
import Hero from "../components/HomePage/Hero";
import HomeMain from "../components/HomePage/HomeMain";
import CustomerReview from "../components/UI/CustomerReview";
import Popup from "../components/UI/Popup";
import image from "../public/heroImages/Du-hoc-Sp-jain-01.jpeg";

const customer = [
  {
    name: "Thanh Nguyệt",
    review:
      "Dịch vụ ở Uptogo trên cả tuyệt vời nhé. Em cảm ơn Uptogo đã giúp em thực hiện được ước mơ đi du học. Em cảm ơn các anh chị đã giúp em, dù hồ sơ của e có rất nhiều vấn đề nhưng các chị vẫn hoàn thành được hồ sơ rất nhanh chóng để em đi du học đúng với dự định và kế hoạch.",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "Hải Sơn",
    review:
      "Mình rất ấn tượng với cách thức làm việc chuyên nghiệp của Uptogo. Các bạn đã hỗ trợ tích cực, tận tình từ  chọn trường, chọn ngành, visa, chuyển tiền và các thủ tục đi du học Úc. Cảm ơn Uptogo.",
    image: "https://picsum.photos/32/32",
  },
  {
    name: "Thanh Triều",
    review:
      "Cảm ơn Uptogo đã hỗ trợ rất nhiều tình trong quá trình apply và xin visa ạ. Mình đánh giá Uptogo là nơi uy tín để thực hiện các kế hoạch đi du học ạ.",
    image: "https://picsum.photos/32/32",
  },
];

export default function App() {
  return (
    <>
      <div className="md:px-10 p-4 md:py-10 md:p-0 md:mb-6 bg-white">
        <Hero />
      </div>
      <h2 className="text-red-600 text-3xl text-center bg-red-100 py-5 logoFont">
        web đang xây dựng
      </h2>
      <HomeMain />
      <div className="container mx-auto">
        <div className="py-12 flex items-center justify-center">
          <Popup />
        </div>
        <CustomerReview customer={customer} />
        <div className="block w-full">
          <Image src={image} alt={"Student graduating"} layout="responsive" />
        </div>
      </div>
    </>
  );
}
