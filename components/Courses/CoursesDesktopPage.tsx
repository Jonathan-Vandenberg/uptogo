import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsArrowDownRightSquare, BsCircleFill } from "react-icons/bs";
import heroImage from "../../public/courseMain/CouresesHomeImage.jpg";
import ITDesktop from "../../public/courseMain/ITDesktop.jpg";
import landmarks from "../../public/heroImages/heroTravel.jpg";
import { useAppSelector } from "../../redux-hooks/hooks";
import hero from "../../public/courseMain/couresesDesktopMain.jpg";
import {
  Design,
  Health,
  Hospitality,
  It,
  Management,
  Trades,
} from "../../types";
import ColorLangBtn from "../UI/ColorLangBtn";
import { FaAngleDoubleDown } from "react-icons/fa";

interface IProps {
  it: It;
  design: Design;
  hospitality: Hospitality;
  trades: Trades;
  health: Health;
  management: Management;
}

export default function App({
  it,
  design,
  hospitality,
  trades,
  health,
  management,
}: IProps) {
  const translate = useAppSelector((state) => state.translationState.translate);
  const color = useAppSelector((state) => state.iconState.color);

  return (
    <>
      <div className="snap-y h-screen overflow-y-scroll snap-mandatory">
        <div className="h-screen snap-start to-orange/20 block">
          <div className="container mx-auto relative max-w-[1200px]">
            <Image src={hero} layout="responsive" alt="eduaction image" />
          </div>
          <div className="flex items-center justify-center flex-col space-y-4">
            <p className="flex items-center justify-center p-16 text-2xl">
              Subjects
            </p>
            <div className="">
              <FaAngleDoubleDown size={20} />
            </div>
          </div>
        </div>
        <Category
          title={"Công nghệ thông tin"}
          Etitle={"Information Technology"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={it?.p1}
          list1={it?.l1}
          list2={it?.l2}
          list3={it?.l3}
          link={"/courses/information-technology"}
          image={ITDesktop}
        />
        <Category
          title={"Quản lý"}
          Etitle={"Management"}
          translate={translate}
          bgColor="red-200"
          paragraph1={management?.p1}
          list1={management?.l1}
          list2={management?.l2}
          list3={management?.l3}
          link={"/courses/management"}
          image={ITDesktop}
        />
        <Category
          title={"Thiết kế"}
          Etitle={"Design"}
          translate={translate}
          bgColor="yellow-200"
          paragraph1={design?.p1}
          list1={design?.l1}
          list2={design?.l2}
          list3={design?.l3}
          link={"/courses/design"}
          image={ITDesktop}
        />
        <Category
          title={"Sức khỏe"}
          Etitle={"Health"}
          translate={translate}
          bgColor="green-200"
          paragraph1={health?.p1}
          list1={health?.l1}
          list2={health?.l2}
          list3={health?.l3}
          link={"/courses/health"}
          image={ITDesktop}
        />
        <Category
          title={"Nhà hàng khách sạn"}
          Etitle={"Hospitality"}
          translate={translate}
          bgColor="orange-200"
          paragraph1={hospitality?.p1}
          list1={hospitality?.l1}
          list2={hospitality?.l2}
          list3={hospitality?.l3}
          link={"/courses/hospitality"}
          image={ITDesktop}
        />
        <Category
          title={"Thương mại & Thể thao"}
          Etitle={"Trades & Sports"}
          translate={translate}
          bgColor="blue-200"
          paragraph1={trades?.p1}
          list1={trades?.l1}
          list2={trades?.l1}
          list3={trades?.l1}
          link={"/courses/trades"}
          image={ITDesktop}
        />
        {color && (
          <div className="fixed bottom-12 left-0 w-screen">
            <Image
              src={landmarks}
              alt="Landmarks decorational"
              layout="responsive"
              priority
            />
          </div>
        )}
        <ColorLangBtn />
      </div>
    </>
  );
}

interface ICategory {
  title: string | undefined | null;
  Etitle: string | undefined | null;
  bgColor: string;
  translate: boolean | undefined | null;
  paragraph1: string | undefined | null;
  list1: string | undefined | null;
  list2: string | undefined | null;
  list3: string | undefined | null;
  link: string | undefined | null;
  image: StaticImageData | undefined | null | string;
}

const Category = ({
  title,
  Etitle,
  bgColor,
  translate,
  paragraph1,
  list1,
  list2,
  list3,
  link,
  image,
}: ICategory) => {
  return (
    <AnimatePresence>
      <div className="snap-start h-screen flex items-center justify-center flex-col lg:flex-row w-full">
        <motion.div
          key="Content"
          initial={{ x: -180 }}
          whileInView={{ x: 0, transition: { duration: 0.5 } }}
          className="flex flex-col items-center justify-start w-full lg:w-1/2 pb-20 px-20 pt-6"
        >
          <div className="p-6">
            <Link href={link as string}>
              <div className="flex items-center justify-center text-3xl text-darkBlue">
                {translate ? Etitle : title}
              </div>
            </Link>
          </div>
          <div className=" flex flex-col items-center justify-center space-y-6">
            <p className="text-lg line-clamp-6">{paragraph1}</p>
            <ul className="flex items-start justify-center flex-col space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <div>
                  <BsCircleFill size={10} />
                </div>
                <li className="text-xl">{list1}</li>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div>
                  <BsCircleFill size={10} />
                </div>
                <li className="text-xl">{list2}</li>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div>
                  <BsCircleFill size={10} />
                </div>
                <li className="text-xl">{list3}</li>
              </div>
            </ul>
          </div>
          <div className="px-4 py-2 border-2 hover:bg-darkBlue/20 hover:text-black text-white bg-darkBlue rounded-full mt-12">
            <Link href={link as string}>
              <div className="border-b-6 border-orange flex items-center justify-center text-lg">
                {translate ? "Read More" : "đọc thêm"}
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.7 },
          }}
          className="h-full max-w-[600px] lg:w-1/2"
        >
          <div className="lg:mt-40 block">
            <Image src={image as string} alt="IT image" layout="responsive" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
