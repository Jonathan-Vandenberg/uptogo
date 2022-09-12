import { GraphQLResolveInfo } from 'graphql';
import { Categories as CategoriesModel, SoftwareDevelopment as SoftwareDevelopmentModel, ComputerNetworking as ComputerNetworkingModel, CloudComputing as CloudComputingModel, BusinessAnalysis as BusinessAnalysisModel, Telecommunication as TelecommunicationModel, GameProgramming as GameProgrammingModel, WebDevelopment as WebDevelopmentModel, MachineLearning as MachineLearningModel, DataManagement as DataManagementModel, Blockchain as BlockchainModel, Ai as AiModel, BlogPost as BlogPostModel, It as ItModel, Session as SessionModel, User as UserModel, VerificationToken as VerificationTokenModel } from '@prisma/client';
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
  updateAi?: Maybe<Ai>;
  updateBlockchain?: Maybe<Blockchain>;
  updateBlogPost?: Maybe<BlogPost>;
  updateBusinessAnalysis?: Maybe<BusinessAnalysis>;
  updateCloudComputing?: Maybe<CloudComputing>;
  updateComputerNetworking?: Maybe<ComputerNetworking>;
  updateDataManagement?: Maybe<DataManagement>;
  updateGameProgramming?: Maybe<GameProgramming>;
  updateIt?: Maybe<It>;
  updateMachineLearning?: Maybe<MachineLearning>;
  updateSoftwareDevelopment?: Maybe<SoftwareDevelopment>;
  updateTelecommunication?: Maybe<Telecommunication>;
  updateWebDevelopment?: Maybe<WebDevelopment>;
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


export type MutationUpdateAiArgs = {
  input: AiInput;
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


export type MutationUpdateCloudComputingArgs = {
  input: CloudComputingInput;
};


export type MutationUpdateComputerNetworkingArgs = {
  input: ComputerNetworkingInput;
};


export type MutationUpdateDataManagementArgs = {
  input: DataManagementInput;
};


export type MutationUpdateGameProgrammingArgs = {
  input: GameProgrammingInput;
};


export type MutationUpdateItArgs = {
  input: ItInput;
};


export type MutationUpdateMachineLearningArgs = {
  input: MachineLearningInput;
};


export type MutationUpdateSoftwareDevelopmentArgs = {
  input: SoftwareDevelopmentInput;
};


export type MutationUpdateTelecommunicationArgs = {
  input: TelecommunicationInput;
};


export type MutationUpdateWebDevelopmentArgs = {
  input: WebDevelopmentInput;
};

export type Query = {
  __typename?: 'Query';
  ai?: Maybe<Ai>;
  aiCard?: Maybe<Array<Maybe<Ai>>>;
  blockchain?: Maybe<Blockchain>;
  blockchainCard?: Maybe<Array<Maybe<Blockchain>>>;
  blogCard?: Maybe<Array<Maybe<BlogPost>>>;
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  businessAnalysis?: Maybe<BusinessAnalysis>;
  businessAnalysisCard?: Maybe<Array<Maybe<BusinessAnalysis>>>;
  cloudComputing?: Maybe<CloudComputing>;
  cloudComputingCard?: Maybe<Array<Maybe<CloudComputing>>>;
  computerNetworking?: Maybe<ComputerNetworking>;
  computerNetworkingCard?: Maybe<Array<Maybe<ComputerNetworking>>>;
  dataManagement?: Maybe<DataManagement>;
  dataManagementCard?: Maybe<Array<Maybe<DataManagement>>>;
  gameProgramming?: Maybe<GameProgramming>;
  gameProgrammingCard?: Maybe<Array<Maybe<GameProgramming>>>;
  it?: Maybe<It>;
  machineLearning?: Maybe<MachineLearning>;
  machineLearningCard?: Maybe<Array<Maybe<MachineLearning>>>;
  softwareDevelopment?: Maybe<SoftwareDevelopment>;
  softwareDevelopmentCard?: Maybe<Array<Maybe<SoftwareDevelopment>>>;
  telecommunication?: Maybe<Telecommunication>;
  telecommunicationCard?: Maybe<Array<Maybe<Telecommunication>>>;
  webDevelopment?: Maybe<WebDevelopment>;
  webDevelopmentCard?: Maybe<Array<Maybe<WebDevelopment>>>;
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
  Categories: ResolverTypeWrapper<CategoriesModel>;
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
  Categories: CategoriesModel;
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
  updateAi?: Resolver<Maybe<ResolversTypes['Ai']>, ParentType, ContextType, RequireFields<MutationUpdateAiArgs, 'input'>>;
  updateBlockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType, RequireFields<MutationUpdateBlockchainArgs, 'input'>>;
  updateBlogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<MutationUpdateBlogPostArgs, 'input'>>;
  updateBusinessAnalysis?: Resolver<Maybe<ResolversTypes['BusinessAnalysis']>, ParentType, ContextType, RequireFields<MutationUpdateBusinessAnalysisArgs, 'input'>>;
  updateCloudComputing?: Resolver<Maybe<ResolversTypes['CloudComputing']>, ParentType, ContextType, RequireFields<MutationUpdateCloudComputingArgs, 'input'>>;
  updateComputerNetworking?: Resolver<Maybe<ResolversTypes['ComputerNetworking']>, ParentType, ContextType, RequireFields<MutationUpdateComputerNetworkingArgs, 'input'>>;
  updateDataManagement?: Resolver<Maybe<ResolversTypes['DataManagement']>, ParentType, ContextType, RequireFields<MutationUpdateDataManagementArgs, 'input'>>;
  updateGameProgramming?: Resolver<Maybe<ResolversTypes['GameProgramming']>, ParentType, ContextType, RequireFields<MutationUpdateGameProgrammingArgs, 'input'>>;
  updateIt?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType, RequireFields<MutationUpdateItArgs, 'input'>>;
  updateMachineLearning?: Resolver<Maybe<ResolversTypes['MachineLearning']>, ParentType, ContextType, RequireFields<MutationUpdateMachineLearningArgs, 'input'>>;
  updateSoftwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, RequireFields<MutationUpdateSoftwareDevelopmentArgs, 'input'>>;
  updateTelecommunication?: Resolver<Maybe<ResolversTypes['Telecommunication']>, ParentType, ContextType, RequireFields<MutationUpdateTelecommunicationArgs, 'input'>>;
  updateWebDevelopment?: Resolver<Maybe<ResolversTypes['WebDevelopment']>, ParentType, ContextType, RequireFields<MutationUpdateWebDevelopmentArgs, 'input'>>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ai?: Resolver<Maybe<ResolversTypes['Ai']>, ParentType, ContextType, RequireFields<QueryAiArgs, 'id'>>;
  aiCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ai']>>>, ParentType, ContextType>;
  blockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType, RequireFields<QueryBlockchainArgs, 'id'>>;
  blockchainCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Blockchain']>>>, ParentType, ContextType>;
  blogCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  blogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<QueryBlogPostArgs, 'id'>>;
  blogPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  businessAnalysis?: Resolver<Maybe<ResolversTypes['BusinessAnalysis']>, ParentType, ContextType, RequireFields<QueryBusinessAnalysisArgs, 'id'>>;
  businessAnalysisCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['BusinessAnalysis']>>>, ParentType, ContextType>;
  cloudComputing?: Resolver<Maybe<ResolversTypes['CloudComputing']>, ParentType, ContextType, RequireFields<QueryCloudComputingArgs, 'id'>>;
  cloudComputingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudComputing']>>>, ParentType, ContextType>;
  computerNetworking?: Resolver<Maybe<ResolversTypes['ComputerNetworking']>, ParentType, ContextType, RequireFields<QueryComputerNetworkingArgs, 'id'>>;
  computerNetworkingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComputerNetworking']>>>, ParentType, ContextType>;
  dataManagement?: Resolver<Maybe<ResolversTypes['DataManagement']>, ParentType, ContextType, RequireFields<QueryDataManagementArgs, 'id'>>;
  dataManagementCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataManagement']>>>, ParentType, ContextType>;
  gameProgramming?: Resolver<Maybe<ResolversTypes['GameProgramming']>, ParentType, ContextType, RequireFields<QueryGameProgrammingArgs, 'id'>>;
  gameProgrammingCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['GameProgramming']>>>, ParentType, ContextType>;
  it?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType, RequireFields<QueryItArgs, 'id'>>;
  machineLearning?: Resolver<Maybe<ResolversTypes['MachineLearning']>, ParentType, ContextType, RequireFields<QueryMachineLearningArgs, 'id'>>;
  machineLearningCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['MachineLearning']>>>, ParentType, ContextType>;
  softwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, RequireFields<QuerySoftwareDevelopmentArgs, 'id'>>;
  softwareDevelopmentCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['SoftwareDevelopment']>>>, ParentType, ContextType>;
  telecommunication?: Resolver<Maybe<ResolversTypes['Telecommunication']>, ParentType, ContextType, RequireFields<QueryTelecommunicationArgs, 'id'>>;
  telecommunicationCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['Telecommunication']>>>, ParentType, ContextType>;
  webDevelopment?: Resolver<Maybe<ResolversTypes['WebDevelopment']>, ParentType, ContextType, RequireFields<QueryWebDevelopmentArgs, 'id'>>;
  webDevelopmentCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebDevelopment']>>>, ParentType, ContextType>;
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
  Categories?: CategoriesResolvers<ContextType>;
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


export type AddBlogPostMutation = { __typename?: 'Mutation', addBlogPost?: { __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogCardQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogCardQuery = { __typename?: 'Query', blogCard?: Array<{ __typename?: 'BlogPost', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type BlogCardFragment = { __typename?: 'BlogPost', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type BlogPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlogPostQuery = { __typename?: 'Query', blogPost?: { __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogPostFragment = { __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null> | null };

export type AddAiMutationVariables = Exact<{
  input: AiInput;
}>;


export type AddAiMutation = { __typename?: 'Mutation', addAi?: { __typename?: 'Ai', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AiQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AiQuery = { __typename?: 'Query', ai?: { __typename?: 'Ai', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AiCardQueryVariables = Exact<{ [key: string]: never; }>;


export type AiCardQuery = { __typename?: 'Query', aiCard?: Array<{ __typename?: 'Ai', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type AiCardFragment = { __typename?: 'Ai', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type AiFragment = { __typename?: 'Ai', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateAiMutationVariables = Exact<{
  input: AiInput;
}>;


export type UpdateAiMutation = { __typename?: 'Mutation', updateAi?: { __typename?: 'Ai', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddBlockchainMutationVariables = Exact<{
  input: BlockchainInput;
}>;


export type AddBlockchainMutation = { __typename?: 'Mutation', addBlockchain?: { __typename?: 'Blockchain', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlockchainQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlockchainQuery = { __typename?: 'Query', blockchain?: { __typename?: 'Blockchain', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlockchainCardQueryVariables = Exact<{ [key: string]: never; }>;


export type BlockchainCardQuery = { __typename?: 'Query', blockchainCard?: Array<{ __typename?: 'Blockchain', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type BlockchainCardFragment = { __typename?: 'Blockchain', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type BlockchainFragment = { __typename?: 'Blockchain', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateBlockchainMutationVariables = Exact<{
  input: BlockchainInput;
}>;


export type UpdateBlockchainMutation = { __typename?: 'Mutation', updateBlockchain?: { __typename?: 'Blockchain', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddBusinessAnalysisMutationVariables = Exact<{
  input: BusinessAnalysisInput;
}>;


export type AddBusinessAnalysisMutation = { __typename?: 'Mutation', addBusinessAnalysis?: { __typename?: 'BusinessAnalysis', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BusinessAnalysisCardQueryVariables = Exact<{ [key: string]: never; }>;


export type BusinessAnalysisCardQuery = { __typename?: 'Query', businessAnalysisCard?: Array<{ __typename?: 'BusinessAnalysis', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type BusinessAnalysisCardFragment = { __typename?: 'BusinessAnalysis', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type BusinessAnalysisQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BusinessAnalysisQuery = { __typename?: 'Query', businessAnalysis?: { __typename?: 'BusinessAnalysis', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BusinessAnalysisFragment = { __typename?: 'BusinessAnalysis', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateBusinessAnalysisMutationVariables = Exact<{
  input: BusinessAnalysisInput;
}>;


export type UpdateBusinessAnalysisMutation = { __typename?: 'Mutation', updateBusinessAnalysis?: { __typename?: 'BusinessAnalysis', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddCloudComputingMutationVariables = Exact<{
  input: CloudComputingInput;
}>;


export type AddCloudComputingMutation = { __typename?: 'Mutation', addCloudComputing?: { __typename?: 'CloudComputing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type CloudComputingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CloudComputingQuery = { __typename?: 'Query', cloudComputing?: { __typename?: 'CloudComputing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type CloudComputingCardQueryVariables = Exact<{ [key: string]: never; }>;


export type CloudComputingCardQuery = { __typename?: 'Query', cloudComputingCard?: Array<{ __typename?: 'CloudComputing', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type CloudComputingCardFragment = { __typename?: 'CloudComputing', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type CloudComputingFragment = { __typename?: 'CloudComputing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateCloudComputingMutationVariables = Exact<{
  input: CloudComputingInput;
}>;


export type UpdateCloudComputingMutation = { __typename?: 'Mutation', updateCloudComputing?: { __typename?: 'CloudComputing', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddComputerNetworkingMutationVariables = Exact<{
  input: ComputerNetworkingInput;
}>;


export type AddComputerNetworkingMutation = { __typename?: 'Mutation', addComputerNetworking?: { __typename?: 'ComputerNetworking', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ComputerNetworkingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ComputerNetworkingQuery = { __typename?: 'Query', computerNetworking?: { __typename?: 'ComputerNetworking', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ComputerNetworkingCardQueryVariables = Exact<{ [key: string]: never; }>;


export type ComputerNetworkingCardQuery = { __typename?: 'Query', computerNetworkingCard?: Array<{ __typename?: 'ComputerNetworking', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type ComputerNetworkingCardFragment = { __typename?: 'ComputerNetworking', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type ComputerNetworkingFragment = { __typename?: 'ComputerNetworking', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateComputerNetworkingMutationVariables = Exact<{
  input: ComputerNetworkingInput;
}>;


export type UpdateComputerNetworkingMutation = { __typename?: 'Mutation', updateComputerNetworking?: { __typename?: 'ComputerNetworking', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddDataManagementMutationVariables = Exact<{
  input: DataManagementInput;
}>;


export type AddDataManagementMutation = { __typename?: 'Mutation', addDataManagement?: { __typename?: 'DataManagement', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DataManagementQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DataManagementQuery = { __typename?: 'Query', dataManagement?: { __typename?: 'DataManagement', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type DataManagementCardQueryVariables = Exact<{ [key: string]: never; }>;


export type DataManagementCardQuery = { __typename?: 'Query', dataManagementCard?: Array<{ __typename?: 'DataManagement', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type DataManagementCardFragment = { __typename?: 'DataManagement', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type DataManagementFragment = { __typename?: 'DataManagement', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateDataManagementMutationVariables = Exact<{
  input: DataManagementInput;
}>;


export type UpdateDataManagementMutation = { __typename?: 'Mutation', updateDataManagement?: { __typename?: 'DataManagement', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddGameProgrammingMutationVariables = Exact<{
  input: GameProgrammingInput;
}>;


export type AddGameProgrammingMutation = { __typename?: 'Mutation', addGameProgramming?: { __typename?: 'GameProgramming', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type GameProgrammingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GameProgrammingQuery = { __typename?: 'Query', gameProgramming?: { __typename?: 'GameProgramming', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type GameProgrammingCardQueryVariables = Exact<{ [key: string]: never; }>;


export type GameProgrammingCardQuery = { __typename?: 'Query', gameProgrammingCard?: Array<{ __typename?: 'GameProgramming', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type GameProgrammingFragment = { __typename?: 'GameProgramming', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type GameProgrammingCardFragment = { __typename?: 'GameProgramming', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type UpdateGameProgrammingMutationVariables = Exact<{
  input: GameProgrammingInput;
}>;


export type UpdateGameProgrammingMutation = { __typename?: 'Mutation', updateGameProgramming?: { __typename?: 'GameProgramming', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddItMutationVariables = Exact<{
  input: ItInput;
}>;


export type AddItMutation = { __typename?: 'Mutation', addIt?: { __typename?: 'It', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ItQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ItQuery = { __typename?: 'Query', it?: { __typename?: 'It', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type ItFragment = { __typename?: 'It', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateItMutationVariables = Exact<{
  input: ItInput;
}>;


export type UpdateItMutation = { __typename?: 'Mutation', updateIt?: { __typename?: 'It', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddMachineLearningMutationVariables = Exact<{
  input: MachineLearningInput;
}>;


export type AddMachineLearningMutation = { __typename?: 'Mutation', addMachineLearning?: { __typename?: 'MachineLearning', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MachineLearningQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MachineLearningQuery = { __typename?: 'Query', machineLearning?: { __typename?: 'MachineLearning', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type MachineLearningCardQueryVariables = Exact<{ [key: string]: never; }>;


export type MachineLearningCardQuery = { __typename?: 'Query', machineLearningCard?: Array<{ __typename?: 'MachineLearning', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type MachineLearningCardFragment = { __typename?: 'MachineLearning', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type MachineLearningFragment = { __typename?: 'MachineLearning', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateMachineLearningMutationVariables = Exact<{
  input: MachineLearningInput;
}>;


export type UpdateMachineLearningMutation = { __typename?: 'Mutation', updateMachineLearning?: { __typename?: 'MachineLearning', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddSoftwareDevelopmentMutationVariables = Exact<{
  input: SoftwareDevelopmentInput;
}>;


export type AddSoftwareDevelopmentMutation = { __typename?: 'Mutation', addSoftwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type SoftwareDevelopmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SoftwareDevelopmentQuery = { __typename?: 'Query', softwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type SoftwareDevelopmentCardQueryVariables = Exact<{ [key: string]: never; }>;


export type SoftwareDevelopmentCardQuery = { __typename?: 'Query', softwareDevelopmentCard?: Array<{ __typename?: 'SoftwareDevelopment', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type SoftwareDevelopmentCardFragment = { __typename?: 'SoftwareDevelopment', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type SoftwareDevelopmentFragment = { __typename?: 'SoftwareDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateSoftwareDevelopmentMutationVariables = Exact<{
  input: SoftwareDevelopmentInput;
}>;


export type UpdateSoftwareDevelopmentMutation = { __typename?: 'Mutation', updateSoftwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddTelecommunicationMutationVariables = Exact<{
  input: TelecommunicationInput;
}>;


export type AddTelecommunicationMutation = { __typename?: 'Mutation', addTelecommunication?: { __typename?: 'Telecommunication', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type TelecommunicationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TelecommunicationQuery = { __typename?: 'Query', telecommunication?: { __typename?: 'Telecommunication', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type TelecommunicationCardQueryVariables = Exact<{ [key: string]: never; }>;


export type TelecommunicationCardQuery = { __typename?: 'Query', telecommunicationCard?: Array<{ __typename?: 'Telecommunication', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type TelecommunicationCardFragment = { __typename?: 'Telecommunication', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type TelecommunicationFragment = { __typename?: 'Telecommunication', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateTelecommunicationMutationVariables = Exact<{
  input: TelecommunicationInput;
}>;


export type UpdateTelecommunicationMutation = { __typename?: 'Mutation', updateTelecommunication?: { __typename?: 'Telecommunication', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddWebDevelopmentMutationVariables = Exact<{
  input: WebDevelopmentInput;
}>;


export type AddWebDevelopmentMutation = { __typename?: 'Mutation', addWebDevelopment?: { __typename?: 'WebDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type UpdateWebDevelopmentMutationVariables = Exact<{
  input: WebDevelopmentInput;
}>;


export type UpdateWebDevelopmentMutation = { __typename?: 'Mutation', updateWebDevelopment?: { __typename?: 'WebDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type WebDevelopmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebDevelopmentQuery = { __typename?: 'Query', webDevelopment?: { __typename?: 'WebDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type WebDevelopmentCardQueryVariables = Exact<{ [key: string]: never; }>;


export type WebDevelopmentCardQuery = { __typename?: 'Query', webDevelopmentCard?: Array<{ __typename?: 'WebDevelopment', category?: string | null, id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type WebDevelopmentCardFragment = { __typename?: 'WebDevelopment', category?: string | null, id: string, title?: string | null, subtitle1?: string | null };

export type WebDevelopmentFragment = { __typename?: 'WebDevelopment', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;


export type UpdateBlogPostMutation = { __typename?: 'Mutation', updateBlogPost?: { __typename?: 'BlogPost', id: string, category?: string | null, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };
