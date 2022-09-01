import Link from "next/link";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const NavbarTop = ({ onMouseEnter }: any) => {
  return (
    <div
      className="bg-gradient-to-r from-startColor to-endColor"
      onMouseEnter={onMouseEnter}
    >
      <div className="hidden lg:grid lg:grid-cols-3">
        <div className="flex items-center justify-evenly  whitespace-nowrap text-sm ">
          <p className="cursor-pointer text-gray-800 ">About Us</p>

          <p className="text-gray-800 ">Lorem</p>

          <p className=" text-gray-800 ">Lorem</p>

          <p className="text-gray-800 ">Lorem</p>
        </div>

        <input
          placeholder="Search keyword"
          className="input-field mx-auto my-2 h-7 max-w-[280px] self-center rounded-md px-2"
        />

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
