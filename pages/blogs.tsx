import BlogPageHero from "../components/Blog/BlogPageHero";
import Link from "next/link";
import { useBlogPostsQuery } from "../types";

export default function App() {
  const { data, loading, error } = useBlogPostsQuery();
  return (
    <>
      {data?.blogPosts?.map((post) => (
        <div key={post?.id}>
          <BlogPageHero data={post} />
        </div>
      ))}
    </>
  );
}
