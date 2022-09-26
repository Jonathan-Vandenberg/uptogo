import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import bermingham from "../../public/partnersLogos/BerminhamLogo.png";
import diakin from "../../public/partnersLogos/diakinLogo.png";
import image from "../../public/partnersLogos/download.png";
import james from "../../public/partnersLogos/jamesCookLogo.png";
import vancouver from "../../public/partnersLogos/vancouverLogo.jpeg";
import logo from "../../public/uptogoFavicon.png";
import CoursesBtn from "./CoursesBtn";

export default function PopupCard() {
  return (
    <div className="pt-10 flex items-center justify-center flex-col relative -mt-10 md:mt-0 md:bg-sky-50">
      <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center">
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>
      <div className="px-6 md:px-12 pt-8 pb-4 md:pt-16 flex items-center justify-center flex-col space-y-10 relative overflow-hidden">
        <p className="lg:px-20 px-6 text-2xl logoFont text-center">
          Take the first step toward a successful career.
        </p>
        <p className="text-lg text-center lg:px-20">
          Contact us and we&apos;ll get you connected with a university Canada,
          Úc, Mỹ, New Zealand Thụy Sĩ, Anh along with:
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
          <li className="w-auto flex items-center justify-center">
            <CoursesBtn title="Find Courses" />
          </li>
        </ul>
        <p>Some of our partners include:</p>
        <span className="absolute -z-10 rounded-full w-96 h-40 rotate-45 top-28 transform left-72 bg-sky-50" />
        <span className="absolute -z-10 rounded-full w-96 h-40 rotate-45 top-52 right-80 bg-orange/10" />

        <div className="grid grid-cols-1 gap-8 relative overflow-hidden md:flex md:items-center md:justify-center md:space-x-5">
          <div className="flex items-center justify-center">
            <Image
              src={bermingham}
              alt="Berminham Unversity logo"
              width={100}
              height={35}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={diakin}
              alt="Berminham Unversity logo"
              width={50}
              height={50}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={image}
              alt="Berminham Unversity logo"
              width={130}
              height={35}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={james}
              alt="Berminham Unversity logo"
              width={110}
              height={48}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={vancouver}
              alt="Berminham Unversity logo"
              width={120}
              height={80}
            />
          </div>
          <span className="absolute -z-10 rounded-full w-96 h-40 rotate-45 top-28 transform left-32 bg-orange/10" />
          <span className="absolute -z-10 rounded-full w-96 h-40 rotate-45 top-36 right-36 bg-sky-50" />
        </div>
      </div>
    </div>
  );
}
