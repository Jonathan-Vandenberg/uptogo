import { GrLanguage } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "../../redux-hooks/hooks";
import { translationState } from "../../slices/translationSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-center space-x-1"
        onClick={() => dispatch(translationState(!translate))}
      >
        <div className="text-xl">
          <GrLanguage size={20} />
        </div>
        {!translate && <p>EN</p>}
        {translate && <p>VN</p>}
      </div>
    </div>
  );
}
