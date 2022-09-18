import Link from "next/link";
import {
  designLinks,
  hospitalityLinks,
  tradeLinks,
  itLinks,
  healthLinks,
  managementLinks,
} from "../../../lib/links";

interface IProps {
  handleCloseDropdowns: () => void;
}

const App = ({ handleCloseDropdowns }: IProps) => {
  return (
    <div className="hidden border-b-2 py-8 px-28 lg:container lg:mx-auto lg:grid lg:grid-cols-6 md:px-4">
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 pl-2 font-semibold">Công nghệ thông tin</p>
        </div>
        <div className="flex items-start justify-center flex-col">
          {itLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer hover:bg-sky-100 w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-black p-2">
                  {item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Thiết kế</p>
        </div>
        <div className="flex items-start justify-center flex-col">
          {designLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer hover:bg-sky-100 w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-black p-2">
                  {item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Quản lý</p>
        </div>
        <div className="flex items-start justify-center flex-col">
          {managementLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer hover:bg-sky-100 w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-black p-2">
                  {item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Sức khỏe</p>
        </div>
        <div className="flex items-start justify-center flex-col">
          {healthLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer hover:bg-sky-100 w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-black p-2">
                  {item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Nhà hàng khách sạn </p>
        </div>
        <div className="flex items-start justify-center flex-col">
          {hospitalityLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer hover:bg-sky-100 w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-black p-2">
                  {item.course}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Thương mại & Thể thao</p>
        </div>
        <div className="flex items-start justify-center flex-col">
          {tradeLinks.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer hover:bg-sky-100 w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-black p-2">
                  {item.course}
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
