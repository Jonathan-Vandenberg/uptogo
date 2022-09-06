import Link from "next/link";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const NavbarTop = ({ onMouseEnter }: any) => {
  return (
    <div className="bg-sky-200" onMouseEnter={onMouseEnter}>
      <div className="hidden lg:grid lg:grid-cols-3">
        <div className="flex items-center justify-evenly  whitespace-nowrap text-sm ">
          <Link href={"/blogs"} className="cursor-pointer text-gray-800 ">
            Blog
          </Link>

          <p className="text-gray-800 ">Lorem</p>

          <p className=" text-gray-800 ">Lorem</p>

          <p className="text-gray-800 ">Lorem</p>
        </div>
        <div></div>
        <div className="flex items-center justify-evenly whitespace-nowrap">
          <Link href="/favorites">
            <div className="flex cursor-pointer items-center text-gray-800 ">
              <div className="px-2 text-red-400">
                <FaHeart />
              </div>
              <p>Favorites</p>
            </div>
          </Link>

          <div className="flex items-center text-gray-800 ">
            <div className="p-2 text-lg text-gray-800">
              <FaRegQuestionCircle />
            </div>
            <p>Lorem</p>
          </div>

          <div className="flex items-center justify-center text-gray-800 ">
            <div className="p-2 text-xl text-gray-800">
              <HiOutlineLocationMarker />
            </div>
            <p>Lorem</p>
          </div>

          <div className="p-2 text-xl text-gray-800">
            <FaMobileAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
