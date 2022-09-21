import Link from "next/link";
import Image from "next/image";
import logo from "../../public/fullLogo.png";
import { useEffect, useState } from "react";
import { CategoriesEnum } from "../../lib/categories-enum";
import {
  BlogPost,
  Telecommunication,
  BusinessAnalysis,
  CloudComputing,
  ComputerNetworking,
  SoftwareDevelopment,
  GameProgramming,
  WebDevelopment,
  MachineLearning,
  DataManagement,
  Blockchain,
  Ai,
  Events,
  Music,
  Landscape,
  FashionDesign,
  Film,
  GraphicDesign,
  InteriorDesign,
  DigitalMedia,
  Acting,
  Animation3D,
  Health,
  AgedCare,
  Nutrition,
  Nursing,
  Veterinary,
  Medicine,
  PublicHealth,
  Dental,
  Massage,
  MentalHealth,
  Baking,
  Cookery,
  HospitalityManagement,
  HotelManagement,
  TravelTourism,
  Automotive,
  Beauty,
  Construction,
  Carpentry,
  Education,
  Fitness,
  Hairdressing,
  Horticulture,
  SportDevelopment,
  Yoga,
  ProjectManagement,
  BusinessManagement,
  HumanResources,
  BankingManagement,
  IntlBusiness,
  SocialMediaMarketing,
  AgribusinessManagement,
  SupplyManagement,
  LeadershipManagement,
  It,
  Design,
  Hospitality,
  Management,
  Trades,
  CurrentEvent,
} from "../../types";

interface IHeroProps {
  data:
    | BlogPost
    | Trades
    | Design
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
    | Hospitality
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
    | Management
    | It
    | CurrentEvent
    | undefined
    | null;
}

export default function App({ data }: IHeroProps) {
  const [c, setC] = useState(data?.category);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (c === CategoriesEnum.Blog) {
      setSlug("/blog/" + data?.id);
    }

    // Conditionally sets the slug for posts in the relavant category

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

    //* -------- Hospitality -------- *//

    if (c === CategoriesEnum.Baking) {
      setSlug("/courses/hospitality/baking/articles/" + data?.id);
    }
    if (c === CategoriesEnum.CommercialCooking) {
      setSlug("/courses/hospitality/commercial-cooking/articles/" + data?.id);
    }
    if (c === CategoriesEnum.HospitalityManagement) {
      setSlug(
        "/courses/hospitality/hospitality-management/articles/" + data?.id
      );
    }
    if (c === CategoriesEnum.IntlHotelManagement) {
      setSlug("/courses/hospitality/hotel-management/articles/" + data?.id);
    }
    if (c === CategoriesEnum.TravelTourism) {
      setSlug("/courses/hospitality/travel-tourism/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Events) {
      setSlug("/courses/hospitality/events/articles/" + data?.id);
    }

    //* -------- Management -------- *//

    if (c === CategoriesEnum.ProjectManagement) {
      setSlug("/courses/management/project-management/articles/" + data?.id);
    }
    if (c === CategoriesEnum.BusinessManagement) {
      setSlug("/courses/management/business-management/articles/" + data?.id);
    }
    if (c === CategoriesEnum.HumanResources) {
      setSlug("/courses/management/human-resources/articles/" + data?.id);
    }
    if (c === CategoriesEnum.BankingManagement) {
      setSlug("/courses/management/banking-management/articles/" + data?.id);
    }
    if (c === CategoriesEnum.InternationalBusiness) {
      setSlug(
        "/courses/management/international-business/articles/" + data?.id
      );
    }
    if (c === CategoriesEnum.SocialmediaMarketing) {
      setSlug(
        "/courses/management/social-media-marketing/articles/" + data?.id
      );
    }
    if (c === CategoriesEnum.AgribusinessManagement) {
      setSlug(
        "/courses/management/agriculture-business-management/articles/" +
          data?.id
      );
    }
    if (c === CategoriesEnum.SupplychainManagement) {
      setSlug("/courses/management/supply-management/articles/" + data?.id);
    }
    if (c === CategoriesEnum.LeadershipManagement) {
      setSlug("/courses/management/leadership-management/articles/" + data?.id);
    }

    //* -------- Trades -------- *//

    if (c === CategoriesEnum.Automotive) {
      setSlug("/courses/trades/automotive/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Beauty) {
      setSlug("/courses/trades/beauty/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Construction) {
      setSlug("/courses/trades/construction/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Carpentry) {
      setSlug("/courses/trades/carpentry/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Education) {
      setSlug("/courses/trades/education/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Fitness) {
      setSlug("/courses/trades/fitness/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Hairdressing) {
      setSlug("/courses/trades/hairdressing/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Horticulture) {
      setSlug("/courses/trades/horticulture/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Sport) {
      setSlug("/courses/trades/sport-development/articles/" + data?.id);
    }
    if (c === CategoriesEnum.Yoga) {
      setSlug("/courses/trades/yoga/articles/" + data?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-5 md:mb-8 md:px-0 max-w-[678px] md:max-w-[900px] mx-auto w-full h-full container">
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
