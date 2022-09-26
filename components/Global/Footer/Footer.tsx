import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import fullLogo from "../../../public/fullLogo.png";
import CollapseMenus from "./CollapseMenus";
import UnCollapassedMenu from "./UnCollapassedMenu";
import facebookLogo from "../../../public/social-media/facebook.svg";
import zaloLogo from "../../../public/social-media/zalo.svg";
import Link from "next/link";
import TranslateBtn from "../../UI/TranslateBtn";
import { useAppSelector } from "../../../redux-hooks/hooks";

const Footer = () => {
  const router = useRouter();
  const translate = useAppSelector((state) => state.translationState.translate);

  return (
    <>
      <motion.div
        className="hidden md:block mt-12"
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
            <p className="p-3 logoFont text-xl text-gray-700">
              <a href="tel:+84926561080">0926 561 080</a>
            </p>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-startColor to-endColor p-6">
            <div className="rounded-full bg-white p-3 text-3xl text-gray-700">
              <GrMapLocation />
            </div>
            {translate ? (
              <p className="p-3 text-xl font-semibold text-gray-700">
                Find locations to study at
              </p>
            ) : (
              <p className="p-3 text-xl font-semibold text-gray-700">
                Tìm địa điểm học tại
              </p>
            )}
          </div>
          <div className="flex items-center justify-center p-6">
            <div className="p-3 text-3xl">
              <AiOutlineMail />
            </div>
            {translate ? (
              <a
                className="p-3 text-xl logoFont text-gray-700"
                href="mailto: info@uptogo.org"
              >
                Email Us
              </a>
            ) : (
              <a
                className="p-3 text-xl logoFont text-iwanttoColor"
                href="mailto: info@uptogo.org"
              >
                Gửi email cho chúng tôi
              </a>
            )}
          </div>
        </div>
      </motion.div>
      <MobileFooterHeader />
      <div className="bg-body">
        <div className="md:hidden">
          <CollapseMenus
            handleCategoryStepper={function (): void {}}
            handleMajorStepper={function (): void {}}
          />
        </div>
        <UnCollapassedMenu />
        <div className="flex flex-col items-center justify-center space-y-6 py-8 px-28 lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0 lg:space-x-6">
          <Link href={"/"} className="hover:cursor-pointer">
            <Image
              src={fullLogo}
              width="120"
              height="120"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </Link>
          <div className="space-y-1">
            <p className="whitespace-nowrap text-center text-sm font-semibold">
              Uptogo Joint-Stock Company (Uptogo)
            </p>
            {translate ? (
              <p className="text-grey-800 text-md text-center">
                Head Office: 89 Lang Ha Str., Dong Da Dist., HCMC
              </p>
            ) : (
              <p className="text-grey-800 text-md text-center">
                Văn phòng Chính: 89 Lang Ha Str., Dong Da Dist., HCMC
              </p>
            )}
          </div>
          <div className="flex items-center justify-center space-x-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/uptogo.vn/"
            >
              <Image
                src={facebookLogo}
                width={35}
                height={35}
                alt="facebook logo"
              />
            </a>
            <div>
              <Image src={zaloLogo} width={35} height={35} alt="zalo logo" />
            </div>
            <TranslateBtn />
          </div>
        </div>
        <div className="bg-blue py-2 md:py-4">
          <div className="mx-auto flex flex-col-reverse items-center justify-evenly space-y-2 px-3 text-sm md:container  md:flex-row md:space-y-0">
            <p className="text-gray-700 text-sm">
              © Copyright 2009 Uptogo. All rights reserved.
            </p>

            <div className="flex items-center justify-center space-x-2 md:flex-row">
              <p className="text-md cursor-pointer text-center text-gray-700 hover:text-green-300">
                Safe and Secure
              </p>
              <p className="text-gray-300">|</p>
              <p className="text-md cursor-pointer text-center text-gray-700 hover:text-green-300">
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

const MobileFooterHeader = () => {
  const translate = useAppSelector((state) => state.translationState.translate);

  return (
    <div className="pt-0 md:hidden">
      <div className="h-[2px] bg-gradient-to-r from-startColor to-endColor"></div>
      <div className="drop-shadow lg:flex lg:items-center lg:justify-evenly">
        <div className="flex items-center justify-center p-6">
          <div className="p-3 text-2xl text-green-500">
            <BsFillTelephoneOutboundFill />
          </div>
          <p className="p-3 logoFont text-xl text-gray-700">
            <a href="tel:+84926561080">0926 561 080</a>
          </p>
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
          {translate ? (
            <p className="p-3 text-xl text-gray-700 logoFont">Email Us</p>
          ) : (
            <a
              className="p-3 text-xl logoFont text-iwanttoColor"
              href="mailto: info@uptogo.org"
            >
              Gửi email cho chúng tôi
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
