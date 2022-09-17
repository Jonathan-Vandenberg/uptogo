import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import Image from "next/image";
import router from "next/router";
import { NextPage } from "next/types";
import * as React from "react";
import {
  FaHeart,
  FaMobileAlt,
  FaRegQuestionCircle,
  FaUser,
} from "react-icons/fa";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
  MdAdminPanelSettings,
} from "react-icons/md";
import fullLogo from "../../../public/fullLogo.png";
import faviconLogo from "../../../public/uptogoFavicon.png";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import AuthBtn from "../../UI/AuthBtn";

const style = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  width: "80vw",
  height: "100vh",
  bgcolor: "background.paper",
  outline: "none",
};

const SideNavModal: NextPage = () => {
  const [open, setOpen] = React.useState(false);

  const [showMajors, setShowMajors] = useState(false);
  const [showHouseholdMenu, setShowHouseholdMenu] = useState(false);
  const [showSMEMenu, setShowSMEMenu] = useState(false);
  const [showCorporate, setShowCorporate] = useState(false);

  const btnRef = React.useRef<HTMLButtonElement>();
  const menuRef = React.useRef<HTMLDivElement>();

  const { data: session, status } = useSession();

  const openMenu = () => {
    setOpen(true);
    btnRef?.current?.classList.toggle("open");
  };

  const handleClose = () => {
    btnRef?.current?.classList.toggle("open");
    setOpen(false),
      setShowCorporate(false),
      setShowMajors(false),
      setShowHouseholdMenu(false),
      setShowSMEMenu(false);
  };

  const MainMenu = () => (
    <div className="h-[screen] w-[80vw] space-y-5">
      <div className="flex items-center justify-center mt-4">
        <AuthBtn />
      </div>

      <div
        onClick={() => {
          setShowMajors(!showMajors);
        }}
        className="flex items-center justify-between pt-2"
      >
        <p className="cursor-pointer pl-4 font-semibold">Ngành Học</p>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowHouseholdMenu(!showHouseholdMenu)}
        className="flex items-center justify-between"
      >
        <p className="cursor-pointer pl-4 font-semibold">Events</p>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowSMEMenu(!showSMEMenu)}
        className="flex items-center justify-between"
      >
        <p className="cursor-pointer pl-4 font-semibold">Visa</p>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowCorporate(!showCorporate)}
        className="flex items-center justify-between"
      >
        <p className="cursor-pointer pl-4 font-semibold">English</p>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div onClick={() => handleClose()}>
        <Link href={"/blogs"}>
          <p className="cursor-pointer pl-4 pb-1 font-semibold">News</p>
        </Link>
      </div>

      <Link href={"/"}>
        <div
          className="flex cursor-pointer items-center justify-center"
          onClick={handleClose}
        >
          <Image src={fullLogo} width="100" height="100" alt="logo" />
        </div>
      </Link>

      <div className="flex flex-col items-center justify-evenly space-y-2 whitespace-nowrap">
        <div onClick={() => handleClose()}>
          <Link href="/blogs">
            <a className="cursor-pointer px-4">News</a>
          </Link>
        </div>

        <Link href="/about">
          <a className="cursor-pointer px-4">About Us</a>
        </Link>

        <div>
          <a className="cursor-pointer px-4">Recruit</a>
        </div>
      </div>

      <div onClick={handleClose}>
        <Link href={"/favorites"}>
          <div className="flex cursor-pointer items-center justify-start space-x-2 px-4 pt-1">
            <div className="text-xl text-red-400">
              <FaHeart />
            </div>
            <p>My Favorites</p>
          </div>
        </Link>
      </div>

      <Link href={""}>
        <div
          className="flex cursor-pointer items-center justify-start space-x-2 px-4"
          onClick={() => handleClose()}
        >
          <div className="text-xl">
            <HiOutlineLocationMarker />
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=10.814211192365%2C106.7785692215"
            target="_blank"
            rel="noreferrer"
          >
            <p>Visit Uptogo</p>
          </a>
        </div>
      </Link>

      <div
        className="flex cursor-pointer items-center justify-start space-x-2 px-4"
        onClick={() => {
          handleClose(), signIn();
        }}
      >
        <div className="text-xl">
          <MdAdminPanelSettings />
        </div>
        <p>Admin Login</p>
      </div>
    </div>
  );

  const MajorsMenu = () => (
    <div className="w-[80vw]">
      <div className="flex w-full" onClick={() => setShowMajors(!showMajors)}>
        <div className="p-3">
          <MdOutlineArrowBackIos />
        </div>
        <div className=" p-2 text-xl font-semibold text-iwanttoColor">
          Ngành Học
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div
          onClick={() => handleClose()}
          className="w-full cursor-pointer p-3 pl-6 pt-6 font-semibold"
        >
          <Link href={"/courses/information-technology"}>
            <p className="font-semibold">Công nghệ thông tin (IT)</p>
          </Link>
        </div>

        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/courses/hospitality"}>
            Nhà hàng – Khách sạn (Hospitality)
          </Link>
        </div>
        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/courses/management"}>Quản Lý (Mangement)</Link>
        </div>
        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/courses/health"}>Sức khỏe (Health)</Link>
        </div>
        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/courses/sports-trade"}>
            Thương mại & Thể thao (Trade & Sports)
          </Link>
        </div>
        <div
          className="w-full cursor-pointer p-3 pl-6"
          onClick={() => handleClose()}
        >
          <Link href={"/courses/design"}>
            <p className="font-semibold">Thiết kế (Design)</p>
          </Link>
        </div>
      </div>
    </div>
  );

  const HouseholdMenu = () => (
    <div className="w-[80vw]">
      <div
        className="flex w-full"
        onClick={() => setShowHouseholdMenu(!showHouseholdMenu)}
      >
        <div className="p-3">
          <MdOutlineArrowBackIos />
        </div>
        <div className=" p-2 text-xl font-semibold text-iwanttoColor">
          Events
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="w-full cursor-pointer p-3 pl-6 pt-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
      </div>
    </div>
  );

  const SMEMenu = () => (
    <div className="w-[80vw]">
      <div className="flex w-full" onClick={() => setShowSMEMenu(!showSMEMenu)}>
        <div className="p-3">
          <MdOutlineArrowBackIos />
        </div>
        <div className=" p-2 text-xl font-semibold text-iwanttoColor">Visa</div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="w-full cursor-pointer p-3 pl-6 pt-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
      </div>
    </div>
  );

  const CorporateMenu = () => (
    <div className="w-[80vw]">
      <div
        className="justify-startflex flex w-full items-center"
        onClick={() => setShowCorporate(!showCorporate)}
      >
        <div className="p-3">
          <MdOutlineArrowBackIos />
        </div>
        <div className=" p-2 text-xl font-semibold text-iwanttoColor">
          English
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="w-full cursor-pointer p-3 pl-6 pt-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem
        </div>
      </div>
    </div>
  );

  return (
    <div className="sticky bg-blue top-0 z-40 flex items-center justify-between p-2 sm:px-4 lg:hidden">
      <Link href={"/"}>
        <div className="ml-5 cursor-pointer flex items-center gap-3 justify-center">
          <Image src={faviconLogo} width="45" height="45" alt="logo" />
          <p className="logoFont text-orange text-2xl">Uptogo</p>
        </div>
      </Link>
      <div className="flex h-full items-center justify-end space-x-6 mr-5">
        <div className="px-6 text-2xl text-white">
          <FaMobileAlt />
        </div>
        <button
          ref={btnRef as any}
          onClick={() => openMenu()}
          id="menu-btn"
          className="hamburger align-center top-1 right-1 z-50 flex flex-col justify-center focus:outline-none lg:hidden"
          aria-label="Menu Dropdown"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade easing={"enter"} in={open}>
          <Box sx={style}>
            <motion.div
              initial={{ x: -80 }}
              animate={{
                x: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              id="menu"
              className="items-left mt-4 flex flex-col justify-center space-y-4 overflow-y-auto"
            >
              {!showMajors &&
                !showHouseholdMenu &&
                !showSMEMenu &&
                !showCorporate && <MainMenu />}
              {showMajors && <MajorsMenu />}
              {showHouseholdMenu && <HouseholdMenu />}
              {showSMEMenu && <SMEMenu />}
              {showCorporate && <CorporateMenu />}
            </motion.div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SideNavModal;
