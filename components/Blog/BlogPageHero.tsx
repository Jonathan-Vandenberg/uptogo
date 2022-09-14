import Link from "next/link";
import Image from "next/image";
import image from "../../public/navDropdownImages/asianMale.jpg";
import {
  Ai,
  Blockchain,
  BlogPost,
  BusinessAnalysis,
  CloudComputing,
  ComputerNetworking,
  DataManagement,
  GameProgramming,
  MachineLearning,
  SoftwareDevelopment,
  Telecommunication,
  WebDevelopment,
} from "../../types";
import { useEffect, useState } from "react";

interface IProps {
  data:
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
}

enum CategoriesEnum {
  Acting = "ACTING",
  AgedCare = "AGED_CARE",
  AgribusinessManagement = "AGRIBUSINESS_MANAGEMENT",
  Ai = "AI",
  Animation_3D = "ANIMATION_3D",
  Automotive = "AUTOMOTIVE",
  Baking = "BAKING",
  BankingManagement = "BANKING_MANAGEMENT",
  Beauty = "BEAUTY",
  BlockchainTech = "BLOCKCHAIN_TECH",
  Blog = "BLOG",
  BusinessAnalysis = "BUSINESS_ANALYSIS",
  BusinessManagement = "BUSINESS_MANAGEMENT",
  Carpentry = "CARPENTRY",
  CloudComputing = "CLOUD_COMPUTING",
  CommercialCooking = "COMMERCIAL_COOKING",
  ComputerNetworking = "COMPUTER_NETWORKING",
  Construction = "CONSTRUCTION",
  DataManagement = "DATA_MANAGEMENT",
  Dental = "DENTAL",
  DigitalMedia = "DIGITAL_MEDIA",
  Education = "EDUCATION",
  Events = "EVENTS",
  FashionDesign = "FASHION_DESIGN",
  FilmMedia = "FILM_MEDIA",
  Fitness = "FITNESS",
  GameProgramming = "GAME_PROGRAMMING",
  GraphicDesign = "GRAPHIC_DESIGN",
  Haridressing = "HARIDRESSING",
  HopitalityManagement = "HOPITALITY_MANAGEMENT",
  Horticulture = "HORTICULTURE",
  HumanResources = "HUMAN_RESOURCES",
  InteriorDesign = "INTERIOR_DESIGN",
  InternationalBusiness = "INTERNATIONAL_BUSINESS",
  IntlHotelManagement = "INTL_HOTEL_MANAGEMENT",
  Landscape = "LANDSCAPE",
  LeadershipManagement = "LEADERSHIP_MANAGEMENT",
  MachineLearning = "MACHINE_LEARNING",
  Massage = "MASSAGE",
  Medicine = "MEDICINE",
  MentalHealth = "MENTAL_HEALTH",
  MusicAudio = "MUSIC_AUDIO",
  Nursing = "NURSING",
  Nutrition = "NUTRITION",
  ProjectManagement = "PROJECT_MANAGEMENT",
  PublicHealth = "PUBLIC_HEALTH",
  SocialmediaMarketing = "SOCIALMEDIA_MARKETING",
  SoftwareDevelopment = "SOFTWARE_DEVELOPMENT",
  Sport = "SPORT",
  SupplychainManagement = "SUPPLYCHAIN_MANAGEMENT",
  Telecommunication = "TELECOMMUNICATION",
  TravelTourism = "TRAVEL_TOURISM",
  Vetenary = "VETENARY",
  WebDevelopment = "WEB_DEVELOPMENT",
  Yoga = "YOGA",
}

export default function App({ data }: IProps) {
  const [c, setC] = useState(data?.category);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (c === CategoriesEnum.SoftwareDevelopment) {
      setSlug(
        ("/courses/information-technology/software-development/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.Ai) {
      setSlug(
        ("/courses/information-technology/artificial-intelligence/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.BlockchainTech) {
      setSlug(
        ("/courses/information-technology/blockchain-technology/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.DataManagement) {
      setSlug(
        ("/courses/information-technology/data-management/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.MachineLearning) {
      setSlug(
        ("/courses/information-technology/machine-learning/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.WebDevelopment) {
      setSlug(
        ("/courses/information-technology/web-development/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.GameProgramming) {
      setSlug(
        ("/courses/information-technology/game-programming/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.Telecommunication) {
      setSlug(
        ("/courses/information-technology/telecommunication/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.CloudComputing) {
      setSlug(
        ("/courses/information-technology/cloud-computing/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.BusinessAnalysis) {
      setSlug(
        ("/courses/information-technology/business-analysis/articles/" +
          data?.id) as string
      );
    }
    if (c === CategoriesEnum.ComputerNetworking) {
      setSlug(
        ("/courses/information-technology/computer-networking/articles/" +
          data?.id) as string
      );
    } else setSlug("/blog/" + data?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto w-full h-full">
      <div className="bg-body md:px-10 pb-6 md:p-0 md:my-6 md:flex-row flex-col-reverse flex items-center justify-center">
        <div className="bg-body px-4 flex items-start flex-col justify-start w-full h-full md:w-2/5 pt-6 md:pt-16">
          <p className="text-gray-400 -mb-4 md:-mb-6 md:text-lg">
            INFORMATION TECHNOLOGY
          </p>
          <h1 className="text-gray-700 logoFont text-3xl py-6 md:py-12 leading-12">
            {data?.title}
          </h1>
          <p className="text-2xl text-gray-600 line-clamp-3">
            {data?.subtitle1}
          </p>
          <Link href={slug} className="">
            <p className="text-xl text-center pt-6 text-gray-700 text-thin border-b-8 border-orange">
              READ MORE
            </p>
          </Link>
        </div>
        <div className="w-full md:w-3/5 bg-red-100">
          <Image
            src="https://picsum.photos/id/192/600/400"
            alt="blog Image"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
