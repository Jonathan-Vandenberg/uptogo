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

export default function PopupCard() {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/50 z-50 overflow-y-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
        <div className="bg-white min-w-[340px] max-w-[680px]  h-800 flex items-center justify-center flex-col relative rounded-xl">
          <div className="absolute top-0 right-0 p-3 text-gray-400">
            <MdClose size={20} />
          </div>
          <div className="p-2 rounded-full bg-white absolute -top-[30px] shadow-md">
            <Image src={logo} alt="logo" width={60} height={60} />
          </div>
          <div className="px-6 md:px-12 pb-4 pt-16 flex items-center justify-center flex-col space-y-6">
            <p className="lg:px-20 px-6 text-2xl logoFont text-center">
              Take the first step toward a successful career. Find a university
              in the United States.​
            </p>
            <p className="text-lg text-center lg:px-20">
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
      </div>
    </div>
  );
}
