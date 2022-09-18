import BlogHeader from "./BlogHeader";
import BlogPostMarkup from "./BlogPostMarkup";
import {
  It,
  BlogPost,
  Events,
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
  Design,
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
  Hospitality,
  Management,
  Trades,
} from "../../types";

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
    | undefined
    | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogMain({ data, handleEdit, handleAdd }: IFormProps) {
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
