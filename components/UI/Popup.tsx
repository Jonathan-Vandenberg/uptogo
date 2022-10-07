import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import bermingham from "../../public/partnersLogos/BerminhamLogo.png";
import diakin from "../../public/partnersLogos/diakinLogo.png";
import image from "../../public/partnersLogos/download.png";
import james from "../../public/partnersLogos/jamesCookLogo.png";
import vancouver from "../../public/partnersLogos/vancouverLogo.jpeg";
import logo from "../../public/uptogoFavicon.png";
import { useAppSelector } from "../../redux-hooks/hooks";
import CoursesBtn from "./CoursesBtn";

export default function PopupCard() {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="flex md:px-5 py-8 lg:px-0 items-center justify-center flex-col relative md:bg-sky-50">
      <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center">
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>
      <div className="px-6 md:px-12 pt-8 md:pt-16 flex items-center justify-center flex-col space-y-10 relative overflow-hidden">
        <h1 className="lg:px-20 px-6 text-2xl logoFont text-center">
          {translate
            ? "Take the first step toward a successful career."
            : "Các bước để có sự nghiệp thành công"}
        </h1>
        {translate ? (
          <p className="text-lg text-center lg:px-20">
            Contact us and we&apos;ll get you connected with a university
            Canada, Úc, Mỹ, New Zealand Thụy Sĩ, Anh along with:
          </p>
        ) : (
          <p className="text-lg text-center lg:px-20">
            Hãy liên hệ với chúng tôi, chúng tôi sẽ giúp bạn liên hệ với các
            trường đại học Canada, Úc, Mỹ, New Zealand Thụy Sĩ, Anh:
          </p>
        )}
        <ul>
          <li className="space-x-2 flex items-center justify-center">
            <CheckIcon className="text-green-500" fontSize="medium" />
            <p className="text-lg">
              {translate ? "Visa application help" : "Hỗ trợ xin visa"}
            </p>
          </li>
          <li className="space-x-2 flex items-center justify-center">
            <CheckIcon className="text-green-500" fontSize="medium" />
            <p className="text-lg">
              {translate
                ? "Your own enrollment counselor"
                : "Tư vấn tuyển sinh"}
            </p>
          </li>
          <li className="space-x-2 flex items-center justify-center">
            <CheckIcon className="text-green-500" fontSize="medium" />
            <p className="text-lg">
              {translate
                ? "On-campus transition support"
                : "Hỗ trợ chuyển trường"}
            </p>
          </li>
          <li className="w-auto flex items-center justify-center">
            <CoursesBtn
              title={translate ? "Find Courses" : "Tìm kiếm khóa học"}
            />
          </li>
        </ul>
        {translate ? (
          <p className="text-lg text-center lg:px-20">
            Some of our partners include: Evolution Hospitality Institute,
            Stanley College, Strathfield College, Australian Ideal College (AIC)
          </p>
        ) : (
          <p className="text-lg text-center lg:px-20">
            Một số đối tác của chúng tôi bao gồm: Evolution Hospitality
            Institute, Stanley College, Strathfield College, Australian Ideal
            College (AIC)
          </p>
        )}
        <span className="absolute -z-10 rounded-full w-96 h-40 rotate-45 top-28 transform left-72 bg-sky-50" />
        <span className="absolute -z-10 rounded-full w-96 h-40 rotate-45 top-52 right-80 bg-orange/10" />
        <div className="grid grid-cols-2 gap-10 relative overflow-hidden md:flex md:items-center md:justify-center md:space-x-5">
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
          <span className="absolute -z-10 rounded-full w-96 hidden md:block h-40 rotate-45 top-28 transform left-32 bg-orange/10" />
          <span className="absolute -z-10 hidden md:block rounded-full w-96 h-40 rotate-45 top-36 right-36 bg-sky-50" />
        </div>
      </div>
    </div>
  );
}
