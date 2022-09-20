import Image from "next/image";
import Link from "next/link";
import threeDIcon from "../../public/courseIcons/designIcons/3d-movie.png";
import actingIcon from "../../public/courseIcons/designIcons/drama.png";
import digitalIcon from "../../public/courseIcons/designIcons/social-media (1).png";
import fashionIcon from "../../public/courseIcons/designIcons/fashion-design.png";
import graphicIcon from "../../public/courseIcons/designIcons/illustration.png";
import interiorIcon from "../../public/courseIcons/designIcons/staircase.png";
import landscapeIcon from "../../public/courseIcons/designIcons/forest.png";
import musicIcon from "../../public/courseIcons/designIcons/music-notes.png";

import { useAppSelector } from "../../redux-hooks/hooks";

export const designLinks = [
  {
    courseE: "Acting",
    course: "Diễn viên",
    link: "/courses/design/acting",
    icon: actingIcon,
  },
  {
    courseE: "3D Animation",
    course: "Hoạt hình & 3D",
    link: "/courses/design/animation3d",
    icon: threeDIcon,
  },
  {
    courseE: "Digital Media",
    course: "Truyền thông kỹ thuật số",
    link: "/courses/design/digital-media",
    icon: digitalIcon,
  },
  {
    courseE: "Fashion Design",
    course: "Thiết kế thời trang",
    link: "/courses/design/fashion-design",
    icon: fashionIcon,
  },
  {
    courseE: "Film",
    course: "Phim & Truyền thông",
    link: "/courses/design/film",
    icon: actingIcon,
  },
  {
    courseE: "Graphic Design",
    course: "Thiết kế đồ họa",
    link: "/courses/design/graphic-design",
    icon: graphicIcon,
  },
  {
    courseE: "Interior Design",
    course: "Thiết kế nội thất",
    link: "/courses/design/interior-design",
    icon: interiorIcon,
  },
  {
    courseE: "Landscaping",
    course: "Kiến trúc môi trường",
    link: "/courses/design/landscape",
    icon: landscapeIcon,
  },
  {
    courseE: "Music & Audio",
    course: "Âm nhạc & Âm thanh",
    link: "/courses/design/music",
    icon: musicIcon,
  },
];

/* Chăm sóc người già – Aged Care
•	Dinh dưỡng – Nutrition
•	Y tá – Nursing
•	Thú ý – Veterinary
•	Dược sĩ – Medicine 
•	Sức khỏe cộng đồng – Public health
•	Nha khoa – Dental 
•	Massage
•	Tâm lý học – Mental Health */

export const healthLinks = [
  {
    courseE: "Aged Care",
    course: "Chăm sóc người già",
    link: "/courses/health/aged-care",
  },
  {
    courseE: "Dentistry",
    course: "Nha khoa",
    link: "/courses/health/dental",
  },
  {
    courseE: "Massage",
    course: "Massage",
    link: "/courses/health/massage",
  },
  {
    courseE: "Medicine",
    course: "Dược sĩ",
    link: "/courses/health/medicine",
  },
  {
    courseE: "Mental Health",
    course: "Tâm lý học",
    link: "/courses/health/mental-health",
  },
  {
    courseE: "Nursing",
    course: "Y tá",
    link: "/courses/health/nursing",
  },
  {
    courseE: "Nutrition",
    course: "Dinh dưỡng",
    link: "/courses/health/nutrition",
  },
  {
    courseE: "Public Health",
    course: "Sức khỏe cộng đồng",
    link: "/courses/health/public-health",
  },
  {
    courseE: "Veterinary",
    course: "Thú ý",
    link: "/courses/health/veterinary",
  },
];

/* Bếp bánh – Patisserie & Baking
•	Bếp – Commercial Cookery
•	Quản lý nhà hàng khách sạn – Hospitality Management
•	Quản lý khách sạn quốc tế - International Hotel Management
•	Du lịch lữ hành – Travel & Tourism
•	Events – Sự kiện */

export const hospitalityLinks = [
  {
    courseE: "Commercial Cooking",
    course: "Bếp",
    link: "/courses/hospitality/commercial-cooking",
  },
  {
    courseE: "Baking",
    course: "Bếp bánh",
    link: "/courses/hospitality/baking",
  },
  {
    courseE: "Event Organising",
    course: "Sự kiện",
    link: "/courses/hospitality/events",
  },
  {
    courseE: "Hospitality Management",
    course: "Quản lý nhà hàng khách sạn",
    link: "/courses/hospitality/hospitality-management",
  },
  {
    courseE: "Hotel Management",
    course: "Quản lý khách sạn quốc tế",
    link: "/courses/hospitality/hotel-management",
  },
  {
    courseE: "Travel & Tourism",
    course: "Du lịch lữ hành",
    link: "/courses/hospitality/travel-tourism",
  },
];

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
// •	Trí tuệ nhân tạo - Artificial Intelligence (AI) Aåå

export const itLinks = [
  {
    courseE: "Software Development",
    course: "Phát triển phần mền",
    link: "/courses/information-technology/software-development",
  },
  {
    courseE: "Blockchain Technology",
    course: "Công nghệ tiền ảo",
    link: "/courses/information-technology/blockchain-technology",
  },
  {
    courseE: "Data Management",
    course: "Quản lý dữ liệu",
    link: "/courses/information-technology/data-management",
  },
  {
    courseE: "Machine Learning",
    course: "Phương tiện máy móc",
    link: "/courses/information-technology/machine-learning",
  },
  {
    courseE: "Web Development",
    course: "Phát triển Website",
    link: "/courses/information-technology/web-development",
  },
  {
    courseE: "Game Programming",
    course: "Lập trình trò chơi",
    link: "/courses/information-technology/game-programming",
  },
  {
    courseE: "Telecommunications",
    course: "Viễn thông",
    link: "/courses/information-technology/telecommunication",
  },
  {
    courseE: "Business Analysis",
    course: "Phân tích kinh doanh",
    link: "/courses/information-technology/business-analysis",
  },
  {
    courseE: "Cloud Computing",
    course: "Điện toán đám mây",
    link: "/courses/information-technology/cloud-computing",
  },
  {
    courseE: "Computer Networking",
    course: "Mạng máy tính",
    link: "/courses/information-technology/computer-networking",
  },
  {
    courseE: "A.I.",
    course: "Trí tuệ nhân tạo",
    link: "/courses/information-technology/artificial-intelligence",
  },
];

/* Quản lý - Management
•	Quản lý dự án – Project Management
•	Quản trị kinh doanh – Business Management
•	Quản lý nhân sự - Human Resources
•	Ngân hàng – Banking Management
•	Kinh doanh quốc tế - International Business
•	Truyền thông xã hội & Tiếp thị - Social Media & Marketing
•	Quản lý nông nghiệp – Agribusiness Management
•	Quản lý chuỗi cung ứng – Supply chain Management
•	Lãnh đạo & Quản lý – Leadership & Management */

export const managementLinks = [
  {
    courseE: "Management",
    course: "Quản lý dự án",
    link: "/courses/management/project-management",
  },
  {
    courseE: "Business Management",
    course: "Quản trị kinh doanh",
    link: "/courses/management/business-management",
  },
  {
    courseE: "Human Resources",
    course: "Quản lý nhân sự",
    link: "/courses/management/human-resources",
  },
  {
    courseE: "Banking Management",
    course: "Ngân hàng",
    link: "/courses/management/banking-management",
  },
  {
    courseE: "International Business",
    course: "Kinh doanh quốc tế",
    link: "/courses/management/international-business",
  },
  {
    courseE: "Social Media Marketing",
    course: "Truyền thông xã hội & Tiếp thị",
    link: "/courses/management/social-media-marketing",
  },
  {
    courseE: "Agri Business Management",
    course: "Quản lý nông nghiệp",
    link: "/courses/management/agriculture-business-management",
  },
  {
    courseE: "Supply Management",
    course: "Quản lý chuỗi cung ứng",
    link: "/courses/management/supply-management",
  },
  {
    courseE: "Leadership Management",
    course: "Lãnh đạo & Quản lý",
    link: "/courses/management/leadership-management",
  },
];

/* Máy móc – Automotive 
•	Làm đẹp – Beuty
•	Công trình xây dựng – Building & Construction
•	Mộc – Carpentry 
•	Giáo dục – Education
•	Thể thao – Fitness
•	Làm tóc – Hairdressing
•	Làm vườn – Horticulture
•	Giáo dục thể chất – Sport Development */

export const tradeLinks = [
  {
    courseE: "Automotive",
    course: "Máy móc",
    link: "/courses/trades/automotive",
  },
  {
    courseE: "Beauty",
    course: "Làm đẹp",
    link: "/courses/trades/beauty",
  },
  {
    courseE: "Construction",
    course: "Công trình xây dựng",
    link: "/courses/trades/construction",
  },
  {
    courseE: "Carpentry",
    course: "Mộc",
    link: "/courses/trades/carpentry",
  },
  {
    courseE: "Education",
    course: "Giáo dục",
    link: "/courses/trades/education",
  },
  {
    courseE: "Fitness",
    course: "Thể thao",
    link: "/courses/trades/fitness",
  },
  {
    courseE: "Hairdressing",
    course: "Làm tóc",
    link: "/courses/trades/hairdressing",
  },
  {
    courseE: "Horticulture",
    course: "Làm vườn",
    link: "/courses/trades/horticulture",
  },
  {
    courseE: "Sport Development",
    course: "Giáo dục thể chất",
    link: "/courses/trades/sport-development",
  },
  {
    courseE: "Yoga",
    course: "Yoga",
    link: "/courses/trades/yoga",
  },
];
