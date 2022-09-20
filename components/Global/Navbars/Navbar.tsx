import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import uptogoFavicon from "../../../public/uptogoFavicon.png";

import Link from "next/link";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AuthBtn from "../../UI/AuthBtn";
import UnCollapassedMenu from "../Footer/UnCollapassedMenu";
import UnCollapassedCourses from "../Footer/UnCollapassedCourses";
import TranslateBtn from "../../UI/TranslateBtn";
import { useAppSelector } from "../../../redux-hooks/hooks";
import { motion, useAnimationControls } from "framer-motion";

const NavbarBottom: NextPage = () => {
  const [majorsDropdown, setMajorsDropdown] = useState(false);
  const [englishDropdown, setEnglishDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);

  const translate = useAppSelector((state) => state.translationState.translate);

  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        controls.start({ translateY: -65 });
      } else {
        // if scroll up show the navbar
        controls.start({ translateY: 0 });
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const router = useRouter();

  const handleCloseDropdowns = () => {
    setMajorsDropdown(false);
    setEnglishDropdown(false);
    setNewsDropdown(false);
  };

  const controls = useAnimationControls();

  return (
    <motion.div
      animate={controls}
      className="sticky top-0  z-50 hidden bg-sky-50/90 border-b-4 border-orange lg:block"
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
              className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-700"
              onMouseEnter={() => {
                setMajorsDropdown(false);
                setEnglishDropdown(false);
                setNewsDropdown(false);
              }}
            >
              {translate ? "Orientation" : "Định Hướng"}
            </div>
          </div>
          <Link href={"/courses"}>
            <div className="relative flex flex-col items-center justify-center">
              <div
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-700"
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
                {translate ? "Majors" : "Ngành Học"}
              </div>
            </div>
          </Link>
          <div className="relative flex flex-col items-center justify-center">
            <div
              className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-700"
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
              {translate ? "News" : "Tin Tức"}
            </div>
          </div>
          <Link href={"/events"}>
            <p
              className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-700"
              onMouseEnter={() => {
                setNewsDropdown(false);
                setMajorsDropdown(false);
                setEnglishDropdown(false);
              }}
            >
              {translate ? "Events" : "Sự Kiện"}
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-6">
          <div className="cursor-pointer">
            <AuthBtn />
          </div>
          <Link href="/favorites">
            <div className="flex cursor-pointer items-center text-gray-800 ">
              <div className="px-2 text-red-400">
                <FaHeart />
              </div>
              <p className="text-gray-700">Favorites</p>
            </div>
          </Link>
          <TranslateBtn />
        </div>
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
            <UnCollapassedCourses handleCloseDropdowns={handleCloseDropdowns} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default NavbarBottom;
