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
import BlogHeader from "./BlogHeader";
import BlogPostMarkup from "./BlogPostMarkup";

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
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogMain({ data, handleEdit, handleAdd }: IProps) {
  return (
    <div className="container">
      <BlogHeader data={data} />
      <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
        <BlogPostMarkup
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
}
