import Image from "next/image";
import logo from "../../public/fullLogo.png";
import { useAppSelector } from "../../redux-hooks/hooks";
import CoursesBtn from "../UI/CoursesBtn";

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="flex items-center  flex-col-reverse justify-center z-10 lg:pb-32">
      <CoursesBtn title={translate ? "Find Courses" : "Tìm kiếm khóa học"} />
      <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 block z-10">
        <Image src={logo} alt="blog Image" layout="responsive" priority />
      </div>
    </div>
  );
}
