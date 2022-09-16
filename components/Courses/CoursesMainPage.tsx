import Link from "next/link";
import {
  Acting,
  Ai,
  Animation3D,
  Blockchain,
  BlogPost,
  BusinessAnalysis,
  CloudComputing,
  ComputerNetworking,
  DataManagement,
  Design,
  DigitalMedia,
  FashionDesign,
  Film,
  GameProgramming,
  GraphicDesign,
  InteriorDesign,
  It,
  Landscape,
  MachineLearning,
  Music,
  SoftwareDevelopment,
  Telecommunication,
  WebDevelopment,
} from "../../types";
import BlogPostMarkup from "../Blog/BlogPostMarkup";
import Image from "next/image";
import EmailButton from "../UI/EmailButton";

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
    | Design
    | Music
    | Landscape
    | FashionDesign
    | Film
    | GraphicDesign
    | InteriorDesign
    | DigitalMedia
    | Acting
    | Animation3D
    | undefined
    | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogMain({ data, handleEdit, handleAdd }: IProps) {
  return (
    <div className="max-w-[678px] md:max-w-[900px] mx-auto md:pt-12 pb-8">
      <div className="pb-6 px-6 md:px-0 md:pb-10">
        <div className="logoFont text-darkBlue text-2xl md:text-3xl lg:text-4xl pb-6 ">
          {data?.title}
        </div>
      </div>
      <div className="pb-8 block">
        <Image
          src={data?.mainImage || "https://picsum.photos/id/120/600/338"}
          width={600}
          height={339}
          alt="image"
          layout="responsive"
        />
      </div>
      <div className="pb-6 px-6 md:px-0 md:pb-10">
        <div
          id="subtitle1"
          className="text-gray-700 text-xl pb-3 md:text-xl lg:text-2xl scroll-mt-20"
        >
          {data?.subtitle1}
        </div>
      </div>
      <div className="px-5 md:px-0">
        <BlogPostMarkup
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />

        <EmailButton />
      </div>
    </div>
  );
}
