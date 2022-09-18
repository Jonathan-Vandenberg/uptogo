import { motion } from "framer-motion";
import Link from "next/link";
import { BsNewspaper } from "react-icons/bs";
import {
  FaBlog,
  FaBlogger,
  FaGraduationCap,
  FaHackerNews,
  FaNewspaper,
} from "react-icons/fa";
import { GrBlog } from "react-icons/gr";
import { HiNewspaper } from "react-icons/hi";
import {
  MdCall,
  MdCastForEducation,
  MdEmail,
  MdOutlineCastForEducation,
} from "react-icons/md";

export default function App() {
  return (
    <div className="p-2 fixed bg-darkBlue shadow-lg rounded-full bottom-5 z-50 right-5 md:hidden">
      <div className="flex items-center justify-center space-x-8 px-4">
        <Link href={"/courses"}>
          <FaGraduationCap color="white" size={35} />
        </Link>
        <a href="mailto: info@uptogo.org">
          <MdEmail color="white" size={35} />
        </a>
        <motion.div
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{
            rotateX: 360,
            rotateY: 360,
            transition: { duration: 2, repeat: 6, repeatDelay: 20 },
          }}
        >
          <a href="tel:+84926561080">
            <MdCall color="white" size={35} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
