import { useBlogPostQuery } from "../types";
import BlogPostMarkup from "../components/UI/BlogPostMarkup";
import React from "react";
import TopDivider from "../components/UI/TopDivider";
import InitDivider from "../components/UI/InitDivider";
import BlogHeader from "../components/UI/BlogHeader";

export default function Blog() {
  const { data, loading, error } = useBlogPostQuery({
    variables: {
      id: "63156c7bde4a2b16eb02f02e",
    },
  });
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
