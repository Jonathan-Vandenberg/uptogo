import { PrismaClient } from "@prisma/client";
import BlogPageHero from "../components/Blog/BlogPageHero";
import { BlogPost } from "../types";
import prisma from "../lib/prisma";
import Head from "next/head";

interface IProps {
  data: BlogPost[];
}

export default function App({ data }: IProps) {
  return (
    <>
      <Head>
        <title>Uptogo | The Easiest Way To Study Abroad</title>
        <meta
          name="description"
          content="Uptogo helps you study abroad 160char"
        />
        <link rel="shortcut icon" href="/uptogoFavicon.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="300char" />
        <meta property="og:url" content="https://www.uptogo.org/blogs" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://www.uptogo.org/fullLogo.png”"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Lotus Angel Logo of Uptogo" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:locale:alternate" content="en_GB" />
      </Head>
      <div className="flex flex-col space-y-12 mx-auto md:pt-20 container">
        {data?.map((post) => (
          <div key={post?.id} className="w-full">
            <BlogPageHero data={post} />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await prisma.blogPost.findMany();

  return {
    props: {
      data,
    },
  };
}
