import { BlogPostQuery } from "../../types";
import InitDivider from "../UI/InitDivider";
import BlogHeader from "./BlogHeader";
import BlogPostMarkup from "./BlogPostMarkup";

interface IProps {
  data: BlogPostQuery | undefined | null;
}

export default function BlogMain({ data }: IProps) {
  return (
    <>
      <div className="md:hidden">
        <InitDivider color="blue" />
      </div>
      <BlogHeader data={data} />
      <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
        <BlogPostMarkup data={data} />
      </div>
    </>
  );
}
