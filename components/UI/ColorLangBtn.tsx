import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../redux-hooks/hooks";
import TranslateBtn from "./TranslateBtn";
import BWWheel from "../../public/icons8-rgb-color-wheel-80.png";
import colorWheel from "../../public/icons8-rgb-color-wheel-96.png";
import { iconState } from "../../slices/bwSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const bw = useAppSelector((state) => state.iconState.bw);
  return (
    <span className="flex items-center space-x-5 justify-start pl-4 fixed bottom-0 left-0 w-screen h-12 bg-orange md:hidden">
      {!bw ? (
        <div onClick={() => dispatch(iconState(!bw))} className="block w-6 h-6">
          <Image src={colorWheel} alt="wheel" layout="responsive" />
        </div>
      ) : (
        <div onClick={() => dispatch(iconState(!bw))} className="block w-6 h-6">
          <Image src={BWWheel} alt="wheel" layout="responsive" />
        </div>
      )}
      <TranslateBtn />
    </span>
  );
}
