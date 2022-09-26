import Link from "next/link";
import {
  designLinks,
  healthLinks,
  hospitalityLinks,
  itLinks,
  managementLinks,
  tradeLinks,
} from "../../../lib/links";
import { useAppSelector } from "../../../redux-hooks/hooks";

const App = () => {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="hidden border-b-2 py-8 px-28 md:container md:mx-auto md:grid md:grid-cols-3 md:px-0 lg:flex lg:items-start lg:justify-evenly">
      <div>
        <div className="flex items-center justify-between">
          <Link href={"/courses/information-technology"}>
            <p className="cursor-pointer text-md py-1 hover:text-orange font-semibold">
              {translate ? "Information Technology" : "Công nghệ thông tin "}
            </p>
          </Link>
        </div>
        {itLinks.map((item, index) => (
          <p
            className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor"
            key={index}
          >
            {translate ? item.courseE : item.course}
          </p>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between">
          <Link href={"/courses/health"}>
            <p className="cursor-pointer text-md py-1 hover:text-orange font-semibold">
              {translate ? "Health" : "Sức khỏe"}
            </p>
          </Link>
        </div>
        {healthLinks.map((item, index) => (
          <p
            className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor"
            key={index}
          >
            {translate ? item.courseE : item.course}
          </p>
        ))}
      </div>
      <div>
        <Link href={"/courses/hospitality"}>
          <div className="flex items-center justify-between">
            <p className="cursor-pointer text-md py-1 hover:text-orange font-semibold">
              {translate ? "Hospitality" : "Nhà hàng khách sạn"}
            </p>
          </div>
        </Link>
        {hospitalityLinks.map((item, index) => (
          <p
            className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor"
            key={index}
          >
            {translate ? item.courseE : item.course}
          </p>
        ))}
      </div>
      <div>
        <Link href={"/courses/design"}>
          <div className="flex items-center justify-between">
            <p className="cursor-pointer text-md py-1 hover:text-orange font-semibold">
              {translate ? "Design" : "Thiết kế"}
            </p>
          </div>
        </Link>
        {designLinks.map((item, index) => (
          <p
            className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor"
            key={index}
          >
            {translate ? item.courseE : item.course}
          </p>
        ))}
      </div>
      <div>
        <Link href={"/courses/management"}>
          <div className="flex items-center justify-between">
            <p className="cursor-pointer text-md py-1 hover:text-orange font-semibold">
              {translate ? "Management" : "Quản lý "}
            </p>
          </div>
        </Link>
        {managementLinks.map((item, index) => (
          <p
            className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor"
            key={index}
          >
            {translate ? item.courseE : item.course}
          </p>
        ))}
      </div>
      <div>
        <Link href={"/courses/trades"}>
          <div className="flex items-center justify-between">
            <p className="cursor-pointer text-md py-1 hover:text-orange font-semibold">
              {translate ? "Trades & Sports" : "Thương mại & Thể thao"}
            </p>
          </div>
        </Link>
        {tradeLinks.map((item, index) => (
          <p
            className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor"
            key={index}
          >
            {translate ? item.courseE : item.course}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
