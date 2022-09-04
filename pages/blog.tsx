import { useBlogPostQuery } from "../types";
import BlogPostMarkup from "../components/UI/BlogPostMarkup";
import React from "react";

export default function Blog() {
  const { data, loading, error } = useBlogPostQuery({
    variables: {
      id: "6314ab424504dd6cae765ffa",
    },
  });
  return <BlogPostMarkup data={data} />;
}
