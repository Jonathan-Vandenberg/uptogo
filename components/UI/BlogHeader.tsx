import Image from "next/image";
import type { BlogPostQuery } from "../../types";
import { Avatar } from "@mui/material";
import { GrCheckmark } from "react-icons/gr";

interface IProps {
  data: BlogPostQuery | null | undefined;
}

const BlogHeader = ({ data }: IProps) => {
  return (
    <div className="bg-gradient-to-b from-bgGradientStart to-white md:pt-4">
      <div className="max-w-[640px] px-5 md:max-w-[900px] mx-auto">
        <h1 className="text-3xl py-4 text-gray-600 font-semibold md:text-5xl">
          {data?.blogPost?.title}
        </h1>
        <h2 className="py-2 text-lg text-gray-500">
          {data?.blogPost?.subtitle1}
        </h2>
        <div className="flex flex-col items-start justify-center md:flex-row md:justify-between p-3 mb-8">
          <div className="flex items-center justify-start space-x-3">
            <Avatar
              sx={{ width: 32, height: 32 }}
              src="../../public/avatar-Image.png"
              alt="Avatar name"
            />
            <div className="">
              <p className="text-gray-700">by Bernard Grant, Ph.D.</p>
              <p className="text-xs text-gray-500">
                Published September 2, 2022
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start space-x-1">
            <GrCheckmark />
            <p className="text-xs text-gray-500">Edited by</p>
            <p className="text-gray-700">{data?.blogPost?.authorName}</p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pb-12">
          <Image
            src={"https://picsum.photos/600/250"}
            width={600}
            height={250}
            alt="IT image"
            className="rounded-lg"
            layout="responsive"
          />
          <p className="text-xs text-gray-500 mt-1">
            Photo Credit: Pham Nguyen
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
