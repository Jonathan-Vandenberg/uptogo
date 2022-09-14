import BlogPageHero from "../components/Blog/BlogPageHero";
import Link from "next/link";
import { useBlogCardQuery, useBlogPostsQuery } from "../types";

export default function App() {
  const { data, loading, error } = useBlogCardQuery();
  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      {data?.blogCard?.map((post) => (
        <div key={post?.id} className="w-full">
          <BlogPageHero data={post} />
        </div>
      ))}
    </div>
  );
}
