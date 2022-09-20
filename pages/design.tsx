import Link from "next/link";
import { useAppSelector } from "../redux-hooks/hooks";
import Image from "next/image";

import threeDIcon from "../public/courseIcons/designIcons/3d-movie.png";
import actingIcon from "../public/courseIcons/designIcons/drama.png";
import digitalIcon from "../public/courseIcons/designIcons/social-media (1).png";
import fashionIcon from "../public/courseIcons/designIcons/fashion-design.png";
import graphicIcon from "../public/courseIcons/designIcons/illustration.png";
import interiorIcon from "../public/courseIcons/designIcons/staircase.png";
import landscapeIcon from "../public/courseIcons/designIcons/forest.png";
import musicIcon from "../public/courseIcons/designIcons/music-notes.png";

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

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen bg-white z-30">
      <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 bg-white">
        {designLinks.map((item, i) => (
          <div key={i} className="pb-3">
            <Link href={item.link}>
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <div className="shadow-lg w-auto h-full items-center flex justify-center p-2 rounded-lg">
                  <Image
                    src={item.icon}
                    alt="IT image"
                    width={40}
                    height={40}
                    priority
                  />
                </div>
                <div className="text-sm text-gray-700 w-full text-center px-6 py-1 leading-5">
                  {translate ? item.courseE : item.course}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
