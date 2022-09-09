import { BlogPostQuery, ItQuery } from "../../types";
import BlogHeader from "./BlogHeader";
import BlogPostMarkup from "./BlogPostMarkup";

interface IProps {
  data: BlogPostQuery | ItQuery | undefined | null;
}

export default function BlogMain({ data }: IProps) {
  return (
    <>
      <BlogHeader data={data} />
      <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
        <BlogPostMarkup data={data} />
      </div>
    </>
  );
}
