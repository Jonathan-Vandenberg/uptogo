import { motion } from "framer-motion";
import Link from "next/link";
import { NextPage } from "next/types";
import Image from "next/image";
import iT from "../../../../public/navDropdownImages/asianMale.jpg";
// import hospitality from "../../public/navdropdownImages/hospitality.jpg";
// import management from "../../public/navdropdownImages/management.jpg";
// import health from "../../public/navdropdownImages/health.jpg";
// import trade from "../../public/navdropdownImages/trade.jpg";
// import design from "../../public/navdropdownImages/design.jpg";

import { useState } from "react";

interface Props {
  leave: () => void;
}

const navLinks = [
  {
    subject: "Công nghệ thông tin (IT)",
    link: "/courses/information-technology",
  },
  { subject: "Nhà hàng – Khách sạn (Hospitality)", link: "/hospitality" },
  { subject: "Quản Lý (Mangement)", link: "/management" },
  { subject: "Sức khỏe (Health)", link: "/health" },
  { subject: "Thương mại & Thể thao (Trade & Sports)", link: "/trade-sports" },
  { subject: "Thiết kế (Design)", link: "/design" },
];

const Majors: NextPage<Props> = ({ leave }) => {
  const [iTImage, setItImage] = useState(false);
  const [hospitalityImage, setHospitalityImage] = useState(false);
  const [managementImage, setManagementImage] = useState(false);
  const [healthImage, setHealthImage] = useState(false);
  const [tradeImage, setTradeImage] = useState(false);
  const [designImage, setDesignImage] = useState(false);

  const handleImages = (data: string) => {
    if (data === "/courses/information-technology") {
      setItImage(true);
      setHospitalityImage(false);
      setManagementImage(false);
      setHealthImage(false);
      setTradeImage(false);
      setDesignImage(false);
    }
    // } else if (data === "/hospitality") {
    //   setItImage(false);
    //   setHospitalityImage(true);
    //   setManagementImage(false);
    //   setHealthImage(false);
    //   setTradeImage(false);
    //   setDesignImage(false);
    // } else if (data === "/management") {
    //   setItImage(false);
    //   setHospitalityImage(false);
    //   setManagementImage(true);
    //   setHealthImage(false);
    //   setTradeImage(false);
    //   setDesignImage(false);
    // } else if (data === "/health") {
    //   setItImage(false);
    //   setHospitalityImage(false);
    //   setManagementImage(false);
    //   setHealthImage(true);
    //   setTradeImage(false);
    //   setDesignImage(false);
    // } else if (data === "/trade-sports") {
    //   setItImage(false);
    //   setHospitalityImage(false);
    //   setManagementImage(false);
    //   setHealthImage(false);
    //   setTradeImage(true);
    //   setDesignImage(false);
    // } else if (data === "/design") {
    //   setItImage(false);
    //   setHospitalityImage(false);
    //   setManagementImage(false);
    //   setHealthImage(false);
    //   setTradeImage(false);
    //   setDesignImage(true);
    // }
  };

  return (
    <motion.div
      onMouseLeave={leave}
      className="h-dropdownHeight absolute top-[43px] grid w-[600px] grid-cols-2 bg-white p-5"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut" }}
    >
      <div className="col-span-1 space-y-2">
        {navLinks.map((item) => (
          <Link
            href={item.link}
            className="pointer-cursor hover:text-iwanttoColor"
            key={item.subject}
            onClick={leave}
          >
            <p
              onMouseEnter={() => handleImages(item.link)}
              className="text-lg font-semibold"
            >
              {item.subject}
            </p>
          </Link>
        ))}
      </div>
      <div className="col-span-1 flex flex-col">
        {/* {iTImage && ( */}
        <div>
          <Image
            src={iT}
            width="600"
            height="410"
            layout="responsive"
            alt="dropdown-item"
          />
        </div>
        {/* )} */}
        {/* {iTImage && (
          <div>
            <Image
              src={hospitality}
              width="600"
              height="410"
              layout="responsive"
              alt="dropdown-item"
            />
          </div>
        )}
        {iTImage && (
          <div>
            <Image
              src={management}
              width="600"
              height="410"
              layout="responsive"
              alt="dropdown-item"
            />
          </div>
        )}
        {iTImage && (
          <div>
            <Image
              src={health}
              width="600"
              height="410"
              layout="responsive"
              alt="dropdown-item"
            />
          </div>
        )}
        {iTImage && (
          <div>
            <Image
              src={trade}
              width="600"
              height="410"
              layout="responsive"
              alt="dropdown-item"
            />
          </div>
        )}
        {iTImage && (
          <div>
            <Image
              src={design}
              width="600"
              height="410"
              layout="responsive"
              alt="dropdown-item"
            />
          </div>
        )} */}

        <div className="text-md block py-5 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit rem
          blanditiis distinctio officiis laudantium doloribus eligendi saepe ad?
        </div>
      </div>
    </motion.div>
  );
};

export default Majors;
