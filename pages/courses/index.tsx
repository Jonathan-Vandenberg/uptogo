import Link from "next/link";
import Image from "next/image";
import it from "../../public/courseMain/it/Data_Management.jpeg";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 xl:grid-cols-6">
      <div
        className="flex items-center justify-center flex-col cursor-pointer"
        onClick={() => router.push("/courses/information-technology")}
      >
        <div className="w-full h-full relative">
          <Image
            src={it}
            alt="IT image"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="" // just an example
          />
        </div>
        <div className="text-lg text-gray-700 bg-sky-100 w-full text-center py-2">
          IT Majors
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-orange rounded-lg hover:border-lightBlue p-5">
        <p className="flex text-lg text-orange  items-center justify-center p-6">
          Managament
        </p>
        <Link href={"/courses/managament"} className="">
          <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange">
            READ MORE
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-orange rounded-lg hover:border-lightBlue p-5">
        <p className="flex text-lg text-orange  items-center justify-center p-6">
          Design
        </p>
        <Link href={"/courses/design"} className="">
          <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange">
            READ MORE
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-orange rounded-lg hover:border-lightBlue p-5">
        <p className="flex text-lg text-orange  items-center justify-center p-6">
          Health
        </p>
        <Link href={"/courses/health"} className="">
          <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange">
            READ MORE
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-orange rounded-lg hover:border-lightBlue p-5">
        <p className="flex text-lg text-orange  items-center justify-center p-6">
          Hospitality
        </p>
        <Link href={"/courses/hospitality"} className="">
          <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange">
            READ MORE
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-orange rounded-lg hover:border-lightBlue p-5">
        <p className="flex text-lg text-orange  items-center justify-center p-6">
          Trades
        </p>
        <Link href={"/courses/trades"} className="">
          <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange">
            READ MORE
          </p>
        </Link>
      </div>
    </div>
  );
}
