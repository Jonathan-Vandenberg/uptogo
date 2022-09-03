import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import Image from "next/image";
import router from "next/router";
import { NextPage } from "next/types";
import * as React from "react";
import { BsSearch } from "react-icons/bs";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import uptogoLogoSmall from "../../../public/uptogoLogoSmall.png";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import LoginBtn from "../../UI/LoginBtn";

const style = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  maxWidth: "80vw",
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
      <div
        onClick={() => {
          setShowMajors(!showMajors);
        }}
        className="flex items-center justify-between pt-2"
      >
        <div className="cursor-pointer pl-4 font-semibold">Ngành Học</div>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowHouseholdMenu(!showHouseholdMenu)}
        className="flex items-center justify-between"
      >
        <div className="cursor-pointer pl-4 font-semibold">
          Lorem HouseHold Business
        </div>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowSMEMenu(!showSMEMenu)}
        className="flex items-center justify-between"
      >
        <div className="cursor-pointer pl-4 font-semibold">Lorem SMEs</div>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div
        onClick={() => setShowCorporate(!showCorporate)}
        className="flex items-center justify-between"
      >
        <div className="cursor-pointer pl-4 font-semibold">Lorem Corporate</div>
        <div className="px-4">
          <MdOutlineArrowForwardIos />
        </div>
      </div>

      <div className="cursor-pointer pl-4 pb-1 font-semibold">
        Lorem VPBank Diamond
      </div>

      <div className="flex cursor-pointer items-center justify-center">
        <Image src={uptogoLogoSmall} width="100" height="100" alt="logo" />
      </div>

      <div className="flex flex-col items-center justify-evenly space-y-2 whitespace-nowrap">
        <Link href="/compare">
          <a className="cursor-pointer px-4">Compare Cards</a>
        </Link>

        <Link href="/about">
          <a className="cursor-pointer px-4">About Us</a>
        </Link>

        <div>
          <a className="cursor-pointer px-4">News</a>
        </div>

        <div>
          <a className="cursor-pointer px-4">Lorem Recruit</a>
        </div>
      </div>

      <div onClick={() => handleClose()}>
        <Link href={"/favorites"}>
          <div className="flex cursor-pointer items-center justify-start space-x-2 px-4 pt-1">
            <div className="text-xl text-red-400">
              <FaHeart />
            </div>
            <p>Favorites</p>
          </div>
        </Link>
      </div>

      <Link href={""}>
        <div className="flex cursor-pointer items-center justify-start space-x-2 px-4">
          <div className="text-xl">
            <FaRegQuestionCircle />
          </div>
          <p>Lorem Support</p>
        </div>
      </Link>

      <Link href={""}>
        <div className="flex cursor-pointer items-center justify-start space-x-2 px-4">
          <div className="text-xl">
            <HiOutlineLocationMarker />
          </div>
          <p>Lorem Branches & ATMs</p>
        </div>
      </Link>
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
          <Link href={"/information-technology"}>
            <p className="font-semibold">Công nghệ thông tin (IT)</p>
          </Link>
        </div>

        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/hospitality"}>Nhà hàng – Khách sạn (Hospitality)</Link>
        </div>
        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/management"}>Quản Lý (Mangement)</Link>
        </div>
        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/health"}>Sức khỏe (Health)</Link>
        </div>
        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/sports-trade"}>
            Thương mại & Thể thao (Trade & Sports)
          </Link>
        </div>
        <div
          className="w-full cursor-pointer p-3 pl-6 font-semibold"
          onClick={() => handleClose()}
        >
          <Link href={"/design"}>Thiết kế (Design)</Link>
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
          Lorem Household
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="w-full cursor-pointer p-3 pl-6 pt-6 font-semibold">
          Lorem Unsecured Loan
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Secured Loans
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Bank Assurance
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Card Services
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
        <div className=" p-2 text-xl font-semibold text-iwanttoColor">
          Lorem SME
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="w-full cursor-pointer p-3 pl-6 pt-6 font-semibold">
          Lorem Account Service
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Business Loans
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem VPBIZ Payment Card
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Card Payment Services
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Payment Service
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Trade Finance
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Deposit Products
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Online Chiropractic
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Online Disbursement
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Business Account Online
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
          Lorem Corporate
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="w-full cursor-pointer p-3 pl-6 pt-6 font-semibold">
          Lorem Guarantee
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Loans
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Services and Trade Finance
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Account services
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Card Services
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Financial Market Products
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Internet Banking
        </div>
        <div className="w-full cursor-pointer p-3 pl-6 font-semibold">
          Lorem Email Transactions
        </div>
      </div>
    </div>
  );

  return (
    <div className="sticky bg-body top-0 z-40 flex items-center justify-between p-2 sm:px-4 lg:hidden">
      <div className="cursor-pointer p-1 flex items-center justify-center">
        <Image
          src={uptogoLogoSmall}
          width="45"
          height="45"
          alt="logo"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex h-full items-center justify-end space-x-6">
        <div className="text-xl text-iwanttoColor">
          <BsSearch />
        </div>
        <div className="divide-slate-300 border-x-2 px-6 text-2xl text-iwanttoColor">
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
