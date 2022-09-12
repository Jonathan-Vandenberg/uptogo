import CheckIcon from "@mui/icons-material/Check";
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
import { useSession } from "next-auth/react";
import { useState } from "react";

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
  const [showAdmin, setShowAdmin] = useState(true);
  const { data: session, status } = useSession();

  session?.user?.email === "jonvdberg8@gmail.com" ? setShowAdmin(true) : null;
  return (
    <div>
      <ul className="border-b-2 border-gray-200 py-6 flex flex-col items-start justify-start space-y-2">
        <li className="text-xl text-gray-700">{data?.tableContents1}</li>
        <li className="text-gray-700 text-xl">{data?.tableContents2}</li>
        <li className="text-xl text-gray-700">{data?.tableContents3}</li>
        <li className="text-gray-700 text-xl">{data?.tableContents4}</li>
      </ul>

      <div className="flex-col space-y-8 py-6">
        <p className="text-gray-600 text-lg">{data?.p1}</p>
        <p className="text-gray-600 text-lg">{data?.p2}</p>
        <p className="text-gray-600 text-lg">{data?.p3}</p>
      </div>
      <h2 className="logoFont text-gray-600 text-2xl pb-3 pt-12 ">
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
      {showAdmin && (
        <div className="flex space-x-5 justify-center items-center">
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
