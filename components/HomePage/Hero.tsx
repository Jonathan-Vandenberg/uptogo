import Link from "next/link";
import Image from "next/image";
import logo from "../../public/uptogoLogoBig.png";

export default function App() {
  return (
    <div className="bg-white md:grid md:grid-cols-4 flex-col-reverse flex items-center justify-center">
      <div className="col-span-1"></div>
      <div className="bg-white flex items-center flex-col justify-center md:items-start w-full h-full md:col-span-1">
        <h1 className="text-gray-600 logoFont text-4xl pb-2 col-span-1">
          Study Abroad
        </h1>
        <p className="text-2xl text-gray-600">
          <i>easily.</i>
        </p>
        <Link href={"/courses"}>
          <p className="text-xl cursor-pointer text-gray-700 text-thin  pt-10 md:pt-12 border-b-8 border-orange">
            Find Courses
          </p>
        </Link>
      </div>
      <div className="h-full w-full col-span-2 max-w-[300px] block p-10">
        <Image
          src={logo}
          alt="blog Image"
          width={350}
          height={339}
          layout="responsive"
        />
      </div>
    </div>
  );
}
