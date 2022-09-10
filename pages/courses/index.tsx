import Link from "next/link";

export default function App() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 xl:grid-cols-6">
      <div className="flex flex-col items-center justify-center border-2 border-orange rounded-lg hover:border-lightBlue p-5">
        <p className="flex text-lg text-orange  items-center justify-center p-6">
          IT
        </p>
        <Link href={"/courses/information-technology"} className="">
          <p className="text-xl text-gray-700 text-thin md:pt-2 border-b-8 border-orange">
            READ MORE
          </p>
        </Link>
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
