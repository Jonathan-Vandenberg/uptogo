import { useBlogPostQuery } from "../types";
import BlogPostMarkup from "../components/UI/BlogPostMarkup";
import React from "react";

export default function Blog() {
  const { data, loading, error } = useBlogPostQuery({
    variables: {
      id: "6314be035b996f218b45c1c6",
    },
  });
  return <BlogPostMarkup data={data} />;
}
