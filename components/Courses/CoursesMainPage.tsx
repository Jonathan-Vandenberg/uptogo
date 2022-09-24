import Spline from "@splinetool/react-spline";
import Image from "next/image";
import logo from "../../public/fullLogo.png";
import BlogPostMarkup from "../Blog/BlogPostMarkup";
import type {
  Ai,
  Blockchain,
  BlogPost,
  BusinessAnalysis,
  CloudComputing,
  ComputerNetworking,
  DataManagement,
  Design,
  GameProgramming,
  It,
  MachineLearning,
  SoftwareDevelopment,
  Telecommunication,
  WebDevelopment,
  Music,
  Acting,
  Animation3D,
  DigitalMedia,
  FashionDesign,
  Film,
  GraphicDesign,
  InteriorDesign,
  Landscape,
  AgedCare,
  AgribusinessManagement,
  Automotive,
  Baking,
  BankingManagement,
  Beauty,
  BusinessManagement,
  Carpentry,
  Construction,
  Cookery,
  Dental,
  Education,
  Events,
  Fitness,
  Hairdressing,
  Health,
  Horticulture,
  HospitalityManagement,
  HotelManagement,
  HumanResources,
  IntlBusiness,
  LeadershipManagement,
  Massage,
  Medicine,
  MentalHealth,
  Nursing,
  Nutrition,
  ProjectManagement,
  PublicHealth,
  SocialMediaMarketing,
  SportDevelopment,
  SupplyManagement,
  TravelTourism,
  Veterinary,
  Yoga,
  Hospitality,
  Management,
  Trades,
  CurrentEvent,
} from "../../types";
import UserInterestedForm from "../UserInterestedForm";
import { Suspense } from "react";

interface IFormProps {
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
    | CurrentEvent
    | undefined
    | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogMain({ data, handleEdit, handleAdd }: IFormProps) {
  const styles = data?.mainImage ? "pb-8 block" : "block p-20";

  return (
    <div className="max-w-[678px] md:max-w-[900px] mx-auto md:pt-12">
      <div className="pb-4 px-6 md:px-0 md:pb-10">
        <div className="logoFont text-darkBlue text-2xl md:text-3xl lg:text-4xl">
          {data?.title}
        </div>
      </div>
      {/* {data?.id === "632477c6ef7048971301fe08" ? (
        <div className="flex items-center justify-center">
          <Animation />
        </div>
      ) : ( */}

      <div className={styles}>
        <Image
          src={data?.mainImage || logo}
          width={data?.mainImage ? 600 : 300}
          height={data?.mainImage ? 339 : 300}
          alt="image"
          layout="responsive"
          priority
        />
      </div>

      {/* )} */}
      <div className="pb-6 px-6 md:px-0 md:pb-10">
        <div
          id="subtitle1"
          className="text-gray-700 text-xl pb-3 md:text-xl lg:text-2xl scroll-mt-20"
        >
          {data?.subtitle1}
        </div>
      </div>
      <div className="px-5 md:px-0">
        <BlogPostMarkup
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      </div>
      <UserInterestedForm
        handleClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
