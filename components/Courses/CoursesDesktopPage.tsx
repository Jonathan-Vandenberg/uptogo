import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsCircleFill } from "react-icons/bs";
import heroImage from "../../public/courseMain/CouresesHomeImage.jpg";
import ITDesktop from "../../public/courseMain/ITDesktop.jpg";
import landmarks from "../../public/heroImages/heroTravel.jpg";
import { useAppSelector } from "../../redux-hooks/hooks";
import {
  Design,
  Health,
  Hospitality,
  It,
  Management,
  Trades,
} from "../../types";
import ColorLangBtn from "../UI/ColorLangBtn";

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
        <div className="h-screen snap-start bg-gradient-to-b from-sky-100 via-white to-orange/20 block">
          <div className="container mx-auto relative">
            <Image src={heroImage} layout="responsive" alt="eduaction image" />
          </div>
          <p></p>
        </div>
        <Category
          title={"Công nghệ thông tin"}
          Etitle={"E Information Technology"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={it?.p1}
          list1={it?.l1}
          list2={it?.l2}
          list3={it?.l3}
          link={"/information-technology"}
          image={ITDesktop}
        />
        <Category
          title={"Quản lý"}
          Etitle={"Management"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={management?.p1}
          list1={management?.l1}
          list2={management?.l2}
          list3={management?.l3}
          link={"/management"}
          image={ITDesktop}
        />
        <Category
          title={"Thiết kế"}
          Etitle={"Design"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={design?.p1}
          list1={design?.l1}
          list2={design?.l2}
          list3={design?.l3}
          link={"/design"}
          image={ITDesktop}
        />
        <Category
          title={"Sức khỏe"}
          Etitle={"Health"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={health?.p1}
          list1={health?.l1}
          list2={health?.l2}
          list3={health?.l3}
          link={"/health"}
          image={ITDesktop}
        />
        <Category
          title={"Nhà hàng khách sạn"}
          Etitle={"Hospitality"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={hospitality?.p1}
          list1={hospitality?.l1}
          list2={hospitality?.l2}
          list3={hospitality?.l3}
          link={"/hospitality"}
          image={ITDesktop}
        />
        <Category
          title={"Thương mại & Thể thao"}
          Etitle={"Trades & Sports"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={trades?.p1}
          list1={trades?.l1}
          list2={trades?.l1}
          list3={trades?.l1}
          link={"/trades"}
          image={ITDesktop}
        />
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
    </>
  );
}

interface ICategory {
  title: string | undefined | null;
  Etitle: string | undefined | null;
  bgColor: string | undefined | null;
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
      <div className="snap-start h-screen grid grid-cols-2 w-full bg-gradient-to-r from-purple-200 via-white to-white">
        <motion.div
          key="Content"
          initial={{ x: -180 }}
          whileInView={{ x: 0, transition: { duration: 0.5 } }}
          className="flex flex-col items-center justify-start pb-20 px-20 pt-6"
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
                {translate ? "Find Courses" : "Công nghệ thông tin"}
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
          className="h-full w-full"
        >
          <div className="mt-[25%] block">
            <Image src={image as string} alt="IT image" layout="responsive" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
