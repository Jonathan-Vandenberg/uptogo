import Link from "next/link";
import Image from "next/image";
import logo from "../../public/uptogoFavicon.png";
import { motion } from "framer-motion";

export default function EmailButton() {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center"
    >
      <button className="text-center font-semibold px-4 flex items-center justify-center space-x-3 border-orange border-2 rounded-full text-orange hover:bg-orange hover:text-white py-1">
        <div className="bg-white p-1 rounded-full flex items-center justify-center box-shadow">
          <Image src={logo} alt="logo" width={30} height={30} />
        </div>
        <a href="mailto:info@uptogo.org">Contact Us</a>
      </button>
    </motion.div>
  );
}
