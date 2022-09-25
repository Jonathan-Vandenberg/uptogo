import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsCircleFill } from "react-icons/bs";
import heroImage from "../../public/courseMain/CouresesHomeImage.jpg";
import ITDesktop from "../../public/courseMain/ITDesktop.jpg";
import landmarks from "../../public/heroImages/heroTravel.jpg";
import { useAppSelector } from "../../redux-hooks/hooks";
import { It } from "../../types";
import ColorLangBtn from "../UI/ColorLangBtn";

interface IProps {
  data: It;
}

export default function App({ data }: IProps) {
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
          title={"V Information Technology"}
          Etitle={"E Information Technology"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={data?.p1}
          list1={data?.l1}
          list2={data?.l2}
          list3={data?.l3}
          link={"/information-technology"}
          image={ITDesktop}
        />
        <Category
          title={"Quản lý"}
          Etitle={"Management"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis velit obcaecati veniam unde enim voluptatum autem facilis. Quos, placeat!"
          }
          list1={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          list2={"Repellat nihil error eum, vel a"}
          list3={
            "Dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis"
          }
          link={"/management"}
          image={ITDesktop}
        />
        <Category
          title={"Thiết kế"}
          Etitle={"Design"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis velit obcaecati veniam unde enim voluptatum autem facilis. Quos, placeat!"
          }
          list1={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          list2={"Repellat nihil error eum, vel a"}
          list3={
            "Dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis"
          }
          link={"/design"}
          image={ITDesktop}
        />
        <Category
          title={"Sức khỏe"}
          Etitle={"Health"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis velit obcaecati veniam unde enim voluptatum autem facilis. Quos, placeat!"
          }
          list1={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          list2={"Repellat nihil error eum, vel a"}
          list3={
            "Dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis"
          }
          link={"/health"}
          image={ITDesktop}
        />
        <Category
          title={"Nhà hàng khách sạn"}
          Etitle={"Hospitality"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis velit obcaecati veniam unde enim voluptatum autem facilis. Quos, placeat!"
          }
          list1={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          list2={"Repellat nihil error eum, vel a"}
          list3={
            "Dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis"
          }
          link={"/hospitality"}
          image={ITDesktop}
        />
        <Category
          title={"Thương mại & Thể thao"}
          Etitle={"Trades & Sports"}
          translate={translate}
          bgColor="purple-200"
          paragraph1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis velit obcaecati veniam unde enim voluptatum autem facilis. Quos, placeat!"
          }
          list1={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          list2={"Repellat nihil error eum, vel a"}
          list3={
            "Dolor sit amet consectetur adipisicing elit. Repellat nihil error eum, vel a commodi sint odit rem eos blanditiis"
          }
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
  const colorStyle = `snap-start h-screen grid grid-cols-2 w-full bg-gradient-to-r from-${bgColor} via-white to-white`;
  return (
    <AnimatePresence>
      <div className={colorStyle}>
        <motion.div
          key="Content"
          initial={{ x: -180 }}
          whileInView={{ x: 0, transition: { duration: 0.5 } }}
          className="flex flex-col items-center justify-start pb-20 px-20 pt-10"
        >
          <div className="p-6">
            <Link href={link as string}>
              <div className="flex items-center justify-center text-3xl text-darkBlue">
                {translate ? Etitle : title}
              </div>
            </Link>
          </div>
          <div className=" flex flex-col items-center justify-center space-y-6">
            <p className="text-lg ">{paragraph1}</p>
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
          className="mt-[25%]"
        >
          <Image src={image as string} alt="IT image" layout="responsive" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
