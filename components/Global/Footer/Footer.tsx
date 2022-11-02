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
          <div className="flex items-center justify-center p-6 cursor-pointer">
            <div className="p-3 text-2xl text-green-500">
              <BsFillTelephoneOutboundFill />
            </div>
            <p className="p-3 logoFont text-xl text-gray-700">
              <a href="tel:+84926561080">0926 561 080</a>
            </p>
          </div>
          <Link
            href={
              "https://www.google.com/maps/place/38+%C4%90.+T%C3%A2n+C%E1%BA%A3ng,+Ph%C6%B0%E1%BB%9Dng+25,+B%C3%ACnh+Th%E1%BA%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7998113,106.7190144,17z/data=!3m1!4b1!4m5!3m4!1s0x317528a7c84d2503:0x1f0575d1ad7c9982!8m2!3d10.799806!4d106.7212031"
            }
            target="_blank"
          >
            <div className="flex items-center cursor-pointer justify-center bg-gradient-to-r from-startColor to-endColor p-6">
              <div className="rounded-full bg-white p-3 text-3xl text-gray-700">
                <GrMapLocation />
              </div>
              {translate ? (
                <p className="p-3 text-xl font-semibold text-gray-700">
                  Visit Us
                </p>
              ) : (
                <p className="p-3 text-xl font-semibold text-gray-700">
                  Ghé thăm chúng tôi
                </p>
              )}
            </div>
          </Link>
          <div className="flex items-center justify-center p-6 cursor-pointer">
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
              {translate ? "Uptogo Company Limited" : "Công ty TNHH Uptogo"}
            </p>
            {translate ? (
              <p className="text-grey-800 text-md text-center">
                Head address: 117/17 Xo Viet Nghe Tinh, 17 Ward, Bình Thạnh
                District, HCMC
              </p>
            ) : (
              <p className="text-grey-800 text-md text-center">
                Địa chỉ: 117/17 Xô Viết Nghệ Tĩnh, phường 17, quận Bình Thạnh,
                HCMC
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
        <Link
          href={
            "https://www.google.com/maps/place/117%2F17+X%C3%B4+Vi%E1%BA%BFt+Ngh%E1%BB%87+T%C4%A9nh,+Ph%C6%B0%E1%BB%9Dng+17,+B%C3%ACnh+Th%E1%BA%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.7944839,106.7060835,18z/data=!3m1!4b1!4m9!1m2!2m1!1zMTE3LzE3IFjDtCBWaeG6v3QgTmdo4buHIFTEqW5oLCBQaMaw4budbmcgMTcsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!3m5!1s0x317528b17bff2909:0xf1acfd12d73d4c63!8m2!3d10.7944813!4d106.7083258!15sCmExMTcvMTcgWMO0IFZp4bq_dCBOZ2jhu4cgVMSpbmgsIFBoxrDhu51uZyAxNywgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFtkgEQZ2VvY29kZWRfYWRkcmVzc-ABAA"
          }
          target="_blank"
        >
          <div className="flex items-center justify-center bg-gradient-to-r from-startColor to-endColor p-6">
            <div className="rounded-full bg-white p-3 text-3xl text-gray-700">
              <GrMapLocation />
            </div>
            {translate ? (
              <p className="p-3 text-xl font-semibold text-gray-700">
                Visit Us
              </p>
            ) : (
              <p className="p-3 text-xl font-semibold text-gray-700">
                Ghé thăm chúng tôi
              </p>
            )}
          </div>
        </Link>
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
