import Link from "next/link";
import { useAppSelector } from "../../redux-hooks/hooks";
import Image from "next/image";

import softwareDevelopment from "../../public/courseIcons/ITIcons/monitoring.png";
import computerNetworking from "../../public/courseIcons/ITIcons/neural.png";
import cloudComputing from "../../public/courseIcons/ITIcons/cloud-computing.png";
import businessAnalysis from "../../public/courseIcons/ITIcons/monitoring.png";
import telecommunication from "../../public/courseIcons/ITIcons/cell-tower.png";
import gameProgramming from "../../public/courseIcons/ITIcons/game-development.png";
import webDevelopment from "../../public/courseIcons/ITIcons/web-development.png";
import machineLearning from "../../public/courseIcons/ITIcons/neural.png";
import dataManagement from "../../public/courseIcons/ITIcons/data-management.png";
import blockchain from "../../public/courseIcons/ITIcons/blockchain.png";
import ai from "../../public/courseIcons/ITIcons/ai.png";

import BWsoftwareDevelopment from "../../public/courseIcons/BWIcons/itBWicons/software-development.png";
import BWcomputerNetworking from "../../public/courseIcons/BWIcons/itBWicons/computer (1).png";
import BWcloudComputing from "../../public/courseIcons/BWIcons/itBWicons/cloud-service.png";
import BWbusinessAnalysis from "../../public/courseIcons/BWIcons/itBWicons/dashboard.png";
import BWtelecommunication from "../../public/courseIcons/BWIcons/itBWicons/radar.png";
import BWgameProgramming from "../../public/courseIcons/BWIcons/itBWicons/coding (2).png";
import BWwebDevelopment from "../../public/courseIcons/BWIcons/itBWicons/coding (1).png";
import BWmachineLearning from "../../public/courseIcons/BWIcons/itBWicons/deep-learning.png";
import BWdataManagement from "../../public/courseIcons/BWIcons/itBWicons/process (1).png";
import BWblockchain from "../../public/courseIcons/BWIcons/itBWicons/blockchain.png";
import BWai from "../../public/courseIcons/BWIcons/itBWicons/artificial-intelligence.png";

import landmarks from "../../public/heroImages/heroTravel.jpg";
import ColorLangBtn from "../../components/UI/ColorLangBtn";

export const itLinks = [
  {
    courseE: "Software Development",
    course: "Phát triển phần mềm",
    link: "/courses/information-technology/software-development",
    icon: softwareDevelopment,
    BWicon: BWsoftwareDevelopment,
  },
  {
    courseE: "Blockchain Technology",
    course: "Công nghệ tiền ảo",
    link: "/courses/information-technology/blockchain-technology",
    icon: blockchain,
    BWicon: BWblockchain,
  },
  {
    courseE: "Data Management",
    course: "Quản lý dữ liệu",
    link: "/courses/information-technology/data-management",
    icon: dataManagement,
    BWicon: BWdataManagement,
  },
  {
    courseE: "Machine Learning",
    course: "Phương tiện máy móc",
    link: "/courses/information-technology/machine-learning",
    icon: machineLearning,
    BWicon: BWmachineLearning,
  },
  {
    courseE: "Web Development",
    course: "Phát triển Website",
    link: "/courses/information-technology/web-development",
    icon: webDevelopment,
    BWicon: BWwebDevelopment,
  },
  {
    courseE: "Game Programming",
    course: "Lập trình trò chơi",
    link: "/courses/information-technology/game-programming",
    icon: gameProgramming,
    BWicon: BWgameProgramming,
  },
  {
    courseE: "Telecommunications",
    course: "Viễn thông",
    link: "/courses/information-technology/telecommunication",
    icon: telecommunication,
    BWicon: BWtelecommunication,
  },
  {
    courseE: "Business Analysis",
    course: "Phân tích kinh doanh",
    link: "/courses/information-technology/business-analysis",
    icon: businessAnalysis,
    BWicon: BWbusinessAnalysis,
  },
  {
    courseE: "Cloud Computing",
    course: "Điện toán đám mây",
    link: "/courses/information-technology/cloud-computing",
    icon: cloudComputing,
    BWicon: BWcloudComputing,
  },
  {
    courseE: "Computer Networking",
    course: "Mạng máy tính",
    link: "/courses/information-technology/computer-networking",
    icon: computerNetworking,
    BWicon: BWcomputerNetworking,
  },
  {
    courseE: "A.I.",
    course: "Trí tuệ nhân tạo",
    link: "/courses/information-technology/artificial-intelligence",
    icon: ai,
    BWicon: BWai,
  },
];

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  const color = useAppSelector((state) => state.iconState.color);
  const style = color
    ? "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10  bg-gradient-to-b from-sky-200 via-white to-white"
    : "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10 bg-bgUrl";
  return (
    <div className={style}>
      {color ? (
        <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 ">
          {itLinks.map((item, i) => (
            <div key={i} className="pb-7 z-10">
              <Link href={item.link}>
                <div className="flex items-center justify-center flex-col cursor-pointer">
                  <div className="w-auto h-full items-center flex justify-center mb-1">
                    <Image
                      src={item.icon}
                      alt="IT image"
                      width={60}
                      height={60}
                      priority
                    />
                  </div>
                  <div className="text-sm text-gray-700 w-full text-center px-6 py-1 leading-4">
                    {translate ? item.courseE : item.course}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 ">
          {itLinks.map((item, i) => (
            <div key={i} className="pb-7 z-10">
              <Link href={item.link}>
                <div className="flex items-center justify-center flex-col cursor-pointer">
                  <div className="w-auto h-full items-center flex justify-center mb-1">
                    <Image
                      src={item.BWicon}
                      alt="IT image"
                      width={60}
                      height={60}
                      priority
                    />
                  </div>
                  <div className="text-sm text-gray-700 w-full text-center px-6 py-1 leading-4">
                    {translate ? item.courseE : item.course}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      {color && (
        <div className="fixed bottom-12 left-0 w-screen">
          <Image
            src={landmarks}
            alt="landmarks decorational"
            layout="responsive"
            priority
          />
        </div>
      )}
      <ColorLangBtn />
    </div>
  );
}
