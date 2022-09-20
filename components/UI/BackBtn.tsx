import { useRouter } from "next/router";
import { AiFillLeftCircle } from "react-icons/ai";
import {
  BsArrowLeft,
  BsChatLeft,
  BsChevronBarLeft,
  BsChevronLeft,
} from "react-icons/bs";

export default function Page() {
  const router = useRouter();

  return (
    <div
      className="text-semibold flex items-center justify-center bg-darkBlue rounded-full w-auto"
      onClick={() => router.back()}
    >
      <BsChevronLeft color="white" size={20} />
    </div>
  );
}
