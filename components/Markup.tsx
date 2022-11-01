import CheckIcon from "@mui/icons-material/Check";
import { useSession } from "next-auth/react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdAddCircleOutline, MdDeleteForever } from "react-icons/md";
import type {
  Acting,
  AgedCare,
  AgribusinessManagement,
  Ai,
  Animation3D,
  Automotive,
  Baking,
  BankingManagement,
  Beauty,
  Blockchain,
  BlogPost,
  BusinessAnalysis,
  BusinessManagement,
  Carpentry,
  CloudComputing,
  ComputerNetworking,
  Construction,
  Cookery,
  DataManagement,
  Dental,
  Design,
  DigitalMedia,
  Education,
  Events,
  FashionDesign,
  Film,
  Fitness,
  GameProgramming,
  GraphicDesign,
  Hairdressing,
  Health,
  Horticulture,
  Hospitality,
  HospitalityManagement,
  HotelManagement,
  HumanResources,
  InteriorDesign,
  IntlBusiness,
  It,
  Landscape,
  LeadershipManagement,
  MachineLearning,
  Management,
  Massage,
  Medicine,
  MentalHealth,
  Music,
  Nursing,
  Nutrition,
  ProjectManagement,
  PublicHealth,
  SocialMediaMarketing,
  SoftwareDevelopment,
  SportDevelopment,
  SupplyManagement,
  Telecommunication,
  Trades,
  TravelTourism,
  Veterinary,
  WebDevelopment,
  Yoga,
  CurrentEvent,
  Guidance,
} from "../types";
import EmailButton from "./UI/EmailButton";
import { useAppSelector } from "../redux-hooks/hooks";
import ThreeD from "./UI/ThreeD";

interface IProps {
  data:
    | CurrentEvent
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
    | Design
    | Music
    | Landscape
    | FashionDesign
    | Film
    | GraphicDesign
    | InteriorDesign
    | DigitalMedia
    | Acting
    | Animation3D
    | Health
    | AgedCare
    | Nutrition
    | Nursing
    | Veterinary
    | Medicine
    | PublicHealth
    | Dental
    | Massage
    | MentalHealth
    | Baking
    | Cookery
    | HospitalityManagement
    | HotelManagement
    | TravelTourism
    | Events
    | Automotive
    | Beauty
    | Construction
    | Carpentry
    | Education
    | Fitness
    | Hairdressing
    | Horticulture
    | SportDevelopment
    | Yoga
    | ProjectManagement
    | BusinessManagement
    | HumanResources
    | BankingManagement
    | IntlBusiness
    | SocialMediaMarketing
    | AgribusinessManagement
    | SupplyManagement
    | LeadershipManagement
    | Hospitality
    | Management
    | Trades
    | Guidance
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
  console.log(session?.user?.email);
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div>
      <ul className="border-y-2 border-gray-200 py-6 flex flex-col items-start justify-start space-y-5">
        {data?.tableContents1 && (
          <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
            <div>
              <AiTwotoneCheckCircle size={14} color="orange" />
            </div>
            <a
              href="#subtitle1"
              className="underline underline-offset-1 decoration-[2px] decoration-orange"
            >
              {data?.tableContents1}
            </a>
          </li>
        )}
        {data?.tableContents2 && (
          <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
            <div>
              <AiTwotoneCheckCircle size={14} color="orange" />
            </div>
            <a
              className="underline underline-offset-1 decoration-[2px] decoration-orange"
              href="#subtitle2"
            >
              {data?.tableContents2}
            </a>
          </li>
        )}
        {data?.tableContents3 && (
          <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
            <div>
              <AiTwotoneCheckCircle size={14} color="orange" />
            </div>
            <a
              className="underline underline-offset-1 decoration-[2px] decoration-orange"
              href="#subtitle3"
            >
              {data?.tableContents3}
            </a>
          </li>
        )}
        {data?.tableContents4 && (
          <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
            <div>
              <AiTwotoneCheckCircle size={14} color="orange" />
            </div>
            <a
              href="#subtitle4"
              className="underline underline-offset-1 decoration-[2px] decoration-orange"
            >
              {data?.tableContents4}
            </a>
          </li>
        )}
      </ul>

      <div className="flex-col space-y-8 py-6">
        {data?.p1 && <p className="text-gray-600 text-xl">{data?.p1}</p>}
        {data?.p2 && <p className="text-gray-600 text-xl">{data?.p2}</p>}
        {data?.p3 && <p className="text-gray-600 text-xl">{data?.p3}</p>}
      </div>

      {data?.subtitle1 && (
        <div className="py-6">
          <EmailButton />
        </div>
      )}

      {data?.subtitle2 && (
        <h2
          id="subtitle2"
          className="logoFont text-gray-600 text-2xl pb-3 pt-6 scroll-mt-20"
        >
          {data?.subtitle2}
        </h2>
      )}
      {data?.p4 && <p className="text-gray-600 py-4 text-xl">{data?.p4}</p>}
      {data?.p5 && <p className="text-gray-600 py-4 text-xl">{data?.p5}</p>}
      <ul>
        {data?.l1 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <CheckIcon className="text-green-500" fontSize="large" />
              <p className="text-gray-600">{data?.l1}</p>
            </div>
          </li>
        )}
        {data?.l2 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <CheckIcon className="text-green-500" fontSize="large" />
              <p className="text-gray-600">{data?.l2}</p>
            </div>
          </li>
        )}
        {data?.l3 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <CheckIcon className="text-green-500" fontSize="large" />
              <p className="text-gray-600">{data?.l3}</p>
            </div>
          </li>
        )}
        {data?.l4 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <CheckIcon className="text-green-500" fontSize="large" />
              <p className="text-gray-600">{data?.l4}</p>
            </div>
          </li>
        )}
        {data?.l5 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <CheckIcon className="text-green-500" fontSize="large" />
              <p className="text-gray-600">{data?.l5}</p>
            </div>
          </li>
        )}
      </ul>
      {data?.subtitle3 && (
        <h2
          id="subtitle3"
          className="text-2xl logoFont text-gray-600  pb-3 pt-12 scroll-mt-20"
        >
          {data?.subtitle3}
        </h2>
      )}
      {data?.p6 && <p className="text-gray-600 py-4 text-xl">{data?.p6}</p>}
      {data?.p7 && <p className="text-gray-600 py-4 text-xl">{data?.p7}</p>}
      <ul>
        {data?.l6 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l6}</p>
            </div>
          </li>
        )}
        {data?.l7 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l7}</p>
            </div>
          </li>
        )}
        {data?.l8 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l8}</p>
            </div>
          </li>
        )}
        {data?.l9 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l9}</p>
            </div>
          </li>
        )}
        {data?.l10 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l10}</p>
            </div>
          </li>
        )}
        {data?.l11 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l11}</p>
            </div>
          </li>
        )}
        {data?.l12 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l12}</p>
            </div>
          </li>
        )}
        {data?.l13 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l13}</p>
            </div>
          </li>
        )}
        {data?.l14 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l14}</p>
            </div>
          </li>
        )}
        {data?.l15 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <BsCircleFill
                  size={14}
                  className="text-darkBlue"
                  fontSize="large"
                />
              </div>
              <p className="text-gray-600">{data?.l15}</p>
            </div>
          </li>
        )}
      </ul>
      {data?.p8 && <p className="text-gray-600 py-4 text-xl">{data?.p8}</p>}
      {data?.subtitle4 && (
        <p
          id="subtitle4"
          className="logoFont text-gray-600 text-2xl pb-3 pt-6 scroll-mt-20"
        >
          {data?.subtitle4}
        </p>
      )}
      {data?.category === "ANIMATION_3D" && (
        <div className="flex items-center justify-center">
          <ThreeD />
        </div>
      )}

      {data?.conclusion1 && (
        <p className="text-gray-600 py-4 text-xl">{data?.conclusion1}</p>
      )}
      {data?.conclusion2 && (
        <p className="text-gray-600 py-4 text-xl">{data?.conclusion2}</p>
      )}
      <p className="text-gray-600 py-4 text-xl">{data?.conclusion3}</p>
      {data?.reference1 && (
        <p className="text-gray-500 py-1 text">Reference: {data?.reference1}</p>
      )}
      {data?.reference2 && (
        <p className="text-gray-500 py-1 text">Reference: {data?.reference2}</p>
      )}
      {session?.user?.email ===
        ("urbangentryjon@gmail.com" || "streetfighter010812@gmail.com") && (
        <div className="flex space-x-5 justify-center items-center py-6">
          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="p-2 text-lg">Nhấp một lần và cuộn xuống</p>
            <div className="flex items-center space-x-1" onClick={handleEdit}>
              <div className="text-xl cursor-pointer">
                <FaEdit size={25} className="text-red-600" />
              </div>
              <p className="text-lg text-red-600 cursor-pointer">
                {translate ? "Edit" : "Chỉnh Sửa"}
              </p>
            </div>
          </div>
          {data?.category === "BLOG" && (
            <div className="flex items-center space-x-1" onClick={handleAdd}>
              <div className="text-xl text-green-600">
                <MdAddCircleOutline size={25} />
              </div>
              <p className="text-lg text-green-600">
                {translate ? "Add" : "Cộng"}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
