import Image from "next/image";
import type { BlogPost, SoftwareDevelopment } from "../../types";
import { Avatar } from "@mui/material";
import { GrCheckmark } from "react-icons/gr";

interface IProps {
  data: BlogPost | SoftwareDevelopment | null | undefined;
}

const BlogHeader = ({ data }: IProps) => {
  return (
    <div className="bg-gradient-to-b from-bgGradientStart to-white md:pt-4">
      <div className="max-w-[640px] px-5 md:max-w-[900px] mx-auto">
        {data?.title && (
          <h1 className="logoFont text-3xl py-4 text-gray-700 font-semibold md:text-5xl">
            {data?.title}
          </h1>
        )}
        {data?.subtitle1 && (
          <h2 className="py-2 text-lg text-gray-500">{data?.subtitle1}</h2>
        )}
        <div className="flex flex-col items-start justify-center md:flex-row md:justify-between p-3 mb-8">
          <div>
            <div className="flex items-center justify-start space-x-3 pb-3">
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://picsum.photos/32/32"
                alt="Avatar name"
              />
              <div className="flex items-start flex-col justify-start">
                {data?.authorName && (
                  <>
                    <p className="text-gray-700">By {data?.authorName}</p>
                  </>
                )}
                {data?.publishedDate && (
                  <p className="text-xs text-gray-500">
                    Published {data?.publishedDate}
                  </p>
                )}
              </div>
            </div>
          </div>
          {data?.editedBy && (
            <div className="flex items-center justify-start space-x-1">
              <GrCheckmark />
              <p className="text-xs text-gray-500">Edited by</p>
              <p className="text-gray-700">{data?.editedBy}</p>
            </div>
          )}
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
          {data?.photoCredit && (
            <p className="text-xs text-gray-500 mt-1">
              Image Credit: {data?.photoCredit}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
