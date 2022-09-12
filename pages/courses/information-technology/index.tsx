import Link from "next/link";
import { BsChevronBarRight } from "react-icons/bs";
import CoursesNarrowCards from "../../../components/Courses/CoursesNarrowCards";
import ItMain from "../../../components/It/ItMain";
import { useItQuery } from "../../../types";

const cardData = [
  {
    course: "Software Development",
    link: "/courses/information-technology/software-development",
  },
  {
    course: "Blockchain Technology",
    link: "/courses/information-technology/blockchain-technology",
  },
  {
    course: "Data Management",
    link: "/courses/information-technology/data-management",
  },
  {
    course: "Machine Learning",
    link: "/courses/information-technology/machine-learning",
  },
  {
    course: "Website Development",
    link: "/courses/information-technology/web-development",
  },
  {
    course: "Game Programming",
    link: "/courses/information-technology/game-programming",
  },
  {
    course: "Telecommunication",
    link: "/courses/information-technology/telecommunication",
  },
  {
    course: "Business Analysis",
    link: "/courses/information-technology/business-analysis",
  },
  {
    course: "Cloud Computing",
    link: "/courses/information-technology/cloud-computing",
  },
  {
    course: "Computer Networking",
    link: "/courses/information-technology/computer-networking",
  },
  {
    course: "A.I.",
    link: "/courses/information-technology/artificial-intelligence",
  },
];

export default function App() {
  const { data } = useItQuery({
    variables: {
      id: "631acd8b8172747ab931f29e",
    },
  });
  return (
    <div className="max-w-[678px] md:max-w-[900px] mx-auto">
      <h1 className="bg-body p-6 text-2xl logoFont text-darkBlue pb-8">
        Information-Technology
      </h1>
      <CoursesNarrowCards cardData={cardData} />
    </div>
  );
}

// •	Phát triển phần mền – Software Development
// •	Mạng máy tính – Compute Networking
// •	Điện toán đám mây – Cloud Computing
// •	Phân tích kinh doanh – Business Analysis
// •	Viễn thông – Telecommunication
// •	Lập trình trò chơi - Game Programming
// •	Phát triển Website – Website Development
// •	Phương tiện máy móc – Machine Learing
// •	Quản lý dữ liệu – Data Management
// •	Công nghệ tiền ảo – Blockchain Technology
// •	Trí tuệ nhân tạo - Artificial Intelligence (AI)
