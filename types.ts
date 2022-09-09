import { GraphQLResolveInfo } from 'graphql';
import { SoftwareDevelopment as SoftwareDevelopmentModel, ComputerNetworking as ComputerNetworkingModel, CloudComputing as CloudComputingModel, BusinessAnalysis as BusinessAnalysisModel, Telecommunication as TelecommunicationModel, GameProgramming as GameProgrammingModel, WebDevelopment as WebDevelopmentModel, MachineLearing as MachineLearingModel, DataManagement as DataManagementModel, Blockchain as BlockchainModel, Ai as AiModel, BlogPost as BlogPostModel, It as ItModel, Session as SessionModel, User as UserModel, VerificationToken as VerificationTokenModel } from '@prisma/client';
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

export type CloudComputing = {
  __typename?: 'CloudComputing';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
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

export type Courses = {
  __typename?: 'Courses';
  Design?: Maybe<Design>;
  Health?: Maybe<Health>;
  Hospitality?: Maybe<Hospitality>;
  It?: Maybe<It>;
  Management?: Maybe<Management>;
  Trades?: Maybe<Trades>;
};

export type DataManagement = {
  __typename?: 'DataManagement';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
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

export type Design = {
  __typename?: 'Design';
  Acting?: Maybe<BlogPost>;
  Animation?: Maybe<BlogPost>;
  DigitalMedia?: Maybe<BlogPost>;
  FashionDesign?: Maybe<BlogPost>;
  Film?: Maybe<BlogPost>;
  GraphicDesign?: Maybe<BlogPost>;
  InteriorDesign?: Maybe<BlogPost>;
  Landscape?: Maybe<BlogPost>;
  Music?: Maybe<BlogPost>;
};

export type GameProgramming = {
  __typename?: 'GameProgramming';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
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

export type Health = {
  __typename?: 'Health';
  AgedCare?: Maybe<BlogPost>;
  Dental?: Maybe<BlogPost>;
  Massage?: Maybe<BlogPost>;
  Medicine?: Maybe<BlogPost>;
  MentalHealth?: Maybe<BlogPost>;
  Nursing?: Maybe<BlogPost>;
  Nutrition?: Maybe<BlogPost>;
  PublicHealth?: Maybe<BlogPost>;
  Veterinary?: Maybe<BlogPost>;
};

export type Hospitality = {
  __typename?: 'Hospitality';
  Baking?: Maybe<BlogPost>;
  CommercialCooking?: Maybe<BlogPost>;
  Events?: Maybe<BlogPost>;
  HospitalityManagement?: Maybe<BlogPost>;
  HotelManagement?: Maybe<BlogPost>;
  TravelTourism?: Maybe<BlogPost>;
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

export type MachineLearing = {
  __typename?: 'MachineLearing';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
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

export type MachineLearingInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
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

export type Management = {
  __typename?: 'Management';
  AgriBusinessManagement?: Maybe<BlogPost>;
  BankingManagement?: Maybe<BlogPost>;
  BusinessManagement?: Maybe<BlogPost>;
  HumanResources?: Maybe<BlogPost>;
  InternationalBusiness?: Maybe<BlogPost>;
  LeadershipManagement?: Maybe<BlogPost>;
  ProjectManagement?: Maybe<BlogPost>;
  SocialMediaMarketing?: Maybe<BlogPost>;
  SupplyManagement?: Maybe<BlogPost>;
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
  addDesign?: Maybe<Design>;
  addGameProgramming?: Maybe<GameProgramming>;
  addHealth?: Maybe<Health>;
  addHospitality?: Maybe<Hospitality>;
  addIt?: Maybe<It>;
  addMachineLearing?: Maybe<MachineLearing>;
  addSoftwareDevelopment?: Maybe<SoftwareDevelopment>;
  addTelecommunication?: Maybe<Telecommunication>;
  addTrades?: Maybe<Trades>;
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


export type MutationAddDesignArgs = {
  input: BlogPostInput;
};


export type MutationAddGameProgrammingArgs = {
  input?: InputMaybe<GameProgrammingInput>;
};


export type MutationAddHealthArgs = {
  input: BlogPostInput;
};


export type MutationAddHospitalityArgs = {
  input: BlogPostInput;
};


export type MutationAddItArgs = {
  input: ItInput;
};


export type MutationAddMachineLearingArgs = {
  input?: InputMaybe<MachineLearingInput>;
};


export type MutationAddSoftwareDevelopmentArgs = {
  input?: InputMaybe<SoftwareDevelopmentInput>;
};


export type MutationAddTelecommunicationArgs = {
  input?: InputMaybe<TelecommunicationInput>;
};


export type MutationAddTradesArgs = {
  input: BlogPostInput;
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
  machineLearing?: Maybe<MachineLearing>;
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


export type QueryMachineLearingArgs = {
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

export type Trades = {
  __typename?: 'Trades';
  Automotive?: Maybe<BlogPost>;
  Beauty?: Maybe<BlogPost>;
  Carpentry?: Maybe<BlogPost>;
  Construction?: Maybe<BlogPost>;
  Education?: Maybe<BlogPost>;
  Fitness?: Maybe<BlogPost>;
  Hairdressing?: Maybe<BlogPost>;
  Horticulture?: Maybe<BlogPost>;
  Sport?: Maybe<BlogPost>;
  Yoga?: Maybe<BlogPost>;
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
  CloudComputing: ResolverTypeWrapper<CloudComputingModel>;
  CloudComputingInput: CloudComputingInput;
  ComputerNetworking: ResolverTypeWrapper<ComputerNetworkingModel>;
  ComputerNetworkingInput: ComputerNetworkingInput;
  Courses: ResolverTypeWrapper<Omit<Courses, 'Design' | 'Health' | 'Hospitality' | 'It' | 'Management' | 'Trades'> & { Design?: Maybe<ResolversTypes['Design']>, Health?: Maybe<ResolversTypes['Health']>, Hospitality?: Maybe<ResolversTypes['Hospitality']>, It?: Maybe<ResolversTypes['It']>, Management?: Maybe<ResolversTypes['Management']>, Trades?: Maybe<ResolversTypes['Trades']> }>;
  DataManagement: ResolverTypeWrapper<DataManagementModel>;
  DataManagementInput: DataManagementInput;
  Design: ResolverTypeWrapper<Omit<Design, 'Acting' | 'Animation' | 'DigitalMedia' | 'FashionDesign' | 'Film' | 'GraphicDesign' | 'InteriorDesign' | 'Landscape' | 'Music'> & { Acting?: Maybe<ResolversTypes['BlogPost']>, Animation?: Maybe<ResolversTypes['BlogPost']>, DigitalMedia?: Maybe<ResolversTypes['BlogPost']>, FashionDesign?: Maybe<ResolversTypes['BlogPost']>, Film?: Maybe<ResolversTypes['BlogPost']>, GraphicDesign?: Maybe<ResolversTypes['BlogPost']>, InteriorDesign?: Maybe<ResolversTypes['BlogPost']>, Landscape?: Maybe<ResolversTypes['BlogPost']>, Music?: Maybe<ResolversTypes['BlogPost']> }>;
  GameProgramming: ResolverTypeWrapper<GameProgrammingModel>;
  GameProgrammingInput: GameProgrammingInput;
  Health: ResolverTypeWrapper<Omit<Health, 'AgedCare' | 'Dental' | 'Massage' | 'Medicine' | 'MentalHealth' | 'Nursing' | 'Nutrition' | 'PublicHealth' | 'Veterinary'> & { AgedCare?: Maybe<ResolversTypes['BlogPost']>, Dental?: Maybe<ResolversTypes['BlogPost']>, Massage?: Maybe<ResolversTypes['BlogPost']>, Medicine?: Maybe<ResolversTypes['BlogPost']>, MentalHealth?: Maybe<ResolversTypes['BlogPost']>, Nursing?: Maybe<ResolversTypes['BlogPost']>, Nutrition?: Maybe<ResolversTypes['BlogPost']>, PublicHealth?: Maybe<ResolversTypes['BlogPost']>, Veterinary?: Maybe<ResolversTypes['BlogPost']> }>;
  Hospitality: ResolverTypeWrapper<Omit<Hospitality, 'Baking' | 'CommercialCooking' | 'Events' | 'HospitalityManagement' | 'HotelManagement' | 'TravelTourism'> & { Baking?: Maybe<ResolversTypes['BlogPost']>, CommercialCooking?: Maybe<ResolversTypes['BlogPost']>, Events?: Maybe<ResolversTypes['BlogPost']>, HospitalityManagement?: Maybe<ResolversTypes['BlogPost']>, HotelManagement?: Maybe<ResolversTypes['BlogPost']>, TravelTourism?: Maybe<ResolversTypes['BlogPost']> }>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  It: ResolverTypeWrapper<ItModel>;
  ItInput: ItInput;
  MachineLearing: ResolverTypeWrapper<MachineLearingModel>;
  MachineLearingInput: MachineLearingInput;
  Management: ResolverTypeWrapper<Omit<Management, 'AgriBusinessManagement' | 'BankingManagement' | 'BusinessManagement' | 'HumanResources' | 'InternationalBusiness' | 'LeadershipManagement' | 'ProjectManagement' | 'SocialMediaMarketing' | 'SupplyManagement'> & { AgriBusinessManagement?: Maybe<ResolversTypes['BlogPost']>, BankingManagement?: Maybe<ResolversTypes['BlogPost']>, BusinessManagement?: Maybe<ResolversTypes['BlogPost']>, HumanResources?: Maybe<ResolversTypes['BlogPost']>, InternationalBusiness?: Maybe<ResolversTypes['BlogPost']>, LeadershipManagement?: Maybe<ResolversTypes['BlogPost']>, ProjectManagement?: Maybe<ResolversTypes['BlogPost']>, SocialMediaMarketing?: Maybe<ResolversTypes['BlogPost']>, SupplyManagement?: Maybe<ResolversTypes['BlogPost']> }>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Session: ResolverTypeWrapper<SessionModel>;
  SoftwareDevelopment: ResolverTypeWrapper<SoftwareDevelopmentModel>;
  SoftwareDevelopmentInput: SoftwareDevelopmentInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Telecommunication: ResolverTypeWrapper<TelecommunicationModel>;
  TelecommunicationInput: TelecommunicationInput;
  Trades: ResolverTypeWrapper<Omit<Trades, 'Automotive' | 'Beauty' | 'Carpentry' | 'Construction' | 'Education' | 'Fitness' | 'Hairdressing' | 'Horticulture' | 'Sport' | 'Yoga'> & { Automotive?: Maybe<ResolversTypes['BlogPost']>, Beauty?: Maybe<ResolversTypes['BlogPost']>, Carpentry?: Maybe<ResolversTypes['BlogPost']>, Construction?: Maybe<ResolversTypes['BlogPost']>, Education?: Maybe<ResolversTypes['BlogPost']>, Fitness?: Maybe<ResolversTypes['BlogPost']>, Hairdressing?: Maybe<ResolversTypes['BlogPost']>, Horticulture?: Maybe<ResolversTypes['BlogPost']>, Sport?: Maybe<ResolversTypes['BlogPost']>, Yoga?: Maybe<ResolversTypes['BlogPost']> }>;
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
  Courses: Omit<Courses, 'Design' | 'Health' | 'Hospitality' | 'It' | 'Management' | 'Trades'> & { Design?: Maybe<ResolversParentTypes['Design']>, Health?: Maybe<ResolversParentTypes['Health']>, Hospitality?: Maybe<ResolversParentTypes['Hospitality']>, It?: Maybe<ResolversParentTypes['It']>, Management?: Maybe<ResolversParentTypes['Management']>, Trades?: Maybe<ResolversParentTypes['Trades']> };
  DataManagement: DataManagementModel;
  DataManagementInput: DataManagementInput;
  Design: Omit<Design, 'Acting' | 'Animation' | 'DigitalMedia' | 'FashionDesign' | 'Film' | 'GraphicDesign' | 'InteriorDesign' | 'Landscape' | 'Music'> & { Acting?: Maybe<ResolversParentTypes['BlogPost']>, Animation?: Maybe<ResolversParentTypes['BlogPost']>, DigitalMedia?: Maybe<ResolversParentTypes['BlogPost']>, FashionDesign?: Maybe<ResolversParentTypes['BlogPost']>, Film?: Maybe<ResolversParentTypes['BlogPost']>, GraphicDesign?: Maybe<ResolversParentTypes['BlogPost']>, InteriorDesign?: Maybe<ResolversParentTypes['BlogPost']>, Landscape?: Maybe<ResolversParentTypes['BlogPost']>, Music?: Maybe<ResolversParentTypes['BlogPost']> };
  GameProgramming: GameProgrammingModel;
  GameProgrammingInput: GameProgrammingInput;
  Health: Omit<Health, 'AgedCare' | 'Dental' | 'Massage' | 'Medicine' | 'MentalHealth' | 'Nursing' | 'Nutrition' | 'PublicHealth' | 'Veterinary'> & { AgedCare?: Maybe<ResolversParentTypes['BlogPost']>, Dental?: Maybe<ResolversParentTypes['BlogPost']>, Massage?: Maybe<ResolversParentTypes['BlogPost']>, Medicine?: Maybe<ResolversParentTypes['BlogPost']>, MentalHealth?: Maybe<ResolversParentTypes['BlogPost']>, Nursing?: Maybe<ResolversParentTypes['BlogPost']>, Nutrition?: Maybe<ResolversParentTypes['BlogPost']>, PublicHealth?: Maybe<ResolversParentTypes['BlogPost']>, Veterinary?: Maybe<ResolversParentTypes['BlogPost']> };
  Hospitality: Omit<Hospitality, 'Baking' | 'CommercialCooking' | 'Events' | 'HospitalityManagement' | 'HotelManagement' | 'TravelTourism'> & { Baking?: Maybe<ResolversParentTypes['BlogPost']>, CommercialCooking?: Maybe<ResolversParentTypes['BlogPost']>, Events?: Maybe<ResolversParentTypes['BlogPost']>, HospitalityManagement?: Maybe<ResolversParentTypes['BlogPost']>, HotelManagement?: Maybe<ResolversParentTypes['BlogPost']>, TravelTourism?: Maybe<ResolversParentTypes['BlogPost']> };
  ID: Scalars['ID'];
  It: ItModel;
  ItInput: ItInput;
  MachineLearing: MachineLearingModel;
  MachineLearingInput: MachineLearingInput;
  Management: Omit<Management, 'AgriBusinessManagement' | 'BankingManagement' | 'BusinessManagement' | 'HumanResources' | 'InternationalBusiness' | 'LeadershipManagement' | 'ProjectManagement' | 'SocialMediaMarketing' | 'SupplyManagement'> & { AgriBusinessManagement?: Maybe<ResolversParentTypes['BlogPost']>, BankingManagement?: Maybe<ResolversParentTypes['BlogPost']>, BusinessManagement?: Maybe<ResolversParentTypes['BlogPost']>, HumanResources?: Maybe<ResolversParentTypes['BlogPost']>, InternationalBusiness?: Maybe<ResolversParentTypes['BlogPost']>, LeadershipManagement?: Maybe<ResolversParentTypes['BlogPost']>, ProjectManagement?: Maybe<ResolversParentTypes['BlogPost']>, SocialMediaMarketing?: Maybe<ResolversParentTypes['BlogPost']>, SupplyManagement?: Maybe<ResolversParentTypes['BlogPost']> };
  Mutation: {};
  Query: {};
  Session: SessionModel;
  SoftwareDevelopment: SoftwareDevelopmentModel;
  SoftwareDevelopmentInput: SoftwareDevelopmentInput;
  String: Scalars['String'];
  Telecommunication: TelecommunicationModel;
  TelecommunicationInput: TelecommunicationInput;
  Trades: Omit<Trades, 'Automotive' | 'Beauty' | 'Carpentry' | 'Construction' | 'Education' | 'Fitness' | 'Hairdressing' | 'Horticulture' | 'Sport' | 'Yoga'> & { Automotive?: Maybe<ResolversParentTypes['BlogPost']>, Beauty?: Maybe<ResolversParentTypes['BlogPost']>, Carpentry?: Maybe<ResolversParentTypes['BlogPost']>, Construction?: Maybe<ResolversParentTypes['BlogPost']>, Education?: Maybe<ResolversParentTypes['BlogPost']>, Fitness?: Maybe<ResolversParentTypes['BlogPost']>, Hairdressing?: Maybe<ResolversParentTypes['BlogPost']>, Horticulture?: Maybe<ResolversParentTypes['BlogPost']>, Sport?: Maybe<ResolversParentTypes['BlogPost']>, Yoga?: Maybe<ResolversParentTypes['BlogPost']> };
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

export type CloudComputingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CloudComputing'] = ResolversParentTypes['CloudComputing']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type CoursesResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Courses'] = ResolversParentTypes['Courses']> = {
  Design?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType>;
  Health?: Resolver<Maybe<ResolversTypes['Health']>, ParentType, ContextType>;
  Hospitality?: Resolver<Maybe<ResolversTypes['Hospitality']>, ParentType, ContextType>;
  It?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType>;
  Management?: Resolver<Maybe<ResolversTypes['Management']>, ParentType, ContextType>;
  Trades?: Resolver<Maybe<ResolversTypes['Trades']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DataManagement'] = ResolversParentTypes['DataManagement']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type DesignResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Design'] = ResolversParentTypes['Design']> = {
  Acting?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Animation?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  DigitalMedia?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  FashionDesign?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Film?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  GraphicDesign?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  InteriorDesign?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Landscape?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Music?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameProgrammingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['GameProgramming'] = ResolversParentTypes['GameProgramming']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type HealthResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Health'] = ResolversParentTypes['Health']> = {
  AgedCare?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Dental?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Massage?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Medicine?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  MentalHealth?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Nursing?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Nutrition?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  PublicHealth?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Veterinary?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HospitalityResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Hospitality'] = ResolversParentTypes['Hospitality']> = {
  Baking?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  CommercialCooking?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Events?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  HospitalityManagement?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  HotelManagement?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  TravelTourism?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['It'] = ResolversParentTypes['It']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  softwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType>;
  softwareDevelopmentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MachineLearingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['MachineLearing'] = ResolversParentTypes['MachineLearing']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type ManagementResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Management'] = ResolversParentTypes['Management']> = {
  AgriBusinessManagement?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  BankingManagement?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  BusinessManagement?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  HumanResources?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  InternationalBusiness?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  LeadershipManagement?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  ProjectManagement?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  SocialMediaMarketing?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  SupplyManagement?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
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
  addDesign?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType, RequireFields<MutationAddDesignArgs, 'input'>>;
  addGameProgramming?: Resolver<Maybe<ResolversTypes['GameProgramming']>, ParentType, ContextType, Partial<MutationAddGameProgrammingArgs>>;
  addHealth?: Resolver<Maybe<ResolversTypes['Health']>, ParentType, ContextType, RequireFields<MutationAddHealthArgs, 'input'>>;
  addHospitality?: Resolver<Maybe<ResolversTypes['Hospitality']>, ParentType, ContextType, RequireFields<MutationAddHospitalityArgs, 'input'>>;
  addIt?: Resolver<Maybe<ResolversTypes['It']>, ParentType, ContextType, RequireFields<MutationAddItArgs, 'input'>>;
  addMachineLearing?: Resolver<Maybe<ResolversTypes['MachineLearing']>, ParentType, ContextType, Partial<MutationAddMachineLearingArgs>>;
  addSoftwareDevelopment?: Resolver<Maybe<ResolversTypes['SoftwareDevelopment']>, ParentType, ContextType, Partial<MutationAddSoftwareDevelopmentArgs>>;
  addTelecommunication?: Resolver<Maybe<ResolversTypes['Telecommunication']>, ParentType, ContextType, Partial<MutationAddTelecommunicationArgs>>;
  addTrades?: Resolver<Maybe<ResolversTypes['Trades']>, ParentType, ContextType, RequireFields<MutationAddTradesArgs, 'input'>>;
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
  machineLearing?: Resolver<Maybe<ResolversTypes['MachineLearing']>, ParentType, ContextType, RequireFields<QueryMachineLearingArgs, 'id'>>;
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

export type TradesResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Trades'] = ResolversParentTypes['Trades']> = {
  Automotive?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Beauty?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Carpentry?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Construction?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Education?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Fitness?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Hairdressing?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Horticulture?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Sport?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
  Yoga?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType>;
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
  CloudComputing?: CloudComputingResolvers<ContextType>;
  ComputerNetworking?: ComputerNetworkingResolvers<ContextType>;
  Courses?: CoursesResolvers<ContextType>;
  DataManagement?: DataManagementResolvers<ContextType>;
  Design?: DesignResolvers<ContextType>;
  GameProgramming?: GameProgrammingResolvers<ContextType>;
  Health?: HealthResolvers<ContextType>;
  Hospitality?: HospitalityResolvers<ContextType>;
  It?: ItResolvers<ContextType>;
  MachineLearing?: MachineLearingResolvers<ContextType>;
  Management?: ManagementResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SoftwareDevelopment?: SoftwareDevelopmentResolvers<ContextType>;
  Telecommunication?: TelecommunicationResolvers<ContextType>;
  Trades?: TradesResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  VerificationToken?: VerificationTokenResolvers<ContextType>;
  WebDevelopment?: WebDevelopmentResolvers<ContextType>;
};


export const BlogCardFragmentDoc = gql`
    fragment BlogCard on BlogPost {
  id
  title
  subtitle1
}
    `;
export const BlogPostFragmentDoc = gql`
    fragment BlogPost on BlogPost {
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
export const SoftwareDevelopmentFragmentDoc = gql`
    fragment SoftwareDevelopment on SoftwareDevelopment {
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
export type AddBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;


export type AddBlogPostMutation = { __typename?: 'Mutation', addBlogPost?: { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogCardQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogCardQuery = { __typename?: 'Query', blogCard?: Array<{ __typename?: 'BlogPost', id: string, title?: string | null, subtitle1?: string | null } | null> | null };

export type BlogCardFragment = { __typename?: 'BlogPost', id: string, title?: string | null, subtitle1?: string | null };

export type BlogPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlogPostQuery = { __typename?: 'Query', blogPost?: { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogPostFragment = { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null> | null };

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

export type AddSoftwareDevelopmentMutationVariables = Exact<{
  input: SoftwareDevelopmentInput;
}>;


export type AddSoftwareDevelopmentMutation = { __typename?: 'Mutation', addSoftwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type SoftwareDevelopmentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SoftwareDevelopmentQuery = { __typename?: 'Query', softwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type SoftwareDevelopmentFragment = { __typename?: 'SoftwareDevelopment', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type UpdateSoftwareDevelopmentMutationVariables = Exact<{
  input: SoftwareDevelopmentInput;
}>;


export type UpdateSoftwareDevelopmentMutation = { __typename?: 'Mutation', updateSoftwareDevelopment?: { __typename?: 'SoftwareDevelopment', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };
