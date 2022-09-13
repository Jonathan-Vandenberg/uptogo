import Link from "next/link";
import {
  Ai,
  Blockchain,
  BlogPost,
  BusinessAnalysis,
  CloudComputing,
  ComputerNetworking,
  DataManagement,
  GameProgramming,
  MachineLearning,
  SoftwareDevelopment,
  Telecommunication,
  WebDevelopment,
} from "../../types";
import BlogPostMarkup from "../Blog/BlogPostMarkup";
import image from "../../public/courseMain/Data_Management.jpeg";
import Image from "next/image";

interface IProps {
  data:
    | BlogPost
    | Telecommunication
    | BusinessAnalysis
    | CloudComputing
    | ComputerNetworking
    | SoftwareDevelopment
    | GameProgramming
    | WebDevelopment
    | MachineLearning
    | DataManagement
    | Blockchain
    | Ai
    | undefined
    | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogMain({ data, handleEdit, handleAdd }: IProps) {
  return (
    <div className="px-5 container max-w-[678px] md:max-w-[900px] mx-auto pt-6 md:pt-12">
      <div className="pb-6 md:pb-10">
        <div>
          <div className="logoFont text-darkBlue text-2xl pb-3 md:text-3xl lg:text-4xl">
            {data?.title}
          </div>
          <div className="text-gray-700 text-xl pb-3 md:text-xl lg:text-2xl">
            {data?.subtitle1}
          </div>
        </div>
      </div>
      <div className="pb-8">
        <Image
          src={image}
          width={600}
          height={250}
          alt="image"
          layout="responsive"
        />
      </div>
      <BlogPostMarkup
        data={data}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />

      <div className="flex items-center justify-center">
        <Link href={"/contact"}>
          <button className="text-center p-3 border-orange border-2 rounded-full text-orange hover:bg-orange hover:text-white">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
