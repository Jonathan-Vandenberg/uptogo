import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsCircleFill } from "react-icons/bs";
import { FaAngleDoubleDown } from "react-icons/fa";
import hero from "../../public/courseMain/couresesDesktopMain.jpg";
import designDesktop from "../../public/courseMain/design.jpg";
import healthDesktop from "../../public/courseMain/health.jpg";
import hospitalityDesktop from "../../public/courseMain/hospitality.jpg";
import ITDesktop from "../../public/courseMain/it.jpg";
import managementDesktop from "../../public/courseMain/management.jpg";
import tradesDesktop from "../../public/courseMain/trades.jpg";
import { useAppSelector } from "../../redux-hooks/hooks";
import {
  Design,
  Health,
  Hospitality,
  It,
  Management,
  Trades,
} from "../../types";

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
  return (
    <>
      <div className="snap-y h-screen overflow-y-scroll snap-proximity relative">
        <div className="snap-start relative">
          <div className="h-screen mx-auto max-w-[900px] container">
            <div className="block max-w-[600px]">
              <Image src={hero} layout="responsive" alt="eduaction image" />
            </div>
          </div>
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center flex-col space-y-3">
              <p className="flex items-center justify-center text-2xl border-b-4 border-orange">
                {translate ? "Subjects" : "Ngành Học"}
              </p>
              <div className="">
                <FaAngleDoubleDown size={20} />
              </div>
            </div>
          </div>
        </div>
        <Category
          title={"Công nghệ thông tin"}
          Etitle={"Information Technology"}
          translate={translate}
          bgColor="purple1"
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
          bgColor="blue1"
          paragraph1={management?.p1}
          list1={management?.l1}
          list2={management?.l2}
          list3={management?.l3}
          link={"/courses/management"}
          image={managementDesktop}
        />
        <Category
          title={"Thiết kế"}
          Etitle={"Design"}
          translate={translate}
          bgColor="yellow"
          paragraph1={design?.p1}
          list1={design?.l1}
          list2={design?.l2}
          list3={design?.l3}
          link={"/courses/design"}
          image={designDesktop}
        />
        <Category
          title={"Sức khỏe"}
          Etitle={"Health"}
          translate={translate}
          bgColor="red"
          paragraph1={health?.p1}
          list1={health?.l1}
          list2={health?.l2}
          list3={health?.l3}
          link={"/courses/health"}
          image={healthDesktop}
        />
        <Category
          title={"Nhà hàng khách sạn"}
          Etitle={"Hospitality"}
          translate={translate}
          bgColor="purple2"
          paragraph1={hospitality?.p1}
          list1={hospitality?.l1}
          list2={hospitality?.l2}
          list3={hospitality?.l3}
          link={"/courses/hospitality"}
          image={hospitalityDesktop}
        />
        <Category
          title={"Thương mại & Thể thao"}
          Etitle={"Trades & Sports"}
          translate={translate}
          bgColor="blue2"
          paragraph1={trades?.p1}
          list1={trades?.l1}
          list2={trades?.l1}
          list3={trades?.l1}
          link={"/courses/trades"}
          image={tradesDesktop}
        />
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
  const backgroundClasses = {
    purple1:
      "snap-start h-screen flex items-end justify-center flex-col flex-col-reverse bg-gradient-to-r from-purple-200 via-white to-white lg:items-center lg:flex-row w-full",
    blue1:
      "snap-start h-screen flex items-end justify-center flex-col flex-col-reverse bg-gradient-to-r from-sky-200 via-white to-white lg:flex-row w-full lg:items-center",
    yellow:
      "snap-start h-screen flex items-end justify-center flex-col flex-col-reverse bg-gradient-to-r from-yellow-300 via-white to-white lg:flex-row w-full lg:items-center",
    red: "snap-start h-screen flex items-end justify-center flex-col flex-col-reverse bg-gradient-to-r from-red-300 via-white to-white lg:flex-row w-full lg:items-center",
    purple2:
      "snap-start h-screen flex items-end justify-center flex-col flex-col-reverse bg-gradient-to-r from-purple-300 via-white to-white lg:flex-row w-full lg:items-center",
    blue2:
      "h-screen flex items-end justify-center flex-col bg-gradient-to-r flex-col-reverse from-sky-300 via-white to-white lg:flex-row w-full lg:items-center",
  };

  let style;

  if (bgColor === "purple1") {
    style = backgroundClasses.purple1;
  }

  if (bgColor === "blue1") {
    style = backgroundClasses.blue1;
  }

  if (bgColor === "yellow") {
    style = backgroundClasses.yellow;
  }

  if (bgColor === "red") {
    style = backgroundClasses.red;
  }

  if (bgColor === "purple2") {
    style = backgroundClasses.purple2;
  }

  if (bgColor === "blue2") {
    style = backgroundClasses.blue2;
  }

  return (
    <AnimatePresence>
      <div className={style}>
        <motion.div
          key="Content"
          initial={{ x: -180 }}
          whileInView={{ x: 0, transition: { duration: 0.5 } }}
          className=" max-w-[1200px] container flex flex-col items-center justify-start w-full lg:w-1/2 pb-20 px-20 pt-6"
        >
          <div className="pb-6">
            <Link href={link as string}>
              <div className="flex items-center justify-center text-3xl text-darkBlue">
                {translate ? Etitle : title}
              </div>
            </Link>
          </div>
          <div className="max-w-[700px] flex flex-col items-center justify-center space-y-6">
            <p className="text-xl line-clamp-6">{paragraph1}</p>
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
          <div className="px-4 py-2 border-2 hover:bg-darkBlue/20 hover:text-black text-white bg-darkBlue rounded-full mt-6">
            <Link href={link as string}>
              <div className="border-b-6 border-orange flex items-center justify-center text-lg">
                {translate ? "Read More" : "Đọc thêm"}
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
          className="max-w-[600px] w-1/2 lg:w-1/2 lg:mt-[25%] lg:block p-12 hidden"
        >
          <Image src={image as string} alt="IT image" layout="responsive" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
