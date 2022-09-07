import BlogPageHero from "../components/Blog/BlogPageHero";
import Link from "next/link";
import { useBlogCardQuery, useBlogPostsQuery } from "../types";

export default function App() {
  const { data, loading, error } = useBlogCardQuery();
  console.log(data);
  return (
    <>
      {data?.blogCard?.map((post) => (
        <div key={post?.id}>
          <BlogPageHero data={post} />
        </div>
      ))}
    </>
  );
}
