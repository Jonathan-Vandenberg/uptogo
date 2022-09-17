import { PrismaClient } from "@prisma/client";
import BlogPageHero from "../components/Blog/BlogPageHero";
import { BlogPost } from "../types";

interface IProps {
  data: BlogPost[];
}

export default function App({ data }: IProps) {
  return (
    <div className="flex flex-col space-y-12 mx-auto md:py-20">
      {data?.map((post) => (
        <div key={post?.id} className="w-full">
          <BlogPageHero data={post} />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const data = await prisma.blogPost.findMany();

  return {
    props: {
      data,
    },
  };
}
