import Link from "next/link";
import {
  designLinks,
  hospitalityLinks,
  tradeLinks,
  itLinks,
  healthLinks,
  managementLinks,
} from "../../../lib/links";
import { useAppSelector } from "../../../redux-hooks/hooks";

interface IProps {
  handleCloseDropdowns: () => void;
}

const App = ({ handleCloseDropdowns }: IProps) => {
  const translate = useAppSelector((state) => state.translationState.translate);

  return (
    <div className="flex items-start justify-between px-12 2xl:container mx-auto py-6">
      <div className="col-span-1">
        <div
          className="flex items-center justify-between"
          onClick={() => handleCloseDropdowns()}
        >
          {translate ? (
            <Link href="/courses/information-technology">
              <p className="text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Information Technology
              </p>
            </Link>
          ) : (
            <Link href="/courses/information-technology">
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Công nghệ thông tin
              </p>
            </Link>
          )}
        </div>
        <div className="flex items-start justify-center flex-col">
          {itLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-orange leading-5 text-sm py-1">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div
          className="flex items-center justify-between"
          onClick={() => handleCloseDropdowns()}
        >
          {translate ? (
            <Link href={"/courses/design"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Design
              </p>
            </Link>
          ) : (
            <Link href={"/courses/design"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Thiết kế
              </p>
            </Link>
          )}
        </div>
        <div className="flex items-start justify-center flex-col">
          {designLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-orange leading-5 text-sm py-1">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div
          className="flex items-center justify-between"
          onClick={() => handleCloseDropdowns()}
        >
          {translate ? (
            <Link href={"/courses/management"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Management
              </p>
            </Link>
          ) : (
            <Link href={"/courses/management"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Quản lý
              </p>
            </Link>
          )}
        </div>
        <div className="flex items-start justify-center flex-col">
          {managementLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-orange leading-5 text-sm py-1">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div
          className="flex items-center justify-between"
          onClick={() => handleCloseDropdowns()}
        >
          {translate ? (
            <Link href={"/courses/health"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Health
              </p>
            </Link>
          ) : (
            <Link href={"/courses/health"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Sức khỏe
              </p>
            </Link>
          )}
        </div>
        <div className="flex items-start justify-center flex-col">
          {healthLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-orange leading-5 text-sm py-1">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div
          className="flex items-center justify-between"
          onClick={() => handleCloseDropdowns()}
        >
          {translate ? (
            <Link href={"/courses/hospitality"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Hospitality
              </p>
            </Link>
          ) : (
            <Link href={"/courses/hospitality"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Nhà hàng khách sạn{" "}
              </p>
            </Link>
          )}
        </div>
        <div className="flex items-start justify-center flex-col">
          {hospitalityLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-orange leading-5 text-sm py-1">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div
          className="flex items-center justify-between"
          onClick={() => handleCloseDropdowns()}
        >
          {translate ? (
            <Link href={"/courses/trades"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Trades and Sports
              </p>
            </Link>
          ) : (
            <Link href={"/courses/trades"}>
              <p className=" text-gray-800 py-1 underline cursor-pointer underline-offset-4 whitespace-nowrap w-full font-semibold">
                Thương mại & Thể thao
              </p>
            </Link>
          )}
        </div>
        <div className="flex items-start justify-center flex-col">
          {tradeLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-orange leading-5 text-sm py-1">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
