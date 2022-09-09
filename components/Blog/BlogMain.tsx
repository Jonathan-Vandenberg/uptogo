import { BlogPost, ItQuery, SoftwareDevelopment } from "../../types";
import BlogHeader from "./BlogHeader";
import BlogPostMarkup from "./BlogPostMarkup";

interface IProps {
  data: BlogPost | SoftwareDevelopment | undefined | null;
  handleUpdate: () => void;
}

export default function BlogMain({ data, handleUpdate }: IProps) {
  return (
    <>
      <BlogHeader data={data} />
      <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
        <BlogPostMarkup data={data} handleUpdate={handleUpdate} />
      </div>
    </>
  );
}
