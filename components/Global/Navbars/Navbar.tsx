import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import uptogoFavicon from "../../../public/uptogoFavicon.png";
import CompareDropdown from "./Dropdowns/CompareDropdown";
import HouseholdDropdown from "./Dropdowns/Majors";
import SMEDropdown from "./Dropdowns/SMEDropdown";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import NavbarTop from "./NavbarTop";
import AuthBtn from "../../UI/AuthBtn";

const NavbarBottom: NextPage = () => {
  const [majorsDropdown, setMajorsDropdown] = useState(false);
  const [sMEDropdown, setSMEDropdown] = useState(false);
  const [corporateDropdown, setCorporateDropdown] = useState(false);

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
    setSMEDropdown(false);
    setCorporateDropdown(false);
  };

  return (
    <>
      <NavbarTop onMouseEnter={handleCloseDropdowns} />
      <div
        id="bottom-nav"
        className="sticky top-0 z-50 hidden bg-white border-b-4 border-orange lg:block"
        onMouseLeave={handleCloseDropdowns}
      >
        <div className="relative flex h-16 items-center justify-around">
          <div className="cursor-pointer flex items-center justify-start p-1 space-x-2">
            <Image
              src={uptogoFavicon}
              width="42"
              height="42"
              alt="logo"
              onClick={() => router.push("/")}
            />
            <p className="logoFont text-orange text-2xl">Uptogo</p>
          </div>
          <div className="flex items-center justify-evenly space-x-14">
            <div className="relative flex flex-col items-center justify-center">
              <div
                id="retailLink"
                key="retail"
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setMajorsDropdown(false);
                  setSMEDropdown(false);
                  setCorporateDropdown(false);
                }}
              >
                Định Hướng
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                id="householdLink"
                key="household"
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setMajorsDropdown(true);
                  setSMEDropdown(false);
                  setCorporateDropdown(false);
                }}
                onClick={() => {
                  setMajorsDropdown(!majorsDropdown);
                  setSMEDropdown(false);
                  setCorporateDropdown(false);
                }}
              >
                Ngành Học
              </div>
              {majorsDropdown && (
                <div
                  id="diamond2"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100 "
                />
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                id="smeLink"
                key="sme"
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setSMEDropdown(true);
                  setMajorsDropdown(false);
                  setCorporateDropdown(false);
                }}
                onClick={() => {
                  setMajorsDropdown(false);
                  setSMEDropdown(!sMEDropdown);
                  setCorporateDropdown(false);
                }}
              >
                Tiếng Anh
              </div>
              {sMEDropdown && (
                <div
                  id="diamond3"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100 "
                />
              )}
              {majorsDropdown && (
                <HouseholdDropdown leave={() => setMajorsDropdown(false)} />
              )}
              {sMEDropdown && (
                <SMEDropdown leave={() => setSMEDropdown(false)} />
              )}
              {corporateDropdown && (
                <CompareDropdown leave={() => setCorporateDropdown(false)} />
              )}
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div
                id="corporateLink"
                key="corporate"
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setCorporateDropdown(true);
                  setMajorsDropdown(false);
                  setSMEDropdown(false);
                }}
                onClick={() => {
                  setMajorsDropdown(false);
                  setSMEDropdown(false);
                  setCorporateDropdown(!corporateDropdown);
                  router.push("/blogs");
                }}
              >
                Tin Tức
              </div>
              {corporateDropdown && (
                <div
                  id="diamond4"
                  className="unhidden4 absolute z-20 h-3 w-3 translate-y-8 rotate-45 bg-gray-100"
                />
              )}
            </div>
            <Link key="vp_bank" href={"/compare"}>
              <p
                className="cursor-pointer text-lg hover:text-iwanttoColor text-gray-800"
                onMouseEnter={() => {
                  setCorporateDropdown(false);
                  setMajorsDropdown(false);
                  setSMEDropdown(false);
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
      </div>
    </>
  );
};

export default NavbarBottom;
