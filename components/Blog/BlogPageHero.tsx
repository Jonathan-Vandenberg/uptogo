import Link from "next/link";
import Image from "next/image";
import image from "../../public/navDropdownImages/asianMale.jpg";
import {
  BlogPost,
  SoftwareDevelopment,
  SoftwareDevelopmentQuery,
} from "../../types";
import { MouseEventHandler, useEffect, useState } from "react";

interface IProps {
  data: BlogPost | SoftwareDevelopment | undefined | null;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // setSlug("/blog/" + data?.id);

  return (
    <div className="bg-body md:px-10 p-4 md:p-0 md:my-6 md:flex-row flex-col-reverse flex items-center justify-center">
      <div className="bg-body p-7 flex items-start flex-col justify-start w-full h-full md:w-2/5 pt-6 md:pt-16">
        <p className="text-gray-400 -mb-4 md:-mb-6 md:text-lg">
          INFORMATION TECHNOLOGY
        </p>
        <h1 className="text-gray-700 logoFont text-3xl py-6 md:py-12 leading-12">
          {data?.title}
        </h1>
        <Link href={slug} className="">
          <div>
            <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange">
              READ MORE
            </p>
          </div>
        </Link>
        <p className="pt-4 text-2xl text-gray-600">{data?.subtitle1}</p>
      </div>
      <div className="w-full md:w-3/5 bg-red-100">
        <Image
          src="https://picsum.photos/600/400/?grayscale"
          alt="blog Image"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </div>
  );
}
