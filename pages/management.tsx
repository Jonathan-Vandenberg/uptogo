import Link from "next/link";
import { useAppSelector } from "../redux-hooks/hooks";
import Image from "next/image";

import projectManagement from "../public/courseIcons/managementIcons/manager.png";
import businessManagement from "../public/courseIcons/managementIcons/management (1).png";
import humanResources from "../public/courseIcons/managementIcons/hr-manager.png";
import bankingManagement from "../public/courseIcons/managementIcons/manager (1).png";
import intlBusiness from "../public/courseIcons/managementIcons/provider.png";
import socialMediaMarketing from "../public/courseIcons/managementIcons/social-media.png";
import agribusinessManagement from "../public/courseIcons/managementIcons/harvest.png";
import supplyManagement from "../public/courseIcons/managementIcons/process.png";
import leadershipManagement from "../public/courseIcons/managementIcons/leader.png";

import landmarks from "../public/heroImages/heroTravel.jpg";

export const managementLinks = [
  {
    courseE: "Project Management",
    course: "Quản lý dự án",
    link: "/courses/management/project-management",
    icon: projectManagement,
  },
  {
    courseE: "Business Management",
    course: "Quản trị kinh doanh",
    link: "/courses/management/business-management",
    icon: businessManagement,
  },
  {
    courseE: "Human Resources",
    course: "Quản lý nhân sự",
    link: "/courses/management/human-resources",
    icon: humanResources,
  },
  {
    courseE: "Banking Management",
    course: "Ngân hàng",
    link: "/courses/management/banking-management",
    icon: bankingManagement,
  },
  {
    courseE: "International Business",
    course: "Kinh doanh quốc tế",
    link: "/courses/management/international-business",
    icon: intlBusiness,
  },
  {
    courseE: "Social Media Marketing",
    course: "Truyền thông xã hội & Tiếp thị",
    link: "/courses/management/social-media-marketing",
    icon: socialMediaMarketing,
  },
  {
    courseE: "Agri Business Management",
    course: "Quản lý nông nghiệp",
    link: "/courses/management/agriculture-business-management",
    icon: agribusinessManagement,
  },
  {
    courseE: "Supply Management",
    course: "Quản lý chuỗi cung ứng",
    link: "/courses/management/supply-management",
    icon: supplyManagement,
  },
  {
    courseE: "Leadership Management",
    course: "Lãnh đạo & Quản lý",
    link: "/courses/management/leadership-management",
    icon: leadershipManagement,
  },
];

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-30  bg-gradient-to-b from-sky-200 via-white to-white">
      <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 ">
        {managementLinks.map((item, i) => (
          <div key={i} className="pb-7 z-10">
            <Link href={item.link}>
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <div className="w-auto h-full items-center flex justify-center mb-1">
                  <Image
                    src={item.icon}
                    alt="IT image"
                    width={70}
                    height={70}
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
      <div className="fixed bottom-12 left-0 w-screen">
        <Image
          src={landmarks}
          alt="landmarks decorational"
          layout="responsive"
          priority
        />
      </div>
      <span className="fixed bottom-0 left-0 w-screen h-12 bg-orange md:hidden" />
    </div>
  );
}
