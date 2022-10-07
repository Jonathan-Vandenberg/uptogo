import Image from "next/image";
import logo from "../../public/fullLogo.png";
import BlogPostMarkup from "../Markup";
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
  Advice,
  Guidance,
} from "../../types";
import UserInterestedForm from "../UserInterestedForm";

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
    | Guidance
    | undefined
    | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogMain({ data, handleEdit, handleAdd }: IFormProps) {
  const styles = data?.mainImage
    ? "pb-8 block max-w-[600px] mx-auto"
    : "block p-20";

  return (
    <div className="md:py-12">
      <div className="pb-4 px-6 md:px-0 md:pb-10">
        <h1 className="logoFont text-darkBlue text-center text-2xl px-5 lg:px-0 md:text-3xl lg:text-4xl">
          {data?.title}
        </h1>
      </div>

      <div className={styles}>
        <Image
          src={data?.mainImage || logo}
          width={data?.mainImage ? 900 : 300}
          height={data?.mainImage ? 510 : 300}
          alt="image"
          layout="responsive"
          priority
        />
      </div>

      <div className="pb-6 px-6 md:px-0 md:pb-10">
        <div
          id="subtitle1"
          className="text-gray-700 text-xl pb-3 md:text-xl lg:text-2xl scroll-mt-20 px-5 lg:px-0"
        >
          {data?.subtitle1}
        </div>
      </div>
      <div className="px-5 lg:px-0">
        <BlogPostMarkup
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      </div>
      <UserInterestedForm />
    </div>
  );
}
