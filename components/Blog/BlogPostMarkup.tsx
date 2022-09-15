import CheckIcon from "@mui/icons-material/Check";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { MdAddCircleOutline, MdDeleteForever } from "react-icons/md";
import type {
  Ai,
  Blockchain,
  BlogPost,
  BusinessAnalysis,
  CloudComputing,
  ComputerNetworking,
  DataManagement,
  GameProgramming,
  It,
  MachineLearning,
  SoftwareDevelopment,
  Telecommunication,
  WebDevelopment,
} from "../../types";
import EmailButton from "../UI/EmailButton";

interface IProps {
  data:
    | It
    | BlogPost
    | Telecommunication
    | BusinessAnalysis
    | CloudComputing
    | ComputerNetworking
    | SoftwareDevelopment
    | GameProgramming
    | WebDevelopment
    | MachineLearning
    | DataManagement
    | Blockchain
    | Ai
    | undefined
    | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogPostMarkup({
  data,
  handleAdd,
  handleEdit,
}: IProps) {
  const { data: session, status } = useSession();

  return (
    <div>
      <ul className="border-y-2 border-gray-200 py-6 flex flex-col items-start justify-start space-y-5">
        <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
          <div>
            <AiTwotoneCheckCircle size={15} color="orange" />
          </div>
          <p>{data?.tableContents1}</p>
        </li>
        <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
          <div>
            <AiTwotoneCheckCircle size={15} color="orange" />
          </div>
          <p>{data?.tableContents2}</p>
        </li>
        <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
          <div>
            <AiTwotoneCheckCircle size={15} color="orange" />
          </div>
          <p>{data?.tableContents3}</p>
        </li>
        <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
          <div>
            <AiTwotoneCheckCircle size={15} color="orange" />
          </div>
          <p>{data?.tableContents4}</p>
        </li>
      </ul>

      <div className="flex-col space-y-8 py-6">
        <p className="text-gray-600 text-xl">{data?.p1}</p>
        <p className="text-gray-600 text-xl">{data?.p2}</p>
        <p className="text-gray-600 text-xl">{data?.p3}</p>
      </div>
      <EmailButton />
      <h2 className="logoFont text-gray-600 text-2xl pb-3 pt-6 ">
        {data?.subtitle2}
      </h2>
      <p className="text-gray-600 py-4 text-xl">{data?.p4}</p>
      <p className="text-gray-600 py-4 text-xl">{data?.p5}</p>
      <ul>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-1tart space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.l1}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-1tart space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.l2}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-1tart space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.l3}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-1tart space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.l4}</p>
          </div>
        </li>
        <li className="py-4 text-xl">
          <div className="flex items-center justify-1tart space-x-5">
            <CheckIcon className="text-green-500" fontSize="large" />
            <p className="text-gray-600">{data?.l5}</p>
          </div>
        </li>
      </ul>
      <h2 className="text-2xl logoFont text-gray-600  pb-3 pt-12 ">
        {data?.subtitle3}
      </h2>
      <p className="text-gray-600 py-4 text-xl">{data?.p6}</p>
      <p className="text-gray-600 py-4 text-xl">{data?.p7}</p>
      <p className="text-gray-600 py-4 text-xl">{data?.conclusion1}</p>
      <p className="text-gray-600 py-4 text-xl">{data?.conclusion2}</p>
      <p className="text-gray-600 py-4 text-xl">{data?.conclusion3}</p>
      {data?.reference1 && (
        <p className="text-gray-500 py-1 text">Reference: {data?.reference1}</p>
      )}
      {data?.reference2 && (
        <p className="text-gray-500 py-1 text">Reference: {data?.reference2}</p>
      )}
      {session?.user?.email === "urbangentryjo@gmail.com" && (
        <div className="flex space-x-5 justify-center items-center py-6">
          <div className="flex items-center space-x-1" onClick={handleEdit}>
            <div className="text-xl">
              <FaEdit size={25} className="text-orange" />
            </div>
            <p className="text-lg text-orange">Edit</p>
          </div>
          <div className="flex items-center space-x-1" onClick={handleAdd}>
            <div className="text-xl text-green-600">
              <MdAddCircleOutline size={25} />
            </div>
            <p className="text-lg text-green-600">Add</p>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-xl">
              <MdDeleteForever size={25} className="text-red-500" />
            </div>
            <p className="text-lg text-red-500">Delete</p>
          </div>
        </div>
      )}
    </div>
  );
}
