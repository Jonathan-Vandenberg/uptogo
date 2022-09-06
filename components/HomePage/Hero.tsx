import Link from "next/link";
import Image from "next/image";
import image from "../../public/navDropdownImages/asianMale.jpg";

export default function App() {
  return (
    <div className=" md:px-10 p-4 md:p-0 md:my-12 md:flex-row flex-col-reverse flex items-center justify-center">
      <div className="bg-white p-7 flex items-start flex-col justify-between w-full h-full md:w-2/5 pt-6">
        <h1 className="text-orange logoFont text-6xl leading-12">Uptogo</h1>
        <p className="pt-4 text-2xl text-gray-600">
          Taking you abroad, easily.
        </p>
        <Link href={"/"}>
          <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange mt-12">
            Find Your Major
          </p>
        </Link>
      </div>
      <div className="w-full md:w-3/5 bg-red-100">
        <Image
          src={image}
          alt="blog Image"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </div>
  );
}
