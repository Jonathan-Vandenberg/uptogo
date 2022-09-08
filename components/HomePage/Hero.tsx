import Link from "next/link";
import Image from "next/image";
import image from "../../public/heroImages/girlAbroad.jpg";
import { Skeleton } from "@mui/material";

export default function App() {
  return (
    <div className="bg-body md:grid md:grid-cols-4 flex-col-reverse flex items-center justify-center">
      <div className="col-span-1"></div>
      <div className="bg-body flex items-center flex-col justify-center md:items-start w-full h-full md:col-span-1">
        <h1 className="text-orange logoFont text-6xl pb-6 col-span-1">
          Uptogo
        </h1>
        <p className="text-2xl text-gray-600">
          Study Abroad, <i>easily.</i>
        </p>
        <Link href={"/"}>
          <p className="text-xl text-gray-700 text-thin  pt-10 md:pt-12 border-b-8 border-orange">
            Find Courses
          </p>
        </Link>
      </div>
      <div className="h-full w-full col-span-2">
        <Skeleton width={600} height={339} variant="rectangular" />
        {/* <Image
          src={image}
          alt="blog Image"
          width={600}
          height={339}
          layout="responsive"
        /> */}
      </div>
    </div>
  );
}
