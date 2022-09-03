import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import uptogoLogo from "../../../public/uptogoLogoBig.png";
import CollapseMenus from "./CollapseMenus";
import UnCollapassedMenu from "./UnCollapassedMenu";
import facebookLogo from "../../../public/social-media/facebook.svg";
import zaloLogo from "../../../public/social-media/zalo.svg";
import youtubeLogo from "../../../public/social-media/youtube.svg";
import appStoreLogo from "../../../public/social-media/appStoreGooglePlayLogo.png";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <motion.div
        className="hidden pt-12 md:block"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.6,
          },
        }}
      >
        <div className="h-[2px] bg-gradient-to-r from-startColor to-endColor"></div>
        <div className="drop-shadow lg:flex lg:items-center lg:justify-evenly">
          <div className="flex items-center justify-center p-6">
            <div className="p-3 text-2xl text-green-500">
              <BsFillTelephoneOutboundFill />
            </div>
            <p className="p-3 text-xl font-bold text-iwanttoColor">
              0926 561 080
            </p>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-startColor to-endColor p-6">
            <div className="rounded-full bg-white p-3 text-3xl text-gray-700">
              <GrMapLocation />
            </div>
            <p className="p-3 text-xl font-semibold text-gray-700">
              Find locations to study at
            </p>
          </div>
          <div className="flex items-center justify-center p-6">
            <div className="p-3 text-3xl">
              <AiOutlineMail />
            </div>
            <a
              className="p-3 text-xl font-bold text-iwanttoColor"
              href="mailto: info@uptogo.org"
            >
              Email Us
            </a>
          </div>
        </div>
      </motion.div>
      <MobileFooterHeader />
      <div className="bg-body">
        <div className="">
          <CollapseMenus />
          <UnCollapassedMenu />
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 py-8 px-28 lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0 lg:space-x-6">
          <div className="hover:cursor-pointer">
            <Image
              src={uptogoLogo}
              width="120"
              height="120"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="space-y-1">
            <p className="whitespace-nowrap text-center text-sm font-semibold">
              Uptogo Joint-Stock Company (Uptogo)
            </p>
            <p className="text-grey-800 text-md text-center">
              Head Office: 89 Lang Ha Str., Dong Da Dist., Ha Noi
            </p>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <div>
              <Image
                src={facebookLogo}
                width={35}
                height={35}
                alt="facebook logo"
              />
            </div>
            <div>
              <Image
                src={youtubeLogo}
                width={35}
                height={35}
                alt="youtube logo"
              />
            </div>
            <div>
              <Image src={zaloLogo} width={35} height={35} alt="zalo logo" />
            </div>
          </div>
        </div>
        <div className="bg-blue py-2 md:py-4">
          <div className="mx-auto flex flex-col-reverse items-center justify-evenly space-y-2 px-3 text-sm md:container  md:flex-row md:space-y-0">
            <p className="text-white">
              © Copyright 2009 Uptogo. All rights reserved.
            </p>

            <div className="flex items-center justify-center space-x-2 md:flex-row">
              <p className="text-md cursor-pointer text-center text-white hover:text-green-300">
                Safe and Secure
              </p>
              <p className="text-white">|</p>
              <p className="text-md cursor-pointer text-center text-white hover:text-green-300">
                Sitemap
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const MobileFooterHeader = () => (
  <div className="pt-12 md:hidden">
    <div className="h-[2px] bg-gradient-to-r from-startColor to-endColor"></div>
    <div className="drop-shadow lg:flex lg:items-center lg:justify-evenly">
      <div className="flex items-center justify-center p-6">
        <div className="p-3 text-2xl">
          <BsFillTelephoneOutboundFill />
        </div>
        <p className="p-3 text-xl font-bold text-iwanttoColor">1900545415</p>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-r from-startColor to-endColor p-6">
        <div className="rounded-full bg-white p-3 text-3xl">
          <GrMapLocation />
        </div>
        <p className="p-3 text-xl font-semibold text-gray-700">
          Find locations to study at
        </p>
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="p-3 text-3xl">
          <AiOutlineMail />
        </div>
        <p className="p-3 text-xl font-bold text-iwanttoColor">Email Us</p>
      </div>
    </div>
  </div>
);
