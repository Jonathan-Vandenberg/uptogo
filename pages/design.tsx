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
import filmIcon from "../public/courseIcons/designIcons/camera.png";

import BWthreeDIcon from "../public/courseIcons/BWIcons/designBWicons/3d-television.png";
import BWactingIcon from "../public/courseIcons/BWIcons/designBWicons/theatre.png";
import BWdigitalIcon from "../public/courseIcons/BWIcons/designBWicons/bullhorn.png";
import BWfashionIcon from "../public/courseIcons/BWIcons/designBWicons/fashion-design.png";
import BWgraphicIcon from "../public/courseIcons/BWIcons/designBWicons/web-design (1).png";
import BWinteriorIcon from "../public/courseIcons/BWIcons/designBWicons/staircase.png";
import BWlandscapeIcon from "../public/courseIcons/BWIcons/designBWicons/landscape.png";
import BWmusicIcon from "../public/courseIcons/BWIcons/designBWicons/music-note.png";
import BWfilmIcon from "../public/courseIcons/BWIcons/designBWicons/video.png";

import landmarks from "../public/heroImages/heroTravel.jpg";
import ColorLangBtn from "../components/UI/ColorLangBtn";

export const designLinks = [
  {
    courseE: "Acting",
    course: "Diễn viên",
    link: "/courses/design/acting",
    icon: actingIcon,
    BWicon: BWactingIcon,
  },
  {
    courseE: "3D Animation",
    course: "Hoạt hình & 3D",
    link: "/courses/design/animation3d",
    icon: threeDIcon,
    BWicon: BWthreeDIcon,
  },
  {
    courseE: "Digital Media",
    course: "Truyền thông kỹ thuật số",
    link: "/courses/design/digital-media",
    icon: digitalIcon,
    BWicon: BWdigitalIcon,
  },
  {
    courseE: "Fashion Design",
    course: "Thiết kế thời trang",
    link: "/courses/design/fashion-design",
    icon: fashionIcon,
    BWicon: BWfashionIcon,
  },
  {
    courseE: "Film",
    course: "Phim & Truyền thông",
    link: "/courses/design/film",
    icon: filmIcon,
    BWicon: BWfilmIcon,
  },
  {
    courseE: "Graphic Design",
    course: "Thiết kế đồ họa",
    link: "/courses/design/graphic-design",
    icon: graphicIcon,
    BWicon: BWgraphicIcon,
  },
  {
    courseE: "Interior Design",
    course: "Thiết kế nội thất",
    link: "/courses/design/interior-design",
    icon: interiorIcon,
    BWicon: BWinteriorIcon,
  },
  {
    courseE: "Landscaping",
    course: "Kiến trúc môi trường",
    link: "/courses/design/landscape",
    icon: landscapeIcon,
    BWicon: BWlandscapeIcon,
  },
  {
    courseE: "Music & Audio",
    course: "Âm nhạc & Âm thanh",
    link: "/courses/design/music",
    icon: musicIcon,
    BWicon: BWmusicIcon,
  },
];

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  const color = useAppSelector((state) => state.iconState.color);
  const style = color
    ? "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10 bg-gradient-to-b from-sky-200 via-white to-white"
    : "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10 bg-bgUrl";
  return (
    <div className={style}>
      {color ? (
        <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 ">
          {designLinks.map((item, i) => (
            <div key={i} className="pb-7 z-10">
              <Link href={item.link}>
                <div className="flex items-center justify-center flex-col cursor-pointer">
                  <div className="w-auto h-full items-center flex justify-center mb-1">
                    <Image
                      src={item.icon}
                      alt="Design image"
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
        <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 pt-20 w-screen h-auto z-40 bg-bgUrl">
          {designLinks.map((item, i) => (
            <div key={i} className="pb-7 z-10">
              <Link href={item.link}>
                <div className="flex items-center justify-center flex-col cursor-pointer">
                  <div className="w-auto h-full items-center flex justify-center mb-1">
                    <Image
                      src={item.BWicon}
                      alt="Design image"
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
