import {
  Ai,
  Blockchain,
  BlogPost,
  BusinessAnalysis,
  CloudComputing,
  ComputerNetworking,
  DataManagement,
  GameProgramming,
  ItQuery,
  MachineLearning,
  SoftwareDevelopment,
  Telecommunication,
  WebDevelopment,
} from "../../types";
import BlogHeader from "./BlogHeader";
import BlogPostMarkup from "./BlogPostMarkup";

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
      <BlogHeader data={data} />
      <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
        <BlogPostMarkup
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      </div>
    </>
  );
}
