import { AiOutlineCheck } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { GrCheckmark } from "react-icons/gr";
import type { BlogPostQuery } from "../../types";
import CheckIcon from "@mui/icons-material/Check";

interface IProps {
  data: BlogPostQuery | null | undefined;
}

export default function BlogPostMarkup({ data }: IProps) {
  return (
    <div>
      <ul className="border-b-2 border-gray-200 py-6 flex flex-col items-start justify-start space-y-2">
        <li className="text-lg">{data?.blogPost?.tableContents1}</li>
        <li className="text-lg">{data?.blogPost?.tableContents2}</li>
        <li className="text-lg">{data?.blogPost?.tableContents3}</li>
        <li className="text-lg">{data?.blogPost?.tableContents4}</li>
        <li className="text-lg">{data?.blogPost?.tableContents5}</li>
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
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p>{data?.blogPost?.l1}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p>{data?.blogPost?.l2}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p>{data?.blogPost?.l3}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p>{data?.blogPost?.l4}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p>{data?.blogPost?.l5}</p>
          </div>
        </li>
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
  );
}
