import Image from "next/image";
import image1 from "../../public/Subjects/IT/QUẢN-LÝ-DỰ-ÁN-1-600x400.png";
import TopDivider from "../UI/TopDivider";
import type { BlogPostQuery } from "../../types";

interface IProps {
  data: BlogPostQuery | null | undefined;
}

export default function BlogPostMarkup({ data }: IProps) {
  return (
    <div className="">
      <div>
        <div className="md:pt-12 flex items-center justify-center bg-blue">
          <Image
            src={image1}
            width={600}
            height={400}
            alt="IT image"
            className="rounded-md"
          />
        </div>
        <TopDivider color="blue" />
        <div className="px-10 container mx-auto">
          <h1 className="text-2xl font-semibold pb-3">
            {data?.blogPost?.title}
          </h1>
          <h2 className=" py-4 text-xl">{data?.blogPost?.subtitle1}</h2>

          <ul>
            <li className="list-disc py-4 text-xl">
              {data?.blogPost?.tableContents1}
            </li>
            <li className="list-disc py-4 text-xl">
              {data?.blogPost?.tableContents2}
            </li>
            <li className="list-disc py-4 text-xl">
              {data?.blogPost?.tableContents3}
            </li>
            <li className="py-4 text-xl list-disc">
              {data?.blogPost?.tableContents4}
            </li>
            <li className="list-disc py-4 text-xl">
              {data?.blogPost?.tableContents5}
            </li>
          </ul>

          <p className=" py-4 text-xl">{data?.blogPost?.p1}</p>
          <p className=" py-4 text-xl">{data?.blogPost?.p2}</p>
          <p className=" py-4 text-xl">{data?.blogPost?.p3}</p>
          <h2 className="text-2xl font-semibold pb-3 pt-12 ">
            {data?.blogPost?.subtitle2}
          </h2>
          <p className=" py-4 text-xl">{data?.blogPost?.p4}</p>
          <p className=" py-4 text-xl">{data?.blogPost?.p5}</p>
          <ul>
            <li className="list-disc py-4 text-xl">{data?.blogPost?.l1}</li>
            <li className="list-disc py-4 text-xl">{data?.blogPost?.l2}</li>
            <li className="list-disc py-4 text-xl">{data?.blogPost?.l3}</li>
            <li className="py-4 text-xl dec">{data?.blogPost?.l4}</li>
            <li className="list-disc py-4 text-xl">{data?.blogPost?.l5}</li>
          </ul>
          <h2 className="text-2xl font-semibold pb-3 pt-12 ">
            {data?.blogPost?.subtitle3}
          </h2>
          <p className=" py-4 text-xl">{data?.blogPost?.p6}</p>
          <p className=" py-4 text-xl">{data?.blogPost?.p7}</p>
          <p className=" py-4 text-xl">{data?.blogPost?.conclusion1}</p>
          <p className=" py-4 text-xl">{data?.blogPost?.conclusion2}</p>
          <p className=" py-4 text-xl">{data?.blogPost?.conclusion3}</p>
        </div>
      </div>
    </div>
  );
}
