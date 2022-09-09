import Link from "next/link";
import It from "../../../components/Courses/information-technology/ItMain";
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
      <div className="text-lg p-4 text-darkBlue ">Compute Networking</div>
      <div className="text-lg p-4 text-darkBlue ">Cloud Computing</div>
      <div className="text-lg p-4 text-darkBlue ">Business Analysis</div>
      <div className="text-lg p-4 text-darkBlue ">Telecommunication</div>
      <div className="text-lg p-4 text-darkBlue ">Game Programming</div>
      <div className="text-lg p-4 text-darkBlue ">Website Development</div>
      <div className="text-lg p-4 text-darkBlue ">Machine Learing</div>
      <div className="text-lg p-4 text-darkBlue ">Data Management</div>
      <div className="text-lg p-4 text-darkBlue ">Blockchain Technology</div>
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
