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
    <div className="flex items-start justify-between px-12">
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          {translate ? (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Information Technology
            </p>
          ) : (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Công nghệ thông tin
            </p>
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
                <p className="text-gray-600 hover:text-orange leading-5 text-lg pl-2 py-2">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          {translate ? (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Design
            </p>
          ) : (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Thiết kế
            </p>
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
                <p className="text-gray-600 hover:text-orange leading-5 text-lg pl-2 py-2">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          {translate ? (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Management
            </p>
          ) : (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Quản lý
            </p>
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
                <p className="text-gray-600 hover:text-orange leading-5 text-lg pl-2 py-2">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          {translate ? (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Health
            </p>
          ) : (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Sức khỏe
            </p>
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
                <p className="text-gray-600 hover:text-orange leading-5 text-lg pl-2 py-2">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          {translate ? (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Hospitality
            </p>
          ) : (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Nhà hàng khách sạn{" "}
            </p>
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
                <p className="text-gray-600 hover:text-orange leading-5 text-lg pl-2 py-2">
                  {translate ? item.courseE : item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          {translate ? (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Trades and Sports
            </p>
          ) : (
            <p className="text-lg text-gray-800 py-3 underline underline-offset-4 whitespace-nowrap px-4 w-full font-semibold">
              Thương mại & Thể thao
            </p>
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
                <p className="text-gray-600 hover:text-orange leading-5 text-lg pl-2 py-2">
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
