import Link from "next/link";
import ItMain from "../../../components/It/ItMain";
import { useItQuery } from "../../../types";

export default function App() {
  const { data } = useItQuery({
    variables: {
      id: "631acd8b8172747ab931f29e",
    },
  });
  console.log(data?.it?.id);
  return (
    <div className="divide divide-gray-400">
      <ItMain data={data} />
      <Link href={"/courses/information-technology/software-development"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Software Development
        </div>
      </Link>
      <Link href={"/courses/information-technology/blockchain-technology"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Blockchain Technology
        </div>
      </Link>
      <Link href={"/courses/information-technology/data-management"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Data Management
        </div>
      </Link>
      <Link href={"/courses/information-technology/machine-learning"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Machine Learning
        </div>
      </Link>
      <Link href={"/courses/information-technology/web-development"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Website Development
        </div>
      </Link>
      <Link href={"/courses/information-technology/game-programming"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Game Programming
        </div>
      </Link>
      <Link href={"/courses/information-technology/telecommunication"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Telecommunication
        </div>
      </Link>
      <Link href={"/courses/information-technology/business-analysis"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Business Analysis
        </div>
      </Link>
      <Link href={"/courses/information-technology/cloud-computing"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Cloud Computing
        </div>
      </Link>
      <Link href={"/courses/information-technology/computer-networking"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Computer Networking
        </div>
      </Link>
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
