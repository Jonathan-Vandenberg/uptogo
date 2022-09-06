import Link from "next/link";
import Image from "next/image";
import image from "../../public/navDropdownImages/asianMale.jpg";

export default function App() {
  return (
    <div className="md:px-10 p-4 md:p-0 md:my-12 md:flex-row flex-col-reverse flex items-center justify-center">
      <div className="bg-white p-7 flex items-start flex-col justify-start w-full h-full md:w-2/5 pt-6 md:pt-16">
        <p className="text-gray-400 -mb-4 md:-mb-6 md:text-lg">
          INFORMATION TECHNOLOGY
        </p>
        <h1 className="text-gray-700 logoFont text-3xl py-6 md:py-12 leading-12">
          27 Comfy And Cute Fall Dresses You Can Wear Anywhere
        </h1>
        <Link href={"/"}>
          <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange">
            READ MORE
          </p>
        </Link>
        <p className="pt-4 text-2xl text-gray-600">
          Embrace the changing of the seasons in these chic and simple dresses.
        </p>
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
