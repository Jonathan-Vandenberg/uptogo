import Link from "next/link";
import Image from "next/image";
import image from "../../public/heroImages/girlAbroad.jpg";

export default function App() {
  return (
    <div className="bg-body md:flex-row flex-col-reverse flex items-center justify-center">
      <div className="bg-body flex items-center flex-col justify-center md:items-start w-full h-full">
        <h1 className="text-orange logoFont text-6xl py-6">Uptogo</h1>
        <p className="text-2xl text-gray-600">
          Study Abroad, <i>easily.</i>
        </p>
        <Link href={"/"}>
          <p className="text-xl text-gray-700 text-thin  pt-10 md:pt-12 border-b-8 border-orange">
            Find Courses
          </p>
        </Link>
      </div>
      <div className="h-full w-full">
        <Image
          src={image}
          alt="blog Image"
          width={600}
          height={339}
          layout="responsive"
        />
      </div>
    </div>
  );
}
