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
  It,
  MachineLearning,
  SoftwareDevelopment,
  Telecommunication,
  WebDevelopment,
} from "../../types";
import BlogPostMarkup from "../Blog/BlogPostMarkup";
import Image from "next/image";
import logo from "../../public/uptogoFavicon.png";

interface IProps {
  data:
    | It
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
    <div className="container max-w-[678px] md:max-w-[900px] mx-auto pt-6 md:pt-12">
      <div className="pb-6 px-6 md:px-0 md:pb-10">
        <div>
          <div className="logoFont text-darkBlue text-2xl md:text-3xl lg:text-4xl pb-6">
            {data?.title}
          </div>
          <div className="text-gray-700 text-xl pb-3 md:text-xl lg:text-2xl">
            {data?.subtitle1}
          </div>
        </div>
      </div>
      <div className="pb-8">
        <Image
          src={data?.mainImage as string}
          width={600}
          height={339}
          alt="image"
          layout="responsive"
        />
      </div>
      <div className="px-5 md:px-0">
        <BlogPostMarkup
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />

        <div className="flex items-center justify-center py-6">
          <Link href={"/contact"}>
            <>
              <button className="text-center font-semibold p-3 px-4 flex items-center justify-center space-x-2 border-orange border-2 rounded-full text-orange hover:bg-orange hover:text-white">
                <Image src={logo} alt="logo" width={30} height={30} />
                <p>Contact Us</p>
              </button>
            </>
          </Link>
        </div>
      </div>
    </div>
  );
}
