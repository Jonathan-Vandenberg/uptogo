import { GraphQLResolveInfo } from 'graphql';
import { CategoriesEnum as CategoriesEnumModel, SoftwareDevelopment as SoftwareDevelopmentModel, ComputerNetworking as ComputerNetworkingModel, CloudComputing as CloudComputingModel, BusinessAnalysis as BusinessAnalysisModel, Telecommunication as TelecommunicationModel, GameProgramming as GameProgrammingModel, WebDevelopment as WebDevelopmentModel, MachineLearning as MachineLearningModel, DataManagement as DataManagementModel, Blockchain as BlockchainModel, Ai as AiModel, BlogPost as BlogPostModel, It as ItModel, Session as SessionModel, User as UserModel, VerificationToken as VerificationTokenModel } from '@prisma/client';
import { GraphQLContext } from './pages/api/index';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
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

export type Ai = {
  __typename?: 'Ai';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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
  category?: Maybe<CategoriesEnum>;
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
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum CategoriesEnum {
  Acting = 'ACTING',
  AgedCare = 'AGED_CARE',
  AgribusinessManagement = 'AGRIBUSINESS_MANAGEMENT',
  Ai = 'AI',
  Animation_3D = 'ANIMATION_3D',
  Automotive = 'AUTOMOTIVE',
  Baking = 'BAKING',
  BankingManagement = 'BANKING_MANAGEMENT',
  Beauty = 'BEAUTY',
  BlockchainTech = 'BLOCKCHAIN_TECH',
  Blog = 'BLOG',
  BusinessAnalysis = 'BUSINESS_ANALYSIS',
  BusinessManagement = 'BUSINESS_MANAGEMENT',
  Carpentry = 'CARPENTRY',
  CloudComputing = 'CLOUD_COMPUTING',
  CommercialCooking = 'COMMERCIAL_COOKING',
  ComputerNetworking = 'COMPUTER_NETWORKING',
  Construction = 'CONSTRUCTION',
  DataManagement = 'DATA_MANAGEMENT',
  Dental = 'DENTAL',
  DigitalMedia = 'DIGITAL_MEDIA',
  Education = 'EDUCATION',
  Events = 'EVENTS',
  FashionDesign = 'FASHION_DESIGN',
  FilmMedia = 'FILM_MEDIA',
  Fitness = 'FITNESS',
  GameProgramming = 'GAME_PROGRAMMING',
  GraphicDesign = 'GRAPHIC_DESIGN',
  Haridressing = 'HARIDRESSING',
  HopitalityManagement = 'HOPITALITY_MANAGEMENT',
  Horticulture = 'HORTICULTURE',
  HumanResources = 'HUMAN_RESOURCES',
  InteriorDesign = 'INTERIOR_DESIGN',
  InternationalBusiness = 'INTERNATIONAL_BUSINESS',
  IntlHotelManagement = 'INTL_HOTEL_MANAGEMENT',
  Landscape = 'LANDSCAPE',
  LeadershipManagement = 'LEADERSHIP_MANAGEMENT',
  MachineLearning = 'MACHINE_LEARNING',
  Massage = 'MASSAGE',
  Medicine = 'MEDICINE',
  MentalHealth = 'MENTAL_HEALTH',
  MusicAudio = 'MUSIC_AUDIO',
  Nursing = 'NURSING',
  Nutrition = 'NUTRITION',
  ProjectManagement = 'PROJECT_MANAGEMENT',
  PublicHealth = 'PUBLIC_HEALTH',
  SocialmediaMarketing = 'SOCIALMEDIA_MARKETING',
  SoftwareDevelopment = 'SOFTWARE_DEVELOPMENT',
  Sport = 'SPORT',
  SupplychainManagement = 'SUPPLYCHAIN_MANAGEMENT',
  Telecommunication = 'TELECOMMUNICATION',
  TravelTourism = 'TRAVEL_TOURISM',
  Vetenary = 'VETENARY',
  WebDevelopment = 'WEB_DEVELOPMENT',
  Yoga = 'YOGA'
}

export type CloudComputing = {
  __typename?: 'CloudComputing';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type It = {
  __typename?: 'It';
  id: Scalars['String'];
  softwareDevelopment?: Maybe<SoftwareDevelopment>;
  softwareDevelopmentId?: Maybe<Scalars['String']>;
};

export type ItInput = {
  id: Scalars['String'];
};

export type MachineLearning = {
  __typename?: 'MachineLearning';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAi?: Maybe<Ai>;
  addBlockchain?: Maybe<Blockchain>;
  addBlogPost?: Maybe<BlogPost>;
  addBusinessAnalysis?: Maybe<BusinessAnalysis>;
  addCloudComputing?: Maybe<CloudComputing>;
  addComputerNetworking?: Maybe<ComputerNetworking>;
  addDataManagement?: Maybe<DataManagement>;
  addGameProgramming?: Maybe<GameProgramming>;
  addIt?: Maybe<It>;
  addMachineLearning?: Maybe<MachineLearning>;
  addSoftwareDevelopment?: Maybe<SoftwareDevelopment>;
  addTelecommunication?: Maybe<Telecommunication>;
  addWebDevelopment?: Maybe<WebDevelopment>;
  updateSoftwareDevelopment?: Maybe<SoftwareDevelopment>;
};


export type MutationAddAiArgs = {
  input?: InputMaybe<AiInput>;
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


export type MutationAddCloudComputingArgs = {
  input?: InputMaybe<CloudComputingInput>;
};


export type MutationAddComputerNetworkingArgs = {
  input?: InputMaybe<ComputerNetworkingInput>;
};


export type MutationAddDataManagementArgs = {
  input?: InputMaybe<DataManagementInput>;
};


export type MutationAddGameProgrammingArgs = {
  input?: InputMaybe<GameProgrammingInput>;
};


export type MutationAddItArgs = {
  input: ItInput;
};


export type MutationAddMachineLearningArgs = {
  input?: InputMaybe<MachineLearningInput>;
};


export type MutationAddSoftwareDevelopmentArgs = {
  input?: InputMaybe<SoftwareDevelopmentInput>;
};


export type MutationAddTelecommunicationArgs = {
  input?: InputMaybe<TelecommunicationInput>;
};


export type MutationAddWebDevelopmentArgs = {
  input?: InputMaybe<WebDevelopmentInput>;
};


export type MutationUpdateSoftwareDevelopmentArgs = {
  input: SoftwareDevelopmentInput;
};

export type Query = {
  __typename?: 'Query';
  ai?: Maybe<Ai>;
  blockchain?: Maybe<Blockchain>;
  blogCard?: Maybe<Array<Maybe<BlogPost>>>;
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  businessAnalysis?: Maybe<BusinessAnalysis>;
  cloudComputing?: Maybe<CloudComputing>;
  computerNetworking?: Maybe<ComputerNetworking>;
  dataManagement?: Maybe<DataManagement>;
  gameProgramming?: Maybe<GameProgramming>;
  it?: Maybe<It>;
  machineLearning?: Maybe<MachineLearning>;
  softwareDevelopment?: Maybe<SoftwareDevelopment>;
  telecommunication?: Maybe<Telecommunication>;
  webDevelopment?: Maybe<WebDevelopment>;
};


export type QueryAiArgs = {
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


export type QueryCloudComputingArgs = {
  id: Scalars['ID'];
};


export type QueryComputerNetworkingArgs = {
  id: Scalars['ID'];
};


export type QueryDataManagementArgs = {
  id: Scalars['ID'];
};


export type QueryGameProgrammingArgs = {
  id: Scalars['ID'];
};


export type QueryItArgs = {
  id: Scalars['ID'];
};


export type QueryMachineLearningArgs = {
  id: Scalars['ID'];
};


export type QuerySoftwareDevelopmentArgs = {
  id: Scalars['ID'];
};


export type QueryTelecommunicationArgs = {
  id: Scalars['ID'];
};


export type QueryWebDevelopmentArgs = {
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

export type SoftwareDevelopment = {
  __typename?: 'SoftwareDevelopment';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<CategoriesEnum>;
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
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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

export type WebDevelopment = {
  __typename?: 'WebDevelopment';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  category?: Maybe<CategoriesEnum>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
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
  category?: InputMaybe<CategoriesEnum>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
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
  Ai: ResolverTypeWrapper<AiModel>;
  AiInput: AiInput;
  Blockchain: ResolverTypeWrapper<BlockchainModel>;
  BlockchainInput: BlockchainInput;
  BlogPost: ResolverTypeWrapper<BlogPostModel>;
  BlogPostInput: BlogPostInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BusinessAnalysis: ResolverTypeWrapper<BusinessAnalysisModel>;
  BusinessAnalysisInput: BusinessAnalysisInput;
  CategoriesEnum: ResolverTypeWrapper<CategoriesEnumModel>;
  CloudComputing: ResolverTypeWrapper<CloudComputingModel>;
  CloudComputingInput: CloudComputingInput;
  ComputerNetworking: ResolverTypeWrapper<ComputerNetworkingModel>;
  ComputerNetworkingInput: ComputerNetworkingInput;
  DataManagement: ResolverTypeWrapper<DataManagementModel>;
  DataManagementInput: DataManagementInput;
  GameProgramming: ResolverTypeWrapper<GameProgrammingModel>;
  GameProgrammingInput: GameProgrammingInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  It: ResolverTypeWrapper<ItModel>;
  ItInput: ItInput;
  MachineLearning: ResolverTypeWrapper<MachineLearningModel>;
  MachineLearningInput: MachineLearningInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Session: ResolverTypeWrapper<SessionModel>;
  SoftwareDevelopment: ResolverTypeWrapper<SoftwareDevelopmentModel>;
  SoftwareDevelopmentInput: SoftwareDevelopmentInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Telecommunication: ResolverTypeWrapper<TelecommunicationModel>;
  TelecommunicationInput: TelecommunicationInput;
  User: ResolverTypeWrapper<UserModel>;
  VerificationToken: ResolverTypeWrapper<VerificationTokenModel>;
  WebDevelopment: ResolverTypeWrapper<WebDevelopmentModel>;
  WebDevelopmentInput: WebDevelopmentInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Omit<Account, 'user'> & { user: ResolversParentTypes['User'] };
  Ai: AiModel;
  AiInput: AiInput;
  Blockchain: BlockchainModel;
  BlockchainInput: BlockchainInput;
  BlogPost: BlogPostModel;
  BlogPostInput: BlogPostInput;
  Boolean: Scalars['Boolean'];
  BusinessAnalysis: BusinessAnalysisModel;
  BusinessAnalysisInput: BusinessAnalysisInput;
  CloudComputing: CloudComputingModel;
  CloudComputingInput: CloudComputingInput;
  ComputerNetworking: ComputerNetworkingModel;
  ComputerNetworkingInput: ComputerNetworkingInput;
  DataManagement: DataManagementModel;
  DataManagementInput: DataManagementInput;
  GameProgramming: GameProgrammingModel;
  GameProgrammingInput: GameProgrammingInput;
  ID: Scalars['ID'];
  It: ItModel;
  ItInput: ItInput;
  MachineLearning: MachineLearningModel;
  MachineLearningInput: MachineLearningInput;
  Mutation: {};
  Query: {};
  Session: SessionModel;
  SoftwareDevelopment: SoftwareDevelopmentModel;
  SoftwareDevelopmentInput: SoftwareDevelopmentInput;
  String: Scalars['String'];
  Telecommunication: TelecommunicationModel;
  TelecommunicationInput: TelecommunicationInput;
  User: UserModel;
  VerificationToken: VerificationTokenModel;
  WebDevelopment: WebDevelopmentModel;
  WebDevelopmentInput: WebDevelopmentInput;
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

export type AiResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Ai'] = ResolversParentTypes['Ai']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
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
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesEnumResolvers = EnumResolverSignature<{ ACTING?: any, AGED_CARE?: any, AGRIBUSINESS_MANAGEMENT?: any, AI?: any, ANIMATION_3D?: any, AUTOMOTIVE?: any, BAKING?: any, BANKING_MANAGEMENT?: any, BEAUTY?: any, BLOCKCHAIN_TECH?: any, BLOG?: any, BUSINESS_ANALYSIS?: any, BUSINESS_MANAGEMENT?: any, CARPENTRY?: any, CLOUD_COMPUTING?: any, COMMERCIAL_COOKING?: any, COMPUTER_NETWORKING?: any, CONSTRUCTION?: any, DATA_MANAGEMENT?: any, DENTAL?: any, DIGITAL_MEDIA?: any, EDUCATION?: any, EVENTS?: any, FASHION_DESIGN?: any, FILM_MEDIA?: any, FITNESS?: any, GAME_PROGRAMMING?: any, GRAPHIC_DESIGN?: any, HARIDRESSING?: any, HOPITALITY_MANAGEMENT?: any, HORTICULTURE?: any, HUMAN_RESOURCES?: any, INTERIOR_DESIGN?: any, INTERNATIONAL_BUSINESS?: any, INTL_HOTEL_MANAGEMENT?: any, LANDSCAPE?: any, LEADERSHIP_MANAGEMENT?: any, MACHINE_LEARNING?: any, MASSAGE?: any, MEDICINE?: any, MENTAL_HEALTH?: any, MUSIC_AUDIO?: any, NURSING?: any, NUTRITION?: any, PROJECT_MANAGEMENT?: any, PUBLIC_HEALTH?: any, SOCIALMEDIA_MARKETING?: any, SOFTWARE_DEVELOPMENT?: any, SPORT?: any, SUPPLYCHAIN_MANAGEMENT?: any, TELECOMMUNICATION?: any, TRAVEL_TOURISM?: any, VETENARY?: any, WEB_DEVELOPMENT?: any, YOGA?: any }, ResolversTypes['CategoriesEnum']>;

export type CloudComputingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CloudComputing'] = ResolversParentTypes['CloudComputing']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['It'] = ResolversParentTypes['It']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  softwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType>;
  softwareDevelopmentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MachineLearningResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['MachineLearning'] = ResolversParentTypes['MachineLearning']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAi?: Resolver<Maybe<ResolversTypes['Ai']>, ParentType, ContextType, Partial<MutationAddAiArgs>>;
  addBlockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType, Partial<MutationAddBlockchainArgs>>;
  addBlogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<MutationAddBlogPostArgs, 'input'>>;
  addBusinessAnalysis?: Resolver<Maybe<ResolversTypes['BusinessAnalysis']>, ParentType, ContextType, Partial<MutationAddBusinessAnalysisArgs>>;
  addCloudComputing?: Resolver<Maybe<ResolversTypes['CloudComputing']>, ParentType, ContextType, Partial<MutationAddCloudComputingArgs>>;
  addComputerNetworking?: Resolver<Maybe<ResolversTypes['ComputerNetworking']>, ParentType, ContextType, Partial<MutationAddComputerNetworkingArgs>>;
  addDataManagement?: Resolver<Maybe<ResolversTypes['DataManagement']>, ParentType, ContextType, Partial<MutationAddDataManagementArgs>>;
  addGameProgramming?: Resolver<Maybe<ResolversTypes['GameProgramming']>, ParentType, ContextType, Partial<MutationAddGameProgrammingArgs>>;
  addIt?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType, RequireFields<MutationAddItArgs, 'input'>>;
  addMachineLearning?: Resolver<Maybe<ResolversTypes['MachineLearning']>, ParentType, ContextType, Partial<MutationAddMachineLearningArgs>>;
  addSoftwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, Partial<MutationAddSoftwareDevelopmentArgs>>;
  addTelecommunication?: Resolver<Maybe<ResolversTypes['Telecommunication']>, ParentType, ContextType, Partial<MutationAddTelecommunicationArgs>>;
  addWebDevelopment?: Resolver<Maybe<ResolversTypes['WebDevelopment']>, ParentType, ContextType, Partial<MutationAddWebDevelopmentArgs>>;
  updateSoftwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, RequireFields<MutationUpdateSoftwareDevelopmentArgs, 'input'>>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ai?: Resolver<Maybe<ResolversTypes['Ai']>, ParentType, ContextType, RequireFields<QueryAiArgs, 'id'>>;
  blockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType, RequireFields<QueryBlockchainArgs, 'id'>>;
  blogCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  blogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<QueryBlogPostArgs, 'id'>>;
  blogPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  businessAnalysis?: Resolver<Maybe<ResolversTypes['BusinessAnalysis']>, ParentType, ContextType, RequireFields<QueryBusinessAnalysisArgs, 'id'>>;
  cloudComputing?: Resolver<Maybe<ResolversTypes['CloudComputing']>, ParentType, ContextType, RequireFields<QueryCloudComputingArgs, 'id'>>;
  computerNetworking?: Resolver<Maybe<ResolversTypes['ComputerNetworking']>, ParentType, ContextType, RequireFields<QueryComputerNetworkingArgs, 'id'>>;
  dataManagement?: Resolver<Maybe<ResolversTypes['DataManagement']>, ParentType, ContextType, RequireFields<QueryDataManagementArgs, 'id'>>;
  gameProgramming?: Resolver<Maybe<ResolversTypes['GameProgramming']>, ParentType, ContextType, RequireFields<QueryGameProgrammingArgs, 'id'>>;
  it?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType, RequireFields<QueryItArgs, 'id'>>;
  machineLearning?: Resolver<Maybe<ResolversTypes['MachineLearning']>, ParentType, ContextType, RequireFields<QueryMachineLearningArgs, 'id'>>;
  softwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, RequireFields<QuerySoftwareDevelopmentArgs, 'id'>>;
  telecommunication?: Resolver<Maybe<ResolversTypes['Telecommunication']>, ParentType, ContextType, RequireFields<QueryTelecommunicationArgs, 'id'>>;
  webDevelopment?: Resolver<Maybe<ResolversTypes['WebDevelopment']>, ParentType, ContextType, RequireFields<QueryWebDevelopmentArgs, 'id'>>;
};

export type SessionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SoftwareDevelopmentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SoftwareDevelopment'] = ResolversParentTypes['SoftwareDevelopment']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
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
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type WebDevelopmentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WebDevelopment'] = ResolversParentTypes['WebDevelopment']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['CategoriesEnum']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Account?: AccountResolvers<ContextType>;
  Ai?: AiResolvers<ContextType>;
  Blockchain?: BlockchainResolvers<ContextType>;
  BlogPost?: BlogPostResolvers<ContextType>;
  BusinessAnalysis?: BusinessAnalysisResolvers<ContextType>;
  CategoriesEnum?: CategoriesEnumResolvers;
  CloudComputing?: CloudComputingResolvers<ContextType>;
  ComputerNetworking?: ComputerNetworkingResolvers<ContextType>;
  DataManagement?: DataManagementResolvers<ContextType>;
  GameProgramming?: GameProgrammingResolvers<ContextType>;
  It?: ItResolvers<ContextType>;
  MachineLearning?: MachineLearningResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SoftwareDevelopment?: SoftwareDevelopmentResolvers<ContextType>;
  Telecommunication?: TelecommunicationResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  VerificationToken?: VerificationTokenResolvers<ContextType>;
  WebDevelopment?: WebDevelopmentResolvers<ContextType>;
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
export const ItFragmentDoc = gql`
    fragment It on It {
  id
  softwareDevelopmentId
}
    `;
export const AiFragmentDoc = gql`
    fragment Ai on Ai {
  id
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
export type AddBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;


export type AddBlogPostMutation = { __typename?: 'Mutation', addBlogPost?: { __typename?: 'BlogPost', id: string, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogCardQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogCardQuery = { __typename?: 'Query', blogCard?: Array<{ __typename?: 'BlogPost', category?: CategoriesEnum | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type BlogCardFragment = { __typename?: 'BlogPost', category?: CategoriesEnum | null, id: string, title?: string | null, subtitle1?: string | null };

export type BlogPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlogPostQuery = { __typename?: 'Query', blogPost?: { __typename?: 'BlogPost', id: string, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogPostFragment = { __typename?: 'BlogPost', id: string, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null> | null };

export type AddItMutationVariables = Exact<{
  input: ItInput;
}>;


export type AddItMutation = { __typename?: 'Mutation', addIt?: { __typename?: 'It', id: string, softwareDevelopmentId?: string | null } | null };

export type ItQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ItQuery = { __typename?: 'Query', it?: { __typename?: 'It', id: string, softwareDevelopmentId?: string | null } | null };

export type ItFragment = { __typename?: 'It', id: string, softwareDevelopmentId?: string | null };

export type AddAiMutationVariables = Exact<{
  input: AiInput;
}>;


export type AddAiMutation = { __typename?: 'Mutation', addAi?: { __typename?: 'Ai', id?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AiQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AiQuery = { __typename?: 'Query', ai?: { __typename?: 'Ai', id?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AiFragment = { __typename?: 'Ai', id?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddBlockchainMutationVariables = Exact<{
  input: BlockchainInput;
}>;


export type AddBlockchainMutation = { __typename?: 'Mutation', addBlockchain?: { __typename?: 'Blockchain', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlockchainQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlockchainQuery = { __typename?: 'Query', blockchain?: { __typename?: 'Blockchain', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlockchainFragment = { __typename?: 'Blockchain', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddBusinessAnalysisMutationVariables = Exact<{
  input: BusinessAnalysisInput;
}>;


export type AddBusinessAnalysisMutation = { __typename?: 'Mutation', addBusinessAnalysis?: { __typename?: 'BusinessAnalysis', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BusinessAnalysisQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BusinessAnalysisQuery = { __typename?: 'Query', businessAnalysis?: { __typename?: 'BusinessAnalysis', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BusinessAnalysisFragment = { __typename?: 'BusinessAnalysis', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddCloudComputingMutationVariables = Exact<{
  input: CloudComputingInput;
}>;


export type AddCloudComputingMutation = { __typename?: 'Mutation', addCloudComputing?: { __typename?: 'CloudComputing', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type CloudComputingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CloudComputingQuery = { __typename?: 'Query', cloudComputing?: { __typename?: 'CloudComputing', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type CloudComputingFragment = { __typename?: 'CloudComputing', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddComputerNetworkingMutationVariables = Exact<{
  input: ComputerNetworkingInput;
}>;


export type AddComputerNetworkingMutation = { __typename?: 'Mutation', addComputerNetworking?: { __typename?: 'ComputerNetworking', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ComputerNetworkingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ComputerNetworkingQuery = { __typename?: 'Query', computerNetworking?: { __typename?: 'ComputerNetworking', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ComputerNetworkingFragment = { __typename?: 'ComputerNetworking', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddDataManagementMutationVariables = Exact<{
  input: DataManagementInput;
}>;


export type AddDataManagementMutation = { __typename?: 'Mutation', addDataManagement?: { __typename?: 'DataManagement', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DataManagementQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DataManagementQuery = { __typename?: 'Query', dataManagement?: { __typename?: 'DataManagement', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DataManagementFragment = { __typename?: 'DataManagement', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddGameProgrammingMutationVariables = Exact<{
  input: GameProgrammingInput;
}>;


export type AddGameProgrammingMutation = { __typename?: 'Mutation', addGameProgramming?: { __typename?: 'GameProgramming', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type GameProgrammingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GameProgrammingQuery = { __typename?: 'Query', gameProgramming?: { __typename?: 'GameProgramming', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type GameProgrammingFragment = { __typename?: 'GameProgramming', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddMachineLearningMutationVariables = Exact<{
  input: MachineLearningInput;
}>;


export type AddMachineLearningMutation = { __typename?: 'Mutation', addMachineLearning?: { __typename?: 'MachineLearning', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MachineLearningQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MachineLearningQuery = { __typename?: 'Query', machineLearning?: { __typename?: 'MachineLearning', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MachineLearningFragment = { __typename?: 'MachineLearning', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddSoftwareDevelopmentMutationVariables = Exact<{
  input: SoftwareDevelopmentInput;
}>;


export type AddSoftwareDevelopmentMutation = { __typename?: 'Mutation', addSoftwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type SoftwareDevelopmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SoftwareDevelopmentQuery = { __typename?: 'Query', softwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type SoftwareDevelopmentFragment = { __typename?: 'SoftwareDevelopment', id: string, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateSoftwareDevelopmentMutationVariables = Exact<{
  input: SoftwareDevelopmentInput;
}>;


export type UpdateSoftwareDevelopmentMutation = { __typename?: 'Mutation', updateSoftwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddTelecommunicationMutationVariables = Exact<{
  input: TelecommunicationInput;
}>;


export type AddTelecommunicationMutation = { __typename?: 'Mutation', addTelecommunication?: { __typename?: 'Telecommunication', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type TelecommunicationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TelecommunicationQuery = { __typename?: 'Query', telecommunication?: { __typename?: 'Telecommunication', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type TelecommunicationFragment = { __typename?: 'Telecommunication', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type AddWebDevelopmentMutationVariables = Exact<{
  input: WebDevelopmentInput;
}>;


export type AddWebDevelopmentMutation = { __typename?: 'Mutation', addWebDevelopment?: { __typename?: 'WebDevelopment', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type WebDevelopmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebDevelopmentQuery = { __typename?: 'Query', webDevelopment?: { __typename?: 'WebDevelopment', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type WebDevelopmentFragment = { __typename?: 'WebDevelopment', id?: string | null, category?: CategoriesEnum | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };
