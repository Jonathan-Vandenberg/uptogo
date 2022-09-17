import { GraphQLResolveInfo } from 'graphql';
import { Categories as CategoriesModel, SoftwareDevelopment as SoftwareDevelopmentModel, ComputerNetworking as ComputerNetworkingModel, CloudComputing as CloudComputingModel, BusinessAnalysis as BusinessAnalysisModel, Telecommunication as TelecommunicationModel, GameProgramming as GameProgrammingModel, WebDevelopment as WebDevelopmentModel, MachineLearning as MachineLearningModel, DataManagement as DataManagementModel, Blockchain as BlockchainModel, Ai as AiModel, FashionDesign as FashionDesignModel, Landscape as LandscapeModel, Music as MusicModel, Film as FilmModel, GraphicDesign as GraphicDesignModel, InteriorDesign as InteriorDesignModel, DigitalMedia as DigitalMediaModel, Acting as ActingModel, Animation3D as Animation3DModel, AgedCare as AgedCareModel, Nutrition as NutritionModel, Nursing as NursingModel, Veterinary as VeterinaryModel, Medicine as MedicineModel, PublicHealth as PublicHealthModel, Dental as DentalModel, Massage as MassageModel, MentalHealth as MentalHealthModel, Baking as BakingModel, Cookery as CookeryModel, HospitalityManagement as HospitalityManagementModel, HotelManagement as HotelManagementModel, TravelTourism as TravelTourismModel, Events as EventsModel, Automotive as AutomotiveModel, Beauty as BeautyModel, Construction as ConstructionModel, Carpentry as CarpentryModel, Education as EducationModel, Fitness as FitnessModel, Hairdressing as HairdressingModel, Horticulture as HorticultureModel, SportDevelopment as SportDevelopmentModel, Yoga as YogaModel, ProjectManagement as ProjectManagementModel, BusinessManagement as BusinessManagementModel, HumanResources as HumanResourcesModel, BankingManagement as BankingManagementModel, IntlBusiness as IntlBusinessModel, SocialMediaMarketing as SocialMediaMarketingModel, AgribusinessManagement as AgribusinessManagementModel, SupplyManagement as SupplyManagementModel, LeadershipManagement as LeadershipManagementModel, BlogPost as BlogPostModel, It as ItModel, Trades as TradesModel, Hospitality as HospitalityModel, Health as HealthModel, Management as ManagementModel, Design as DesignModel, Session as SessionModel, User as UserModel, VerificationToken as VerificationTokenModel } from '@prisma/client';
import { GraphQLContext } from './pages/api/index';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user: User;
  userId: Scalars['ID'];
};

export type Acting = {
  __typename?: 'Acting';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ActingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AgedCare = {
  __typename?: 'AgedCare';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AgedCareInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AgribusinessManagement = {
  __typename?: 'AgribusinessManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AgribusinessManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Ai = {
  __typename?: 'Ai';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AiInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Animation3D = {
  __typename?: 'Animation3D';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Animation3DInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Automotive = {
  __typename?: 'Automotive';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AutomotiveInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Baking = {
  __typename?: 'Baking';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BakingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BankingManagement = {
  __typename?: 'BankingManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BankingManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Beauty = {
  __typename?: 'Beauty';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BeautyInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Blockchain = {
  __typename?: 'Blockchain';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BlockchainInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BlogPost = {
  __typename?: 'BlogPost';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BlogPostInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BusinessAnalysis = {
  __typename?: 'BusinessAnalysis';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BusinessAnalysisInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BusinessManagement = {
  __typename?: 'BusinessManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BusinessManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Carpentry = {
  __typename?: 'Carpentry';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CarpentryInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Categories = {
  __typename?: 'Categories';
  Acting?: Maybe<Scalars['String']>;
  AgedCare?: Maybe<Scalars['String']>;
  Agribusiness_Management?: Maybe<Scalars['String']>;
  Ai?: Maybe<Scalars['String']>;
  Animation_3D?: Maybe<Scalars['String']>;
  Automotive?: Maybe<Scalars['String']>;
  Baking?: Maybe<Scalars['String']>;
  Banking_Management?: Maybe<Scalars['String']>;
  Beauty?: Maybe<Scalars['String']>;
  Blockchain_Tech?: Maybe<Scalars['String']>;
  Blog?: Maybe<Scalars['String']>;
  Business_Analysis?: Maybe<Scalars['String']>;
  Business_Management?: Maybe<Scalars['String']>;
  Carpentry?: Maybe<Scalars['String']>;
  Cloud_Computing?: Maybe<Scalars['String']>;
  Commercial_Cooking?: Maybe<Scalars['String']>;
  Computer_Networking?: Maybe<Scalars['String']>;
  Construction?: Maybe<Scalars['String']>;
  Data_Management?: Maybe<Scalars['String']>;
  Dental?: Maybe<Scalars['String']>;
  Digital_Media?: Maybe<Scalars['String']>;
  Education?: Maybe<Scalars['String']>;
  Events?: Maybe<Scalars['String']>;
  Fashion_Design?: Maybe<Scalars['String']>;
  Film_Media?: Maybe<Scalars['String']>;
  Fitness?: Maybe<Scalars['String']>;
  Game_Programming?: Maybe<Scalars['String']>;
  Graphic_Design?: Maybe<Scalars['String']>;
  Haridressing?: Maybe<Scalars['String']>;
  Hopitality_Management?: Maybe<Scalars['String']>;
  Horticulture?: Maybe<Scalars['String']>;
  Human_Resources?: Maybe<Scalars['String']>;
  Interior_Design?: Maybe<Scalars['String']>;
  International_Business?: Maybe<Scalars['String']>;
  Intl_Hotel_Management?: Maybe<Scalars['String']>;
  Landscape?: Maybe<Scalars['String']>;
  Leadership_Management?: Maybe<Scalars['String']>;
  Machine_Learning?: Maybe<Scalars['String']>;
  Massage?: Maybe<Scalars['String']>;
  Medicine?: Maybe<Scalars['String']>;
  Mental_Health?: Maybe<Scalars['String']>;
  Music_Audio?: Maybe<Scalars['String']>;
  Nursing?: Maybe<Scalars['String']>;
  Nutrition?: Maybe<Scalars['String']>;
  Project_Management?: Maybe<Scalars['String']>;
  Public_Health?: Maybe<Scalars['String']>;
  Socialmedia_Marketing?: Maybe<Scalars['String']>;
  Software_Development?: Maybe<Scalars['String']>;
  Sport?: Maybe<Scalars['String']>;
  Supplychain_Management?: Maybe<Scalars['String']>;
  Telecommunication?: Maybe<Scalars['String']>;
  TravelTourism?: Maybe<Scalars['String']>;
  Vetenary?: Maybe<Scalars['String']>;
  Web_Development?: Maybe<Scalars['String']>;
  Yoga?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
};

export type CloudComputing = {
  __typename?: 'CloudComputing';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CloudComputingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComputerNetworking = {
  __typename?: 'ComputerNetworking';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComputerNetworkingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Construction = {
  __typename?: 'Construction';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ConstructionInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Cookery = {
  __typename?: 'Cookery';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CookeryInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DataManagement = {
  __typename?: 'DataManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type DataManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Dental = {
  __typename?: 'Dental';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type DentalInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Design = {
  __typename?: 'Design';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type DesignInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DigitalMedia = {
  __typename?: 'DigitalMedia';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type DigitalMediaInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Education = {
  __typename?: 'Education';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EducationInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Events = {
  __typename?: 'Events';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EventsInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FashionDesign = {
  __typename?: 'FashionDesign';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FashionDesignInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Film = {
  __typename?: 'Film';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FilmInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Fitness = {
  __typename?: 'Fitness';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FitnessInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GameProgramming = {
  __typename?: 'GameProgramming';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GameProgrammingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GraphicDesign = {
  __typename?: 'GraphicDesign';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GraphicDesignInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Hairdressing = {
  __typename?: 'Hairdressing';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HairdressingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Health = {
  __typename?: 'Health';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HealthInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Horticulture = {
  __typename?: 'Horticulture';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HorticultureInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Hospitality = {
  __typename?: 'Hospitality';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HospitalityInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HospitalityManagement = {
  __typename?: 'HospitalityManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HospitalityManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HotelManagement = {
  __typename?: 'HotelManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HotelManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HumanResources = {
  __typename?: 'HumanResources';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HumanResourcesInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type InteriorDesign = {
  __typename?: 'InteriorDesign';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type InteriorDesignInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IntlBusiness = {
  __typename?: 'IntlBusiness';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IntlBusinessInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type It = {
  __typename?: 'It';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ItInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Landscape = {
  __typename?: 'Landscape';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LandscapeInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type LeadershipManagement = {
  __typename?: 'LeadershipManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LeadershipManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MachineLearning = {
  __typename?: 'MachineLearning';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MachineLearningInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Management = {
  __typename?: 'Management';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Massage = {
  __typename?: 'Massage';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MassageInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Medicine = {
  __typename?: 'Medicine';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MedicineInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MentalHealth = {
  __typename?: 'MentalHealth';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MentalHealthInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Music = {
  __typename?: 'Music';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MusicInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addActing?: Maybe<Acting>;
  addAgedCare?: Maybe<AgedCare>;
  addAgribusinessManagement?: Maybe<AgribusinessManagement>;
  addAi?: Maybe<Ai>;
  addAnimation3D?: Maybe<Animation3D>;
  addAutomotive?: Maybe<Automotive>;
  addBaking?: Maybe<Baking>;
  addBankingManagement?: Maybe<BankingManagement>;
  addBeauty?: Maybe<Beauty>;
  addBlockchain?: Maybe<Blockchain>;
  addBlogPost?: Maybe<BlogPost>;
  addBusinessAnalysis?: Maybe<BusinessAnalysis>;
  addBusinessManagement?: Maybe<BusinessManagement>;
  addCarpentry?: Maybe<Carpentry>;
  addCloudComputing?: Maybe<CloudComputing>;
  addComputerNetworking?: Maybe<ComputerNetworking>;
  addConstruction?: Maybe<Construction>;
  addCookery?: Maybe<Cookery>;
  addDataManagement?: Maybe<DataManagement>;
  addDental?: Maybe<Dental>;
  addDesign?: Maybe<Design>;
  addDigitalMedia?: Maybe<DigitalMedia>;
  addEducation?: Maybe<Education>;
  addEvents?: Maybe<Events>;
  addFashionDesign?: Maybe<FashionDesign>;
  addFilm?: Maybe<Film>;
  addFitness?: Maybe<Fitness>;
  addGameProgramming?: Maybe<GameProgramming>;
  addGraphicDesign?: Maybe<GraphicDesign>;
  addHairdressing?: Maybe<Hairdressing>;
  addHealth?: Maybe<Health>;
  addHorticulture?: Maybe<Horticulture>;
  addHospitality?: Maybe<Hospitality>;
  addHospitalityManagement?: Maybe<HospitalityManagement>;
  addHotelManagement?: Maybe<HotelManagement>;
  addHumanResources?: Maybe<HumanResources>;
  addInteriorDesign?: Maybe<InteriorDesign>;
  addIntlBusiness?: Maybe<IntlBusiness>;
  addIt?: Maybe<It>;
  addLandscape?: Maybe<Landscape>;
  addLeadershipManagement?: Maybe<LeadershipManagement>;
  addMachineLearning?: Maybe<MachineLearning>;
  addManagement?: Maybe<Management>;
  addMassage?: Maybe<Massage>;
  addMedicine?: Maybe<Medicine>;
  addMentalHealth?: Maybe<MentalHealth>;
  addMusic?: Maybe<Music>;
  addNursing?: Maybe<Nursing>;
  addNutrition?: Maybe<Nutrition>;
  addProjectManagement?: Maybe<ProjectManagement>;
  addPublicHealth?: Maybe<PublicHealth>;
  addSocialMediaMarketing?: Maybe<SocialMediaMarketing>;
  addSoftwareDevelopment?: Maybe<SoftwareDevelopment>;
  addSportDevelopment?: Maybe<SportDevelopment>;
  addSupplyManagement?: Maybe<SupplyManagement>;
  addTelecommunication?: Maybe<Telecommunication>;
  addTrades?: Maybe<Trades>;
  addTravelTourism?: Maybe<TravelTourism>;
  addVeterinary?: Maybe<Veterinary>;
  addWebDevelopment?: Maybe<WebDevelopment>;
  addYoga?: Maybe<Yoga>;
  updateActing?: Maybe<Acting>;
  updateAgedCare?: Maybe<AgedCare>;
  updateAgribusinessManagement?: Maybe<AgribusinessManagement>;
  updateAi?: Maybe<Ai>;
  updateAnimation3D?: Maybe<Animation3D>;
  updateAutomotive?: Maybe<Automotive>;
  updateBaking?: Maybe<Baking>;
  updateBankingManagement?: Maybe<BankingManagement>;
  updateBeauty?: Maybe<Beauty>;
  updateBlockchain?: Maybe<Blockchain>;
  updateBlogPost?: Maybe<BlogPost>;
  updateBusinessAnalysis?: Maybe<BusinessAnalysis>;
  updateBusinessManagement?: Maybe<BusinessManagement>;
  updateCarpentry?: Maybe<Carpentry>;
  updateCloudComputing?: Maybe<CloudComputing>;
  updateComputerNetworking?: Maybe<ComputerNetworking>;
  updateConstruction?: Maybe<Construction>;
  updateCookery?: Maybe<Cookery>;
  updateDataManagement?: Maybe<DataManagement>;
  updateDental?: Maybe<Dental>;
  updateDesign?: Maybe<Design>;
  updateDigitalMedia?: Maybe<DigitalMedia>;
  updateEducation?: Maybe<Education>;
  updateEvents?: Maybe<Events>;
  updateFashionDesign?: Maybe<FashionDesign>;
  updateFilm?: Maybe<Film>;
  updateFitness?: Maybe<Fitness>;
  updateGameProgramming?: Maybe<GameProgramming>;
  updateGraphicDesign?: Maybe<GraphicDesign>;
  updateHairdressing?: Maybe<Hairdressing>;
  updateHealth?: Maybe<Health>;
  updateHorticulture?: Maybe<Horticulture>;
  updateHospitality?: Maybe<Hospitality>;
  updateHospitalityManagement?: Maybe<HospitalityManagement>;
  updateHotelManagement?: Maybe<HotelManagement>;
  updateHumanResources?: Maybe<HumanResources>;
  updateInteriorDesign?: Maybe<InteriorDesign>;
  updateIntlBusiness?: Maybe<IntlBusiness>;
  updateIt?: Maybe<It>;
  updateLandscape?: Maybe<Landscape>;
  updateLeadershipManagement?: Maybe<LeadershipManagement>;
  updateMachineLearning?: Maybe<MachineLearning>;
  updateManagement?: Maybe<Management>;
  updateMassage?: Maybe<Massage>;
  updateMedicine?: Maybe<Medicine>;
  updateMentalHealth?: Maybe<MentalHealth>;
  updateMusic?: Maybe<Music>;
  updateNursing?: Maybe<Nursing>;
  updateNutrition?: Maybe<Nutrition>;
  updateProjectManagement?: Maybe<ProjectManagement>;
  updatePublicHealth?: Maybe<PublicHealth>;
  updateSocialMediaMarketing?: Maybe<SocialMediaMarketing>;
  updateSoftwareDevelopment?: Maybe<SoftwareDevelopment>;
  updateSportDevelopment?: Maybe<SportDevelopment>;
  updateSupplyManagement?: Maybe<SupplyManagement>;
  updateTelecommunication?: Maybe<Telecommunication>;
  updateTrades?: Maybe<Trades>;
  updateTravelTourism?: Maybe<TravelTourism>;
  updateVeterinary?: Maybe<Veterinary>;
  updateWebDevelopment?: Maybe<WebDevelopment>;
  updateYoga?: Maybe<Yoga>;
};


export type MutationAddActingArgs = {
  input: ActingInput;
};


export type MutationAddAgedCareArgs = {
  input: AgedCareInput;
};


export type MutationAddAgribusinessManagementArgs = {
  input: AgribusinessManagementInput;
};


export type MutationAddAiArgs = {
  input?: InputMaybe<AiInput>;
};


export type MutationAddAnimation3DArgs = {
  input: Animation3DInput;
};


export type MutationAddAutomotiveArgs = {
  input: AutomotiveInput;
};


export type MutationAddBakingArgs = {
  input: BakingInput;
};


export type MutationAddBankingManagementArgs = {
  input: BankingManagementInput;
};


export type MutationAddBeautyArgs = {
  input: BeautyInput;
};


export type MutationAddBlockchainArgs = {
  input?: InputMaybe<BlockchainInput>;
};


export type MutationAddBlogPostArgs = {
  input: BlogPostInput;
};


export type MutationAddBusinessAnalysisArgs = {
  input?: InputMaybe<BusinessAnalysisInput>;
};


export type MutationAddBusinessManagementArgs = {
  input: BusinessManagementInput;
};


export type MutationAddCarpentryArgs = {
  input: CarpentryInput;
};


export type MutationAddCloudComputingArgs = {
  input?: InputMaybe<CloudComputingInput>;
};


export type MutationAddComputerNetworkingArgs = {
  input?: InputMaybe<ComputerNetworkingInput>;
};


export type MutationAddConstructionArgs = {
  input: ConstructionInput;
};


export type MutationAddCookeryArgs = {
  input: CookeryInput;
};


export type MutationAddDataManagementArgs = {
  input?: InputMaybe<DataManagementInput>;
};


export type MutationAddDentalArgs = {
  input: DentalInput;
};


export type MutationAddDesignArgs = {
  input: DesignInput;
};


export type MutationAddDigitalMediaArgs = {
  input: DigitalMediaInput;
};


export type MutationAddEducationArgs = {
  input: EducationInput;
};


export type MutationAddEventsArgs = {
  input: EventsInput;
};


export type MutationAddFashionDesignArgs = {
  input: FashionDesignInput;
};


export type MutationAddFilmArgs = {
  input: FilmInput;
};


export type MutationAddFitnessArgs = {
  input: FitnessInput;
};


export type MutationAddGameProgrammingArgs = {
  input?: InputMaybe<GameProgrammingInput>;
};


export type MutationAddGraphicDesignArgs = {
  input: GraphicDesignInput;
};


export type MutationAddHairdressingArgs = {
  input: HairdressingInput;
};


export type MutationAddHealthArgs = {
  input: HealthInput;
};


export type MutationAddHorticultureArgs = {
  input: HorticultureInput;
};


export type MutationAddHospitalityArgs = {
  input: HospitalityInput;
};


export type MutationAddHospitalityManagementArgs = {
  input: HospitalityManagementInput;
};


export type MutationAddHotelManagementArgs = {
  input: HotelManagementInput;
};


export type MutationAddHumanResourcesArgs = {
  input: HumanResourcesInput;
};


export type MutationAddInteriorDesignArgs = {
  input: InteriorDesignInput;
};


export type MutationAddIntlBusinessArgs = {
  input: IntlBusinessInput;
};


export type MutationAddItArgs = {
  input: ItInput;
};


export type MutationAddLandscapeArgs = {
  input: LandscapeInput;
};


export type MutationAddLeadershipManagementArgs = {
  input: LeadershipManagementInput;
};


export type MutationAddMachineLearningArgs = {
  input?: InputMaybe<MachineLearningInput>;
};


export type MutationAddManagementArgs = {
  input: ManagementInput;
};


export type MutationAddMassageArgs = {
  input: MassageInput;
};


export type MutationAddMedicineArgs = {
  input: MedicineInput;
};


export type MutationAddMentalHealthArgs = {
  input: MentalHealthInput;
};


export type MutationAddMusicArgs = {
  input: MusicInput;
};


export type MutationAddNursingArgs = {
  input: NursingInput;
};


export type MutationAddNutritionArgs = {
  input: NutritionInput;
};


export type MutationAddProjectManagementArgs = {
  input: ProjectManagementInput;
};


export type MutationAddPublicHealthArgs = {
  input: PublicHealthInput;
};


export type MutationAddSocialMediaMarketingArgs = {
  input: SocialMediaMarketingInput;
};


export type MutationAddSoftwareDevelopmentArgs = {
  input?: InputMaybe<SoftwareDevelopmentInput>;
};


export type MutationAddSportDevelopmentArgs = {
  input: SportDevelopmentInput;
};


export type MutationAddSupplyManagementArgs = {
  input: SupplyManagementInput;
};


export type MutationAddTelecommunicationArgs = {
  input?: InputMaybe<TelecommunicationInput>;
};


export type MutationAddTradesArgs = {
  input: TradesInput;
};


export type MutationAddTravelTourismArgs = {
  input: TravelTourismInput;
};


export type MutationAddVeterinaryArgs = {
  input: VeterinaryInput;
};


export type MutationAddWebDevelopmentArgs = {
  input?: InputMaybe<WebDevelopmentInput>;
};


export type MutationAddYogaArgs = {
  input: YogaInput;
};


export type MutationUpdateActingArgs = {
  input: ActingInput;
};


export type MutationUpdateAgedCareArgs = {
  input: AgedCareInput;
};


export type MutationUpdateAgribusinessManagementArgs = {
  input: AgribusinessManagementInput;
};


export type MutationUpdateAiArgs = {
  input: AiInput;
};


export type MutationUpdateAnimation3DArgs = {
  input: Animation3DInput;
};


export type MutationUpdateAutomotiveArgs = {
  input: AutomotiveInput;
};


export type MutationUpdateBakingArgs = {
  input: BakingInput;
};


export type MutationUpdateBankingManagementArgs = {
  input: BankingManagementInput;
};


export type MutationUpdateBeautyArgs = {
  input: BeautyInput;
};


export type MutationUpdateBlockchainArgs = {
  input: BlockchainInput;
};


export type MutationUpdateBlogPostArgs = {
  input: BlogPostInput;
};


export type MutationUpdateBusinessAnalysisArgs = {
  input: BusinessAnalysisInput;
};


export type MutationUpdateBusinessManagementArgs = {
  input: BusinessManagementInput;
};


export type MutationUpdateCarpentryArgs = {
  input: CarpentryInput;
};


export type MutationUpdateCloudComputingArgs = {
  input: CloudComputingInput;
};


export type MutationUpdateComputerNetworkingArgs = {
  input: ComputerNetworkingInput;
};


export type MutationUpdateConstructionArgs = {
  input: ConstructionInput;
};


export type MutationUpdateCookeryArgs = {
  input: CookeryInput;
};


export type MutationUpdateDataManagementArgs = {
  input: DataManagementInput;
};


export type MutationUpdateDentalArgs = {
  input: DentalInput;
};


export type MutationUpdateDesignArgs = {
  input: DesignInput;
};


export type MutationUpdateDigitalMediaArgs = {
  input: DigitalMediaInput;
};


export type MutationUpdateEducationArgs = {
  input: EducationInput;
};


export type MutationUpdateEventsArgs = {
  input: EventsInput;
};


export type MutationUpdateFashionDesignArgs = {
  input: FashionDesignInput;
};


export type MutationUpdateFilmArgs = {
  input: FilmInput;
};


export type MutationUpdateFitnessArgs = {
  input: FitnessInput;
};


export type MutationUpdateGameProgrammingArgs = {
  input: GameProgrammingInput;
};


export type MutationUpdateGraphicDesignArgs = {
  input: GraphicDesignInput;
};


export type MutationUpdateHairdressingArgs = {
  input: HairdressingInput;
};


export type MutationUpdateHealthArgs = {
  input: HealthInput;
};


export type MutationUpdateHorticultureArgs = {
  input: HorticultureInput;
};


export type MutationUpdateHospitalityArgs = {
  input: HospitalityInput;
};


export type MutationUpdateHospitalityManagementArgs = {
  input: HospitalityManagementInput;
};


export type MutationUpdateHotelManagementArgs = {
  input: HotelManagementInput;
};


export type MutationUpdateHumanResourcesArgs = {
  input: HumanResourcesInput;
};


export type MutationUpdateInteriorDesignArgs = {
  input: InteriorDesignInput;
};


export type MutationUpdateIntlBusinessArgs = {
  input: IntlBusinessInput;
};


export type MutationUpdateItArgs = {
  input: ItInput;
};


export type MutationUpdateLandscapeArgs = {
  input: LandscapeInput;
};


export type MutationUpdateLeadershipManagementArgs = {
  input: LeadershipManagementInput;
};


export type MutationUpdateMachineLearningArgs = {
  input: MachineLearningInput;
};


export type MutationUpdateManagementArgs = {
  input: ManagementInput;
};


export type MutationUpdateMassageArgs = {
  input: MassageInput;
};


export type MutationUpdateMedicineArgs = {
  input: MedicineInput;
};


export type MutationUpdateMentalHealthArgs = {
  input: MentalHealthInput;
};


export type MutationUpdateMusicArgs = {
  input: MusicInput;
};


export type MutationUpdateNursingArgs = {
  input: NursingInput;
};


export type MutationUpdateNutritionArgs = {
  input: NutritionInput;
};


export type MutationUpdateProjectManagementArgs = {
  input: ProjectManagementInput;
};


export type MutationUpdatePublicHealthArgs = {
  input: PublicHealthInput;
};


export type MutationUpdateSocialMediaMarketingArgs = {
  input: SocialMediaMarketingInput;
};


export type MutationUpdateSoftwareDevelopmentArgs = {
  input: SoftwareDevelopmentInput;
};


export type MutationUpdateSportDevelopmentArgs = {
  input: SportDevelopmentInput;
};


export type MutationUpdateSupplyManagementArgs = {
  input: SupplyManagementInput;
};


export type MutationUpdateTelecommunicationArgs = {
  input: TelecommunicationInput;
};


export type MutationUpdateTradesArgs = {
  input: TradesInput;
};


export type MutationUpdateTravelTourismArgs = {
  input: TravelTourismInput;
};


export type MutationUpdateVeterinaryArgs = {
  input: VeterinaryInput;
};


export type MutationUpdateWebDevelopmentArgs = {
  input: WebDevelopmentInput;
};


export type MutationUpdateYogaArgs = {
  input: YogaInput;
};

export type Nursing = {
  __typename?: 'Nursing';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NursingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Nutrition = {
  __typename?: 'Nutrition';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NutritionInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProjectManagement = {
  __typename?: 'ProjectManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PublicHealth = {
  __typename?: 'PublicHealth';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PublicHealthInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  acting?: Maybe<Acting>;
  actingCard?: Maybe<Array<Maybe<Acting>>>;
  agedCare?: Maybe<AgedCare>;
  agedCareCard?: Maybe<Array<Maybe<AgedCare>>>;
  agribusinessManagement?: Maybe<AgribusinessManagement>;
  agribusinessManagementCard?: Maybe<Array<Maybe<AgribusinessManagement>>>;
  ai?: Maybe<Ai>;
  aiCard?: Maybe<Array<Maybe<Ai>>>;
  animation3D?: Maybe<Animation3D>;
  animation3DCard?: Maybe<Array<Maybe<Animation3D>>>;
  automotive?: Maybe<Automotive>;
  automotiveCard?: Maybe<Array<Maybe<Automotive>>>;
  baking?: Maybe<Baking>;
  bakingCard?: Maybe<Array<Maybe<Baking>>>;
  bankingManagement?: Maybe<BankingManagement>;
  bankingManagementCard?: Maybe<Array<Maybe<BankingManagement>>>;
  beauty?: Maybe<Beauty>;
  beautyCard?: Maybe<Array<Maybe<Beauty>>>;
  blockchain?: Maybe<Blockchain>;
  blockchainCard?: Maybe<Array<Maybe<Blockchain>>>;
  blogCard?: Maybe<Array<Maybe<BlogPost>>>;
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  businessAnalysis?: Maybe<BusinessAnalysis>;
  businessAnalysisCard?: Maybe<Array<Maybe<BusinessAnalysis>>>;
  businessManagementCard?: Maybe<Array<Maybe<BusinessManagement>>>;
  carpentry?: Maybe<Carpentry>;
  carpentryCard?: Maybe<Array<Maybe<Carpentry>>>;
  cloudComputing?: Maybe<CloudComputing>;
  cloudComputingCard?: Maybe<Array<Maybe<CloudComputing>>>;
  computerNetworking?: Maybe<ComputerNetworking>;
  computerNetworkingCard?: Maybe<Array<Maybe<ComputerNetworking>>>;
  construction?: Maybe<Construction>;
  constructionCard?: Maybe<Array<Maybe<Construction>>>;
  cookery?: Maybe<Cookery>;
  cookeryCard?: Maybe<Array<Maybe<Cookery>>>;
  dataManagement?: Maybe<DataManagement>;
  dataManagementCard?: Maybe<Array<Maybe<DataManagement>>>;
  dental?: Maybe<Dental>;
  dentalCard?: Maybe<Array<Maybe<Dental>>>;
  design?: Maybe<Design>;
  digitalMedia?: Maybe<DigitalMedia>;
  digitalMediaCard?: Maybe<Array<Maybe<DigitalMedia>>>;
  education?: Maybe<Education>;
  educationCard?: Maybe<Array<Maybe<Education>>>;
  events?: Maybe<Events>;
  eventsCard?: Maybe<Array<Maybe<Events>>>;
  fashionDesign?: Maybe<FashionDesign>;
  fashionDesignCard?: Maybe<Array<Maybe<FashionDesign>>>;
  film?: Maybe<Film>;
  filmCard?: Maybe<Array<Maybe<Film>>>;
  fitness?: Maybe<Fitness>;
  fitnessCard?: Maybe<Array<Maybe<Fitness>>>;
  gameProgramming?: Maybe<GameProgramming>;
  gameProgrammingCard?: Maybe<Array<Maybe<GameProgramming>>>;
  graphicDesign?: Maybe<GraphicDesign>;
  graphicDesignCard?: Maybe<Array<Maybe<GraphicDesign>>>;
  hairdressing?: Maybe<Hairdressing>;
  hairdressingCard?: Maybe<Array<Maybe<Hairdressing>>>;
  health?: Maybe<Health>;
  horticulture?: Maybe<Horticulture>;
  horticultureCard?: Maybe<Array<Maybe<Horticulture>>>;
  hospitality?: Maybe<Hospitality>;
  hospitalityManagement?: Maybe<HospitalityManagement>;
  hospitalityManagementCard?: Maybe<Array<Maybe<HospitalityManagement>>>;
  hotelManagement?: Maybe<HotelManagement>;
  hotelManagementCard?: Maybe<Array<Maybe<HotelManagement>>>;
  humanResources?: Maybe<HumanResources>;
  humanResourcesCard?: Maybe<Array<Maybe<HumanResources>>>;
  interiorDesign?: Maybe<InteriorDesign>;
  interiorDesignCard?: Maybe<Array<Maybe<InteriorDesign>>>;
  intlBusiness?: Maybe<IntlBusiness>;
  intlBusinessCard?: Maybe<Array<Maybe<IntlBusiness>>>;
  it?: Maybe<It>;
  landscape?: Maybe<Landscape>;
  landscapeCard?: Maybe<Array<Maybe<Landscape>>>;
  leadershipManagement?: Maybe<LeadershipManagement>;
  leadershipManagementCard?: Maybe<Array<Maybe<LeadershipManagement>>>;
  machineLearning?: Maybe<MachineLearning>;
  machineLearningCard?: Maybe<Array<Maybe<MachineLearning>>>;
  management?: Maybe<Management>;
  massage?: Maybe<Massage>;
  massageCard?: Maybe<Array<Maybe<Massage>>>;
  medicine?: Maybe<Medicine>;
  medicineCard?: Maybe<Array<Maybe<Medicine>>>;
  mentalHealth?: Maybe<MentalHealth>;
  mentalHealthCard?: Maybe<Array<Maybe<MentalHealth>>>;
  music?: Maybe<Music>;
  musicCard?: Maybe<Array<Maybe<Music>>>;
  nursing?: Maybe<Nursing>;
  nursingCard?: Maybe<Array<Maybe<Nursing>>>;
  nutrition?: Maybe<Nutrition>;
  nutritionCard?: Maybe<Array<Maybe<Nutrition>>>;
  projectManagement?: Maybe<ProjectManagement>;
  projectManagementCard?: Maybe<Array<Maybe<ProjectManagement>>>;
  publicHealth?: Maybe<PublicHealth>;
  publicHealthCard?: Maybe<Array<Maybe<PublicHealth>>>;
  pusinessManagement?: Maybe<BusinessManagement>;
  socialMediaMarketing?: Maybe<SocialMediaMarketing>;
  socialMediaMarketingCard?: Maybe<Array<Maybe<SocialMediaMarketing>>>;
  softwareDevelopment?: Maybe<SoftwareDevelopment>;
  softwareDevelopmentCard?: Maybe<Array<Maybe<SoftwareDevelopment>>>;
  sportDevelopment?: Maybe<SportDevelopment>;
  sportDevelopmentCard?: Maybe<Array<Maybe<SportDevelopment>>>;
  supplyManagement?: Maybe<SupplyManagement>;
  supplyManagementCard?: Maybe<Array<Maybe<SupplyManagement>>>;
  telecommunication?: Maybe<Telecommunication>;
  telecommunicationCard?: Maybe<Array<Maybe<Telecommunication>>>;
  trades?: Maybe<Trades>;
  travelTourism?: Maybe<TravelTourism>;
  travelTourismCard?: Maybe<Array<Maybe<TravelTourism>>>;
  veterinary?: Maybe<Veterinary>;
  veterinaryCard?: Maybe<Array<Maybe<Veterinary>>>;
  webDevelopment?: Maybe<WebDevelopment>;
  webDevelopmentCard?: Maybe<Array<Maybe<WebDevelopment>>>;
  yoga?: Maybe<Yoga>;
  yogaCard?: Maybe<Array<Maybe<Yoga>>>;
};


export type QueryActingArgs = {
  id: Scalars['ID'];
};


export type QueryAgedCareArgs = {
  id: Scalars['ID'];
};


export type QueryAgribusinessManagementArgs = {
  id: Scalars['ID'];
};


export type QueryAiArgs = {
  id: Scalars['ID'];
};


export type QueryAnimation3DArgs = {
  id: Scalars['ID'];
};


export type QueryAutomotiveArgs = {
  id: Scalars['ID'];
};


export type QueryBakingArgs = {
  id: Scalars['ID'];
};


export type QueryBankingManagementArgs = {
  id: Scalars['ID'];
};


export type QueryBeautyArgs = {
  id: Scalars['ID'];
};


export type QueryBlockchainArgs = {
  id: Scalars['ID'];
};


export type QueryBlogPostArgs = {
  id: Scalars['ID'];
};


export type QueryBusinessAnalysisArgs = {
  id: Scalars['ID'];
};


export type QueryCarpentryArgs = {
  id: Scalars['ID'];
};


export type QueryCloudComputingArgs = {
  id: Scalars['ID'];
};


export type QueryComputerNetworkingArgs = {
  id: Scalars['ID'];
};


export type QueryConstructionArgs = {
  id: Scalars['ID'];
};


export type QueryCookeryArgs = {
  id: Scalars['ID'];
};


export type QueryDataManagementArgs = {
  id: Scalars['ID'];
};


export type QueryDentalArgs = {
  id: Scalars['ID'];
};


export type QueryDesignArgs = {
  id: Scalars['ID'];
};


export type QueryDigitalMediaArgs = {
  id: Scalars['ID'];
};


export type QueryEducationArgs = {
  id: Scalars['ID'];
};


export type QueryEventsArgs = {
  id: Scalars['ID'];
};


export type QueryFashionDesignArgs = {
  id: Scalars['ID'];
};


export type QueryFilmArgs = {
  id: Scalars['ID'];
};


export type QueryFitnessArgs = {
  id: Scalars['ID'];
};


export type QueryGameProgrammingArgs = {
  id: Scalars['ID'];
};


export type QueryGraphicDesignArgs = {
  id: Scalars['ID'];
};


export type QueryHairdressingArgs = {
  id: Scalars['ID'];
};


export type QueryHealthArgs = {
  id: Scalars['ID'];
};


export type QueryHorticultureArgs = {
  id: Scalars['ID'];
};


export type QueryHospitalityArgs = {
  id: Scalars['ID'];
};


export type QueryHospitalityManagementArgs = {
  id: Scalars['ID'];
};


export type QueryHotelManagementArgs = {
  id: Scalars['ID'];
};


export type QueryHumanResourcesArgs = {
  id: Scalars['ID'];
};


export type QueryInteriorDesignArgs = {
  id: Scalars['ID'];
};


export type QueryIntlBusinessArgs = {
  id: Scalars['ID'];
};


export type QueryItArgs = {
  id: Scalars['ID'];
};


export type QueryLandscapeArgs = {
  id: Scalars['ID'];
};


export type QueryLeadershipManagementArgs = {
  id: Scalars['ID'];
};


export type QueryMachineLearningArgs = {
  id: Scalars['ID'];
};


export type QueryManagementArgs = {
  id: Scalars['ID'];
};


export type QueryMassageArgs = {
  id: Scalars['ID'];
};


export type QueryMedicineArgs = {
  id: Scalars['ID'];
};


export type QueryMentalHealthArgs = {
  id: Scalars['ID'];
};


export type QueryMusicArgs = {
  id: Scalars['ID'];
};


export type QueryNursingArgs = {
  id: Scalars['ID'];
};


export type QueryNutritionArgs = {
  id: Scalars['ID'];
};


export type QueryProjectManagementArgs = {
  id: Scalars['ID'];
};


export type QueryPublicHealthArgs = {
  id: Scalars['ID'];
};


export type QueryPusinessManagementArgs = {
  id: Scalars['ID'];
};


export type QuerySocialMediaMarketingArgs = {
  id: Scalars['ID'];
};


export type QuerySoftwareDevelopmentArgs = {
  id: Scalars['ID'];
};


export type QuerySportDevelopmentArgs = {
  id: Scalars['ID'];
};


export type QuerySupplyManagementArgs = {
  id: Scalars['ID'];
};


export type QueryTelecommunicationArgs = {
  id: Scalars['ID'];
};


export type QueryTradesArgs = {
  id: Scalars['ID'];
};


export type QueryTravelTourismArgs = {
  id: Scalars['ID'];
};


export type QueryVeterinaryArgs = {
  id: Scalars['ID'];
};


export type QueryWebDevelopmentArgs = {
  id: Scalars['ID'];
};


export type QueryYogaArgs = {
  id: Scalars['ID'];
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['String'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type SocialMediaMarketing = {
  __typename?: 'SocialMediaMarketing';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SocialMediaMarketingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SoftwareDevelopment = {
  __typename?: 'SoftwareDevelopment';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SoftwareDevelopmentInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SportDevelopment = {
  __typename?: 'SportDevelopment';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SportDevelopmentInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SupplyManagement = {
  __typename?: 'SupplyManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SupplyManagementInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Telecommunication = {
  __typename?: 'Telecommunication';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TelecommunicationInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Trades = {
  __typename?: 'Trades';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TradesInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TravelTourism = {
  __typename?: 'TravelTourism';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TravelTourismInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Maybe<Account>>>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<Array<Maybe<Session>>>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['String'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type Veterinary = {
  __typename?: 'Veterinary';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type VeterinaryInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type WebDevelopment = {
  __typename?: 'WebDevelopment';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type WebDevelopmentInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Yoga = {
  __typename?: 'Yoga';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type YogaInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Omit<Account, 'user'> & { user: ResolversTypes['User'] }>;
  Acting: ResolverTypeWrapper<ActingModel>;
  ActingInput: ActingInput;
  AgedCare: ResolverTypeWrapper<AgedCareModel>;
  AgedCareInput: AgedCareInput;
  AgribusinessManagement: ResolverTypeWrapper<AgribusinessManagementModel>;
  AgribusinessManagementInput: AgribusinessManagementInput;
  Ai: ResolverTypeWrapper<AiModel>;
  AiInput: AiInput;
  Animation3D: ResolverTypeWrapper<Animation3DModel>;
  Animation3DInput: Animation3DInput;
  Automotive: ResolverTypeWrapper<AutomotiveModel>;
  AutomotiveInput: AutomotiveInput;
  Baking: ResolverTypeWrapper<BakingModel>;
  BakingInput: BakingInput;
  BankingManagement: ResolverTypeWrapper<BankingManagementModel>;
  BankingManagementInput: BankingManagementInput;
  Beauty: ResolverTypeWrapper<BeautyModel>;
  BeautyInput: BeautyInput;
  Blockchain: ResolverTypeWrapper<BlockchainModel>;
  BlockchainInput: BlockchainInput;
  BlogPost: ResolverTypeWrapper<BlogPostModel>;
  BlogPostInput: BlogPostInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BusinessAnalysis: ResolverTypeWrapper<BusinessAnalysisModel>;
  BusinessAnalysisInput: BusinessAnalysisInput;
  BusinessManagement: ResolverTypeWrapper<BusinessManagementModel>;
  BusinessManagementInput: BusinessManagementInput;
  Carpentry: ResolverTypeWrapper<CarpentryModel>;
  CarpentryInput: CarpentryInput;
  Categories: ResolverTypeWrapper<CategoriesModel>;
  CloudComputing: ResolverTypeWrapper<CloudComputingModel>;
  CloudComputingInput: CloudComputingInput;
  ComputerNetworking: ResolverTypeWrapper<ComputerNetworkingModel>;
  ComputerNetworkingInput: ComputerNetworkingInput;
  Construction: ResolverTypeWrapper<ConstructionModel>;
  ConstructionInput: ConstructionInput;
  Cookery: ResolverTypeWrapper<CookeryModel>;
  CookeryInput: CookeryInput;
  DataManagement: ResolverTypeWrapper<DataManagementModel>;
  DataManagementInput: DataManagementInput;
  Dental: ResolverTypeWrapper<DentalModel>;
  DentalInput: DentalInput;
  Design: ResolverTypeWrapper<DesignModel>;
  DesignInput: DesignInput;
  DigitalMedia: ResolverTypeWrapper<DigitalMediaModel>;
  DigitalMediaInput: DigitalMediaInput;
  Education: ResolverTypeWrapper<EducationModel>;
  EducationInput: EducationInput;
  Events: ResolverTypeWrapper<EventsModel>;
  EventsInput: EventsInput;
  FashionDesign: ResolverTypeWrapper<FashionDesignModel>;
  FashionDesignInput: FashionDesignInput;
  Film: ResolverTypeWrapper<FilmModel>;
  FilmInput: FilmInput;
  Fitness: ResolverTypeWrapper<FitnessModel>;
  FitnessInput: FitnessInput;
  GameProgramming: ResolverTypeWrapper<GameProgrammingModel>;
  GameProgrammingInput: GameProgrammingInput;
  GraphicDesign: ResolverTypeWrapper<GraphicDesignModel>;
  GraphicDesignInput: GraphicDesignInput;
  Hairdressing: ResolverTypeWrapper<HairdressingModel>;
  HairdressingInput: HairdressingInput;
  Health: ResolverTypeWrapper<HealthModel>;
  HealthInput: HealthInput;
  Horticulture: ResolverTypeWrapper<HorticultureModel>;
  HorticultureInput: HorticultureInput;
  Hospitality: ResolverTypeWrapper<HospitalityModel>;
  HospitalityInput: HospitalityInput;
  HospitalityManagement: ResolverTypeWrapper<HospitalityManagementModel>;
  HospitalityManagementInput: HospitalityManagementInput;
  HotelManagement: ResolverTypeWrapper<HotelManagementModel>;
  HotelManagementInput: HotelManagementInput;
  HumanResources: ResolverTypeWrapper<HumanResourcesModel>;
  HumanResourcesInput: HumanResourcesInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InteriorDesign: ResolverTypeWrapper<InteriorDesignModel>;
  InteriorDesignInput: InteriorDesignInput;
  IntlBusiness: ResolverTypeWrapper<IntlBusinessModel>;
  IntlBusinessInput: IntlBusinessInput;
  It: ResolverTypeWrapper<ItModel>;
  ItInput: ItInput;
  Landscape: ResolverTypeWrapper<LandscapeModel>;
  LandscapeInput: LandscapeInput;
  LeadershipManagement: ResolverTypeWrapper<LeadershipManagementModel>;
  LeadershipManagementInput: LeadershipManagementInput;
  MachineLearning: ResolverTypeWrapper<MachineLearningModel>;
  MachineLearningInput: MachineLearningInput;
  Management: ResolverTypeWrapper<ManagementModel>;
  ManagementInput: ManagementInput;
  Massage: ResolverTypeWrapper<MassageModel>;
  MassageInput: MassageInput;
  Medicine: ResolverTypeWrapper<MedicineModel>;
  MedicineInput: MedicineInput;
  MentalHealth: ResolverTypeWrapper<MentalHealthModel>;
  MentalHealthInput: MentalHealthInput;
  Music: ResolverTypeWrapper<MusicModel>;
  MusicInput: MusicInput;
  Mutation: ResolverTypeWrapper<{}>;
  Nursing: ResolverTypeWrapper<NursingModel>;
  NursingInput: NursingInput;
  Nutrition: ResolverTypeWrapper<NutritionModel>;
  NutritionInput: NutritionInput;
  ProjectManagement: ResolverTypeWrapper<ProjectManagementModel>;
  ProjectManagementInput: ProjectManagementInput;
  PublicHealth: ResolverTypeWrapper<PublicHealthModel>;
  PublicHealthInput: PublicHealthInput;
  Query: ResolverTypeWrapper<{}>;
  Session: ResolverTypeWrapper<SessionModel>;
  SocialMediaMarketing: ResolverTypeWrapper<SocialMediaMarketingModel>;
  SocialMediaMarketingInput: SocialMediaMarketingInput;
  SoftwareDevelopment: ResolverTypeWrapper<SoftwareDevelopmentModel>;
  SoftwareDevelopmentInput: SoftwareDevelopmentInput;
  SportDevelopment: ResolverTypeWrapper<SportDevelopmentModel>;
  SportDevelopmentInput: SportDevelopmentInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  SupplyManagement: ResolverTypeWrapper<SupplyManagementModel>;
  SupplyManagementInput: SupplyManagementInput;
  Telecommunication: ResolverTypeWrapper<TelecommunicationModel>;
  TelecommunicationInput: TelecommunicationInput;
  Trades: ResolverTypeWrapper<TradesModel>;
  TradesInput: TradesInput;
  TravelTourism: ResolverTypeWrapper<TravelTourismModel>;
  TravelTourismInput: TravelTourismInput;
  User: ResolverTypeWrapper<UserModel>;
  VerificationToken: ResolverTypeWrapper<VerificationTokenModel>;
  Veterinary: ResolverTypeWrapper<VeterinaryModel>;
  VeterinaryInput: VeterinaryInput;
  WebDevelopment: ResolverTypeWrapper<WebDevelopmentModel>;
  WebDevelopmentInput: WebDevelopmentInput;
  Yoga: ResolverTypeWrapper<YogaModel>;
  YogaInput: YogaInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Omit<Account, 'user'> & { user: ResolversParentTypes['User'] };
  Acting: ActingModel;
  ActingInput: ActingInput;
  AgedCare: AgedCareModel;
  AgedCareInput: AgedCareInput;
  AgribusinessManagement: AgribusinessManagementModel;
  AgribusinessManagementInput: AgribusinessManagementInput;
  Ai: AiModel;
  AiInput: AiInput;
  Animation3D: Animation3DModel;
  Animation3DInput: Animation3DInput;
  Automotive: AutomotiveModel;
  AutomotiveInput: AutomotiveInput;
  Baking: BakingModel;
  BakingInput: BakingInput;
  BankingManagement: BankingManagementModel;
  BankingManagementInput: BankingManagementInput;
  Beauty: BeautyModel;
  BeautyInput: BeautyInput;
  Blockchain: BlockchainModel;
  BlockchainInput: BlockchainInput;
  BlogPost: BlogPostModel;
  BlogPostInput: BlogPostInput;
  Boolean: Scalars['Boolean'];
  BusinessAnalysis: BusinessAnalysisModel;
  BusinessAnalysisInput: BusinessAnalysisInput;
  BusinessManagement: BusinessManagementModel;
  BusinessManagementInput: BusinessManagementInput;
  Carpentry: CarpentryModel;
  CarpentryInput: CarpentryInput;
  Categories: CategoriesModel;
  CloudComputing: CloudComputingModel;
  CloudComputingInput: CloudComputingInput;
  ComputerNetworking: ComputerNetworkingModel;
  ComputerNetworkingInput: ComputerNetworkingInput;
  Construction: ConstructionModel;
  ConstructionInput: ConstructionInput;
  Cookery: CookeryModel;
  CookeryInput: CookeryInput;
  DataManagement: DataManagementModel;
  DataManagementInput: DataManagementInput;
  Dental: DentalModel;
  DentalInput: DentalInput;
  Design: DesignModel;
  DesignInput: DesignInput;
  DigitalMedia: DigitalMediaModel;
  DigitalMediaInput: DigitalMediaInput;
  Education: EducationModel;
  EducationInput: EducationInput;
  Events: EventsModel;
  EventsInput: EventsInput;
  FashionDesign: FashionDesignModel;
  FashionDesignInput: FashionDesignInput;
  Film: FilmModel;
  FilmInput: FilmInput;
  Fitness: FitnessModel;
  FitnessInput: FitnessInput;
  GameProgramming: GameProgrammingModel;
  GameProgrammingInput: GameProgrammingInput;
  GraphicDesign: GraphicDesignModel;
  GraphicDesignInput: GraphicDesignInput;
  Hairdressing: HairdressingModel;
  HairdressingInput: HairdressingInput;
  Health: HealthModel;
  HealthInput: HealthInput;
  Horticulture: HorticultureModel;
  HorticultureInput: HorticultureInput;
  Hospitality: HospitalityModel;
  HospitalityInput: HospitalityInput;
  HospitalityManagement: HospitalityManagementModel;
  HospitalityManagementInput: HospitalityManagementInput;
  HotelManagement: HotelManagementModel;
  HotelManagementInput: HotelManagementInput;
  HumanResources: HumanResourcesModel;
  HumanResourcesInput: HumanResourcesInput;
  ID: Scalars['ID'];
  InteriorDesign: InteriorDesignModel;
  InteriorDesignInput: InteriorDesignInput;
  IntlBusiness: IntlBusinessModel;
  IntlBusinessInput: IntlBusinessInput;
  It: ItModel;
  ItInput: ItInput;
  Landscape: LandscapeModel;
  LandscapeInput: LandscapeInput;
  LeadershipManagement: LeadershipManagementModel;
  LeadershipManagementInput: LeadershipManagementInput;
  MachineLearning: MachineLearningModel;
  MachineLearningInput: MachineLearningInput;
  Management: ManagementModel;
  ManagementInput: ManagementInput;
  Massage: MassageModel;
  MassageInput: MassageInput;
  Medicine: MedicineModel;
  MedicineInput: MedicineInput;
  MentalHealth: MentalHealthModel;
  MentalHealthInput: MentalHealthInput;
  Music: MusicModel;
  MusicInput: MusicInput;
  Mutation: {};
  Nursing: NursingModel;
  NursingInput: NursingInput;
  Nutrition: NutritionModel;
  NutritionInput: NutritionInput;
  ProjectManagement: ProjectManagementModel;
  ProjectManagementInput: ProjectManagementInput;
  PublicHealth: PublicHealthModel;
  PublicHealthInput: PublicHealthInput;
  Query: {};
  Session: SessionModel;
  SocialMediaMarketing: SocialMediaMarketingModel;
  SocialMediaMarketingInput: SocialMediaMarketingInput;
  SoftwareDevelopment: SoftwareDevelopmentModel;
  SoftwareDevelopmentInput: SoftwareDevelopmentInput;
  SportDevelopment: SportDevelopmentModel;
  SportDevelopmentInput: SportDevelopmentInput;
  String: Scalars['String'];
  SupplyManagement: SupplyManagementModel;
  SupplyManagementInput: SupplyManagementInput;
  Telecommunication: TelecommunicationModel;
  TelecommunicationInput: TelecommunicationInput;
  Trades: TradesModel;
  TradesInput: TradesInput;
  TravelTourism: TravelTourismModel;
  TravelTourismInput: TravelTourismInput;
  User: UserModel;
  VerificationToken: VerificationTokenModel;
  Veterinary: VeterinaryModel;
  VeterinaryInput: VeterinaryInput;
  WebDevelopment: WebDevelopmentModel;
  WebDevelopmentInput: WebDevelopmentInput;
  Yoga: YogaModel;
  YogaInput: YogaInput;
};

export type AccountResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  session_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Acting'] = ResolversParentTypes['Acting']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgedCareResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['AgedCare'] = ResolversParentTypes['AgedCare']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgribusinessManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['AgribusinessManagement'] = ResolversParentTypes['AgribusinessManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AiResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Ai'] = ResolversParentTypes['Ai']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Animation3DResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Animation3D'] = ResolversParentTypes['Animation3D']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutomotiveResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Automotive'] = ResolversParentTypes['Automotive']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BakingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Baking'] = ResolversParentTypes['Baking']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BankingManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BankingManagement'] = ResolversParentTypes['BankingManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BeautyResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Beauty'] = ResolversParentTypes['Beauty']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockchainResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Blockchain'] = ResolversParentTypes['Blockchain']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogPostResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BlogPost'] = ResolversParentTypes['BlogPost']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusinessAnalysisResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BusinessAnalysis'] = ResolversParentTypes['BusinessAnalysis']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusinessManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BusinessManagement'] = ResolversParentTypes['BusinessManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarpentryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Carpentry'] = ResolversParentTypes['Carpentry']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Categories'] = ResolversParentTypes['Categories']> = {
  Acting?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AgedCare?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Agribusiness_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Ai?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Animation_3D?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Automotive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Baking?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Banking_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Beauty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Blockchain_Tech?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Blog?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Business_Analysis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Business_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Carpentry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Cloud_Computing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Commercial_Cooking?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Computer_Networking?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Construction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Data_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Dental?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Digital_Media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Education?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Events?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Fashion_Design?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Film_Media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Fitness?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Game_Programming?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Graphic_Design?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Haridressing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Hopitality_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Horticulture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Human_Resources?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Interior_Design?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  International_Business?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Intl_Hotel_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Landscape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Leadership_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Machine_Learning?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Massage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Medicine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Mental_Health?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Music_Audio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Nursing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Nutrition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Project_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Public_Health?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Socialmedia_Marketing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Software_Development?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Sport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Supplychain_Management?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Telecommunication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TravelTourism?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Vetenary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Web_Development?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Yoga?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  map?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CloudComputingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CloudComputing'] = ResolversParentTypes['CloudComputing']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComputerNetworkingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ComputerNetworking'] = ResolversParentTypes['ComputerNetworking']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConstructionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Construction'] = ResolversParentTypes['Construction']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CookeryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Cookery'] = ResolversParentTypes['Cookery']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DataManagement'] = ResolversParentTypes['DataManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DentalResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Dental'] = ResolversParentTypes['Dental']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DesignResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Design'] = ResolversParentTypes['Design']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DigitalMediaResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DigitalMedia'] = ResolversParentTypes['DigitalMedia']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EducationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Education'] = ResolversParentTypes['Education']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Events'] = ResolversParentTypes['Events']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FashionDesignResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FashionDesign'] = ResolversParentTypes['FashionDesign']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FitnessResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Fitness'] = ResolversParentTypes['Fitness']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameProgrammingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['GameProgramming'] = ResolversParentTypes['GameProgramming']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphicDesignResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['GraphicDesign'] = ResolversParentTypes['GraphicDesign']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HairdressingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Hairdressing'] = ResolversParentTypes['Hairdressing']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HealthResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Health'] = ResolversParentTypes['Health']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HorticultureResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Horticulture'] = ResolversParentTypes['Horticulture']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HospitalityResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Hospitality'] = ResolversParentTypes['Hospitality']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HospitalityManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['HospitalityManagement'] = ResolversParentTypes['HospitalityManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HotelManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['HotelManagement'] = ResolversParentTypes['HotelManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HumanResourcesResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['HumanResources'] = ResolversParentTypes['HumanResources']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InteriorDesignResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InteriorDesign'] = ResolversParentTypes['InteriorDesign']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntlBusinessResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IntlBusiness'] = ResolversParentTypes['IntlBusiness']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['It'] = ResolversParentTypes['It']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LandscapeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Landscape'] = ResolversParentTypes['Landscape']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeadershipManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['LeadershipManagement'] = ResolversParentTypes['LeadershipManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MachineLearningResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['MachineLearning'] = ResolversParentTypes['MachineLearning']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Management'] = ResolversParentTypes['Management']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MassageResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Massage'] = ResolversParentTypes['Massage']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedicineResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Medicine'] = ResolversParentTypes['Medicine']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MentalHealthResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['MentalHealth'] = ResolversParentTypes['MentalHealth']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MusicResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Music'] = ResolversParentTypes['Music']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addActing?: Resolver<Maybe<ResolversTypes['Acting']>, ParentType, ContextType, RequireFields<MutationAddActingArgs, 'input'>>;
  addAgedCare?: Resolver<Maybe<ResolversTypes['AgedCare']>, ParentType, ContextType, RequireFields<MutationAddAgedCareArgs, 'input'>>;
  addAgribusinessManagement?: Resolver<Maybe<ResolversTypes['AgribusinessManagement']>, ParentType, ContextType, RequireFields<MutationAddAgribusinessManagementArgs, 'input'>>;
  addAi?: Resolver<Maybe<ResolversTypes['Ai']>, ParentType, ContextType, Partial<MutationAddAiArgs>>;
  addAnimation3D?: Resolver<Maybe<ResolversTypes['Animation3D']>, ParentType, ContextType, RequireFields<MutationAddAnimation3DArgs, 'input'>>;
  addAutomotive?: Resolver<Maybe<ResolversTypes['Automotive']>, ParentType, ContextType, RequireFields<MutationAddAutomotiveArgs, 'input'>>;
  addBaking?: Resolver<Maybe<ResolversTypes['Baking']>, ParentType, ContextType, RequireFields<MutationAddBakingArgs, 'input'>>;
  addBankingManagement?: Resolver<Maybe<ResolversTypes['BankingManagement']>, ParentType, ContextType, RequireFields<MutationAddBankingManagementArgs, 'input'>>;
  addBeauty?: Resolver<Maybe<ResolversTypes['Beauty']>, ParentType, ContextType, RequireFields<MutationAddBeautyArgs, 'input'>>;
  addBlockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType, Partial<MutationAddBlockchainArgs>>;
  addBlogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<MutationAddBlogPostArgs, 'input'>>;
  addBusinessAnalysis?: Resolver<Maybe<ResolversTypes['BusinessAnalysis']>, ParentType, ContextType, Partial<MutationAddBusinessAnalysisArgs>>;
  addBusinessManagement?: Resolver<Maybe<ResolversTypes['BusinessManagement']>, ParentType, ContextType, RequireFields<MutationAddBusinessManagementArgs, 'input'>>;
  addCarpentry?: Resolver<Maybe<ResolversTypes['Carpentry']>, ParentType, ContextType, RequireFields<MutationAddCarpentryArgs, 'input'>>;
  addCloudComputing?: Resolver<Maybe<ResolversTypes['CloudComputing']>, ParentType, ContextType, Partial<MutationAddCloudComputingArgs>>;
  addComputerNetworking?: Resolver<Maybe<ResolversTypes['ComputerNetworking']>, ParentType, ContextType, Partial<MutationAddComputerNetworkingArgs>>;
  addConstruction?: Resolver<Maybe<ResolversTypes['Construction']>, ParentType, ContextType, RequireFields<MutationAddConstructionArgs, 'input'>>;
  addCookery?: Resolver<Maybe<ResolversTypes['Cookery']>, ParentType, ContextType, RequireFields<MutationAddCookeryArgs, 'input'>>;
  addDataManagement?: Resolver<Maybe<ResolversTypes['DataManagement']>, ParentType, ContextType, Partial<MutationAddDataManagementArgs>>;
  addDental?: Resolver<Maybe<ResolversTypes['Dental']>, ParentType, ContextType, RequireFields<MutationAddDentalArgs, 'input'>>;
  addDesign?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType, RequireFields<MutationAddDesignArgs, 'input'>>;
  addDigitalMedia?: Resolver<Maybe<ResolversTypes['DigitalMedia']>, ParentType, ContextType, RequireFields<MutationAddDigitalMediaArgs, 'input'>>;
  addEducation?: Resolver<Maybe<ResolversTypes['Education']>, ParentType, ContextType, RequireFields<MutationAddEducationArgs, 'input'>>;
  addEvents?: Resolver<Maybe<ResolversTypes['Events']>, ParentType, ContextType, RequireFields<MutationAddEventsArgs, 'input'>>;
  addFashionDesign?: Resolver<Maybe<ResolversTypes['FashionDesign']>, ParentType, ContextType, RequireFields<MutationAddFashionDesignArgs, 'input'>>;
  addFilm?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, RequireFields<MutationAddFilmArgs, 'input'>>;
  addFitness?: Resolver<Maybe<ResolversTypes['Fitness']>, ParentType, ContextType, RequireFields<MutationAddFitnessArgs, 'input'>>;
  addGameProgramming?: Resolver<Maybe<ResolversTypes['GameProgramming']>, ParentType, ContextType, Partial<MutationAddGameProgrammingArgs>>;
  addGraphicDesign?: Resolver<Maybe<ResolversTypes['GraphicDesign']>, ParentType, ContextType, RequireFields<MutationAddGraphicDesignArgs, 'input'>>;
  addHairdressing?: Resolver<Maybe<ResolversTypes['Hairdressing']>, ParentType, ContextType, RequireFields<MutationAddHairdressingArgs, 'input'>>;
  addHealth?: Resolver<Maybe<ResolversTypes['Health']>, ParentType, ContextType, RequireFields<MutationAddHealthArgs, 'input'>>;
  addHorticulture?: Resolver<Maybe<ResolversTypes['Horticulture']>, ParentType, ContextType, RequireFields<MutationAddHorticultureArgs, 'input'>>;
  addHospitality?: Resolver<Maybe<ResolversTypes['Hospitality']>, ParentType, ContextType, RequireFields<MutationAddHospitalityArgs, 'input'>>;
  addHospitalityManagement?: Resolver<Maybe<ResolversTypes['HospitalityManagement']>, ParentType, ContextType, RequireFields<MutationAddHospitalityManagementArgs, 'input'>>;
  addHotelManagement?: Resolver<Maybe<ResolversTypes['HotelManagement']>, ParentType, ContextType, RequireFields<MutationAddHotelManagementArgs, 'input'>>;
  addHumanResources?: Resolver<Maybe<ResolversTypes['HumanResources']>, ParentType, ContextType, RequireFields<MutationAddHumanResourcesArgs, 'input'>>;
  addInteriorDesign?: Resolver<Maybe<ResolversTypes['InteriorDesign']>, ParentType, ContextType, RequireFields<MutationAddInteriorDesignArgs, 'input'>>;
  addIntlBusiness?: Resolver<Maybe<ResolversTypes['IntlBusiness']>, ParentType, ContextType, RequireFields<MutationAddIntlBusinessArgs, 'input'>>;
  addIt?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType, RequireFields<MutationAddItArgs, 'input'>>;
  addLandscape?: Resolver<Maybe<ResolversTypes['Landscape']>, ParentType, ContextType, RequireFields<MutationAddLandscapeArgs, 'input'>>;
  addLeadershipManagement?: Resolver<Maybe<ResolversTypes['LeadershipManagement']>, ParentType, ContextType, RequireFields<MutationAddLeadershipManagementArgs, 'input'>>;
  addMachineLearning?: Resolver<Maybe<ResolversTypes['MachineLearning']>, ParentType, ContextType, Partial<MutationAddMachineLearningArgs>>;
  addManagement?: Resolver<Maybe<ResolversTypes['Management']>, ParentType, ContextType, RequireFields<MutationAddManagementArgs, 'input'>>;
  addMassage?: Resolver<Maybe<ResolversTypes['Massage']>, ParentType, ContextType, RequireFields<MutationAddMassageArgs, 'input'>>;
  addMedicine?: Resolver<Maybe<ResolversTypes['Medicine']>, ParentType, ContextType, RequireFields<MutationAddMedicineArgs, 'input'>>;
  addMentalHealth?: Resolver<Maybe<ResolversTypes['MentalHealth']>, ParentType, ContextType, RequireFields<MutationAddMentalHealthArgs, 'input'>>;
  addMusic?: Resolver<Maybe<ResolversTypes['Music']>, ParentType, ContextType, RequireFields<MutationAddMusicArgs, 'input'>>;
  addNursing?: Resolver<Maybe<ResolversTypes['Nursing']>, ParentType, ContextType, RequireFields<MutationAddNursingArgs, 'input'>>;
  addNutrition?: Resolver<Maybe<ResolversTypes['Nutrition']>, ParentType, ContextType, RequireFields<MutationAddNutritionArgs, 'input'>>;
  addProjectManagement?: Resolver<Maybe<ResolversTypes['ProjectManagement']>, ParentType, ContextType, RequireFields<MutationAddProjectManagementArgs, 'input'>>;
  addPublicHealth?: Resolver<Maybe<ResolversTypes['PublicHealth']>, ParentType, ContextType, RequireFields<MutationAddPublicHealthArgs, 'input'>>;
  addSocialMediaMarketing?: Resolver<Maybe<ResolversTypes['SocialMediaMarketing']>, ParentType, ContextType, RequireFields<MutationAddSocialMediaMarketingArgs, 'input'>>;
  addSoftwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, Partial<MutationAddSoftwareDevelopmentArgs>>;
  addSportDevelopment?: Resolver<Maybe<ResolversTypes['SportDevelopment']>, ParentType, ContextType, RequireFields<MutationAddSportDevelopmentArgs, 'input'>>;
  addSupplyManagement?: Resolver<Maybe<ResolversTypes['SupplyManagement']>, ParentType, ContextType, RequireFields<MutationAddSupplyManagementArgs, 'input'>>;
  addTelecommunication?: Resolver<Maybe<ResolversTypes['Telecommunication']>, ParentType, ContextType, Partial<MutationAddTelecommunicationArgs>>;
  addTrades?: Resolver<Maybe<ResolversTypes['Trades']>, ParentType, ContextType, RequireFields<MutationAddTradesArgs, 'input'>>;
  addTravelTourism?: Resolver<Maybe<ResolversTypes['TravelTourism']>, ParentType, ContextType, RequireFields<MutationAddTravelTourismArgs, 'input'>>;
  addVeterinary?: Resolver<Maybe<ResolversTypes['Veterinary']>, ParentType, ContextType, RequireFields<MutationAddVeterinaryArgs, 'input'>>;
  addWebDevelopment?: Resolver<Maybe<ResolversTypes['WebDevelopment']>, ParentType, ContextType, Partial<MutationAddWebDevelopmentArgs>>;
  addYoga?: Resolver<Maybe<ResolversTypes['Yoga']>, ParentType, ContextType, RequireFields<MutationAddYogaArgs, 'input'>>;
  updateActing?: Resolver<Maybe<ResolversTypes['Acting']>, ParentType, ContextType, RequireFields<MutationUpdateActingArgs, 'input'>>;
  updateAgedCare?: Resolver<Maybe<ResolversTypes['AgedCare']>, ParentType, ContextType, RequireFields<MutationUpdateAgedCareArgs, 'input'>>;
  updateAgribusinessManagement?: Resolver<Maybe<ResolversTypes['AgribusinessManagement']>, ParentType, ContextType, RequireFields<MutationUpdateAgribusinessManagementArgs, 'input'>>;
  updateAi?: Resolver<Maybe<ResolversTypes['Ai']>, ParentType, ContextType, RequireFields<MutationUpdateAiArgs, 'input'>>;
  updateAnimation3D?: Resolver<Maybe<ResolversTypes['Animation3D']>, ParentType, ContextType, RequireFields<MutationUpdateAnimation3DArgs, 'input'>>;
  updateAutomotive?: Resolver<Maybe<ResolversTypes['Automotive']>, ParentType, ContextType, RequireFields<MutationUpdateAutomotiveArgs, 'input'>>;
  updateBaking?: Resolver<Maybe<ResolversTypes['Baking']>, ParentType, ContextType, RequireFields<MutationUpdateBakingArgs, 'input'>>;
  updateBankingManagement?: Resolver<Maybe<ResolversTypes['BankingManagement']>, ParentType, ContextType, RequireFields<MutationUpdateBankingManagementArgs, 'input'>>;
  updateBeauty?: Resolver<Maybe<ResolversTypes['Beauty']>, ParentType, ContextType, RequireFields<MutationUpdateBeautyArgs, 'input'>>;
  updateBlockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType, RequireFields<MutationUpdateBlockchainArgs, 'input'>>;
  updateBlogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<MutationUpdateBlogPostArgs, 'input'>>;
  updateBusinessAnalysis?: Resolver<Maybe<ResolversTypes['BusinessAnalysis']>, ParentType, ContextType, RequireFields<MutationUpdateBusinessAnalysisArgs, 'input'>>;
  updateBusinessManagement?: Resolver<Maybe<ResolversTypes['BusinessManagement']>, ParentType, ContextType, RequireFields<MutationUpdateBusinessManagementArgs, 'input'>>;
  updateCarpentry?: Resolver<Maybe<ResolversTypes['Carpentry']>, ParentType, ContextType, RequireFields<MutationUpdateCarpentryArgs, 'input'>>;
  updateCloudComputing?: Resolver<Maybe<ResolversTypes['CloudComputing']>, ParentType, ContextType, RequireFields<MutationUpdateCloudComputingArgs, 'input'>>;
  updateComputerNetworking?: Resolver<Maybe<ResolversTypes['ComputerNetworking']>, ParentType, ContextType, RequireFields<MutationUpdateComputerNetworkingArgs, 'input'>>;
  updateConstruction?: Resolver<Maybe<ResolversTypes['Construction']>, ParentType, ContextType, RequireFields<MutationUpdateConstructionArgs, 'input'>>;
  updateCookery?: Resolver<Maybe<ResolversTypes['Cookery']>, ParentType, ContextType, RequireFields<MutationUpdateCookeryArgs, 'input'>>;
  updateDataManagement?: Resolver<Maybe<ResolversTypes['DataManagement']>, ParentType, ContextType, RequireFields<MutationUpdateDataManagementArgs, 'input'>>;
  updateDental?: Resolver<Maybe<ResolversTypes['Dental']>, ParentType, ContextType, RequireFields<MutationUpdateDentalArgs, 'input'>>;
  updateDesign?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType, RequireFields<MutationUpdateDesignArgs, 'input'>>;
  updateDigitalMedia?: Resolver<Maybe<ResolversTypes['DigitalMedia']>, ParentType, ContextType, RequireFields<MutationUpdateDigitalMediaArgs, 'input'>>;
  updateEducation?: Resolver<Maybe<ResolversTypes['Education']>, ParentType, ContextType, RequireFields<MutationUpdateEducationArgs, 'input'>>;
  updateEvents?: Resolver<Maybe<ResolversTypes['Events']>, ParentType, ContextType, RequireFields<MutationUpdateEventsArgs, 'input'>>;
  updateFashionDesign?: Resolver<Maybe<ResolversTypes['FashionDesign']>, ParentType, ContextType, RequireFields<MutationUpdateFashionDesignArgs, 'input'>>;
  updateFilm?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, RequireFields<MutationUpdateFilmArgs, 'input'>>;
  updateFitness?: Resolver<Maybe<ResolversTypes['Fitness']>, ParentType, ContextType, RequireFields<MutationUpdateFitnessArgs, 'input'>>;
  updateGameProgramming?: Resolver<Maybe<ResolversTypes['GameProgramming']>, ParentType, ContextType, RequireFields<MutationUpdateGameProgrammingArgs, 'input'>>;
  updateGraphicDesign?: Resolver<Maybe<ResolversTypes['GraphicDesign']>, ParentType, ContextType, RequireFields<MutationUpdateGraphicDesignArgs, 'input'>>;
  updateHairdressing?: Resolver<Maybe<ResolversTypes['Hairdressing']>, ParentType, ContextType, RequireFields<MutationUpdateHairdressingArgs, 'input'>>;
  updateHealth?: Resolver<Maybe<ResolversTypes['Health']>, ParentType, ContextType, RequireFields<MutationUpdateHealthArgs, 'input'>>;
  updateHorticulture?: Resolver<Maybe<ResolversTypes['Horticulture']>, ParentType, ContextType, RequireFields<MutationUpdateHorticultureArgs, 'input'>>;
  updateHospitality?: Resolver<Maybe<ResolversTypes['Hospitality']>, ParentType, ContextType, RequireFields<MutationUpdateHospitalityArgs, 'input'>>;
  updateHospitalityManagement?: Resolver<Maybe<ResolversTypes['HospitalityManagement']>, ParentType, ContextType, RequireFields<MutationUpdateHospitalityManagementArgs, 'input'>>;
  updateHotelManagement?: Resolver<Maybe<ResolversTypes['HotelManagement']>, ParentType, ContextType, RequireFields<MutationUpdateHotelManagementArgs, 'input'>>;
  updateHumanResources?: Resolver<Maybe<ResolversTypes['HumanResources']>, ParentType, ContextType, RequireFields<MutationUpdateHumanResourcesArgs, 'input'>>;
  updateInteriorDesign?: Resolver<Maybe<ResolversTypes['InteriorDesign']>, ParentType, ContextType, RequireFields<MutationUpdateInteriorDesignArgs, 'input'>>;
  updateIntlBusiness?: Resolver<Maybe<ResolversTypes['IntlBusiness']>, ParentType, ContextType, RequireFields<MutationUpdateIntlBusinessArgs, 'input'>>;
  updateIt?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType, RequireFields<MutationUpdateItArgs, 'input'>>;
  updateLandscape?: Resolver<Maybe<ResolversTypes['Landscape']>, ParentType, ContextType, RequireFields<MutationUpdateLandscapeArgs, 'input'>>;
  updateLeadershipManagement?: Resolver<Maybe<ResolversTypes['LeadershipManagement']>, ParentType, ContextType, RequireFields<MutationUpdateLeadershipManagementArgs, 'input'>>;
  updateMachineLearning?: Resolver<Maybe<ResolversTypes['MachineLearning']>, ParentType, ContextType, RequireFields<MutationUpdateMachineLearningArgs, 'input'>>;
  updateManagement?: Resolver<Maybe<ResolversTypes['Management']>, ParentType, ContextType, RequireFields<MutationUpdateManagementArgs, 'input'>>;
  updateMassage?: Resolver<Maybe<ResolversTypes['Massage']>, ParentType, ContextType, RequireFields<MutationUpdateMassageArgs, 'input'>>;
  updateMedicine?: Resolver<Maybe<ResolversTypes['Medicine']>, ParentType, ContextType, RequireFields<MutationUpdateMedicineArgs, 'input'>>;
  updateMentalHealth?: Resolver<Maybe<ResolversTypes['MentalHealth']>, ParentType, ContextType, RequireFields<MutationUpdateMentalHealthArgs, 'input'>>;
  updateMusic?: Resolver<Maybe<ResolversTypes['Music']>, ParentType, ContextType, RequireFields<MutationUpdateMusicArgs, 'input'>>;
  updateNursing?: Resolver<Maybe<ResolversTypes['Nursing']>, ParentType, ContextType, RequireFields<MutationUpdateNursingArgs, 'input'>>;
  updateNutrition?: Resolver<Maybe<ResolversTypes['Nutrition']>, ParentType, ContextType, RequireFields<MutationUpdateNutritionArgs, 'input'>>;
  updateProjectManagement?: Resolver<Maybe<ResolversTypes['ProjectManagement']>, ParentType, ContextType, RequireFields<MutationUpdateProjectManagementArgs, 'input'>>;
  updatePublicHealth?: Resolver<Maybe<ResolversTypes['PublicHealth']>, ParentType, ContextType, RequireFields<MutationUpdatePublicHealthArgs, 'input'>>;
  updateSocialMediaMarketing?: Resolver<Maybe<ResolversTypes['SocialMediaMarketing']>, ParentType, ContextType, RequireFields<MutationUpdateSocialMediaMarketingArgs, 'input'>>;
  updateSoftwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, RequireFields<MutationUpdateSoftwareDevelopmentArgs, 'input'>>;
  updateSportDevelopment?: Resolver<Maybe<ResolversTypes['SportDevelopment']>, ParentType, ContextType, RequireFields<MutationUpdateSportDevelopmentArgs, 'input'>>;
  updateSupplyManagement?: Resolver<Maybe<ResolversTypes['SupplyManagement']>, ParentType, ContextType, RequireFields<MutationUpdateSupplyManagementArgs, 'input'>>;
  updateTelecommunication?: Resolver<Maybe<ResolversTypes['Telecommunication']>, ParentType, ContextType, RequireFields<MutationUpdateTelecommunicationArgs, 'input'>>;
  updateTrades?: Resolver<Maybe<ResolversTypes['Trades']>, ParentType, ContextType, RequireFields<MutationUpdateTradesArgs, 'input'>>;
  updateTravelTourism?: Resolver<Maybe<ResolversTypes['TravelTourism']>, ParentType, ContextType, RequireFields<MutationUpdateTravelTourismArgs, 'input'>>;
  updateVeterinary?: Resolver<Maybe<ResolversTypes['Veterinary']>, ParentType, ContextType, RequireFields<MutationUpdateVeterinaryArgs, 'input'>>;
  updateWebDevelopment?: Resolver<Maybe<ResolversTypes['WebDevelopment']>, ParentType, ContextType, RequireFields<MutationUpdateWebDevelopmentArgs, 'input'>>;
  updateYoga?: Resolver<Maybe<ResolversTypes['Yoga']>, ParentType, ContextType, RequireFields<MutationUpdateYogaArgs, 'input'>>;
};

export type NursingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Nursing'] = ResolversParentTypes['Nursing']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NutritionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Nutrition'] = ResolversParentTypes['Nutrition']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ProjectManagement'] = ResolversParentTypes['ProjectManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicHealthResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PublicHealth'] = ResolversParentTypes['PublicHealth']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  acting?: Resolver<Maybe<ResolversTypes['Acting']>, ParentType, ContextType, RequireFields<QueryActingArgs, 'id'>>;
  actingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Acting']>>>, ParentType, ContextType>;
  agedCare?: Resolver<Maybe<ResolversTypes['AgedCare']>, ParentType, ContextType, RequireFields<QueryAgedCareArgs, 'id'>>;
  agedCareCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['AgedCare']>>>, ParentType, ContextType>;
  agribusinessManagement?: Resolver<Maybe<ResolversTypes['AgribusinessManagement']>, ParentType, ContextType, RequireFields<QueryAgribusinessManagementArgs, 'id'>>;
  agribusinessManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['AgribusinessManagement']>>>, ParentType, ContextType>;
  ai?: Resolver<Maybe<ResolversTypes['Ai']>, ParentType, ContextType, RequireFields<QueryAiArgs, 'id'>>;
  aiCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ai']>>>, ParentType, ContextType>;
  animation3D?: Resolver<Maybe<ResolversTypes['Animation3D']>, ParentType, ContextType, RequireFields<QueryAnimation3DArgs, 'id'>>;
  animation3DCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Animation3D']>>>, ParentType, ContextType>;
  automotive?: Resolver<Maybe<ResolversTypes['Automotive']>, ParentType, ContextType, RequireFields<QueryAutomotiveArgs, 'id'>>;
  automotiveCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Automotive']>>>, ParentType, ContextType>;
  baking?: Resolver<Maybe<ResolversTypes['Baking']>, ParentType, ContextType, RequireFields<QueryBakingArgs, 'id'>>;
  bakingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Baking']>>>, ParentType, ContextType>;
  bankingManagement?: Resolver<Maybe<ResolversTypes['BankingManagement']>, ParentType, ContextType, RequireFields<QueryBankingManagementArgs, 'id'>>;
  bankingManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['BankingManagement']>>>, ParentType, ContextType>;
  beauty?: Resolver<Maybe<ResolversTypes['Beauty']>, ParentType, ContextType, RequireFields<QueryBeautyArgs, 'id'>>;
  beautyCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Beauty']>>>, ParentType, ContextType>;
  blockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType, RequireFields<QueryBlockchainArgs, 'id'>>;
  blockchainCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Blockchain']>>>, ParentType, ContextType>;
  blogCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  blogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<QueryBlogPostArgs, 'id'>>;
  blogPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  businessAnalysis?: Resolver<Maybe<ResolversTypes['BusinessAnalysis']>, ParentType, ContextType, RequireFields<QueryBusinessAnalysisArgs, 'id'>>;
  businessAnalysisCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['BusinessAnalysis']>>>, ParentType, ContextType>;
  businessManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['BusinessManagement']>>>, ParentType, ContextType>;
  carpentry?: Resolver<Maybe<ResolversTypes['Carpentry']>, ParentType, ContextType, RequireFields<QueryCarpentryArgs, 'id'>>;
  carpentryCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Carpentry']>>>, ParentType, ContextType>;
  cloudComputing?: Resolver<Maybe<ResolversTypes['CloudComputing']>, ParentType, ContextType, RequireFields<QueryCloudComputingArgs, 'id'>>;
  cloudComputingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudComputing']>>>, ParentType, ContextType>;
  computerNetworking?: Resolver<Maybe<ResolversTypes['ComputerNetworking']>, ParentType, ContextType, RequireFields<QueryComputerNetworkingArgs, 'id'>>;
  computerNetworkingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComputerNetworking']>>>, ParentType, ContextType>;
  construction?: Resolver<Maybe<ResolversTypes['Construction']>, ParentType, ContextType, RequireFields<QueryConstructionArgs, 'id'>>;
  constructionCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Construction']>>>, ParentType, ContextType>;
  cookery?: Resolver<Maybe<ResolversTypes['Cookery']>, ParentType, ContextType, RequireFields<QueryCookeryArgs, 'id'>>;
  cookeryCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cookery']>>>, ParentType, ContextType>;
  dataManagement?: Resolver<Maybe<ResolversTypes['DataManagement']>, ParentType, ContextType, RequireFields<QueryDataManagementArgs, 'id'>>;
  dataManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataManagement']>>>, ParentType, ContextType>;
  dental?: Resolver<Maybe<ResolversTypes['Dental']>, ParentType, ContextType, RequireFields<QueryDentalArgs, 'id'>>;
  dentalCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dental']>>>, ParentType, ContextType>;
  design?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType, RequireFields<QueryDesignArgs, 'id'>>;
  digitalMedia?: Resolver<Maybe<ResolversTypes['DigitalMedia']>, ParentType, ContextType, RequireFields<QueryDigitalMediaArgs, 'id'>>;
  digitalMediaCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['DigitalMedia']>>>, ParentType, ContextType>;
  education?: Resolver<Maybe<ResolversTypes['Education']>, ParentType, ContextType, RequireFields<QueryEducationArgs, 'id'>>;
  educationCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Education']>>>, ParentType, ContextType>;
  events?: Resolver<Maybe<ResolversTypes['Events']>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'id'>>;
  eventsCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Events']>>>, ParentType, ContextType>;
  fashionDesign?: Resolver<Maybe<ResolversTypes['FashionDesign']>, ParentType, ContextType, RequireFields<QueryFashionDesignArgs, 'id'>>;
  fashionDesignCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['FashionDesign']>>>, ParentType, ContextType>;
  film?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, RequireFields<QueryFilmArgs, 'id'>>;
  filmCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  fitness?: Resolver<Maybe<ResolversTypes['Fitness']>, ParentType, ContextType, RequireFields<QueryFitnessArgs, 'id'>>;
  fitnessCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Fitness']>>>, ParentType, ContextType>;
  gameProgramming?: Resolver<Maybe<ResolversTypes['GameProgramming']>, ParentType, ContextType, RequireFields<QueryGameProgrammingArgs, 'id'>>;
  gameProgrammingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['GameProgramming']>>>, ParentType, ContextType>;
  graphicDesign?: Resolver<Maybe<ResolversTypes['GraphicDesign']>, ParentType, ContextType, RequireFields<QueryGraphicDesignArgs, 'id'>>;
  graphicDesignCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['GraphicDesign']>>>, ParentType, ContextType>;
  hairdressing?: Resolver<Maybe<ResolversTypes['Hairdressing']>, ParentType, ContextType, RequireFields<QueryHairdressingArgs, 'id'>>;
  hairdressingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hairdressing']>>>, ParentType, ContextType>;
  health?: Resolver<Maybe<ResolversTypes['Health']>, ParentType, ContextType, RequireFields<QueryHealthArgs, 'id'>>;
  horticulture?: Resolver<Maybe<ResolversTypes['Horticulture']>, ParentType, ContextType, RequireFields<QueryHorticultureArgs, 'id'>>;
  horticultureCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Horticulture']>>>, ParentType, ContextType>;
  hospitality?: Resolver<Maybe<ResolversTypes['Hospitality']>, ParentType, ContextType, RequireFields<QueryHospitalityArgs, 'id'>>;
  hospitalityManagement?: Resolver<Maybe<ResolversTypes['HospitalityManagement']>, ParentType, ContextType, RequireFields<QueryHospitalityManagementArgs, 'id'>>;
  hospitalityManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['HospitalityManagement']>>>, ParentType, ContextType>;
  hotelManagement?: Resolver<Maybe<ResolversTypes['HotelManagement']>, ParentType, ContextType, RequireFields<QueryHotelManagementArgs, 'id'>>;
  hotelManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['HotelManagement']>>>, ParentType, ContextType>;
  humanResources?: Resolver<Maybe<ResolversTypes['HumanResources']>, ParentType, ContextType, RequireFields<QueryHumanResourcesArgs, 'id'>>;
  humanResourcesCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['HumanResources']>>>, ParentType, ContextType>;
  interiorDesign?: Resolver<Maybe<ResolversTypes['InteriorDesign']>, ParentType, ContextType, RequireFields<QueryInteriorDesignArgs, 'id'>>;
  interiorDesignCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['InteriorDesign']>>>, ParentType, ContextType>;
  intlBusiness?: Resolver<Maybe<ResolversTypes['IntlBusiness']>, ParentType, ContextType, RequireFields<QueryIntlBusinessArgs, 'id'>>;
  intlBusinessCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['IntlBusiness']>>>, ParentType, ContextType>;
  it?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType, RequireFields<QueryItArgs, 'id'>>;
  landscape?: Resolver<Maybe<ResolversTypes['Landscape']>, ParentType, ContextType, RequireFields<QueryLandscapeArgs, 'id'>>;
  landscapeCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Landscape']>>>, ParentType, ContextType>;
  leadershipManagement?: Resolver<Maybe<ResolversTypes['LeadershipManagement']>, ParentType, ContextType, RequireFields<QueryLeadershipManagementArgs, 'id'>>;
  leadershipManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeadershipManagement']>>>, ParentType, ContextType>;
  machineLearning?: Resolver<Maybe<ResolversTypes['MachineLearning']>, ParentType, ContextType, RequireFields<QueryMachineLearningArgs, 'id'>>;
  machineLearningCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['MachineLearning']>>>, ParentType, ContextType>;
  management?: Resolver<Maybe<ResolversTypes['Management']>, ParentType, ContextType, RequireFields<QueryManagementArgs, 'id'>>;
  massage?: Resolver<Maybe<ResolversTypes['Massage']>, ParentType, ContextType, RequireFields<QueryMassageArgs, 'id'>>;
  massageCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Massage']>>>, ParentType, ContextType>;
  medicine?: Resolver<Maybe<ResolversTypes['Medicine']>, ParentType, ContextType, RequireFields<QueryMedicineArgs, 'id'>>;
  medicineCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Medicine']>>>, ParentType, ContextType>;
  mentalHealth?: Resolver<Maybe<ResolversTypes['MentalHealth']>, ParentType, ContextType, RequireFields<QueryMentalHealthArgs, 'id'>>;
  mentalHealthCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['MentalHealth']>>>, ParentType, ContextType>;
  music?: Resolver<Maybe<ResolversTypes['Music']>, ParentType, ContextType, RequireFields<QueryMusicArgs, 'id'>>;
  musicCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Music']>>>, ParentType, ContextType>;
  nursing?: Resolver<Maybe<ResolversTypes['Nursing']>, ParentType, ContextType, RequireFields<QueryNursingArgs, 'id'>>;
  nursingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Nursing']>>>, ParentType, ContextType>;
  nutrition?: Resolver<Maybe<ResolversTypes['Nutrition']>, ParentType, ContextType, RequireFields<QueryNutritionArgs, 'id'>>;
  nutritionCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Nutrition']>>>, ParentType, ContextType>;
  projectManagement?: Resolver<Maybe<ResolversTypes['ProjectManagement']>, ParentType, ContextType, RequireFields<QueryProjectManagementArgs, 'id'>>;
  projectManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProjectManagement']>>>, ParentType, ContextType>;
  publicHealth?: Resolver<Maybe<ResolversTypes['PublicHealth']>, ParentType, ContextType, RequireFields<QueryPublicHealthArgs, 'id'>>;
  publicHealthCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicHealth']>>>, ParentType, ContextType>;
  pusinessManagement?: Resolver<Maybe<ResolversTypes['BusinessManagement']>, ParentType, ContextType, RequireFields<QueryPusinessManagementArgs, 'id'>>;
  socialMediaMarketing?: Resolver<Maybe<ResolversTypes['SocialMediaMarketing']>, ParentType, ContextType, RequireFields<QuerySocialMediaMarketingArgs, 'id'>>;
  socialMediaMarketingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['SocialMediaMarketing']>>>, ParentType, ContextType>;
  softwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, RequireFields<QuerySoftwareDevelopmentArgs, 'id'>>;
  softwareDevelopmentCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['SoftwareDevelopment']>>>, ParentType, ContextType>;
  sportDevelopment?: Resolver<Maybe<ResolversTypes['SportDevelopment']>, ParentType, ContextType, RequireFields<QuerySportDevelopmentArgs, 'id'>>;
  sportDevelopmentCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['SportDevelopment']>>>, ParentType, ContextType>;
  supplyManagement?: Resolver<Maybe<ResolversTypes['SupplyManagement']>, ParentType, ContextType, RequireFields<QuerySupplyManagementArgs, 'id'>>;
  supplyManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['SupplyManagement']>>>, ParentType, ContextType>;
  telecommunication?: Resolver<Maybe<ResolversTypes['Telecommunication']>, ParentType, ContextType, RequireFields<QueryTelecommunicationArgs, 'id'>>;
  telecommunicationCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Telecommunication']>>>, ParentType, ContextType>;
  trades?: Resolver<Maybe<ResolversTypes['Trades']>, ParentType, ContextType, RequireFields<QueryTradesArgs, 'id'>>;
  travelTourism?: Resolver<Maybe<ResolversTypes['TravelTourism']>, ParentType, ContextType, RequireFields<QueryTravelTourismArgs, 'id'>>;
  travelTourismCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['TravelTourism']>>>, ParentType, ContextType>;
  veterinary?: Resolver<Maybe<ResolversTypes['Veterinary']>, ParentType, ContextType, RequireFields<QueryVeterinaryArgs, 'id'>>;
  veterinaryCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Veterinary']>>>, ParentType, ContextType>;
  webDevelopment?: Resolver<Maybe<ResolversTypes['WebDevelopment']>, ParentType, ContextType, RequireFields<QueryWebDevelopmentArgs, 'id'>>;
  webDevelopmentCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebDevelopment']>>>, ParentType, ContextType>;
  yoga?: Resolver<Maybe<ResolversTypes['Yoga']>, ParentType, ContextType, RequireFields<QueryYogaArgs, 'id'>>;
  yogaCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Yoga']>>>, ParentType, ContextType>;
};

export type SessionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialMediaMarketingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SocialMediaMarketing'] = ResolversParentTypes['SocialMediaMarketing']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SoftwareDevelopmentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SoftwareDevelopment'] = ResolversParentTypes['SoftwareDevelopment']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportDevelopmentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SportDevelopment'] = ResolversParentTypes['SportDevelopment']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplyManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SupplyManagement'] = ResolversParentTypes['SupplyManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TelecommunicationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Telecommunication'] = ResolversParentTypes['Telecommunication']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TradesResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Trades'] = ResolversParentTypes['Trades']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TravelTourismResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TravelTourism'] = ResolversParentTypes['TravelTourism']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Session']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationTokenResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['VerificationToken'] = ResolversParentTypes['VerificationToken']> = {
  expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VeterinaryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Veterinary'] = ResolversParentTypes['Veterinary']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebDevelopmentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WebDevelopment'] = ResolversParentTypes['WebDevelopment']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YogaResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Yoga'] = ResolversParentTypes['Yoga']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Account?: AccountResolvers<ContextType>;
  Acting?: ActingResolvers<ContextType>;
  AgedCare?: AgedCareResolvers<ContextType>;
  AgribusinessManagement?: AgribusinessManagementResolvers<ContextType>;
  Ai?: AiResolvers<ContextType>;
  Animation3D?: Animation3DResolvers<ContextType>;
  Automotive?: AutomotiveResolvers<ContextType>;
  Baking?: BakingResolvers<ContextType>;
  BankingManagement?: BankingManagementResolvers<ContextType>;
  Beauty?: BeautyResolvers<ContextType>;
  Blockchain?: BlockchainResolvers<ContextType>;
  BlogPost?: BlogPostResolvers<ContextType>;
  BusinessAnalysis?: BusinessAnalysisResolvers<ContextType>;
  BusinessManagement?: BusinessManagementResolvers<ContextType>;
  Carpentry?: CarpentryResolvers<ContextType>;
  Categories?: CategoriesResolvers<ContextType>;
  CloudComputing?: CloudComputingResolvers<ContextType>;
  ComputerNetworking?: ComputerNetworkingResolvers<ContextType>;
  Construction?: ConstructionResolvers<ContextType>;
  Cookery?: CookeryResolvers<ContextType>;
  DataManagement?: DataManagementResolvers<ContextType>;
  Dental?: DentalResolvers<ContextType>;
  Design?: DesignResolvers<ContextType>;
  DigitalMedia?: DigitalMediaResolvers<ContextType>;
  Education?: EducationResolvers<ContextType>;
  Events?: EventsResolvers<ContextType>;
  FashionDesign?: FashionDesignResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  Fitness?: FitnessResolvers<ContextType>;
  GameProgramming?: GameProgrammingResolvers<ContextType>;
  GraphicDesign?: GraphicDesignResolvers<ContextType>;
  Hairdressing?: HairdressingResolvers<ContextType>;
  Health?: HealthResolvers<ContextType>;
  Horticulture?: HorticultureResolvers<ContextType>;
  Hospitality?: HospitalityResolvers<ContextType>;
  HospitalityManagement?: HospitalityManagementResolvers<ContextType>;
  HotelManagement?: HotelManagementResolvers<ContextType>;
  HumanResources?: HumanResourcesResolvers<ContextType>;
  InteriorDesign?: InteriorDesignResolvers<ContextType>;
  IntlBusiness?: IntlBusinessResolvers<ContextType>;
  It?: ItResolvers<ContextType>;
  Landscape?: LandscapeResolvers<ContextType>;
  LeadershipManagement?: LeadershipManagementResolvers<ContextType>;
  MachineLearning?: MachineLearningResolvers<ContextType>;
  Management?: ManagementResolvers<ContextType>;
  Massage?: MassageResolvers<ContextType>;
  Medicine?: MedicineResolvers<ContextType>;
  MentalHealth?: MentalHealthResolvers<ContextType>;
  Music?: MusicResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Nursing?: NursingResolvers<ContextType>;
  Nutrition?: NutritionResolvers<ContextType>;
  ProjectManagement?: ProjectManagementResolvers<ContextType>;
  PublicHealth?: PublicHealthResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SocialMediaMarketing?: SocialMediaMarketingResolvers<ContextType>;
  SoftwareDevelopment?: SoftwareDevelopmentResolvers<ContextType>;
  SportDevelopment?: SportDevelopmentResolvers<ContextType>;
  SupplyManagement?: SupplyManagementResolvers<ContextType>;
  Telecommunication?: TelecommunicationResolvers<ContextType>;
  Trades?: TradesResolvers<ContextType>;
  TravelTourism?: TravelTourismResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  VerificationToken?: VerificationTokenResolvers<ContextType>;
  Veterinary?: VeterinaryResolvers<ContextType>;
  WebDevelopment?: WebDevelopmentResolvers<ContextType>;
  Yoga?: YogaResolvers<ContextType>;
};


export const BlogCardFragmentDoc = gql`
    fragment BlogCard on BlogPost {
  category
  id
  title
  subtitle1
}
    `;
export const BlogPostFragmentDoc = gql`
    fragment BlogPost on BlogPost {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const ActingCardFragmentDoc = gql`
    fragment ActingCard on Acting {
  category
  id
  title
  subtitle1
}
    `;
export const ActingFragmentDoc = gql`
    fragment Acting on Acting {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const Animation3DCardFragmentDoc = gql`
    fragment Animation3DCard on Animation3D {
  category
  id
  title
  subtitle1
}
    `;
export const Animation3DFragmentDoc = gql`
    fragment Animation3D on Animation3D {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const DesignFragmentDoc = gql`
    fragment Design on Design {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const DigitalMediaCardFragmentDoc = gql`
    fragment DigitalMediaCard on DigitalMedia {
  category
  id
  title
  subtitle1
}
    `;
export const DigitalMediaFragmentDoc = gql`
    fragment DigitalMedia on DigitalMedia {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const FashionDesignCardFragmentDoc = gql`
    fragment FashionDesignCard on FashionDesign {
  category
  id
  title
  subtitle1
}
    `;
export const FashionDesignFragmentDoc = gql`
    fragment FashionDesign on FashionDesign {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const FilmCardFragmentDoc = gql`
    fragment FilmCard on Film {
  category
  id
  title
  subtitle1
}
    `;
export const FilmFragmentDoc = gql`
    fragment Film on Film {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const GraphicDesignCardFragmentDoc = gql`
    fragment GraphicDesignCard on GraphicDesign {
  category
  id
  title
  subtitle1
}
    `;
export const GraphicDesignFragmentDoc = gql`
    fragment GraphicDesign on GraphicDesign {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const InteriorDesignCardFragmentDoc = gql`
    fragment InteriorDesignCard on InteriorDesign {
  category
  id
  title
  subtitle1
}
    `;
export const InteriorDesignFragmentDoc = gql`
    fragment InteriorDesign on InteriorDesign {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const LandscapeCardFragmentDoc = gql`
    fragment LandscapeCard on Landscape {
  category
  id
  title
  subtitle1
}
    `;
export const LandscapeFragmentDoc = gql`
    fragment Landscape on Landscape {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const MusicCardFragmentDoc = gql`
    fragment MusicCard on Music {
  category
  id
  title
  subtitle1
}
    `;
export const MusicFragmentDoc = gql`
    fragment Music on Music {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const AgedCareCardFragmentDoc = gql`
    fragment AgedCareCard on AgedCare {
  category
  id
  title
  subtitle1
}
    `;
export const AgedCareFragmentDoc = gql`
    fragment AgedCare on AgedCare {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const DentalCardFragmentDoc = gql`
    fragment DentalCard on Dental {
  category
  id
  title
  subtitle1
}
    `;
export const DentalFragmentDoc = gql`
    fragment Dental on Dental {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const HealthFragmentDoc = gql`
    fragment Health on Health {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const MassageCardFragmentDoc = gql`
    fragment MassageCard on Massage {
  category
  id
  title
  subtitle1
}
    `;
export const MassageFragmentDoc = gql`
    fragment Massage on Massage {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const MedicineCardFragmentDoc = gql`
    fragment MedicineCard on Medicine {
  category
  id
  title
  subtitle1
}
    `;
export const MedicineFragmentDoc = gql`
    fragment Medicine on Medicine {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const MentalHealthCardFragmentDoc = gql`
    fragment MentalHealthCard on MentalHealth {
  category
  id
  title
  subtitle1
}
    `;
export const MentalHealthFragmentDoc = gql`
    fragment MentalHealth on MentalHealth {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const NursingCardFragmentDoc = gql`
    fragment NursingCard on Nursing {
  category
  id
  title
  subtitle1
}
    `;
export const NursingFragmentDoc = gql`
    fragment Nursing on Nursing {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const NutritionCardFragmentDoc = gql`
    fragment NutritionCard on Nutrition {
  category
  id
  title
  subtitle1
}
    `;
export const NutritionFragmentDoc = gql`
    fragment Nutrition on Nutrition {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const PublicHealthCardFragmentDoc = gql`
    fragment PublicHealthCard on PublicHealth {
  category
  id
  title
  subtitle1
}
    `;
export const PublicHealthFragmentDoc = gql`
    fragment PublicHealth on PublicHealth {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const VeterinaryCardFragmentDoc = gql`
    fragment VeterinaryCard on Veterinary {
  category
  id
  title
  subtitle1
}
    `;
export const VeterinaryFragmentDoc = gql`
    fragment Veterinary on Veterinary {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const AiCardFragmentDoc = gql`
    fragment AiCard on Ai {
  category
  id
  title
  subtitle1
}
    `;
export const AiFragmentDoc = gql`
    fragment Ai on Ai {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const BlockchainCardFragmentDoc = gql`
    fragment BlockchainCard on Blockchain {
  category
  id
  title
  subtitle1
}
    `;
export const BlockchainFragmentDoc = gql`
    fragment Blockchain on Blockchain {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const BusinessAnalysisCardFragmentDoc = gql`
    fragment BusinessAnalysisCard on BusinessAnalysis {
  category
  id
  title
  subtitle1
}
    `;
export const BusinessAnalysisFragmentDoc = gql`
    fragment BusinessAnalysis on BusinessAnalysis {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const CloudComputingCardFragmentDoc = gql`
    fragment CloudComputingCard on CloudComputing {
  category
  id
  title
  subtitle1
}
    `;
export const CloudComputingFragmentDoc = gql`
    fragment CloudComputing on CloudComputing {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const ComputerNetworkingCardFragmentDoc = gql`
    fragment ComputerNetworkingCard on ComputerNetworking {
  category
  id
  title
  subtitle1
}
    `;
export const ComputerNetworkingFragmentDoc = gql`
    fragment ComputerNetworking on ComputerNetworking {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const DataManagementCardFragmentDoc = gql`
    fragment DataManagementCard on DataManagement {
  category
  id
  title
  subtitle1
}
    `;
export const DataManagementFragmentDoc = gql`
    fragment DataManagement on DataManagement {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const GameProgrammingFragmentDoc = gql`
    fragment GameProgramming on GameProgramming {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const GameProgrammingCardFragmentDoc = gql`
    fragment GameProgrammingCard on GameProgramming {
  category
  id
  title
  subtitle1
}
    `;
export const ItFragmentDoc = gql`
    fragment It on It {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const MachineLearningCardFragmentDoc = gql`
    fragment MachineLearningCard on MachineLearning {
  category
  id
  title
  subtitle1
}
    `;
export const MachineLearningFragmentDoc = gql`
    fragment MachineLearning on MachineLearning {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const SoftwareDevelopmentCardFragmentDoc = gql`
    fragment SoftwareDevelopmentCard on SoftwareDevelopment {
  category
  id
  title
  subtitle1
}
    `;
export const SoftwareDevelopmentFragmentDoc = gql`
    fragment SoftwareDevelopment on SoftwareDevelopment {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const TelecommunicationCardFragmentDoc = gql`
    fragment TelecommunicationCard on Telecommunication {
  category
  id
  title
  subtitle1
}
    `;
export const TelecommunicationFragmentDoc = gql`
    fragment Telecommunication on Telecommunication {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const WebDevelopmentCardFragmentDoc = gql`
    fragment WebDevelopmentCard on WebDevelopment {
  category
  id
  title
  subtitle1
}
    `;
export const WebDevelopmentFragmentDoc = gql`
    fragment WebDevelopment on WebDevelopment {
  id
  category
  publishedDate
  title
  subtitle1
  tableContents1
  tableContents2
  tableContents3
  tableContents4
  p1
  p2
  p3
  subtitle2
  p4
  p5
  l1
  l2
  l3
  l4
  l5
  subtitle3
  p6
  p7
  l6
  l7
  l8
  l9
  l10
  l11
  l12
  l13
  l14
  l15
  p8
  subtitle4
  conclusion1
  conclusion2
  conclusion3
  reference1
  reference2
  authorName
  authorAbout
  authorLink
  photoCredit
  editedBy
  mainImage
}
    `;
export const AddBlogPostDocument = gql`
    mutation AddBlogPost($input: BlogPostInput!) {
  addBlogPost(input: $input) {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;
export type AddBlogPostMutationFn = Apollo.MutationFunction<AddBlogPostMutation, AddBlogPostMutationVariables>;

/**
 * __useAddBlogPostMutation__
 *
 * To run a mutation, you first call `useAddBlogPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBlogPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBlogPostMutation, { data, loading, error }] = useAddBlogPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBlogPostMutation(baseOptions?: Apollo.MutationHookOptions<AddBlogPostMutation, AddBlogPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBlogPostMutation, AddBlogPostMutationVariables>(AddBlogPostDocument, options);
      }
export type AddBlogPostMutationHookResult = ReturnType<typeof useAddBlogPostMutation>;
export type AddBlogPostMutationResult = Apollo.MutationResult<AddBlogPostMutation>;
export type AddBlogPostMutationOptions = Apollo.BaseMutationOptions<AddBlogPostMutation, AddBlogPostMutationVariables>;
export const BlogCardDocument = gql`
    query BlogCard {
  blogCard {
    ...BlogCard
  }
}
    ${BlogCardFragmentDoc}`;

/**
 * __useBlogCardQuery__
 *
 * To run a query within a React component, call `useBlogCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogCardQuery(baseOptions?: Apollo.QueryHookOptions<BlogCardQuery, BlogCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogCardQuery, BlogCardQueryVariables>(BlogCardDocument, options);
      }
export function useBlogCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogCardQuery, BlogCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogCardQuery, BlogCardQueryVariables>(BlogCardDocument, options);
        }
export type BlogCardQueryHookResult = ReturnType<typeof useBlogCardQuery>;
export type BlogCardLazyQueryHookResult = ReturnType<typeof useBlogCardLazyQuery>;
export type BlogCardQueryResult = Apollo.QueryResult<BlogCardQuery, BlogCardQueryVariables>;
export const BlogPostDocument = gql`
    query BlogPost($id: ID!) {
  blogPost(id: $id) {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;

/**
 * __useBlogPostQuery__
 *
 * To run a query within a React component, call `useBlogPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlogPostQuery(baseOptions: Apollo.QueryHookOptions<BlogPostQuery, BlogPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPostQuery, BlogPostQueryVariables>(BlogPostDocument, options);
      }
export function useBlogPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPostQuery, BlogPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPostQuery, BlogPostQueryVariables>(BlogPostDocument, options);
        }
export type BlogPostQueryHookResult = ReturnType<typeof useBlogPostQuery>;
export type BlogPostLazyQueryHookResult = ReturnType<typeof useBlogPostLazyQuery>;
export type BlogPostQueryResult = Apollo.QueryResult<BlogPostQuery, BlogPostQueryVariables>;
export const BlogPostsDocument = gql`
    query BlogPosts {
  blogPosts {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;

/**
 * __useBlogPostsQuery__
 *
 * To run a query within a React component, call `useBlogPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogPostsQuery(baseOptions?: Apollo.QueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPostsQuery, BlogPostsQueryVariables>(BlogPostsDocument, options);
      }
export function useBlogPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPostsQuery, BlogPostsQueryVariables>(BlogPostsDocument, options);
        }
export type BlogPostsQueryHookResult = ReturnType<typeof useBlogPostsQuery>;
export type BlogPostsLazyQueryHookResult = ReturnType<typeof useBlogPostsLazyQuery>;
export type BlogPostsQueryResult = Apollo.QueryResult<BlogPostsQuery, BlogPostsQueryVariables>;
export const ActingDocument = gql`
    query Acting($id: ID!) {
  acting(id: $id) {
    ...Acting
  }
}
    ${ActingFragmentDoc}`;

/**
 * __useActingQuery__
 *
 * To run a query within a React component, call `useActingQuery` and pass it any options that fit your needs.
 * When your component renders, `useActingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActingQuery(baseOptions: Apollo.QueryHookOptions<ActingQuery, ActingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActingQuery, ActingQueryVariables>(ActingDocument, options);
      }
export function useActingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActingQuery, ActingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActingQuery, ActingQueryVariables>(ActingDocument, options);
        }
export type ActingQueryHookResult = ReturnType<typeof useActingQuery>;
export type ActingLazyQueryHookResult = ReturnType<typeof useActingLazyQuery>;
export type ActingQueryResult = Apollo.QueryResult<ActingQuery, ActingQueryVariables>;
export const ActingCardDocument = gql`
    query ActingCard {
  actingCard {
    ...ActingCard
  }
}
    ${ActingCardFragmentDoc}`;

/**
 * __useActingCardQuery__
 *
 * To run a query within a React component, call `useActingCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useActingCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActingCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useActingCardQuery(baseOptions?: Apollo.QueryHookOptions<ActingCardQuery, ActingCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActingCardQuery, ActingCardQueryVariables>(ActingCardDocument, options);
      }
export function useActingCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActingCardQuery, ActingCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActingCardQuery, ActingCardQueryVariables>(ActingCardDocument, options);
        }
export type ActingCardQueryHookResult = ReturnType<typeof useActingCardQuery>;
export type ActingCardLazyQueryHookResult = ReturnType<typeof useActingCardLazyQuery>;
export type ActingCardQueryResult = Apollo.QueryResult<ActingCardQuery, ActingCardQueryVariables>;
export const AddActingDocument = gql`
    mutation AddActing($input: ActingInput!) {
  addActing(input: $input) {
    ...Acting
  }
}
    ${ActingFragmentDoc}`;
export type AddActingMutationFn = Apollo.MutationFunction<AddActingMutation, AddActingMutationVariables>;

/**
 * __useAddActingMutation__
 *
 * To run a mutation, you first call `useAddActingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddActingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addActingMutation, { data, loading, error }] = useAddActingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddActingMutation(baseOptions?: Apollo.MutationHookOptions<AddActingMutation, AddActingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddActingMutation, AddActingMutationVariables>(AddActingDocument, options);
      }
export type AddActingMutationHookResult = ReturnType<typeof useAddActingMutation>;
export type AddActingMutationResult = Apollo.MutationResult<AddActingMutation>;
export type AddActingMutationOptions = Apollo.BaseMutationOptions<AddActingMutation, AddActingMutationVariables>;
export const UpdateActingDocument = gql`
    mutation UpdateActing($input: ActingInput!) {
  updateActing(input: $input) {
    ...Acting
  }
}
    ${ActingFragmentDoc}`;
export type UpdateActingMutationFn = Apollo.MutationFunction<UpdateActingMutation, UpdateActingMutationVariables>;

/**
 * __useUpdateActingMutation__
 *
 * To run a mutation, you first call `useUpdateActingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActingMutation, { data, loading, error }] = useUpdateActingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateActingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateActingMutation, UpdateActingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateActingMutation, UpdateActingMutationVariables>(UpdateActingDocument, options);
      }
export type UpdateActingMutationHookResult = ReturnType<typeof useUpdateActingMutation>;
export type UpdateActingMutationResult = Apollo.MutationResult<UpdateActingMutation>;
export type UpdateActingMutationOptions = Apollo.BaseMutationOptions<UpdateActingMutation, UpdateActingMutationVariables>;
export const AddAnimation3DDocument = gql`
    mutation AddAnimation3D($input: Animation3DInput!) {
  addAnimation3D(input: $input) {
    ...Animation3D
  }
}
    ${Animation3DFragmentDoc}`;
export type AddAnimation3DMutationFn = Apollo.MutationFunction<AddAnimation3DMutation, AddAnimation3DMutationVariables>;

/**
 * __useAddAnimation3DMutation__
 *
 * To run a mutation, you first call `useAddAnimation3DMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAnimation3DMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAnimation3DMutation, { data, loading, error }] = useAddAnimation3DMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAnimation3DMutation(baseOptions?: Apollo.MutationHookOptions<AddAnimation3DMutation, AddAnimation3DMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAnimation3DMutation, AddAnimation3DMutationVariables>(AddAnimation3DDocument, options);
      }
export type AddAnimation3DMutationHookResult = ReturnType<typeof useAddAnimation3DMutation>;
export type AddAnimation3DMutationResult = Apollo.MutationResult<AddAnimation3DMutation>;
export type AddAnimation3DMutationOptions = Apollo.BaseMutationOptions<AddAnimation3DMutation, AddAnimation3DMutationVariables>;
export const Animation3DDocument = gql`
    query Animation3D($id: ID!) {
  animation3D(id: $id) {
    ...Animation3D
  }
}
    ${Animation3DFragmentDoc}`;

/**
 * __useAnimation3DQuery__
 *
 * To run a query within a React component, call `useAnimation3DQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimation3DQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimation3DQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAnimation3DQuery(baseOptions: Apollo.QueryHookOptions<Animation3DQuery, Animation3DQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Animation3DQuery, Animation3DQueryVariables>(Animation3DDocument, options);
      }
export function useAnimation3DLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Animation3DQuery, Animation3DQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Animation3DQuery, Animation3DQueryVariables>(Animation3DDocument, options);
        }
export type Animation3DQueryHookResult = ReturnType<typeof useAnimation3DQuery>;
export type Animation3DLazyQueryHookResult = ReturnType<typeof useAnimation3DLazyQuery>;
export type Animation3DQueryResult = Apollo.QueryResult<Animation3DQuery, Animation3DQueryVariables>;
export const Animation3DCardDocument = gql`
    query Animation3DCard {
  animation3DCard {
    ...Animation3DCard
  }
}
    ${Animation3DCardFragmentDoc}`;

/**
 * __useAnimation3DCardQuery__
 *
 * To run a query within a React component, call `useAnimation3DCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimation3DCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimation3DCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnimation3DCardQuery(baseOptions?: Apollo.QueryHookOptions<Animation3DCardQuery, Animation3DCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Animation3DCardQuery, Animation3DCardQueryVariables>(Animation3DCardDocument, options);
      }
export function useAnimation3DCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Animation3DCardQuery, Animation3DCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Animation3DCardQuery, Animation3DCardQueryVariables>(Animation3DCardDocument, options);
        }
export type Animation3DCardQueryHookResult = ReturnType<typeof useAnimation3DCardQuery>;
export type Animation3DCardLazyQueryHookResult = ReturnType<typeof useAnimation3DCardLazyQuery>;
export type Animation3DCardQueryResult = Apollo.QueryResult<Animation3DCardQuery, Animation3DCardQueryVariables>;
export const UpdateAnimation3DDocument = gql`
    mutation UpdateAnimation3D($input: Animation3DInput!) {
  updateAnimation3D(input: $input) {
    ...Animation3D
  }
}
    ${Animation3DFragmentDoc}`;
export type UpdateAnimation3DMutationFn = Apollo.MutationFunction<UpdateAnimation3DMutation, UpdateAnimation3DMutationVariables>;

/**
 * __useUpdateAnimation3DMutation__
 *
 * To run a mutation, you first call `useUpdateAnimation3DMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnimation3DMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnimation3DMutation, { data, loading, error }] = useUpdateAnimation3DMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAnimation3DMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnimation3DMutation, UpdateAnimation3DMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnimation3DMutation, UpdateAnimation3DMutationVariables>(UpdateAnimation3DDocument, options);
      }
export type UpdateAnimation3DMutationHookResult = ReturnType<typeof useUpdateAnimation3DMutation>;
export type UpdateAnimation3DMutationResult = Apollo.MutationResult<UpdateAnimation3DMutation>;
export type UpdateAnimation3DMutationOptions = Apollo.BaseMutationOptions<UpdateAnimation3DMutation, UpdateAnimation3DMutationVariables>;
export const AddDesignDocument = gql`
    mutation AddDesign($input: DesignInput!) {
  addDesign(input: $input) {
    ...Design
  }
}
    ${DesignFragmentDoc}`;
export type AddDesignMutationFn = Apollo.MutationFunction<AddDesignMutation, AddDesignMutationVariables>;

/**
 * __useAddDesignMutation__
 *
 * To run a mutation, you first call `useAddDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDesignMutation, { data, loading, error }] = useAddDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDesignMutation(baseOptions?: Apollo.MutationHookOptions<AddDesignMutation, AddDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDesignMutation, AddDesignMutationVariables>(AddDesignDocument, options);
      }
export type AddDesignMutationHookResult = ReturnType<typeof useAddDesignMutation>;
export type AddDesignMutationResult = Apollo.MutationResult<AddDesignMutation>;
export type AddDesignMutationOptions = Apollo.BaseMutationOptions<AddDesignMutation, AddDesignMutationVariables>;
export const DesignDocument = gql`
    query Design($id: ID!) {
  design(id: $id) {
    ...Design
  }
}
    ${DesignFragmentDoc}`;

/**
 * __useDesignQuery__
 *
 * To run a query within a React component, call `useDesignQuery` and pass it any options that fit your needs.
 * When your component renders, `useDesignQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDesignQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDesignQuery(baseOptions: Apollo.QueryHookOptions<DesignQuery, DesignQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DesignQuery, DesignQueryVariables>(DesignDocument, options);
      }
export function useDesignLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DesignQuery, DesignQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DesignQuery, DesignQueryVariables>(DesignDocument, options);
        }
export type DesignQueryHookResult = ReturnType<typeof useDesignQuery>;
export type DesignLazyQueryHookResult = ReturnType<typeof useDesignLazyQuery>;
export type DesignQueryResult = Apollo.QueryResult<DesignQuery, DesignQueryVariables>;
export const UpdateDesignDocument = gql`
    mutation UpdateDesign($input: DesignInput!) {
  updateDesign(input: $input) {
    ...Design
  }
}
    ${DesignFragmentDoc}`;
export type UpdateDesignMutationFn = Apollo.MutationFunction<UpdateDesignMutation, UpdateDesignMutationVariables>;

/**
 * __useUpdateDesignMutation__
 *
 * To run a mutation, you first call `useUpdateDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDesignMutation, { data, loading, error }] = useUpdateDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDesignMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDesignMutation, UpdateDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDesignMutation, UpdateDesignMutationVariables>(UpdateDesignDocument, options);
      }
export type UpdateDesignMutationHookResult = ReturnType<typeof useUpdateDesignMutation>;
export type UpdateDesignMutationResult = Apollo.MutationResult<UpdateDesignMutation>;
export type UpdateDesignMutationOptions = Apollo.BaseMutationOptions<UpdateDesignMutation, UpdateDesignMutationVariables>;
export const AddDigitalMediaDocument = gql`
    mutation AddDigitalMedia($input: DigitalMediaInput!) {
  addDigitalMedia(input: $input) {
    ...DigitalMedia
  }
}
    ${DigitalMediaFragmentDoc}`;
export type AddDigitalMediaMutationFn = Apollo.MutationFunction<AddDigitalMediaMutation, AddDigitalMediaMutationVariables>;

/**
 * __useAddDigitalMediaMutation__
 *
 * To run a mutation, you first call `useAddDigitalMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDigitalMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDigitalMediaMutation, { data, loading, error }] = useAddDigitalMediaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDigitalMediaMutation(baseOptions?: Apollo.MutationHookOptions<AddDigitalMediaMutation, AddDigitalMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDigitalMediaMutation, AddDigitalMediaMutationVariables>(AddDigitalMediaDocument, options);
      }
export type AddDigitalMediaMutationHookResult = ReturnType<typeof useAddDigitalMediaMutation>;
export type AddDigitalMediaMutationResult = Apollo.MutationResult<AddDigitalMediaMutation>;
export type AddDigitalMediaMutationOptions = Apollo.BaseMutationOptions<AddDigitalMediaMutation, AddDigitalMediaMutationVariables>;
export const DigitalMediaDocument = gql`
    query DigitalMedia($id: ID!) {
  digitalMedia(id: $id) {
    ...DigitalMedia
  }
}
    ${DigitalMediaFragmentDoc}`;

/**
 * __useDigitalMediaQuery__
 *
 * To run a query within a React component, call `useDigitalMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useDigitalMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDigitalMediaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDigitalMediaQuery(baseOptions: Apollo.QueryHookOptions<DigitalMediaQuery, DigitalMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DigitalMediaQuery, DigitalMediaQueryVariables>(DigitalMediaDocument, options);
      }
export function useDigitalMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DigitalMediaQuery, DigitalMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DigitalMediaQuery, DigitalMediaQueryVariables>(DigitalMediaDocument, options);
        }
export type DigitalMediaQueryHookResult = ReturnType<typeof useDigitalMediaQuery>;
export type DigitalMediaLazyQueryHookResult = ReturnType<typeof useDigitalMediaLazyQuery>;
export type DigitalMediaQueryResult = Apollo.QueryResult<DigitalMediaQuery, DigitalMediaQueryVariables>;
export const DigitalMediaCardDocument = gql`
    query DigitalMediaCard {
  digitalMediaCard {
    ...DigitalMediaCard
  }
}
    ${DigitalMediaCardFragmentDoc}`;

/**
 * __useDigitalMediaCardQuery__
 *
 * To run a query within a React component, call `useDigitalMediaCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useDigitalMediaCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDigitalMediaCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useDigitalMediaCardQuery(baseOptions?: Apollo.QueryHookOptions<DigitalMediaCardQuery, DigitalMediaCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DigitalMediaCardQuery, DigitalMediaCardQueryVariables>(DigitalMediaCardDocument, options);
      }
export function useDigitalMediaCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DigitalMediaCardQuery, DigitalMediaCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DigitalMediaCardQuery, DigitalMediaCardQueryVariables>(DigitalMediaCardDocument, options);
        }
export type DigitalMediaCardQueryHookResult = ReturnType<typeof useDigitalMediaCardQuery>;
export type DigitalMediaCardLazyQueryHookResult = ReturnType<typeof useDigitalMediaCardLazyQuery>;
export type DigitalMediaCardQueryResult = Apollo.QueryResult<DigitalMediaCardQuery, DigitalMediaCardQueryVariables>;
export const UpdateDigitalMediaDocument = gql`
    mutation UpdateDigitalMedia($input: DigitalMediaInput!) {
  updateDigitalMedia(input: $input) {
    ...DigitalMedia
  }
}
    ${DigitalMediaFragmentDoc}`;
export type UpdateDigitalMediaMutationFn = Apollo.MutationFunction<UpdateDigitalMediaMutation, UpdateDigitalMediaMutationVariables>;

/**
 * __useUpdateDigitalMediaMutation__
 *
 * To run a mutation, you first call `useUpdateDigitalMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDigitalMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDigitalMediaMutation, { data, loading, error }] = useUpdateDigitalMediaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDigitalMediaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDigitalMediaMutation, UpdateDigitalMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDigitalMediaMutation, UpdateDigitalMediaMutationVariables>(UpdateDigitalMediaDocument, options);
      }
export type UpdateDigitalMediaMutationHookResult = ReturnType<typeof useUpdateDigitalMediaMutation>;
export type UpdateDigitalMediaMutationResult = Apollo.MutationResult<UpdateDigitalMediaMutation>;
export type UpdateDigitalMediaMutationOptions = Apollo.BaseMutationOptions<UpdateDigitalMediaMutation, UpdateDigitalMediaMutationVariables>;
export const AddFashionDesignDocument = gql`
    mutation AddFashionDesign($input: FashionDesignInput!) {
  addFashionDesign(input: $input) {
    ...FashionDesign
  }
}
    ${FashionDesignFragmentDoc}`;
export type AddFashionDesignMutationFn = Apollo.MutationFunction<AddFashionDesignMutation, AddFashionDesignMutationVariables>;

/**
 * __useAddFashionDesignMutation__
 *
 * To run a mutation, you first call `useAddFashionDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFashionDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFashionDesignMutation, { data, loading, error }] = useAddFashionDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddFashionDesignMutation(baseOptions?: Apollo.MutationHookOptions<AddFashionDesignMutation, AddFashionDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFashionDesignMutation, AddFashionDesignMutationVariables>(AddFashionDesignDocument, options);
      }
export type AddFashionDesignMutationHookResult = ReturnType<typeof useAddFashionDesignMutation>;
export type AddFashionDesignMutationResult = Apollo.MutationResult<AddFashionDesignMutation>;
export type AddFashionDesignMutationOptions = Apollo.BaseMutationOptions<AddFashionDesignMutation, AddFashionDesignMutationVariables>;
export const FashionDesignDocument = gql`
    query FashionDesign($id: ID!) {
  fashionDesign(id: $id) {
    ...FashionDesign
  }
}
    ${FashionDesignFragmentDoc}`;

/**
 * __useFashionDesignQuery__
 *
 * To run a query within a React component, call `useFashionDesignQuery` and pass it any options that fit your needs.
 * When your component renders, `useFashionDesignQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFashionDesignQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFashionDesignQuery(baseOptions: Apollo.QueryHookOptions<FashionDesignQuery, FashionDesignQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FashionDesignQuery, FashionDesignQueryVariables>(FashionDesignDocument, options);
      }
export function useFashionDesignLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FashionDesignQuery, FashionDesignQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FashionDesignQuery, FashionDesignQueryVariables>(FashionDesignDocument, options);
        }
export type FashionDesignQueryHookResult = ReturnType<typeof useFashionDesignQuery>;
export type FashionDesignLazyQueryHookResult = ReturnType<typeof useFashionDesignLazyQuery>;
export type FashionDesignQueryResult = Apollo.QueryResult<FashionDesignQuery, FashionDesignQueryVariables>;
export const FashionDesignCardDocument = gql`
    query FashionDesignCard {
  fashionDesignCard {
    ...FashionDesignCard
  }
}
    ${FashionDesignCardFragmentDoc}`;

/**
 * __useFashionDesignCardQuery__
 *
 * To run a query within a React component, call `useFashionDesignCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFashionDesignCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFashionDesignCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useFashionDesignCardQuery(baseOptions?: Apollo.QueryHookOptions<FashionDesignCardQuery, FashionDesignCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FashionDesignCardQuery, FashionDesignCardQueryVariables>(FashionDesignCardDocument, options);
      }
export function useFashionDesignCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FashionDesignCardQuery, FashionDesignCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FashionDesignCardQuery, FashionDesignCardQueryVariables>(FashionDesignCardDocument, options);
        }
export type FashionDesignCardQueryHookResult = ReturnType<typeof useFashionDesignCardQuery>;
export type FashionDesignCardLazyQueryHookResult = ReturnType<typeof useFashionDesignCardLazyQuery>;
export type FashionDesignCardQueryResult = Apollo.QueryResult<FashionDesignCardQuery, FashionDesignCardQueryVariables>;
export const UpdateFashionDesignDocument = gql`
    mutation UpdateFashionDesign($input: FashionDesignInput!) {
  updateFashionDesign(input: $input) {
    ...FashionDesign
  }
}
    ${FashionDesignFragmentDoc}`;
export type UpdateFashionDesignMutationFn = Apollo.MutationFunction<UpdateFashionDesignMutation, UpdateFashionDesignMutationVariables>;

/**
 * __useUpdateFashionDesignMutation__
 *
 * To run a mutation, you first call `useUpdateFashionDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFashionDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFashionDesignMutation, { data, loading, error }] = useUpdateFashionDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFashionDesignMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFashionDesignMutation, UpdateFashionDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFashionDesignMutation, UpdateFashionDesignMutationVariables>(UpdateFashionDesignDocument, options);
      }
export type UpdateFashionDesignMutationHookResult = ReturnType<typeof useUpdateFashionDesignMutation>;
export type UpdateFashionDesignMutationResult = Apollo.MutationResult<UpdateFashionDesignMutation>;
export type UpdateFashionDesignMutationOptions = Apollo.BaseMutationOptions<UpdateFashionDesignMutation, UpdateFashionDesignMutationVariables>;
export const AddFilmDocument = gql`
    mutation AddFilm($input: FilmInput!) {
  addFilm(input: $input) {
    ...Film
  }
}
    ${FilmFragmentDoc}`;
export type AddFilmMutationFn = Apollo.MutationFunction<AddFilmMutation, AddFilmMutationVariables>;

/**
 * __useAddFilmMutation__
 *
 * To run a mutation, you first call `useAddFilmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFilmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFilmMutation, { data, loading, error }] = useAddFilmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddFilmMutation(baseOptions?: Apollo.MutationHookOptions<AddFilmMutation, AddFilmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFilmMutation, AddFilmMutationVariables>(AddFilmDocument, options);
      }
export type AddFilmMutationHookResult = ReturnType<typeof useAddFilmMutation>;
export type AddFilmMutationResult = Apollo.MutationResult<AddFilmMutation>;
export type AddFilmMutationOptions = Apollo.BaseMutationOptions<AddFilmMutation, AddFilmMutationVariables>;
export const FilmDocument = gql`
    query Film($id: ID!) {
  film(id: $id) {
    ...Film
  }
}
    ${FilmFragmentDoc}`;

/**
 * __useFilmQuery__
 *
 * To run a query within a React component, call `useFilmQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFilmQuery(baseOptions: Apollo.QueryHookOptions<FilmQuery, FilmQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilmQuery, FilmQueryVariables>(FilmDocument, options);
      }
export function useFilmLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilmQuery, FilmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilmQuery, FilmQueryVariables>(FilmDocument, options);
        }
export type FilmQueryHookResult = ReturnType<typeof useFilmQuery>;
export type FilmLazyQueryHookResult = ReturnType<typeof useFilmLazyQuery>;
export type FilmQueryResult = Apollo.QueryResult<FilmQuery, FilmQueryVariables>;
export const FilmCardDocument = gql`
    query FilmCard {
  filmCard {
    ...FilmCard
  }
}
    ${FilmCardFragmentDoc}`;

/**
 * __useFilmCardQuery__
 *
 * To run a query within a React component, call `useFilmCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilmCardQuery(baseOptions?: Apollo.QueryHookOptions<FilmCardQuery, FilmCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilmCardQuery, FilmCardQueryVariables>(FilmCardDocument, options);
      }
export function useFilmCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilmCardQuery, FilmCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilmCardQuery, FilmCardQueryVariables>(FilmCardDocument, options);
        }
export type FilmCardQueryHookResult = ReturnType<typeof useFilmCardQuery>;
export type FilmCardLazyQueryHookResult = ReturnType<typeof useFilmCardLazyQuery>;
export type FilmCardQueryResult = Apollo.QueryResult<FilmCardQuery, FilmCardQueryVariables>;
export const UpdateFilmDocument = gql`
    mutation UpdateFilm($input: FilmInput!) {
  updateFilm(input: $input) {
    ...Film
  }
}
    ${FilmFragmentDoc}`;
export type UpdateFilmMutationFn = Apollo.MutationFunction<UpdateFilmMutation, UpdateFilmMutationVariables>;

/**
 * __useUpdateFilmMutation__
 *
 * To run a mutation, you first call `useUpdateFilmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFilmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFilmMutation, { data, loading, error }] = useUpdateFilmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFilmMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFilmMutation, UpdateFilmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFilmMutation, UpdateFilmMutationVariables>(UpdateFilmDocument, options);
      }
export type UpdateFilmMutationHookResult = ReturnType<typeof useUpdateFilmMutation>;
export type UpdateFilmMutationResult = Apollo.MutationResult<UpdateFilmMutation>;
export type UpdateFilmMutationOptions = Apollo.BaseMutationOptions<UpdateFilmMutation, UpdateFilmMutationVariables>;
export const AddGraphicDesignDocument = gql`
    mutation AddGraphicDesign($input: GraphicDesignInput!) {
  addGraphicDesign(input: $input) {
    ...GraphicDesign
  }
}
    ${GraphicDesignFragmentDoc}`;
export type AddGraphicDesignMutationFn = Apollo.MutationFunction<AddGraphicDesignMutation, AddGraphicDesignMutationVariables>;

/**
 * __useAddGraphicDesignMutation__
 *
 * To run a mutation, you first call `useAddGraphicDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGraphicDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGraphicDesignMutation, { data, loading, error }] = useAddGraphicDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddGraphicDesignMutation(baseOptions?: Apollo.MutationHookOptions<AddGraphicDesignMutation, AddGraphicDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGraphicDesignMutation, AddGraphicDesignMutationVariables>(AddGraphicDesignDocument, options);
      }
export type AddGraphicDesignMutationHookResult = ReturnType<typeof useAddGraphicDesignMutation>;
export type AddGraphicDesignMutationResult = Apollo.MutationResult<AddGraphicDesignMutation>;
export type AddGraphicDesignMutationOptions = Apollo.BaseMutationOptions<AddGraphicDesignMutation, AddGraphicDesignMutationVariables>;
export const GraphicDesignDocument = gql`
    query GraphicDesign($id: ID!) {
  graphicDesign(id: $id) {
    ...GraphicDesign
  }
}
    ${GraphicDesignFragmentDoc}`;

/**
 * __useGraphicDesignQuery__
 *
 * To run a query within a React component, call `useGraphicDesignQuery` and pass it any options that fit your needs.
 * When your component renders, `useGraphicDesignQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGraphicDesignQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGraphicDesignQuery(baseOptions: Apollo.QueryHookOptions<GraphicDesignQuery, GraphicDesignQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GraphicDesignQuery, GraphicDesignQueryVariables>(GraphicDesignDocument, options);
      }
export function useGraphicDesignLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GraphicDesignQuery, GraphicDesignQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GraphicDesignQuery, GraphicDesignQueryVariables>(GraphicDesignDocument, options);
        }
export type GraphicDesignQueryHookResult = ReturnType<typeof useGraphicDesignQuery>;
export type GraphicDesignLazyQueryHookResult = ReturnType<typeof useGraphicDesignLazyQuery>;
export type GraphicDesignQueryResult = Apollo.QueryResult<GraphicDesignQuery, GraphicDesignQueryVariables>;
export const GraphicDesignCardDocument = gql`
    query GraphicDesignCard {
  graphicDesignCard {
    ...GraphicDesignCard
  }
}
    ${GraphicDesignCardFragmentDoc}`;

/**
 * __useGraphicDesignCardQuery__
 *
 * To run a query within a React component, call `useGraphicDesignCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGraphicDesignCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGraphicDesignCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGraphicDesignCardQuery(baseOptions?: Apollo.QueryHookOptions<GraphicDesignCardQuery, GraphicDesignCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GraphicDesignCardQuery, GraphicDesignCardQueryVariables>(GraphicDesignCardDocument, options);
      }
export function useGraphicDesignCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GraphicDesignCardQuery, GraphicDesignCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GraphicDesignCardQuery, GraphicDesignCardQueryVariables>(GraphicDesignCardDocument, options);
        }
export type GraphicDesignCardQueryHookResult = ReturnType<typeof useGraphicDesignCardQuery>;
export type GraphicDesignCardLazyQueryHookResult = ReturnType<typeof useGraphicDesignCardLazyQuery>;
export type GraphicDesignCardQueryResult = Apollo.QueryResult<GraphicDesignCardQuery, GraphicDesignCardQueryVariables>;
export const UpdateGraphicDesignDocument = gql`
    mutation UpdateGraphicDesign($input: GraphicDesignInput!) {
  updateGraphicDesign(input: $input) {
    ...GraphicDesign
  }
}
    ${GraphicDesignFragmentDoc}`;
export type UpdateGraphicDesignMutationFn = Apollo.MutationFunction<UpdateGraphicDesignMutation, UpdateGraphicDesignMutationVariables>;

/**
 * __useUpdateGraphicDesignMutation__
 *
 * To run a mutation, you first call `useUpdateGraphicDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGraphicDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGraphicDesignMutation, { data, loading, error }] = useUpdateGraphicDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGraphicDesignMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGraphicDesignMutation, UpdateGraphicDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGraphicDesignMutation, UpdateGraphicDesignMutationVariables>(UpdateGraphicDesignDocument, options);
      }
export type UpdateGraphicDesignMutationHookResult = ReturnType<typeof useUpdateGraphicDesignMutation>;
export type UpdateGraphicDesignMutationResult = Apollo.MutationResult<UpdateGraphicDesignMutation>;
export type UpdateGraphicDesignMutationOptions = Apollo.BaseMutationOptions<UpdateGraphicDesignMutation, UpdateGraphicDesignMutationVariables>;
export const AddInteriorDesignDocument = gql`
    mutation AddInteriorDesign($input: InteriorDesignInput!) {
  addInteriorDesign(input: $input) {
    ...InteriorDesign
  }
}
    ${InteriorDesignFragmentDoc}`;
export type AddInteriorDesignMutationFn = Apollo.MutationFunction<AddInteriorDesignMutation, AddInteriorDesignMutationVariables>;

/**
 * __useAddInteriorDesignMutation__
 *
 * To run a mutation, you first call `useAddInteriorDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddInteriorDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addInteriorDesignMutation, { data, loading, error }] = useAddInteriorDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddInteriorDesignMutation(baseOptions?: Apollo.MutationHookOptions<AddInteriorDesignMutation, AddInteriorDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddInteriorDesignMutation, AddInteriorDesignMutationVariables>(AddInteriorDesignDocument, options);
      }
export type AddInteriorDesignMutationHookResult = ReturnType<typeof useAddInteriorDesignMutation>;
export type AddInteriorDesignMutationResult = Apollo.MutationResult<AddInteriorDesignMutation>;
export type AddInteriorDesignMutationOptions = Apollo.BaseMutationOptions<AddInteriorDesignMutation, AddInteriorDesignMutationVariables>;
export const InteriorDesignDocument = gql`
    query InteriorDesign($id: ID!) {
  interiorDesign(id: $id) {
    ...InteriorDesign
  }
}
    ${InteriorDesignFragmentDoc}`;

/**
 * __useInteriorDesignQuery__
 *
 * To run a query within a React component, call `useInteriorDesignQuery` and pass it any options that fit your needs.
 * When your component renders, `useInteriorDesignQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInteriorDesignQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInteriorDesignQuery(baseOptions: Apollo.QueryHookOptions<InteriorDesignQuery, InteriorDesignQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InteriorDesignQuery, InteriorDesignQueryVariables>(InteriorDesignDocument, options);
      }
export function useInteriorDesignLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InteriorDesignQuery, InteriorDesignQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InteriorDesignQuery, InteriorDesignQueryVariables>(InteriorDesignDocument, options);
        }
export type InteriorDesignQueryHookResult = ReturnType<typeof useInteriorDesignQuery>;
export type InteriorDesignLazyQueryHookResult = ReturnType<typeof useInteriorDesignLazyQuery>;
export type InteriorDesignQueryResult = Apollo.QueryResult<InteriorDesignQuery, InteriorDesignQueryVariables>;
export const InteriorDesignCardDocument = gql`
    query InteriorDesignCard {
  interiorDesignCard {
    ...InteriorDesignCard
  }
}
    ${InteriorDesignCardFragmentDoc}`;

/**
 * __useInteriorDesignCardQuery__
 *
 * To run a query within a React component, call `useInteriorDesignCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useInteriorDesignCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInteriorDesignCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useInteriorDesignCardQuery(baseOptions?: Apollo.QueryHookOptions<InteriorDesignCardQuery, InteriorDesignCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InteriorDesignCardQuery, InteriorDesignCardQueryVariables>(InteriorDesignCardDocument, options);
      }
export function useInteriorDesignCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InteriorDesignCardQuery, InteriorDesignCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InteriorDesignCardQuery, InteriorDesignCardQueryVariables>(InteriorDesignCardDocument, options);
        }
export type InteriorDesignCardQueryHookResult = ReturnType<typeof useInteriorDesignCardQuery>;
export type InteriorDesignCardLazyQueryHookResult = ReturnType<typeof useInteriorDesignCardLazyQuery>;
export type InteriorDesignCardQueryResult = Apollo.QueryResult<InteriorDesignCardQuery, InteriorDesignCardQueryVariables>;
export const UpdateInteriorDesignDocument = gql`
    mutation UpdateInteriorDesign($input: InteriorDesignInput!) {
  updateInteriorDesign(input: $input) {
    ...InteriorDesign
  }
}
    ${InteriorDesignFragmentDoc}`;
export type UpdateInteriorDesignMutationFn = Apollo.MutationFunction<UpdateInteriorDesignMutation, UpdateInteriorDesignMutationVariables>;

/**
 * __useUpdateInteriorDesignMutation__
 *
 * To run a mutation, you first call `useUpdateInteriorDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInteriorDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInteriorDesignMutation, { data, loading, error }] = useUpdateInteriorDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateInteriorDesignMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInteriorDesignMutation, UpdateInteriorDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInteriorDesignMutation, UpdateInteriorDesignMutationVariables>(UpdateInteriorDesignDocument, options);
      }
export type UpdateInteriorDesignMutationHookResult = ReturnType<typeof useUpdateInteriorDesignMutation>;
export type UpdateInteriorDesignMutationResult = Apollo.MutationResult<UpdateInteriorDesignMutation>;
export type UpdateInteriorDesignMutationOptions = Apollo.BaseMutationOptions<UpdateInteriorDesignMutation, UpdateInteriorDesignMutationVariables>;
export const AddLandscapeDocument = gql`
    mutation AddLandscape($input: LandscapeInput!) {
  addLandscape(input: $input) {
    ...Landscape
  }
}
    ${LandscapeFragmentDoc}`;
export type AddLandscapeMutationFn = Apollo.MutationFunction<AddLandscapeMutation, AddLandscapeMutationVariables>;

/**
 * __useAddLandscapeMutation__
 *
 * To run a mutation, you first call `useAddLandscapeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLandscapeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLandscapeMutation, { data, loading, error }] = useAddLandscapeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddLandscapeMutation(baseOptions?: Apollo.MutationHookOptions<AddLandscapeMutation, AddLandscapeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLandscapeMutation, AddLandscapeMutationVariables>(AddLandscapeDocument, options);
      }
export type AddLandscapeMutationHookResult = ReturnType<typeof useAddLandscapeMutation>;
export type AddLandscapeMutationResult = Apollo.MutationResult<AddLandscapeMutation>;
export type AddLandscapeMutationOptions = Apollo.BaseMutationOptions<AddLandscapeMutation, AddLandscapeMutationVariables>;
export const LandscapeDocument = gql`
    query Landscape($id: ID!) {
  landscape(id: $id) {
    ...Landscape
  }
}
    ${LandscapeFragmentDoc}`;

/**
 * __useLandscapeQuery__
 *
 * To run a query within a React component, call `useLandscapeQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandscapeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandscapeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLandscapeQuery(baseOptions: Apollo.QueryHookOptions<LandscapeQuery, LandscapeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LandscapeQuery, LandscapeQueryVariables>(LandscapeDocument, options);
      }
export function useLandscapeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LandscapeQuery, LandscapeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LandscapeQuery, LandscapeQueryVariables>(LandscapeDocument, options);
        }
export type LandscapeQueryHookResult = ReturnType<typeof useLandscapeQuery>;
export type LandscapeLazyQueryHookResult = ReturnType<typeof useLandscapeLazyQuery>;
export type LandscapeQueryResult = Apollo.QueryResult<LandscapeQuery, LandscapeQueryVariables>;
export const LandscapeCardDocument = gql`
    query LandscapeCard {
  landscapeCard {
    ...LandscapeCard
  }
}
    ${LandscapeCardFragmentDoc}`;

/**
 * __useLandscapeCardQuery__
 *
 * To run a query within a React component, call `useLandscapeCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandscapeCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandscapeCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useLandscapeCardQuery(baseOptions?: Apollo.QueryHookOptions<LandscapeCardQuery, LandscapeCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LandscapeCardQuery, LandscapeCardQueryVariables>(LandscapeCardDocument, options);
      }
export function useLandscapeCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LandscapeCardQuery, LandscapeCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LandscapeCardQuery, LandscapeCardQueryVariables>(LandscapeCardDocument, options);
        }
export type LandscapeCardQueryHookResult = ReturnType<typeof useLandscapeCardQuery>;
export type LandscapeCardLazyQueryHookResult = ReturnType<typeof useLandscapeCardLazyQuery>;
export type LandscapeCardQueryResult = Apollo.QueryResult<LandscapeCardQuery, LandscapeCardQueryVariables>;
export const UpdateLandscapeDocument = gql`
    mutation UpdateLandscape($input: LandscapeInput!) {
  updateLandscape(input: $input) {
    ...Landscape
  }
}
    ${LandscapeFragmentDoc}`;
export type UpdateLandscapeMutationFn = Apollo.MutationFunction<UpdateLandscapeMutation, UpdateLandscapeMutationVariables>;

/**
 * __useUpdateLandscapeMutation__
 *
 * To run a mutation, you first call `useUpdateLandscapeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLandscapeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLandscapeMutation, { data, loading, error }] = useUpdateLandscapeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLandscapeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLandscapeMutation, UpdateLandscapeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLandscapeMutation, UpdateLandscapeMutationVariables>(UpdateLandscapeDocument, options);
      }
export type UpdateLandscapeMutationHookResult = ReturnType<typeof useUpdateLandscapeMutation>;
export type UpdateLandscapeMutationResult = Apollo.MutationResult<UpdateLandscapeMutation>;
export type UpdateLandscapeMutationOptions = Apollo.BaseMutationOptions<UpdateLandscapeMutation, UpdateLandscapeMutationVariables>;
export const AddMusicDocument = gql`
    mutation AddMusic($input: MusicInput!) {
  addMusic(input: $input) {
    ...Music
  }
}
    ${MusicFragmentDoc}`;
export type AddMusicMutationFn = Apollo.MutationFunction<AddMusicMutation, AddMusicMutationVariables>;

/**
 * __useAddMusicMutation__
 *
 * To run a mutation, you first call `useAddMusicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMusicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMusicMutation, { data, loading, error }] = useAddMusicMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMusicMutation(baseOptions?: Apollo.MutationHookOptions<AddMusicMutation, AddMusicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMusicMutation, AddMusicMutationVariables>(AddMusicDocument, options);
      }
export type AddMusicMutationHookResult = ReturnType<typeof useAddMusicMutation>;
export type AddMusicMutationResult = Apollo.MutationResult<AddMusicMutation>;
export type AddMusicMutationOptions = Apollo.BaseMutationOptions<AddMusicMutation, AddMusicMutationVariables>;
export const MusicDocument = gql`
    query Music($id: ID!) {
  music(id: $id) {
    ...Music
  }
}
    ${MusicFragmentDoc}`;

/**
 * __useMusicQuery__
 *
 * To run a query within a React component, call `useMusicQuery` and pass it any options that fit your needs.
 * When your component renders, `useMusicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMusicQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMusicQuery(baseOptions: Apollo.QueryHookOptions<MusicQuery, MusicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MusicQuery, MusicQueryVariables>(MusicDocument, options);
      }
export function useMusicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MusicQuery, MusicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MusicQuery, MusicQueryVariables>(MusicDocument, options);
        }
export type MusicQueryHookResult = ReturnType<typeof useMusicQuery>;
export type MusicLazyQueryHookResult = ReturnType<typeof useMusicLazyQuery>;
export type MusicQueryResult = Apollo.QueryResult<MusicQuery, MusicQueryVariables>;
export const MusicCardDocument = gql`
    query MusicCard {
  musicCard {
    ...MusicCard
  }
}
    ${MusicCardFragmentDoc}`;

/**
 * __useMusicCardQuery__
 *
 * To run a query within a React component, call `useMusicCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useMusicCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMusicCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useMusicCardQuery(baseOptions?: Apollo.QueryHookOptions<MusicCardQuery, MusicCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MusicCardQuery, MusicCardQueryVariables>(MusicCardDocument, options);
      }
export function useMusicCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MusicCardQuery, MusicCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MusicCardQuery, MusicCardQueryVariables>(MusicCardDocument, options);
        }
export type MusicCardQueryHookResult = ReturnType<typeof useMusicCardQuery>;
export type MusicCardLazyQueryHookResult = ReturnType<typeof useMusicCardLazyQuery>;
export type MusicCardQueryResult = Apollo.QueryResult<MusicCardQuery, MusicCardQueryVariables>;
export const UpdateMusicDocument = gql`
    mutation UpdateMusic($input: MusicInput!) {
  updateMusic(input: $input) {
    ...Music
  }
}
    ${MusicFragmentDoc}`;
export type UpdateMusicMutationFn = Apollo.MutationFunction<UpdateMusicMutation, UpdateMusicMutationVariables>;

/**
 * __useUpdateMusicMutation__
 *
 * To run a mutation, you first call `useUpdateMusicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMusicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMusicMutation, { data, loading, error }] = useUpdateMusicMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMusicMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMusicMutation, UpdateMusicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMusicMutation, UpdateMusicMutationVariables>(UpdateMusicDocument, options);
      }
export type UpdateMusicMutationHookResult = ReturnType<typeof useUpdateMusicMutation>;
export type UpdateMusicMutationResult = Apollo.MutationResult<UpdateMusicMutation>;
export type UpdateMusicMutationOptions = Apollo.BaseMutationOptions<UpdateMusicMutation, UpdateMusicMutationVariables>;
export const AddAgedCareDocument = gql`
    mutation AddAgedCare($input: AgedCareInput!) {
  addAgedCare(input: $input) {
    ...AgedCare
  }
}
    ${AgedCareFragmentDoc}`;
export type AddAgedCareMutationFn = Apollo.MutationFunction<AddAgedCareMutation, AddAgedCareMutationVariables>;

/**
 * __useAddAgedCareMutation__
 *
 * To run a mutation, you first call `useAddAgedCareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAgedCareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAgedCareMutation, { data, loading, error }] = useAddAgedCareMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAgedCareMutation(baseOptions?: Apollo.MutationHookOptions<AddAgedCareMutation, AddAgedCareMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAgedCareMutation, AddAgedCareMutationVariables>(AddAgedCareDocument, options);
      }
export type AddAgedCareMutationHookResult = ReturnType<typeof useAddAgedCareMutation>;
export type AddAgedCareMutationResult = Apollo.MutationResult<AddAgedCareMutation>;
export type AddAgedCareMutationOptions = Apollo.BaseMutationOptions<AddAgedCareMutation, AddAgedCareMutationVariables>;
export const AgedCareDocument = gql`
    query AgedCare($id: ID!) {
  agedCare(id: $id) {
    ...AgedCare
  }
}
    ${AgedCareFragmentDoc}`;

/**
 * __useAgedCareQuery__
 *
 * To run a query within a React component, call `useAgedCareQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgedCareQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgedCareQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAgedCareQuery(baseOptions: Apollo.QueryHookOptions<AgedCareQuery, AgedCareQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AgedCareQuery, AgedCareQueryVariables>(AgedCareDocument, options);
      }
export function useAgedCareLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AgedCareQuery, AgedCareQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AgedCareQuery, AgedCareQueryVariables>(AgedCareDocument, options);
        }
export type AgedCareQueryHookResult = ReturnType<typeof useAgedCareQuery>;
export type AgedCareLazyQueryHookResult = ReturnType<typeof useAgedCareLazyQuery>;
export type AgedCareQueryResult = Apollo.QueryResult<AgedCareQuery, AgedCareQueryVariables>;
export const AgedCareCardDocument = gql`
    query AgedCareCard {
  agedCareCard {
    ...AgedCareCard
  }
}
    ${AgedCareCardFragmentDoc}`;

/**
 * __useAgedCareCardQuery__
 *
 * To run a query within a React component, call `useAgedCareCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgedCareCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgedCareCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useAgedCareCardQuery(baseOptions?: Apollo.QueryHookOptions<AgedCareCardQuery, AgedCareCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AgedCareCardQuery, AgedCareCardQueryVariables>(AgedCareCardDocument, options);
      }
export function useAgedCareCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AgedCareCardQuery, AgedCareCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AgedCareCardQuery, AgedCareCardQueryVariables>(AgedCareCardDocument, options);
        }
export type AgedCareCardQueryHookResult = ReturnType<typeof useAgedCareCardQuery>;
export type AgedCareCardLazyQueryHookResult = ReturnType<typeof useAgedCareCardLazyQuery>;
export type AgedCareCardQueryResult = Apollo.QueryResult<AgedCareCardQuery, AgedCareCardQueryVariables>;
export const UpdateAgedCareDocument = gql`
    mutation UpdateAgedCare($input: AgedCareInput!) {
  updateAgedCare(input: $input) {
    ...AgedCare
  }
}
    ${AgedCareFragmentDoc}`;
export type UpdateAgedCareMutationFn = Apollo.MutationFunction<UpdateAgedCareMutation, UpdateAgedCareMutationVariables>;

/**
 * __useUpdateAgedCareMutation__
 *
 * To run a mutation, you first call `useUpdateAgedCareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAgedCareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAgedCareMutation, { data, loading, error }] = useUpdateAgedCareMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAgedCareMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAgedCareMutation, UpdateAgedCareMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAgedCareMutation, UpdateAgedCareMutationVariables>(UpdateAgedCareDocument, options);
      }
export type UpdateAgedCareMutationHookResult = ReturnType<typeof useUpdateAgedCareMutation>;
export type UpdateAgedCareMutationResult = Apollo.MutationResult<UpdateAgedCareMutation>;
export type UpdateAgedCareMutationOptions = Apollo.BaseMutationOptions<UpdateAgedCareMutation, UpdateAgedCareMutationVariables>;
export const AddDentalDocument = gql`
    mutation AddDental($input: DentalInput!) {
  addDental(input: $input) {
    ...Dental
  }
}
    ${DentalFragmentDoc}`;
export type AddDentalMutationFn = Apollo.MutationFunction<AddDentalMutation, AddDentalMutationVariables>;

/**
 * __useAddDentalMutation__
 *
 * To run a mutation, you first call `useAddDentalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDentalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDentalMutation, { data, loading, error }] = useAddDentalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDentalMutation(baseOptions?: Apollo.MutationHookOptions<AddDentalMutation, AddDentalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDentalMutation, AddDentalMutationVariables>(AddDentalDocument, options);
      }
export type AddDentalMutationHookResult = ReturnType<typeof useAddDentalMutation>;
export type AddDentalMutationResult = Apollo.MutationResult<AddDentalMutation>;
export type AddDentalMutationOptions = Apollo.BaseMutationOptions<AddDentalMutation, AddDentalMutationVariables>;
export const DentalDocument = gql`
    query Dental($id: ID!) {
  dental(id: $id) {
    ...Dental
  }
}
    ${DentalFragmentDoc}`;

/**
 * __useDentalQuery__
 *
 * To run a query within a React component, call `useDentalQuery` and pass it any options that fit your needs.
 * When your component renders, `useDentalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDentalQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDentalQuery(baseOptions: Apollo.QueryHookOptions<DentalQuery, DentalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DentalQuery, DentalQueryVariables>(DentalDocument, options);
      }
export function useDentalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DentalQuery, DentalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DentalQuery, DentalQueryVariables>(DentalDocument, options);
        }
export type DentalQueryHookResult = ReturnType<typeof useDentalQuery>;
export type DentalLazyQueryHookResult = ReturnType<typeof useDentalLazyQuery>;
export type DentalQueryResult = Apollo.QueryResult<DentalQuery, DentalQueryVariables>;
export const DentalCardDocument = gql`
    query DentalCard {
  dentalCard {
    ...DentalCard
  }
}
    ${DentalCardFragmentDoc}`;

/**
 * __useDentalCardQuery__
 *
 * To run a query within a React component, call `useDentalCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useDentalCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDentalCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useDentalCardQuery(baseOptions?: Apollo.QueryHookOptions<DentalCardQuery, DentalCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DentalCardQuery, DentalCardQueryVariables>(DentalCardDocument, options);
      }
export function useDentalCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DentalCardQuery, DentalCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DentalCardQuery, DentalCardQueryVariables>(DentalCardDocument, options);
        }
export type DentalCardQueryHookResult = ReturnType<typeof useDentalCardQuery>;
export type DentalCardLazyQueryHookResult = ReturnType<typeof useDentalCardLazyQuery>;
export type DentalCardQueryResult = Apollo.QueryResult<DentalCardQuery, DentalCardQueryVariables>;
export const UpdateDentalDocument = gql`
    mutation UpdateDental($input: DentalInput!) {
  updateDental(input: $input) {
    ...Dental
  }
}
    ${DentalFragmentDoc}`;
export type UpdateDentalMutationFn = Apollo.MutationFunction<UpdateDentalMutation, UpdateDentalMutationVariables>;

/**
 * __useUpdateDentalMutation__
 *
 * To run a mutation, you first call `useUpdateDentalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDentalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDentalMutation, { data, loading, error }] = useUpdateDentalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDentalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDentalMutation, UpdateDentalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDentalMutation, UpdateDentalMutationVariables>(UpdateDentalDocument, options);
      }
export type UpdateDentalMutationHookResult = ReturnType<typeof useUpdateDentalMutation>;
export type UpdateDentalMutationResult = Apollo.MutationResult<UpdateDentalMutation>;
export type UpdateDentalMutationOptions = Apollo.BaseMutationOptions<UpdateDentalMutation, UpdateDentalMutationVariables>;
export const AddHealthDocument = gql`
    mutation AddHealth($input: HealthInput!) {
  addHealth(input: $input) {
    ...Health
  }
}
    ${HealthFragmentDoc}`;
export type AddHealthMutationFn = Apollo.MutationFunction<AddHealthMutation, AddHealthMutationVariables>;

/**
 * __useAddHealthMutation__
 *
 * To run a mutation, you first call `useAddHealthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddHealthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addHealthMutation, { data, loading, error }] = useAddHealthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddHealthMutation(baseOptions?: Apollo.MutationHookOptions<AddHealthMutation, AddHealthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddHealthMutation, AddHealthMutationVariables>(AddHealthDocument, options);
      }
export type AddHealthMutationHookResult = ReturnType<typeof useAddHealthMutation>;
export type AddHealthMutationResult = Apollo.MutationResult<AddHealthMutation>;
export type AddHealthMutationOptions = Apollo.BaseMutationOptions<AddHealthMutation, AddHealthMutationVariables>;
export const HealthDocument = gql`
    query Health($id: ID!) {
  health(id: $id) {
    ...Health
  }
}
    ${HealthFragmentDoc}`;

/**
 * __useHealthQuery__
 *
 * To run a query within a React component, call `useHealthQuery` and pass it any options that fit your needs.
 * When your component renders, `useHealthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHealthQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHealthQuery(baseOptions: Apollo.QueryHookOptions<HealthQuery, HealthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HealthQuery, HealthQueryVariables>(HealthDocument, options);
      }
export function useHealthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HealthQuery, HealthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HealthQuery, HealthQueryVariables>(HealthDocument, options);
        }
export type HealthQueryHookResult = ReturnType<typeof useHealthQuery>;
export type HealthLazyQueryHookResult = ReturnType<typeof useHealthLazyQuery>;
export type HealthQueryResult = Apollo.QueryResult<HealthQuery, HealthQueryVariables>;
export const UpdateHealthDocument = gql`
    mutation UpdateHealth($input: HealthInput!) {
  updateHealth(input: $input) {
    ...Health
  }
}
    ${HealthFragmentDoc}`;
export type UpdateHealthMutationFn = Apollo.MutationFunction<UpdateHealthMutation, UpdateHealthMutationVariables>;

/**
 * __useUpdateHealthMutation__
 *
 * To run a mutation, you first call `useUpdateHealthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHealthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHealthMutation, { data, loading, error }] = useUpdateHealthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateHealthMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHealthMutation, UpdateHealthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHealthMutation, UpdateHealthMutationVariables>(UpdateHealthDocument, options);
      }
export type UpdateHealthMutationHookResult = ReturnType<typeof useUpdateHealthMutation>;
export type UpdateHealthMutationResult = Apollo.MutationResult<UpdateHealthMutation>;
export type UpdateHealthMutationOptions = Apollo.BaseMutationOptions<UpdateHealthMutation, UpdateHealthMutationVariables>;
export const AddMassageDocument = gql`
    mutation AddMassage($input: MassageInput!) {
  addMassage(input: $input) {
    ...Massage
  }
}
    ${MassageFragmentDoc}`;
export type AddMassageMutationFn = Apollo.MutationFunction<AddMassageMutation, AddMassageMutationVariables>;

/**
 * __useAddMassageMutation__
 *
 * To run a mutation, you first call `useAddMassageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMassageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMassageMutation, { data, loading, error }] = useAddMassageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMassageMutation(baseOptions?: Apollo.MutationHookOptions<AddMassageMutation, AddMassageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMassageMutation, AddMassageMutationVariables>(AddMassageDocument, options);
      }
export type AddMassageMutationHookResult = ReturnType<typeof useAddMassageMutation>;
export type AddMassageMutationResult = Apollo.MutationResult<AddMassageMutation>;
export type AddMassageMutationOptions = Apollo.BaseMutationOptions<AddMassageMutation, AddMassageMutationVariables>;
export const MassageDocument = gql`
    query Massage($id: ID!) {
  massage(id: $id) {
    ...Massage
  }
}
    ${MassageFragmentDoc}`;

/**
 * __useMassageQuery__
 *
 * To run a query within a React component, call `useMassageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMassageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMassageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMassageQuery(baseOptions: Apollo.QueryHookOptions<MassageQuery, MassageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MassageQuery, MassageQueryVariables>(MassageDocument, options);
      }
export function useMassageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MassageQuery, MassageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MassageQuery, MassageQueryVariables>(MassageDocument, options);
        }
export type MassageQueryHookResult = ReturnType<typeof useMassageQuery>;
export type MassageLazyQueryHookResult = ReturnType<typeof useMassageLazyQuery>;
export type MassageQueryResult = Apollo.QueryResult<MassageQuery, MassageQueryVariables>;
export const MassageCardDocument = gql`
    query MassageCard {
  massageCard {
    ...MassageCard
  }
}
    ${MassageCardFragmentDoc}`;

/**
 * __useMassageCardQuery__
 *
 * To run a query within a React component, call `useMassageCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useMassageCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMassageCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useMassageCardQuery(baseOptions?: Apollo.QueryHookOptions<MassageCardQuery, MassageCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MassageCardQuery, MassageCardQueryVariables>(MassageCardDocument, options);
      }
export function useMassageCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MassageCardQuery, MassageCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MassageCardQuery, MassageCardQueryVariables>(MassageCardDocument, options);
        }
export type MassageCardQueryHookResult = ReturnType<typeof useMassageCardQuery>;
export type MassageCardLazyQueryHookResult = ReturnType<typeof useMassageCardLazyQuery>;
export type MassageCardQueryResult = Apollo.QueryResult<MassageCardQuery, MassageCardQueryVariables>;
export const UpdateMassageDocument = gql`
    mutation UpdateMassage($input: MassageInput!) {
  updateMassage(input: $input) {
    ...Massage
  }
}
    ${MassageFragmentDoc}`;
export type UpdateMassageMutationFn = Apollo.MutationFunction<UpdateMassageMutation, UpdateMassageMutationVariables>;

/**
 * __useUpdateMassageMutation__
 *
 * To run a mutation, you first call `useUpdateMassageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMassageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMassageMutation, { data, loading, error }] = useUpdateMassageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMassageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMassageMutation, UpdateMassageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMassageMutation, UpdateMassageMutationVariables>(UpdateMassageDocument, options);
      }
export type UpdateMassageMutationHookResult = ReturnType<typeof useUpdateMassageMutation>;
export type UpdateMassageMutationResult = Apollo.MutationResult<UpdateMassageMutation>;
export type UpdateMassageMutationOptions = Apollo.BaseMutationOptions<UpdateMassageMutation, UpdateMassageMutationVariables>;
export const AddMedicineDocument = gql`
    mutation AddMedicine($input: MedicineInput!) {
  addMedicine(input: $input) {
    ...Medicine
  }
}
    ${MedicineFragmentDoc}`;
export type AddMedicineMutationFn = Apollo.MutationFunction<AddMedicineMutation, AddMedicineMutationVariables>;

/**
 * __useAddMedicineMutation__
 *
 * To run a mutation, you first call `useAddMedicineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMedicineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMedicineMutation, { data, loading, error }] = useAddMedicineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMedicineMutation(baseOptions?: Apollo.MutationHookOptions<AddMedicineMutation, AddMedicineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMedicineMutation, AddMedicineMutationVariables>(AddMedicineDocument, options);
      }
export type AddMedicineMutationHookResult = ReturnType<typeof useAddMedicineMutation>;
export type AddMedicineMutationResult = Apollo.MutationResult<AddMedicineMutation>;
export type AddMedicineMutationOptions = Apollo.BaseMutationOptions<AddMedicineMutation, AddMedicineMutationVariables>;
export const MedicineDocument = gql`
    query Medicine($id: ID!) {
  medicine(id: $id) {
    ...Medicine
  }
}
    ${MedicineFragmentDoc}`;

/**
 * __useMedicineQuery__
 *
 * To run a query within a React component, call `useMedicineQuery` and pass it any options that fit your needs.
 * When your component renders, `useMedicineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMedicineQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMedicineQuery(baseOptions: Apollo.QueryHookOptions<MedicineQuery, MedicineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MedicineQuery, MedicineQueryVariables>(MedicineDocument, options);
      }
export function useMedicineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MedicineQuery, MedicineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MedicineQuery, MedicineQueryVariables>(MedicineDocument, options);
        }
export type MedicineQueryHookResult = ReturnType<typeof useMedicineQuery>;
export type MedicineLazyQueryHookResult = ReturnType<typeof useMedicineLazyQuery>;
export type MedicineQueryResult = Apollo.QueryResult<MedicineQuery, MedicineQueryVariables>;
export const MedicineCardDocument = gql`
    query MedicineCard {
  medicineCard {
    ...MedicineCard
  }
}
    ${MedicineCardFragmentDoc}`;

/**
 * __useMedicineCardQuery__
 *
 * To run a query within a React component, call `useMedicineCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useMedicineCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMedicineCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useMedicineCardQuery(baseOptions?: Apollo.QueryHookOptions<MedicineCardQuery, MedicineCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MedicineCardQuery, MedicineCardQueryVariables>(MedicineCardDocument, options);
      }
export function useMedicineCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MedicineCardQuery, MedicineCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MedicineCardQuery, MedicineCardQueryVariables>(MedicineCardDocument, options);
        }
export type MedicineCardQueryHookResult = ReturnType<typeof useMedicineCardQuery>;
export type MedicineCardLazyQueryHookResult = ReturnType<typeof useMedicineCardLazyQuery>;
export type MedicineCardQueryResult = Apollo.QueryResult<MedicineCardQuery, MedicineCardQueryVariables>;
export const UpdateMedicineDocument = gql`
    mutation UpdateMedicine($input: MedicineInput!) {
  updateMedicine(input: $input) {
    ...Medicine
  }
}
    ${MedicineFragmentDoc}`;
export type UpdateMedicineMutationFn = Apollo.MutationFunction<UpdateMedicineMutation, UpdateMedicineMutationVariables>;

/**
 * __useUpdateMedicineMutation__
 *
 * To run a mutation, you first call `useUpdateMedicineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMedicineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMedicineMutation, { data, loading, error }] = useUpdateMedicineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMedicineMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMedicineMutation, UpdateMedicineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMedicineMutation, UpdateMedicineMutationVariables>(UpdateMedicineDocument, options);
      }
export type UpdateMedicineMutationHookResult = ReturnType<typeof useUpdateMedicineMutation>;
export type UpdateMedicineMutationResult = Apollo.MutationResult<UpdateMedicineMutation>;
export type UpdateMedicineMutationOptions = Apollo.BaseMutationOptions<UpdateMedicineMutation, UpdateMedicineMutationVariables>;
export const AddMentalHealthDocument = gql`
    mutation AddMentalHealth($input: MentalHealthInput!) {
  addMentalHealth(input: $input) {
    ...MentalHealth
  }
}
    ${MentalHealthFragmentDoc}`;
export type AddMentalHealthMutationFn = Apollo.MutationFunction<AddMentalHealthMutation, AddMentalHealthMutationVariables>;

/**
 * __useAddMentalHealthMutation__
 *
 * To run a mutation, you first call `useAddMentalHealthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMentalHealthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMentalHealthMutation, { data, loading, error }] = useAddMentalHealthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMentalHealthMutation(baseOptions?: Apollo.MutationHookOptions<AddMentalHealthMutation, AddMentalHealthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMentalHealthMutation, AddMentalHealthMutationVariables>(AddMentalHealthDocument, options);
      }
export type AddMentalHealthMutationHookResult = ReturnType<typeof useAddMentalHealthMutation>;
export type AddMentalHealthMutationResult = Apollo.MutationResult<AddMentalHealthMutation>;
export type AddMentalHealthMutationOptions = Apollo.BaseMutationOptions<AddMentalHealthMutation, AddMentalHealthMutationVariables>;
export const MentalHealthDocument = gql`
    query MentalHealth($id: ID!) {
  mentalHealth(id: $id) {
    ...MentalHealth
  }
}
    ${MentalHealthFragmentDoc}`;

/**
 * __useMentalHealthQuery__
 *
 * To run a query within a React component, call `useMentalHealthQuery` and pass it any options that fit your needs.
 * When your component renders, `useMentalHealthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMentalHealthQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMentalHealthQuery(baseOptions: Apollo.QueryHookOptions<MentalHealthQuery, MentalHealthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MentalHealthQuery, MentalHealthQueryVariables>(MentalHealthDocument, options);
      }
export function useMentalHealthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MentalHealthQuery, MentalHealthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MentalHealthQuery, MentalHealthQueryVariables>(MentalHealthDocument, options);
        }
export type MentalHealthQueryHookResult = ReturnType<typeof useMentalHealthQuery>;
export type MentalHealthLazyQueryHookResult = ReturnType<typeof useMentalHealthLazyQuery>;
export type MentalHealthQueryResult = Apollo.QueryResult<MentalHealthQuery, MentalHealthQueryVariables>;
export const MentalHealthCardDocument = gql`
    query MentalHealthCard {
  mentalHealthCard {
    ...MentalHealthCard
  }
}
    ${MentalHealthCardFragmentDoc}`;

/**
 * __useMentalHealthCardQuery__
 *
 * To run a query within a React component, call `useMentalHealthCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useMentalHealthCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMentalHealthCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useMentalHealthCardQuery(baseOptions?: Apollo.QueryHookOptions<MentalHealthCardQuery, MentalHealthCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MentalHealthCardQuery, MentalHealthCardQueryVariables>(MentalHealthCardDocument, options);
      }
export function useMentalHealthCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MentalHealthCardQuery, MentalHealthCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MentalHealthCardQuery, MentalHealthCardQueryVariables>(MentalHealthCardDocument, options);
        }
export type MentalHealthCardQueryHookResult = ReturnType<typeof useMentalHealthCardQuery>;
export type MentalHealthCardLazyQueryHookResult = ReturnType<typeof useMentalHealthCardLazyQuery>;
export type MentalHealthCardQueryResult = Apollo.QueryResult<MentalHealthCardQuery, MentalHealthCardQueryVariables>;
export const UpdateMentalHealthDocument = gql`
    mutation UpdateMentalHealth($input: MentalHealthInput!) {
  updateMentalHealth(input: $input) {
    ...MentalHealth
  }
}
    ${MentalHealthFragmentDoc}`;
export type UpdateMentalHealthMutationFn = Apollo.MutationFunction<UpdateMentalHealthMutation, UpdateMentalHealthMutationVariables>;

/**
 * __useUpdateMentalHealthMutation__
 *
 * To run a mutation, you first call `useUpdateMentalHealthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMentalHealthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMentalHealthMutation, { data, loading, error }] = useUpdateMentalHealthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMentalHealthMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMentalHealthMutation, UpdateMentalHealthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMentalHealthMutation, UpdateMentalHealthMutationVariables>(UpdateMentalHealthDocument, options);
      }
export type UpdateMentalHealthMutationHookResult = ReturnType<typeof useUpdateMentalHealthMutation>;
export type UpdateMentalHealthMutationResult = Apollo.MutationResult<UpdateMentalHealthMutation>;
export type UpdateMentalHealthMutationOptions = Apollo.BaseMutationOptions<UpdateMentalHealthMutation, UpdateMentalHealthMutationVariables>;
export const AddNursingDocument = gql`
    mutation AddNursing($input: NursingInput!) {
  addNursing(input: $input) {
    ...Nursing
  }
}
    ${NursingFragmentDoc}`;
export type AddNursingMutationFn = Apollo.MutationFunction<AddNursingMutation, AddNursingMutationVariables>;

/**
 * __useAddNursingMutation__
 *
 * To run a mutation, you first call `useAddNursingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNursingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNursingMutation, { data, loading, error }] = useAddNursingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddNursingMutation(baseOptions?: Apollo.MutationHookOptions<AddNursingMutation, AddNursingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNursingMutation, AddNursingMutationVariables>(AddNursingDocument, options);
      }
export type AddNursingMutationHookResult = ReturnType<typeof useAddNursingMutation>;
export type AddNursingMutationResult = Apollo.MutationResult<AddNursingMutation>;
export type AddNursingMutationOptions = Apollo.BaseMutationOptions<AddNursingMutation, AddNursingMutationVariables>;
export const NursingDocument = gql`
    query Nursing($id: ID!) {
  nursing(id: $id) {
    ...Nursing
  }
}
    ${NursingFragmentDoc}`;

/**
 * __useNursingQuery__
 *
 * To run a query within a React component, call `useNursingQuery` and pass it any options that fit your needs.
 * When your component renders, `useNursingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNursingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNursingQuery(baseOptions: Apollo.QueryHookOptions<NursingQuery, NursingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NursingQuery, NursingQueryVariables>(NursingDocument, options);
      }
export function useNursingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NursingQuery, NursingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NursingQuery, NursingQueryVariables>(NursingDocument, options);
        }
export type NursingQueryHookResult = ReturnType<typeof useNursingQuery>;
export type NursingLazyQueryHookResult = ReturnType<typeof useNursingLazyQuery>;
export type NursingQueryResult = Apollo.QueryResult<NursingQuery, NursingQueryVariables>;
export const NursingCardDocument = gql`
    query NursingCard {
  nursingCard {
    ...NursingCard
  }
}
    ${NursingCardFragmentDoc}`;

/**
 * __useNursingCardQuery__
 *
 * To run a query within a React component, call `useNursingCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useNursingCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNursingCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useNursingCardQuery(baseOptions?: Apollo.QueryHookOptions<NursingCardQuery, NursingCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NursingCardQuery, NursingCardQueryVariables>(NursingCardDocument, options);
      }
export function useNursingCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NursingCardQuery, NursingCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NursingCardQuery, NursingCardQueryVariables>(NursingCardDocument, options);
        }
export type NursingCardQueryHookResult = ReturnType<typeof useNursingCardQuery>;
export type NursingCardLazyQueryHookResult = ReturnType<typeof useNursingCardLazyQuery>;
export type NursingCardQueryResult = Apollo.QueryResult<NursingCardQuery, NursingCardQueryVariables>;
export const UpdateNursingDocument = gql`
    mutation UpdateNursing($input: NursingInput!) {
  updateNursing(input: $input) {
    ...Nursing
  }
}
    ${NursingFragmentDoc}`;
export type UpdateNursingMutationFn = Apollo.MutationFunction<UpdateNursingMutation, UpdateNursingMutationVariables>;

/**
 * __useUpdateNursingMutation__
 *
 * To run a mutation, you first call `useUpdateNursingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNursingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNursingMutation, { data, loading, error }] = useUpdateNursingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNursingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNursingMutation, UpdateNursingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNursingMutation, UpdateNursingMutationVariables>(UpdateNursingDocument, options);
      }
export type UpdateNursingMutationHookResult = ReturnType<typeof useUpdateNursingMutation>;
export type UpdateNursingMutationResult = Apollo.MutationResult<UpdateNursingMutation>;
export type UpdateNursingMutationOptions = Apollo.BaseMutationOptions<UpdateNursingMutation, UpdateNursingMutationVariables>;
export const AddNutritionDocument = gql`
    mutation AddNutrition($input: NutritionInput!) {
  addNutrition(input: $input) {
    ...Nutrition
  }
}
    ${NutritionFragmentDoc}`;
export type AddNutritionMutationFn = Apollo.MutationFunction<AddNutritionMutation, AddNutritionMutationVariables>;

/**
 * __useAddNutritionMutation__
 *
 * To run a mutation, you first call `useAddNutritionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNutritionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNutritionMutation, { data, loading, error }] = useAddNutritionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddNutritionMutation(baseOptions?: Apollo.MutationHookOptions<AddNutritionMutation, AddNutritionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNutritionMutation, AddNutritionMutationVariables>(AddNutritionDocument, options);
      }
export type AddNutritionMutationHookResult = ReturnType<typeof useAddNutritionMutation>;
export type AddNutritionMutationResult = Apollo.MutationResult<AddNutritionMutation>;
export type AddNutritionMutationOptions = Apollo.BaseMutationOptions<AddNutritionMutation, AddNutritionMutationVariables>;
export const NutritionDocument = gql`
    query Nutrition($id: ID!) {
  nutrition(id: $id) {
    ...Nutrition
  }
}
    ${NutritionFragmentDoc}`;

/**
 * __useNutritionQuery__
 *
 * To run a query within a React component, call `useNutritionQuery` and pass it any options that fit your needs.
 * When your component renders, `useNutritionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNutritionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNutritionQuery(baseOptions: Apollo.QueryHookOptions<NutritionQuery, NutritionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NutritionQuery, NutritionQueryVariables>(NutritionDocument, options);
      }
export function useNutritionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NutritionQuery, NutritionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NutritionQuery, NutritionQueryVariables>(NutritionDocument, options);
        }
export type NutritionQueryHookResult = ReturnType<typeof useNutritionQuery>;
export type NutritionLazyQueryHookResult = ReturnType<typeof useNutritionLazyQuery>;
export type NutritionQueryResult = Apollo.QueryResult<NutritionQuery, NutritionQueryVariables>;
export const NutritionCardDocument = gql`
    query NutritionCard {
  nutritionCard {
    ...NutritionCard
  }
}
    ${NutritionCardFragmentDoc}`;

/**
 * __useNutritionCardQuery__
 *
 * To run a query within a React component, call `useNutritionCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useNutritionCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNutritionCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useNutritionCardQuery(baseOptions?: Apollo.QueryHookOptions<NutritionCardQuery, NutritionCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NutritionCardQuery, NutritionCardQueryVariables>(NutritionCardDocument, options);
      }
export function useNutritionCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NutritionCardQuery, NutritionCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NutritionCardQuery, NutritionCardQueryVariables>(NutritionCardDocument, options);
        }
export type NutritionCardQueryHookResult = ReturnType<typeof useNutritionCardQuery>;
export type NutritionCardLazyQueryHookResult = ReturnType<typeof useNutritionCardLazyQuery>;
export type NutritionCardQueryResult = Apollo.QueryResult<NutritionCardQuery, NutritionCardQueryVariables>;
export const UpdateNutritionDocument = gql`
    mutation UpdateNutrition($input: NutritionInput!) {
  updateNutrition(input: $input) {
    ...Nutrition
  }
}
    ${NutritionFragmentDoc}`;
export type UpdateNutritionMutationFn = Apollo.MutationFunction<UpdateNutritionMutation, UpdateNutritionMutationVariables>;

/**
 * __useUpdateNutritionMutation__
 *
 * To run a mutation, you first call `useUpdateNutritionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNutritionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNutritionMutation, { data, loading, error }] = useUpdateNutritionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNutritionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNutritionMutation, UpdateNutritionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNutritionMutation, UpdateNutritionMutationVariables>(UpdateNutritionDocument, options);
      }
export type UpdateNutritionMutationHookResult = ReturnType<typeof useUpdateNutritionMutation>;
export type UpdateNutritionMutationResult = Apollo.MutationResult<UpdateNutritionMutation>;
export type UpdateNutritionMutationOptions = Apollo.BaseMutationOptions<UpdateNutritionMutation, UpdateNutritionMutationVariables>;
export const AddPublicHealthDocument = gql`
    mutation AddPublicHealth($input: PublicHealthInput!) {
  addPublicHealth(input: $input) {
    ...PublicHealth
  }
}
    ${PublicHealthFragmentDoc}`;
export type AddPublicHealthMutationFn = Apollo.MutationFunction<AddPublicHealthMutation, AddPublicHealthMutationVariables>;

/**
 * __useAddPublicHealthMutation__
 *
 * To run a mutation, you first call `useAddPublicHealthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPublicHealthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPublicHealthMutation, { data, loading, error }] = useAddPublicHealthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPublicHealthMutation(baseOptions?: Apollo.MutationHookOptions<AddPublicHealthMutation, AddPublicHealthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPublicHealthMutation, AddPublicHealthMutationVariables>(AddPublicHealthDocument, options);
      }
export type AddPublicHealthMutationHookResult = ReturnType<typeof useAddPublicHealthMutation>;
export type AddPublicHealthMutationResult = Apollo.MutationResult<AddPublicHealthMutation>;
export type AddPublicHealthMutationOptions = Apollo.BaseMutationOptions<AddPublicHealthMutation, AddPublicHealthMutationVariables>;
export const PublicHealthDocument = gql`
    query PublicHealth($id: ID!) {
  publicHealth(id: $id) {
    ...PublicHealth
  }
}
    ${PublicHealthFragmentDoc}`;

/**
 * __usePublicHealthQuery__
 *
 * To run a query within a React component, call `usePublicHealthQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicHealthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicHealthQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublicHealthQuery(baseOptions: Apollo.QueryHookOptions<PublicHealthQuery, PublicHealthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicHealthQuery, PublicHealthQueryVariables>(PublicHealthDocument, options);
      }
export function usePublicHealthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicHealthQuery, PublicHealthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicHealthQuery, PublicHealthQueryVariables>(PublicHealthDocument, options);
        }
export type PublicHealthQueryHookResult = ReturnType<typeof usePublicHealthQuery>;
export type PublicHealthLazyQueryHookResult = ReturnType<typeof usePublicHealthLazyQuery>;
export type PublicHealthQueryResult = Apollo.QueryResult<PublicHealthQuery, PublicHealthQueryVariables>;
export const PublicHealthCardDocument = gql`
    query PublicHealthCard {
  publicHealthCard {
    ...PublicHealthCard
  }
}
    ${PublicHealthCardFragmentDoc}`;

/**
 * __usePublicHealthCardQuery__
 *
 * To run a query within a React component, call `usePublicHealthCardQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicHealthCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicHealthCardQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublicHealthCardQuery(baseOptions?: Apollo.QueryHookOptions<PublicHealthCardQuery, PublicHealthCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicHealthCardQuery, PublicHealthCardQueryVariables>(PublicHealthCardDocument, options);
      }
export function usePublicHealthCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicHealthCardQuery, PublicHealthCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicHealthCardQuery, PublicHealthCardQueryVariables>(PublicHealthCardDocument, options);
        }
export type PublicHealthCardQueryHookResult = ReturnType<typeof usePublicHealthCardQuery>;
export type PublicHealthCardLazyQueryHookResult = ReturnType<typeof usePublicHealthCardLazyQuery>;
export type PublicHealthCardQueryResult = Apollo.QueryResult<PublicHealthCardQuery, PublicHealthCardQueryVariables>;
export const UpdatePublicHealthDocument = gql`
    mutation UpdatePublicHealth($input: PublicHealthInput!) {
  updatePublicHealth(input: $input) {
    ...PublicHealth
  }
}
    ${PublicHealthFragmentDoc}`;
export type UpdatePublicHealthMutationFn = Apollo.MutationFunction<UpdatePublicHealthMutation, UpdatePublicHealthMutationVariables>;

/**
 * __useUpdatePublicHealthMutation__
 *
 * To run a mutation, you first call `useUpdatePublicHealthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePublicHealthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePublicHealthMutation, { data, loading, error }] = useUpdatePublicHealthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePublicHealthMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePublicHealthMutation, UpdatePublicHealthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePublicHealthMutation, UpdatePublicHealthMutationVariables>(UpdatePublicHealthDocument, options);
      }
export type UpdatePublicHealthMutationHookResult = ReturnType<typeof useUpdatePublicHealthMutation>;
export type UpdatePublicHealthMutationResult = Apollo.MutationResult<UpdatePublicHealthMutation>;
export type UpdatePublicHealthMutationOptions = Apollo.BaseMutationOptions<UpdatePublicHealthMutation, UpdatePublicHealthMutationVariables>;
export const AddVeterinaryDocument = gql`
    mutation AddVeterinary($input: VeterinaryInput!) {
  addVeterinary(input: $input) {
    ...Veterinary
  }
}
    ${VeterinaryFragmentDoc}`;
export type AddVeterinaryMutationFn = Apollo.MutationFunction<AddVeterinaryMutation, AddVeterinaryMutationVariables>;

/**
 * __useAddVeterinaryMutation__
 *
 * To run a mutation, you first call `useAddVeterinaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVeterinaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVeterinaryMutation, { data, loading, error }] = useAddVeterinaryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddVeterinaryMutation(baseOptions?: Apollo.MutationHookOptions<AddVeterinaryMutation, AddVeterinaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddVeterinaryMutation, AddVeterinaryMutationVariables>(AddVeterinaryDocument, options);
      }
export type AddVeterinaryMutationHookResult = ReturnType<typeof useAddVeterinaryMutation>;
export type AddVeterinaryMutationResult = Apollo.MutationResult<AddVeterinaryMutation>;
export type AddVeterinaryMutationOptions = Apollo.BaseMutationOptions<AddVeterinaryMutation, AddVeterinaryMutationVariables>;
export const UpdateVeterinaryDocument = gql`
    mutation UpdateVeterinary($input: VeterinaryInput!) {
  updateVeterinary(input: $input) {
    ...Veterinary
  }
}
    ${VeterinaryFragmentDoc}`;
export type UpdateVeterinaryMutationFn = Apollo.MutationFunction<UpdateVeterinaryMutation, UpdateVeterinaryMutationVariables>;

/**
 * __useUpdateVeterinaryMutation__
 *
 * To run a mutation, you first call `useUpdateVeterinaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVeterinaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVeterinaryMutation, { data, loading, error }] = useUpdateVeterinaryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVeterinaryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVeterinaryMutation, UpdateVeterinaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVeterinaryMutation, UpdateVeterinaryMutationVariables>(UpdateVeterinaryDocument, options);
      }
export type UpdateVeterinaryMutationHookResult = ReturnType<typeof useUpdateVeterinaryMutation>;
export type UpdateVeterinaryMutationResult = Apollo.MutationResult<UpdateVeterinaryMutation>;
export type UpdateVeterinaryMutationOptions = Apollo.BaseMutationOptions<UpdateVeterinaryMutation, UpdateVeterinaryMutationVariables>;
export const VeterinaryDocument = gql`
    query Veterinary($id: ID!) {
  veterinary(id: $id) {
    ...Veterinary
  }
}
    ${VeterinaryFragmentDoc}`;

/**
 * __useVeterinaryQuery__
 *
 * To run a query within a React component, call `useVeterinaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useVeterinaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVeterinaryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVeterinaryQuery(baseOptions: Apollo.QueryHookOptions<VeterinaryQuery, VeterinaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VeterinaryQuery, VeterinaryQueryVariables>(VeterinaryDocument, options);
      }
export function useVeterinaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VeterinaryQuery, VeterinaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VeterinaryQuery, VeterinaryQueryVariables>(VeterinaryDocument, options);
        }
export type VeterinaryQueryHookResult = ReturnType<typeof useVeterinaryQuery>;
export type VeterinaryLazyQueryHookResult = ReturnType<typeof useVeterinaryLazyQuery>;
export type VeterinaryQueryResult = Apollo.QueryResult<VeterinaryQuery, VeterinaryQueryVariables>;
export const VeterinaryCardDocument = gql`
    query VeterinaryCard {
  veterinaryCard {
    ...VeterinaryCard
  }
}
    ${VeterinaryCardFragmentDoc}`;

/**
 * __useVeterinaryCardQuery__
 *
 * To run a query within a React component, call `useVeterinaryCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useVeterinaryCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVeterinaryCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useVeterinaryCardQuery(baseOptions?: Apollo.QueryHookOptions<VeterinaryCardQuery, VeterinaryCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VeterinaryCardQuery, VeterinaryCardQueryVariables>(VeterinaryCardDocument, options);
      }
export function useVeterinaryCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VeterinaryCardQuery, VeterinaryCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VeterinaryCardQuery, VeterinaryCardQueryVariables>(VeterinaryCardDocument, options);
        }
export type VeterinaryCardQueryHookResult = ReturnType<typeof useVeterinaryCardQuery>;
export type VeterinaryCardLazyQueryHookResult = ReturnType<typeof useVeterinaryCardLazyQuery>;
export type VeterinaryCardQueryResult = Apollo.QueryResult<VeterinaryCardQuery, VeterinaryCardQueryVariables>;
export const AddAiDocument = gql`
    mutation AddAi($input: AiInput!) {
  addAi(input: $input) {
    ...Ai
  }
}
    ${AiFragmentDoc}`;
export type AddAiMutationFn = Apollo.MutationFunction<AddAiMutation, AddAiMutationVariables>;

/**
 * __useAddAiMutation__
 *
 * To run a mutation, you first call `useAddAiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAiMutation, { data, loading, error }] = useAddAiMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAiMutation(baseOptions?: Apollo.MutationHookOptions<AddAiMutation, AddAiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAiMutation, AddAiMutationVariables>(AddAiDocument, options);
      }
export type AddAiMutationHookResult = ReturnType<typeof useAddAiMutation>;
export type AddAiMutationResult = Apollo.MutationResult<AddAiMutation>;
export type AddAiMutationOptions = Apollo.BaseMutationOptions<AddAiMutation, AddAiMutationVariables>;
export const AiDocument = gql`
    query Ai($id: ID!) {
  ai(id: $id) {
    ...Ai
  }
}
    ${AiFragmentDoc}`;

/**
 * __useAiQuery__
 *
 * To run a query within a React component, call `useAiQuery` and pass it any options that fit your needs.
 * When your component renders, `useAiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAiQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAiQuery(baseOptions: Apollo.QueryHookOptions<AiQuery, AiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AiQuery, AiQueryVariables>(AiDocument, options);
      }
export function useAiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AiQuery, AiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AiQuery, AiQueryVariables>(AiDocument, options);
        }
export type AiQueryHookResult = ReturnType<typeof useAiQuery>;
export type AiLazyQueryHookResult = ReturnType<typeof useAiLazyQuery>;
export type AiQueryResult = Apollo.QueryResult<AiQuery, AiQueryVariables>;
export const AiCardDocument = gql`
    query AiCard {
  aiCard {
    ...AiCard
  }
}
    ${AiCardFragmentDoc}`;

/**
 * __useAiCardQuery__
 *
 * To run a query within a React component, call `useAiCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useAiCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAiCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useAiCardQuery(baseOptions?: Apollo.QueryHookOptions<AiCardQuery, AiCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AiCardQuery, AiCardQueryVariables>(AiCardDocument, options);
      }
export function useAiCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AiCardQuery, AiCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AiCardQuery, AiCardQueryVariables>(AiCardDocument, options);
        }
export type AiCardQueryHookResult = ReturnType<typeof useAiCardQuery>;
export type AiCardLazyQueryHookResult = ReturnType<typeof useAiCardLazyQuery>;
export type AiCardQueryResult = Apollo.QueryResult<AiCardQuery, AiCardQueryVariables>;
export const UpdateAiDocument = gql`
    mutation UpdateAi($input: AiInput!) {
  updateAi(input: $input) {
    ...Ai
  }
}
    ${AiFragmentDoc}`;
export type UpdateAiMutationFn = Apollo.MutationFunction<UpdateAiMutation, UpdateAiMutationVariables>;

/**
 * __useUpdateAiMutation__
 *
 * To run a mutation, you first call `useUpdateAiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAiMutation, { data, loading, error }] = useUpdateAiMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAiMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAiMutation, UpdateAiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAiMutation, UpdateAiMutationVariables>(UpdateAiDocument, options);
      }
export type UpdateAiMutationHookResult = ReturnType<typeof useUpdateAiMutation>;
export type UpdateAiMutationResult = Apollo.MutationResult<UpdateAiMutation>;
export type UpdateAiMutationOptions = Apollo.BaseMutationOptions<UpdateAiMutation, UpdateAiMutationVariables>;
export const AddBlockchainDocument = gql`
    mutation AddBlockchain($input: BlockchainInput!) {
  addBlockchain(input: $input) {
    ...Blockchain
  }
}
    ${BlockchainFragmentDoc}`;
export type AddBlockchainMutationFn = Apollo.MutationFunction<AddBlockchainMutation, AddBlockchainMutationVariables>;

/**
 * __useAddBlockchainMutation__
 *
 * To run a mutation, you first call `useAddBlockchainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBlockchainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBlockchainMutation, { data, loading, error }] = useAddBlockchainMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBlockchainMutation(baseOptions?: Apollo.MutationHookOptions<AddBlockchainMutation, AddBlockchainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBlockchainMutation, AddBlockchainMutationVariables>(AddBlockchainDocument, options);
      }
export type AddBlockchainMutationHookResult = ReturnType<typeof useAddBlockchainMutation>;
export type AddBlockchainMutationResult = Apollo.MutationResult<AddBlockchainMutation>;
export type AddBlockchainMutationOptions = Apollo.BaseMutationOptions<AddBlockchainMutation, AddBlockchainMutationVariables>;
export const BlockchainDocument = gql`
    query Blockchain($id: ID!) {
  blockchain(id: $id) {
    ...Blockchain
  }
}
    ${BlockchainFragmentDoc}`;

/**
 * __useBlockchainQuery__
 *
 * To run a query within a React component, call `useBlockchainQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockchainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockchainQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlockchainQuery(baseOptions: Apollo.QueryHookOptions<BlockchainQuery, BlockchainQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlockchainQuery, BlockchainQueryVariables>(BlockchainDocument, options);
      }
export function useBlockchainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlockchainQuery, BlockchainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlockchainQuery, BlockchainQueryVariables>(BlockchainDocument, options);
        }
export type BlockchainQueryHookResult = ReturnType<typeof useBlockchainQuery>;
export type BlockchainLazyQueryHookResult = ReturnType<typeof useBlockchainLazyQuery>;
export type BlockchainQueryResult = Apollo.QueryResult<BlockchainQuery, BlockchainQueryVariables>;
export const BlockchainCardDocument = gql`
    query BlockchainCard {
  blockchainCard {
    ...BlockchainCard
  }
}
    ${BlockchainCardFragmentDoc}`;

/**
 * __useBlockchainCardQuery__
 *
 * To run a query within a React component, call `useBlockchainCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockchainCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockchainCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlockchainCardQuery(baseOptions?: Apollo.QueryHookOptions<BlockchainCardQuery, BlockchainCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlockchainCardQuery, BlockchainCardQueryVariables>(BlockchainCardDocument, options);
      }
export function useBlockchainCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlockchainCardQuery, BlockchainCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlockchainCardQuery, BlockchainCardQueryVariables>(BlockchainCardDocument, options);
        }
export type BlockchainCardQueryHookResult = ReturnType<typeof useBlockchainCardQuery>;
export type BlockchainCardLazyQueryHookResult = ReturnType<typeof useBlockchainCardLazyQuery>;
export type BlockchainCardQueryResult = Apollo.QueryResult<BlockchainCardQuery, BlockchainCardQueryVariables>;
export const UpdateBlockchainDocument = gql`
    mutation UpdateBlockchain($input: BlockchainInput!) {
  updateBlockchain(input: $input) {
    ...Blockchain
  }
}
    ${BlockchainFragmentDoc}`;
export type UpdateBlockchainMutationFn = Apollo.MutationFunction<UpdateBlockchainMutation, UpdateBlockchainMutationVariables>;

/**
 * __useUpdateBlockchainMutation__
 *
 * To run a mutation, you first call `useUpdateBlockchainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlockchainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlockchainMutation, { data, loading, error }] = useUpdateBlockchainMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlockchainMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlockchainMutation, UpdateBlockchainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlockchainMutation, UpdateBlockchainMutationVariables>(UpdateBlockchainDocument, options);
      }
export type UpdateBlockchainMutationHookResult = ReturnType<typeof useUpdateBlockchainMutation>;
export type UpdateBlockchainMutationResult = Apollo.MutationResult<UpdateBlockchainMutation>;
export type UpdateBlockchainMutationOptions = Apollo.BaseMutationOptions<UpdateBlockchainMutation, UpdateBlockchainMutationVariables>;
export const AddBusinessAnalysisDocument = gql`
    mutation AddBusinessAnalysis($input: BusinessAnalysisInput!) {
  addBusinessAnalysis(input: $input) {
    ...BusinessAnalysis
  }
}
    ${BusinessAnalysisFragmentDoc}`;
export type AddBusinessAnalysisMutationFn = Apollo.MutationFunction<AddBusinessAnalysisMutation, AddBusinessAnalysisMutationVariables>;

/**
 * __useAddBusinessAnalysisMutation__
 *
 * To run a mutation, you first call `useAddBusinessAnalysisMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBusinessAnalysisMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBusinessAnalysisMutation, { data, loading, error }] = useAddBusinessAnalysisMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBusinessAnalysisMutation(baseOptions?: Apollo.MutationHookOptions<AddBusinessAnalysisMutation, AddBusinessAnalysisMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBusinessAnalysisMutation, AddBusinessAnalysisMutationVariables>(AddBusinessAnalysisDocument, options);
      }
export type AddBusinessAnalysisMutationHookResult = ReturnType<typeof useAddBusinessAnalysisMutation>;
export type AddBusinessAnalysisMutationResult = Apollo.MutationResult<AddBusinessAnalysisMutation>;
export type AddBusinessAnalysisMutationOptions = Apollo.BaseMutationOptions<AddBusinessAnalysisMutation, AddBusinessAnalysisMutationVariables>;
export const BusinessAnalysisCardDocument = gql`
    query BusinessAnalysisCard {
  businessAnalysisCard {
    ...BusinessAnalysisCard
  }
}
    ${BusinessAnalysisCardFragmentDoc}`;

/**
 * __useBusinessAnalysisCardQuery__
 *
 * To run a query within a React component, call `useBusinessAnalysisCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBusinessAnalysisCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBusinessAnalysisCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useBusinessAnalysisCardQuery(baseOptions?: Apollo.QueryHookOptions<BusinessAnalysisCardQuery, BusinessAnalysisCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BusinessAnalysisCardQuery, BusinessAnalysisCardQueryVariables>(BusinessAnalysisCardDocument, options);
      }
export function useBusinessAnalysisCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BusinessAnalysisCardQuery, BusinessAnalysisCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BusinessAnalysisCardQuery, BusinessAnalysisCardQueryVariables>(BusinessAnalysisCardDocument, options);
        }
export type BusinessAnalysisCardQueryHookResult = ReturnType<typeof useBusinessAnalysisCardQuery>;
export type BusinessAnalysisCardLazyQueryHookResult = ReturnType<typeof useBusinessAnalysisCardLazyQuery>;
export type BusinessAnalysisCardQueryResult = Apollo.QueryResult<BusinessAnalysisCardQuery, BusinessAnalysisCardQueryVariables>;
export const BusinessAnalysisDocument = gql`
    query BusinessAnalysis($id: ID!) {
  businessAnalysis(id: $id) {
    ...BusinessAnalysis
  }
}
    ${BusinessAnalysisFragmentDoc}`;

/**
 * __useBusinessAnalysisQuery__
 *
 * To run a query within a React component, call `useBusinessAnalysisQuery` and pass it any options that fit your needs.
 * When your component renders, `useBusinessAnalysisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBusinessAnalysisQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBusinessAnalysisQuery(baseOptions: Apollo.QueryHookOptions<BusinessAnalysisQuery, BusinessAnalysisQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BusinessAnalysisQuery, BusinessAnalysisQueryVariables>(BusinessAnalysisDocument, options);
      }
export function useBusinessAnalysisLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BusinessAnalysisQuery, BusinessAnalysisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BusinessAnalysisQuery, BusinessAnalysisQueryVariables>(BusinessAnalysisDocument, options);
        }
export type BusinessAnalysisQueryHookResult = ReturnType<typeof useBusinessAnalysisQuery>;
export type BusinessAnalysisLazyQueryHookResult = ReturnType<typeof useBusinessAnalysisLazyQuery>;
export type BusinessAnalysisQueryResult = Apollo.QueryResult<BusinessAnalysisQuery, BusinessAnalysisQueryVariables>;
export const UpdateBusinessAnalysisDocument = gql`
    mutation UpdateBusinessAnalysis($input: BusinessAnalysisInput!) {
  updateBusinessAnalysis(input: $input) {
    ...BusinessAnalysis
  }
}
    ${BusinessAnalysisFragmentDoc}`;
export type UpdateBusinessAnalysisMutationFn = Apollo.MutationFunction<UpdateBusinessAnalysisMutation, UpdateBusinessAnalysisMutationVariables>;

/**
 * __useUpdateBusinessAnalysisMutation__
 *
 * To run a mutation, you first call `useUpdateBusinessAnalysisMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBusinessAnalysisMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBusinessAnalysisMutation, { data, loading, error }] = useUpdateBusinessAnalysisMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBusinessAnalysisMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBusinessAnalysisMutation, UpdateBusinessAnalysisMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBusinessAnalysisMutation, UpdateBusinessAnalysisMutationVariables>(UpdateBusinessAnalysisDocument, options);
      }
export type UpdateBusinessAnalysisMutationHookResult = ReturnType<typeof useUpdateBusinessAnalysisMutation>;
export type UpdateBusinessAnalysisMutationResult = Apollo.MutationResult<UpdateBusinessAnalysisMutation>;
export type UpdateBusinessAnalysisMutationOptions = Apollo.BaseMutationOptions<UpdateBusinessAnalysisMutation, UpdateBusinessAnalysisMutationVariables>;
export const AddCloudComputingDocument = gql`
    mutation AddCloudComputing($input: CloudComputingInput!) {
  addCloudComputing(input: $input) {
    ...CloudComputing
  }
}
    ${CloudComputingFragmentDoc}`;
export type AddCloudComputingMutationFn = Apollo.MutationFunction<AddCloudComputingMutation, AddCloudComputingMutationVariables>;

/**
 * __useAddCloudComputingMutation__
 *
 * To run a mutation, you first call `useAddCloudComputingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCloudComputingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCloudComputingMutation, { data, loading, error }] = useAddCloudComputingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCloudComputingMutation(baseOptions?: Apollo.MutationHookOptions<AddCloudComputingMutation, AddCloudComputingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCloudComputingMutation, AddCloudComputingMutationVariables>(AddCloudComputingDocument, options);
      }
export type AddCloudComputingMutationHookResult = ReturnType<typeof useAddCloudComputingMutation>;
export type AddCloudComputingMutationResult = Apollo.MutationResult<AddCloudComputingMutation>;
export type AddCloudComputingMutationOptions = Apollo.BaseMutationOptions<AddCloudComputingMutation, AddCloudComputingMutationVariables>;
export const CloudComputingDocument = gql`
    query CloudComputing($id: ID!) {
  cloudComputing(id: $id) {
    ...CloudComputing
  }
}
    ${CloudComputingFragmentDoc}`;

/**
 * __useCloudComputingQuery__
 *
 * To run a query within a React component, call `useCloudComputingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCloudComputingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCloudComputingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCloudComputingQuery(baseOptions: Apollo.QueryHookOptions<CloudComputingQuery, CloudComputingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CloudComputingQuery, CloudComputingQueryVariables>(CloudComputingDocument, options);
      }
export function useCloudComputingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CloudComputingQuery, CloudComputingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CloudComputingQuery, CloudComputingQueryVariables>(CloudComputingDocument, options);
        }
export type CloudComputingQueryHookResult = ReturnType<typeof useCloudComputingQuery>;
export type CloudComputingLazyQueryHookResult = ReturnType<typeof useCloudComputingLazyQuery>;
export type CloudComputingQueryResult = Apollo.QueryResult<CloudComputingQuery, CloudComputingQueryVariables>;
export const CloudComputingCardDocument = gql`
    query CloudComputingCard {
  cloudComputingCard {
    ...CloudComputingCard
  }
}
    ${CloudComputingCardFragmentDoc}`;

/**
 * __useCloudComputingCardQuery__
 *
 * To run a query within a React component, call `useCloudComputingCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useCloudComputingCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCloudComputingCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useCloudComputingCardQuery(baseOptions?: Apollo.QueryHookOptions<CloudComputingCardQuery, CloudComputingCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CloudComputingCardQuery, CloudComputingCardQueryVariables>(CloudComputingCardDocument, options);
      }
export function useCloudComputingCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CloudComputingCardQuery, CloudComputingCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CloudComputingCardQuery, CloudComputingCardQueryVariables>(CloudComputingCardDocument, options);
        }
export type CloudComputingCardQueryHookResult = ReturnType<typeof useCloudComputingCardQuery>;
export type CloudComputingCardLazyQueryHookResult = ReturnType<typeof useCloudComputingCardLazyQuery>;
export type CloudComputingCardQueryResult = Apollo.QueryResult<CloudComputingCardQuery, CloudComputingCardQueryVariables>;
export const UpdateCloudComputingDocument = gql`
    mutation UpdateCloudComputing($input: CloudComputingInput!) {
  updateCloudComputing(input: $input) {
    ...CloudComputing
  }
}
    ${CloudComputingFragmentDoc}`;
export type UpdateCloudComputingMutationFn = Apollo.MutationFunction<UpdateCloudComputingMutation, UpdateCloudComputingMutationVariables>;

/**
 * __useUpdateCloudComputingMutation__
 *
 * To run a mutation, you first call `useUpdateCloudComputingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCloudComputingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCloudComputingMutation, { data, loading, error }] = useUpdateCloudComputingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCloudComputingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCloudComputingMutation, UpdateCloudComputingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCloudComputingMutation, UpdateCloudComputingMutationVariables>(UpdateCloudComputingDocument, options);
      }
export type UpdateCloudComputingMutationHookResult = ReturnType<typeof useUpdateCloudComputingMutation>;
export type UpdateCloudComputingMutationResult = Apollo.MutationResult<UpdateCloudComputingMutation>;
export type UpdateCloudComputingMutationOptions = Apollo.BaseMutationOptions<UpdateCloudComputingMutation, UpdateCloudComputingMutationVariables>;
export const AddComputerNetworkingDocument = gql`
    mutation AddComputerNetworking($input: ComputerNetworkingInput!) {
  addComputerNetworking(input: $input) {
    ...ComputerNetworking
  }
}
    ${ComputerNetworkingFragmentDoc}`;
export type AddComputerNetworkingMutationFn = Apollo.MutationFunction<AddComputerNetworkingMutation, AddComputerNetworkingMutationVariables>;

/**
 * __useAddComputerNetworkingMutation__
 *
 * To run a mutation, you first call `useAddComputerNetworkingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddComputerNetworkingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addComputerNetworkingMutation, { data, loading, error }] = useAddComputerNetworkingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddComputerNetworkingMutation(baseOptions?: Apollo.MutationHookOptions<AddComputerNetworkingMutation, AddComputerNetworkingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddComputerNetworkingMutation, AddComputerNetworkingMutationVariables>(AddComputerNetworkingDocument, options);
      }
export type AddComputerNetworkingMutationHookResult = ReturnType<typeof useAddComputerNetworkingMutation>;
export type AddComputerNetworkingMutationResult = Apollo.MutationResult<AddComputerNetworkingMutation>;
export type AddComputerNetworkingMutationOptions = Apollo.BaseMutationOptions<AddComputerNetworkingMutation, AddComputerNetworkingMutationVariables>;
export const ComputerNetworkingDocument = gql`
    query ComputerNetworking($id: ID!) {
  computerNetworking(id: $id) {
    ...ComputerNetworking
  }
}
    ${ComputerNetworkingFragmentDoc}`;

/**
 * __useComputerNetworkingQuery__
 *
 * To run a query within a React component, call `useComputerNetworkingQuery` and pass it any options that fit your needs.
 * When your component renders, `useComputerNetworkingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComputerNetworkingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useComputerNetworkingQuery(baseOptions: Apollo.QueryHookOptions<ComputerNetworkingQuery, ComputerNetworkingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComputerNetworkingQuery, ComputerNetworkingQueryVariables>(ComputerNetworkingDocument, options);
      }
export function useComputerNetworkingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComputerNetworkingQuery, ComputerNetworkingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComputerNetworkingQuery, ComputerNetworkingQueryVariables>(ComputerNetworkingDocument, options);
        }
export type ComputerNetworkingQueryHookResult = ReturnType<typeof useComputerNetworkingQuery>;
export type ComputerNetworkingLazyQueryHookResult = ReturnType<typeof useComputerNetworkingLazyQuery>;
export type ComputerNetworkingQueryResult = Apollo.QueryResult<ComputerNetworkingQuery, ComputerNetworkingQueryVariables>;
export const ComputerNetworkingCardDocument = gql`
    query ComputerNetworkingCard {
  computerNetworkingCard {
    ...ComputerNetworkingCard
  }
}
    ${ComputerNetworkingCardFragmentDoc}`;

/**
 * __useComputerNetworkingCardQuery__
 *
 * To run a query within a React component, call `useComputerNetworkingCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useComputerNetworkingCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComputerNetworkingCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useComputerNetworkingCardQuery(baseOptions?: Apollo.QueryHookOptions<ComputerNetworkingCardQuery, ComputerNetworkingCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComputerNetworkingCardQuery, ComputerNetworkingCardQueryVariables>(ComputerNetworkingCardDocument, options);
      }
export function useComputerNetworkingCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComputerNetworkingCardQuery, ComputerNetworkingCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComputerNetworkingCardQuery, ComputerNetworkingCardQueryVariables>(ComputerNetworkingCardDocument, options);
        }
export type ComputerNetworkingCardQueryHookResult = ReturnType<typeof useComputerNetworkingCardQuery>;
export type ComputerNetworkingCardLazyQueryHookResult = ReturnType<typeof useComputerNetworkingCardLazyQuery>;
export type ComputerNetworkingCardQueryResult = Apollo.QueryResult<ComputerNetworkingCardQuery, ComputerNetworkingCardQueryVariables>;
export const UpdateComputerNetworkingDocument = gql`
    mutation UpdateComputerNetworking($input: ComputerNetworkingInput!) {
  updateComputerNetworking(input: $input) {
    ...ComputerNetworking
  }
}
    ${ComputerNetworkingFragmentDoc}`;
export type UpdateComputerNetworkingMutationFn = Apollo.MutationFunction<UpdateComputerNetworkingMutation, UpdateComputerNetworkingMutationVariables>;

/**
 * __useUpdateComputerNetworkingMutation__
 *
 * To run a mutation, you first call `useUpdateComputerNetworkingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateComputerNetworkingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateComputerNetworkingMutation, { data, loading, error }] = useUpdateComputerNetworkingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateComputerNetworkingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateComputerNetworkingMutation, UpdateComputerNetworkingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateComputerNetworkingMutation, UpdateComputerNetworkingMutationVariables>(UpdateComputerNetworkingDocument, options);
      }
export type UpdateComputerNetworkingMutationHookResult = ReturnType<typeof useUpdateComputerNetworkingMutation>;
export type UpdateComputerNetworkingMutationResult = Apollo.MutationResult<UpdateComputerNetworkingMutation>;
export type UpdateComputerNetworkingMutationOptions = Apollo.BaseMutationOptions<UpdateComputerNetworkingMutation, UpdateComputerNetworkingMutationVariables>;
export const AddDataManagementDocument = gql`
    mutation AddDataManagement($input: DataManagementInput!) {
  addDataManagement(input: $input) {
    ...DataManagement
  }
}
    ${DataManagementFragmentDoc}`;
export type AddDataManagementMutationFn = Apollo.MutationFunction<AddDataManagementMutation, AddDataManagementMutationVariables>;

/**
 * __useAddDataManagementMutation__
 *
 * To run a mutation, you first call `useAddDataManagementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDataManagementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDataManagementMutation, { data, loading, error }] = useAddDataManagementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDataManagementMutation(baseOptions?: Apollo.MutationHookOptions<AddDataManagementMutation, AddDataManagementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDataManagementMutation, AddDataManagementMutationVariables>(AddDataManagementDocument, options);
      }
export type AddDataManagementMutationHookResult = ReturnType<typeof useAddDataManagementMutation>;
export type AddDataManagementMutationResult = Apollo.MutationResult<AddDataManagementMutation>;
export type AddDataManagementMutationOptions = Apollo.BaseMutationOptions<AddDataManagementMutation, AddDataManagementMutationVariables>;
export const DataManagementDocument = gql`
    query DataManagement($id: ID!) {
  dataManagement(id: $id) {
    ...DataManagement
  }
}
    ${DataManagementFragmentDoc}`;

/**
 * __useDataManagementQuery__
 *
 * To run a query within a React component, call `useDataManagementQuery` and pass it any options that fit your needs.
 * When your component renders, `useDataManagementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDataManagementQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDataManagementQuery(baseOptions: Apollo.QueryHookOptions<DataManagementQuery, DataManagementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DataManagementQuery, DataManagementQueryVariables>(DataManagementDocument, options);
      }
export function useDataManagementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DataManagementQuery, DataManagementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DataManagementQuery, DataManagementQueryVariables>(DataManagementDocument, options);
        }
export type DataManagementQueryHookResult = ReturnType<typeof useDataManagementQuery>;
export type DataManagementLazyQueryHookResult = ReturnType<typeof useDataManagementLazyQuery>;
export type DataManagementQueryResult = Apollo.QueryResult<DataManagementQuery, DataManagementQueryVariables>;
export const DataManagementCardDocument = gql`
    query DataManagementCard {
  dataManagementCard {
    ...DataManagementCard
  }
}
    ${DataManagementCardFragmentDoc}`;

/**
 * __useDataManagementCardQuery__
 *
 * To run a query within a React component, call `useDataManagementCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useDataManagementCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDataManagementCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useDataManagementCardQuery(baseOptions?: Apollo.QueryHookOptions<DataManagementCardQuery, DataManagementCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DataManagementCardQuery, DataManagementCardQueryVariables>(DataManagementCardDocument, options);
      }
export function useDataManagementCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DataManagementCardQuery, DataManagementCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DataManagementCardQuery, DataManagementCardQueryVariables>(DataManagementCardDocument, options);
        }
export type DataManagementCardQueryHookResult = ReturnType<typeof useDataManagementCardQuery>;
export type DataManagementCardLazyQueryHookResult = ReturnType<typeof useDataManagementCardLazyQuery>;
export type DataManagementCardQueryResult = Apollo.QueryResult<DataManagementCardQuery, DataManagementCardQueryVariables>;
export const UpdateDataManagementDocument = gql`
    mutation UpdateDataManagement($input: DataManagementInput!) {
  updateDataManagement(input: $input) {
    ...DataManagement
  }
}
    ${DataManagementFragmentDoc}`;
export type UpdateDataManagementMutationFn = Apollo.MutationFunction<UpdateDataManagementMutation, UpdateDataManagementMutationVariables>;

/**
 * __useUpdateDataManagementMutation__
 *
 * To run a mutation, you first call `useUpdateDataManagementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDataManagementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDataManagementMutation, { data, loading, error }] = useUpdateDataManagementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDataManagementMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDataManagementMutation, UpdateDataManagementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDataManagementMutation, UpdateDataManagementMutationVariables>(UpdateDataManagementDocument, options);
      }
export type UpdateDataManagementMutationHookResult = ReturnType<typeof useUpdateDataManagementMutation>;
export type UpdateDataManagementMutationResult = Apollo.MutationResult<UpdateDataManagementMutation>;
export type UpdateDataManagementMutationOptions = Apollo.BaseMutationOptions<UpdateDataManagementMutation, UpdateDataManagementMutationVariables>;
export const AddGameProgrammingDocument = gql`
    mutation AddGameProgramming($input: GameProgrammingInput!) {
  addGameProgramming(input: $input) {
    ...GameProgramming
  }
}
    ${GameProgrammingFragmentDoc}`;
export type AddGameProgrammingMutationFn = Apollo.MutationFunction<AddGameProgrammingMutation, AddGameProgrammingMutationVariables>;

/**
 * __useAddGameProgrammingMutation__
 *
 * To run a mutation, you first call `useAddGameProgrammingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGameProgrammingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGameProgrammingMutation, { data, loading, error }] = useAddGameProgrammingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddGameProgrammingMutation(baseOptions?: Apollo.MutationHookOptions<AddGameProgrammingMutation, AddGameProgrammingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGameProgrammingMutation, AddGameProgrammingMutationVariables>(AddGameProgrammingDocument, options);
      }
export type AddGameProgrammingMutationHookResult = ReturnType<typeof useAddGameProgrammingMutation>;
export type AddGameProgrammingMutationResult = Apollo.MutationResult<AddGameProgrammingMutation>;
export type AddGameProgrammingMutationOptions = Apollo.BaseMutationOptions<AddGameProgrammingMutation, AddGameProgrammingMutationVariables>;
export const GameProgrammingDocument = gql`
    query GameProgramming($id: ID!) {
  gameProgramming(id: $id) {
    ...GameProgramming
  }
}
    ${GameProgrammingFragmentDoc}`;

/**
 * __useGameProgrammingQuery__
 *
 * To run a query within a React component, call `useGameProgrammingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameProgrammingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameProgrammingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGameProgrammingQuery(baseOptions: Apollo.QueryHookOptions<GameProgrammingQuery, GameProgrammingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameProgrammingQuery, GameProgrammingQueryVariables>(GameProgrammingDocument, options);
      }
export function useGameProgrammingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameProgrammingQuery, GameProgrammingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameProgrammingQuery, GameProgrammingQueryVariables>(GameProgrammingDocument, options);
        }
export type GameProgrammingQueryHookResult = ReturnType<typeof useGameProgrammingQuery>;
export type GameProgrammingLazyQueryHookResult = ReturnType<typeof useGameProgrammingLazyQuery>;
export type GameProgrammingQueryResult = Apollo.QueryResult<GameProgrammingQuery, GameProgrammingQueryVariables>;
export const GameProgrammingCardDocument = gql`
    query GameProgrammingCard {
  gameProgrammingCard {
    ...GameProgrammingCard
  }
}
    ${GameProgrammingCardFragmentDoc}`;

/**
 * __useGameProgrammingCardQuery__
 *
 * To run a query within a React component, call `useGameProgrammingCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameProgrammingCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameProgrammingCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGameProgrammingCardQuery(baseOptions?: Apollo.QueryHookOptions<GameProgrammingCardQuery, GameProgrammingCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameProgrammingCardQuery, GameProgrammingCardQueryVariables>(GameProgrammingCardDocument, options);
      }
export function useGameProgrammingCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameProgrammingCardQuery, GameProgrammingCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameProgrammingCardQuery, GameProgrammingCardQueryVariables>(GameProgrammingCardDocument, options);
        }
export type GameProgrammingCardQueryHookResult = ReturnType<typeof useGameProgrammingCardQuery>;
export type GameProgrammingCardLazyQueryHookResult = ReturnType<typeof useGameProgrammingCardLazyQuery>;
export type GameProgrammingCardQueryResult = Apollo.QueryResult<GameProgrammingCardQuery, GameProgrammingCardQueryVariables>;
export const UpdateGameProgrammingDocument = gql`
    mutation UpdateGameProgramming($input: GameProgrammingInput!) {
  updateGameProgramming(input: $input) {
    ...GameProgramming
  }
}
    ${GameProgrammingFragmentDoc}`;
export type UpdateGameProgrammingMutationFn = Apollo.MutationFunction<UpdateGameProgrammingMutation, UpdateGameProgrammingMutationVariables>;

/**
 * __useUpdateGameProgrammingMutation__
 *
 * To run a mutation, you first call `useUpdateGameProgrammingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameProgrammingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameProgrammingMutation, { data, loading, error }] = useUpdateGameProgrammingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGameProgrammingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGameProgrammingMutation, UpdateGameProgrammingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGameProgrammingMutation, UpdateGameProgrammingMutationVariables>(UpdateGameProgrammingDocument, options);
      }
export type UpdateGameProgrammingMutationHookResult = ReturnType<typeof useUpdateGameProgrammingMutation>;
export type UpdateGameProgrammingMutationResult = Apollo.MutationResult<UpdateGameProgrammingMutation>;
export type UpdateGameProgrammingMutationOptions = Apollo.BaseMutationOptions<UpdateGameProgrammingMutation, UpdateGameProgrammingMutationVariables>;
export const AddItDocument = gql`
    mutation AddIt($input: ItInput!) {
  addIt(input: $input) {
    ...It
  }
}
    ${ItFragmentDoc}`;
export type AddItMutationFn = Apollo.MutationFunction<AddItMutation, AddItMutationVariables>;

/**
 * __useAddItMutation__
 *
 * To run a mutation, you first call `useAddItMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItMutation, { data, loading, error }] = useAddItMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddItMutation(baseOptions?: Apollo.MutationHookOptions<AddItMutation, AddItMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItMutation, AddItMutationVariables>(AddItDocument, options);
      }
export type AddItMutationHookResult = ReturnType<typeof useAddItMutation>;
export type AddItMutationResult = Apollo.MutationResult<AddItMutation>;
export type AddItMutationOptions = Apollo.BaseMutationOptions<AddItMutation, AddItMutationVariables>;
export const ItDocument = gql`
    query It($id: ID!) {
  it(id: $id) {
    ...It
  }
}
    ${ItFragmentDoc}`;

/**
 * __useItQuery__
 *
 * To run a query within a React component, call `useItQuery` and pass it any options that fit your needs.
 * When your component renders, `useItQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useItQuery(baseOptions: Apollo.QueryHookOptions<ItQuery, ItQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItQuery, ItQueryVariables>(ItDocument, options);
      }
export function useItLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItQuery, ItQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItQuery, ItQueryVariables>(ItDocument, options);
        }
export type ItQueryHookResult = ReturnType<typeof useItQuery>;
export type ItLazyQueryHookResult = ReturnType<typeof useItLazyQuery>;
export type ItQueryResult = Apollo.QueryResult<ItQuery, ItQueryVariables>;
export const UpdateItDocument = gql`
    mutation UpdateIt($input: ItInput!) {
  updateIt(input: $input) {
    ...It
  }
}
    ${ItFragmentDoc}`;
export type UpdateItMutationFn = Apollo.MutationFunction<UpdateItMutation, UpdateItMutationVariables>;

/**
 * __useUpdateItMutation__
 *
 * To run a mutation, you first call `useUpdateItMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItMutation, { data, loading, error }] = useUpdateItMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateItMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItMutation, UpdateItMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItMutation, UpdateItMutationVariables>(UpdateItDocument, options);
      }
export type UpdateItMutationHookResult = ReturnType<typeof useUpdateItMutation>;
export type UpdateItMutationResult = Apollo.MutationResult<UpdateItMutation>;
export type UpdateItMutationOptions = Apollo.BaseMutationOptions<UpdateItMutation, UpdateItMutationVariables>;
export const AddMachineLearningDocument = gql`
    mutation AddMachineLearning($input: MachineLearningInput!) {
  addMachineLearning(input: $input) {
    ...MachineLearning
  }
}
    ${MachineLearningFragmentDoc}`;
export type AddMachineLearningMutationFn = Apollo.MutationFunction<AddMachineLearningMutation, AddMachineLearningMutationVariables>;

/**
 * __useAddMachineLearningMutation__
 *
 * To run a mutation, you first call `useAddMachineLearningMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMachineLearningMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMachineLearningMutation, { data, loading, error }] = useAddMachineLearningMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMachineLearningMutation(baseOptions?: Apollo.MutationHookOptions<AddMachineLearningMutation, AddMachineLearningMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMachineLearningMutation, AddMachineLearningMutationVariables>(AddMachineLearningDocument, options);
      }
export type AddMachineLearningMutationHookResult = ReturnType<typeof useAddMachineLearningMutation>;
export type AddMachineLearningMutationResult = Apollo.MutationResult<AddMachineLearningMutation>;
export type AddMachineLearningMutationOptions = Apollo.BaseMutationOptions<AddMachineLearningMutation, AddMachineLearningMutationVariables>;
export const MachineLearningDocument = gql`
    query MachineLearning($id: ID!) {
  machineLearning(id: $id) {
    ...MachineLearning
  }
}
    ${MachineLearningFragmentDoc}`;

/**
 * __useMachineLearningQuery__
 *
 * To run a query within a React component, call `useMachineLearningQuery` and pass it any options that fit your needs.
 * When your component renders, `useMachineLearningQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMachineLearningQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMachineLearningQuery(baseOptions: Apollo.QueryHookOptions<MachineLearningQuery, MachineLearningQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MachineLearningQuery, MachineLearningQueryVariables>(MachineLearningDocument, options);
      }
export function useMachineLearningLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MachineLearningQuery, MachineLearningQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MachineLearningQuery, MachineLearningQueryVariables>(MachineLearningDocument, options);
        }
export type MachineLearningQueryHookResult = ReturnType<typeof useMachineLearningQuery>;
export type MachineLearningLazyQueryHookResult = ReturnType<typeof useMachineLearningLazyQuery>;
export type MachineLearningQueryResult = Apollo.QueryResult<MachineLearningQuery, MachineLearningQueryVariables>;
export const MachineLearningCardDocument = gql`
    query MachineLearningCard {
  machineLearningCard {
    ...MachineLearningCard
  }
}
    ${MachineLearningCardFragmentDoc}`;

/**
 * __useMachineLearningCardQuery__
 *
 * To run a query within a React component, call `useMachineLearningCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useMachineLearningCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMachineLearningCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useMachineLearningCardQuery(baseOptions?: Apollo.QueryHookOptions<MachineLearningCardQuery, MachineLearningCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MachineLearningCardQuery, MachineLearningCardQueryVariables>(MachineLearningCardDocument, options);
      }
export function useMachineLearningCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MachineLearningCardQuery, MachineLearningCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MachineLearningCardQuery, MachineLearningCardQueryVariables>(MachineLearningCardDocument, options);
        }
export type MachineLearningCardQueryHookResult = ReturnType<typeof useMachineLearningCardQuery>;
export type MachineLearningCardLazyQueryHookResult = ReturnType<typeof useMachineLearningCardLazyQuery>;
export type MachineLearningCardQueryResult = Apollo.QueryResult<MachineLearningCardQuery, MachineLearningCardQueryVariables>;
export const UpdateMachineLearningDocument = gql`
    mutation UpdateMachineLearning($input: MachineLearningInput!) {
  updateMachineLearning(input: $input) {
    ...MachineLearning
  }
}
    ${MachineLearningFragmentDoc}`;
export type UpdateMachineLearningMutationFn = Apollo.MutationFunction<UpdateMachineLearningMutation, UpdateMachineLearningMutationVariables>;

/**
 * __useUpdateMachineLearningMutation__
 *
 * To run a mutation, you first call `useUpdateMachineLearningMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMachineLearningMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMachineLearningMutation, { data, loading, error }] = useUpdateMachineLearningMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMachineLearningMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMachineLearningMutation, UpdateMachineLearningMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMachineLearningMutation, UpdateMachineLearningMutationVariables>(UpdateMachineLearningDocument, options);
      }
export type UpdateMachineLearningMutationHookResult = ReturnType<typeof useUpdateMachineLearningMutation>;
export type UpdateMachineLearningMutationResult = Apollo.MutationResult<UpdateMachineLearningMutation>;
export type UpdateMachineLearningMutationOptions = Apollo.BaseMutationOptions<UpdateMachineLearningMutation, UpdateMachineLearningMutationVariables>;
export const AddSoftwareDevelopmentDocument = gql`
    mutation AddSoftwareDevelopment($input: SoftwareDevelopmentInput!) {
  addSoftwareDevelopment(input: $input) {
    ...SoftwareDevelopment
  }
}
    ${SoftwareDevelopmentFragmentDoc}`;
export type AddSoftwareDevelopmentMutationFn = Apollo.MutationFunction<AddSoftwareDevelopmentMutation, AddSoftwareDevelopmentMutationVariables>;

/**
 * __useAddSoftwareDevelopmentMutation__
 *
 * To run a mutation, you first call `useAddSoftwareDevelopmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSoftwareDevelopmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSoftwareDevelopmentMutation, { data, loading, error }] = useAddSoftwareDevelopmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddSoftwareDevelopmentMutation(baseOptions?: Apollo.MutationHookOptions<AddSoftwareDevelopmentMutation, AddSoftwareDevelopmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSoftwareDevelopmentMutation, AddSoftwareDevelopmentMutationVariables>(AddSoftwareDevelopmentDocument, options);
      }
export type AddSoftwareDevelopmentMutationHookResult = ReturnType<typeof useAddSoftwareDevelopmentMutation>;
export type AddSoftwareDevelopmentMutationResult = Apollo.MutationResult<AddSoftwareDevelopmentMutation>;
export type AddSoftwareDevelopmentMutationOptions = Apollo.BaseMutationOptions<AddSoftwareDevelopmentMutation, AddSoftwareDevelopmentMutationVariables>;
export const SoftwareDevelopmentDocument = gql`
    query SoftwareDevelopment($id: ID!) {
  softwareDevelopment(id: $id) {
    ...SoftwareDevelopment
  }
}
    ${SoftwareDevelopmentFragmentDoc}`;

/**
 * __useSoftwareDevelopmentQuery__
 *
 * To run a query within a React component, call `useSoftwareDevelopmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useSoftwareDevelopmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSoftwareDevelopmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSoftwareDevelopmentQuery(baseOptions: Apollo.QueryHookOptions<SoftwareDevelopmentQuery, SoftwareDevelopmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SoftwareDevelopmentQuery, SoftwareDevelopmentQueryVariables>(SoftwareDevelopmentDocument, options);
      }
export function useSoftwareDevelopmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SoftwareDevelopmentQuery, SoftwareDevelopmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SoftwareDevelopmentQuery, SoftwareDevelopmentQueryVariables>(SoftwareDevelopmentDocument, options);
        }
export type SoftwareDevelopmentQueryHookResult = ReturnType<typeof useSoftwareDevelopmentQuery>;
export type SoftwareDevelopmentLazyQueryHookResult = ReturnType<typeof useSoftwareDevelopmentLazyQuery>;
export type SoftwareDevelopmentQueryResult = Apollo.QueryResult<SoftwareDevelopmentQuery, SoftwareDevelopmentQueryVariables>;
export const SoftwareDevelopmentCardDocument = gql`
    query SoftwareDevelopmentCard {
  softwareDevelopmentCard {
    ...SoftwareDevelopmentCard
  }
}
    ${SoftwareDevelopmentCardFragmentDoc}`;

/**
 * __useSoftwareDevelopmentCardQuery__
 *
 * To run a query within a React component, call `useSoftwareDevelopmentCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useSoftwareDevelopmentCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSoftwareDevelopmentCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useSoftwareDevelopmentCardQuery(baseOptions?: Apollo.QueryHookOptions<SoftwareDevelopmentCardQuery, SoftwareDevelopmentCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SoftwareDevelopmentCardQuery, SoftwareDevelopmentCardQueryVariables>(SoftwareDevelopmentCardDocument, options);
      }
export function useSoftwareDevelopmentCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SoftwareDevelopmentCardQuery, SoftwareDevelopmentCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SoftwareDevelopmentCardQuery, SoftwareDevelopmentCardQueryVariables>(SoftwareDevelopmentCardDocument, options);
        }
export type SoftwareDevelopmentCardQueryHookResult = ReturnType<typeof useSoftwareDevelopmentCardQuery>;
export type SoftwareDevelopmentCardLazyQueryHookResult = ReturnType<typeof useSoftwareDevelopmentCardLazyQuery>;
export type SoftwareDevelopmentCardQueryResult = Apollo.QueryResult<SoftwareDevelopmentCardQuery, SoftwareDevelopmentCardQueryVariables>;
export const UpdateSoftwareDevelopmentDocument = gql`
    mutation UpdateSoftwareDevelopment($input: SoftwareDevelopmentInput!) {
  updateSoftwareDevelopment(input: $input) {
    ...SoftwareDevelopment
  }
}
    ${SoftwareDevelopmentFragmentDoc}`;
export type UpdateSoftwareDevelopmentMutationFn = Apollo.MutationFunction<UpdateSoftwareDevelopmentMutation, UpdateSoftwareDevelopmentMutationVariables>;

/**
 * __useUpdateSoftwareDevelopmentMutation__
 *
 * To run a mutation, you first call `useUpdateSoftwareDevelopmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSoftwareDevelopmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSoftwareDevelopmentMutation, { data, loading, error }] = useUpdateSoftwareDevelopmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSoftwareDevelopmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSoftwareDevelopmentMutation, UpdateSoftwareDevelopmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSoftwareDevelopmentMutation, UpdateSoftwareDevelopmentMutationVariables>(UpdateSoftwareDevelopmentDocument, options);
      }
export type UpdateSoftwareDevelopmentMutationHookResult = ReturnType<typeof useUpdateSoftwareDevelopmentMutation>;
export type UpdateSoftwareDevelopmentMutationResult = Apollo.MutationResult<UpdateSoftwareDevelopmentMutation>;
export type UpdateSoftwareDevelopmentMutationOptions = Apollo.BaseMutationOptions<UpdateSoftwareDevelopmentMutation, UpdateSoftwareDevelopmentMutationVariables>;
export const AddTelecommunicationDocument = gql`
    mutation AddTelecommunication($input: TelecommunicationInput!) {
  addTelecommunication(input: $input) {
    ...Telecommunication
  }
}
    ${TelecommunicationFragmentDoc}`;
export type AddTelecommunicationMutationFn = Apollo.MutationFunction<AddTelecommunicationMutation, AddTelecommunicationMutationVariables>;

/**
 * __useAddTelecommunicationMutation__
 *
 * To run a mutation, you first call `useAddTelecommunicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTelecommunicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTelecommunicationMutation, { data, loading, error }] = useAddTelecommunicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTelecommunicationMutation(baseOptions?: Apollo.MutationHookOptions<AddTelecommunicationMutation, AddTelecommunicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTelecommunicationMutation, AddTelecommunicationMutationVariables>(AddTelecommunicationDocument, options);
      }
export type AddTelecommunicationMutationHookResult = ReturnType<typeof useAddTelecommunicationMutation>;
export type AddTelecommunicationMutationResult = Apollo.MutationResult<AddTelecommunicationMutation>;
export type AddTelecommunicationMutationOptions = Apollo.BaseMutationOptions<AddTelecommunicationMutation, AddTelecommunicationMutationVariables>;
export const TelecommunicationDocument = gql`
    query Telecommunication($id: ID!) {
  telecommunication(id: $id) {
    ...Telecommunication
  }
}
    ${TelecommunicationFragmentDoc}`;

/**
 * __useTelecommunicationQuery__
 *
 * To run a query within a React component, call `useTelecommunicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useTelecommunicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTelecommunicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTelecommunicationQuery(baseOptions: Apollo.QueryHookOptions<TelecommunicationQuery, TelecommunicationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TelecommunicationQuery, TelecommunicationQueryVariables>(TelecommunicationDocument, options);
      }
export function useTelecommunicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TelecommunicationQuery, TelecommunicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TelecommunicationQuery, TelecommunicationQueryVariables>(TelecommunicationDocument, options);
        }
export type TelecommunicationQueryHookResult = ReturnType<typeof useTelecommunicationQuery>;
export type TelecommunicationLazyQueryHookResult = ReturnType<typeof useTelecommunicationLazyQuery>;
export type TelecommunicationQueryResult = Apollo.QueryResult<TelecommunicationQuery, TelecommunicationQueryVariables>;
export const TelecommunicationCardDocument = gql`
    query TelecommunicationCard {
  telecommunicationCard {
    ...TelecommunicationCard
  }
}
    ${TelecommunicationCardFragmentDoc}`;

/**
 * __useTelecommunicationCardQuery__
 *
 * To run a query within a React component, call `useTelecommunicationCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useTelecommunicationCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTelecommunicationCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useTelecommunicationCardQuery(baseOptions?: Apollo.QueryHookOptions<TelecommunicationCardQuery, TelecommunicationCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TelecommunicationCardQuery, TelecommunicationCardQueryVariables>(TelecommunicationCardDocument, options);
      }
export function useTelecommunicationCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TelecommunicationCardQuery, TelecommunicationCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TelecommunicationCardQuery, TelecommunicationCardQueryVariables>(TelecommunicationCardDocument, options);
        }
export type TelecommunicationCardQueryHookResult = ReturnType<typeof useTelecommunicationCardQuery>;
export type TelecommunicationCardLazyQueryHookResult = ReturnType<typeof useTelecommunicationCardLazyQuery>;
export type TelecommunicationCardQueryResult = Apollo.QueryResult<TelecommunicationCardQuery, TelecommunicationCardQueryVariables>;
export const UpdateTelecommunicationDocument = gql`
    mutation UpdateTelecommunication($input: TelecommunicationInput!) {
  updateTelecommunication(input: $input) {
    ...Telecommunication
  }
}
    ${TelecommunicationFragmentDoc}`;
export type UpdateTelecommunicationMutationFn = Apollo.MutationFunction<UpdateTelecommunicationMutation, UpdateTelecommunicationMutationVariables>;

/**
 * __useUpdateTelecommunicationMutation__
 *
 * To run a mutation, you first call `useUpdateTelecommunicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTelecommunicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTelecommunicationMutation, { data, loading, error }] = useUpdateTelecommunicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTelecommunicationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTelecommunicationMutation, UpdateTelecommunicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTelecommunicationMutation, UpdateTelecommunicationMutationVariables>(UpdateTelecommunicationDocument, options);
      }
export type UpdateTelecommunicationMutationHookResult = ReturnType<typeof useUpdateTelecommunicationMutation>;
export type UpdateTelecommunicationMutationResult = Apollo.MutationResult<UpdateTelecommunicationMutation>;
export type UpdateTelecommunicationMutationOptions = Apollo.BaseMutationOptions<UpdateTelecommunicationMutation, UpdateTelecommunicationMutationVariables>;
export const AddWebDevelopmentDocument = gql`
    mutation AddWebDevelopment($input: WebDevelopmentInput!) {
  addWebDevelopment(input: $input) {
    ...WebDevelopment
  }
}
    ${WebDevelopmentFragmentDoc}`;
export type AddWebDevelopmentMutationFn = Apollo.MutationFunction<AddWebDevelopmentMutation, AddWebDevelopmentMutationVariables>;

/**
 * __useAddWebDevelopmentMutation__
 *
 * To run a mutation, you first call `useAddWebDevelopmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWebDevelopmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWebDevelopmentMutation, { data, loading, error }] = useAddWebDevelopmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddWebDevelopmentMutation(baseOptions?: Apollo.MutationHookOptions<AddWebDevelopmentMutation, AddWebDevelopmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddWebDevelopmentMutation, AddWebDevelopmentMutationVariables>(AddWebDevelopmentDocument, options);
      }
export type AddWebDevelopmentMutationHookResult = ReturnType<typeof useAddWebDevelopmentMutation>;
export type AddWebDevelopmentMutationResult = Apollo.MutationResult<AddWebDevelopmentMutation>;
export type AddWebDevelopmentMutationOptions = Apollo.BaseMutationOptions<AddWebDevelopmentMutation, AddWebDevelopmentMutationVariables>;
export const UpdateWebDevelopmentDocument = gql`
    mutation UpdateWebDevelopment($input: WebDevelopmentInput!) {
  updateWebDevelopment(input: $input) {
    ...WebDevelopment
  }
}
    ${WebDevelopmentFragmentDoc}`;
export type UpdateWebDevelopmentMutationFn = Apollo.MutationFunction<UpdateWebDevelopmentMutation, UpdateWebDevelopmentMutationVariables>;

/**
 * __useUpdateWebDevelopmentMutation__
 *
 * To run a mutation, you first call `useUpdateWebDevelopmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWebDevelopmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWebDevelopmentMutation, { data, loading, error }] = useUpdateWebDevelopmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWebDevelopmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWebDevelopmentMutation, UpdateWebDevelopmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWebDevelopmentMutation, UpdateWebDevelopmentMutationVariables>(UpdateWebDevelopmentDocument, options);
      }
export type UpdateWebDevelopmentMutationHookResult = ReturnType<typeof useUpdateWebDevelopmentMutation>;
export type UpdateWebDevelopmentMutationResult = Apollo.MutationResult<UpdateWebDevelopmentMutation>;
export type UpdateWebDevelopmentMutationOptions = Apollo.BaseMutationOptions<UpdateWebDevelopmentMutation, UpdateWebDevelopmentMutationVariables>;
export const WebDevelopmentDocument = gql`
    query WebDevelopment($id: ID!) {
  webDevelopment(id: $id) {
    ...WebDevelopment
  }
}
    ${WebDevelopmentFragmentDoc}`;

/**
 * __useWebDevelopmentQuery__
 *
 * To run a query within a React component, call `useWebDevelopmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebDevelopmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebDevelopmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWebDevelopmentQuery(baseOptions: Apollo.QueryHookOptions<WebDevelopmentQuery, WebDevelopmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WebDevelopmentQuery, WebDevelopmentQueryVariables>(WebDevelopmentDocument, options);
      }
export function useWebDevelopmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebDevelopmentQuery, WebDevelopmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WebDevelopmentQuery, WebDevelopmentQueryVariables>(WebDevelopmentDocument, options);
        }
export type WebDevelopmentQueryHookResult = ReturnType<typeof useWebDevelopmentQuery>;
export type WebDevelopmentLazyQueryHookResult = ReturnType<typeof useWebDevelopmentLazyQuery>;
export type WebDevelopmentQueryResult = Apollo.QueryResult<WebDevelopmentQuery, WebDevelopmentQueryVariables>;
export const WebDevelopmentCardDocument = gql`
    query WebDevelopmentCard {
  webDevelopmentCard {
    ...WebDevelopmentCard
  }
}
    ${WebDevelopmentCardFragmentDoc}`;

/**
 * __useWebDevelopmentCardQuery__
 *
 * To run a query within a React component, call `useWebDevelopmentCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebDevelopmentCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebDevelopmentCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useWebDevelopmentCardQuery(baseOptions?: Apollo.QueryHookOptions<WebDevelopmentCardQuery, WebDevelopmentCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WebDevelopmentCardQuery, WebDevelopmentCardQueryVariables>(WebDevelopmentCardDocument, options);
      }
export function useWebDevelopmentCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebDevelopmentCardQuery, WebDevelopmentCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WebDevelopmentCardQuery, WebDevelopmentCardQueryVariables>(WebDevelopmentCardDocument, options);
        }
export type WebDevelopmentCardQueryHookResult = ReturnType<typeof useWebDevelopmentCardQuery>;
export type WebDevelopmentCardLazyQueryHookResult = ReturnType<typeof useWebDevelopmentCardLazyQuery>;
export type WebDevelopmentCardQueryResult = Apollo.QueryResult<WebDevelopmentCardQuery, WebDevelopmentCardQueryVariables>;
export const UpdateBlogPostDocument = gql`
    mutation UpdateBlogPost($input: BlogPostInput!) {
  updateBlogPost(input: $input) {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;
export type UpdateBlogPostMutationFn = Apollo.MutationFunction<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>;

/**
 * __useUpdateBlogPostMutation__
 *
 * To run a mutation, you first call `useUpdateBlogPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogPostMutation, { data, loading, error }] = useUpdateBlogPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlogPostMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>(UpdateBlogPostDocument, options);
      }
export type UpdateBlogPostMutationHookResult = ReturnType<typeof useUpdateBlogPostMutation>;
export type UpdateBlogPostMutationResult = Apollo.MutationResult<UpdateBlogPostMutation>;
export type UpdateBlogPostMutationOptions = Apollo.BaseMutationOptions<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>;
export type AddBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;


export type AddBlogPostMutation = { __typename?: 'Mutation', addBlogPost?: { __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogCardQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogCardQuery = { __typename?: 'Query', blogCard?: Array<{ __typename?: 'BlogPost', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type BlogCardFragment = { __typename?: 'BlogPost', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type BlogPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlogPostQuery = { __typename?: 'Query', blogPost?: { __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogPostFragment = { __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null> | null };

export type ActingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ActingQuery = { __typename?: 'Query', acting?: { __typename?: 'Acting', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ActingCardQueryVariables = Exact<{ [key: string]: never; }>;


export type ActingCardQuery = { __typename?: 'Query', actingCard?: Array<{ __typename?: 'Acting', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type ActingCardFragment = { __typename?: 'Acting', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type ActingFragment = { __typename?: 'Acting', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddActingMutationVariables = Exact<{
  input: ActingInput;
}>;


export type AddActingMutation = { __typename?: 'Mutation', addActing?: { __typename?: 'Acting', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type UpdateActingMutationVariables = Exact<{
  input: ActingInput;
}>;


export type UpdateActingMutation = { __typename?: 'Mutation', updateActing?: { __typename?: 'Acting', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddAnimation3DMutationVariables = Exact<{
  input: Animation3DInput;
}>;


export type AddAnimation3DMutation = { __typename?: 'Mutation', addAnimation3D?: { __typename?: 'Animation3D', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type Animation3DQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Animation3DQuery = { __typename?: 'Query', animation3D?: { __typename?: 'Animation3D', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type Animation3DCardQueryVariables = Exact<{ [key: string]: never; }>;


export type Animation3DCardQuery = { __typename?: 'Query', animation3DCard?: Array<{ __typename?: 'Animation3D', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type Animation3DCardFragment = { __typename?: 'Animation3D', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type Animation3DFragment = { __typename?: 'Animation3D', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateAnimation3DMutationVariables = Exact<{
  input: Animation3DInput;
}>;


export type UpdateAnimation3DMutation = { __typename?: 'Mutation', updateAnimation3D?: { __typename?: 'Animation3D', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddDesignMutationVariables = Exact<{
  input: DesignInput;
}>;


export type AddDesignMutation = { __typename?: 'Mutation', addDesign?: { __typename?: 'Design', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DesignQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DesignQuery = { __typename?: 'Query', design?: { __typename?: 'Design', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DesignFragment = { __typename?: 'Design', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateDesignMutationVariables = Exact<{
  input: DesignInput;
}>;


export type UpdateDesignMutation = { __typename?: 'Mutation', updateDesign?: { __typename?: 'Design', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddDigitalMediaMutationVariables = Exact<{
  input: DigitalMediaInput;
}>;


export type AddDigitalMediaMutation = { __typename?: 'Mutation', addDigitalMedia?: { __typename?: 'DigitalMedia', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DigitalMediaQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DigitalMediaQuery = { __typename?: 'Query', digitalMedia?: { __typename?: 'DigitalMedia', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DigitalMediaCardQueryVariables = Exact<{ [key: string]: never; }>;


export type DigitalMediaCardQuery = { __typename?: 'Query', digitalMediaCard?: Array<{ __typename?: 'DigitalMedia', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type DigitalMediaCardFragment = { __typename?: 'DigitalMedia', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type DigitalMediaFragment = { __typename?: 'DigitalMedia', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateDigitalMediaMutationVariables = Exact<{
  input: DigitalMediaInput;
}>;


export type UpdateDigitalMediaMutation = { __typename?: 'Mutation', updateDigitalMedia?: { __typename?: 'DigitalMedia', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddFashionDesignMutationVariables = Exact<{
  input: FashionDesignInput;
}>;


export type AddFashionDesignMutation = { __typename?: 'Mutation', addFashionDesign?: { __typename?: 'FashionDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type FashionDesignQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FashionDesignQuery = { __typename?: 'Query', fashionDesign?: { __typename?: 'FashionDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type FashionDesignCardQueryVariables = Exact<{ [key: string]: never; }>;


export type FashionDesignCardQuery = { __typename?: 'Query', fashionDesignCard?: Array<{ __typename?: 'FashionDesign', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type FashionDesignCardFragment = { __typename?: 'FashionDesign', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type FashionDesignFragment = { __typename?: 'FashionDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateFashionDesignMutationVariables = Exact<{
  input: FashionDesignInput;
}>;


export type UpdateFashionDesignMutation = { __typename?: 'Mutation', updateFashionDesign?: { __typename?: 'FashionDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddFilmMutationVariables = Exact<{
  input: FilmInput;
}>;


export type AddFilmMutation = { __typename?: 'Mutation', addFilm?: { __typename?: 'Film', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type FilmQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FilmQuery = { __typename?: 'Query', film?: { __typename?: 'Film', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type FilmCardQueryVariables = Exact<{ [key: string]: never; }>;


export type FilmCardQuery = { __typename?: 'Query', filmCard?: Array<{ __typename?: 'Film', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type FilmCardFragment = { __typename?: 'Film', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type FilmFragment = { __typename?: 'Film', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateFilmMutationVariables = Exact<{
  input: FilmInput;
}>;


export type UpdateFilmMutation = { __typename?: 'Mutation', updateFilm?: { __typename?: 'Film', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddGraphicDesignMutationVariables = Exact<{
  input: GraphicDesignInput;
}>;


export type AddGraphicDesignMutation = { __typename?: 'Mutation', addGraphicDesign?: { __typename?: 'GraphicDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type GraphicDesignQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GraphicDesignQuery = { __typename?: 'Query', graphicDesign?: { __typename?: 'GraphicDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type GraphicDesignCardQueryVariables = Exact<{ [key: string]: never; }>;


export type GraphicDesignCardQuery = { __typename?: 'Query', graphicDesignCard?: Array<{ __typename?: 'GraphicDesign', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type GraphicDesignCardFragment = { __typename?: 'GraphicDesign', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type GraphicDesignFragment = { __typename?: 'GraphicDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateGraphicDesignMutationVariables = Exact<{
  input: GraphicDesignInput;
}>;


export type UpdateGraphicDesignMutation = { __typename?: 'Mutation', updateGraphicDesign?: { __typename?: 'GraphicDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddInteriorDesignMutationVariables = Exact<{
  input: InteriorDesignInput;
}>;


export type AddInteriorDesignMutation = { __typename?: 'Mutation', addInteriorDesign?: { __typename?: 'InteriorDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type InteriorDesignQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type InteriorDesignQuery = { __typename?: 'Query', interiorDesign?: { __typename?: 'InteriorDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type InteriorDesignCardQueryVariables = Exact<{ [key: string]: never; }>;


export type InteriorDesignCardQuery = { __typename?: 'Query', interiorDesignCard?: Array<{ __typename?: 'InteriorDesign', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type InteriorDesignCardFragment = { __typename?: 'InteriorDesign', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type InteriorDesignFragment = { __typename?: 'InteriorDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateInteriorDesignMutationVariables = Exact<{
  input: InteriorDesignInput;
}>;


export type UpdateInteriorDesignMutation = { __typename?: 'Mutation', updateInteriorDesign?: { __typename?: 'InteriorDesign', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddLandscapeMutationVariables = Exact<{
  input: LandscapeInput;
}>;


export type AddLandscapeMutation = { __typename?: 'Mutation', addLandscape?: { __typename?: 'Landscape', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type LandscapeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LandscapeQuery = { __typename?: 'Query', landscape?: { __typename?: 'Landscape', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type LandscapeCardQueryVariables = Exact<{ [key: string]: never; }>;


export type LandscapeCardQuery = { __typename?: 'Query', landscapeCard?: Array<{ __typename?: 'Landscape', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type LandscapeCardFragment = { __typename?: 'Landscape', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type LandscapeFragment = { __typename?: 'Landscape', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateLandscapeMutationVariables = Exact<{
  input: LandscapeInput;
}>;


export type UpdateLandscapeMutation = { __typename?: 'Mutation', updateLandscape?: { __typename?: 'Landscape', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddMusicMutationVariables = Exact<{
  input: MusicInput;
}>;


export type AddMusicMutation = { __typename?: 'Mutation', addMusic?: { __typename?: 'Music', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MusicQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MusicQuery = { __typename?: 'Query', music?: { __typename?: 'Music', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MusicCardQueryVariables = Exact<{ [key: string]: never; }>;


export type MusicCardQuery = { __typename?: 'Query', musicCard?: Array<{ __typename?: 'Music', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type MusicCardFragment = { __typename?: 'Music', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type MusicFragment = { __typename?: 'Music', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateMusicMutationVariables = Exact<{
  input: MusicInput;
}>;


export type UpdateMusicMutation = { __typename?: 'Mutation', updateMusic?: { __typename?: 'Music', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddAgedCareMutationVariables = Exact<{
  input: AgedCareInput;
}>;


export type AddAgedCareMutation = { __typename?: 'Mutation', addAgedCare?: { __typename?: 'AgedCare', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AgedCareQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AgedCareQuery = { __typename?: 'Query', agedCare?: { __typename?: 'AgedCare', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AgedCareCardQueryVariables = Exact<{ [key: string]: never; }>;


export type AgedCareCardQuery = { __typename?: 'Query', agedCareCard?: Array<{ __typename?: 'AgedCare', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type AgedCareCardFragment = { __typename?: 'AgedCare', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type AgedCareFragment = { __typename?: 'AgedCare', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateAgedCareMutationVariables = Exact<{
  input: AgedCareInput;
}>;


export type UpdateAgedCareMutation = { __typename?: 'Mutation', updateAgedCare?: { __typename?: 'AgedCare', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddDentalMutationVariables = Exact<{
  input: DentalInput;
}>;


export type AddDentalMutation = { __typename?: 'Mutation', addDental?: { __typename?: 'Dental', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DentalQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DentalQuery = { __typename?: 'Query', dental?: { __typename?: 'Dental', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DentalCardQueryVariables = Exact<{ [key: string]: never; }>;


export type DentalCardQuery = { __typename?: 'Query', dentalCard?: Array<{ __typename?: 'Dental', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type DentalCardFragment = { __typename?: 'Dental', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type DentalFragment = { __typename?: 'Dental', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateDentalMutationVariables = Exact<{
  input: DentalInput;
}>;


export type UpdateDentalMutation = { __typename?: 'Mutation', updateDental?: { __typename?: 'Dental', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddHealthMutationVariables = Exact<{
  input: HealthInput;
}>;


export type AddHealthMutation = { __typename?: 'Mutation', addHealth?: { __typename?: 'Health', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type HealthQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type HealthQuery = { __typename?: 'Query', health?: { __typename?: 'Health', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type HealthFragment = { __typename?: 'Health', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateHealthMutationVariables = Exact<{
  input: HealthInput;
}>;


export type UpdateHealthMutation = { __typename?: 'Mutation', updateHealth?: { __typename?: 'Health', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddMassageMutationVariables = Exact<{
  input: MassageInput;
}>;


export type AddMassageMutation = { __typename?: 'Mutation', addMassage?: { __typename?: 'Massage', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MassageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MassageQuery = { __typename?: 'Query', massage?: { __typename?: 'Massage', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MassageCardQueryVariables = Exact<{ [key: string]: never; }>;


export type MassageCardQuery = { __typename?: 'Query', massageCard?: Array<{ __typename?: 'Massage', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type MassageCardFragment = { __typename?: 'Massage', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type MassageFragment = { __typename?: 'Massage', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateMassageMutationVariables = Exact<{
  input: MassageInput;
}>;


export type UpdateMassageMutation = { __typename?: 'Mutation', updateMassage?: { __typename?: 'Massage', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddMedicineMutationVariables = Exact<{
  input: MedicineInput;
}>;


export type AddMedicineMutation = { __typename?: 'Mutation', addMedicine?: { __typename?: 'Medicine', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MedicineQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MedicineQuery = { __typename?: 'Query', medicine?: { __typename?: 'Medicine', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MedicineCardQueryVariables = Exact<{ [key: string]: never; }>;


export type MedicineCardQuery = { __typename?: 'Query', medicineCard?: Array<{ __typename?: 'Medicine', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type MedicineCardFragment = { __typename?: 'Medicine', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type MedicineFragment = { __typename?: 'Medicine', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateMedicineMutationVariables = Exact<{
  input: MedicineInput;
}>;


export type UpdateMedicineMutation = { __typename?: 'Mutation', updateMedicine?: { __typename?: 'Medicine', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddMentalHealthMutationVariables = Exact<{
  input: MentalHealthInput;
}>;


export type AddMentalHealthMutation = { __typename?: 'Mutation', addMentalHealth?: { __typename?: 'MentalHealth', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MentalHealthQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MentalHealthQuery = { __typename?: 'Query', mentalHealth?: { __typename?: 'MentalHealth', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MentalHealthCardQueryVariables = Exact<{ [key: string]: never; }>;


export type MentalHealthCardQuery = { __typename?: 'Query', mentalHealthCard?: Array<{ __typename?: 'MentalHealth', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type MentalHealthCardFragment = { __typename?: 'MentalHealth', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type MentalHealthFragment = { __typename?: 'MentalHealth', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateMentalHealthMutationVariables = Exact<{
  input: MentalHealthInput;
}>;


export type UpdateMentalHealthMutation = { __typename?: 'Mutation', updateMentalHealth?: { __typename?: 'MentalHealth', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddNursingMutationVariables = Exact<{
  input: NursingInput;
}>;


export type AddNursingMutation = { __typename?: 'Mutation', addNursing?: { __typename?: 'Nursing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type NursingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NursingQuery = { __typename?: 'Query', nursing?: { __typename?: 'Nursing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type NursingCardQueryVariables = Exact<{ [key: string]: never; }>;


export type NursingCardQuery = { __typename?: 'Query', nursingCard?: Array<{ __typename?: 'Nursing', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type NursingCardFragment = { __typename?: 'Nursing', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type NursingFragment = { __typename?: 'Nursing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateNursingMutationVariables = Exact<{
  input: NursingInput;
}>;


export type UpdateNursingMutation = { __typename?: 'Mutation', updateNursing?: { __typename?: 'Nursing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddNutritionMutationVariables = Exact<{
  input: NutritionInput;
}>;


export type AddNutritionMutation = { __typename?: 'Mutation', addNutrition?: { __typename?: 'Nutrition', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type NutritionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NutritionQuery = { __typename?: 'Query', nutrition?: { __typename?: 'Nutrition', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type NutritionCardQueryVariables = Exact<{ [key: string]: never; }>;


export type NutritionCardQuery = { __typename?: 'Query', nutritionCard?: Array<{ __typename?: 'Nutrition', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type NutritionCardFragment = { __typename?: 'Nutrition', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type NutritionFragment = { __typename?: 'Nutrition', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateNutritionMutationVariables = Exact<{
  input: NutritionInput;
}>;


export type UpdateNutritionMutation = { __typename?: 'Mutation', updateNutrition?: { __typename?: 'Nutrition', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddPublicHealthMutationVariables = Exact<{
  input: PublicHealthInput;
}>;


export type AddPublicHealthMutation = { __typename?: 'Mutation', addPublicHealth?: { __typename?: 'PublicHealth', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type PublicHealthQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublicHealthQuery = { __typename?: 'Query', publicHealth?: { __typename?: 'PublicHealth', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type PublicHealthCardQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicHealthCardQuery = { __typename?: 'Query', publicHealthCard?: Array<{ __typename?: 'PublicHealth', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type PublicHealthCardFragment = { __typename?: 'PublicHealth', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type PublicHealthFragment = { __typename?: 'PublicHealth', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdatePublicHealthMutationVariables = Exact<{
  input: PublicHealthInput;
}>;


export type UpdatePublicHealthMutation = { __typename?: 'Mutation', updatePublicHealth?: { __typename?: 'PublicHealth', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddVeterinaryMutationVariables = Exact<{
  input: VeterinaryInput;
}>;


export type AddVeterinaryMutation = { __typename?: 'Mutation', addVeterinary?: { __typename?: 'Veterinary', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type UpdateVeterinaryMutationVariables = Exact<{
  input: VeterinaryInput;
}>;


export type UpdateVeterinaryMutation = { __typename?: 'Mutation', updateVeterinary?: { __typename?: 'Veterinary', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type VeterinaryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VeterinaryQuery = { __typename?: 'Query', veterinary?: { __typename?: 'Veterinary', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type VeterinaryCardQueryVariables = Exact<{ [key: string]: never; }>;


export type VeterinaryCardQuery = { __typename?: 'Query', veterinaryCard?: Array<{ __typename?: 'Veterinary', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type VeterinaryCardFragment = { __typename?: 'Veterinary', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type VeterinaryFragment = { __typename?: 'Veterinary', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddAiMutationVariables = Exact<{
  input: AiInput;
}>;


export type AddAiMutation = { __typename?: 'Mutation', addAi?: { __typename?: 'Ai', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AiQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AiQuery = { __typename?: 'Query', ai?: { __typename?: 'Ai', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AiCardQueryVariables = Exact<{ [key: string]: never; }>;


export type AiCardQuery = { __typename?: 'Query', aiCard?: Array<{ __typename?: 'Ai', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type AiCardFragment = { __typename?: 'Ai', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type AiFragment = { __typename?: 'Ai', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateAiMutationVariables = Exact<{
  input: AiInput;
}>;


export type UpdateAiMutation = { __typename?: 'Mutation', updateAi?: { __typename?: 'Ai', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddBlockchainMutationVariables = Exact<{
  input: BlockchainInput;
}>;


export type AddBlockchainMutation = { __typename?: 'Mutation', addBlockchain?: { __typename?: 'Blockchain', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlockchainQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlockchainQuery = { __typename?: 'Query', blockchain?: { __typename?: 'Blockchain', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlockchainCardQueryVariables = Exact<{ [key: string]: never; }>;


export type BlockchainCardQuery = { __typename?: 'Query', blockchainCard?: Array<{ __typename?: 'Blockchain', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type BlockchainCardFragment = { __typename?: 'Blockchain', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type BlockchainFragment = { __typename?: 'Blockchain', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateBlockchainMutationVariables = Exact<{
  input: BlockchainInput;
}>;


export type UpdateBlockchainMutation = { __typename?: 'Mutation', updateBlockchain?: { __typename?: 'Blockchain', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddBusinessAnalysisMutationVariables = Exact<{
  input: BusinessAnalysisInput;
}>;


export type AddBusinessAnalysisMutation = { __typename?: 'Mutation', addBusinessAnalysis?: { __typename?: 'BusinessAnalysis', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BusinessAnalysisCardQueryVariables = Exact<{ [key: string]: never; }>;


export type BusinessAnalysisCardQuery = { __typename?: 'Query', businessAnalysisCard?: Array<{ __typename?: 'BusinessAnalysis', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type BusinessAnalysisCardFragment = { __typename?: 'BusinessAnalysis', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type BusinessAnalysisQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BusinessAnalysisQuery = { __typename?: 'Query', businessAnalysis?: { __typename?: 'BusinessAnalysis', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BusinessAnalysisFragment = { __typename?: 'BusinessAnalysis', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateBusinessAnalysisMutationVariables = Exact<{
  input: BusinessAnalysisInput;
}>;


export type UpdateBusinessAnalysisMutation = { __typename?: 'Mutation', updateBusinessAnalysis?: { __typename?: 'BusinessAnalysis', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddCloudComputingMutationVariables = Exact<{
  input: CloudComputingInput;
}>;


export type AddCloudComputingMutation = { __typename?: 'Mutation', addCloudComputing?: { __typename?: 'CloudComputing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type CloudComputingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CloudComputingQuery = { __typename?: 'Query', cloudComputing?: { __typename?: 'CloudComputing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type CloudComputingCardQueryVariables = Exact<{ [key: string]: never; }>;


export type CloudComputingCardQuery = { __typename?: 'Query', cloudComputingCard?: Array<{ __typename?: 'CloudComputing', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type CloudComputingCardFragment = { __typename?: 'CloudComputing', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type CloudComputingFragment = { __typename?: 'CloudComputing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateCloudComputingMutationVariables = Exact<{
  input: CloudComputingInput;
}>;


export type UpdateCloudComputingMutation = { __typename?: 'Mutation', updateCloudComputing?: { __typename?: 'CloudComputing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddComputerNetworkingMutationVariables = Exact<{
  input: ComputerNetworkingInput;
}>;


export type AddComputerNetworkingMutation = { __typename?: 'Mutation', addComputerNetworking?: { __typename?: 'ComputerNetworking', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ComputerNetworkingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ComputerNetworkingQuery = { __typename?: 'Query', computerNetworking?: { __typename?: 'ComputerNetworking', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ComputerNetworkingCardQueryVariables = Exact<{ [key: string]: never; }>;


export type ComputerNetworkingCardQuery = { __typename?: 'Query', computerNetworkingCard?: Array<{ __typename?: 'ComputerNetworking', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type ComputerNetworkingCardFragment = { __typename?: 'ComputerNetworking', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type ComputerNetworkingFragment = { __typename?: 'ComputerNetworking', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateComputerNetworkingMutationVariables = Exact<{
  input: ComputerNetworkingInput;
}>;


export type UpdateComputerNetworkingMutation = { __typename?: 'Mutation', updateComputerNetworking?: { __typename?: 'ComputerNetworking', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddDataManagementMutationVariables = Exact<{
  input: DataManagementInput;
}>;


export type AddDataManagementMutation = { __typename?: 'Mutation', addDataManagement?: { __typename?: 'DataManagement', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DataManagementQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DataManagementQuery = { __typename?: 'Query', dataManagement?: { __typename?: 'DataManagement', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DataManagementCardQueryVariables = Exact<{ [key: string]: never; }>;


export type DataManagementCardQuery = { __typename?: 'Query', dataManagementCard?: Array<{ __typename?: 'DataManagement', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type DataManagementCardFragment = { __typename?: 'DataManagement', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type DataManagementFragment = { __typename?: 'DataManagement', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateDataManagementMutationVariables = Exact<{
  input: DataManagementInput;
}>;


export type UpdateDataManagementMutation = { __typename?: 'Mutation', updateDataManagement?: { __typename?: 'DataManagement', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddGameProgrammingMutationVariables = Exact<{
  input: GameProgrammingInput;
}>;


export type AddGameProgrammingMutation = { __typename?: 'Mutation', addGameProgramming?: { __typename?: 'GameProgramming', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type GameProgrammingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GameProgrammingQuery = { __typename?: 'Query', gameProgramming?: { __typename?: 'GameProgramming', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type GameProgrammingCardQueryVariables = Exact<{ [key: string]: never; }>;


export type GameProgrammingCardQuery = { __typename?: 'Query', gameProgrammingCard?: Array<{ __typename?: 'GameProgramming', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type GameProgrammingFragment = { __typename?: 'GameProgramming', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type GameProgrammingCardFragment = { __typename?: 'GameProgramming', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type UpdateGameProgrammingMutationVariables = Exact<{
  input: GameProgrammingInput;
}>;


export type UpdateGameProgrammingMutation = { __typename?: 'Mutation', updateGameProgramming?: { __typename?: 'GameProgramming', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddItMutationVariables = Exact<{
  input: ItInput;
}>;


export type AddItMutation = { __typename?: 'Mutation', addIt?: { __typename?: 'It', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ItQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ItQuery = { __typename?: 'Query', it?: { __typename?: 'It', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ItFragment = { __typename?: 'It', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateItMutationVariables = Exact<{
  input: ItInput;
}>;


export type UpdateItMutation = { __typename?: 'Mutation', updateIt?: { __typename?: 'It', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddMachineLearningMutationVariables = Exact<{
  input: MachineLearningInput;
}>;


export type AddMachineLearningMutation = { __typename?: 'Mutation', addMachineLearning?: { __typename?: 'MachineLearning', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MachineLearningQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MachineLearningQuery = { __typename?: 'Query', machineLearning?: { __typename?: 'MachineLearning', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MachineLearningCardQueryVariables = Exact<{ [key: string]: never; }>;


export type MachineLearningCardQuery = { __typename?: 'Query', machineLearningCard?: Array<{ __typename?: 'MachineLearning', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type MachineLearningCardFragment = { __typename?: 'MachineLearning', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type MachineLearningFragment = { __typename?: 'MachineLearning', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateMachineLearningMutationVariables = Exact<{
  input: MachineLearningInput;
}>;


export type UpdateMachineLearningMutation = { __typename?: 'Mutation', updateMachineLearning?: { __typename?: 'MachineLearning', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddSoftwareDevelopmentMutationVariables = Exact<{
  input: SoftwareDevelopmentInput;
}>;


export type AddSoftwareDevelopmentMutation = { __typename?: 'Mutation', addSoftwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type SoftwareDevelopmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SoftwareDevelopmentQuery = { __typename?: 'Query', softwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type SoftwareDevelopmentCardQueryVariables = Exact<{ [key: string]: never; }>;


export type SoftwareDevelopmentCardQuery = { __typename?: 'Query', softwareDevelopmentCard?: Array<{ __typename?: 'SoftwareDevelopment', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type SoftwareDevelopmentCardFragment = { __typename?: 'SoftwareDevelopment', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type SoftwareDevelopmentFragment = { __typename?: 'SoftwareDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateSoftwareDevelopmentMutationVariables = Exact<{
  input: SoftwareDevelopmentInput;
}>;


export type UpdateSoftwareDevelopmentMutation = { __typename?: 'Mutation', updateSoftwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddTelecommunicationMutationVariables = Exact<{
  input: TelecommunicationInput;
}>;


export type AddTelecommunicationMutation = { __typename?: 'Mutation', addTelecommunication?: { __typename?: 'Telecommunication', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type TelecommunicationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TelecommunicationQuery = { __typename?: 'Query', telecommunication?: { __typename?: 'Telecommunication', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type TelecommunicationCardQueryVariables = Exact<{ [key: string]: never; }>;


export type TelecommunicationCardQuery = { __typename?: 'Query', telecommunicationCard?: Array<{ __typename?: 'Telecommunication', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type TelecommunicationCardFragment = { __typename?: 'Telecommunication', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type TelecommunicationFragment = { __typename?: 'Telecommunication', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateTelecommunicationMutationVariables = Exact<{
  input: TelecommunicationInput;
}>;


export type UpdateTelecommunicationMutation = { __typename?: 'Mutation', updateTelecommunication?: { __typename?: 'Telecommunication', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddWebDevelopmentMutationVariables = Exact<{
  input: WebDevelopmentInput;
}>;


export type AddWebDevelopmentMutation = { __typename?: 'Mutation', addWebDevelopment?: { __typename?: 'WebDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type UpdateWebDevelopmentMutationVariables = Exact<{
  input: WebDevelopmentInput;
}>;


export type UpdateWebDevelopmentMutation = { __typename?: 'Mutation', updateWebDevelopment?: { __typename?: 'WebDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type WebDevelopmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebDevelopmentQuery = { __typename?: 'Query', webDevelopment?: { __typename?: 'WebDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type WebDevelopmentCardQueryVariables = Exact<{ [key: string]: never; }>;


export type WebDevelopmentCardQuery = { __typename?: 'Query', webDevelopmentCard?: Array<{ __typename?: 'WebDevelopment', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type WebDevelopmentCardFragment = { __typename?: 'WebDevelopment', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type WebDevelopmentFragment = { __typename?: 'WebDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;


export type UpdateBlogPostMutation = { __typename?: 'Mutation', updateBlogPost?: { __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };
