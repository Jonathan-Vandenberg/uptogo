import Link from "next/link";
import Image from "next/image";
import logo from "../../public/fullLogo.png";
import { motion } from "framer-motion";
import CoursesBtn from "../UI/CoursesBtn";

export default function App() {
  return (
    <div className="flex items-center  flex-col-reverse justify-center z-10 lg:pb-32">
      <CoursesBtn title="Find Courses" />
      <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 block z-10">
        <Image src={logo} alt="blog Image" layout="responsive" priority />
      </div>
    </div>
  );
}
