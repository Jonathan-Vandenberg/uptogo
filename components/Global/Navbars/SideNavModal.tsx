import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import Image from "next/image";
import router from "next/router";
import { NextPage } from "next/types";
import * as React from "react";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import fullLogo from "../../../public/fullLogo.png";
import faviconLogo from "../../../public/uptogoFavicon.png";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import logoWords from "../../../public/logoWords.png";
import CollapseMenus from "../Footer/CollapseMenus";

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

  const btnRef = React.useRef<HTMLButtonElement>();
  const menuRef = React.useRef<HTMLDivElement>();

  const openMenu = () => {
    setOpen(true);
    btnRef?.current?.classList.toggle("open");
  };

  const handleClose = () => {
    btnRef?.current?.classList.toggle("open");
    setOpen(false);
  };

  const MainMenu = () => (
    <div className="h-[screen] w-[80vw] space-y-5">
      <div className="flex flex-col items-center justify-evenly space-y-2 whitespace-nowrap">
        <Link href="/compare">
          <a className="cursor-pointer px-4">Compare Courses</a>
        </Link>

        <Link href="/about">
          <a className="cursor-pointer px-4">About Us</a>
        </Link>

        <div>
          <a className="cursor-pointer px-4">News</a>
        </div>

        <div>
          <a className="cursor-pointer px-4">Recruit</a>
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
          <p>Support</p>
        </div>
      </Link>

      <Link href={""}>
        <div className="flex cursor-pointer items-center justify-start space-x-2 px-4">
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
    </div>
  );

  return (
    <div className="sticky bg-blue top-0 z-40 flex items-center justify-between p-2 sm:px-4 lg:hidden">
      <div className="ml-5 cursor-pointer flex items-center gap-3 justify-center">
        <Image
          src={faviconLogo}
          width="45"
          height="45"
          alt="logo"
          onClick={() => router.push("/")}
        />
        <p className="logoFont text-orange text-2xl">Uptogo</p>
      </div>
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
              <div className="flex cursor-pointer items-center justify-center">
                <Image src={fullLogo} width="100" height="100" alt="logo" />
              </div>
              <CollapseMenus />
              <MainMenu />
            </motion.div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SideNavModal;
