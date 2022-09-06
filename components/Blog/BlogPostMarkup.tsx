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
        <li className="text-xl text-gray-700">
          {data?.blogPost?.tableContents1}
        </li>
        <li className="text-gray-700 text-xl">
          {data?.blogPost?.tableContents2}
        </li>
        <li className="text-xl text-gray-700">
          {data?.blogPost?.tableContents3}
        </li>
        <li className="text-gray-700 text-xl">
          {data?.blogPost?.tableContents4}
        </li>
      </ul>

      <div className="flex-col space-y-8 py-6">
        <p className="text-gray-600 text-lg">{data?.blogPost?.p1}</p>
        <p className="text-gray-600 text-lg">{data?.blogPost?.p2}</p>
        <p className="text-gray-600 text-lg">{data?.blogPost?.p3}</p>
      </div>
      <h2 className="logoFont text-gray-600 text-2xl pb-3 pt-12 ">
        {data?.blogPost?.subtitle2}
      </h2>
      <p className="text-gray-600 py-4 text-xl">{data?.blogPost?.p4}</p>
      <p className="text-gray-600 py-4 text-xl">{data?.blogPost?.p5}</p>
      <ul>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.blogPost?.l1}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.blogPost?.l2}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.blogPost?.l3}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.blogPost?.l4}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-start space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.blogPost?.l5}</p>
          </div>
        </li>
      </ul>
      <h2 className="text-2xl logoFont text-gray-600  pb-3 pt-12 ">
        {data?.blogPost?.subtitle3}
      </h2>
      <p className="text-gray-600 py-4 text-xl">{data?.blogPost?.p6}</p>
      <p className="text-gray-600 py-4 text-xl">{data?.blogPost?.p7}</p>
      <p className="text-gray-600 py-4 text-xl">
        {data?.blogPost?.conclusion1}
      </p>
      <p className="text-gray-600 py-4 text-xl">
        {data?.blogPost?.conclusion2}
      </p>
      <p className="text-gray-600 py-4 text-xl">
        {data?.blogPost?.conclusion3}
      </p>
    </div>
  );
}
