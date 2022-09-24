import { motion } from "framer-motion";
import Link from "next/link";

interface IProps {
  title: string;
  link: string;
}

export default function App({ title, link }: IProps) {
  return (
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
          {title}
        </p>
      </Link>
    </motion.div>
  );
}
