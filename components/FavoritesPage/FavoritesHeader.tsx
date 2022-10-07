import Link from "next/link";
import { useAppSelector } from "../../redux-hooks/hooks";

interface IProps {
  localStorageKeys: string[];
  favoriteType: string;
  findMoreLink: string;
}

export default function FavoritesHeader({
  localStorageKeys,
  favoriteType,
  findMoreLink,
}: IProps) {
  const translate = useAppSelector((state) => state.translationState.translate);
  const finalS = translate ? (localStorageKeys.length === 1 ? "" : "s") : null;
  return (
    <div className="mx-auto my-12 flex flex-col items-center space-y-3 bg-body px-3 py-8 shadow md:my-12 md:px-28 xl:flex xl:flex-row xl:items-center xl:justify-evenly">
      <div className="md:col-span-1 md:grid">
        <div className="flex items-center justify-start space-x-2">
          <p>{translate ? "You have" : "Bạn có"}</p>
          <p className="font-semibold text-iwanttoColor">
            {localStorageKeys.length}
          </p>{" "}
          <p>
            {favoriteType}
            {finalS}.
          </p>
        </div>
      </div>

      <div className="col-span-1 md:grid">
        <Link href={findMoreLink}>
          {localStorageKeys.length === 0 ? (
            <p className="cursor-pointer text-iwanttoColor">
              {translate ? "find some" : "Tìm kiếm"}
            </p>
          ) : (
            <p className="cursor-pointer text-iwanttoColor">
              {translate ? "find more" : "Tìm thêm"}
            </p>
          )}
        </Link>
      </div>
    </div>
  );
}
