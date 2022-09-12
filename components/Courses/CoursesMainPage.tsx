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
    <>
      <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
        <div>
          <div>
            <div>{data?.title}</div>
            <div>{data?.subtitle1}</div>
          </div>
          <div>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
        <BlogPostMarkup
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      </div>
    </>
  );
}
