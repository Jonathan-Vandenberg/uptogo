import CoursesBtn from "./CoursesBtn";
import Image from "next/image";
import { SoftwareDevelopment } from "../../types";

interface IProps {
  data: SoftwareDevelopment | null | undefined;
}

export default function App({ data }: IProps) {
  return (
    <div className="">
      {/* <div className="block">
        <Image
          src={data?.mainImage as string}
          alt={data?.category as string}
          layout="responsive"
        />
      </div>
      <CoursesBtn title="Learn More" link={data?.link}/> */}
    </div>
  );
}
