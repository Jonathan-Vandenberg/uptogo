import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import uptogoFavicon from "../../../public/uptogoFavicon.png";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import NavbarTop from "./NavbarTop";
import AuthBtn from "../../UI/AuthBtn";
import UnCollapassedMenu from "../Footer/UnCollapassedMenu";
import UnCollapassedCourses from "../Footer/UnCollapassedCourses";

const NavbarBottom: NextPage = () => {
  const [majorsDropdown, setMajorsDropdown] = useState(false);
  const [englishDropdown, setEnglishDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);

  const [height, setHeight] = useState(0);
  const [fullBottomNav, setFullBottomNav] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });

    const bottomNav = document.getElementById("bottom-nav");
    if (bottomNav?.getBoundingClientRect().top === 0) {
      setFullBottomNav(true);
    } else {
      setFullBottomNav(false);
    }
  }, [height]);

  const router = useRouter();

  const handleCloseDropdowns = () => {
    setMajorsDropdown(false);
    setEnglishDropdown(false);
    setNewsDropdown(false);
  };

  return (
    <>
      <NavbarTop onMouseEnter={handleCloseDropdowns} />
      <div
        id=""
        className="sticky top-0 z-50 hidden bg-white border-b-4 border-orange lg:block"
        onMouseLeave={handleCloseDropdowns}
      >
        <div className="relative flex h-16 items-center justify-around">
          <Link
            href={"/"}
            className="cursor-pointer flex items-center justify-start p-1 space-x-2"
          >
            <div className="cursor-pointer flex items-center justify-center space-x-3">
              <Image src={uptogoFavicon} width="42" height="42" alt="logo" />
              <p className="logoFont text-orange text-2xl">Uptogo</p>
            </div>
          </Link>
          <div className="flex items-center justify-evenly space-x-14">
            <div className="relative flex flex-col items-center justify-center">
              <div
                id=""
                key=""
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setMajorsDropdown(false);
                  setEnglishDropdown(false);
                  setNewsDropdown(false);
                }}
              >
                Định Hướng
              </div>
            </div>
            <Link href={"/courses"}>
              <div className="relative flex flex-col items-center justify-center">
                <div
                  id=""
                  key=""
                  className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                  onMouseEnter={() => {
                    setMajorsDropdown(true);
                    setEnglishDropdown(false);
                    setNewsDropdown(false);
                  }}
                  onClick={() => {
                    setMajorsDropdown(!majorsDropdown);
                    setEnglishDropdown(false);
                    setNewsDropdown(false);
                  }}
                >
                  Ngành Học
                </div>
              </div>
            </Link>
            <div className="relative flex flex-col items-center justify-center">
              <div
                id=""
                key=""
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setEnglishDropdown(true);
                  setMajorsDropdown(false);
                  setNewsDropdown(false);
                }}
                onClick={() => {
                  setMajorsDropdown(false);
                  setEnglishDropdown(!englishDropdown);
                  setNewsDropdown(false);
                }}
              >
                Tiếng Anh
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                id=""
                key=""
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setNewsDropdown(true);
                  setMajorsDropdown(false);
                  setEnglishDropdown(false);
                }}
                onClick={() => {
                  setMajorsDropdown(false);
                  setEnglishDropdown(false);
                  setNewsDropdown(!newsDropdown);
                  router.push("/blogs");
                }}
              >
                Tin Tức
              </div>
            </div>
            <Link key="" href={"/compare"}>
              <p
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setNewsDropdown(false);
                  setMajorsDropdown(false);
                  setEnglishDropdown(false);
                }}
              >
                Sự Kiện
              </p>
            </Link>
          </div>
          {fullBottomNav ? (
            <motion.div
              initial={{ y: -10 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className="flex items-center justify-center space-x-8 p-2"
            >
              <Link href={"/favorites"}>
                <div className="cursor-pointer text-xl text-red-400">
                  <FaHeart />
                </div>
              </Link>
              <div className="text-xl">
                <FaRegQuestionCircle />
              </div>
              <div className="text-2xl ">
                <HiOutlineLocationMarker />
              </div>
              <div className="text-xl">
                <FaMobileAlt />
              </div>
            </motion.div>
          ) : (
            <div className="cursor-pointer">
              <AuthBtn />
            </div>
          )}
        </div>
        <div className="w-1/4"></div>
        {englishDropdown && (
          <div className="flex w-full items-start justify-center z-50 h-auto">
            <div className="absolute z-50 w-full bg-white">
              <UnCollapassedMenu />
            </div>
          </div>
        )}
        {majorsDropdown && (
          <div className="flex w-full items-start justify-center z-50 h-auto">
            <div className="absolute z-50 w-full bg-white">
              <UnCollapassedCourses />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarBottom;
