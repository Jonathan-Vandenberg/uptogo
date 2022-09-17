import Link from "next/link";
import Image from "next/image";
import logo from "../../public/fullLogo.png";
import {
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
  HospitalityManagement,
  HotelManagement,
  HumanResources,
  InteriorDesign,
  IntlBusiness,
  Landscape,
  LeadershipManagement,
  MachineLearning,
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
  TravelTourism,
  Veterinary,
  WebDevelopment,
  Yoga,
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
  Design = "DESIGN",
  DigitalMedia = "DIGITAL_MEDIA",
  Education = "EDUCATION",
  Events = "EVENTS",
  FashionDesign = "FASHION_DESIGN",
  FilmMedia = "FILM_MEDIA",
  Fitness = "FITNESS",
  GameProgramming = "GAME_PROGRAMMING",
  GraphicDesign = "GRAPHIC_DESIGN",
  Haridressing = "HARIDRESSING",
  Health = "HEALTH",
  Hospitality = "HOSPITALITY",
  HopitalityManagement = "HOPITALITY_MANAGEMENT",
  Horticulture = "HORTICULTURE",
  HumanResources = "HUMAN_RESOURCES",
  InteriorDesign = "INTERIOR_DESIGN",
  InternationalBusiness = "INTERNATIONAL_BUSINESS",
  IntlHotelManagement = "INTL_HOTEL_MANAGEMENT",
  It = "IT",
  Landscape = "LANDSCAPE",
  LeadershipManagement = "LEADERSHIP_MANAGEMENT",
  MachineLearning = "MACHINE_LEARNING",
  Massage = "MASSAGE",
  Medicine = "MEDICINE",
  Mental_Health = "MENTAL_HEALTH",
  MusicAudio = "MUSIC_AUDIO",
  Nursing = "NURSING",
  Nutrition = "NUTRITION",
  ProjectManagement = "PROJECT_MANAGEMENT",
  Public_Health = "PUBLIC_HEALTH",
  SocialmediaMarketing = "SOCIALMEDIA_MARKETING",
  SoftwareDevelopment = "SOFTWARE_DEVELOPMENT",
  Sport = "SPORT",
  SupplychainManagement = "SUPPLYCHAIN_MANAGEMENT",
  Telecommunication = "TELECOMMUNICATION",
  TravelTourism = "TRAVEL_TOURISM",
  Trades = "TRADES",
  Veterinary = "VETERINARY",
  WebDevelopment = "WEB_DEVELOPMENT",
  Yoga = "YOGA",
}

export default function App({ data }: IProps) {
  const [c, setC] = useState(data?.category);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (c === CategoriesEnum.Blog) {
      setSlug("/blog/" + data?.id);
    }

    //* -------- Information Technology -------- *//

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
    }

    //* -------- Design -------- *//

    if (c === CategoriesEnum.MusicAudio) {
      setSlug("/courses/design/music/articles/" + data?.id);
    }
    if (c === CategoriesEnum.FashionDesign) {
      setSlug("/courses/design/fashion-design/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Landscape) {
      setSlug("/courses/design/landscape/articles/" + data?.id);
    }
    if (c === CategoriesEnum.FilmMedia) {
      setSlug("/courses/design/film/articles/" + data?.id);
    }
    if (c === CategoriesEnum.GraphicDesign) {
      setSlug("/courses/design/graphic-design/articles/" + data?.id);
    }
    if (c === CategoriesEnum.InteriorDesign) {
      setSlug("/courses/design/interior-design/articles/" + data?.id);
    }
    if (c === CategoriesEnum.DigitalMedia) {
      setSlug("/courses/design/digital-media/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Acting) {
      setSlug("/courses/design/acting/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Animation_3D) {
      setSlug("/courses/design/animation3d/articles/" + data?.id);
    }

    //* -------- Health -------- *//

    if (c === CategoriesEnum.AgedCare) {
      setSlug("/courses/health/aged-care/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Nutrition) {
      setSlug("/courses/health/nutrition/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Nursing) {
      setSlug("/courses/health/nursing/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Veterinary) {
      setSlug("/courses/health/veterinary/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Medicine) {
      setSlug("/courses/health/medicine/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Public_Health) {
      setSlug("/courses/health/public-health/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Dental) {
      setSlug("/courses/health/dental/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Massage) {
      setSlug("/courses/health/massage/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Mental_Health) {
      setSlug("/courses/health/mental-health/articles/" + data?.id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-5 md:px-0 max-w-[678px] md:max-w-[900px] mx-auto w-full h-full container">
      <div className="bg-body md:px-0 px-8  md:flex-row flex-col-reverse flex items-center justify-evenly">
        <div className="bg-body px-4 flex items-start flex-col justify-start w-full h-full md:w-2/5 py-6">
          <p className="text-gray-400 text-lg">{data?.category}</p>
          <div className="flex flex-col items-center justify-between space-y-5">
            <h1 className="text-gray-700 logoFont text-3xl leading-12">
              {data?.title}
            </h1>
            <p className="text-2xl text-gray-600 line-clamp-3">
              {data?.subtitle1}
            </p>
            <Link href={slug}>
              <p className="text-xl text-center text-gray-700 text-thin border-b-8 border-orange cursor-pointer">
                READ MORE
              </p>
            </Link>
          </div>
        </div>
        <div className="relative w-60 h-60 mt-6 md:my-6">
          <Image
            src={data?.mainImage || logo}
            alt="blog Image"
            layout="fill"
            priority
          />
        </div>
      </div>
    </div>
  );
}
