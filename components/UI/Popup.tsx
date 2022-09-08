import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import bermingham from "../../public/partnersLogos/BerminhamLogo.png";
import diakin from "../../public/partnersLogos/diakinLogo.png";
import image from "../../public/partnersLogos/download.png";
import james from "../../public/partnersLogos/jamesCookLogo.png";
import vancouver from "../../public/partnersLogos/vancouverLogo.jpeg";
import logo from "../../public/uptogoFavicon.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function PopupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PopupCard />
        </Box>
      </Modal>
    </div>
  );
}

function PopupCard() {
  return (
    <div className="flex items-center justify-center flex-col relative rounded-xl">
      <div className="absolute top-0 right-0 p-3 text-gray-400">
        <MdClose size={20} />
      </div>
      <div className="p-2 rounded-full bg-white absolute -top-[30px]">
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>
      <div className="px-6 md:px-20 pb-4 pt-16 flex items-center justify-center flex-col space-y-6">
        <p className="px-6 md:px-20 text-2xl logoFont text-center">
          Take the first step toward a successful career. Find a university in
          the United States.​
        </p>
        <p className="text-lg text-center">
          Answer a few questions and we&apos;ll get you connected with a
          university in the U.S., along with:
        </p>
        <ul>
          <li className="space-x-2 flex items-center justify-center">
            <CheckIcon className="text-green-500" fontSize="medium" />
            <p className="text-lg">Visa application help</p>
          </li>
          <li className="space-x-2 flex items-center justify-center">
            <CheckIcon className="text-green-500" fontSize="medium" />
            <p className="text-lg">Your own enrollment counselor</p>
          </li>
          <li className="space-x-2 flex items-center justify-center">
            <CheckIcon className="text-green-500" fontSize="medium" />
            <p className="text-lg">On-campus transition support</p>
          </li>
        </ul>
        <button className="px-4 py-2 rounded-full text-white bg-orange">
          <div className="items-center justify-center flex space-x-2">
            <p>Start Now</p>
            <BsArrowRight />
          </div>
        </button>
        <p>Some of our partners include:</p>
        <div className="flex items-center justify-center space-x-2">
          <div>
            <Image
              src={bermingham}
              alt="Berminham Unversity logo"
              width={100}
              height={35}
            />
          </div>
          <div>
            <Image
              src={diakin}
              alt="Berminham Unversity logo"
              width={50}
              height={50}
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Berminham Unversity logo"
              width={130}
              height={35}
            />
          </div>
          <div>
            <Image
              src={james}
              alt="Berminham Unversity logo"
              width={110}
              height={48}
            />
          </div>

          <div>
            <Image
              src={vancouver}
              alt="Berminham Unversity logo"
              width={90}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
