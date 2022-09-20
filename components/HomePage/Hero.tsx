import Link from "next/link";
import Image from "next/image";
import logo from "../../public/fullLogo.png";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex items-center  flex-col-reverse justify-center z-10">
      <motion.div
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
        className="z-10"
      >
        <Link href={"/courses"}>
          <p className="md:text-lg lg:text-xl  cursor-pointer text-gray-700 border-b-8 rounded-full px-6 py-2 mt-12 border-orange border-2">
            Find Courses
          </p>
        </Link>
      </motion.div>
      <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 block z-10">
        <Image src={logo} alt="blog Image" layout="responsive" priority />
      </div>
    </div>
  );
}
