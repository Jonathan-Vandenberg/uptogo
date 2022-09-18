import { Avatar } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GrCheckmark } from "react-icons/gr";
import logo from "../../public/fullLogo.png";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
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
  Design,
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
  Hospitality,
  HospitalityManagement,
  HotelManagement,
  HumanResources,
  InteriorDesign,
  IntlBusiness,
  It,
  Landscape,
  LeadershipManagement,
  MachineLearning,
  Management,
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
  Trades,
  TravelTourism,
  Veterinary,
  WebDevelopment,
  Yoga,
} from "../../types";

interface IHeroProps {
  data:
    | BlogPost
    | Trades
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
    | Hospitality
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
    | undefined
    | null;
}

const BlogHeader = ({ data }: IHeroProps) => {
  const [localStorageChange, setLocalStorageChange] = useState(false);
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoriteBlogs: string[] = [];
    allKeys.map((key) => {
      if (key.includes("BLOG")) {
        favoriteBlogs.push(key);
      }
    });
    setLocalStorageKeys(favoriteBlogs);
  }, [localStorageChange]);

  const handleLocalStorage = (storage: string) => {
    const favorited = getFromStorage(storage);
    if (favorited) {
      localStorage.removeItem(storage);
    } else setToStorage(storage, storage);

    setLocalStorageChange(!localStorageChange);
  };
  const styles = data?.mainImage ? "pb-8 block" : "block p-20";
  return (
    <div className="bg-white md:pt-4">
      <div className="max-w-[640px] px-5 md:max-w-[900px] mx-auto">
        {data?.title && (
          <h1 className="logoFont text-3xl py-4 text-gray-700 font-semibold md:text-5xl">
            {data?.title}
          </h1>
        )}
        {data?.subtitle1 && (
          <h2 className="py-2 text-lg text-gray-500">{data?.subtitle1}</h2>
        )}
        <div className="flex flex-col items-start justify-center md:flex-row md:justify-between p-3 mb-8">
          <div>
            <div className="flex items-center justify-start space-x-3 pb-3">
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://picsum.photos/seed/picsum/32/32"
                alt="Avatar name"
              />
              <div className="flex items-start flex-col justify-start">
                {data?.authorName && (
                  <>
                    <p className="text-gray-700">By {data?.authorName}</p>
                  </>
                )}
                {data?.publishedDate && (
                  <p className="text-xs text-gray-500">
                    Published {data?.publishedDate}
                  </p>
                )}
              </div>
            </div>
          </div>
          {data?.editedBy && (
            <div className="flex items-center justify-start space-x-1">
              <GrCheckmark />
              <p className="text-xs text-gray-500">Edited by</p>
              <p className="text-gray-700">{data?.editedBy}</p>
            </div>
          )}
        </div>
        <div className="border-b-[1px] border-gray-200 pb-2 block">
          <div className={styles}>
            <Image
              src={data?.mainImage || logo}
              width={data?.mainImage ? 600 : 100}
              height={data?.mainImage ? 338 : 100}
              alt="IT image"
              className="rounded-lg"
              layout="responsive"
              priority
            />
          </div>
          {data?.photoCredit && (
            <p className="text-xs text-gray-500 mt-1">
              Image Credit: {data?.photoCredit}
            </p>
          )}
          <div className="flex items-center justify-end">
            <div
              onClick={() => {
                handleLocalStorage(`${data?.category} - ${data?.id}`);
              }}
              className="cursor-pointer rounded-full bg-body p-2 hover:scale-105 hover:drop-shadow"
            >
              <FaHeart
                size={20}
                color={
                  localStorageKeys?.includes(`${data?.category} - ${data?.id}`)
                    ? "red"
                    : "orange"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
